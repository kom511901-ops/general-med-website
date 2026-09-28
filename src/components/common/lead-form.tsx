'use client';

import { useId, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/;

const leadSchema = z.object({
  name: z.string().trim().min(2, 'Введите имя (не менее 2 символов)'),
  phone: z.string().regex(phoneRegex, 'Введите телефон в формате +7 (XXX) XXX-XX-XX'),
  email: z.union([z.literal(''), z.string().email('Введите корректный email')]),
  clinic: z.string(),
  comment: z.string(),
  consent: z.boolean().refine((value) => value, 'Необходимо согласие'),
});

type LeadFormValues = z.infer<typeof leadSchema>;
type LeadFormInput = z.input<typeof leadSchema>;

interface LeadFormProps {
  onSuccess?: () => void;
  variant?: 'inline' | 'dialog';
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';

  const nationalDigits = digits.startsWith('7') || digits.startsWith('8') ? digits.slice(1) : digits;
  const parts = [nationalDigits.slice(0, 3), nationalDigits.slice(3, 6), nationalDigits.slice(6, 8), nationalDigits.slice(8, 10)];
  let formatted = '+7';
  if (parts[0]) formatted += ` (${parts[0]}`;
  if (parts[0]?.length === 3) formatted += ')';
  if (parts[1]) formatted += ` ${parts[1]}`;
  if (parts[2]) formatted += `-${parts[2]}`;
  if (parts[3]) formatted += `-${parts[3]}`;
  return formatted;
}

export default function LeadForm({ onSuccess, variant = 'inline' }: LeadFormProps) {
  const id = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LeadFormInput, unknown, LeadFormValues>({
    resolver: zodResolver(leadSchema),
    mode: 'onBlur',
    defaultValues: { name: '', phone: '', email: '', clinic: '', comment: '', consent: false },
  });

  const submitLead = async (values: LeadFormValues) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      // TODO: интеграция с CRM/email.
      console.log('Lead request:', values);
      toast.success('Спасибо! Перезвоним в течение 30 минут');
      reset();
      onSuccess?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClassName = 'h-11';

  return (
    <form onSubmit={handleSubmit(submitLead)} className={cn('space-y-4', variant === 'dialog' && 'space-y-3')} noValidate>
      <div className="space-y-2">
        <Label htmlFor={`${id}-name`}>Имя</Label>
        <Input id={`${id}-name`} className={fieldClassName} autoComplete="name" placeholder="Ваше имя" aria-invalid={Boolean(errors.name)} {...register('name')} />
        {errors.name && <p className="text-sm text-destructive" role="alert">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${id}-phone`}>Телефон</Label>
        <Input
          id={`${id}-phone`}
          className={fieldClassName}
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+7 (___) ___-__-__"
          aria-invalid={Boolean(errors.phone)}
          {...register('phone', {
            onChange: (event) => setValue('phone', formatPhone(event.target.value), { shouldValidate: false }),
          })}
        />
        {errors.phone && <p className="text-sm text-destructive" role="alert">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${id}-email`}>Email <span className="font-normal text-muted-foreground">(необязательно)</span></Label>
        <Input id={`${id}-email`} className={fieldClassName} type="email" autoComplete="email" placeholder="name@clinic.ru" aria-invalid={Boolean(errors.email)} {...register('email')} />
        {errors.email && <p className="text-sm text-destructive" role="alert">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${id}-clinic`}>Название клиники <span className="font-normal text-muted-foreground">(необязательно)</span></Label>
        <Input id={`${id}-clinic`} className={fieldClassName} autoComplete="organization" placeholder="Название клиники" {...register('clinic')} />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${id}-comment`}>Комментарий <span className="font-normal text-muted-foreground">(необязательно)</span></Label>
        <Textarea id={`${id}-comment`} rows={3} placeholder="Что нужно оснастить, какой бюджет, сроки" {...register('comment')} />
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            id={`${id}-consent`}
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            aria-invalid={Boolean(errors.consent)}
            {...register('consent')}
          />
          <Label htmlFor={`${id}-consent`} className="text-sm leading-relaxed font-normal">
            Согласен с <a href="/privacy" className="text-brand-600 underline underline-offset-4 hover:text-brand-700 dark:text-brand-400">обработкой персональных данных</a>
          </Label>
        </div>
        {errors.consent && <p className="text-sm text-destructive" role="alert">{errors.consent.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-brand-500 to-accent-500 text-white hover:from-brand-600 hover:to-accent-600">
        {isSubmitting ? <><Loader2 className="animate-spin" aria-hidden="true" />Отправляем...</> : <><Send aria-hidden="true" />Отправить заявку</>}
      </Button>
    </form>
  );
}

'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, LoaderCircle } from 'lucide-react';
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
  consent: z.boolean().refine((value) => value, 'Необходимо согласие на обработку персональных данных'),
});

type LeadFormValues = z.infer<typeof leadSchema>;

interface LeadFormProps {
  onSuccess?: () => void;
  className?: string;
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

export default function LeadForm({ onSuccess, className }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    mode: 'onBlur',
    defaultValues: { name: '', phone: '', email: '', clinic: '', comment: '', consent: false },
  });

  const submitLead = async (values: LeadFormValues) => {
    setIsSubmitting(true);
    try {
      // TODO: integrate with CRM/email when the lead endpoint is available.
      console.log('Lead request:', values);
      toast.success('Спасибо! Перезвоним в течение 30 минут');
      onSuccess?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClassName = 'h-11';

  return (
    <form onSubmit={handleSubmit(submitLead)} className={cn('space-y-4', className)} noValidate>
      <div className="space-y-2">
        <Label htmlFor="lead-name">Имя</Label>
        <Input id="lead-name" autoComplete="name" placeholder="Ваше имя" aria-invalid={Boolean(errors.name)} {...register('name')} />
        {errors.name && <p className="text-sm text-destructive" role="alert">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-phone">Телефон</Label>
        <Input
          id="lead-phone"
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
        <Label htmlFor="lead-email">Email <span className="font-normal text-muted-foreground">(необязательно)</span></Label>
        <Input id="lead-email" className={fieldClassName} type="email" autoComplete="email" placeholder="name@clinic.ru" aria-invalid={Boolean(errors.email)} {...register('email')} />
        {errors.email && <p className="text-sm text-destructive" role="alert">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-clinic">Название клиники <span className="font-normal text-muted-foreground">(необязательно)</span></Label>
        <Input id="lead-clinic" className={fieldClassName} autoComplete="organization" placeholder="Название клиники" {...register('clinic')} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-comment">Комментарий <span className="font-normal text-muted-foreground">(необязательно)</span></Label>
        <Textarea id="lead-comment" rows={3} placeholder="Что нужно оснастить, какой бюджет, сроки" {...register('comment')} />
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            id="lead-consent"
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            aria-invalid={Boolean(errors.consent)}
            {...register('consent')}
          />
          <Label htmlFor="lead-consent" className="text-sm leading-relaxed font-normal">
            Согласен с <a href="/privacy" className="text-brand-600 underline underline-offset-4 hover:text-brand-700 dark:text-brand-400">политикой обработки персональных данных</a>
          </Label>
        </div>
        {errors.consent && <p className="text-sm text-destructive" role="alert">{errors.consent.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-brand-500 to-accent-500 text-white hover:from-brand-600 hover:to-accent-600">
        {isSubmitting ? <><LoaderCircle className="animate-spin" aria-hidden="true" />Отправляем...</> : <><CheckCircle2 aria-hidden="true" />Отправить заявку</>}
      </Button>
    </form>
  );
}

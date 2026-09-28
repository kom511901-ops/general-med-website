'use client';

import { useId, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const subscriptionSchema = z.object({
  email: z.string().email('Введите корректный email'),
});

type SubscriptionValues = z.infer<typeof subscriptionSchema>;

export default function SubscriptionForm() {
  const id = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscriptionValues>({
    resolver: zodResolver(subscriptionSchema),
    mode: 'onBlur',
    defaultValues: { email: '' },
  });

  const subscribe = async (values: SubscriptionValues) => {
    setIsSubmitting(true);
    try {
      // TODO: интеграция с email-сервисом.
      console.log('Newsletter subscription:', values);
      toast.success('Спасибо! Подпишем в течение минуты');
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(subscribe)} noValidate>
      <div className="flex gap-2">
        <Input
          id={id}
          type="email"
          autoComplete="email"
          placeholder="Ваш email"
          aria-label="Ваш email для подписки"
          aria-invalid={Boolean(errors.email)}
          className="h-10 min-w-0 border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500"
          {...register('email')}
        />
        <Button type="submit" variant="secondary" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="animate-spin" aria-label="Отправка" /> : 'Подписаться'}
        </Button>
      </div>
      {errors.email && <p className="text-sm text-red-300" role="alert">{errors.email.message}</p>}
    </form>
  );
}

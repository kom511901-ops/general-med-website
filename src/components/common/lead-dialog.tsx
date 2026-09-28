'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import LeadForm from '@/components/common/lead-form';

interface LeadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LeadDialog({ open, onOpenChange }: LeadDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Оставить заявку</DialogTitle>
          <DialogDescription>Перезвоним в течение 30 минут</DialogDescription>
        </DialogHeader>
        <LeadForm variant="dialog" onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}

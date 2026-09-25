'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface LeadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LeadDialog({ open, onOpenChange }: LeadDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Оставить заявку</DialogTitle>
          <DialogDescription>Форма скоро появится.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

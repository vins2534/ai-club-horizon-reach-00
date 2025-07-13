import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, Edit } from 'lucide-react';
import { format } from 'date-fns';

interface AddEditDialogProps {
  mode: 'add' | 'edit';
  entityType: string;
  item?: any;
  fields: { key: string; label: string; type: 'text' | 'textarea' | 'date' | 'url' }[];
  onSave: (data: any) => void;
  onCancel?: () => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AddEditDialog({ 
  mode, 
  entityType, 
  item, 
  fields, 
  onSave, 
  onCancel,
  isOpen = false,
  onOpenChange 
}: AddEditDialogProps) {
  const [formData, setFormData] = useState<any>({});
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    if (item && mode === 'edit') {
      setFormData(item);
    } else {
      setFormData({});
    }
  }, [item, mode]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setOpen(false);
    if (onOpenChange) onOpenChange(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (onOpenChange) onOpenChange(newOpen);
    if (!newOpen && onCancel) onCancel();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant={mode === 'add' ? 'default' : 'outline'} size={mode === 'add' ? 'default' : 'sm'}>
          {mode === 'add' ? (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </>
          ) : (
            <Edit className="h-4 w-4" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? `Add New ${entityType}` : `Edit ${entityType}`}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.key} className="space-y-2">
              <Label htmlFor={field.key}>{field.label}</Label>
              {field.type === 'textarea' ? (
                <Textarea
                  id={field.key}
                  value={formData[field.key] || ''}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              ) : field.type === 'date' ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData[field.key] ? format(new Date(formData[field.key]), 'PPP') : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData[field.key] ? new Date(formData[field.key]) : undefined}
                      onSelect={(date) => setFormData({ ...formData, [field.key]: date?.toISOString().split('T')[0] })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              ) : (
                <Input
                  id={field.key}
                  type={field.type === 'url' ? 'url' : 'text'}
                  value={formData[field.key] || ''}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {mode === 'add' ? 'Add' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
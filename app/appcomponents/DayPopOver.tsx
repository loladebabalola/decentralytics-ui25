'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

type DayPopoverProps = {
  trigger: React.ReactElement;
  content: React.ReactNode;
};

export function DayPopover({
  trigger,
  content,
}: DayPopoverProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content
          className='w-[667px] bg-[#151C23] rounded-[12px] fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2'
        >
          <VisuallyHidden asChild>
            <Dialog.Description>Info about this day’s event</Dialog.Description>
          </VisuallyHidden>
           <VisuallyHidden asChild>
            <Dialog.Title>
              Event Details
            </Dialog.Title>
          </VisuallyHidden>
          {content}
          {/* <DialogPrimitive.Arrow className="fill-[#151C23]" /> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

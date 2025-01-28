import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        Required textarea <span className="text-destructive">*</span>
      </Label>
      <Textarea id={id} placeholder="Leave a message" required />
    </div>
  );
}

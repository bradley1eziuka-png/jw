import { useId, useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, RotateCcw } from "lucide-react";
import { business, formIsLive, phoneDisplay, phoneHref } from "@/lib/business";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/** Service dropdown options come straight from services.ts (enabled services only). */
const SERVICE_OPTIONS = [...services.map((s) => s.title), "Other"];

type FormState = {
  fullName: string;
  phone: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<"fullName" | "phone" | "service", string>>;
type Status = "idle" | "sending" | "success" | "error";

/** Basic phone check: 10–15 digits once punctuation is stripped. */
function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function validate(v: FormState): Errors {
  const errors: Errors = {};
  if (!v.fullName.trim()) errors.fullName = "Please enter your name.";
  if (!v.phone.trim()) errors.phone = "Please enter your phone number.";
  else if (!isValidPhone(v.phone)) errors.phone = "Please enter a valid phone number.";
  if (!v.service) errors.service = "Please choose a service.";
  return errors;
}

export function EstimateForm({
  id,
  variant = "card",
  className = "",
  defaultService = "",
  showHeading = true,
}: {
  id?: string;
  variant?: "card" | "plain";
  className?: string;
  /** Preselects a service (used on individual service pages). Must match a service title. */
  defaultService?: string;
  /** Hide the "Get a Free Estimate" heading when the surrounding section already has one. */
  showHeading?: boolean;
}) {
  const uid = useId();
  const emptyState: FormState = { fullName: "", phone: "", service: defaultService, message: "" };
  const [values, setValues] = useState<FormState>(emptyState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [attempted, setAttempted] = useState(false);
  const honeypot = useRef<HTMLInputElement>(null);
  const inFlight = useRef(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      if (attempted) setErrors(validate(next));
      return next;
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (inFlight.current || status === "sending") return; // block duplicate submissions

    setAttempted(true);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Bots fill the hidden field; humans never see it. Pretend success, send nothing.
    if (honeypot.current?.value) {
      setStatus("success");
      return;
    }

    // No endpoint configured yet: nothing is sent.
    if (!formIsLive) {
      setStatus("success");
      return;
    }

    inFlight.current = true;
    setStatus("sending");
    try {
      const res = await fetch(business.form.endpoint.trim(), {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.fullName.trim(),
          phone: values.phone.trim(),
          service: values.service,
          message: values.message.trim(),
          _subject: `New estimate request from ${values.fullName.trim()} (${values.service})`,
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }

  function reset() {
    setValues(emptyState);
    setErrors({});
    setAttempted(false);
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div
        className={`flex flex-col items-center rounded-2xl border border-border bg-card text-center shadow-sm ${
          variant === "card" ? "p-7 sm:p-8" : "p-6"
        } ${className}`}
        role="status"
        aria-live="polite"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-foreground">{business.form.successTitle}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {business.form.successMessage.replace("{name}", business.name)}
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={reset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Send another request
        </Button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Free estimate request form"
      aria-busy={sending}
      className={`flex flex-col gap-4 ${
        variant === "card"
          ? "rounded-2xl border border-border bg-card p-6 shadow-[0_18px_45px_-20px_rgba(16,89,27,0.28)] sm:p-7"
          : ""
      } ${className}`}
    >
      {showHeading ? (
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-bold text-foreground">Get a Free Estimate</h3>
          <p className="text-sm text-muted-foreground">
            Tell us what you need cleaned, and Willy will get in touch to discuss your project.
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-name`} className="text-sm font-medium">
            Full Name <span className="text-primary">*</span>
          </Label>
          <Input
            id={`${uid}-name`}
            name="name"
            autoComplete="name"
            placeholder="Jane Doe"
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="h-11"
            required
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? `${uid}-name-err` : undefined}
            disabled={sending}
          />
          {errors.fullName ? (
            <p id={`${uid}-name-err`} className="text-xs font-medium text-destructive">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-phone`} className="text-sm font-medium">
            Phone Number <span className="text-primary">*</span>
          </Label>
          <Input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="h-11"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
            disabled={sending}
          />
          {errors.phone ? (
            <p id={`${uid}-phone-err`} className="text-xs font-medium text-destructive">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-service`} className="text-sm font-medium">
            Service Needed <span className="text-primary">*</span>
          </Label>
          <Select
            value={values.service}
            onValueChange={(v) => update("service", v)}
            disabled={sending}
          >
            <SelectTrigger
              id={`${uid}-service`}
              className="h-11 w-full"
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? `${uid}-service-err` : undefined}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service ? (
            <p id={`${uid}-service-err`} className="text-xs font-medium text-destructive">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-message`} className="text-sm font-medium">
            Message / Project Details <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Textarea
            id={`${uid}-message`}
            name="message"
            rows={4}
            placeholder="Tell us what needs cleaning, where you're located, and when you'd like service..."
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className="resize-none"
            disabled={sending}
          />
        </div>

        {/* Spam trap: invisible to people, tempting to bots. */}
        <div aria-hidden className="sr-only">
          <label>
            Leave this field empty
            <input ref={honeypot} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 p-3.5 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            {business.form.errorMessage}{" "}
            <a href={phoneHref} className="font-semibold underline underline-offset-2">
              {phoneDisplay}
            </a>
          </p>
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="mt-1 h-12 w-full text-base font-semibold"
        disabled={sending}
      >
        {sending ? "Sending…" : "Get My Free Estimate"}
      </Button>
    </form>
  );
}

"use client";

import { useId, useState, type ChangeEvent, type Ref } from "react";

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M3 3l18 18M10.6 10.7a3 3 0 0 0 4.2 4.2M6.5 6.6C4 8.1 2 12 2 12s3.5 7 10 7c1.9 0 3.5-.5 4.8-1.2M9.9 5.2A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a15.6 15.6 0 0 1-2.4 3.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const baseFieldClass =
  "w-full rounded-[10px] border border-peace-gray bg-transparent px-[25px] py-[12px] text-base font-light text-peace-heading outline-none transition-colors focus:border-peace-primary";

const inputFieldClass = `${baseFieldClass} h-[65px]`;
const textareaFieldClass = `${baseFieldClass} resize-none py-[20px]`;

export function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: string;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-peace-heading">
      {children}
      {required && <span className="ml-1 text-peace-primary">*</span>}
    </label>
  );
}

export function TextField({
  label,
  required,
  maxLength,
  placeholder,
  type = "text",
  defaultValue = "",
  name,
}: {
  label: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  name?: string;
}) {
  const id = useId();
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={inputFieldClass}
      />
    </div>
  );
}

export function PasswordField({
  label,
  required,
  placeholder,
  name,
  autoComplete,
  minLength,
  ref,
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  name?: string;
  autoComplete?: string;
  minLength?: number;
  ref?: Ref<HTMLInputElement>;
}) {
  const id = useId();
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={visible ? "text" : "password"}
          required={required}
          minLength={minLength}
          placeholder={placeholder}
          autoComplete={autoComplete}
          ref={ref}
          className={`${inputFieldClass} pr-14`}
        />
        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-peace-gray-muted transition-colors hover:text-peace-primary"
        >
          <EyeIcon open={visible} />
        </button>
      </div>
    </div>
  );
}

export function CounterTextField({
  label,
  required,
  maxLength,
  placeholder,
  name,
}: {
  label: string;
  required?: boolean;
  maxLength: number;
  placeholder?: string;
  name?: string;
}) {
  const id = useId();
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <FieldLabel htmlFor={id} required={required}>
          {label}
        </FieldLabel>
        <span className="text-xs text-peace-gray-muted">
          {value.length}/{maxLength}
        </span>
      </div>
      <input
        id={id}
        name={name}
        type="text"
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={inputFieldClass}
      />
    </div>
  );
}

export function CounterTextArea({
  label,
  required,
  maxLength,
  placeholder,
  name,
  rows = 4,
}: {
  label: string;
  required?: boolean;
  maxLength: number;
  placeholder?: string;
  name?: string;
  rows?: number;
}) {
  const id = useId();
  const [value, setValue] = useState("");

  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <FieldLabel htmlFor={id} required={required}>
          {label}
        </FieldLabel>
        <span className="text-xs text-peace-gray-muted">
          {value.length}/{maxLength}
        </span>
      </div>
      <textarea
        id={id}
        name={name}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        className={textareaFieldClass}
      />
    </div>
  );
}

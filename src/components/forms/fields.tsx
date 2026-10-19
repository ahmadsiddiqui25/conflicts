"use client";

import { useId, useState, type ChangeEvent } from "react";

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

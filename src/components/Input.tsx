export function Input({
  ref,
  className,
  type,
  onChange,
  value,
  placeholder,
  onClick,
}: {
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
  type?: "text" | "email" | "password" | "file";
  value?: string | null;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
}) {
  return (
    <input
      ref={ref}
      className={`${className} border border-border rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-sm`}
      type={type ? type : "text"}
      value={value ?? ""}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      onClick={onClick}
    />
  );
}

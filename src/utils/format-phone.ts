export function toE164Serbia(value: string): string {
  const digits = value.replace(/\D/g, "");

  if (digits.startsWith("381")) {
    return `+${digits}`;
  }

  if (digits.startsWith("0")) {
    return `+381${digits.slice(1)}`;
  }

  return `+${digits}`;
}

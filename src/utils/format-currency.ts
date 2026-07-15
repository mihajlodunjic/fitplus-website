const rsdFormatter = new Intl.NumberFormat("sr-RS");

export function formatRsd(value: number): string {
  return `${rsdFormatter.format(value)} RSD`;
}

export function formatSupplement(value: number): string {
  return `+${rsdFormatter.format(value)} RSD`;
}

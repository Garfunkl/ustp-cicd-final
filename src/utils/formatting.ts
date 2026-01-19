export function formatDate(date: Date | null | undefined): string {
  if (!date) return ''
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatCurrency(
  amount: number,
  currency: string = 'USD'
): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export function formatNumber(
  number: number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat('en-US', options).format(number)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  
  // If the text at maxLength is a space, don't include it
  const truncated = text.slice(0, maxLength)
  return truncated.trim() + '...'
}
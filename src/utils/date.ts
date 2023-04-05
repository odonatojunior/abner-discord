export default function formatDate(
  date: Date,
  dateStyle?: 'full' | 'long' | 'medium' | 'short' | undefined
) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle,
  }).format(date)
}

export function createSlug(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w-]+/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export function adaptDate(dateString) {
  const d = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const n = d.toLocaleDateString('en-US', options)
  return n
}
import { useEffect } from 'react'

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  useEffect(() => {
    const id = `json-ld-${(data.name as string) || (data['@type'] as string)}`
    if (document.getElementById(id)) return
    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', ...data })
    document.head.appendChild(script)
    return () => { const el = document.getElementById(id); if (el) el.remove() }
  }, [data])
  return null
}

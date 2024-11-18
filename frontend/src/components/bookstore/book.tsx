interface Book {
  title: string
  category: string[]
  url: string
}

export default function Book ({ title, category, url }: Book) {
  return <div>{title}</div>
}

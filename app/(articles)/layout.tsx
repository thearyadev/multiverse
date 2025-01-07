export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      {children}
    </div>
  )
}

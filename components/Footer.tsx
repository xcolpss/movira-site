export default function Footer(){
  return (
    <footer className="mt-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-10 flex items-center justify-between text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Movira Studios</p>
        <div className="flex gap-4">
          <a href="https://youtube.com" target="_blank">YouTube</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="mailto:hello@movira.studio">hello@movira.studio</a>
        </div>
      </div>
    </footer>
  )
}

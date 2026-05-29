export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between">
        <h1 className="font-extrabold text-xl">
          TRẦN HUY LAND
        </h1>

        <nav className="flex gap-6 text-sm">
          <a href="#">Trang Chủ</a>
          <a href="#listing-section">Nhà Đất</a>
        </nav>
      </div>
    </header>
  );
}
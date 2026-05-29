import './globals.css';

export const metadata = {
  title: 'Trần Huy Land',
  description: 'Kho nhà đất chính chủ Đà Nẵng',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
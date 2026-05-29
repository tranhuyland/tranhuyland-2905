// Đây là code dành cho file: app/property/[id]/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 1. Định nghĩa params là một Promise theo chuẩn Next.js 15
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// 2. Thêm "async" vào hàm component
export default async function PropertyDetailPage({ params }: PageProps) {
  // 3. Dùng "await" để lấy id ra một cách bất đồng bộ
  const { id } = await params;

  return (
    <>
      <Header />
      
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
          Chi tiết bất động sản
        </h1>
        <p style={{ backgroundColor: '#f3f4f6', padding: '12px', borderRadius: '6px', inlineSize: 'fit-content' }}>
          Đang xem bất động sản có ID: <strong>{id}</strong>
        </p>

        {/* Bạn có thể chèn thêm các component chi tiết của bạn tại đây */}
      </div>

      <Footer />
    </>
  );
}

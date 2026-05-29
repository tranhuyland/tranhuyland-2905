import Image from 'next/image';
import { fetchProperties } from '@/lib/fetchProperties';

export default async function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const properties: any = await fetchProperties();

  const property = properties.find(
    (item: any) => String(item.id) === params.id
  );

  const image = property?.anh?.split(',')[0];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="relative aspect-video rounded-3xl overflow-hidden mb-8">
        <Image
          src={image}
          alt={property.tieude}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-extrabold mb-4">
        {property.tieude}
      </h1>

      <div className="mb-8">
        <span className="bg-amber-100 text-amber-700 px-5 py-3 rounded-2xl font-bold">
          {property.gia}
        </span>
      </div>

      <p className="text-slate-600 whitespace-pre-line">
        {property.moTa}
      </p>
    </main>
  );
}
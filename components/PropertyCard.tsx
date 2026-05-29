import Link from 'next/link';
import Image from 'next/image';

export default function PropertyCard({ property }: any) {
  const image = property?.anh?.split(',')[0];

  return (
    <Link href={`/property/${property.id}`}>
      <article className="bg-white rounded-3xl overflow-hidden shadow border">
        <div className="relative aspect-[4/3]">
          <Image
            src={image}
            alt={property.tieude}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="font-bold line-clamp-2">
            {property.tieude}
          </h3>

          <div className="mt-3 text-amber-600 font-bold">
            {property.gia}
          </div>
        </div>
      </article>
    </Link>
  );
}
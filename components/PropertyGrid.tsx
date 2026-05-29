import PropertyCard from './PropertyCard';
import { fetchProperties } from '@/lib/fetchProperties';

export default async function PropertyGrid() {
  const properties: any = await fetchProperties();

  return (
    <section
      id="listing-section"
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property: any) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { PropertyCard, Property } from "@/components/PropertyCard";

interface FeaturedPropertiesProps {
  title?: string;
  subtitle?: string;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  title = "Featured Properties",
  subtitle = "Explore our handpicked selection of properties",
}) => {
  // Mock data for properties
  const featuredProperties: Property[] = [
    {
      id: 1,
      title: "Luxury Waterfront Villa",
      address: "123 Lakeview Dr, Orlando, FL",
      price: 1250000,
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3500,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
      type: "House",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Modern Downtown Apartment",
      address: "456 City Center, Miami, FL",
      price: 450000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      type: "Apartment",
      isNew: true,
    },
    {
      id: 3,
      title: "Charming Suburban Home",
      address: "789 Oak St, Tampa, FL",
      price: 625000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2400,
      image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80",
      type: "House",
      isFeatured: true,
    },
    {
      id: 4,
      title: "Coastal Condo with Ocean Views",
      address: "101 Beach Blvd, Jacksonville, FL",
      price: 875000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      type: "Condo",
      isNew: true,
    },
  ];

  return (
    <section className="py-16 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

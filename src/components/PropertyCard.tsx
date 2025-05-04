import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bed, Bath, MapPin } from "lucide-react";

export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  type: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { id, title, address, price, bedrooms, bathrooms, sqft, image, type, isNew, isFeatured } = property;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/property/${id}`}>
      <Card className="property-card h-full">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-2">
            {isNew && (
              <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
            )}
            {isFeatured && (
              <Badge className="bg-primary hover:bg-primary/90">Featured</Badge>
            )}
            <Badge className="bg-black/70 hover:bg-black/80 backdrop-blur-md">{type}</Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{address}</span>
          </div>
          <p className="text-xl font-bold text-primary mt-2">{formatPrice(price)}</p>
          
          <div className="grid grid-cols-3 gap-2 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v7H4V5zm0 9v1h12v-1H4z" clipRule="evenodd" />
              </svg>
              <span>{sqft} sqft</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="text-xs text-muted-foreground">ID: {id}</span>
          <span className="text-xs font-medium text-primary hover:underline">View Details</span>
        </CardFooter>
      </Card>
    </Link>
  );
};


import React, { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard, Property } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Properties = () => {
  // Mock data for properties
  const allProperties: Property[] = [
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
    {
      id: 5,
      title: "Renovated Historic Townhouse",
      address: "202 Main St, St. Petersburg, FL",
      price: 750000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2100,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      type: "Townhouse",
    },
    {
      id: 6,
      title: "Spacious Family Home with Pool",
      address: "303 Palm Ave, Naples, FL",
      price: 980000,
      bedrooms: 5,
      bathrooms: 3,
      sqft: 3200,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80",
      type: "House",
    },
    {
      id: 7,
      title: "Luxury Highrise Apartment",
      address: "404 Skyline Drive, Fort Lauderdale, FL",
      price: 525000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1350,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      type: "Apartment",
    },
    {
      id: 8,
      title: "Beachfront Condo",
      address: "505 Ocean Drive, Key West, FL",
      price: 1100000,
      bedrooms: 3,
      bathrooms: 3,
      sqft: 1900,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      type: "Condo",
      isFeatured: true,
    },
  ];

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [properties, setProperties] = useState(allProperties);

  return (
    <>
      <div className="bg-secondary/30 dark:bg-secondary/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Properties</h1>
              <p className="text-muted-foreground">Find your perfect property from our listings</p>
            </div>
            <SearchBar compact className="w-full md:w-64" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <div className="pt-4 pb-2">
                    <Slider 
                      defaultValue={[0, 2000000]} 
                      max={2000000} 
                      step={10000}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Property Type</h3>
                  <div className="space-y-2">
                    {["House", "Apartment", "Condo", "Townhouse"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`type-${type}`} />
                        <Label htmlFor={`type-${type}`}>{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Bedrooms</h3>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, "5+"].map((num) => (
                      <Button
                        key={num}
                        variant="outline"
                        size="sm"
                        className="min-w-[40px]"
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Bathrooms</h3>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, "4+"].map((num) => (
                      <Button
                        key={num}
                        variant="outline"
                        size="sm"
                        className="min-w-[40px]"
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Features</h3>
                  <div className="space-y-2">
                    {["Pool", "Garden", "Garage", "Air Conditioning", "Balcony"].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox id={`feature-${feature}`} />
                        <Label htmlFor={`feature-${feature}`}>{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Button 
              variant="outline" 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full"
            >
              {isFilterOpen ? "Hide Filters" : "Show Filters"} 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 ml-2"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" 
                />
              </svg>
            </Button>
          </div>
          
          {/* Filters - Mobile */}
          {isFilterOpen && (
            <div className="lg:hidden mb-6 p-4 border border-border rounded-lg bg-background">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Filters</h3>
                <Separator />
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Price Range</h4>
                  <div className="pt-4 pb-2">
                    <Slider 
                      defaultValue={[0, 2000000]} 
                      max={2000000} 
                      step={10000}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Property Type</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["House", "Apartment", "Condo", "Townhouse"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`mobile-type-${type}`} />
                        <Label htmlFor={`mobile-type-${type}`}>{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Bedrooms</h4>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, "5+"].map((num) => (
                        <Button
                          key={num}
                          variant="outline"
                          size="sm"
                          className="min-w-[40px]"
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Bathrooms</h4>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, "4+"].map((num) => (
                        <Button
                          key={num}
                          variant="outline"
                          size="sm"
                          className="min-w-[40px]"
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          )}

          {/* Property Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">{properties.length} properties found</p>
              <div className="flex items-center space-x-2">
                <span className="text-sm mr-2">Sort by:</span>
                <select className="bg-background border border-input rounded-md p-1.5 text-sm outline-none">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-auto">Load More Properties</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
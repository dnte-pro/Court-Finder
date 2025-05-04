
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";

interface SearchBarProps {
  className?: string;
  compact?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ className = "", compact = false }) => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", { location, propertyType, priceRange });
    // Here you would typically navigate to search results with these params
  };

  if (compact) {
    return (
      <form onSubmit={handleSearch} className={`relative ${className}`}>
        <Input
          type="text"
          placeholder="Search for properties..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="pr-10"
        />
        <Button 
          type="submit" 
          size="icon" 
          className="absolute right-0 top-0 h-full rounded-l-none"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSearch} className={`glass-effect rounded-lg p-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Input
            type="text"
            placeholder="City, address or zip code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Property Type</label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Price Range</label>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-100000">$0 - $100,000</SelectItem>
              <SelectItem value="100000-250000">$100,000 - $250,000</SelectItem>
              <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
              <SelectItem value="500000-1000000">$500,000 - $1,000,000</SelectItem>
              <SelectItem value="1000000+">$1,000,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button type="submit" className="w-full">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </form>
  );
};

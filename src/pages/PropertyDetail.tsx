
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Bed, Bath, MapPin, Phone, Mail, Key } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Mock property data
  const property = {
    id: parseInt(id || "1"),
    title: "Luxury Waterfront Villa",
    address: "123 Lakeview Dr, Orlando, FL",
    price: 1250000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3500,
    yearBuilt: 2015,
    type: "House",
    description: "This stunning waterfront villa offers luxurious living spaces with panoramic lake views. The property features high ceilings, floor-to-ceiling windows, a gourmet kitchen with top-of-the-line appliances, a spacious master suite with a private balcony, and a resort-style pool. The outdoor living area includes a covered patio, summer kitchen, and a private dock.",
    features: [
      "Waterfront property",
      "Resort-style pool",
      "Gourmet kitchen",
      "Home theater",
      "Wine cellar",
      "3-car garage",
      "Private dock",
      "Outdoor kitchen",
      "Smart home technology",
      "Security system"
    ],
    location: {
      lat: 28.538336,
      lng: -81.379234
    },
    agent: {
      name: "John Smith",
      phone: "(123) 456-7890",
      email: "john@housefinder.com",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    ]
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
              <div className="flex items-center text-muted-foreground mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                ${property.price.toLocaleString()}
              </p>
              <div className="flex space-x-2">
                <Badge variant="outline" className="border-primary text-primary">
                  ID: {property.id}
                </Badge>
                <Badge>{property.type}</Badge>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[500px]">
            <div className="md:col-span-3 md:row-span-2 h-full">
              <img
                src={property.images[activeImageIndex]}
                alt={`${property.title} main view`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-2">
              {property.images.slice(1, 3).map((img, index) => (
                <div key={index} className="h-full cursor-pointer" onClick={() => setActiveImageIndex(index + 1)}>
                  <img
                    src={img}
                    alt={`${property.title} view ${index + 2}`}
                    className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail Row */}
          <div className="flex overflow-x-auto gap-2 pb-2">
            {property.images.map((img, index) => (
              <div
                key={index}
                className={`flex-shrink-0 cursor-pointer transition-all ${activeImageIndex === index ? 'ring-2 ring-primary ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            ))}
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
              <Bed className="h-6 w-6 text-primary mb-2" />
              <span className="font-medium">{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
              <Bath className="h-6 w-6 text-primary mb-2" />
              <span className="font-medium">{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v7H4V5zm0 9v1h12v-1H4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{property.sqft} sqft</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
              <Key className="h-6 w-6 text-primary mb-2" />
              <span className="font-medium">Built in {property.yearBuilt}</span>
            </div>
          </div>

          {/* Property Details Tabs and Agent Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="description">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="map">Map</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="space-y-4">
                  <h2 className="text-xl font-semibold">Property Description</h2>
                  <p className="text-muted-foreground">{property.description}</p>
                </TabsContent>
                <TabsContent value="features" className="space-y-4">
                  <h2 className="text-xl font-semibold">Property Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-muted-foreground">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="map" className="space-y-4">
                  <h2 className="text-xl font-semibold">Location</h2>
                  <div className="h-80 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Map would be embedded here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src={property.agent.photo} 
                      alt={property.agent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <span>{property.agent.email}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <form className="space-y-4">
                    <h3 className="font-medium">Request Information</h3>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-3 py-2 border border-input rounded-md"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-3 py-2 border border-input rounded-md"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        className="w-full px-3 py-2 border border-input rounded-md"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full px-3 py-2 border border-input rounded-md"
                        defaultValue={`I'm interested in ${property.title}, ID: ${property.id}`}
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Properties */}
      <FeaturedProperties title="Similar Properties" subtitle="You might also be interested in these properties" />
    </>
  );
};

export default PropertyDetail;

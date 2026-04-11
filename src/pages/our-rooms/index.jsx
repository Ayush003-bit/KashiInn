

   import React, { useState, useEffect } from 'react';
   import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import RoomCard from './components/RoomCard';
import FilterPanel from './components/FilterPanel';
import RoomDetailsModal from './components/RoomDetailsModel';
import RoomComparison from './components/RoomComparison';

const OurRooms = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    sortBy: 'popular',
    priceMin: '',
    priceMax: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    amenities: []
  });

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [comparisonRooms, setComparisonRooms] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const roomsData = [
  {
    id: 1,
    name: "Delux Room",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774950995/Images_19_fadhgb.jpg",
    imageAlt: "",
    price: 8500,
    originalPrice: 10000,
    discount: 15,
    rating: 4.8,
    maxGuests: "4 Adults",
    bedType: "King Size",
    features: [
    { icon: "Wifi", label: "Free Wi-Fi" },
    { icon: "Wind", label: "AC" },
    { icon: "Home", label: "Balcony" },
      { icon: "Briefcase", label: "Work Desk" },
  ],

    detailedFeatures: [
    { icon: "Bed", title: "Premium Bedding", description: "Egyptian cotton linens with memory foam mattress" },
    { icon: "Tv", title: "Smart Entertainment", description: "55-inch 4K TV with streaming services" },
    { icon: "Bath", title: "Luxury Bathroom", description: "Marble bathroom with rain shower" },
    { icon: "Coffee", title: "Mini Bar", description: "Complimentary tea, coffee, and refreshments" }],

    amenities: [
    "Free Wi-Fi",
    "Air Conditioning",
    "Private Balcony",
    "Room Service",
    "Daily Housekeeping",
    "Safe Deposit Box",
    "Iron & Ironing Board",
    "Hair Dryer",
    "Complimentary Toiletries",
    "Bottled Water"],

    

    gallery: [
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951030/Images_16_xhgjqz.jpg",
      imageAlt: ""
    },
    ]

  },
  {
    id: 2,
    name: "AC Rooms",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951063/Images_21_udfl8s.jpg",
    imageAlt: "",
    price: 15000,
    originalPrice: 18000,
    discount: 17,
    rating: 4.9,
    maxGuests: "2 Adults",
    bedType: "Double Bed",
    features: [
    { icon: "Wifi", label: "Free Wi-Fi" },
    { icon: "Wind", label: "AC" },
    { icon: "Briefcase", label: "Work Desk" },
    { icon: "Coffee", label: "Coffee Maker" }
    ],

    detailedFeatures: [
    { icon: "Bed", title: " Best Bedroom", description: "Two-poster bed with silk canopy" },
    { icon: "Bath", title: "Attached Bathroom", description: "Vintage fixtures with modern comfort" },
    { icon: "Coffee", title: "Coffee Service", description: "Personalized 24/7 Coffee service" }],

    amenities: [
    "Free Wi-Fi",
    "Air Conditioning",
    "Coffee Service",
    "Room Service",
    "Daily Housekeeping",
    "Safe Deposit Box",
    "Iron & Ironing Board",
    "Hair Dryer",
    "Premium Toiletries",
    ],

    

    gallery: [
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951063/Images_21_udfl8s.jpg",
      imageAlt: ""
    },
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951063/Images_21_udfl8s.jpg",
      imageAlt: ""
    },
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951063/Images_21_udfl8s.jpg",
      imageAlt: ""
    }]

  },
  {
    id: 3,
    name: "Platinum Room",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775817649/Images_37_szvptu.jpg",
    imageAlt: "",
    price: 6500,
    originalPrice: null,
    discount: null,
    rating: 4.7,
    maxGuests: "2 Adults",
    bedType: "Queen Size",
    features: [
    { icon: "Wifi", label: "Free Wi-Fi" },
    { icon: "Wind", label: "AC" },
    { icon: "Briefcase", label: "Work Desk" },
    { icon: "Coffee", label: "Coffee Maker" }],

    detailedFeatures: [
    { icon: "Laptop", title: "Work Station", description: "Ergonomic desk with task lighting" },
    { icon: "Bed", title: "Comfort Bedding", description: "Premium mattress with blackout curtains" },
    { icon: "Tv", title: "Entertainment", description: "Smart TV with international channels" },
    { icon: "Bath", title: "Modern Bathroom", description: "Walk-in shower with premium amenities" }],

    amenities: [
    "Free Wi-Fi",
    "Air Conditioning",
    "Work Desk",
    "Coffee Maker",
    "Room Service",
    "Daily Housekeeping",
    "Safe Deposit Box",
    "Iron & Ironing Board",
    "Hair Dryer",
    "Complimentary Toiletries"],


    gallery: [
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775817649/Images_37_szvptu.jpg",
      imageAlt: ""
    },
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775817649/Images_37_szvptu.jpg",
      imageAlt: ""
    },
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775817649/Images_37_szvptu.jpg",
      imageAlt: ""
    }]

  },
  {
    id: 4,
    name: "Single Bed Room - AC",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775817646/Images_32_sye15f.jpg",
    imageAlt: "",
    price: 12000,
    originalPrice: 14000,
    discount: 14,
    rating: 4.9,
    maxGuests: "2 Adults",
    bedType: "Single Bed",
    features: [
    { icon: "Wifi", label: "Free Wi-Fi" },
    { icon: "Wind", label: "AC" },
     { icon: "Briefcase", label: "Work Desk" },
    { icon: "Coffee", label: "Coffee Maker" }
    ],

    detailedFeatures: [
    { icon: "Bath", title: "Ritual Bathroom", description: "Copper bathtub for purification rituals" },
    { icon: "Coffee", title: "Herbal Tea Bar", description: "Selection of Ayurvedic teas and herbs" }],

    amenities: [
    "Free Wi-Fi",
    "Air Conditioning",
    
    " Tea Selection",
    "Room Service",
    "Daily Housekeeping",
    "Safe Deposit Box",
    "Incense & Candles",
    ],

   

    gallery: [
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775817646/Images_32_sye15f.jpg",
      imageAlt: "Serene hotel suite with meditation corner, traditional Indian cushions, wooden prayer altar, soft ambient lighting, and large windows showing temple views"
    },
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775817646/Images_32_sye15f.jpg",
      imageAlt: "Peaceful meditation space with floor cushions, brass singing bowls, incense holder, and natural light filtering through sheer curtains"
    },
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775817646/Images_32_sye15f.jpg",
      imageAlt: "Traditional bathroom with copper bathtub, stone flooring, wooden accents, and natural herbs displayed in brass containers"
    }]

  },
  
 
  ];




  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      sortBy: 'popular',
      priceMin: '',
      priceMax: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      amenities: []
    });
  };

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
  };

  const handleBookNow = (room) => {
    console.log('Booking room:', room?.name);
  };



  const handleAddToComparison = (room) => {
    if (comparisonRooms?.length < 3 && !comparisonRooms?.find((r) => r?.id === room?.id)) {
      setComparisonRooms((prev) => [...prev, room]);
      setShowComparison(true);
    }
  };

  const handleRemoveFromComparison = (roomId) => {
    setComparisonRooms((prev) => prev?.filter((r) => r?.id !== roomId));
    if (comparisonRooms?.length <= 1) {
      setShowComparison(false);
    }
  };

  const handleClearComparison = () => {
    setComparisonRooms([]);
    setShowComparison(false);
  };

  const filteredRooms = roomsData?.filter((room) => {
    if (filters?.category !== 'all') {
      const categoryMatch = room?.name?.toLowerCase()?.includes(filters?.category);
      if (!categoryMatch) return false;
    }

    if (filters?.priceMin && room?.price < parseInt(filters?.priceMin)) return false;
    if (filters?.priceMax && room?.price > parseInt(filters?.priceMax)) return false;

    if (filters?.amenities?.length > 0) {
      const hasAllAmenities = filters?.amenities?.every((amenity) => {
        return room?.features?.some((feature) => feature?.label?.toLowerCase()?.includes(amenity));
      });
      if (!hasAllAmenities) return false;
    }

    return true;
  });

  const sortedRooms = [...filteredRooms]?.sort((a, b) => {
    switch (filters?.sortBy) {
      case 'price-low':
        return a?.price - b?.price;
      case 'price-high':
        return b?.price - a?.price;
      case 'rating':
        return b?.rating - a?.rating;
      case 'popular':
      default:
        return b?.isPopular - a?.isPopular;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Rooms - Luxury Accommodations | HotelKashiIn</title>
        <meta
          name="description"
          content="Explore our range of luxury rooms and suites at HotelKashiIn. From Ganges view deluxe rooms to heritage suites, find your perfect sanctuary in Kashi." />

      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        
          <section className="relative h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden mt-10">
  
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg')] bg-cover bg-center scale-105"></div>

  {/* PREMIUM OVERLAYS */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-background/90"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,0,0.12),transparent_70%)]"></div>

  {/* CONTENT */}
  <div className="relative z-10 text-center space-y-4 md:space-y-5 px-4">
    
    <h1 className="font-headline text-md sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
      Our Rooms & Suites
    </h1>

    <p className="font-poppins text-sm sm:text-md md:text-sm text-white/85 max-w-xl md:max-w-2xl mx-auto leading-relaxed bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-lg">
      Discover your perfect sanctuary where ancient wisdom meets modern luxury
    </p>

  </div>
</section>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumb/>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <p className="font-poppins text-sm text-muted-foreground">
                Showing {sortedRooms?.length} of {roomsData?.length} rooms
              </p>
              {comparisonRooms?.length > 0 &&
              <Button
                variant="outline"
                size="sm"
                iconname="GitCompare"
                iconPosition="left"
                onClick={() => setShowComparison(!showComparison)}>

                  Compare ({comparisonRooms?.length})
                </Button>
              }
            </div>
            <Button
              variant="outline"
              size="default"
              iconName="SlidersHorizontal"
              iconPosition="left"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden">

              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters} />

            </aside>

            <div className="lg:col-span-3 space-y-8">
              {showComparison &&
              <RoomComparison
                rooms={comparisonRooms}
                onRemoveRoom={handleRemoveFromComparison}
                onClearAll={handleClearComparison} />

              }

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedRooms?.map((room) =>
                <div key={room?.id} className="relative">
                    <RoomCard
                    room={room}
                    onViewDetails={handleViewDetails}
                  />

                    {comparisonRooms?.length < 3 &&
                  <button
                    onClick={() => handleAddToComparison(room)}
                    className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-background transition-colors duration-300"
                    aria-label="Add to comparison">

                        <Icon
                      name={comparisonRooms?.find((r) => r?.id === room?.id) ? 'Check' : 'Plus'}
                      size={20}
                      className="text-foreground" />

                      </button>
                  }
                  </div>
                )}
              </div>

              {sortedRooms?.length === 0 &&
              <div className="text-center py-16 space-y-4">
                  <Icon name="SearchX" size={64} className="text-muted-foreground mx-auto" />
                  <h3 className="font-headline text-2xl font-semibold text-foreground">
                    No rooms found
                  </h3>
                  <p className="font-body text-base text-muted-foreground">
                    Try adjusting your filters to see more results
                  </p>
                  <Button
                  variant="outline"
                  size="default"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={handleResetFilters}>

                    Reset Filters
                  </Button>
                </div>
              }
            </div>
          </div>

        

          <section className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12 text-center space-y-6">
             <div className='flex justify-center items-center'>
                            <Icon name="Sparkles" size={48} className="text-amber-600" />
             </div>

            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
              Need Help Choosing?
            </h2>
            <p className="font-poppins text-md text-muted-foreground max-w-2xl mx-auto">
              Our hospitality experts are here to help you find the perfect room for your stay. Contact us for personalized recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">

                <Button
  variant="default"
  size="lg"
  iconName="Phone"
  iconPosition="left"
  className="bg-amber-700 hover:bg-amber-600 text-white cursor-pointer"
  onClick={() => window.open("tel:8127198888")}
>
  Call Us Now
</Button>

<Button
  className="cursor-pointer"
  variant="outline"
  size="lg"
  iconName="MessageCircle"
  iconPosition="left"
  onClick={() =>
    window.open(
      "https://wa.me/918127198888?text=Hello, I want to enquire about room booking",
      "_blank"
    )
  }
>
  Chat Enquiry
</Button>
             
              
            </div>
          </section>
        </div>
      </main>
      {selectedRoom &&
      <RoomDetailsModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBookNow={handleBookNow} />

      }
      
    </>);

};

export default OurRooms;
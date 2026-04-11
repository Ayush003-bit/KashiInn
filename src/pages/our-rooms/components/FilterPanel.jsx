
   import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ filters, onFilterChange, onResetFilters }) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'deluxe', label: 'Deluxe Rooms' },
    { value: 'ac', label: 'AC' },
    { value: 'non-ac', label: 'NON-AC' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const amenityOptions = [
    { id: 'wifi', label: 'Free Wi-Fi', icon: 'Wifi' },
    { id: 'ac', label: 'Air Conditioning', icon: 'Wind' },
    { id: 'balcony', label: 'Private Balcony', icon: 'Home' },
    { id: 'breakfast', label: 'Breakfast Included', icon: 'Coffee' },
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-golden space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-poppins text-lg font-semibold text-foreground">Filters</h3>
        <Button
           className="font-poppins cursor-pointer"
          variant="ghost"
          size="sm"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={onResetFilters}
        >
          Reset
        </Button>
      </div>
      <div className="space-y-4">
        <Select
          label="Room Category"
          className="font-poppins"
          options={categoryOptions}
          value={filters?.category}
          onChange={(value) => onFilterChange('category', value)}
        />

        <Select
          label="Sort By"
           className="font-poppins"
          options={sortOptions}
          value={filters?.sortBy}
          onChange={(value) => onFilterChange('sortBy', value)}
        />

        <div className="space-y-3">
          <label className="font-poppins text-sm font-medium text-foreground">Price Range</label>
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              placeholder="Min"
              value={filters?.priceMin}
              onChange={(e) => onFilterChange('priceMin', e?.target?.value)}
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters?.priceMax}
              onChange={(e) => onFilterChange('priceMax', e?.target?.value)}
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="font-poppins text-sm font-medium text-foreground">Check-in Date</label>
          <Input
            type="date"
            value={filters?.checkIn}
            onChange={(e) => onFilterChange('checkIn', e?.target?.value)}
          />
        </div>

        <div className="space-y-3">
          <label className="font-poppins text-sm font-medium text-foreground">Check-out Date</label>
          <Input
            type="date"
            value={filters?.checkOut}
            onChange={(e) => onFilterChange('checkOut', e?.target?.value)}
          />
        </div>

        <div className="space-y-3">
          <label className="font-poppins text-sm font-medium text-foreground">Guests</label>
          <Input
            type="number"
            placeholder="Number of guests"
            min="1"
            max="10"
            value={filters?.guests}
            onChange={(e) => onFilterChange('guests', e?.target?.value)}
          />
        </div>

        <div className="space-y-3">
          <label className="font-poppins text-sm font-medium text-foreground py-2">Amenities</label>
          <div className="space-y-2">
            {amenityOptions?.map((amenity) => (
              <Checkbox
                key={amenity?.id}
                label={
                  <div className="flex items-center space-x-2">
                    <Icon name={amenity?.icon} size={16} className="text-primary" />
                    <span className='font-poppins font-light text-sm'>{amenity?.label}</span>
                  </div>
                }
                checked={filters?.amenities?.includes(amenity?.id)}
                onChange={(e) => {
                  const newAmenities = e?.target?.checked
                    // eslint-disable-next-line no-unsafe-optional-chaining
                    ? [...filters?.amenities, amenity?.id]
                    : filters?.amenities?.filter((a) => a !== amenity?.id);
                  onFilterChange('amenities', newAmenities);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
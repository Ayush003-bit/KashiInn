
  import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('');

  const roomOptions = [
    { value: 'deluxe', label: 'Deluxe Room' },
    { value: 'suite', label: 'Premium Suite' },
    { value: 'royal', label: 'Royal Suite' },
    { value: 'heritage', label: 'Heritage Room' }
  ];

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5', label: '5+ Guests' }
  ];

  const handleSearch = () => {
    console.log('Searching availability:', { checkIn, checkOut, guests, roomType });
  };

  const today = new Date()?.toISOString()?.split('T')?.[0];

  return (
    <div className="bg-card rounded-2xl shadow-golden-glow p-6 md:p-8 lg:p-10">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon name="Calendar" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="font-headline text-xl md:text-2xl font-semibold text-foreground">
            Book Your Stay
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Find your perfect sanctuary
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
        <Input
          type="date"
          label="Check-in Date"
          value={checkIn}
          onChange={(e) => setCheckIn(e?.target?.value)}
          min={today}
          required
        />

        <Input
          type="date"
          label="Check-out Date"
          value={checkOut}
          onChange={(e) => setCheckOut(e?.target?.value)}
          min={checkIn || today}
          required
        />

        <Select
          label="Room Type"
          placeholder="Select room type"
          options={roomOptions}
          value={roomType}
          onChange={setRoomType}
          searchable
        />

        <Select
          label="Number of Guests"
          options={guestOptions}
          value={guests}
          onChange={setGuests}
        />
      </div>
      <Button
        variant="default"
        size="lg"
        iconName="Search"
        iconPosition="left"
        fullWidth
        onClick={handleSearch}
        className="bg-brand-gold hover:bg-brand-royal-gold"
      >
        Check Availability
      </Button>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-success" />
            <span className="font-body text-muted-foreground">Secure Booking</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-success" />
            <span className="font-body text-muted-foreground">Instant Confirmation</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="RefreshCw" size={16} className="text-success" />
            <span className="font-body text-muted-foreground">Free Cancellation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
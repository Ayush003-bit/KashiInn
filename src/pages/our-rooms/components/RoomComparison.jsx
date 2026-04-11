
  import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RoomComparison = ({ rooms, onRemoveRoom, onClearAll }) => {
  if (rooms?.length === 0) return null;

  const allFeatures = [
    { key: 'size', label: 'Room Size', icon: 'Maximize' },
    { key: 'maxGuests', label: 'Max Guests', icon: 'Users' },
    { key: 'bedType', label: 'Bed Type', icon: 'Bed' },
    { key: 'view', label: 'View', icon: 'Eye' },
    { key: 'price', label: 'Price per Night', icon: 'IndianRupee' }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-golden space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-headline text-xl font-semibold text-foreground">
          Compare Rooms ({rooms?.length})
        </h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="X"
          iconPosition="left"
          onClick={onClearAll}
        >
          Clear All
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-cta text-sm font-medium text-foreground">
                Feature
              </th>
              {rooms?.map((room) => (
                <th key={room?.id} className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-headline text-base font-semibold text-foreground">
                        {room?.name}
                      </span>
                      <button
                        onClick={() => onRemoveRoom(room?.id)}
                        className="w-6 h-6 rounded hover:bg-muted transition-colors duration-300 flex items-center justify-center"
                        aria-label="Remove room"
                      >
                        <Icon name="X" size={16} className="text-muted-foreground" />
                      </button>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Icon name="Star" size={14} className="text-brand-gold fill-current" />
                      <span className="font-cta text-sm text-foreground">{room?.rating}</span>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allFeatures?.map((feature) => (
              <tr key={feature?.key} className="border-b border-border">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <Icon name={feature?.icon} size={16} className="text-primary" />
                    <span className="font-body text-sm text-foreground">{feature?.label}</span>
                  </div>
                </td>
                {rooms?.map((room) => (
                  <td key={room?.id} className="p-4 text-center">
                    <span className="font-body text-sm text-foreground">
                      {feature?.key === 'price'
                        ? `₹${room?.[feature?.key]?.toLocaleString('en-IN')}`
                        : room?.[feature?.key] || 'N/A'}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-3">
        {rooms?.map((room) => (
          <Button
            key={room?.id}
            variant="default"
            size="sm"
            iconName="Calendar"
            iconPosition="left"
            className="bg-brand-gold hover:bg-brand-royal-gold"
          >
            Book {room?.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RoomComparison;
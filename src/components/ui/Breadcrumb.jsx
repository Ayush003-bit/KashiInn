
  import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();

  const pathSegments = location?.pathname?.split('/')?.filter((segment) => segment !== '');

  const formatLabel = (segment) => {
    return segment?.split('-')?.map((word) => word?.charAt(0)?.toUpperCase() + word?.slice(1))?.join(' ');
  };

  const breadcrumbItems = customItems || [
    { label: 'Home', path: '/homepage' },
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...pathSegments?.map((segment, index) => {
      const path = `/${pathSegments?.slice(0, index + 1)?.join('/')}`;
      return {
        label: formatLabel(segment),
        path: path
      };
    })
  ];

  if (breadcrumbItems?.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems?.map((item, index) => {
          const isLast = index === breadcrumbItems?.length - 1;

          return (
            <li key={item?.path} className="flex items-center">
              {index > 0 && (
                <Icon
                  name="ChevronRight"
                  size={16}
                  className="text-muted-foreground mx-2"
                />
              )}
              {isLast ? (
                <span className="font-body font-medium text-foreground">
                  {item?.label}
                </span>
              ) : (
                <Link
                  to={item?.path}
                  className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item?.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
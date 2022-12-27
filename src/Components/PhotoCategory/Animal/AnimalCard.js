import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AnimalCard = ({ tiger }) => {
  const { name, description, img, _id } = tiger;
  return (
    <div className="max-w-sm">
      <Card imgSrc={img}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className='flex justify-end'>
          <Link to={`/details/${_id}`}>
            <Button gradientMonochrome="teal">
              Details
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AnimalCard;
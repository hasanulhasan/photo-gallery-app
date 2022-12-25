import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleTiger = ({ tiger }) => {
  const { name, description, img, id } = tiger;
  return (
    <div>
      <div className="max-w-sm">
        <Card imgSrc={img}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className='flex justify-end'>
            <Link to={`/details/${id}`}>
              <Button gradientMonochrome="teal">
                Details
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleTiger;
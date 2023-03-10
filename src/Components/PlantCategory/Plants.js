import React, { useEffect, useState } from 'react';
import AnimalCard from '../PhotoCategory/Animal/AnimalCard';
import PlantCard from './PlantCard';

const Plants = ({ plant }) => {
  const { category, title } = plant;
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`https://photo-gallery-app-server.vercel.app/plant/${category}`)
      .then(res => res.json())
      .then(data => {
        setPlants(data)
      })
  }, [category])


  return (
    <div>
      <div>
        <div className="text-center text-gray-800 py-6 px-2">
          <h1 className="text-5xl font-bold mt-0 mb-6">{title}</h1>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
              plants.map(singlePlant => <PlantCard key={singlePlant._id} singlePlant={singlePlant}></PlantCard>)
            }
          </div>
        </div>
      </div>

    </div>
  );
};

export default Plants;
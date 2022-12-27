import React from 'react';
import Plants from './Plants';
const plants = [
  {
    id: 1,
    category: 'tree',
    title: 'Tree'
  },
  {
    id: 2,
    category: 'flower',
    title: 'Flower'
  },
  {
    id: 3,
    category: 'insects',
    title: 'Insects'
  }
]

const PlantCategory = () => {
  return (
    <div>
      <div>
        {
          plants.map(plant => <Plants key={plant.id} plant={plant}></Plants>)
        }
      </div >
    </div>
  );
};

export default PlantCategory;
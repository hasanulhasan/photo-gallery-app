import React from 'react';
import Animals from './Animal/Animals';

const animals = [
  {
    id: 1,
    category: 'tiger',
    title: 'Tiger'
  },
  {
    id: 2,
    category: 'bird',
    title: 'Bird'
  },
  {
    id: 3,
    category: 'cat',
    title: 'Cat'
  }
]

const AnimalCategory = () => {
  return (
    <div>
      {
        animals.map(animal => <Animals key={animal.id} animal={animal}></Animals>)
      }
    </div >
  );
};

export default AnimalCategory;
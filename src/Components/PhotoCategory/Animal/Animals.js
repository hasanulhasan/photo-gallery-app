import { useEffect, useState } from 'react';
import AnimalCard from './AnimalCard';

const Animals = ({ animal }) => {
  const { category, title } = animal;
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/animal/${category}`)
      .then(res => res.json())
      .then(data => {
        setAnimals(data)
      })
  }, [category])

  return (
    <div>
      <div className="text-center text-gray-800 py-6 px-2">
        <h1 className="text-5xl font-bold mt-0 mb-6">{title}</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {
            animals.map(tiger => <AnimalCard key={tiger._id} tiger={tiger}></AnimalCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Animals;
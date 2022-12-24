import { Button, Card } from 'flowbite-react';
import React from 'react';
import SingleTiger from './SingleTiger';

const tigers = [
  {
    id: 1,
    name: "The Bengal tiger",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://thumbs.dreamstime.com/b/tiger-portrait-horizontal-11392212.jpg"
  },
  {
    id: 2,
    name: "Siberian Tiger",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://media.istockphoto.com/id/1015669868/photo/single-tiger-in-the-snow.jpg?s=612x612&w=0&k=20&c=dmPM0VWvlfbRaSVoSJFiKsJouf2yjutf8Q8Yr-855RQ="
  },
  {
    id: 3,
    name: "Sumatran Tiger",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://www.worldatlas.com/r/w1200/upload/68/bf/40/shutterstock-42692746.jpg"
  }
]

const Tiger = () => {
  return (
    <div>
      <div class="text-center text-gray-800 py-6 px-2">
        <h1 class="text-5xl font-bold mt-0 mb-6">Tigers</h1>
      </div>
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {
            tigers.map(tiger => <SingleTiger key={tiger.id} tiger={tiger}></SingleTiger>)
          }
        </div>
      </div>
    </div>
  );
};

export default Tiger;
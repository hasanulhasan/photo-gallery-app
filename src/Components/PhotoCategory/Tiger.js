import { Card } from 'flowbite-react';
import React from 'react';

const Tiger = () => {
  return (
    <div>
      <div class="text-center text-gray-800 py-6 px-2">
        <h1 class="text-5xl font-bold mt-0 mb-6">Tigers</h1>
      </div>
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <div className="max-w-sm">
              <Card imgSrc="https://thumbs.dreamstime.com/b/tiger-portrait-horizontal-11392212.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  The Bengal tiger
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </div>
          <div>
            <div className="max-w-sm">
              <Card imgSrc="https://media.istockphoto.com/id/1015669868/photo/single-tiger-in-the-snow.jpg?s=612x612&w=0&k=20&c=dmPM0VWvlfbRaSVoSJFiKsJouf2yjutf8Q8Yr-855RQ=">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Siberian Tiger
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </div>
          <div>
            <div className="max-w-sm">
              <Card imgSrc="https://www.worldatlas.com/r/w1200/upload/68/bf/40/shutterstock-42692746.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sumatran Tiger
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiger;
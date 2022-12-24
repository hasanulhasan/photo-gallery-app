import { Button, Card, Timeline } from 'flowbite-react';
import React from 'react';

const AnimalDetails = () => {
  return (
    <div>
      <div class="grid grid-cols-4 gap-4">
        {/* left side */}
        <div class="col-span-3">
          <div className="w-full">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
        {/* right side for comment */}
        <div>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>
                  February 2022
                </Timeline.Time>
                <Timeline.Title>
                  Name of commenter
                </Timeline.Title>
                <Timeline.Body>
                  Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
          <form className="form-control mt-2 p-5">
            <h1 className="text-2xl text-info pb-4">Put a Review</h1>
            <input type="text" placeholder="Name" name='name' className="rounded-lg w-full mb-2" />
            <input type="email" placeholder="Email" name='email' className="rounded-lg w-full" />
            <input type="text" placeholder="Your review" name='review' className="rounded-lg w-full my-2" required />
            <div>
              <Button
                outline={true}
                gradientDuoTone="cyanToBlue"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
import { Button } from 'flowbite-react';
import React from 'react';

const CommentForm = (handleComment) => {
  return (
    <form onSubmit={handleComment} className="form-control mt-2 p-5">
      <h1 className="text-2xl text-info pb-4">Put a Review</h1>
      <input type="text" placeholder="Name" name='name' className="rounded-lg w-full mb-2" />
      <input type="email" placeholder="Email" name='email' className="rounded-lg w-full" />
      <input type="text" placeholder="Your review" name='review' className="rounded-lg w-full my-2" required />
      <div className='flex justify-center'>
        <Button
          outline={true}
          gradientDuoTone="cyanToBlue"
          size="xl"
          type='submit'>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;
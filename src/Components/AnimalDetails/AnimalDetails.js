import { useQuery } from '@tanstack/react-query';
import { Button, Card, Timeline } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CommentForm from './CommentForm';
import Comments from './Comments';

const AnimalDetails = () => {
  const animals = useLoaderData();
  const { name, description, img, _id } = animals;
  const date = new Date();
  const [comments, setCommets] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;
    const commentInfo = {
      name,
      email,
      review,
      commentIdOn: _id,
      date
    }
    // console.log(commentInfo)
    // sending data to server
    fetch('http://localhost:5000/comments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(commentInfo)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.acknowledged) {
          form.reset();
          // alert('your review added')
        }
      })
      .catch(err => console.error(err))
  }
  //receiving comments
  // const { data: comments = [], refetch } = useQuery({
  //   queryKey: ['_id'],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/comments/${_id}`);
  //     const data = await res.json();
  //     return data;
  //   }
  // })
  // console.log(comments);
  useEffect(() => {
    fetch(`http://localhost:5000/comments/${_id}`)
      .then(res => res.json())
      .then(data => {
        setCommets(data)
        setRefresh(!refresh);
      })
  }, [_id, refresh])

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* left side */}
        <div className="lg:col-span-3">
          <div className="w-full">
            <Card imgSrc={img}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
            </Card>
          </div>
        </div>
        {/* right side for comment */}
        <div><Timeline>
          {
            comments.map(comment => <Comments key={comment.id} comment={comment}></Comments>)
          }
        </Timeline>
          <form onSubmit={handleComment} className="form-control mt-2 p-5">
            <h1 className="text-2xl text-info pb-4">Put a Review</h1>
            <input type="text" placeholder="Name" name='name' className="rounded-lg w-full mb-2" required />
            <input type="email" placeholder="Email" name='email' className="rounded-lg w-full" required />
            <input type="text" placeholder="Your review" name='review' className="rounded-lg w-full my-2" required />
            <div className='flex justify-center'>
              <Button
                outline={true}
                gradientDuoTone="cyanToBlue"
                type='submit'>
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
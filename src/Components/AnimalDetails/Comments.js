import { Timeline } from 'flowbite-react';
import moment from 'moment/moment';
import React from 'react';

const Comments = ({ comment }) => {
  const { name, date, review } = comment;
  // const NewDate = moment(date, 'DD-MM-YYYY')
  // const NewDate = date.moment().format("MMM Do YY");
  let NewDate = moment(date).format("MMM Do YY")
  return (

    <Timeline.Item>
      <Timeline.Point />
      <Timeline.Content>
        <Timeline.Time>
          {NewDate}
        </Timeline.Time>
        <Timeline.Title>
          {name}
        </Timeline.Title>
        <Timeline.Body>
          {review}
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>

  );
};

export default Comments;
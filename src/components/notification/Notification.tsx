import React from 'react';

interface NotificationProps {
  type: string;
};

const Notification = (props : NotificationProps) => {
  return (
    <div>{props.type}: abc</div>
  )
};

export default Notification;
import React from 'react';

const Notification = (charator) => {
  const { name } = charator;
  return (
    <span className="notification">
      <p>You found the {name}</p>
    </span>
  );
};

export default Notification;

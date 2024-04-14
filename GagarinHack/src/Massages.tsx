import React from 'react';

interface Props {
  title: string;
  description: string;
}

const Massages: React.FC<Props> = ({ title, description }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default Massages;
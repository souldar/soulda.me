import React from 'react';
import './start.css';

interface Props {
  onClick?: () => void
}
export const Start: React.FC<Props> = (props) => {
  return (
      <div className="border-container" onClick={props.onClick}>
        <div className="start-container"></div>
      </div>
  );
}
import React from 'react';
import './constructing-animation.scss'

function ConstructingAnimation(props) {
  return (
    <div className={props.className}>
      <div className="constructing-animation">
        <div className="main-object"></div>
        <div className="satellite-object"></div>
      </div>
    </div>
  );
}

export default ConstructingAnimation;

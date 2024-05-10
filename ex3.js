import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Update the counter when the button is clicked
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>Number of times clicked: {count}</p>
    </div>
  );
}

export default ClickCounter;

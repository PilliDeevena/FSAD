import React, { useState } from 'react';

function ButtonCounter() {
  // Define state variable for the counter
  const [counter, setCounter] = useState(0);

  // Function to handle button click and update counter
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {/* Display the counter value */}
      <p>Counter: {counter}</p>
      {/* Button with onClick event handler */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default ButtonCounter;

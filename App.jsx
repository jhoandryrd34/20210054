import React, { useState } from 'react';

// Componente que muestra un número
const NumberComponent = ({ number }) => {
  return <div>{number}</div>;
};

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
    setNumbers([...numbers, count + 1]);
  };

  return (
    <div className="App">
      <h1>Contador: {count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <div>
        {numbers.map((num, index) => (
          <NumberComponent key={index} number={num} />
        ))}
      </div>
    </div>
  );
}

export default App;

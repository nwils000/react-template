import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCountByOne() {
    setCount(count + 1);
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="d-flex vh-100 justify-content-center align-items-center flex-column">
        <p className="pt-3 fs-1">Count: {count}</p>
        <Button variant="dark" className="mb-3" onClick={incrementCountByOne}>
          Increase Count
        </Button>
      </div>
    </div>
  );
}

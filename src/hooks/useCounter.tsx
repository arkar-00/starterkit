import {useState, useCallback} from 'react';

function useCounter(): {count: number; increment: () => void} {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback((): void => setCount(x => x + 1), []);

  return {count, increment};
}

export default useCounter;

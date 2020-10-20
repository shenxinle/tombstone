import * as React from 'react';
const { useState, useCallback } = React;

type AsyncFunction = (...args: any[]) => Promise<any>;

export const useActionPending = <T extends AsyncFunction>(asyncFunc: T): [T, number] => {
  const [count, setCount] = useState(0);

  const wrapAsyncFunc = useCallback((...args: Parameters<T>) => {
    setCount(count => (count + 1));
    return asyncFunc(...args).finally(() => {
      setCount(count => (count - 1));
    });
  }, [asyncFunc]);

  return [wrapAsyncFunc as T, count];
}

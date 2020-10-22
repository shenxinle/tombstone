import * as React from 'react';
const { useState, useCallback, useEffect } = React;

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


export const useToggle = (init: boolean = false) => {
  const [bool, setBool] = useState(init);
  const toggle = (val?: boolean) => {
    let newBool: boolean;
    if (val !== void 0) {
      setBool(val);
    } else {
      setBool(bool => !bool);
    }
  };

  return [bool, toggle] as const;
}


export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as HTMLElement)) {
        return;
      } else {
        handler(event);
      }
    };
    document.addEventListener('click', clickHandler, true);
    return () => {
      document.removeEventListener('click', clickHandler, true);
    }
  }, [ref, handler]);
}

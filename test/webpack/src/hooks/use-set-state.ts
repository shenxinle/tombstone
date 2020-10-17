import * as React from 'react';
const { useState } = React;

const useSetState = <S extends object, T extends S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState(initialState);
  const setStateByExtend = (newState: T | ((p: S) => T)) => {
    // @ts-ignore
    setState((prevState) => {
      if (typeof newState === 'function') {
        return {
          ...prevState,
          ...newState
        }
      }
    });
  };

  // @ts-ignore
  return [state, setStateByExtend];
}

export default useSetState;
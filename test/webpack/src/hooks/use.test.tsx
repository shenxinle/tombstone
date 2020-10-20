import * as React from 'react';
import {
  useActionPending
} from './use';

const {
  useState,
  useEffect,
  useCallback,
  useRef
} = React;

export function UseTest() {
  return <div>
    <TestActionPending />
  </div>
}

function delayResolve<T>(ms: number, value: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

function delayReject<T>(ms: number, value: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(value);
    }, ms);
  });
}


function TestActionPending() {
  const [delayResolveWithPending, resolvePendingCount] = useActionPending(delayResolve);
  const [delayRejectWithPending, rejectPendingCount] = useActionPending(delayReject);
  const [resolveValue, setResolveValue] = useState('');
  const [rejectValue, setRejectValue] = useState('');

  const handleResolve = async () => {
    let v = await delayResolveWithPending(1000, 'fdsfd');
    setResolveValue(v);
  }

  const handleReject = async () => {
    try {
      let v = await delayRejectWithPending(1000, 'hehehe');
    } catch(err) {
      console.log(typeof err);
      setRejectValue(err);
    }
  }

  return <div>
    <p>resolvePendingCount: { resolvePendingCount }</p>
    <p>resolveValue: { resolveValue }</p>
    <button onClick={handleResolve}>click to delay resolve</button>
    <p>rejectPendingCount: { rejectPendingCount }</p>
    <p>rejectValue: { rejectValue }</p>
    <button onClick={handleReject}>click to delay reject</button>
  </div>
}

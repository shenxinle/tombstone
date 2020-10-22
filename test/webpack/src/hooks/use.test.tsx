import * as React from 'react';
import {
  useActionPending,
  useToggle,
  useClickOutside
} from './use';

const {
  useState,
  useEffect,
  useCallback,
  useRef
} = React;

export function UseTest() {
  return <div>
    <h2>Use</h2>
    <TestActionPending />
    <TestToggle />
    <TestClickOutside />
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
    <h3>ActionPending</h3>
    <p>resolvePendingCount: { resolvePendingCount }</p>
    <p>resolveValue: { resolveValue }</p>
    <button onClick={handleResolve}>click to delay resolve</button>
    <p>rejectPendingCount: { rejectPendingCount }</p>
    <p>rejectValue: { rejectValue }</p>
    <button onClick={handleReject}>click to delay reject</button>
  </div>
}

function TestToggle() {
  const [bool1, toggle1] = useToggle();
  const [bool2, toggle2] = useToggle(true);

  return <div>
    <h2>Toggle</h2>
    <div>
      <button onClick={() => toggle1()}>toggle1</button>
      <button onClick={() => toggle1(true)}>true</button>
      <button onClick={() => toggle1(false)}>false</button>
      <span>: {String(bool1)}</span>
    </div>
    <div>
      <button onClick={() => toggle2()}>toggle2</button> : {String(bool2)}
    </div>
  </div>
}

function TestClickOutside() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useClickOutside(ref1, () => {
    // console.log('-- click outside div --');
  });
  useClickOutside(ref2, () => {
    // console.log('-- click outside btn --');
  });

  return <div>
    <h2>ClickOutside</h2>
    <div ref={ref1} style={{border: '1px solid #000'}}>
      click outside
      <br/>
      <button ref={ref2}>click outside</button>
    </div>
  </div>
}

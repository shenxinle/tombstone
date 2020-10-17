import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import { debounce } from '../../utils/index';
import { getCoordsByDocument } from '../../utils/dom';

const { useState, useRef, useEffect } = React;
const noop = () => {};

/**
 * children
 * title
 * trigger
 * visible
 * palcement
 */
type Placement = 'top' | 'bottom' | 'left' | 'right';
interface Props {
  children: React.ReactElement;
  title: string;
  trigger?: 'hover' | 'click';
  visible?: boolean;
  placement?: Placement;
}
interface Coordinate {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Tooltip: React.FunctionComponent<Props> = (props) => {
  const [isShowTips, setIsShowTips] = useState(false);
  const [coord, setCoord] = useState<Coordinate | null>(null);
  const childRef = useRef(null);

  const {
    children,
    title,
    trigger,
    visible,
    placement
  } = props;
  const isCtrledByVisible = typeof visible === 'boolean' ? true : false;

  const debouncedSetIsShowTips = debounce(setIsShowTips, 100);

  const handleMouseEnter = () => {
    if (isCtrledByVisible) return;

    debouncedSetIsShowTips(true);
  }

  const handleMouseLeave = () => {
    if (isCtrledByVisible) return;
    debouncedSetIsShowTips(false);
  }

  const handleClick = () => {
    if (isCtrledByVisible) return;
    debouncedSetIsShowTips((prev: boolean) => !prev);
  }

  useEffect(() => {
    if (childRef.current) {
      // @ts-ignore
      let c = getCoordsByDocument(childRef.current);
      setCoord(c);
    }
    if (isCtrledByVisible) {
      setIsShowTips(visible as boolean);
    }
  }, []);

  let toBindEvents, toBindContentEvents;
  if (trigger === 'hover') {
    toBindEvents = toBindContentEvents = {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    };
  } else if (trigger === 'click') {
    toBindEvents = {
      onClick: handleClick
    };
  }

  const newChildren = React.cloneElement(children, {
    ...toBindEvents,
    ref: childRef
  });

  return <>
    { isShowTips ? (
      <TipContent
        title={title}
        coord={coord}
        placement={placement as Placement}
        {...toBindContentEvents}
      ></TipContent>
    ) : null }
    { newChildren }
  </>
}

Tooltip.defaultProps = {
  trigger: 'hover',
  // visible: false,
  placement: 'top'
};


interface TipContentProps {
  title: string;
  coord: Coordinate | null;
  placement: Placement;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const TipContent: React.FunctionComponent<TipContentProps> = ({
  title,
  coord,
  placement,
  onMouseEnter,
  onMouseLeave
}) => {
  const tRef = useRef(null);

  if (!coord) return null;
  let style;

  if (placement === 'top') {
    style = {
      left: coord.x + coord.width / 2,
      top: coord.y - 8,
      transform: `translate(-50%, -100%)`
    };
  } if (placement === 'bottom') {
    style = {
      left: coord.x + coord.width / 2,
      top: coord.y + coord.height + 8,
      transform: `translate(-50%, 0)`
    };
  } else if (placement === 'left') {
    style = {
      left: coord.x - 8,
      top: coord.y + coord.height / 2,
      transform: `translate(-100%, -50%)`
    };
  } else if (placement === 'right') {
    style = {
      left: coord.x + coord.width + 8,
      top: coord.y + coord.height / 2,
      transform: `translate(0, -50%)`
    };
  }

  return ReactDOM.createPortal((
    <div
      ref={tRef}
      className={`tooltip ${placement}`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      { title }
    </div>
  ), document.querySelector('#attachment') as HTMLElement);
}

TipContent.defaultProps = {
  onMouseEnter: noop,
  onMouseLeave: noop
}



export default Tooltip;

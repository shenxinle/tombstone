import * as React from 'react';
import Tooltip from './components/tooltip';

interface Props {
  name: string;
}

class App extends React.Component<Props, any> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <div>
          非机覅冬季范德萨
          <Tooltip title="呵呵呵呵">
            <button>哈哈哈</button>
          </Tooltip>

          <Tooltip title="fdf" visible={true}>
            <button>show</button>
          </Tooltip>

          <Tooltip title="df" visible={false}>
            <button>hide</button>
          </Tooltip>

          <Tooltip title="fdf" placement="bottom">
            <button>bottom</button>
          </Tooltip>

          <Tooltip title="fdf" placement="left">
            <button style={{marginLeft: 80}}>left</button>
          </Tooltip>

          <Tooltip title="fdf" placement="right">
            <button>right</button>
          </Tooltip>

          <Tooltip title="反倒是减肥克雷登斯反倒是尽量克服的" trigger="click" placement="top">
            <button>click</button>
          </Tooltip>
        </div>
      </>
    );
  }
}

export default App;

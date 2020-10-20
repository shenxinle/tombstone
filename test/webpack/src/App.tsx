import * as React from 'react';
import Tooltip from './components/tooltip';
import { UseTest } from './hooks/use.test';

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
        </div>
        <div>
          <UseTest />
        </div>
      </>
    );
  }
}

export default App;

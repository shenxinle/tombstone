import ClickCounter from './click-counter.js'

interface HelloMessageProps {
  name: string;
}

class HelloMessage extends React.Component<HelloMessage, null> {
  render () {
    window.helloInstance = this
    return (
      <div>
        <h1>Hello ffd {this.props.name}</h1>
      </div>
    )
  }
}

class App extends React.Component<null, null> {
  render () {
    return <div>
      <HelloMessage name="john"></HelloMessage>
      <ClickCounter />
    </div>
  }
}

const rootInstance = ReactDOM.render(
  <App />,
  document.getElementById('output')
)

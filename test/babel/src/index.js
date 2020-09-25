import ClickCounter from './click-counter.js'

class HelloMessage extends React.Component {
  render () {
    window.helloInstance = this
    return (
      <div>
        <h1>Hello ffd {this.props.name}</h1>
      </div>
    )
  }
}

class App extends React.Component {
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

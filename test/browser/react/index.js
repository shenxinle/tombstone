import { add } from './react/mod.js'

class HelloMessage extends React.Component {
  render () {
    window.helloInstance = this
    return (
      <div>
        <h1>Hello {this.props.name} {add(4, 5)}</h1>
      </div>
    )
  }
}

class ClickCounter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState((state) => {
      return { count: state.count + 1 }
    })
  }

  render () {
    return [
      React.createElement('button', {
        key: '1',
        onClick: this.handleClick
      }, 'Update counter'),
      React.createElement('span', { key: '2' }, this.state.count)
    ]
  }
}

const rootInstance = ReactDOM.render(
  // React.createElement('div', null, React.createElement(HelloMessage, {name: 'john'})),
  React.createElement(HelloMessage, { name: 'john' }),
  document.getElementById('output')
)

interface State {
  count: number;
}

export default class ClickCounter extends React.Component<null, State> {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }

  handleClick = () => {
    this.setState((state) => {
      return { count: state.count + 1 }
    })
  }

  render () {
    return <div>
      <button onClick={this.handleClick}>update</button>
      <span>{this.state.count}</span>
    </div>
  }
}

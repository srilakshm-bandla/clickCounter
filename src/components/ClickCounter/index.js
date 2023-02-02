// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onCountIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="counter-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="count-times"> {count} </span>
          times
        </h1>
        <p>Click the button to increase the count!</p>
        <div>
          <button
            type="button"
            className="clickme-button"
            onClick={this.onCountIncrement}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

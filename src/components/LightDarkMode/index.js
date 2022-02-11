import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    mode: false,
  }

  onButtonClick = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  getButtonText = () => {
    const {mode} = this.state

    return mode ? 'Dark Mode' : 'Light Mode'
  }

  getClassName = () => {
    const {mode} = this.state
    return mode ? 'light-mode' : 'dark-mode'
  }

  render() {
    const {mode} = this.state
    const buttonText = this.getButtonText()
    const modes = this.getClassName()
    const heading = mode ? 'heading-black' : 'heading-white'

    return (
      <div className="bg-container">
        <div className={`card-container ${modes}`}>
          <h1 className={`heading ${heading}`}>Click to Change Mode</h1>
          <button onClick={this.onButtonClick} className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

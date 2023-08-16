import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    DarkMode: true,
  }

  changeMode = () => {
    this.setState(prevState => ({DarkMode: !prevState.DarkMode}))
  }

  render() {
    const {DarkMode} = this.state
    const className = DarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = DarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-con">
        <div className={`card-con ${className}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.changeMode} type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

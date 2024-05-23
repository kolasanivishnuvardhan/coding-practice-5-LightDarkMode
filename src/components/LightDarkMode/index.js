import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}
  onClickBtn = () => {
    this.setState(prevState => {
      if (prevState.isLightMode === false) {
        return {isLightMode: true}
      }
      return {isLightMode: false}
    })
  }
  render() {
    const {isLightMode} = this.state
    return (
      <div className="bg-container">
        <div
          className={`light-dark-container ${
            isLightMode ? 'bg-light' : 'bg-dark'
          }`}
        >
          <h1 className={`heading ${isLightMode ? 'light' : 'dark'}`}>
            Click To Change Mode
          </h1>

          <button className="btn" type="button" onClick={this.onClickBtn}>
            {isLightMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

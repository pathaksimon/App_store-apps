import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  onclickingtem = () => {
    const {tabs, getting} = this.props
    const {tabId, displayText} = tabs
    getting(tabId)
  }

  console1 = () => {
    const {tabs, getting, important} = this.props
    const {Maintain} = important
    const {tabId, displayText} = tabs
    if (Maintain === tabId) {
      return 'martha'
    }
    return ''
  }

  render() {
    const {tabs} = this.props
    const {tabId, displayText} = tabs
    return (
      <li className="lista">
        <button
          onClick={this.onclickingtem}
          className={`tabs-button ${this.console1()}`}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem

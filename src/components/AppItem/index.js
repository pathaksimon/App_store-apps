import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {apps} = this.props
    const {appName, imageUrl, category} = apps
    return (
      <li className="appslist">
        <img src={imageUrl} className="appPhotu" alt={appName} />
        <p className="para">{appName}</p>
      </li>
    )
  }
}

export default AppItem

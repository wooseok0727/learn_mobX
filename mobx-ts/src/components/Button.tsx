import autobind from 'autobind-decorator'
import { Component } from 'react'

export default class Button extends Component {
  render() {
    return <button onClick={this.click}>클릭</button>
  }

  @autobind
  click() {
    console.log('clicked')
  }
}

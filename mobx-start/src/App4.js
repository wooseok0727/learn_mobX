import logo from './logo.svg'
import './App.css'
import { inject, observer } from 'mobx-react'
import React from 'react'
import autobind from 'autobind-decorator'

@inject('personStore')
@observer
class AppContainer extends React.Component {
  render() {
    console.log('render')
    const { personStore } = this.props

    return <App age10={personStore.age10} plus={this.plus} />
  }

  @autobind
  plus() {
    this.props.personStore.plus()
  }
}

function App({ age10, plus }) {
  console.log('render')
  const click = () => {
    plus()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{age10}</p>
        <p>
          <button onClick={click}>plus</button>
        </p>
      </header>
    </div>
  )
}

export default AppContainer

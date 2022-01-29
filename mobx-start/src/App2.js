import logo from './logo.svg'
import './App.css'
import { inject, observer } from 'mobx-react'
import React, { useContext } from 'react'
import PersonContext from './contexts/PersonContext'
import autobind from 'autobind-decorator'
import { action, computed, runInAction } from 'mobx'

function App({ personStore }) {
  // const personStore = useContext(PersonContext)

  const age10 = computed(() => {
    return Math.floor(personStore.age / 10) * 10
  }).get()

  console.log('render', personStore.age, personStore.name)

  const click = () => {
    setTimeout(() => {
      personStore.testAction()
    }, 500)
  }

  // const click = () => {
  //   setTimeout(() => {
  //     runInAction(() => {
  //       personStore.age = 150
  //       personStore.name = 'Anna'
  //     })
  //   }, 500)
  // }

  // const click = () => {
  //   setTimeout(
  //     action(() => {
  //       personStore.age = 150
  //       personStore.name = 'Anna'
  //     }),
  //     500
  //   )
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {personStore.age}, {personStore.name}
        </p>
        <p>{age10}</p>
        <p>
          <button onClick={click}>plus</button>
        </p>
      </header>
    </div>
  )
}

export default inject('personStore')(observer(App))

// @observer
// class App extends React.Component {
//   static contextType = PersonContext

//   render() {
//     console.log('render')
//     const personStore = this.context

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{personStore.age10}</p>
//           <p>
//             <button onClick={this.click}>plus</button>
//           </p>
//         </header>
//       </div>
//     )
//   }

//   @autobind
//   click() {
//     const personStore = this.context
//     personStore.plus()
//   }
// }

// export default App

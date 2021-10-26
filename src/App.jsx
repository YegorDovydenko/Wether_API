import Header from './components/Header'
import Main from './components/Main'
import Begin from './components/Begin'
import {Switch, Route} from 'react-router'

const App = () => {

  return (
    <div className="App">
      <Header /> 
      <Switch>
        <Route exact path='/' component={Begin} />
        <Route exact path='/:city' component={Main} />
      </Switch>
    </div>
  )
}

export default App;

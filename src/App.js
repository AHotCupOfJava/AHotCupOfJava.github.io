import React from 'react'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

const username = "Clarissa"

const App = () => (
  <BrowserRouter basename="/todo">
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {(username) ? <Home name={username}/> : <Home name="stranger"/>}
          </Route>
          <Route path="/list" component={TodoList}/>
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>
)

export default App

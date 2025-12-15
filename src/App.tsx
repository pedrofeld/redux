import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <ReduxProvider store={store}>
      <h1>Hello, World!</h1>
    </ReduxProvider>
  )
}

export default App

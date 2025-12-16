import { Provider as ReduxProvider } from 'react-redux'
import { persistedStore, store } from './store'
import { TaskList } from './components/TaskList'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { RepositoryList } from './components/RepositoryList'

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore} />
      <TaskList />
      <RepositoryList />
    </ReduxProvider>
  )
}

export default App

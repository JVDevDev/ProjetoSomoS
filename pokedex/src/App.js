import './styles/App.css'
import List from './components/List'
import Description from './components/Description'
import { IdContextProvider } from './contexts/IdContexts'

function App() {
    return (
        <div id='pokedex' className="box">
            <IdContextProvider>
                <List />
                <Description />
            </IdContextProvider>
        </div>
    )
}

export default App

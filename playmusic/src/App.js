
import Index from './paginas/Index'; 
import Login from './paginas/Login';

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return code ? <Index code={code} /> : <Login />
}

export default App


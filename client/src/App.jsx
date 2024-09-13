import { Outlet } from "react-router-dom"
import Header from "./Component/Header/Header"
import Foter from "./Component/Foter/Foter"
import { Provider } from "react-redux"
import { store } from "./Redux/store"

function App() {
  return (
    <div className="main">
       <Provider store ={store}>
          <Header/>
              <div className="content">
                <Outlet/>
            </div>
            <Foter/>
       </Provider>
    </div>
  )
}

export default App

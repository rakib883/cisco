import { Outlet } from "react-router-dom"
import Header from "./Component/Header/Header"
import Foter from "./Component/Foter/Foter"
import { Provider } from "react-redux"
import { store,persistor } from "./Redux/store"
import { PersistGate } from "redux-persist/integration/react"

function App() {
  return (
    <div className="main">
       <Provider store ={store}>
          <PersistGate loading={null} persistor={persistor}> 
              <Header/>
              <div className="content">
                <Outlet/>
             </div>
             <Foter/>
            </PersistGate>
       </Provider>
    </div>
  )
}

export default App

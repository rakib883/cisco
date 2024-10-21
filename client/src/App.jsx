import { Outlet, useLocation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Foter from "./Component/Foter/Foter";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const location = useLocation();

  // Check if the current path starts with '/admin'
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="main">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* Conditionally render Header and Foter based on the route */}
          {!isAdminRoute && <Header />}
          
          <div className="content">
            <Outlet />
          </div>
          
          {!isAdminRoute && <Foter />}
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

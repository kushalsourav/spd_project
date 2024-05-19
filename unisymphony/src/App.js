import { useLocation } from "react-router-dom";
import NavigateBar from "./components/NavigateBar/NavigateBar";
import ContextProvider from "./contexts/ContextProvider";
import Router from "./router/Router";


function App() {
  const location = useLocation()
  return (
      <ContextProvider>
          <Router />
          {location.pathname !== "/"&&location.pathname !== "/auth/signup" &&location.pathname !== "/Auth/Signin" && <NavigateBar /> }
          
      </ContextProvider>
  );
}

export default App;

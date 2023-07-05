import { MemoryRouter} from "react-router-dom"
import "../css/index.css"

import LocationProvider from "./locationProvider/locationProvider";
import RoutesWithAnimation from "./routeswithanimation/routesWithAnimation";
function App() {

  return (
    <div>
      <MemoryRouter>
      <LocationProvider>
        <RoutesWithAnimation/>
      </LocationProvider>
      </MemoryRouter>
      
    </div>
  )
}

export default App

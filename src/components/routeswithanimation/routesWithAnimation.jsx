import { Routes,Route, useLocation } from "react-router-dom";
import Welcome from "../welcome/welcome"
import Play from "../Game/Play"
import Congrats from "../congrats/congrats"
const RoutesWithAnimation = () => {
    const location = useLocation();
    return ( 
        <Routes location={location} key={location.key}>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/congrats" element={<Congrats />} />
      </Routes>
     );
}
 
export default RoutesWithAnimation;
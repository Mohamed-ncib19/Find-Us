import { AnimatePresence } from "framer-motion";

const LocationProvider = ({children}) => {
    return ( 
        <AnimatePresence>{children}</AnimatePresence>
     );
}
 
export default LocationProvider;
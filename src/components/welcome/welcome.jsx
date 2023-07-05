import { Link } from "react-router-dom";
import "../../css/style.css"
import { motion } from "framer-motion";
import RouteVariant from "../functions/variants";

const Welcome = () => {
    return ( 
     
        <div  className="background h-screen flex items-center justify-center transition-all duration-500">
            <motion.div variants={RouteVariant}
        initial="initial"
        animate="final"
        className="flex flex-col justify-center items-center gap-8 m-auto"
        >
            <h1 className="text-center text-4xl text-purple-100 font-semibold">Memory challenge: Lets match the cards</h1>
            <Link to="/Play" className="bg-[#b0b0b08f] shadow-2xl shadow-black hover:bg-[#fff9] hover:text-gray-900 p-4 md:w-[50%] w-[80%] h-[10%] rounded-2xl text-[30px] text-center text-white flex flex-row justify-center items-center">Lets Go</Link>
            </motion.div>
        </div>
        
     );
}
 
export default Welcome;
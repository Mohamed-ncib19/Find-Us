import { Link } from "react-router-dom";
import "../../css/style.css"
const Congrats = () => {
    return ( 
        <div className="background h-screen flex flex-col justify-center items-center gap-8 transition-all duration-500">
        <h1 className="text-center text-[60px] text-purple-100 font-semibold">Congratulations</h1>
        <Link to="/Play" className="bg-[#b0b0b08f] shadow-2xl shadow-black hover:bg-[#fff9] hover:text-gray-900  md:w-[50%] w-[80%] h-[10%] rounded-2xl text-[30px] text-center text-white flex flex-row justify-center items-center">wanna play again</Link>
    </div>
     );
}
 
export default Congrats;
/* eslint-disable react/prop-types */
import "../../css/style.css"

const Card = ({item,handle,style}) => {

    return ( 
        <div id="card" onClick={()=>handle(item)} className="bg-red-500 flex justify-center items-center hideAnimation transition-all duration-500 hover:bg-red-400 hover:cursor-pointer">
             <img src={item.src} alt="guess" className={style} />
             
        </div>
     );
};

 
export default Card;
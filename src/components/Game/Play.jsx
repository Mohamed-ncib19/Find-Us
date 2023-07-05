import "../../css/style.css";
import Cards from "../cards/Cards";
const Play = () => {
  return (
    <div  className="background h-screen flex">
      <div className=" md:w-[60%] w-[90%] h-[80%] m-auto border p-2 rounded-xl">
        <Cards />
      </div>
    </div>
  );
};

export default Play;

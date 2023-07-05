import { useEffect, useState } from "react";
import Card from "./Card";
import MyCards from "./data";
import { useNavigate } from "react-router-dom";
import RouteVariant from "../functions/variants";
import { motion } from "framer-motion";


const Cards = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [count, setCount] = useState(0);
  const Navigate = useNavigate();

  const handle = (card) => {
    if (card.check === "") {
      card.check = "clicked";
      filteredArray.push(card);
      setCount(count + 1);
    }
  
  };

  const compare = () => {
    if (count >= 2) {
      const areEqual = filteredArray.every((value) => value.id === filteredArray[0].id);

      if (areEqual) {
        filteredArray.forEach((card) => {
          card.check = "correct";
          
        });
      } else {
        filteredArray.forEach((card) => {
          card.check = "";
        });
      }
      setCount(0);
      setFilteredArray([]);
    }
    
  };

  useEffect(() => {
    compare();
    const correctArray = MyCards.filter((card)=>card.check === "correct");
    if(correctArray.length>=16){
      Navigate('/congrats');
      MyCards.map((card)=>{
        card.check = "";
      })
    }
  }, [handle, MyCards, filteredArray, count]);

  return (
    <motion.div variants={RouteVariant}
    initial="initial"
    animate="final" id="Mycard" className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
      {MyCards.map((card) => (
        <Card
          key={card.index}
          index={card.index}
          id={card.index}
          handle={() => handle(card)}
          item={card}
          style={card.check != ""?"max-w-[80%] max-h-[80%] scale-100 transition-all duration-500"
                                         :"max-w-[80%] max-h-[80%] hideImage scale-0 transition-all duration-500"}
        />
      ))}
    </motion.div>
  );
};

export default Cards;

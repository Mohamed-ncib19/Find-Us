import FirebasePicture from "../../assets/firebase.png"
import HTMLPicture from "../../assets/html.png"
import MEPicture from "../../assets/ME.png"
import PythonPicture from "../../assets/python.png"
import ReactPicture from "../../assets/react.png"
import TailwindPicture from "../../assets/tailwind.png"
import VitePicture from "../../assets/vite.png"
import WpPicture from "../../assets/wp.png"

const MyCards =[
    {id:1 , src:FirebasePicture ,check:"",index:0},
    {id:1 , src:FirebasePicture,check:"",index:1},
    {id:2 , src:HTMLPicture,check:"",index:2},
    {id:2 , src:HTMLPicture,check:"",index:3},
    {id:3 , src:MEPicture,check:"",index:4},
    {id:3 , src:MEPicture,check:"",index:5},
    {id:4 , src:PythonPicture,check:"",index:6},
    {id:4 , src:PythonPicture,check:"",index:7},
    {id:5 , src:ReactPicture,check:"",index:8},
    {id:5 , src:ReactPicture,check:"",index:9},
    {id:6 , src:TailwindPicture,check:"",index:10},
    {id:6 , src:TailwindPicture,check:"",index:11},
    {id:7 , src:VitePicture,check:"",index:12},
    {id:7 , src:VitePicture,check:"",index:13},
    {id:8 , src:WpPicture,check:"",index:14},
    {id:8 , src:WpPicture,check:"",index:15},
].sort(()=>Math.random()-0.5);

export default MyCards;
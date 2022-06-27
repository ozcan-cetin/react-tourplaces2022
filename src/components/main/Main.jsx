import "./main.scss";
import {data} from "../../helpers/data";
import Card from "./Card";

const Main = () => {
  console.log(data)
  return (
    <div className="card-container">
      {data.map((item, index)=> <Card {...item} key={index}/> )}
    </div>
  )
}

export default Main

//! *********************************
// const Main = () => {
//   console.log(data)
//   return (
//     <div className="card-container">
//       {data.map((item)=>{
//         const {id, title, image, desc} = item;
//         return(
//           <div className="cards">
//             <h1>{title}</h1>
//             <img src={image} alt="" />
//             <p>{desc}</p>
//           </div>
//         )
//       })}
//       </div>
//   )
// }

// export default Main
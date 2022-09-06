import React from "react";

//-----------Funtional components
// function Greet() {
//   return <h1>Hello Shruti</h1>;
// }



//------------Arrow funtion concept
export const Greet2 = () => <h1>Hello Shruti😋</h1>;


//-----------Destructuring props in Functional components
const Greet=({name, heroName})=>{
    return (
        <div>
            <h1>
                hello {name} i.e. {heroName}
            </h1>
        </div>
    )

}


//------------UnStructure functional components handling props
// const Greet = (props) => {
//   return (
//     <div>
//       <h1>
//         hello {props.name}  {props.heroName}{" "}
//       </h1>
//       {props.children}
//     </div>
//   );
// };




//------------ Named Export
// export const Greet=()=><h1>Hello Shruti </h1>




//-------------Default export
export default Greet;

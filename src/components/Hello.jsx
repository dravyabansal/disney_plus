import React, { createElement } from "react";

function Hello() {
  //   return (
  //---------- Using JSX
  //     <h1>
  //       Hello Laado😀
  //     </h1>
  //   )

  
  //--------Without JSX
  return React.createElement(
    "div",
    // null,//------- We can add id or class here as
    {id:'hello', className:'dummy'},
    createElement("h1", null, "Hello Shruti")
  );
}
export default Hello;

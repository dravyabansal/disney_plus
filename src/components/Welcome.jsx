import React, { Component } from 'react'

// export class Welcome extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

class Welcome extends Component {
    //---------destructuring props in class Components 

    render(){
        const {name, heroName}=this.props;
        return( 
            <h1>{name}- This is a class Component with {heroName}</h1>
        )
    }
}

export default Welcome;

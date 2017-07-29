import React from "react";
import ReacDOM from "react-dom";
//componet
class Layout extends React.Component{//class js
    render(){//render de js
        return(
            <h1>Hola Mundo</h1>
        );
    }
}
class Layout3 extends React.Component{
    render(){
        return(
            <img src="https://avatars1.githubusercontent.com/u/25367106?v=4&s=460"/>
        );
    }
}
class Layout2 extends React.Component{//class js
      constructor(){
            super();
            this.nombre="Mitch Aguilar"; }
    render(){//render de js
        return(
            <h1>Hola {this.nombre}</h1>
        );
    }
}
const app=document.getElementById('app');
const app2=document.getElementById('app2');
const app3=document.getElementById('app3');

ReacDOM.render(<Layout/>,app);
ReacDOM.render(<Layout2/>,app2);
ReacDOM.render(<Layout3/>,app3);
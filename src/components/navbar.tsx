import React from "react";
//import IError from "xa-generics"


export interface IState {
    loading: boolean;
   // error: IError;
}

class  NavBar extends React.Component {
    state= {
        loading: true,
       // error: null,
    };

    render() {
        return (
           <div>
               
           </div>
        );
    }
}

export default NavBar;
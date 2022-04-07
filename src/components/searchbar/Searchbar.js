import React, { Component } from "react";
import s from "./Searchbar.module.css";


class Searchbar extends Component {
    state = {
        value: "",

    };
   handleChange = event => {
       const {value, name} = event.currentTarget;
       this.setState ({
           [name]: value,
       });
   };
   
   render() {
     const {onSubmit} = this.props;
     return (
         <header
         onSubmit={event => {
             event.preventDefault();
             onSubmit(this.state.value);
         }}
         className= {s.Searchbar}
         >

         </header>
     )  
   }
}
export default Searchbar;
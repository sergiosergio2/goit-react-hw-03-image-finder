import React, { Component } from "react";
import s from "./Searchbar.module.css";
import PropTypes from "prop-types";


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
             <form className={s.SearchForm}>
                 <button type="submit" className={s.SearchFormButton}>
                     <span className={s.SearchFormButtonLabel}>Search</span>
                 </button>

                 <input
                 className={s.SearchFormInput}
                 onChange={this.handleChange}
                 type="text"
                 name={this.state.value}
                 autoComplete="off"
                 autoFocus
                 placeholder="Search images and fotos"
                 />
             </form>

         </header>
     );  
   }
};
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
export default Searchbar;
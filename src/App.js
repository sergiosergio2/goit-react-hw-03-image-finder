import React, {Component} from "react";
import Searchbar from "./components/searchbar";


class App extends Component {
    state = {
        text: "",
    }
    changeSearch = text => {
        if (this.state.text !== text) {
            this.setState({
                text: text.toLowerCase(),
            });
        }
    }
    render() {
        
        return (
            <div className="App">
            <Searchbar />
            </div>
        )
    }
}
export default App;

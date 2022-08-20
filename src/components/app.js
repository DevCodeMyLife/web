import React, {Component} from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <Header auth={false} load={true}/>
                <div className="wrapper">
                    <Content/>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default App;

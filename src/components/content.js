import React, {Component} from "react";
import Feed from "./feed";

class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="wrapper-content">
                <Feed/>
            </div>
        )
    }
}

export default Content;

import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class NewRouter extends Component {
    render() {
        return (
            <div>
                <h2>New-router</h2>
                <Link to="newRouter1"  >New-router1</Link>
                <Link to="newRouter2" >New-router2</Link>
            </div>
        );
    }
}

export default NewRouter;

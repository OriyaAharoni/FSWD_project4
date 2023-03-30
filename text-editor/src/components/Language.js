import React from "react";

class Language extends React.Component{
    render(){
        return(<button onClick={this.props.onClick}>עברית</button>);
    }

}

export default Language
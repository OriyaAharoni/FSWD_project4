import React from "react";
import Language from "./Language";


const english= [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];
const hebrew=[
    ['/', '\'', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך'],
['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת']
];

class Charcomp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {letters: english};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({letters: hebrew});
    }


    render(){

        const charComponent = this.state.letters.map(nested=><div>{nested.map(c=><button>{c}</button>)}</div>)
        //return (<h3>{prop.letter}</h3>)
        return (
            <div>
            <div>{charComponent}</div>
            <Language onClick={this.handleClick}/>
            </div>
            );
    }
}

export default Charcomp
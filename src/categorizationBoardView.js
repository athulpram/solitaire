import React,{Component} from "react";
import Pile from "./pileView";

export default class CategorizationBoard extends Component{
  render(){
    const piles = this.props.piles.map(pile => {
      return <Pile cards={pile} />;
    });

    return <div class="categorization-board">{piles}</div>;
  }
}

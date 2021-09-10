import React, { Component } from "react";
import {FaSearchLocation} from 'react-icons/fa';
import { AyobaStub } from "./ayobastub";
import { getAyoba } from "./microapp";

var Ayoba = getAyoba();
class GetCountry extends Component {
    constructor() {
      super();
      this.state = {
        "country":""
      };
    //   this.getAyoba = this.getAyoba.bind(this);
        this.getCountry = this.getCountry.bind(this);
    }

    componentDidMount() {
        if(Ayoba === null || Ayoba ===undefined){
            Ayoba = AyobaStub
        }
    }

    getCountry() {
    // let ayoba =  this.Ayoba();
    let country = Ayoba.getCountry()
    this.setState({
        "country": country
      });

}


render() {
    return (
    <div className="Location">
        <FaSearchLocation onClick={this.getCountry}/>
        {this.state.country}
    </div>
    );
  }


}
export default GetCountry;
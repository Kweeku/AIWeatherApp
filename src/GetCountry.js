import React, { Component } from "react";


const MockAyoba = {
    getCountry: function(){
        return "MOCK";
    }
};



class GetCountry extends Component {
    constructor() {
      super();
      this.state = {
        "country":""
      };
      this.getAyoba = this.getAyoba.bind(this);
      this.getCountry = this.getCountry.bind(this);
    }

  getAyoba() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return null;
    }

    if (/android/i.test(userAgent)) {
        
        return window["Android"];
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return null; // todo 
    }

    return MockAyoba;
}

getCountry() {
    let ayoba =  this.getAyoba();
    let country = ayoba.getCountry();
    this.setState({
        "country": country
      });

}


render() {
    return (
    <div>
    {/* <hr/> 
         <label> Get Country: </label>
        <div>
            <input type="button" value="Get Country" onClick={this.getCountry} />  
            <input type="text" id="getCountry" value={this.state.country}/> 
        </div>
        <p>
            <p>1. getCountry()</p>
        </p> */}
        {this.getCountry}
    </div>
    );
  }


}
export default GetCountry;
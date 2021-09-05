import React from "react";
import { RiTempColdFill, RiTimeFill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { useHistory} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import { getContactName } from "../microapp";
import {getMsisdn} from "../ayobastub";
import './Menu.scss';
import './Menu.css';


// const history = useHistory();
class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={scale:'c', temp:0}
        this.state={value:'12', time:''}
    }
handleCelsius = (e) =>{
    this.setState({scale:'c',temp:e.target.value})
}
handleFahrenheit = (e) =>{
    this.setState({scale:'f',temp:e.target.value})
}

handle12hrChange= (t,time) =>{
    this.setState({value:'12',time:t.target.value}) 
    const number= Date(time);
    <Moment format="HH:mm">{number}</Moment>
    return(
        number
    )
}

handle24hrChange= (t,time) =>{
    this.setState({value:'24',time:t.target.value})
    const number= Date(time);
    <Moment format="hh:mm:ss">{number}</Moment>
    return(
        number
    )
}

    render(){
        const temp = this.state.temp;
        const time = this.state.time;  
        const scale = this.state.scale;
        const twelve = time === '12' ? this.handle12hrChange : time ==='24' ? this.handle24hrChange : this.handle12hrChange
        const celsius = scale === 'f' ? (temp-32*5/9) : temp;
        const fahrenheit = scale === 'c' ? (temp*9/5+32) : temp;

        const constantName = () =>{
            if (getContactName === null){
                return(
                    getMsisdn()
                )
            }
        }
        return(
<           div className="Menu">
            <h1>SETTINGS</h1>
            <h2>{constantName}</h2>
            <h5 className='mt-3'>
                Welcome Back!
            </h5>

            <section className='mt-5'>
                <Link to={'/home'}>
                <div className='container-setting'>
                    <FaHome />
                    <div className='icon-text'>Home</div>
                </div>
                </Link>
                <div className='hairline'></div>
                <Link to={"/change-location"}>
                <div className='container-setting'>
                    <TiLocation />
                    <div className='icon-text'>Manage Location</div>
                </div>
                </Link>
                <div className='hairline mb-5'></div>
            </section>

            <section>
                <h4>UNIT SETTING</h4>
                <div className='container-unit-setting mt-3'>
                    <div className='unit-content'>
                        <RiTempColdFill />
                        <div className='icon-text'>Temperature</div>
                    </div>
                    <div className="toggle">
                        <input 
                        type="radio" 
                        name="sizeBy" 
                        id="Celsius" 
                        checked 
                        value={celsius}
                        onChange={this.handleCelsius}/>
                        <label htmlFor="Celsius">°C</label>
                        <input 
                        type="radio" 
                        name="sizeBy"
                        id="Fahrenheit"
                        value={fahrenheit}
                        onChange={this.handleFahrenheit}/>
                        <label htmlFor="Fahrenheit">°F</label>
                    </div>
                </div>
                <div className='hairline'></div>
                <div className='container-unit-setting'>
                    <div className='unit-content'>
                        <RiTimeFill />
                        <div className='icon-text'>Time Format</div>
                    </div>
                    <div className="wrapper">
                        <div class="switchToggle">
                            <input type="checkbox" id="switch1" value={twelve} onChange={'24' ? this.handle24hrChange : this.handle12hrChange}/>
                            <label for="switch1">Toggle</label>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        )
    }
}
export default Menu;

import React, { useState, useEffect } from 'react';
import { ClearSkyIcon, HurricaneIcon, OvercastCloudsIcon, SnowIcon, WindyIcon, FogIcon, PartlyCloudyIcon, BreezyMostlyCloudyIcon, BreezyPartlyCloudyIcon } from './subcomponents/WeatherIcons';
import { FiRefreshCcw } from 'react-icons/fi';
import DoughnutChart from './subcomponents/DoughnutChart';
import LineChart from './subcomponents/LineChart';
import MultiType from './subcomponents/MultiTypeChart';
import moment from 'moment';
import { getCountry } from "../microapp";
import './Weather.css';
import { initial } from 'lodash';

let mounted = false;

export default function WeatherComponent() {
    const weatherData = require('../fixture/AIweather.json');
    const [recentData, setRecentData] = useState([]);
    const [briefData, setBriefData] = useState([]);
    const [instantSummary, setInstantSummary] = useState([]);

    if (!mounted) {
        setRecentData(weatherData.slice(-10));
        mounted = true;
    }

    useEffect(() => {

        if (recentData !== []) {
            console.log(recentData);
            setInstantSummary(recentData.slice(-1).shift());
            setBriefData(recentData.slice(-4))
        }
    }, [weatherData])

    const renderWeatherIcon = (condition) => {
        switch (condition) {
            case 'Foggy':
                return <FogIcon />

            case 'Overcast' || 'Mostly Cloudy':
                return <OvercastCloudsIcon />

            case 'Clear':
                return <ClearSkyIcon />

            case 'Partly Cloudy':
                return <PartlyCloudyIcon />

            case 'Breezy and Mostly Cloudy':
                return <BreezyMostlyCloudyIcon />

            case 'Breezy and Partly Cloudy':
                return <BreezyPartlyCloudyIcon />

            default:
                break;
        }
    }
    
    const constantCountry = () =>{
        if (getCountry === null){
            return(
                null
            )
        }
        else {
            return getCountry;
        }
    }

    return (
        <div className='max-width'>
            <div className="container">
                <div className='display-none'>
                    <FiRefreshCcw style={{ height: 35, width: 35, marginBottom: 10 }} />
                </div>
                <div className="spec-margin">
                    <div className="row justify-content-center">
                        <div className='card card-1'>
                            {instantSummary &&
                                <div className="text-black row">
                                    <div className="col">
                                        <div className="div1">
                                            <h5>{constantCountry}</h5>
                                            <h1 className="temp">{Math.round(instantSummary.Temperature_C * 10) / 10}<sup>°C </sup> </h1>
                                            <p className="my-0">Feels like {Math.round(instantSummary.ApparentTemperature_C * 10) / 10}<sup>°C </sup></p>
                                        </div>
                                    </div>
                                    <div className='col-6 d-flex row'>
                                        {renderWeatherIcon(instantSummary.Summary)}
                                        <p className="my-0 mt-2">{instantSummary.DailySummary}</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="spec-margin">
                    <div className="row justify-content-center">
                        <div className='card card-2'>
                            <div className="row">
                                {briefData.map(weather => {
                                    return (
                                        <div className="col">
                                            <div className="row row1">{Math.round(weather.Temperature_C*10)/10}&deg;</div>
                                            <div className='row icon-row'>{renderWeatherIcon(weather.Summary)}</div>
                                            <div className="row row3">{moment(weather.FormattedDate).format('LT')}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container'>
                <div className="spec-margin">
                    <div className="row justify-content-center">
                        <div className='card card-2'>
                            <div className="row">
                                <div className="col">
                                    <div className="row row1">21&deg;</div>
                                    <SnowIcon />
                                    <div className="row row3">Mon</div>
                                </div>
                                <div className="col">
                                    <div className="row row1">20&deg;</div>
                                    <OvercastCloudsIcon />
                                    <div className="row row3">Tue</div>
                                </div>
                                <div className="col">
                                    <div className="row row1">16&deg;</div>
                                    <HurricaneIcon />
                                    <div className="row row3">Wed</div>
                                </div>
                                <div className="col">
                                    <div className="row row1">17&deg;</div>
                                    <FogIcon />
                                    <div className="row row3">Thu</div>
                                </div>
                                <div className="col">
                                    <div className="row row1">18&deg;</div>
                                    <WindyIcon />
                                    <div className="row row3">Fri</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='container'>
                <div className='spec-margin card'>
                    <DoughnutChart humidity={instantSummary.Humidity} title={"Humidity"}/>
                </div>
                <div className='spec-margin card'>
                    <LineChart humidity={instantSummary.Humidity} title={"Humidity"}/>
                </div>
            </div>  
            {/* <div className='container'>
                <div className='spec-margin card'>
                    <LineChart />
                </div>
                <div className='spec-margin card'>
                    <LineChart />
                </div>
            </div>
            <div className='container multitype'>
                <div className='spec-margin card'>
                    <MultiType />
                </div>
            </div> */}
        </div>
    )
}
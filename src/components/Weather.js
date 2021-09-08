import React, { useState, useEffect } from 'react';
import { ClearSkyIcon, HurricaneIcon, OvercastCloudsIcon, SnowIcon, WindyIcon, FogIcon, PartlyCloudyIcon, BreezyMostlyCloudyIcon, BreezyPartlyCloudyIcon } from './subcomponents/WeatherIcons';
import { FiRefreshCcw } from 'react-icons/fi';
import DoughnutChart from './subcomponents/DoughnutChart';
import LineChart from './subcomponents/LineChart';
import moment from 'moment';
import { getCountry } from "../microapp";
import './Weather.css';
import GetCountry from "../GetCountry";

let mounted = false;

export default function WeatherComponent() {
    const weatherData = require('../fixture/AIweather.json');
    const [recentData, setRecentData] = useState([]);
    const [briefData, setBriefData] = useState([]);
    const [state, setState] = useState({
        instantSummary: [],
        pressureLabels: [],
        pressureVals: [],
        tempLabels: [],
        tempVals: [],
        windLabels: [],
        windVals: [],
        humidityLabels: [],
        humidityVals: [],
    });

    if (!mounted) {
        setRecentData(weatherData.slice(-10));
        mounted = true;
    }

    useEffect(() => {

        if (recentData !== []) {
            setState({ ...state, instantSummary: recentData.slice(-1).shift() });
            setBriefData(recentData.slice(-4))

            recentData.map(item => {
                let labelDate = moment(item.FormattedDate).format('HH MM');
                state.pressureLabels.push(labelDate);
                state.tempLabels.push(labelDate);
                state.windLabels.push(labelDate);
                state.humidityLabels.push(labelDate);

                state.pressureVals.push(item.Pressure_millibars)
                state.tempVals.push(item.Temperature_C)
                state.windVals.push(item.WindSpeed_kmperh)
                state.humidityVals.push(item.Humidity)
            })
        }
    }, [recentData])

    const renderWeatherIcon = (condition) => {
        switch (condition) {
            case 'Foggy':
                return <FogIcon />

            case 'Overcast' || 'Mostly Cloudy':
                return <OvercastCloudsIcon />

            case 'Clear':
                return <ClearSkyIcon />

            case 'Snow':
                return <SnowIcon />

            case 'Rain':
                return <HurricaneIcon />

            case 'Windy':
                return <WindyIcon />

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


    return (
        <div className='max-width'>
            <div className="container">
                <div className='display-none'>
                    <FiRefreshCcw style={{ height: 35, width: 35, marginBottom: 10 }} />
                </div>
                <div className="spec-margin">
                    <div className="row">
                        <div className='card card-1'>
                            {state.instantSummary &&
                                <div className="text-black row">
                                    <div className="col">
                                        <GetCountry/>
                                        <h1 className="temp">{Math.round(state.instantSummary.Temperature_C * 10) / 10}<sup>°C </sup> </h1>
                                        <p className="my-0">Feels like {Math.round(state.instantSummary.ApparentTemperature_C * 10) / 10}<sup>°C </sup></p>
                                        <p className="my-0">Wind Speed {Math.round(state.instantSummary.WindSpeed_kmperh * 10) / 10} km/h</p>
                                    </div>
                                    <div className='col-6 d-flex row'>
                                        {renderWeatherIcon(state.instantSummary.Summary)}
                                        <p className="my-0 mt-2">{state.instantSummary.DailySummary}</p>
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
                                {briefData.map((weather, key) => {
                                    return (
                                        <div className="col" key={key}>
                                            <div className="row row1">{Math.round(weather.Temperature_C * 10) / 10}&deg;</div>
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
                    <DoughnutChart humidity={state.instantSummary.Humidity} title={"Humidity"} />
                </div>
                <div className='spec-margin card'>
                    <LineChart chartValues={state.pressureVals} chartLabels={state.pressureLabels} title={"Pressure"} dataLabel={"Pressure (millibars)"} />
                </div>
            </div>
            <div className='container'>
                <div className='spec-margin card'>
                    <LineChart chartValues={state.tempVals} chartLabels={state.tempLabels} title={"Temperature"} dataLabel={"Temperature (°C)"} />
                </div>
                <div className='spec-margin card'>
                    <LineChart chartValues={state.windVals} chartLabels={state.windLabels} title={"Wind Speed"} dataLabel={"Wind Speed (km/h)"} />
                </div>
            </div>
            <div className='container '>
                <div className='spec-margin card'>
                    <LineChart chartValues={state.humidityVals} chartLabels={state.humidityLabels} title={"Humidity"} dataLabel={"Humidity (%)"} />
                </div>
            </div>
        </div>
    )
}
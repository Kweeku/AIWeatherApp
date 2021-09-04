import React from 'react';
import { ClearSkyIcon, HurricaneIcon, OvercastCloudsIcon, SnowIcon, WindyIcon, FogIcon } from './subcomponents/WeatherIcons';
import DoughnutChart from './subcomponents/DoughnutChart';
import LineChart from './subcomponents/LineChart';
import MultiType from './subcomponents/MultiTypeChart';
import './Weather.css'

export default function WeatherComponent() {
    return (
        <div className='max-width'>
            <div className="container">
                <div className="spec-margin">
                    <div className="row justify-content-center">
                        <div className='card card-1'>
                            <div className="text-black row">
                                <div className="col">
                                    <div className="div1">
                                        <h5>Vancouver</h5>
                                        <h1 className="temp">18<sup>°C </sup> </h1>
                                        <p className="my-0">Feels like 14</p>
                                    </div>
                                </div>
                                <div className='col-6 d-flex row'>
                                    <ClearSkyIcon />
                                    <p className="my-0 mt-2">Clear Skies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spec-margin">
                    <div className="row justify-content-center">
                        <div className='card card-2'>
                            <div className="row">
                                <div className="col">
                                    <div className="row row1">21&deg;</div>
                                    <ClearSkyIcon />
                                    <div className="row row3">12:00</div>
                                    <div className="row row4">PM</div>
                                </div>
                                <div className="col">
                                    <div className="row row1">20&deg;</div>
                                    <ClearSkyIcon />
                                    <div className="row row3">1:00</div>
                                    <div className="row row4">PM</div>
                                </div>
                                <div className="col">
                                    <div className="row row1">20&deg;</div>
                                    <OvercastCloudsIcon />
                                    <div className="row row3">2:00</div>
                                    <div className="row row4">PM</div>
                                </div>
                                <div className="col">
                                    <div className="row row1">19&deg;</div>
                                    <OvercastCloudsIcon />
                                    <div className="row row3">3:00</div>
                                    <div className="row row4">PM</div>
                                </div>
                                <div className="col">
                                    <div className="row row1">18&deg;</div>
                                    <HurricaneIcon />
                                    <div className="row row3">4:00</div>
                                    <div className="row row4">PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
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
            </div>
            <div className='container'>
                <div className='spec-margin card'>
                    <DoughnutChart />
                </div>
                <div className='spec-margin card'>
                    <LineChart />
                </div>
            </div>
            <div className='container'>
                <div className='spec-margin card'>
                    <LineChart />
                </div>
                <div className='spec-margin card'>
                    <LineChart />
                </div>
            </div>
            <div className='container'>
                <div className='spec-margin card'>
                    <MultiType />
                </div>
            </div>
        </div>
    )
}
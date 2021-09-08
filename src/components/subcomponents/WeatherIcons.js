import React from 'react';
import './WeatherIcons.scss'

export function HurricaneIcon() {
    return (
        <div className="svg-contain">
            <svg
                className="hurricane-svg" version="1.1"
                id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="-437 254.4 85 52.6"

            >
                <path className="cloud" d="M-361.9,280.5c1.4,0,2.6,0.7,3.4,1.7h1.1c0.4-8.2-5.9-10.8-5.9-10.8c-2.2-1.5-5.4-1-5.4-1
                    c-0.1-4.1-2.9-7.4-2.9-7.4c-4.7-5.5-10.3-4.9-10.3-4.9c-7.4-0.2-11,5.9-11,5.9c-5.6-4-14.3-2.6-18.2,3.1c-0.7,1.1-1.3,2.2-1.8,3.4
                    c0,0.1-0.3,1.2-0.4,1.2c3.5-0.6,6.6,1.6,6.6,1.6s1.1-1.1,1.2-1.3c2.4-2.4,5.6-3.6,9-3.2c4.4,0.5,8.5,3,9.9,7.4
                    c0.1,0.2,0.8,2.4,0.6,2.4c5.3,0.1,7.3,3.6,7.3,3.6h13.4C-364.5,281.2-363.3,280.5-361.9,280.5z"
                />
                <path className="cloud" d="M-386,279.6c-0.2,0-0.4,0-0.6,0.1c-0.1-0.8-0.2-1.7-0.4-2.4c-0.3-1-0.8-2-1.4-2.9c-2-2.9-5.3-4.8-9-4.8
                    c-2.3,0-4.4,0.7-6.1,1.9c-0.6,0.4-1.1,0.8-1.6,1.3c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.5-0.6,0.8c-1.8-1.2-3.9-1.9-6.2-1.9
                    c-5.5,0-10,4-10.8,9.3c-3.5,1-6.1,3.9-6.6,7.6h26.3h12.7h2.3l4.7-6.2c0.6-0.8,1.7-0.9,2.5-0.3s0.9,1.7,0.3,2.5l-3.1,4h0.5h5.6h0.7
                    c0.1,0,0.2-0.4,0.2-1.1C-377.4,283.5-381.3,279.6-386,279.6z"
                />
                <polyline className="lightening" points="-382.8,284.2 -387.9,290.9 -380.6,291.2 -387.9,302 " />
                <path className="line" d="M-426.9,294.4l-5.1,7.3" />
                <path className="line" d="M-420.8,294.4l-5.1,7.3" />
                <path className="line" d="M-415.4,294.4l-5.1,7.3" />
                <path className="line" d="M-409.9,294.4l-5.1,7.3" />
                <path className="line" d="M-404.5,294.4l-5.1,7.3" />
                <path className="line" d="M-399.1,294.4l-5.1,7.3" />
                <path className="line" d="M-393.7,294.4l-5.1,7.3" />
                <path className="line" d="M-388.2,294.4l-5.1,7.3" />
                <g>
                    <path className="little-path path-1" d="M-374.8,287.2h10.6" />
                    <path className="little-path path-2" d="M-373.8,289.3h10.9" />
                    <path className="big-path" d="M-376,288.3c0,0,14,0,14,0c1.7,0,3.1-1.4,3.3-3.1c0-0.5,0-1-0.3-1.4c-0.9-2.3-4.1-2.7-5.6-0.7
                        c-0.4,0.6-0.7,1.3-0.7,1.9"/>
                    <path className="little-path path-3" d="M-364.1,285c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2" />
                </g>
            </svg>
        </div>
    )
};

export function ClearSkyIcon() {
    return (
        <div className="svg-contain">
            <svg
                version="1.1" className="clear-sky-svg" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 72.3 52.6"

            >
                <g>
                    <path className="sun" d="M50.8,25.7c0,7.9-6.4,14.4-14.4,14.4s-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4S50.8,17.8,50.8,25.7z" />
                    <path className="line big-path line-1" d="M54.5,25.8h6" />
                    <path className="line big-path line-2" d="M12.4,25.8h6" />
                    <path className="line big-path line-3" d="M36.5,44.3v6" />
                    <path className="line big-path line-4" d="M36.5,8.2v-6" />
                    <path className="line big-path line-5" d="M23,38.8l-4.8,4.8" />
                    <path className="line big-path line-6" d="M54.9,8.9L50,13.8" />
                    <path className="line big-path line-7" d="M50,38.8l4.4,4.4" />
                    <path className="line big-path line-8" d="M18.8,9.6l4.2,4.2" />
                </g>
            </svg>
        </div>
    )
};

export function WindyIcon() {
    return (
        <div className="svg-contain">
            <svg
                version="1.1" className="windy-svg" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="-447 254.4 64 52.6"

            >
                <g id="Layer_1_1_">
                    <g>
                        <path className="st0 little-path path-1" d="M-429.2,276.8h6.3" />
                        <path className="big-path big-path-1" d="M-438.1,279.3c0,0,20.5,0,20.6,0c4.1,0,7.4-3.4,7.7-7.4c0.1-1.1-0.1-2.3-0.6-3.3c-2.2-5.4-9.8-6.3-13.3-1.7
            c-1,1.3-1.6,3-1.7,4.6"/>
                        <path className="little-path path-2" d="M-422.6,271.7c0-2.8,2.3-5.1,5.1-5.1s5.1,2.3,5.1,5.1c0,2.8-2.3,5.1-5.1,5.1" />
                    </g>
                    <g>
                        <path className="little-path path-3" d="M-434.1,284.9h30.4" />
                        <path className="little-path path-4" d="M-410.6,280h8.7" />
                        <path className="big-path big-path-2" d="M-442.9,282.7h44c3.6,0,6.6,3,6.8,6.5c0.1,1-0.1,2-0.5,3c-2,4.8-8.7,5.5-11.8,1.5c-0.9-1.2-1.4-2.6-1.5-4.1"
                        />
                        <path className="little-path path-5" d="M-403.4,289.4c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5s-2-4.5-4.5-4.5" />
                    </g>
                </g>
            </svg>
        </div>
    )
};

export function OvercastCloudsIcon() {
    return (
        <div className="svg-contain">
            <svg
                className="overcast-clouds" version="1.1" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 82.6 52.3"
            >
                <g id="Layer_1">
                    <path className="cloud-still" d="M21.8,24.2c0.1,0,0.3-1.1,0.4-1.2c0.5-1.2,1.1-2.4,1.8-3.4c3.9-5.7,12.6-7.1,18.2-3.1c0,0,3.7-6,11-5.9
		                c0,0,5.6-0.6,10.3,4.9c0,0,2.8,3.3,2.9,7.4c0,0,3.2-0.5,5.4,1c0,0,6.2,2.6,5.9,10.8H56.3c0,0-2-3.5-7.3-3.6c0.2,0-0.5-2.2-0.6-2.4
		                c-1.4-4.4-5.5-6.9-9.9-7.4c-3.4-0.4-6.6,0.8-9,3.2c-0.1,0.1-1.2,1.3-1.2,1.3S25.3,23.6,21.8,24.2z"/>
                    <path className="cloud-still" d="M57.6,40.7c0-4.8-3.9-8.6-8.6-8.6c-0.2,0-0.4,0-0.6,0.1c-0.1-0.8-0.2-1.7-0.4-2.4c-0.3-1-0.8-2-1.4-2.9
		                c-2-2.9-5.3-4.8-9-4.8c-2.3,0-4.4,0.7-6.1,1.9c-0.6,0.4-1.1,0.8-1.6,1.3c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.5-0.6,0.8
		                c-1.8-1.2-3.9-1.9-6.2-1.9c-5.5,0-10,4-10.8,9.3c-3.5,1-6.1,3.9-6.6,7.6h26.3h12.7h12.9h0.7C57.6,41.8,57.6,41.4,57.6,40.7z"/>
                </g>
                <g id="Layer_2">
                </g>
            </svg>
        </div>
    )
};

export function SnowIcon() {
    return (
        <div className="svg-contain">
            <svg
                version="1.1" className="snow-svg" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 70.3 52.6"
            >
                <g id="Layer_1">
                    <path className="cloud" d="M63.9,30.9c0-5.2-4.2-9.4-9.4-9.4c-0.2,0-0.4,0.1-0.7,0.1c-0.1-0.9-0.2-1.8-0.5-2.7c-0.3-1.1-0.9-2.2-1.5-3.1
		                c-2.1-3.2-5.8-5.3-9.9-5.3c-2.5,0-4.8,0.7-6.7,2c-0.6,0.4-1.2,0.9-1.8,1.5c-0.3,0.3-0.5,0.6-0.8,0.8c-0.2,0.3-0.5,0.6-0.7,0.9
		                c-1.9-1.3-4.2-2.1-6.7-2.1c-6,0-10.9,4.4-11.8,10.1c-3.8,1.1-6.7,4.3-7.2,8.3h28.7h13.9H63h0.8C63.9,32.1,63.9,31.7,63.9,30.9z"/>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="10.3" y1="37" x2="10.3" y2="43.5" />
                        <line className="snowflake-path big-path" x1="13.5" y1="40.3" x2="7" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="12.6" y1="38" x2="8" y2="42.6" />
                            <line className="snowflake-path big-path" x1="12.6" y1="42.6" x2="8" y2="38" />
                        </g>
                    </g>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="22.7" y1="37" x2="22.7" y2="43.5" />
                        <line className="snowflake-path big-path" x1="25.9" y1="40.3" x2="19.4" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="25" y1="38" x2="20.4" y2="42.6" />
                            <line className="snowflake-path big-path" x1="25" y1="42.6" x2="20.4" y2="38" />
                        </g>
                    </g>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="35.2" y1="37" x2="35.2" y2="43.5" />
                        <line className="snowflake-path big-path" x1="38.4" y1="40.3" x2="31.9" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="37.5" y1="38" x2="32.9" y2="42.6" />
                            <line className="snowflake-path big-path" x1="37.5" y1="42.6" x2="32.9" y2="38" />
                        </g>
                    </g>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="48.3" y1="37" x2="48.3" y2="43.5" />
                        <line className="snowflake-path big-path" x1="51.6" y1="40.3" x2="45" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="50.6" y1="38" x2="46" y2="42.6" />
                            <line className="snowflake-path big-path" x1="50.6" y1="42.6" x2="46" y2="38" />
                        </g>
                    </g>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="60.5" y1="37" x2="60.5" y2="43.5" />
                        <line className="snowflake-path big-path" x1="63.7" y1="40.3" x2="57.2" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="62.8" y1="38" x2="58.2" y2="42.6" />
                            <line className="snowflake-path big-path" x1="62.8" y1="42.6" x2="58.2" y2="38" />
                        </g>
                    </g>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="10.3" y1="37" x2="10.3" y2="43.5" />
                        <line className="snowflake-path big-path" x1="13.5" y1="40.3" x2="7" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="12.6" y1="38" x2="8" y2="42.6" />
                            <line className="snowflake-path big-path" x1="12.6" y1="42.6" x2="8" y2="38" />
                        </g>
                    </g>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="22.7" y1="37" x2="22.7" y2="43.5" />
                        <line className="snowflake-path big-path" x1="25.9" y1="40.3" x2="19.4" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="25" y1="38" x2="20.4" y2="42.6" />
                            <line className="snowflake-path big-path" x1="25" y1="42.6" x2="20.4" y2="38" />
                        </g>
                    </g>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="35.2" y1="37" x2="35.2" y2="43.5" />
                        <line className="snowflake-path big-path" x1="38.4" y1="40.3" x2="31.9" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="37.5" y1="38" x2="32.9" y2="42.6" />
                            <line className="snowflake-path big-path" x1="37.5" y1="42.6" x2="32.9" y2="38" />
                        </g>
                    </g>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="48.3" y1="37" x2="48.3" y2="43.5" />
                        <line className="snowflake-path big-path" x1="51.6" y1="40.3" x2="45" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="50.6" y1="38" x2="46" y2="42.6" />
                            <line className="snowflake-path big-path" x1="50.6" y1="42.6" x2="46" y2="38" />
                        </g>
                    </g>
                    <g className="snowflake">
                        <line className="snowflake-path big-path" x1="60.5" y1="37" x2="60.5" y2="43.5" />
                        <line className="snowflake-path big-path" x1="63.7" y1="40.3" x2="57.2" y2="40.3" />
                        <g>
                            <line className="snowflake-path big-path" x1="62.8" y1="38" x2="58.2" y2="42.6" />
                            <line className="snowflake-path big-path" x1="62.8" y1="42.6" x2="58.2" y2="38" />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
};

export function FogIcon() {
    return (
        <div className="svg-contain">
            <svg
                className="fog-svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 68 52.6"
            >
                <g id="Layer_1">
                    <g>
                        <path className="cloud st3" d="M62.8,29.3c0-5.2-4.2-9.4-9.4-9.4c-0.2,0-0.4,0.1-0.7,0.1c-0.1-0.9-0.2-1.8-0.5-2.7c-0.3-1.1-0.9-2.2-1.5-3.1
                            C48.6,11,44.9,9,40.8,9c-2.5,0-4.8,0.7-6.7,2c-0.6,0.4-1.2,0.9-1.8,1.5c-0.3,0.3-0.5,0.6-0.8,0.8c-0.2,0.3-0.5,0.6-0.7,0.9
                            c-1.9-1.3-4.2-2.1-6.7-2.1c-6,0-10.9,4.4-11.8,10.1c-3.8,1.1-6.7,4.3-7.2,8.3h28.7h13.9h14.1h0.8C62.7,30.6,62.8,30.1,62.8,29.3z"
                        />
                        <path className="fog-line big-path" d="M7.3,28.8h12.4" />
                        <path className="fog-line big-path" d="M23.5,28.8h38.4" />
                        <path className="fog-line big-path" d="M57.3,32.6h5.2" />
                        <path className="fog-line big-path" d="M31.2,32.6h22.1" />
                        <path className="fog-line big-path" d="M6.2,32.6h21.1" />
                        <path className="fog-line big-path" d="M11.4,43.6H6.2" />
                        <path className="fog-line big-path" d="M37.5,43.6H15.4" />
                        <path className="fog-line big-path" d="M62.5,43.6H41.4" />
                        <path className="fog-line big-path" d="M6.2,36.4h2.1" />
                        <path className="fog-line big-path" d="M11.9,36.4h6" />
                        <path className="fog-line big-path" d="M21.8,36.4h20.4" />
                        <path className="fog-line big-path" d="M46.3,36.4h16.1" />
                        <path className="fog-line big-path" d="M55.2,40.2h7.3" />
                        <path className="fog-line big-path" d="M48.3,40.2h2.8" />
                        <path className="fog-line big-path" d="M37.3,40.2H44" />
                        <path className="fog-line big-path" d="M18.3,40.2h15.3" />
                        <path className="fog-line big-path" d="M6.2,40.2h8" />
                    </g>
                </g>

            </svg>
        </div>
    )
};

export function PartlyCloudyIcon() {
    return (
        <svg className="icon icon-partly-cloudy" viewBox="0 0 220 220">
            {/* <!--       Short rays --> */}
            <g className="sunny-short-ray">
                <path fill="#43647E" d="M147.961,63.447l-0.014-8.394c-0.003-1.617-1.318-2.927-2.935-2.925c-1.616,0.003-2.924,1.318-2.924,2.935
		l0.014,8.474C144.064,63.375,146.021,63.354,147.961,63.447z"/>
                <path fill="#43647E" d="M111.396,79.343c1.257-1.484,2.607-2.9,4.063-4.221l-5.938-5.918c-1.146-1.142-3-1.14-4.143,0.005
		c-1.142,1.146-1.139,3.001,0.008,4.142L111.396,79.343z"/>
                <path fill="#43647E" d="M199.276,110.648c0.388-0.001,0.756-0.078,1.094-0.213c1.074-0.437,1.83-1.492,1.83-2.721
		c-0.004-1.617-1.315-2.927-2.933-2.925l-8.478,0.015c0.164,1.96,0.186,3.917,0.091,5.856L199.276,110.648z"/>
                <path fill="#43647E" d="M179.207,78.158l5.918-5.937c1.144-1.146,1.14-3-0.005-4.142c-1.147-1.143-3.001-1.14-4.143,0.004
		l-5.992,6.013C176.471,75.353,177.884,76.704,179.207,78.158z"/>
                <path fill="#43647E" d="M92.353,106.382c-1.619,0.002-2.928,1.317-2.924,2.935c0.004,1.615,1.318,2.925,2.934,2.923l8.473-0.014
		c-0.16-1.963-0.182-3.917-0.088-5.858L92.353,106.382z"/>
                <path fill="#43647E" d="M180.234,137.686c-1.258,1.484-2.609,2.899-4.063,4.223l5.939,5.918c0.857,0.855,2.111,1.068,3.167,0.639
		c0.354-0.143,0.687-0.357,0.974-0.646c1.143-1.145,1.139-3-0.006-4.141L180.234,137.686z"/>
                <path fill="#43647E" d="M143.669,153.582l0.013,8.395c0.003,1.617,1.317,2.928,2.934,2.922c0.388,0,0.755-0.074,1.093-0.213
		c1.077-0.434,1.834-1.488,1.83-2.719l-0.014-8.475C147.564,153.654,145.608,153.676,143.669,153.582z"/>
                <path fill="#43647E" d="M112.421,138.871l-5.917,5.938c-1.142,1.144-1.141,2.999,0.006,4.142c0.857,0.855,2.112,1.068,3.17,0.641
		c0.354-0.144,0.687-0.361,0.972-0.646l5.991-6.012C115.159,141.676,113.743,140.326,112.421,138.871z"/>
            </g>
            {/* <!--       Long rays --> */}
            <g className="sunny-long-ray">
                <path fill="#43647E" d="M174.495,49.723c0.936-2.209-0.096-4.761-2.307-5.697c-2.211-0.938-4.763,0.096-5.697,2.306l-7.959,18.792
		c-0.014,0.034-0.021,0.07-0.035,0.103c2.787,0.818,5.487,1.9,8.064,3.232L174.495,49.723z"/>
                <path fill="#43647E" d="M124.124,68.841c0.014,0.031,0.035,0.058,0.051,0.091c1.508-0.822,3.072-1.576,4.703-2.238
		c1.087-0.44,2.184-0.82,3.283-1.17l-7.639-18.862c-0.901-2.226-3.436-3.298-5.662-2.397c-2.223,0.901-3.299,3.435-2.395,5.66
		L124.124,68.841z"/>
                <path fill="#43647E" d="M83.633,87.838l18.79,7.959c0.033,0.012,0.07,0.021,0.104,0.032c0.818-2.786,1.901-5.485,3.234-8.061
		l-18.74-7.935c-2.209-0.937-4.761,0.098-5.696,2.308C80.388,84.354,81.423,86.904,83.633,87.838z"/>
                <path fill="#43647E" d="M185.397,86.874c0.821,1.508,1.576,3.074,2.236,4.705c0.439,1.088,0.821,2.183,1.171,3.284l18.862-7.638
		c2.226-0.902,3.299-3.437,2.398-5.661c-0.901-2.224-3.437-3.299-5.661-2.398l-18.916,7.66
		C185.458,86.837,185.43,86.859,185.397,86.874z"/>
                <path fill="#43647E" d="M117.135,167.308c-0.937,2.21,0.097,4.761,2.308,5.696c1.105,0.469,2.295,0.445,3.324,0.027
		c1.034-0.418,1.905-1.229,2.371-2.334l7.959-18.789c0.016-0.035,0.023-0.071,0.037-0.104c-2.787-0.818-5.488-1.901-8.065-3.233
		L117.135,167.308z"/>
                <path fill="#43647E" d="M167.503,148.19c-0.012-0.033-0.031-0.062-0.047-0.093c-1.508,0.822-3.074,1.574-4.704,2.238
		c-1.089,0.439-2.185,0.82-3.284,1.17l7.639,18.863c0.901,2.225,3.436,3.297,5.662,2.395c2.223-0.901,3.297-3.434,2.397-5.659
		L167.503,148.19z"/>
                <path fill="#43647E" d="M106.233,130.157c-0.824-1.51-1.578-3.074-2.238-4.707c-0.441-1.085-0.821-2.183-1.171-3.282l-18.862,7.641
		c-2.225,0.899-3.297,3.436-2.396,5.658c0.9,2.227,3.435,3.299,5.66,2.398l18.914-7.66
		C106.173,130.191,106.2,130.172,106.233,130.157z"/>
                <path fill="#43647E" d="M207.997,129.191l-18.791-7.959c-0.033-0.014-0.068-0.02-0.104-0.033c-0.818,2.786-1.9,5.484-3.234,8.062
		l18.739,7.936c1.104,0.467,2.295,0.443,3.327,0.025c1.029-0.417,1.902-1.228,2.371-2.334
		C211.24,132.678,210.207,130.127,207.997,129.191z"/>
            </g>
            {/* <!--       Sun body --> */}
            <g className="sunny-body">
                <path fill="#43647E" d="M178.702,95.196c-7.357-18.162-28.043-26.923-46.205-19.568c-18.164,7.356-26.925,28.045-19.568,46.205
	c7.354,18.165,28.043,26.926,46.205,19.569C177.298,134.045,186.058,113.36,178.702,95.196z M153.348,82.979
	c-0.411,1.812-2.217,2.948-4.026,2.535c-4.427-1.007-8.997-0.636-13.221,1.075c-5.488,2.224-9.782,6.45-12.091,11.9
	c-2.308,5.452-2.356,11.475-0.134,16.964c0.697,1.721-0.134,3.684-1.857,4.381c-0.413,0.168-0.841,0.248-1.262,0.248
	c-1.33,0-2.588-0.795-3.117-2.104c-2.898-7.154-2.836-15.008,0.174-22.113c3.007-7.108,8.605-12.619,15.76-15.516
	c5.504-2.229,11.469-2.715,17.241-1.398C152.626,79.363,153.762,81.167,153.348,82.979z"/>
            </g>
            {/* <!--       Cloud offset --> */}
            <g className="cloud-offset">
                <path fill="#43647E" d="M113.903,179.264c-6.173,0-12.273-1.229-17.931-3.585
	c-6.062,2.515-12.218,3.585-19.999,3.585c-8.325,0-16.356-1.866-23.959-5.559c-5.329,2.711-11.262,4.119-17.492,4.119
	c-21.27,0-38.574-17.306-38.574-38.576c0-15.345,9.325-29.175,22.996-35.269c6.653-25.268,29.615-42.96,57.029-42.96
	c19.873,0,38.259,9.958,49.18,26.313c20.532,5.085,35.406,23.653,35.406,45.276C160.56,158.334,139.63,179.264,113.903,179.264z"/></g>
            {/* <!--       Main cloud --> */}
            <g className="main-cloud">
                <path fill="#43647E" d="M118.294,97.231c-8.359-15.388-24.715-25.212-42.32-25.212c-24.457,0-44.283,17.108-47.506,40.333
	c-12.301,2.767-21.52,13.771-21.52,26.896c0,15.205,12.369,27.576,27.574,27.576c6.396,0,12.348-2.078,17.133-5.917
	c7.713,4.944,15.705,7.356,24.318,7.356c8.145,0,13.68-1.295,20.043-4.816c5.418,3.152,11.541,4.816,17.887,4.816
                        c19.662,0,35.656-15.996,35.656-35.656C149.56,114.432,135.888,99.401,118.294,97.231z"/></g>
        </svg>
    )
};

export function BreezyPartlyCloudyIcon() {
    return (
        <svg className="icon icon-partly-cloudy" viewBox="0 0 220 220">
            {/* <!--       Short rays --> */}
            <g className="sunny-short-ray">
                <path fill="#43647E" d="M147.961,63.447l-0.014-8.394c-0.003-1.617-1.318-2.927-2.935-2.925c-1.616,0.003-2.924,1.318-2.924,2.935
		l0.014,8.474C144.064,63.375,146.021,63.354,147.961,63.447z"/>
                <path fill="#43647E" d="M111.396,79.343c1.257-1.484,2.607-2.9,4.063-4.221l-5.938-5.918c-1.146-1.142-3-1.14-4.143,0.005
		c-1.142,1.146-1.139,3.001,0.008,4.142L111.396,79.343z"/>
                <path fill="#43647E" d="M199.276,110.648c0.388-0.001,0.756-0.078,1.094-0.213c1.074-0.437,1.83-1.492,1.83-2.721
		c-0.004-1.617-1.315-2.927-2.933-2.925l-8.478,0.015c0.164,1.96,0.186,3.917,0.091,5.856L199.276,110.648z"/>
                <path fill="#43647E" d="M179.207,78.158l5.918-5.937c1.144-1.146,1.14-3-0.005-4.142c-1.147-1.143-3.001-1.14-4.143,0.004
		l-5.992,6.013C176.471,75.353,177.884,76.704,179.207,78.158z"/>
                <path fill="#43647E" d="M92.353,106.382c-1.619,0.002-2.928,1.317-2.924,2.935c0.004,1.615,1.318,2.925,2.934,2.923l8.473-0.014
		c-0.16-1.963-0.182-3.917-0.088-5.858L92.353,106.382z"/>
                <path fill="#43647E" d="M180.234,137.686c-1.258,1.484-2.609,2.899-4.063,4.223l5.939,5.918c0.857,0.855,2.111,1.068,3.167,0.639
		c0.354-0.143,0.687-0.357,0.974-0.646c1.143-1.145,1.139-3-0.006-4.141L180.234,137.686z"/>
                <path fill="#43647E" d="M143.669,153.582l0.013,8.395c0.003,1.617,1.317,2.928,2.934,2.922c0.388,0,0.755-0.074,1.093-0.213
		c1.077-0.434,1.834-1.488,1.83-2.719l-0.014-8.475C147.564,153.654,145.608,153.676,143.669,153.582z"/>
                <path fill="#43647E" d="M112.421,138.871l-5.917,5.938c-1.142,1.144-1.141,2.999,0.006,4.142c0.857,0.855,2.112,1.068,3.17,0.641
		c0.354-0.144,0.687-0.361,0.972-0.646l5.991-6.012C115.159,141.676,113.743,140.326,112.421,138.871z"/>
            </g>
            {/* <!--       Long rays --> */}
            <g className="sunny-long-ray">
                <path fill="#43647E" d="M174.495,49.723c0.936-2.209-0.096-4.761-2.307-5.697c-2.211-0.938-4.763,0.096-5.697,2.306l-7.959,18.792
		c-0.014,0.034-0.021,0.07-0.035,0.103c2.787,0.818,5.487,1.9,8.064,3.232L174.495,49.723z"/>
                <path fill="#43647E" d="M124.124,68.841c0.014,0.031,0.035,0.058,0.051,0.091c1.508-0.822,3.072-1.576,4.703-2.238
		c1.087-0.44,2.184-0.82,3.283-1.17l-7.639-18.862c-0.901-2.226-3.436-3.298-5.662-2.397c-2.223,0.901-3.299,3.435-2.395,5.66
		L124.124,68.841z"/>
                <path fill="#43647E" d="M83.633,87.838l18.79,7.959c0.033,0.012,0.07,0.021,0.104,0.032c0.818-2.786,1.901-5.485,3.234-8.061
		l-18.74-7.935c-2.209-0.937-4.761,0.098-5.696,2.308C80.388,84.354,81.423,86.904,83.633,87.838z"/>
                <path fill="#43647E" d="M185.397,86.874c0.821,1.508,1.576,3.074,2.236,4.705c0.439,1.088,0.821,2.183,1.171,3.284l18.862-7.638
		c2.226-0.902,3.299-3.437,2.398-5.661c-0.901-2.224-3.437-3.299-5.661-2.398l-18.916,7.66
		C185.458,86.837,185.43,86.859,185.397,86.874z"/>
                <path fill="#43647E" d="M117.135,167.308c-0.937,2.21,0.097,4.761,2.308,5.696c1.105,0.469,2.295,0.445,3.324,0.027
		c1.034-0.418,1.905-1.229,2.371-2.334l7.959-18.789c0.016-0.035,0.023-0.071,0.037-0.104c-2.787-0.818-5.488-1.901-8.065-3.233
		L117.135,167.308z"/>
                <path fill="#43647E" d="M167.503,148.19c-0.012-0.033-0.031-0.062-0.047-0.093c-1.508,0.822-3.074,1.574-4.704,2.238
		c-1.089,0.439-2.185,0.82-3.284,1.17l7.639,18.863c0.901,2.225,3.436,3.297,5.662,2.395c2.223-0.901,3.297-3.434,2.397-5.659
		L167.503,148.19z"/>
                <path fill="#43647E" d="M106.233,130.157c-0.824-1.51-1.578-3.074-2.238-4.707c-0.441-1.085-0.821-2.183-1.171-3.282l-18.862,7.641
		c-2.225,0.899-3.297,3.436-2.396,5.658c0.9,2.227,3.435,3.299,5.66,2.398l18.914-7.66
		C106.173,130.191,106.2,130.172,106.233,130.157z"/>
                <path fill="#43647E" d="M207.997,129.191l-18.791-7.959c-0.033-0.014-0.068-0.02-0.104-0.033c-0.818,2.786-1.9,5.484-3.234,8.062
		l18.739,7.936c1.104,0.467,2.295,0.443,3.327,0.025c1.029-0.417,1.902-1.228,2.371-2.334
		C211.24,132.678,210.207,130.127,207.997,129.191z"/>
            </g>
            {/* <!--       Sun body --> */}
            <g className="sunny-body">
                <path fill="#43647E" d="M178.702,95.196c-7.357-18.162-28.043-26.923-46.205-19.568c-18.164,7.356-26.925,28.045-19.568,46.205
	c7.354,18.165,28.043,26.926,46.205,19.569C177.298,134.045,186.058,113.36,178.702,95.196z M153.348,82.979
	c-0.411,1.812-2.217,2.948-4.026,2.535c-4.427-1.007-8.997-0.636-13.221,1.075c-5.488,2.224-9.782,6.45-12.091,11.9
	c-2.308,5.452-2.356,11.475-0.134,16.964c0.697,1.721-0.134,3.684-1.857,4.381c-0.413,0.168-0.841,0.248-1.262,0.248
	c-1.33,0-2.588-0.795-3.117-2.104c-2.898-7.154-2.836-15.008,0.174-22.113c3.007-7.108,8.605-12.619,15.76-15.516
	c5.504-2.229,11.469-2.715,17.241-1.398C152.626,79.363,153.762,81.167,153.348,82.979z"/>
            </g>
            {/* <!--       Cloud offset --> */}
            <g className="cloud-offset">
                <path fill="#43647E" d="M113.903,179.264c-6.173,0-12.273-1.229-17.931-3.585
	c-6.062,2.515-12.218,3.585-19.999,3.585c-8.325,0-16.356-1.866-23.959-5.559c-5.329,2.711-11.262,4.119-17.492,4.119
	c-21.27,0-38.574-17.306-38.574-38.576c0-15.345,9.325-29.175,22.996-35.269c6.653-25.268,29.615-42.96,57.029-42.96
	c19.873,0,38.259,9.958,49.18,26.313c20.532,5.085,35.406,23.653,35.406,45.276C160.56,158.334,139.63,179.264,113.903,179.264z"/></g>
            {/* <!--       Main cloud --> */}
            <g className="main-cloud">
                <path fill="#43647E" d="M118.294,97.231c-8.359-15.388-24.715-25.212-42.32-25.212c-24.457,0-44.283,17.108-47.506,40.333
	c-12.301,2.767-21.52,13.771-21.52,26.896c0,15.205,12.369,27.576,27.574,27.576c6.396,0,12.348-2.078,17.133-5.917
	c7.713,4.944,15.705,7.356,24.318,7.356c8.145,0,13.68-1.295,20.043-4.816c5.418,3.152,11.541,4.816,17.887,4.816
                        c19.662,0,35.656-15.996,35.656-35.656C149.56,114.432,135.888,99.401,118.294,97.231z"/></g>
            <g className="wind-string">
                <path fill="none" stroke="#43637D" stroke-miterlimit="10" d="M85.263,105.176
		c3.002-1.646,6.403-2.549,9.903-2.549c11.375,0,20.633,9.256,20.633,20.633s-9.258,20.633-20.633,20.633H3.473"/>
                <path fill="none" stroke="#43637D" stroke-miterlimit="10" d="M69.756,113.884
		c1.62-0.888,3.457-1.376,5.345-1.376c6.14,0,11.136,4.996,11.136,11.137c0,6.14-4.996,11.136-11.136,11.136H25.313"/>
                <path fill="none" stroke="#43637D" stroke-miterlimit="10" d="M75.536,180.462
		c2.131,1.166,4.545,1.809,7.027,1.809c8.072,0,14.642-6.569,14.642-14.643s-6.569-14.643-14.642-14.643H18.043"/>
            </g>
        </svg>
    )
};

export function BreezyMostlyCloudyIcon() {
    return (
        <svg className="icon icon-windy" viewBox="0 0 220 220">
            {/* <!--       Small cloud --> */}
            <g className="small-cloud">
                <path fill="#43647E" d="M69.054,67.463c-5.109-9.405-15.105-15.409-25.866-15.409c-14.947,0-27.066,10.456-29.036,24.651
	C6.634,78.396,1,85.121,1,93.143c0,9.293,7.561,16.854,16.853,16.854c3.911,0,7.547-1.27,10.472-3.617
	c4.715,3.022,9.6,4.497,14.864,4.497c4.978,0,8.361-0.792,12.25-2.944c3.312,1.927,7.053,2.944,10.932,2.944
	c12.016,0,21.792-9.776,21.792-21.792C88.162,77.976,79.807,68.789,69.054,67.463z"/></g>
            {/* <!--       Cloud offset --> */}
            <g className="cloud-offset">
                <path fill="#43647E" d="M113.903,179.264c-6.173,0-12.273-1.229-17.931-3.585
	c-6.062,2.515-12.218,3.585-19.999,3.585c-8.325,0-16.356-1.866-23.959-5.559c-5.329,2.711-11.262,4.119-17.492,4.119
	c-21.27,0-38.574-17.306-38.574-38.576c0-15.345,9.325-29.175,22.996-35.269c6.653-25.268,29.615-42.96,57.029-42.96
	c19.873,0,38.259,9.958,49.18,26.313c20.532,5.085,35.406,23.653,35.406,45.276C160.56,158.334,139.63,179.264,113.903,179.264z"/></g>
            {/* <!--       Main cloud --> */}
            <g className="main-cloud">
                <path fill="#43647E" d="M118.294,97.231c-8.359-15.388-24.715-25.212-42.32-25.212c-24.457,0-44.283,17.108-47.506,40.333
	c-12.301,2.767-21.52,13.771-21.52,26.896c0,15.205,12.369,27.576,27.574,27.576c6.396,0,12.348-2.078,17.133-5.917
	c7.713,4.944,15.705,7.356,24.318,7.356c8.145,0,13.68-1.295,20.043-4.816c5.418,3.152,11.541,4.816,17.887,4.816
                        c19.662,0,35.656-15.996,35.656-35.656C149.56,114.432,135.888,99.401,118.294,97.231z"/></g>
            <g className="wind-string">
                <path fill="none" stroke="#43637D" stroke-miterlimit="10" d="M85.263,105.176
		c3.002-1.646,6.403-2.549,9.903-2.549c11.375,0,20.633,9.256,20.633,20.633s-9.258,20.633-20.633,20.633H3.473"/>
                <path fill="none" stroke="#43637D" stroke-miterlimit="10" d="M69.756,113.884
		c1.62-0.888,3.457-1.376,5.345-1.376c6.14,0,11.136,4.996,11.136,11.137c0,6.14-4.996,11.136-11.136,11.136H25.313"/>
                <path fill="none" stroke="#43637D" stroke-miterlimit="10" d="M75.536,180.462
		c2.131,1.166,4.545,1.809,7.027,1.809c8.072,0,14.642-6.569,14.642-14.643s-6.569-14.643-14.642-14.643H18.043"/>
            </g>
        </svg>
    )
};
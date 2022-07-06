import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import ReactTooltip from 'react-tooltip';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
const Map = (props) => {
    const name = props.name;
    const [content, setContent] = useState('');
  return (
    <div className='map-container' style={{width: "100%"}}>
        <ReactTooltip>{content}</ReactTooltip>
        <ComposableMap data-tip="">
            <ZoomableGroup zoom={1}>
                <Geographies geography={geoUrl}>
            {({geographies}) => geographies.map(geo => {
                if(geo.properties.NAME.includes(name.common) || name.official == geo.properties.FORMAL_EN){
                  console.log(`Country Data:- ${name.official}`);
                  console.log(`Country map:- ${geo.properties.FORMAL_EN}`);
                  console.log(geo)
                  return (
                    <Geography
                    key={geo.rsmKey} 
                    geography={geo} 
                    style={{hover: {fill: "orange", outline: 'none'},default: {fill: "orange", outline: 'none'}}}
                    onMouseEnter = {() => {
                      const { NAME } = geo.properties;
                      setContent(NAME);
                   }}
                   onMouseLeave = {() => {
                      setContent('');
                   }}
                    />
                  )
                }

                else {
                  return (
                    <Geography
                    key={geo.rsmKey} 
                    geography={geo} 
                    onMouseEnter = {() => {
                       const { NAME } = geo.properties;
                       setContent(NAME);
                    }}
                    onMouseLeave = {() => {
                       setContent('');
                    }}
                    style={{hover: {fill: "orange", outline: 'none'}, default: {fill: "rgb(82 80 80)" , outline: 'none'}}}
                    />
                  )
                }
                
              })}
            </Geographies>
            </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default Map
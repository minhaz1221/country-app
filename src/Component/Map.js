import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import ReactTooltip from 'react-tooltip';

const geoUrl ="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
const Map = (props) => {
    const {name, cca3} = props.name;
    const [content, setContent] = useState('');
  return (
    <div className='map-container' style={{width: "100%"}}>
        <ReactTooltip>{content}</ReactTooltip>
        <ComposableMap data-tip="">
            <ZoomableGroup zoom={1}>
                <Geographies geography={geoUrl}>
            {({geographies}) => geographies.map(geo => {
                if(geo.properties.name.includes(name.common) || geo.id == cca3){
                  return (
                    <Geography
                    key={geo.rsmKey} 
                    geography={geo} 
                    style={{hover: {fill: "orange", outline: 'none'},default: {fill: "orange", outline: 'none'}}}
                    onMouseEnter = {() => {
                      const { name } = geo.properties;
                      setContent(name);
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
                       const { name } = geo.properties;
                       setContent(name);
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
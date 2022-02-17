import React, {useEffect} from "react";
import GoogleMapReact from "google-map-react";
import pin from "../data/pin2.png"
import { Link } from "react-router-dom"
import mapStyle from "./mapStyle";


const GMAP_API = process.env.REACT_APP_GOOGLE_API_KEY;

const pinStyle = {
	position: "absolute",
	top: "100%",
	left: "50%",
	transform: "translate(-50%, -100%)",
};


class Map extends React.Component {
	static defaultProps = {
		center: { lat: 39.0, lng: -105.7821 },
		zoom: 6.75,
	};
	

	render() {
		return (
			<div
				style={{
					height: "50vh",
					width: "45%",
					padding: "20px",
					marginBottom: "100px",
				}} id='map-google'>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: GMAP_API,
						language: "en",
						
					}}
					
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					options={{
						styles: mapStyle
					}}
					
					>
						{this.props.myPeaks.map(peak => {
							console.log(peak.latitude, peak.longitude)
							return (
								<Link to={"/mypeaks"} key={peak.id} lat={peak.latitude} lng={peak.longitude}>
									<img style={pinStyle} src={pin} alt="pin" />
								</Link>
							)
						})}
					</GoogleMapReact>

				<br></br>
			</div>
		);
	}
}

export default Map;

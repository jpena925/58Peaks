import React from "react";
import GoogleMapReact from "google-map-react";

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
				}}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: "API KEY",
						language: "en",
					}}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					onChildMouseEnter={this.onChildMouseEnter}
					onChildMouseLeave={this.onChildMouseLeave}></GoogleMapReact>
				<br></br>
			</div>
		);
	}
}

export default Map;

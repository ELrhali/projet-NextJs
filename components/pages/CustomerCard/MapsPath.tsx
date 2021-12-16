import React from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";
import { WithGoogleMapProps } from "react-google-maps/lib/withGoogleMap";

const defaultCenter = { lat: 35.769040, lng: -5.826632 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs<WithGoogleMapProps>(
	withGoogleMap((props) => (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={defaultCenter}
			defaultOptions={defaultOptions}
		>
			<Marker position={defaultCenter} />
		</GoogleMap>
	))
);

const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "280px" };
const mapElementStyle = { height: "100%" };

function maps() {
	return (
		<RegularMap
			googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBxvsacIuw0sCnFF6_1tVqqg3O-ibiRbv0'
			loadingElement={<div style={loadingElementStyle} />}
			containerElement={<div style={containerElementStyle} />}
			mapElement={<div style={mapElementStyle} />}
		/>
	);
}
export default maps;
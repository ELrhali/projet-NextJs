import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import icLocation from '~/public/assets/icons/ic_location.png';
import icMyLocation from '~/public/assets/icons/ic_my_location.png';
import { getCurrentLocation } from '~/lib/domUtil';
import styles from './styles.json';

const GoogleMapView = ({ width, height, lat, lng, zoom,
  zoomControl, scaleControl, fullscreenControl, disableDefaultUI, gestureHandling,
  mapRef, onDragStart, onDragEnd, showMyLocationButton }) => {    
    const mapDivRef = React.createRef();
    const isTest = useSelector(state => state.view.isTest);
    const [isDragging, setIsDragging] = useState(false);
    const [localMapRef, setlocalMapRef] = useState(null);
    const [latestLocation, setLatestLocation] = useState(null);

    const options = {
      center: {lat, lng},
      zoom,
      disableDefaultUI,
      zoomControl,
      scaleControl,
      fullscreenControl,
      clickableIcons: false,
      clickableLabels: false,
      styles,
    }

    /** 
     * This is hacky becase this google map using external script
     * so when we detect this is a test, the google map will not be rendered.
    */
    if(isTest) {
      return null;
    }

    useEffect(() => {
      if(localMapRef) {
        const newOptions = Object.assign({}, options);
        newOptions.gestureHandling = gestureHandling ? 'greedy' : 'none';
        localMapRef.setOptions(newOptions);
      }
    }, [localMapRef, gestureHandling]);

    useEffect(() => {
      if(localMapRef && lat && lng) {
        localMapRef.setCenter({lat, lng});
      }
    }, [localMapRef, lat, lng])

    useEffect(() => {
      let dragStartListener;
      let dragEndListener;  
      let map = null;    
      if(map === null && mapDivRef.current !== null) {
        onDragEnd(lat, lng);

        map = new google.maps.Map(mapDivRef.current, options);

        getCurrentLocation().then((position) => {
          const { latitude, longitude } = position.coords;          
          const location = {lat: latitude, lng: longitude};
          setLatestLocation(location);

          if(!lat || !lng) {
            onDragEnd(latitude, longitude);
            map.setCenter(location);
          }
        }).catch(() => {})

        dragStartListener = google.maps.event.addListener(map, 'dragstart', () => {
          setIsDragging(true);
          onDragStart();
        });

        dragEndListener = google.maps.event.addListener(map, 'dragend', () => {
          setIsDragging(false);
          const center = map.getCenter();
          onDragEnd(center.lat(), center.lng());
        });

        mapRef(map);
        setlocalMapRef(map);
      }

      return () => {        
        google.maps.event.removeListener(dragStartListener);
        google.maps.event.removeListener(dragEndListener);
      }
    }, []);

    return (
      <div
        style={{ width, height }}
        className="GoogleMapView__container"
      >
        <div
          style={{ width, height }}
          ref={mapDivRef} id="map"></div>
        <img
          id="ic-location"
          className={isDragging ? 'ic-location-up' : 'ic-location-down'}
          src={icLocation}
          alt="sayurbox-ic-location"
        />
        <i
          className={`ic-circle ${isDragging ? 'ic-circle-up' : 'ic-circle-down'}`}
        ></i>
        {(showMyLocationButton && latestLocation) &&
          <div
            className="GoogleMapView__container__icMyLocation"
            role="button"
            onClick={() => {
              if(latestLocation && localMapRef) {
                localMapRef.setCenter(latestLocation);
                onDragEnd(latestLocation.lat, latestLocation.lng)
              }
            }}
          >
            <img
              src={icMyLocation}
              alt="sayurbox-ic-my-location"            
            />
          </div>
        }        
      </div>
    )    
};

GoogleMapView.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
  mapRef: PropTypes.func,
  disableDefaultUI: PropTypes.bool,
  zoomControl: PropTypes.bool,
  scaleControl: PropTypes.bool,
  fullscreenControl: PropTypes.bool,
  gestureHandling: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  showMyLocationButton: PropTypes.bool,
}

GoogleMapView.defaultProps = {
  width: '100%',
  height: '8em',
  lat: -6.291272,
  lng: 106.800752,
  zoom: 16,
  mapRef: () => {},
  disableDefaultUI: false,
  zoomControl: false,
  scaleControl: false,
  fullscreenControl: false,
  gestureHandling: false,
  onDragStart: () => {},
  onDragEnd: () => {},
  showMyLocationButton: false,
}

export default GoogleMapView;
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const StyledTooltip = withStyles({
  tooltipPlacementTop: {
    margin: "5px 0",
  },
})(Tooltip);

const AnyReactComponent = () => {
  return (
    <div>
      <StyledTooltip arrow open={true} placement="top" title="המיקום שלך">
        <RadioButtonCheckedIcon color="primary" />
      </StyledTooltip>
    </div>
  );
};

const SimpleMap = () => {
  const [position, setPositipn] = useState({
    lat: 31.7649848,
    lng: 35.2174723,
  });
  const [zoom, setZoom] = useState(13);

  const getCurrentLocation = ({ map, maps }) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          setPositipn({ lat, lng });
          setTimeout(() => {
            setZoom((zoom) => zoom + 4);
          }, 800);
        },
        (e) => {
          alert("אנא אפשר גישה למיקום");
          setZoom((zoom) => zoom + 4);
        }
      );
    }
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "95%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          language: "he",
        }}
        center={position}
        zoom={zoom}
        onGoogleApiLoaded={getCurrentLocation}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={position.lat} lng={position.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;

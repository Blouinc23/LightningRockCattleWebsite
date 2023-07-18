import React, { memo, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "700px",
  height: "300px",
};

const center = {
  lat: 32.89691136086432,
  lng: -80.60632522883586,
};

function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPSAPI_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center}></Marker>
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default memo(Map);

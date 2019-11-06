import React from "react";
import MapViewDirections from "react-native-maps-directions";

// import { Container } from './styles';

export default Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBMBCO0DNDDAYVpsLa_OclrYlvSfkrRDZk"
    strokeWidth={3}
    strokeColor="#222"
  />
);

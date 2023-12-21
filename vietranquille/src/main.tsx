import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)


/*
//dessous les requettes API
https:maps.googleapis.com/maps/api/place/autocomplete/json
  ?input={card.name}//adresse comprenant la liaison du nom les composants, ex menuiserie ou medecin
  &language=fr_FR //language en français
  &location=37.76999%2C-122.44696 //ou récuperer les donnée de l'address du user
  &radius=5000// limite de recherche a 5km
  &strictbounds=true //valide la limite
  &types=establishment
  &key=YOUR_API_KEY //ou trouver la cles API

  //dessous les response API
  //code pour recevoir les donné demandé de fields
const autocomplete = new google.map.places.Autocoplete(
  input,
{
type:["etablissement"]
fields:["name","format_address","phone"],
};);*/
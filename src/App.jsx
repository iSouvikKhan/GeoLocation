import { useState } from 'react'
import './App.css'

function App() {

  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const [userAddress, setUserAddress] = useState()

  const geo = navigator.geolocation

  // get current location
  geo.getCurrentPosition(userCoordinate)
  function userCoordinate(position){
    let userLatitude = position.coords.latitude
    let userLongitude = position.coords.longitude
    setLatitude(userLatitude)
    setLongitude(userLongitude)
    
  }

  // USED OpenCageData API

  const getUserAddress = async () => {
    let url = `https://api.opencagedata.com/geocode/v1/json?key=64fa23b1cb99422ca8eab78dec12c852&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`

    const loc = await fetch(url)
    const data = await loc.json()
    setUserAddress(data.results[0].formatted)
  }

  getUserAddress()

  // const callLocFunction = () => {
  //   getUserAddress()
  // }


  return (
    <>
      <h1>Location</h1>
      <h3>Latitude : {latitude}</h3>
      <h3>Longitude : {longitude}</h3>
      <h3>Address : {userAddress}</h3>
      {/* <button onClick={callLocFunction}>Get Address</button> */}
    </>
  )
}

export default App

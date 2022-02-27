import './App.css';
import NewPin from "./NewPin"
import {useEffect, useState} from 'react'
import PinDataService from './services/pin.services.js'
import PinCard from "./PinCard"
import Map from "./Map"

function App() {

  const [pins, setPins] = useState(null)

  useEffect(() => {
    PinDataService.getAll()
      .then(response => {
          setPins(response.data)
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
      })
  }, [])

  return (
    <div className="App">
      <h1>Carpet Shed</h1>
      <header className="App-header">
        <NewPin/>
        {pins && <Map markers={pins}/>}
        <div>
          {pins && pins.map((pin) => {
            return <PinCard
                      username={pin.name}
                      description={pin.description}
                      title={pin.title}
                      latitude={pin.latitude}
                      longitude={pin.longitude}
                    />
          })}
        </div>
      </header>
    </div>
  );
}

export default App;

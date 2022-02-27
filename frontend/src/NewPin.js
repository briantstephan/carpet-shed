import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import PinDataService from './services/pin.services.js'

export default function NewPin(){
    const [username, setUsername] = useState("");
    const [pinTitle, setPinTitle] = useState("");
    const [pinDescription, setPinDescription] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
    }, [])

    const handleTitleInput = (e) => {
        setPinTitle(e.target.value) 
    };

    const handleNameInput = (e) => {
        setUsername(e.target.value) 
    };

    const handleDescriptionInput = (e) => {
        setPinDescription(e.target.value) 
    };

    const submitPin = () => {
        const data = {
            title: pinTitle,
            description: pinDescription,
            name: username,
            latitude: latitude,
            longitude: longitude,
        };
        console.log(data);
        PinDataService.create(data)
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div>
            <p>Enter a new discovery:</p>
            <input
                type="text"
                placeholder="Title"
                onChange={handleTitleInput}
            /><br/>
            <input
                type="text"
                placeholder="Your Name"
                onChange={handleNameInput}
            /><br/>
            <input
                type="text"
                placeholder="Description"
                onChange={handleDescriptionInput}
            /><br/>

            <Button 
                variant='primary'
                onClick={submitPin}>
                Submit
            </Button>
        </div>
    )
}

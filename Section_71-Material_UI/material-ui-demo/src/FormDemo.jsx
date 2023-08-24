import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function FormDemo() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(30);
    const updateName = (event) => {
        setName(event.target.value)
    }
    const updateVolume = (event, newValue) => {
        setVolume(newValue);
    }
    return (
        <Box sx={{
            border: '1px solid red',
            backgroundColor: 'white',
            p: 6,
            width: 300,
            height: 300,
            margin: '0 auto'
        }}>
            <h1 style={{ color: 'black' }}>Your name is: {name}</h1>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={name}
                placeholder="name"
                onChange={updateName}
            />
            <h1 style={{ color: 'black' }}>Volume: {volume}</h1>
            <Slider
                value={volume}
                aria-label="Volume"
                onChange={updateVolume}
            />
        </Box>


    )
}
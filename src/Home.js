import React from 'react'
import Avatar from"@mui/material/Avatar"
import Posts from './components/Posts/Posts';
import { Form } from './components/Forms/Form';
import "./style.css"
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';
import { useState } from 'react';
const Home = ({setCurrentId,currentId}) => {
const [isSignup,setIsSignup]=useState(false)
    return (
        <div className='home'>
            <Box
                sx={{
                    left: 0,
                    width: 300,
                    height: "100vh",
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                {isSignup ?
                    <Avatar
                        sx={{ bgcolor: deepOrange[500] }}
                        src="/broken-image.jpg"
                    >
                    </Avatar> : <Link to="/auth"> </Link>}
            </Box>

                      <Posts setCurrentId={setCurrentId} />
    
            
            <Form currentId={currentId} setCurrentId={setCurrentId} />


        </div>

    )
}

export default Home
import React, { useEffect, useState } from 'react';
import { getApiDataHandler } from '../service/api.service';
import { Box } from '@mui/material';
import Loader from '../Comman/Loader';

function Home() {
    const [loaderFlag,setLoaderFlage] = useState(false);
    useEffect(()=>{
       dataHandler();
    },[]);

    const dataHandler = async () =>{

        const data = await getApiDataHandler("story",0);
        console.log("data",data.hits);
    };

  return (
    <Box>
        <Loader/>
    </Box>
  )
}

export default Home

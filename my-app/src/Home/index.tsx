import React, { useEffect, useState } from 'react';
import { getApiDataHandler } from '../service/api.service';
import { Box } from '@mui/material';
import Loader from '../Comman/Loader';
import DataTable from '../components/DataTable';
import { Story } from '../components/DataTable/DataTable.interface';

function Home() {
    const [loaderFlag,setLoaderFlage] = useState<boolean>(false);
    const [apiData,setApiData] = useState<Story[]>([]);

    useEffect(()=>{
       dataHandler();
    },[]);

    const dataHandler = async () =>{
        setLoaderFlage(true);
        const data = await getApiDataHandler("story",0);
        setApiData(data.hits);
        setLoaderFlage(false);
    };

  return (
    <Box>
      <DataTable data={apiData} loading={loaderFlag}/>
    </Box>
  )
}

export default Home

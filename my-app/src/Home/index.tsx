import { useCallback, useEffect, useRef, useState } from "react";
import { getApiDataHandler } from "../service/api.service";
import DataTable from "../components/DataTable";
import { Story } from "../components/DataTable/DataTable.interface";

function Home() {
  const [loaderFlag, setLoaderFlage] = useState<boolean>(false);
  const [apiData, setApiData] = useState<Story[]>([]);
  const count = useRef(0);

  useEffect(() => {
    dataHandler("story", count.current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      count.current = count.current + 1;
      dataHandler("story", count.current);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [count.current]);

  //function to handle the api call
  const dataHandler = async (story: string, page: number) => {
    setLoaderFlage(true);
    const data = await getApiDataHandler(story, page);
    setApiData((prevData) => [...prevData,...data.hits]);
    setLoaderFlage(false);
  };

  // function to handle the scroll functionality
  const scrollHandler = () => {
    if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){  
      count.current = count.current + 1;
      dataHandler("story", count.current);
    }
  };
  
  return <DataTable data={apiData} loading={loaderFlag}/>
}

export default Home;

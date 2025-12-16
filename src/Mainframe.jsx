import React, { useState } from "react";
import FetchJFile from './FetchJFile'
import Mainpage from './Mainpage'

function Mainframe(){
    const [dataLoaded, setDataLoaded] = useState(false);
    const [data, setData] = useState(null);
    
    function loadData(jObj){
          console.log(`loadData ${JSON.stringify(jObj)}`);
          setData(jObj);
          setDataLoaded(true);
    }

    //if(!dataLoaded) return <><p>Loading</p></>;

    return <>
        <FetchJFile dataLoaded={dataLoaded} loadData={loadData}/>
        {dataLoaded && <Mainpage data={data}/>}
    </>;
}

export default Mainframe;
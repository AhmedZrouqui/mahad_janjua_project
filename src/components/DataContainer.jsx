import React, {useState, useEffect, useRef} from 'react'
import DataItem from './DataItem';

function DataContainer({hash, setHash}) {


    const onItemClickHandler = (e) => {
        e.preventDefault();
        setHash(hash.filter((el,ind) => ind !== parseInt(e.target.id)))
    }


    let dataList = useRef(null)

    useEffect(() => {
        
        console.log(hash)
      }, [hash]);

    return (
        <>
            <div class="data-container">

                <div className="title">List of Data :</div>

                <ul class="data-display-list" id="data-list" ref={dataList}>
                    {
                        hash.map((item,index) => 
                            <DataItem id={index} onClickHandle={onItemClickHandler}>{item}</DataItem>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default DataContainer

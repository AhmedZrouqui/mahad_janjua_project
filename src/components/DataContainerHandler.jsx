import React, {useEffect,useRef} from 'react'

function DataContainerHandler({hash, setHash}) {

    let dataInput = useRef(null)

    const onButtonClick = (e) => {
        e.preventDefault();
        if(dataInput.current.value.length > 2){
            setHash(hash.concat(dataInput.current.value))
            dataInput.current.value = ""
        }
    }

    return (
        <>
            <div class="data-add">
                <div class="form-div">
                    <input
                    type="text"
                    name="data-text"
                    id="data-text-input"
                    placeholder="enter data (2char +)..."
                    ref={dataInput}
                    />
                    
                    <button id="add-btn" onClick={onButtonClick}>Add data</button>
                </div>
            </div>
        </>
    )
}

export default DataContainerHandler

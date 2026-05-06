import './Ps.css'
import { useState } from 'react';

function Ps(){
    const imgs = [
        "",
        "",
        ""
    ]
    
    const tits = ["1", "2", "3"]

    const [cindex, setcindex] = useState(0);
    
    const chP = () => {
        let nindex = cindex + 1;
        if(nindex === imgs.length){
            nindex = 0;
        }
        setcindex(nindex)
    }

    return(
        <>
            <div className="slider-box" onClick={chP}>
                <img
                    src={imgs[cindex]} 
                    alt={tits[cindex]}
                    className='food-img' 
                />
                <h3>{tits[cindex]}</h3>
                <p>클릭</p>
            </div>            
        </>
    )
}

export default Ps;

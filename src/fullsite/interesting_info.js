import React from 'react'
import './interesting_info.css'
function Interesting_info() {
    return (
        <div className='result_site'>
                <h3>ЗНАЙДИ ТЕ,ЩО ШУКАЄШ</h3>
                <div className='columns'>
                    <div className='column first'>
                        <div className='flashtxt'>
                            <div className='comp2'><p> НАША НОВА КОЛЛЕКЦІЯ</p>
                            <button className="arrow-btn2">▶ </button></div>
                            
                        </div>
                    </div>
                    <div className='column second'>
                        
                        <div className='flashtxt'>
                            <div className='comp2'>
                            <p>НАШІ НАЙРКАЩІ ПРОПРОЗИЦІЇ </p>
                            <button className="arrow-btn2">▶</button></div>
                        </div>
                    
                    </div>
                    <div className='column third'>
                        <div className="image-section">
                            <img src="Rectangle 25.png" alt="sofa" className="main-image" />
                            <div className="side-panel">
                            <button className="arrow-btn2">▶</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Interesting_info

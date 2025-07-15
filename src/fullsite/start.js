import React from 'react'
import './start.css'
import Line from './line'
function Start() {
    return (
        <div className='site'>
            
            <div className='bg'>
                <Line></Line>

            
            
        <div id='container'>
                <div className='center'>
                    <h1>ВСЕ ДЛЯ ДОМУ</h1>
                </div>
                <div className='menu'>
                    <div className='buttons'>
                        <button className='first-button button'>Створити аккаунт та почати!</button>
                        <button className='second-button button'>Каталог <img src='arrowdown.png'/></button>
                    </div>
                    <div className='proposition'>
                        <div className='position'>
                            <div className='top-badge'>TOP</div>
                            <img src='first.png'/>
                            <div className='text'>
                                <h4>Подушки</h4>
                                <p>спальна кімната</p>
                                <b>12$</b>
                            </div>
                            
                        </div>
                        <div className='position'>
                            <div className='top-badge'>TOP</div>
                            <img src='second.png'/>
                            <div className='text'>
                            <h4>Ковдра</h4>
                            <p>спальна кімната</p>
                            <b>30$</b></div>
                        </div>
                        <div className='position'>
                            <div className='top-badge'>TOP</div>
                            <img src='third.png'/>
                            <div className='text'>
                            <h4>Ліжко</h4>
                            <p>спальна кімната</p>
                            <b>414$</b></div>
                        </div>

                    </div>
                    <span>ЛОВИ МОМЕНТ! Знижки до <b>60%</b> на вибрані категорії товарів!</span>
                   
                    
                </div>

            </div>
        </div>
        </div>
    )
}

export default Start

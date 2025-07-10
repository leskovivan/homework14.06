import React from 'react'
import './start.css'
import Line from './line'
function Start() {
    return (
        <div className='site'>
        <Line></Line>
            <header>
                <div className='left'>
                    <div className='menucomp'>
                        <img src='menu.png'/>
                        <p>Меню</p>
                    </div>
                    <div className='logo'>
                        <img src='Union.png'/>
                    </div>
                    <p>Товари</p>
                    <p>Кімнати</p>
                    <p>Дизайн</p>
                </div>
                <div className='right'>
                    <div className='comp'>
                        <img src='location.png'/>
                        <p>Київ</p>
                    </div>
                    <div className='comp'>
                        <img src='user.png'/>
                        <p>Привіт!Увійдіть В Систему</p>
                    </div>
                    <img src='cart.png'/>
                    <img src='like.png'/>
                </div>
            </header>
            <div id='container'>
                <div className='searchbar'>
                    <div className='comp'>
                        <div className='content'>
                        <img src='search.png'/>
                        <span>Пошук</span>
                    </div>
                    </div>
                </div>
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
    )
}

export default Start

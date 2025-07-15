import React from 'react';
import './Line.css';

function Line() {
    const lineText = `#buy now           #вседлядому            #швидкотазручно            #buy now           #вседлядому            #швидкотазручно            #buy now           #вседлядому            #швидкотазручно            #buy now           #вседлядому            #швидкотазручно`
    return (
    <>
    <div className="poloska">
            <div className="moving-text">
                <span>{lineText}</span>
                <span>{lineText}</span>
            </div>
        </div>
            <header>
                
                <div className='left'>
                    <div className='menucomp'>
                        <a href='/'>
                        <img src='menu.png'/>
                        <p>Меню</p>
                        </a>
                    </div>
                    <div className='logo'>
                        <a href='/'>
                        <img src='Union.png'/></a>
                    </div>
                    <a href='/'>
                    <p>Товари</p></a>
                    <a href='/'>
                    <p>Кімнати</p></a>
                    <a href='/'>
                    <p>Дизайн</p></a>
                </div>
                <div className='right'>
                    <div className='comp'>
                        <a href='/'>
                        <img src='location.png'/>
                        </a>
                        <a href='/'>
                        <p>Київ</p>
                        </a>
                    </div>
                    <div className='comp'>
                        <a href='/'>
                        <img src='user.png'/>
                        </a>
                        <a href='/'>
                        <p>Привіт!Увійдіть В Систему</p>
                        </a>
                    </div>
                    <a href='/'>
                    <img src='cart.png'/>
                    </a>
                    <a href='/'>
                    <img src='like.png'/>
                    </a>
                </div>
                
            </header>
            <div id="container" className="searchbar">
                <div className="comp">
                <div className="content">
                    <img src="search.png" />
                    <input type="text" placeholder="Пошук" />
                </div>
                </div>
            </div>

            
            
        
    </>

    );
}

export default Line;

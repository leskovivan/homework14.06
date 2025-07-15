import './Footer.css'
export function Footersite(){
    return(
        <div id="footer_result">
            <div id="container">
                <footer>
            <div id="columndiv">
            <div id="firstcolumn">
                <span>Заголовок підрозділу</span>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
            </div>
            <div id="secondcolumn">
                <span>Заголовок підрозділу</span>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
           <div id="thirdcolumn">
                <span>Заголовок підрозділу</span>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
            </div>
            <div id="fourthcolumn">
                <span>Заголовок підрозділу</span>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
            </div>
            <div className="socialmedia">
                <div className='social_group'>
                <a href="insta"><img src='insta.png'></img></a>
                <a href="twitter"><img src='twitter.png'></img></a>
                <a href="telegram"><img src='telegram.png'></img></a>
            </div>
            <div className='payment_group'>
                <a href="visa"><img src='visa.png'></img></a>
                <a href="mastercard"><img src='mastercard.png'></img></a>
                <a href="maestro"><img src='maestro.png'></img></a>
                <a href="paypal"><img src='paypal.png'></img></a>
                <a href="applepay"><img src='applepay.png'></img></a>
            </div>
            </div>
            <div className='bottom'>
                <div className='main_elem'><span>Заголовок підрозділу</span></div>
                <div className='elem'><span>Заголовок підрозділу</span></div>
                <div className='elem'><span>Заголовок підрозділу</span></div>
                <div className='elem'><span>Заголовок підрозділу</span></div>
                <div className='elem'><span>Заголовок підрозділу</span></div>
            </div>
        </footer>
            </div>
        
        </div>
       
    );
}
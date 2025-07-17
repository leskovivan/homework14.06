import React from 'react'
import './LogIn.css'

function LogIn() {
    return (
        <div className='login_full'>
            
            <div className='group'>
                
                <div className='image-left'>
                    <button className="arrow-btn-NEW" >
          ▶
        </button>
                    <div className='text-login'>
                    <h2>заповніть вхід до </h2>
                    <h2>облікового запису</h2>
                </div></div>
                <div className='main-txt'>
                    <div className='block-txt'>
                        <form>
                            <label htmlFor="emailOrPhone">Електронна пошта або мобільний номер</label>
                            <input
                                type="text"
                                id="emailOrPhone"
                                name="emailOrPhone"
                                placeholder="Введіть email або номер"
                            />

                            <p>
                                By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code via SMS from IKEA.
                                Message and data rates may apply.<br />
                                <a href="#">More info about Privacy Policy</a>
                            </p>

                            <label htmlFor="password">Пароль</label>

                            <div className="password-field">
                                <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Введіть пароль"
                                />
                                <img
                                src="eye-icon.png"
                                alt="Показати пароль"
                                className="eye-icon"
                                onClick={() => {
                                    const input = document.getElementById("password");
                                    input.type = input.type === "password" ? "text" : "password";
                                }}
                                />
                            </div>

                            <a href="#">Забули свій пароль?</a>

                            <div className="checkbox-row">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Зберегти інформацію</label>
                                <img src="info-icon.png" alt="Інфо" className="info-icon" />
                            </div>

                            <button type="submit">ПРОДОВЖИТИ</button>

                            <b>У вас ще немає облікового запису? Створіть його:</b>
                            <button type="button">СТВОРИТИ АККАУНТ</button>
                            </form>


                        

                
                </div></div>
            </div>
        </div>
    )
}
export default LogIn

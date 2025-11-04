
import style from './Form.module.css'

function Form({name, password, FocusHandler ,BlurHandler, HandBlurHandler, HandFocusHandler,submitHandler}) {
    return (
        <form action="" onSubmit = {submitHandler} className={style.form}>
            <label htmlFor="username">Username:</label>
            <input type="text" onFocus={FocusHandler} onBlur={BlurHandler}
ref={name} placeholder="Username here..." id="username" className={style.userNameField} />
            <label htmlFor="password">Password:</label>
            <input type="password" onFocus={HandFocusHandler} ref = {password} onBlur={HandBlurHandler} placeholder="Password here..." id="password" className={style.userPasswordField} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Form;

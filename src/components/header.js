import React, {Component} from "react";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuth: props.auth,
            isLoad: props.load,
            targetAction: "sign-in",
            isAuthOpen: false,
        }
    }

    swapButton = (e) => {
        this.setState({targetAction: e.target.getAttribute("target")})

        let childrenCollection = e.target.parentNode.children

        for (let i=0; i !== childrenCollection.length; i++) {
            e.target.parentNode.children[i].classList.remove('active')
        }
        e.target.classList.add("active")
    }

    openAuth = () => {
        this.setState({isAuthOpen: true})
    }

    render() {
        return (
            <div className="header-bg">
                {
                    this.state.isAuthOpen ?
                        <div className="wrapper-pop-up">
                            <div className="wrapper-auth-pop-up">
                                {/*<div className="title-pop-up">*/}
                                {/*    Войти*/}
                                {/*</div>*/}
                                <div className="control-pop-up">
                                    <div className="control-pop-up-item active unselectable" target="sign-in" onClick={this.swapButton}>Войти</div>
                                    <div className="control-pop-up-item unselectable" target="sign-up" onClick={this.swapButton}>Регистрация</div>
                                </div>
                                {
                                    this.state.targetAction === "sign-in" ?
                                        <div className="sign-in-place">
                                            <div className="wrapper-input">
                                                <input className="input-default" placeholder="Логин / Номер телефона"/>
                                            </div>
                                            <div className="wrapper-input">
                                                <input className="input-default" type="password" placeholder="Пароль"/>
                                            </div>
                                            <div className="wrapper-input-sign">
                                                <div className="button-sign unselectable">Войти</div>
                                            </div>
                                        </div>
                                        :
                                        <div className="sign-in-place">
                                            <div className="wrapper-input">
                                                <input className="input-default" placeholder="Логин"/>
                                            </div>
                                            <div className="wrapper-input">
                                                <input className="input-default" type="password" placeholder="Пароль"/>
                                            </div>
                                            <div className="wrapper-input">
                                                <input className="input-default" type="password" placeholder="Повторите пароль"/>
                                            </div>
                                            <div className="wrapper-input-sign">
                                                <div className="button-sign unselectable">Регистрация</div>
                                            </div>
                                        </div>
                                }

                            </div>
                        </div>
                    :
                        null
                }
                <div className="wrapper-header">
                    <div className="place-logo" onClick={(e) => {
                        e.preventDefault();
                        if (this.state.isAuth) {
                            window.location.href = '/feeds'
                        } else {
                            window.location.href = '/'
                        }
                    }}>
                        [ DevCodeMyLife ]
                    </div>
                    <div className="wrapper-auth">
                        {
                            this.state.isLoad ?

                                this.state.isAuth ?
                                    <div className="">test</div>
                                    :
                                    <div className="button-default unselectable" onClick={this.openAuth}>Войти / Регистрация</div>
                                :
                            <div className="loader-small"/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;

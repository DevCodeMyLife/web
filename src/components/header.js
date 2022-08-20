import React, {Component} from "react";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuth: props.auth,
            isLoad: props.load
        }
    }

    render() {
        return (
            <div className="header-bg">
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
                                    <div className="button-default unselectable">Войти / Регистрация</div>
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

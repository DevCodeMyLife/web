import React, {Component} from "react";

import like_icon from "../icon/like_red.png"
import test_img from "../img/test.png"


class Feed extends Component{
    constructor(props) {
        super(props);
        this.state = {
            feeds: [],
            isLoad: false,
            error: false,
            errorText: "",
        }
    }

    componentDidMount() {

        fetch("http://localhost:8080/v1/feeds", {
            method: "GET",
            credentials: 'same-origin',
        })
            .then(response => response.json())
            .then(res => {
                this.setState({feeds: res.data, isLoad: true})
            })
            .catch(error => {
                this.setState({isLoad: true, error: true, errorText: error.toString() })
                console.log(error)
            });
    }

    render() {
        return (
            <div className="wrapper-feed">
                    {
                        this.state.isLoad ?
                            this.state.error ?
                                <div className="wrapper-error">
                                    <div className="error">Ошибка сервера: {this.state.errorText}</div>
                                    <div className="error">Мы уже работаем над этим и скоро все поправим</div>
                                </div>
                            :
                                this.state.feeds.map(data =>
                                    <div className="item-wrapper-feed" key={data.id}>
                                        <div className="item-feed">
                                            <div className="item-image-wrapper-feed">
                                                <div className="title-feed">{data.title}</div>
                                                <img className="item-preview-img" src={test_img} alt="qwe"/>
                                            </div>
                                            <div className="item-preview-text">
                                                {data.value}
                                            </div>
                                            {/*<div className="comments-wrapper">*/}
                                            {/*    <div className="state-comments">*/}
                                            {/*        Новых комментариев пока нет.*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className="control-place-feed">
                                                <div className="comment-feed-wrapper">
                                                    <div className="comment-feed-button">
                                                        Показать комментарии
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <div className="like-text">
                                                        0
                                                    </div>
                                                    <div className="like-item">
                                                        <img className="like-img" src={like_icon} alt="like"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                        :
                            <div className="wrapper-loader">
                                <div className="loader"/>
                            </div>
                    }

            </div>
        )
    }
}

export default Feed;

import React, {Component} from "react";

import like_icon from "../icon/like_red.png"
import test_img from "../img/test.png"


class Feed extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="wrapper-feed">
                <div className="item-wrapper-feed">
                    <div className="item-feed">
                        <div className="item-image-wrapper-feed">
                            <div className="title-feed">Заголовок</div>
                            <img className="item-preview-img" src={test_img} alt="qwe"/>
                        </div>
                        <div className="item-preview-text">
                            какой то текст...
                        </div>
                        <div className="comments-wrapper">
                            <div className="state-comments">
                                Новых комментариев пока нет.
                            </div>
                        </div>
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
            </div>
        )
    }
}

export default Feed;

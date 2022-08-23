import React, {Component, Suspense} from "react";
import Header from "./header";
import Footer from "./footer";
import {NotFoundBoundary, Router, View} from 'react-navi'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {mount, route} from 'navi'
import Feed from "./feed";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }

        this.routes = mount({
            '/' : route({view: <Feed/>}),

        })
    }

    render() {
        return (
            <>
                <Header auth={false} load={true}/>
                <div className="wrapper">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/web/"
                                   render={({history, match}) => <Router routes={this.routes} history={history}
                                                                         basename={match.url}>

                                       {/*<ToastContainer*/}
                                       {/*    position="bottom-right"*/}
                                       {/*    autoClose={2000}*/}
                                       {/*    hideProgressBar={false}*/}
                                       {/*    newestOnTop={false}*/}
                                       {/*    closeOnClick*/}
                                       {/*    rtl={false}*/}
                                       {/*    pauseOnFocusLoss*/}
                                       {/*    draggable*/}
                                       {/*    pauseOnHover*/}
                                       {/*/>*/}


                                       <NotFoundBoundary
                                           render={() =>
                                           <div className="wrapper-feed">
                                               <div className="wrapper-error">
                                                   <div className="error">404 Такой страницы не существует</div>
                                                   <div className="error small-text">вернуться <div
                                                       style={{textDecoration: "underline", cursor: "pointer"}}
                                                       onClick={() => {window.history.go(-1)}}>Назад</div></div>
                                               </div>
                                           </div>}>
                                           <Suspense fallback={true}>
                                               <View />
                                           </Suspense>
                                       </NotFoundBoundary>
                                       <Footer/>
                                   </Router>

                               }/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </>
        )
    }
}

export default App;

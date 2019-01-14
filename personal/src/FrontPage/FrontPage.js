import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import Media from 'react-media';
import MediaQuery from 'react-responsive';

import { css } from 'glamor';

import ME from '../pictures/HeyItsMe.JPG';

class FrontPage extends Component {


    render() {

        let size = css({
            height: '100%',
            width: '100%'
        })

        let style = css({
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        })
        
        let styleMobile = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        })

        let meDiv = css({
            marginTop: '20%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
            // position: 'absolute',
            // top: '40%',
            // left: '50%',
            // marginTop: '-125px',
            // marginLeft: '-100px'
        })

        let meDivLandscape = css({
            marginTop: '5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        })

        let name = css({
            fontSize: '26px',
            fontWeight: 'bold',
            color: 'white'
            // textShadow: '2px 2px #aaaaaa'
        })

        let from = css({
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            marginTop: '10px'
        })

        let pic = css({
            height: '400px',
            width: '325px',
            borderRadius: '100',
            backgroundColor: 'white',
            marginBottom: '50px'
        })

        let picMobile = css({
            height: '250px',
            width: '200px',
            borderRadius: '75',
            backgroundColor: 'white',
            marginBottom: '20px'
        })

        let picMobileLandscape = css({
            height: '200px',
            width: '150px',
            borderRadius: '50',
            backgroundColor: 'white',
            marginBottom: '20px'
        })

        let links = css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '100px',
            width: '80%',
        })

        let link = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            

            fontWeight: 'bold',
            fontSize: '22px',
            textAlign: 'center',
            color: 'white',
            textDecoration: 'none',

            marginLeft: '100px',
            marginRight: '100px',
            height: '60px',
            width: '450px',
            ':hover': {
                opacity: '0.5'
            },

            border: '3px solid white',
            backgroundColor: 'transparent',
            borderRadius: '20px'
        })

        let linkMobile = css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',

            ':hover': {
                opacity: '0.5'
            }
        })

        let navbar = css({
            boxShadow: '0 2px 2px 0px rgba(108, 122, 137, 0.5)'
        })

        return(
            <div {...size}>
                {/*  */}
                <MediaQuery query="(min-device-width: 1224px)">
                    <div {...style}>
                        <div> <img src={ME} alt='Portfolio' {...pic}></img></div>
                        <div {...name}>Matthew Groe</div>
                        <div {...from}>San Diego, CA</div>
                        <div {...links}>
                            <Link key='web' to='/web' {...link}><div>   Web Developer   </div></Link>
                            <Link key='soft' to='/software' {...link}><div>   Software Developer    </div></Link>
                            <Link key='contact' to='/contactme' {...link}><div>   Contant Me      </div></Link>
                        </div>
                    </div>
                {/* <MediaQuery query="(min-device-width: 1824px)">
                    <div {...style}>You also have a huge screen</div>
                </MediaQuery>
                <MediaQuery query="(max-width: 1224px)">
                    <div {...style}>You are sized like a tablet or mobile phone though</div>
                </MediaQuery> */}
                </MediaQuery>
                {/* Mobile Phone - Portrait/Lanscape */}
                <MediaQuery query="(max-device-width: 1224px)">
                    <div {...styleMobile}></div>
                    <MediaQuery query="(orientation: portrait)">
                        <div className="pos-f-t" {...navbar}>
                            <nav className="navbar navbar-dark bg-dark">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                            <div className="collapse" id="navbarToggleExternalContent">
                                <div className="bg-dark p-4">
                                    <Link key='web' to='/web' {...linkMobile}><div>Web Developer</div> <div>o</div></Link>
                                    <Link key='soft' to='/software' {...linkMobile}><div>Software Developer</div> <div>o</div></Link>
                                    <Link key='contact' to='/contactme' {...linkMobile}><div>Contant Me</div> <div>o</div></Link>
                                </div>
                            </div>
                        </div>
                        <div {...meDiv}>
                            <div> <img src={ME} alt='Portfolio' {...picMobile}></img></div>
                            <div {...name}>Matthew Groe</div>
                            <div {...from}>San Diego, CA</div>
                        </div>
                    </MediaQuery>
                    <MediaQuery query="(orientation: landscape)">
                        <div className="pos-f-t" {...navbar}>
                            <nav className="navbar navbar-dark bg-dark">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                            <div className="collapse" id="navbarToggleExternalContent">
                                <div className="bg-dark p-4">
                                    <Link key='web' to='/web' {...linkMobile}><div>Web Developer</div> <div>o</div></Link>
                                    <Link key='soft' to='/software' {...linkMobile}><div>Software Developer</div> <div>o</div></Link>
                                    <Link key='contact' to='/contactme' {...linkMobile}><div>Contant Me</div> <div>o</div></Link>
                                </div>
                            </div>
                        </div>
                        <div {...meDivLandscape}>
                            <div> <img src={ME} alt='Portfolio' {...picMobileLandscape}></img></div>
                            <div {...name}>Matthew Groe</div>
                            <div {...from}>San Diego, CA</div>
                        </div>
                    </MediaQuery>
                </MediaQuery>
                {/* <MediaQuery query="(min-resolution: 2dppx)">
                    <div {...style}>You are retina</div>
                </MediaQuery> */}
            </div>
        )
    }
}

export default FrontPage;
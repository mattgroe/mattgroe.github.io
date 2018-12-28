import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import Media from 'react-media';
import MediaQuery from 'react-responsive';

import { css } from 'glamor';

import ME from '../pictures/HeyItsMe.JPG';

class FrontPage extends Component {


    render() {

        let style = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        })

        let name = css({
            fontSize: '32px',
            letterSpacing: '20px',
            fontWeight: 'bold',
            // textShadow: '2px 2px #aaaaaa'
        })

        let from = css({
            fontSize: '22px',
            fontWeight: 'bold',
            letterSpacing: '10px',
            marginTop: '10px'
        })

        let pic = css({
            height: '400px',
            width: '325px',
            borderRadius: '100',
            backgroundColor: 'white',
            marginBottom: '50px'
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

        return(
            <div>
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
                </MediaQuery> */}
                {/* <MediaQuery query="(max-width: 1224px)">
                    <div {...style}>You are sized like a tablet or mobile phone though</div>
                </MediaQuery> */}
                </MediaQuery>
                {/* <MediaQuery query="(max-device-width: 1224px)">
                    <div {...style}>You are a tablet or mobile phone</div>
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                    <div {...style}>You are portrait</div>
                </MediaQuery>
                <MediaQuery query="(orientation: landscape)">
                    <div {...style}>You are landscape</div>
                </MediaQuery> */}
                {/* <MediaQuery query="(min-resolution: 2dppx)">
                    <div {...style}>You are retina</div>
                </MediaQuery> */}
            </div>
        )
    }
}

export default FrontPage;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import Media from 'react-media';
import MediaQuery from 'react-responsive';

import { css } from 'glamor';

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
            fontSize: '22px',
            letterSpacing: '20px',
            fontWeight: 'bold',
            // textShadow: '2px 2px #aaaaaa'
        })

        let from = css({
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: '10px',
            marginTop: '10px'
        })

        let pic = css({
            height: '300px',
            width: '300px',
            borderRadius: '400',
            backgroundColor: 'white',
            marginBottom: '100px'
        })

        let links = css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '100px',
            width: '60%',
        })

        let link = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            

            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            textDecoration: 'none',

            marginLeft: '100px',
            marginRight: '100px',
            height: '45px',
            width: '200px',
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
                        <div {...pic}></div>
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
                <MediaQuery query="(max-device-width: 1224px)">
                    <div {...style}>You are a tablet or mobile phone</div>
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                    <div {...style}>You are portrait</div>
                </MediaQuery>
                <MediaQuery query="(orientation: landscape)">
                    <div {...style}>You are landscape</div>
                </MediaQuery>
                {/* <MediaQuery query="(min-resolution: 2dppx)">
                    <div {...style}>You are retina</div>
                </MediaQuery> */}
            </div>
        )
    }
}

export default FrontPage;
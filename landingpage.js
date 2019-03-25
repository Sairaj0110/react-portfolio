import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="image" src="https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble.png"
                            alt="avatar" />
                        <div className="banner-text">

                            <h1>Sairaj Patil : UI Developer</h1>
                            <hr />
                            <p>ANGULAR | HTML/CSS | BOOTSTRAP | REACT | MONGODB | NODE JS | AG-GRID </p>


                            <div className="social-links">
                                <Cell col={4}></Cell>

                                {/* linkedin */}
                                <Cell col={2}>
                                    <a href='https://www.linkedin.com/in/sairaj-patil/' target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>
                                </Cell>

                                {/* github */}
                                <Cell col={2}>
                                    <a href='https://github.com/Sairaj0110' target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>
                                </Cell>
                                <Cell col={4}></Cell>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
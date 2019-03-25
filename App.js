import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../src/components/main'
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
    render() {
        return (<div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}} to='/'>Home</Link>} scroll>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contactme">Contact Me</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link>}>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contactme">Contact Me</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
        )


    }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { BrowserRouter as Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout style={{background: 'url(https://visitoceanside.org/wp-content/uploads/2015/03/IMG_0882-1024x683-e1426545133243.jpg) center / cover'}}>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Greg Schuman</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Greg Schuman</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'


class App extends Component{
  render(){
    return(
      <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://visitoceanside.org/wp-content/uploads/2015/03/IMG_0882-1024x683-e1426545133243.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
    )
  }
}

export default App;

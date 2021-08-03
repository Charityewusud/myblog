import './App.css';
import React from 'react';
import { client } from './client';
import Posts from './components/Posts';

class App extends React.Component {
  state = {
    articles : []
  }

  componentDidMount() {
    client.getEntries()
    .then((response) => {
      // console.log(response)
      this.setState({
        articles: response.items
      })
    })
    .catch(console.error)
  }

  render() {
    return (
        <div className="container">
          <header>
            <div className="wrapper">
              <h1 className="blog-title">Welcome to my blog</h1>
              <h3 className="charity">Charity Ehouabolet</h3>
            </div>
          </header>

          <main>
           <div className="wrapper">
             <Posts posts={this.state.articles}/>            
           </div>
          </main>

          <footer className="footer"><a href="https://codepen.io/charityewusud" target="_blank">My Codepen</a></footer>

        </div>
    );
  }
}

export default App;

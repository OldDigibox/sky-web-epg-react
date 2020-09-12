import React from 'react';
import logo from './logo.svg';
import './App.css';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
        <li><div class="num">{this.props.number}</div>{this.props.children.toUpperCase()}</li>
    );
  }
}

function App() {
  return (

      <section className="menulisting" id="main">
          <MenuItem number="1">All Channels</MenuItem>
          <MenuItem number="2">Entertainment</MenuItem>
          <MenuItem number="3">Lifestyle & Culture</MenuItem>
          <MenuItem number="4">Movies</MenuItem>
          <MenuItem number="5">Sports</MenuItem>
          <MenuItem number="6">News</MenuItem>
          <MenuItem number="7">Documentaries</MenuItem>
          <MenuItem number="8">Kids</MenuItem>
          <MenuItem number="9">Music</MenuItem>
          <MenuItem number="0">More...</MenuItem>

        <div className="links">
          <a onClick="toPage('main', 'boxoffice')">Go Right</a>
          <a onClick="toPage('main', 'planner')">Planner</a>
          <a onClick="toPage('main', 'az')">A-Z</a>
        </div>
      </section>
  );
}

export default App;

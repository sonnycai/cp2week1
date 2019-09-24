import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship",
    num: 12
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life",
    num: 11
  }
};

pages.ontheship = {
  text: "welcome to the ship,please get off.",
  leftLabel: "good bye",
  rightLabel: "go for the train",
  leftPage: "start",
  rightPage: "onthetrain",
  num: 4
};

pages.death = {
  text: "You Died",
  num: 0,
  imagep: true,
  image:
    "http://n.sinaimg.cn/translate/293/w700h393/20190323/5EUH-huqrnap5257470.jpg"
};
pages.life = {
  text: "you win",
  num: 5,
  imagep: true,
  image: "http://pic.guoxuedashi.com/shufa/c/167273.gif"
};

function genbuttoms(n) {
  var list = [];
  for (var i = 0; i <= n; i++) {
    list.push(<button>{i}</button>);
  }
  return list;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        <p>{pageData.text}</p>
        {pageData.imagep ? (
          <img alt="" src={pageData.image} width="200" />
        ) : (
          <div>
            <button onClick={() => this.goToPage(pageData.leftPage)}>
              {pageData.leftLabel}
            </button>
            <button onClick={() => this.goToPage(pageData.rightPage)}>
              {pageData.rightLabel}
            </button>
          </div>
        )}
        <div>{genbuttoms(pageData.num)}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

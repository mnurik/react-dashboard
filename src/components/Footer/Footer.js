import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <a href="http://www.caspel.com">Caspel</a> &copy; 2017
        <span className="float-right">
          Powered by <a href="http://www.caspel.com">Caspel LLC</a>
        </span>
      </footer>
    );
  }
}

export default Footer;

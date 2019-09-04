import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImagesList from './ImageList'

class App extends Component {
    render() {
        let className = '';
        let isDeleted = false;
  if (window.location.pathname==='/deleted/') {
    className += ' deleted';
      isDeleted = true;
  }
        return (
            <div className={className} >
                <ImagesList isDeleted={isDeleted} />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

import * as React from 'react';
import AppHeader from "./src/components/AppHeader/app-header";
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader/>
        {this.props.children}
      </div>
    );
  }
}

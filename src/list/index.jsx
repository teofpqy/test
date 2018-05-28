import React, { Component } from 'react';
import { getLibs } from './actions';

class LibList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      libs: [],
    };
  }
  
  componentWillMount() {
    getLibs().then((libs) => this.setState({ libs }));
  }

  render() {
  const { libs } = this.state;
  return <ul>
      {
        libs.map((lib) => <li>{lib[0]}</li>)
      }
      </ul>
  }

}

export default LibList;

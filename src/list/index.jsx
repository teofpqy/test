import React, { Component } from 'react';
import { getLibs } from './actions';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

class LibList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      libs: [],
    };
  }

  componentWillMount() {
    getLibs().then((libs) =>
      this.setState({ libs }));
  }

  _renderHeader() {
    return <TableHead>
      <TableRow>
          <TableCell>
            Library name
          </TableCell>
          <TableCell>
            Description
          </TableCell>
          <TableCell>
            Stars
          </TableCell>
        </TableRow>
      </TableHead>
  }

  render() {
    const { libs } = this.state;

    return <Paper>
      <Table>
        {this._renderHeader()}
        <TableBody>
          {
            libs.map((lib) =><TableRow>
                <TableCell>{lib.name}</TableCell>
                <TableCell>{lib.description}</TableCell>
                <TableCell>{lib.stars}</TableCell>
              </TableRow>)
          }
        </TableBody>
      </Table>
      </Paper>
  }
}

export default LibList;

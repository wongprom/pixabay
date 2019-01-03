import React, { Component } from 'react';
// import from framework material ui
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// axios make http requests from node.js. automatic transform to json data

// error when import axios as below
// import axios from 'axois';
//had to import axios like this to work
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
class Pix extends Component {
  state = {
    searchText: '',
    amountPix: 3,
    pixabayURL: 'https://pixabay.com/api',
    apiKey: '10613712-4767a5b68425b631d01c0dcad',
    images: []
  };

  textChangeHandler = event => {
    //get data from api when typing in textfield
    this.setState({ [event.target.name]: event.target.value }, () => {
      axios
        .get(
          `${this.state.pixabayURL}/?key=${this.state.apiKey}&q=${
            this.state.searchText
          }&image_type=photo&per_page=${this.state.amountPix}`
        )
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    });
  };
  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.textChangeHandler}
          label="Search For Images"
          fullWidth={true}
        />
        <br />
        <Select
          name="amount"
          label="Amount"
          value={this.state.amountPix}
          onChange={this.amountChangeHandler}
        >
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={9}>9</MenuItem>
        </Select>
      </div>
    );
  }
}
export default Pix;

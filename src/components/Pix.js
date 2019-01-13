import React, { Component } from 'react';
import ImageResults from './ImageResults';
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

  onTextChangeHandler = event => {
    const val = event.target.value;
    //get data from api when typing in textfield
    this.setState({ [event.target.name]: val }, () => {
      // if statement = Remove pix from UI when delete searchtext.
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.pixabayURL}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amountPix}`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChangeHandler = (event, index, value) => {
    this.setState({ amountPix: event.target.value });
    // this.setState({ [event.target.amountPix]: event.target.value });
  };

  render() {
    console.log('Amount of pix' + ' ' + this.state.amountPix);
    console.log(this.state.images);
    return (
      <div className="pix">
        <div className="hero-section">
          <div className="text-field">
            <TextField
              name="searchText"
              value={this.state.searchText}
              onChange={this.onTextChangeHandler}
              label="Search For Images"
              fullWidth={true}
            />
          </div>

          <br />
          <div className="select">
            <Select
              name="amount"
              value={this.state.amountPix}
              onChange={this.onAmountChangeHandler}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
          </div>
        </div>

        <br />
        <div className="image-results">
          {this.state.images.length > 0 ? (
            <ImageResults images={this.state.images} />
          ) : null}
        </div>
      </div>
    );
  }
}
export default Pix;

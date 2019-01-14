import React, { Component } from 'react';

// import grid ui from material-ui
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ZoomIn from '@material-ui/icons/ZoomIn';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class ImageResults extends Component {
  state = {
    seeBigImage: false,
    imageToSee: ''
  };
  handleOpen = img => {
    this.setState({ seeBigImage: true, imageToSee: img });
  };
  handleClose = () => {
    this.setState({ seeBigImage: false });
  };

  render(props) {
    let imageListContent;
    // destructure
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(image => (
            <GridListTile>
              <img src={image.largeImageURL} alt="" />
              <GridListTileBar
                title={image.tags}
                subtitle={
                  <span>
                    by <strong>{image.user}</strong>
                  </span>
                }
                actionIcon={
                  // onClick = using arrow function because we sending parameter,(img.largeImageURL)
                  <IconButton
                    onClick={() => this.handleOpen(image.largeImageURL)}
                  >
                    <ZoomIn style={{ color: 'white' }} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    return (
      <div>
        {imageListContent}
        <Dialog open={this.state.seeBigImage}>
          <img src={this.state.imageToSee} alt="" style={{ width: '100%' }} />
          <Button onClick={this.handleClose} color="secondary">
            Close
          </Button>
        </Dialog>
      </div>
    );
  }
}
export default ImageResults;

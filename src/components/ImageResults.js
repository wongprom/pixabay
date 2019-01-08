import React, { Component } from 'react';

// import grid ui from material-ui
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ZoomIn from '@material-ui/icons/ZoomIn';

class ImageResults extends Component {
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
                  <IconButton>
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
    return <div>{imageListContent}</div>;
  }
}
export default ImageResults;

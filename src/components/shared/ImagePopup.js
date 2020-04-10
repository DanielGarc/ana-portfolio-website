import React from 'react';
import './ImagePopup.css';

export default class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  handleOnClick(event) {
    event.preventDefault();
    this.setState({ modal: !this.state.modal });
  }

  render() {
    let imgStyle = {
      width:'100%',
      height:'auto',
      ...this.props.style
    }
    
    return (
      <div>
        <img
          style={imgStyle}
          className='img'
          src={this.props.img}
          alt={this.props.altImg}
          onClick={this.handleOnClick.bind(this)}
        />
        <div
          className='modal'
          onClick={this.handleOnClick.bind(this)}
          style={{ display: this.state.modal ? 'block' : 'none' }}
        >
          <span className='close' onClick={this.handleOnClick.bind(this)}>
            &times;
          </span>
          <img
            className='modal-content'
            src={this.props.modalImg}
            alt={this.props.altModalImg}
          />
          <div className='caption'>
            {this.props.altModalImg ? this.props.altModalImg : 'No Caption'}
          </div>
        </div>
      </div>
    );
  }
}

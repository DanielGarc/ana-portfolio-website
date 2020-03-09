import React from 'react';

import '../../css/caseStudyLink.css';

class CaseStudyLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    var { cslImg, alignLeft = false, color, body, header, url } = this.props;
    return (
      <div
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className={`cslWrapper ${
          alignLeft ? 'cslWrapperLeft' : 'cslWrapperRight'
          }`}
      >
        <img alt='Case Study' src={cslImg} />
        <div
          style={{ backgroundColor: color }}
          className={`cslTextWrapper ${
            alignLeft ? 'cslTextWrapperLeft' : 'cslTextWrapperRight'
            }
         `}
        >
          <p className='cslTextHeader'>{header}</p>
          <div className='cslTextBody'>{body}</div>
          {url}
          {/* <NavLink className='cslTextLink' to='/fitstudy'> */}
          {/* <a
            alt='Case Study'
            href={url}
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className='cslTextLink'>READ CASE STUDY</div>
          </a> */}
          {/* </NavLink> */}
        </div>
      </div>
    );
  }
}

export default CaseStudyLink;

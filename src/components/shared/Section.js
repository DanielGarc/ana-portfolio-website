import React from 'react';

function Section({ wrapperColor, sectionColor, children }) {
  const divWrapper = {
    display: 'block',
    width: '100%',
    backgroundColor: wrapperColor ? wrapperColor : 'red'
  };

  const divContent = {
    backgroundColor: sectionColor ? sectionColor : 'blue',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1025px',
    margin: 'auto'
  };

  return (
    <div style={divWrapper}>
      <div style={divContent}>{children}</div>
    </div>
  );
}

export default Section;

import React from 'react';

function Section({ wrapperColor, sectionColor, children, wrap, align }) {
  const divWrapper = {
    display: 'block',
    width: '100%',
    backgroundColor: wrapperColor ? wrapperColor : 'red',
    height: 'auto'
  };

  const divContent = {
    backgroundColor: sectionColor ? sectionColor : 'blue',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'var(--max-width)',
    margin: 'auto',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    alignItems: align ? align : 'center'
  };

  return (
    <div style={divWrapper}>
      <div style={divContent}>{children}</div>
    </div>
  );
}

export default Section;

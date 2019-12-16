import React from 'react';

const Header = (title, content) => {
  return (
    <div className="header">
      <div>
        <h1>Madlibs by Tnob</h1>
        <p>Fill out the fields below and click the generate button to see the Mad Lib story.</p>
      </div>
    </div>
  );
}

export default Header;
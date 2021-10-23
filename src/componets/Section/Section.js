import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <section>
        <div className="container">
        <h2>{title}</h2>
            {children}
         </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
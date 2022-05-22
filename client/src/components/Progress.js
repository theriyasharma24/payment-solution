import React from 'react';
import PropTypes from 'prop-types';
import colors from '../essentials/colors';
const Progress = ({ percentage }) => {
    return (
        <div>
            <div
                role="progressbar"
                style={{
                    width: `${percentage}%`,
                    borderRadius: '5px',
                    backgroundColor: `${colors.neonGreen}`,
                    marginBlock: '1rem',
                    padding: '0.5rem'
                }}
            >
                {percentage}%
            </div>
        </div>
    );
};

Progress.propTypes = {
    percentage: PropTypes.number.isRequired
};

export default Progress;

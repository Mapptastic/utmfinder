import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
const Tooltip = (props) => {

        const { features, coordinates } = props;
        const renderFeature = (feature, i) => {
            let ret;
            if (feature.sourceLayer === "World_UTM_Grid") {
                ret = <div key={i}>
                    <strong className='mr3 color-gray-light'>UTM Zone:</strong>
                    <span className='color-gray-light'>{feature.properties.ZONE}{coordinates.lat > 0 ? ' N' : ' S'}</span>
                </div>
            } 
            return (ret)
        };
        return (
            <div className="flex-parent-inline flex-parent--center-cross flex-parent--column absolute bottom">
                <div className="flex-child px6 py6 bg-gray-dark color-white round txt-s w120 clip txt-truncate">
                    {features.map(renderFeature)}
                </div>
            </div>
        );
};

export default Tooltip;

import React from 'react';

let importAll = requireContext => requireContext.keys().forEach(requireContext);

try {
    importAll(require.context('/assets/icons', true, /\.svg$/));
} catch (error) {
    console.log(error);
}

export default function Icon(props) {
    return (
        <svg className={`icon ${props.className}`}>
            <use xlinkHref={`#${props.name}`} />
        </svg>
    );
}
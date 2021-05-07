/* eslint-disable max-len */
import React from 'react';

interface IArrow {
	width?: string;
	height?: string;
	fill?: string;
}

const Arrow = ({
	width = '12px',
	height = '8px',
	fill = 'black',
}: IArrow) => (
	<svg width={width} height={height} viewBox="0 0 12 8" fill="none">
		<path
			d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z"
			fill={fill}
		/>
	</svg>
);

export default Arrow;

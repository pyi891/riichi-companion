import * as React from 'react';

function SvgBack(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 300 400" {...props}>
      <defs>
        <mask maskUnits="userSpaceOnUse" id="Back_svg__c">
          <rect
            ry={40}
            y={-1325.603}
            x={-451.938}
            height={400.778}
            width={300.059}
            transform="scale(-1)"
            fill="#ff3737"
            strokeWidth={10}
            strokeLinejoin="round"
          />
        </mask>
        <mask maskUnits="userSpaceOnUse" id="Back_svg__a">
          <rect
            ry={40}
            y={652.284}
            height={400.778}
            width={300.059}
            fill="#ff3737"
            strokeWidth={10}
            strokeLinejoin="round"
          />
        </mask>
        <filter id="Back_svg__b" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="2.51 2.51" result="blur" />
        </filter>
      </defs>
      <g transform="translate(0 -652.362)">
        <rect
          width={300.059}
          height={400.778}
          y={652.284}
          ry={40}
          fill="#ff3737"
        />
        <path
          d="M-4.769 775.071c-4.881-33.076-12.077-100.834 3.49-123.007 20.277-26.12 234.78-20.433 264.593 1.846 12.9 8.739-204.155 2.567-227.406 31.19C13.2 712.468.651 818.187-4.769 775.071z"
          mask="url(#Back_svg__a)"
          fill="#fff"
          fillOpacity={0.784}
          fillRule="evenodd"
          filter="url(#Back_svg__b)"
        />
        <path
          d="M151.736 1025.018c-3.327-9.314-10.249-68.454 5.318-90.627 20.277-26.12 219.436-16.458 231.555-9.932 11.074 5.317-178.604.06-204.851 34.867-21.594 30-26.501 82.178-32.022 65.692z"
          transform="rotate(180 225.969 988.943)"
          mask="url(#Back_svg__c)"
          fillOpacity={0.392}
          fillRule="evenodd"
          filter="url(#Back_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgBack;

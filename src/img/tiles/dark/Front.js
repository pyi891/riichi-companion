import * as React from 'react';

function SvgFront(props) {
  return (
    <svg width={300} height={400} {...props}>
      <defs>
        <mask maskUnits="userSpaceOnUse" id="Front_svg__a">
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
        <mask maskUnits="userSpaceOnUse" id="Front_svg__c">
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
        <filter id="Front_svg__b" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="2.51 2.51" result="blur" />
        </filter>
      </defs>
      <g transform="translate(0 -652.362)">
        <rect
          width={300.059}
          height={400.778}
          y={652.284}
          ry={40}
          fill="#1e1e1e"
        />
        <path
          d="M-4.769 775.071c-4.881-33.076-12.077-100.834 3.49-123.007 20.277-26.12 234.78-20.433 264.593 1.846 12.9 8.739-192.964 9.211-216.215 37.835C24.391 719.112.651 818.187-4.769 775.07z"
          mask="url(#Front_svg__a)"
          fill="#fff"
          fillOpacity={0.157}
          fillRule="evenodd"
          filter="url(#Front_svg__b)"
        />
        <path
          d="M151.736 1025.018c-3.327-9.314-10.249-68.454 5.318-90.627 20.277-26.12 219.436-16.458 231.555-9.932 11.074 5.317-178.604.06-204.851 34.867-21.594 30-26.501 82.178-32.022 65.692z"
          transform="rotate(180 225.969 988.943)"
          mask="url(#Front_svg__c)"
          fillRule="evenodd"
          filter="url(#Front_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgFront;

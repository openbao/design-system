import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVagrantFill24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M2 0a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2H2zm11.924 6.58l3.156-1.83L19 5.864v1.294l-4.276 10.514L12 19.25l-2.724-1.579L5 7.157V5.864L6.92 4.75l3.156 1.83v1.123L12 12.244l1.924-4.541V6.58z"
                        clipRule="evenodd"
                    />
                    <g opacity={0.3}>
                        <path d="M15.843 7.694L19 5.865v1.293l-4.276 10.514L12 19.251v-3.939l1.28-.742 2.563-5.752V7.694zM10.076 6.58v1.123L12 12.245v1.582l-1.28.742-2.565-5.751V7.693l1.921-1.113z" />
                    </g>
                </g>
            </svg>
        );
    }
);

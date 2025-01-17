import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVagrant16 = forwardRef<SVGSVGElement, IconProps>(
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
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M13.08.75L9.924 2.58v1.123L8 8.244l-1.924-4.54V2.579L2.92.75 1 1.864v1.293l4.276 10.514L8 15.25v-3.938l1.28-.742 2.563-5.752V3.693L15 1.865 13.08.75zM6.076 2.58v1.123L8 8.244v1.583l-1.28.742-2.565-5.752V3.693L6.076 2.58z"
                        clipRule="evenodd"
                    />
                    <path
                        d="M15 1.865l-3.157 1.828v1.125L9.28 10.57 8 11.312v3.938l2.724-1.578L15 3.158V1.865zM6.076 3.703V2.58l-1.92 1.113v1.124L6.72 10.57 8 9.827V8.244l-1.924-4.54z"
                        opacity={0.7}
                    />
                </g>
            </svg>
        );
    }
);

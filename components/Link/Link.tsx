import Link, { LinkProps } from 'next/link';
import * as React from 'react';

type RouterLinkProps = {
  linkProps?: Omit<LinkProps, 'href'>;
} & React.HTMLProps<HTMLAnchorElement>;

export const RouterLink = ({
  href,
  linkProps,
  children,
  ...props
}: RouterLinkProps) => {
  return (
    <Link href={href} prefetch={false} {...linkProps}>
      <a href={href} {...props}>
        {children}
      </a>
    </Link>
  );
};

import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { MarkdownResult } from "../../types/utilis_types";

export const ZaisteProgramujShopMarkdown = (
  { children }: { children: MarkdownResult }
) => {
  const domainName = process.env.NEXT_PUBLIC_DOMAIN_NAME; 
  return (
    <MDXRemote
      components={{
        a: ({ href, ...props }) => {
          if (!href || !domainName) {
            return (
              <a {...props}></a>
            );
          } else if (!href.match(new RegExp(domainName))) {
            return (
              <a href={href} {...props} rel="noopener noreferrer"></a>
            );
          }
          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        }
      }}
      {...children}
    />
  );
}
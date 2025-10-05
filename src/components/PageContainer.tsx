import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

/** Centers content with generous side margins, same as: max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 */
export default function PageContainer({ children, className = "" }: Props) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

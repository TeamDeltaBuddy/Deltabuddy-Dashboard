// deltabuddy-dashboard/components/Layout.tsx

import { ReactNode, useState } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Your layout HTML here */}
      {children}
    </div>
  );
}

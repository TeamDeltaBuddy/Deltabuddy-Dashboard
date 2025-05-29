import { ReactNode, useState } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Your layout structure here */}
      {children}
    </>
  );
}

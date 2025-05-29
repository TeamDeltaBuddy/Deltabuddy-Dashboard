import React, { useState, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Your layout JSX here */}
      {children}
    </div>
  );
}

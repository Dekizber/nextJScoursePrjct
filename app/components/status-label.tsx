import React from 'react';

export interface StatusLabelProps {
  children: React.ReactNode;
}

export default function StatusLabel({ children }: StatusLabelProps) {
  return <span className="">{children}</span>;
}

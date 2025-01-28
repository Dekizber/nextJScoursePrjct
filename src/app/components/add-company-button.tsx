import React, { useState } from 'react';
import Button from '@/app/components/button';

export interface AddCompanyButtonProps {}

export default function AddCompanyButton({}: AddCompanyButtonProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(false)}>Add Company</Button>
    </>
  );
}

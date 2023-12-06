
import React from 'react';

const PressPage: React.FC = () => {
  const companyData = {
    companyName: 'CodeSocks Haven',
    address: '76137 Main Street, Karlsruhe, GERMANY',
    email: 'info@codesockshaven.de',
    phone: '+49 123-456-7890',
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-7'>
      <h1>Impressum</h1>
      <p>Firma: {companyData.companyName}</p>
      <p>Adresse: {companyData.address}</p>
      <p>E-Mail: {companyData.email}</p>
      <p>Telefon: {companyData.phone}</p>
    </div>
  );
};

export default PressPage;

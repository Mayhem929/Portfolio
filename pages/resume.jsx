import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; 
    link.download = 'CV.pdf'; 
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <div style={{ paddingTop: '120px' }}>
      <embed src="/CV.pdf" width="100%" height="1200px" type="application/pdf" />
    </div>
  );
};

export default resume;

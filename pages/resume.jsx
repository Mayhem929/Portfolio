import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/anchor.png" />
      </Head>
      <div style={{ paddingTop: '120px' }}>
        <embed src="/CV.pdf" width="100%" height="1200px" type="application/pdf" />
      </div>
    </div>
  );
};

export default resume;

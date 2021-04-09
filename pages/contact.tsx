import React from 'react';
import Link from "next/link"

const contact: React.FC = () => {
  return (
    <div>
      <h1>This is the contact page.</h1>
      <Link href="/"><a>go back</a></Link>
    </div>
  );
}

export default contact;
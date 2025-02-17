import Head from 'next/head';
import { bg } from '../../../db.json';

const IndexPage = ({children}) => (
  <div>
    <Head>
      <title>{children}</title>
      <meta property="og:image" content={bg} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    </Head>
  </div>
);

export default IndexPage;

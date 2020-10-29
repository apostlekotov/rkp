import { Layout } from '@/components/Layout';
import Meta from '@/components/Meta';

import '@/styles/style.scss';

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Meta />
        <Component {...pageProps} />
      </Layout>
  );
}

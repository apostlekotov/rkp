import { Layout } from '@/components/Layout';
import Meta from '@/components/Meta';

// Context
import StoreState from '../context/store/StoreState';

import '@/styles/style.scss';


export default function App({ Component, pageProps }) {
	return (
		<StoreState>
			<Layout>
				<Meta />
				<Component {...pageProps} />
			</Layout>
		</StoreState>
	);
}

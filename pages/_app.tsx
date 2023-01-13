import type { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import '../scss/global.scss';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

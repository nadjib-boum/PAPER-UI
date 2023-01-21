import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
//import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.scss';

// config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient ();
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...props.pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

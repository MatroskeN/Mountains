import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import AppCore from '~/core/app';
import { useTranslation } from 'react-i18next';
import '~/styles/main.scss';
import { ApiMessages } from '~/containers/ApiMessages/ApiMessages';
import { network } from '~/services/network';


const PageTitle = () => {
  const Router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t(`meta.${Router.route}.title`)}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0'
        />
      </Head>
    </>
  );
};

const apiConfig = {
  network,
};

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function AppComponent({ Component, pageProps }: AppProps) {
  return (
    <AppCore api={apiConfig}>
      <ApiMessages>
        <PageTitle />
      </ApiMessages>
      <Component {...pageProps} />
    </AppCore>
  );
}

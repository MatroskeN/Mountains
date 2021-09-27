import '~/core/polyfills.js';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { StackableModalProvider } from 'react-redux-modal-provider';
import { ToastContainer } from 'react-toastify';
import { ApiProvider } from './Api';
import { ApiProviderProps } from './Api/ApiProvider';
import StoreProvider from '~/core/StoreProvider';
import i18n from './i18n';

type AppCoreProps = {
  api: ApiProviderProps;
};

const AppCore: React.FC<AppCoreProps> = ({ api, children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <StoreProvider>
        <ApiProvider {...api}>
          {children}
          <StackableModalProvider />
        </ApiProvider>
        <ToastContainer />
      </StoreProvider>
    </I18nextProvider>
  );
};

AppCore.defaultProps = {};

export default AppCore;

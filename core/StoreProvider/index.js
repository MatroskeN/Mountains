import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import configureStore from '~/store/configureStore';

const StoreProvider = ({
  configureStore,
  children,
}) => {
  const store = useMemo(() => {
    return configureStore(undefined, undefined, );
  }, []);
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

StoreProvider.defaultProps = {
  configureStore,
};

export default StoreProvider;

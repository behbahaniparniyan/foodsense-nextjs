import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { Persistor } from "../src/store/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

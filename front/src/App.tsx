// React imports
import AppRouter from './AppRouter';

// Redux imports
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor} from './store/store';


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppRouter />
            </PersistGate>
        </Provider >
    );
}

export default App;

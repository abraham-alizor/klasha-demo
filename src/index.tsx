import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { Store, persistor } from './states/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<PersistGate loading={null} persistor={persistor}>
		<Provider store={Store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</PersistGate>
);

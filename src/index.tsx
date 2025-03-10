import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { store } from './app/store';
import { App } from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const Root = () => (
  <Provider store={store}>
    {/* Remove UsersProvider when you move users to Redux store */}

    <Router>
      <App />
    </Router>
  </Provider>
);

root.render(<Root />);

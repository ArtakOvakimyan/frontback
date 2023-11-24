import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { hydrateRoot } from 'react-dom/client';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

hydrateRoot(
    root,
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

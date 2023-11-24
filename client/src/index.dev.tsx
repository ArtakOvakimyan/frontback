import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { createRoot } from 'react-dom/client';

const rootNode = document.getElementById('root');

if (!rootNode) {
    throw new Error('root not found');
}

const root = createRoot(rootNode);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

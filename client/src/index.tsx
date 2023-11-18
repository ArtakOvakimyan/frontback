// import { createRoot } from "react-dom/client";
// import { App } from './components/App'
//
// const root = document.getElementById('root');
//
// if (!root) {
//     throw new Error("root not found");
// }
//
// const container = createRoot(root);
// container.render(<App />);
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App'

const root = document.getElementById('root');

if (!root) {
    throw new Error("root not found");
}

ReactDOM.hydrate(<App/>, root);
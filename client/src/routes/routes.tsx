import { Test } from '../components/Test';
import PostPage from '../pages/PostPage/PostPage';

export default [
    { path: '/', element: <PostPage /> },
    {
        path: 'auth',
        element: <Test />,
    },
    { path: '/:id', element: <Test /> },
    { path: '/login', element: <Test /> },
    { path: '/signup', element: <Test /> },
];

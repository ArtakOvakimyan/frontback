import { Test } from '../components/Test';
import PostPage from '../pages/PostPage/PostPage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';

export default [
    { path: '/', element: <PostPage /> },
    {
        path: 'auth',
        element: <Test />,
    },
    { path: '/:id', element: <Test /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignupPage /> },
];

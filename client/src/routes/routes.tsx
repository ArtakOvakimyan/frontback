import { Test } from '../components/Test';
import { PostPage } from '../pages/PostPage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { PostedPage } from '../pages/PostedPage';

export default [
    { path: '/', element: <PostPage /> },
    { path: '/test', element: <Test /> },
    { path: '/post', element: <PostedPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignupPage /> },
];

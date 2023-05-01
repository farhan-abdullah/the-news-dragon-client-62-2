import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routes/Routes';
import AuthProvider from './Provider/AuthProvider';
/*
const router = createBrowserRouter([
	{
		path: '/',
		element: <div>Hello world!</div>,
	},
]);
*/
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);

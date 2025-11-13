import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-primary-600 dark:text-primary-500">404</h1>
                <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Page not found</h2>
                <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="mt-10 flex justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                        <ArrowLeftIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                        Go back home
                    </Link>
                </div>
            </div>

            <div className="mt-16">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    If you think this is a mistake, please contact support.
                </p>
            </div>
        </div>
    );
};

export default NotFound;

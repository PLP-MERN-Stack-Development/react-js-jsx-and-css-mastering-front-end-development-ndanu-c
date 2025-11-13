import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Home = () => {
    const features = [
        {
            name: 'Task Management',
            description: 'Easily create, update, and delete tasks with a simple and intuitive interface.',
            icon: '📝',
        },
        {
            name: 'Dark Mode',
            description: 'Switch between light and dark themes for comfortable viewing in any environment.',
            icon: '🌓',
        },
        {
            name: 'Responsive Design',
            description: 'Works seamlessly on desktop, tablet, and mobile devices.',
            icon: '📱',
        },
        {
            name: 'API Integration',
            description: 'Fetch and display data from external APIs with proper loading and error states.',
            icon: '🔌',
        },
    ];

    return (
        <div className="py-12 bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        <span className="block">Welcome to</span>
                        <span className="block text-primary-600 dark:text-primary-400">TaskMaster</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        A modern task management application built with React and Tailwind CSS. Organize your work and boost your productivity.
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                        <div className="rounded-md shadow">
                            <Link
                                to="/tasks"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                            >
                                Get Started
                                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                            </Link>
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                            <a
                                href="#features"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-primary-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="mt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase">Features</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            A better way to manage tasks
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                            TaskMaster provides all the tools you need to stay organized and productive.
                        </p>
                    </div>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature) => (
                                <div key={feature.name} className="pt-6">
                                    <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg text-2xl">
                                                    {feature.icon}
                                                </span>
                                            </div>
                                            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                                                {feature.name}
                                            </h3>
                                            <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-primary-700 dark:bg-primary-800">
                <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-primary-200">Start managing your tasks today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                to="/tasks"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
                            >
                                Get started
                                <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

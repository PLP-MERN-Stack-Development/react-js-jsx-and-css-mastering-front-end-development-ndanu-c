import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Home', to: '/' },
        { name: 'Tasks', to: '/tasks' },
        { name: 'About', to: '#' },
        { name: 'Contact', to: '#' },
    ];

    return (
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:justify-start space-x-6">
                        {footerLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-4 md:mt-0">
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                            &copy; {currentYear} TaskMaster. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

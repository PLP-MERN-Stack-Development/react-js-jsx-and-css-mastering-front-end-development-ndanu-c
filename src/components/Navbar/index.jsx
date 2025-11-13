import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/tasks', label: 'Tasks' },
    ];

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                                TaskMaster
                            </span>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive
                                            ? 'border-primary-500 text-gray-900 dark:text-white'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center
">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <SunIcon className="h-6 w-6" />
                            ) : (
                                <MoonIcon className="h-6 w-6" />
                            )}
                        </button>

                        {/* Mobile menu button */}
                        <div className="sm:hidden ml-2">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => {
                                    // Mobile menu toggle functionality
                                    const mobileMenu = document.getElementById('mobile-menu');
                                    if (mobileMenu) {
                                        mobileMenu.classList.toggle('hidden');
                                    }
                                }}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="hidden sm:hidden" id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive
                                    ? 'bg-primary-50 border-primary-500 text-primary-700 dark:bg-gray-700 dark:border-primary-400 dark:text-white'
                                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                                }`
                            }
                            onClick={() => {
                                // Close mobile menu when a link is clicked
                                const mobileMenu = document.getElementById('mobile-menu');
                                if (mobileMenu) {
                                    mobileMenu.classList.add('hidden');
                                }
                            }}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

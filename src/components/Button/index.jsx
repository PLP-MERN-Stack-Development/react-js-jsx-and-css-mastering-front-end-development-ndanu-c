import React from 'react';
import { classNames } from '../../utils/classNames';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    type = 'button',
    onClick,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500',
        secondary: 'text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500',
        danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
        outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-primary-500',
        ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-primary-500',
        link: 'text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 focus:ring-primary-500',
    };

    const sizes = {
        xs: 'px-2.5 py-1.5 text-xs rounded',
        sm: 'px-3 py-2 text-sm leading-4 rounded-md',
        md: 'px-4 py-2 text-sm rounded-md',
        lg: 'px-4 py-2 text-base rounded-md',
        xl: 'px-6 py-3 text-base rounded-md',
    };

    return (
        <button
            type={type}
            className={classNames(
                baseStyles,
                variants[variant],
                sizes[size],
                className
            )}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

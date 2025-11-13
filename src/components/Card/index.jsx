import React from 'react';
import { classNames } from '../../utils/classNames';

const Card = ({
    children,
    className = '',
    hoverable = false,
    ...props
}) => {
    return (
        <div
            className={classNames(
                'bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden',
                hoverable && 'transition-shadow duration-200 hover:shadow-md',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

const Header = ({
    children,
    className = '',
    withBorder = true,
    ...props
}) => (
    <div
        className={classNames(
            'px-4 py-5 sm:px-6',
            withBorder && 'border-b border-gray-200 dark:border-gray-700',
            className
        )}
        {...props}
    >
        {children}
    </div>
);

const Body = ({
    children,
    className = '',
    padding = true,
    ...props
}) => (
    <div
        className={classNames(
            padding ? 'px-4 py-5 sm:p-6' : '',
            className
        )}
        {...props}
    >
        {children}
    </div>
);

const Footer = ({
    children,
    className = '',
    withBorder = true,
    ...props
}) => (
    <div
        className={classNames(
            'px-4 py-4 sm:px-6',
            withBorder && 'border-t border-gray-200 dark:border-gray-700',
            'bg-gray-50 dark:bg-gray-700/30',
            className
        )}
        {...props}
    >
        {children}
    </div>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

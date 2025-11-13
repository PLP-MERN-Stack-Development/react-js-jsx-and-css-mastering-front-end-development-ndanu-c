/**
 * Combines multiple class names into a single string, filtering out any falsy values.
 * @param {...(string|Object|Array<string|Object>)} classes - Class names or objects with class names as keys and boolean values.
 * @returns {string} - Combined class names as a single string.
 */
export function classNames(...classes) {
    return classes
        .flatMap((item) => {
            if (typeof item === 'string') {
                return item.split(' ');
            }
            if (Array.isArray(item)) {
                return item.filter(Boolean);
            }
            if (typeof item === 'object' && item !== null) {
                return Object.entries(item)
                    .filter(([_, value]) => Boolean(value))
                    .map(([key]) => key);
            }
            return [];
        })
        .filter(Boolean)
        .join(' ');
}

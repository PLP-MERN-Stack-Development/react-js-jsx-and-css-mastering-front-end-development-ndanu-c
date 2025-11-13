import { useState } from 'react';
import TaskManager from '../../components/TaskManager';
import { PlusIcon } from '@heroicons/react/24/outline';

const Tasks = () => {
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    return (
        <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Task Manager</h1>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Organize your tasks and boost your productivity
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => setIsHelpOpen(!isHelpOpen)}
                                className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                aria-label="Help"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Help Panel */}
                    {isHelpOpen && (
                        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">How to use</h3>
                            <ul className="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
                                <li>Add a new task using the input field</li>
                                <li>Click on a task to mark it as complete/incomplete</li>
                                <li>Use the filter buttons to view all, active, or completed tasks</li>
                                <li>Delete tasks you no longer need</li>
                            </ul>
                        </div>
                    )}

                    {/* Task Manager Component */}
                    <TaskManager />

                    {/* Tips Section */}
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                            <span className="text-primary-600 dark:text-primary-400">Pro Tip:</span> Keyboard Shortcuts
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start">
                                <kbd className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                                    Enter
                                </kbd>
                                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Add a new task</span>
                            </div>
                            <div className="flex items-start">
                                <kbd className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
                                    Click
                                </kbd>
                                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Toggle task completion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;



import React from 'react';

const TaskListNumbers = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
        <div className='rounded-xl bg-red-500 py-6 px-4 flex flex-col items-center'>
          <h2 className='text-2xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl bg-green-600 py-6 px-4 flex flex-col items-center'>
          <h2 className='text-2xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl bg-blue-600 py-6 px-4 flex flex-col items-center'>
          <h2 className='text-2xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl bg-orange-600 py-6 px-4 flex flex-col items-center'>
          <h2 className='text-2xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;

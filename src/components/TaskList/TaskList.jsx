import React from 'react';

const TaskList = () => {
  return (
    <div 
      id='taskList' 
      className='h-[55%] w-full mt-10 flex gap-6 overflow-x-auto pb-4'
    >
      {/* Task Card 1 */}
      <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-6 hover:shadow-lg transition-shadow'>
        <div className='flex justify-between items-center'>
          <span className='bg-red-600 text-white py-1 px-4 rounded-full text-sm font-medium'>
            High
          </span>
          <span className='text-sm text-gray-700 font-medium'>
            20 Feb 2005
          </span>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Do DSA</h2>
          <p className='mt-2 text-gray-700'>Complete daily DSA practice problems</p>
        </div>
      </div>

      {/* Task Card 2 */}
      <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-6 hover:shadow-lg transition-shadow'>
        <div className='flex justify-between items-center'>
          <span className='bg-yellow-600 text-white py-1 px-4 rounded-full text-sm font-medium'>
            Medium
          </span>
          <span className='text-sm text-gray-700 font-medium'>
            21 Feb 2005
          </span>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Project Meeting</h2>
          <p className='mt-2 text-gray-700'>Team sync-up at 2 PM</p>
        </div>
      </div>

      {/* Task Card 3 */}
      <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-6 hover:shadow-lg transition-shadow'>
        <div className='flex justify-between items-center'>
          <span className='bg-green-600 text-white py-1 px-4 rounded-full text-sm font-medium'>
            Low
          </span>
          <span className='text-sm text-gray-700 font-medium'>
            22 Feb 2005
          </span>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Code Review</h2>
          <p className='mt-2 text-gray-700'>Review pull requests</p>
        </div>
      </div>

      {/* Task Card 4 */}
      <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-6 hover:shadow-lg transition-shadow'>
        <div className='flex justify-between items-center'>
          <span className='bg-blue-600 text-white py-1 px-4 rounded-full text-sm font-medium'>
            Normal
          </span>
          <span className='text-sm text-gray-700 font-medium'>
            23 Feb 2005
          </span>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Documentation</h2>
          <p className='mt-2 text-gray-700'>Update API docs</p>
        </div>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-6 hover:shadow-lg transition-shadow'>
        <div className='flex justify-between items-center'>
          <span className='bg-red-600 text-white py-1 px-4 rounded-full text-sm font-medium'>
            High
          </span>
          <span className='text-sm text-gray-700 font-medium'>
            20 Feb 2005
          </span>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Do DSA</h2>
          <p className='mt-2 text-gray-700'>Complete daily DSA practice problems</p>
        </div>
      </div>

      {/* Task Card 2 */}
      <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-6 hover:shadow-lg transition-shadow'>
        <div className='flex justify-between items-center'>
          <span className='bg-yellow-600 text-white py-1 px-4 rounded-full text-sm font-medium'>
            Medium
          </span>
          <span className='text-sm text-gray-700 font-medium'>
            21 Feb 2005
          </span>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Project Meeting</h2>
          <p className='mt-2 text-gray-700'>Team sync-up at 2 PM</p>
        </div>
      </div>

      {/* Task Card 3 */}
      <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-6 hover:shadow-lg transition-shadow'>
        <div className='flex justify-between items-center'>
          <span className='bg-green-600 text-white py-1 px-4 rounded-full text-sm font-medium'>
            Low
          </span>
          <span className='text-sm text-gray-700 font-medium'>
            22 Feb 2005
          </span>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Code Review</h2>
          <p className='mt-2 text-gray-700'>Review pull requests</p>
        </div>
      </div>

      {/* Task Card 4 */}
      <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-6 hover:shadow-lg transition-shadow'>
        <div className='flex justify-between items-center'>
          <span className='bg-blue-600 text-white py-1 px-4 rounded-full text-sm font-medium'>
            Normal
          </span>
          <span className='text-sm text-gray-700 font-medium'>
            23 Feb 2005
          </span>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Documentation</h2>
          <p className='mt-2 text-gray-700'>Update API docs</p>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
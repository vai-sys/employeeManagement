import React from 'react'

const CreateTask = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create New Task</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Section - Left Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Due Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Assign To
              </label>
              <input
                type="text"
                placeholder="Employee Name"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Category
              </label>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 mt-2 text-sm"
            >
              Create Task
            </button>
          </div>

          {/* Description Textarea - Right Side */}
          <div>
            <label className="block text-white text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              rows="12"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-sm"
              placeholder="Enter task description..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTask
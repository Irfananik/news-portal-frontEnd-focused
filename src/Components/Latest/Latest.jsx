import React from 'react'

const Latest = () => {
  return (
    <div className="w-full bg-gray-100 py-3 shadow-sm border border-gray-200 rounded overflow-hidden">

      {/* Label */}
      <div className="flex justify-center mb-1">
        <span className="bg-secondary text-white font-semibold px-4 py-1 rounded">
          Latest News
        </span>
      </div>

      {/* Scrolling Text */}
      <p className="text-sm text-gray-700 marquee text-center">
        🚀 Breaking: New features added to the platform | 🎓 Study abroad opportunities expanding | 💡 React + Tailwind UI improvements | 🌍 Global tech news updates coming soon
      </p>

    </div>
  )
}

export default Latest
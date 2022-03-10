export const Pagination = () => {
  return (
    <div className="mt-7">
      <nav className="border-t border-gray-300 px-4 flex items-center justify-center sm:px-0">
        <div className="hidden md:-mt-px md:flex">
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium"
          >
            1
          </a>
          <a
            href="#"
            className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium"
            aria-current="page"
          >
            2
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium"
          >
            3
          </a>
          <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium">
            ...
          </span>
          <a
            href="#"
            className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium"
          >
            8
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium"
          >
            9
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium"
          >
            10
          </a>
        </div>
      </nav>
    </div>
  )
}
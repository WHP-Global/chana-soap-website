
// eslint-disable-next-line react/prop-types
export default function Button({children,navigate}) {
  return (
    <button onClick={navigate} className="mt-4 font-body bg-primary font-color-secondary px-6 py-2 rounded-lg shadow-md hover:bg-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ml-auto flex">
        {children}
    </button>
  )
}


import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
        <FaExclamationTriangle className="text-yellow-400 fa-4x mb-4" size={64} />
      <h1 className="!text-6xl font-bold text-white-900">404</h1>
      <p className="mt-4 !text-xl text-white-700">Page Not Found</p>
      
      <Link to="/" className="mt-6 !bg-blue-400 !text-black rounded-md px-4 py-2 hover:!bg-blue-500 transition duration-300 ease-in-out">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
import  { Link, useParams } from 'react-router';
import { useState } from 'react';
const NoteDetailPage = () => {
  const { id } = useParams();
  const [values, setValues] = useState({ title: '', content: '' });
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://uploadproducts.onrender.com/getnote/${id}`)
    const data = await res.json();
    setValues(data);
    console.log(values)
  };
  return <div data-theme="luxury" className="min-h-screen flex items-center justify-center bg-base-200 w-full">
        <form className="bg-base-100 p-6 rounded-lg shadow-md w-[70%]">
          <h2 className="text-2xl font-bold mb-4 text-base-content">Edit your product</h2>
          <div className="mb-4">
            <label className="block text-base-content mb-2" htmlFor="title">Title of Product</label>
            <input
              type="text"
              id="title"
              
              className="w-full p-2 border border-base-300 rounded focus:outline-none focus:ring-2 focus:ring-base-300 bg-base-200 text-base-content"
              placeholder="Give a good name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base-content mb-2" htmlFor="content">Product Description</label>
            <textarea
              id="content"
              name="content"
              
              className="w-full p-2 border border-base-300 rounded focus:outline-none focus:ring-2 focus:ring-base-300 bg-base-200 text-base-content"
              rows="4"
              placeholder="Your production details here"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className="bg-base-content text-base-100 cursor-pointer py-2 px-4 rounded hover:bg-base-300"
          >
            Edit
          </button>
          <div className="mt-4 text-center">
            <Link to="/" className="text-base-content underline hover:text-base-300">
              Back to Home
            </Link>
          </div>
        </form>
      </div>;
};

export default NoteDetailPage;
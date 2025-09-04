import { Link, useParams } from 'react-router';
import { useState, useEffect } from 'react';

const NoteDetailPage = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    const fetchNote = async () => {
      const res = await fetch(`https://productslistingatechlinora.netlify.app/getnote/${id}`, {
        method: 'GET',
      });
      const data = await res.json();
      setValues({
        title: data.title,
        content: data.content
      });
      console.log(values);
    };
    fetchNote();
  }, [id]);

  return (
    <div data-theme="luxury" className="min-h-screen flex items-center justify-center bg-base-200 w-full">
      <form className="bg-base-100 p-6 rounded-lg shadow-md w-[70%]">
        <h2 className="text-2xl font-bold mb-4 text-base-content">Note Details</h2>
        <div className="mb-4">
          <label className="block text-base-content mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            readOnly
            className="w-full p-2 border border-base-300 rounded focus:outline-none bg-base-200 text-base-content"
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base-content mb-2" htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={values.content}
            readOnly
            className="w-full p-2 border border-base-300 rounded focus:outline-none bg-base-200 text-base-content"
            rows="4"
            placeholder="Content"
          ></textarea>
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-base-content underline hover:text-base-300">
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NoteDetailPage;
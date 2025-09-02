import { useState,useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import NoteComponent  from '../components/noteComponent.jsx';
const HomePage = () => {

  const [note, setNote] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      const res = await fetch("https://uploadproducts.onrender.com/getnote");
      const data = await res.json();
      setNote(data);
      
    };
    fetchNote();
  }, []);

  return <div >
        <Nav />
    <NoteComponent notes={note} setnote={setNote} />
      </div>;
};

export default HomePage;
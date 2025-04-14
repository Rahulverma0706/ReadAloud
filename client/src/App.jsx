import { useState, useRef } from 'react';
import axios from 'axios';
import successSound from '../public/good-6081.mp3'; // Success sound when conversion is complete

function App() {
  const [file, setFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);
  const alertSound = useRef(null);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('book', file);
    setLoading(true);

    try {
      const res = await axios.post('"https://readaloud-tbqf.onrender.com/upload", formData);
      setAudioUrl(res.data.audioUrl);
      setLoading(false);
      alertSound.current.play(); // 🎉 Play success alert sound
    } catch (err) {
      console.error('Upload failed', err);
      setLoading(false);
      alert('Error occurred while converting the file.');
    }
  };

  return (
    <div className="flex items-center justify-between space-x-8">
  <audio ref={alertSound} src={successSound} />

  {/* Left Side: Instructions */}
  <div className="w-full lg:w-1/2 p-8 space-y-4 lg:text-left text-center">
    <h1 className="text-4xl font-bold text-yellow-300 mb-6">📖 Welcome to ReadAloud!</h1>
    <p className="text-lg text-white">
      Upload your text file, and we'll convert it into an audio version for you to listen to. 🎧
    </p>
    <div className="text-lg text-white">
      <p className="font-semibold mb-2">How to Use:</p>
      <ul className="list-decimal pl-6 space-y-2">
        <li>Select a `.txt` file from your device using the file input below.</li>
        <li>Click "Upload & Convert" to start the conversion process.</li>
        <li>Once converted, listen to your book or download it for offline use!</li>
      </ul>
    </div>
  </div>

  {/* Right Side: App functionality (File input, Button, Audio Player) */}
  <div className="w-full lg:w-1/2 p-8 flex flex-col items-center space-y-4">
    <input
      type="file"
      accept=".txt"
      onChange={(e) => setFile(e.target.files[0])}
      className="border-2 border-white rounded px-4 py-2 mb-4 w-full focus:outline-none"
    />

    <button
      onClick={handleUpload}
      disabled={loading}
      className={`w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
    >
      {loading ? 'Converting...' : 'Upload & Convert'}
    </button>

    {/* Custom loading animation */}
    {loading && (
      <div className="flex justify-center items-center mt-4">
        <div className="loading-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
      </div>
    )}

    {/* Shrink UI effect after completion */}
    {audioUrl && (
      <div className="mt-6 w-full flex flex-col items-center transition-all duration-300 transform scale-95">
        <h2 className="text-xl mb-2 text-yellow-300">🎧 Listen to Your Book</h2>
        <audio ref={audioRef} controls src={audioUrl} className="w-full rounded" />
      </div>
    )}
  </div>
</div>

  );
}

export default App;

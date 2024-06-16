import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/', {});
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <p>{message}</p>
    </div>
  );
}

export default App;

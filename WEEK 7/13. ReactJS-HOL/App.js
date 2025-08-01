import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('book');

  const renderComponent = () => {
    if (view === 'book') return <BookDetails />;
    if (view === 'blog') return <BlogDetails />;
    return <CourseDetails />;
  };

  return (
    <div>
      <h1>Blogger App</h1>
      <button onClick={() => setView('book')}>Book</button>
      <button onClick={() => setView('blog')}>Blog</button>
      <button onClick={() => setView('course')}>Course</button>
      {renderComponent()}
    </div>
  );
}

export default App;
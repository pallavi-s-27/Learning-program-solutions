import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data.slice(0, 5) });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  componentDidCatch(error, info) {
    alert("Something went wrong!");
  }

  render() {
    if (this.state.hasError) return <p>Error occurred while loading posts.</p>;

    return (
      <div>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

/*function Hi() {
  //return <div>Hello World</div>;
return <div>Hello <strong>Sidrah</strong></div>

}*/

/*function greet (props) {
  return <div>Hi {props.firstname} {props.lastname}</div>;
}*/

/*function Room() {
  
  const [isLit, setLit] = React.useState(true);
  const brightness = isLit ? "lit" : "dark";

  return (
    <div className={`room${brightness}`}>This room is {brightness}
    <br/>
    <button onClick={() => setLit(!isLit)}> flip </button>
    </div>
  );
}


ReactDOM.render(<Room />, document.getElementById('root'));*/

function Reddit() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);
  
        setPosts(newPosts);
      });
  }, []);
  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.getElementById("root"));
import React, {lazy, useEffect, useState} from 'react';
import st from 'ryscott-st';

const Home = function() {
  const [feed, setFeed] = useState([]);

  var renderFeed = function() {
    var rendered = [];

    feed.map(function(post, i) {
      rendered.push(
        <div key={i} className='post v'>
          <div className='postHead h'>
            <div className='postUser'>{post.user}</div>
            <div className='postDate'><small>{post.date}</small></div>
          </div>
          <div className='postContent v'>{post.text}</div>
        </div>
      );
    });

    return rendered;
  };

  return (
    <div className='home v'>
      <div className='postContainer v'>
        <textarea placeholder='Say something!'/>
        <div className='postButtons h'>submit</div>
      </div>
      <div className='posts'>
        {renderFeed()}
      </div>
    </div>
  );
};

export default Home;


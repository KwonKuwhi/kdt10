import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PostList = () => {
  // 리덕스 스토어에서 게시글 목록 상태를 조회
  const posts = useSelector((state) => state.posts.posts); // store에 있는 posts.postSlice

  return (
    <div>
      <h1>게시판</h1>
      <Link to="/create">작성</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            제목: {post.title} 내용:{post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postSlice';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PostCreateForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const newPost = {
      id: Date.now(),
      title: data.title,
      content: data.content,
    };
    dispatch(addPost(newPost));
    navigate('/');
  };

  //addPost
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          {...register('title', { required: '제목은 필수' })}
        ></input>
      </div>
      <div>
        <label htmlFor="content">내용</label>
        <textarea {...register('content')} />
      </div>
      <button>작성</button>
    </form>
  );
};
export default PostCreateForm;

import { useForm } from 'react-hook-form';

function FormEx() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  return (
    <>
      <h1>react-hook-form Ex</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register('username', {
            required: '이름은 필수항목입니다.',
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="나이"
          {...register('age', {
            required: '나이를 입력해주세요',
            validate: {
              checkAge: (value) => {
                return value > 0 || '나이는 0 이상의 숫자로만 입력해주세요';
              },
            },
          })}
        />
        {errors.age && <div style={{ color: 'red' }}>{errors.age.message}</div>}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
export default FormEx;

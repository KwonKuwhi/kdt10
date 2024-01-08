import useToggle from './hooks/useToggle';

function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  console.log(useToggle());

  return (
    <>
      <h1>custom hook (useToggle) ex</h1>
      <div style={{ cursor: 'pointer' }} onClick={setIsFaqOpen}>
        Q. 리액트에서 커스텀 훅 만들 수 있나요??
      </div>
      {isFaqOpen && <div>A. 가능합니다.</div>}
    </>
  );
}

export default Faq;

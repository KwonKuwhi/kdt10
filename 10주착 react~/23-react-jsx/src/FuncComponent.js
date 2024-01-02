import propTypes from 'prop-types';

function FuncComponent({ name }) {
  //const { name } = props;
  return (
    <div>
      <h1> HI!</h1>
      <p> 여기는 Function Component</p>
      {/* <p>
        새로운 컴포넌트의 이름은 <b> {props.name}</b>
      </p> */}
      <p>
        새로운 컴포넌트의 이름은 <b> {name}</b>
      </p>
    </div>
  );
}

FuncComponent.defaultProps = {
  name: '고길동',
};

FuncComponent.propTypes = {
  name: propTypes.string,
};

export default FuncComponent;

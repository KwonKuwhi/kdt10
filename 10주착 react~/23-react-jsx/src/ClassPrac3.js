import { Component } from 'react';
class Prac3 extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <button
          onClick={() => {
            console.log();
          }}
        >
          콘솔 메세지
        </button>
      </div>
    );
  }
}
Prac3.defaultProps = {
  text: '이건 기본 text props 입니다',
};
export default Prac3;

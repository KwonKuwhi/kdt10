// import React  from 'react';

// class ClassComponent extends React.Component {}
import PropTypes from 'prop-types'; //리액트에서 제공하는 기능
// prop-types 라이브러리를 PropTypes 이름으로 import
import { Component } from 'react';

class ClassComponent extends Component {
  // 클래스형 컴포넌트는 render 함수가 필수
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p>
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  name: '기본값',
};

ClassComponent.propTypes = {
  name: PropTypes.string,
};
export default ClassComponent;

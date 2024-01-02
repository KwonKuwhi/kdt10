function Food(props) {
  const { food } = props;
  return (
    <h1>
      제가 좋아하는 음식은 <span style={{ color: 'red' }}>{food}</span> 입니다.
    </h1>
  );
}

Food.defaultProps = {
  food: '비빔밥(default)',
};

export default Food;

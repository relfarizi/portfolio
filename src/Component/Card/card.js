import styles from "./card.styles";

const _renderTitle = (title) => {
  return (
    <text> {title} </text>
  )
};

const _renderDescription = (description) => {
  return (
    <text> {description} </text>
  )
};

const _renderRangeTime = (rangeTime) => {

  return (
    <text> {rangeTime} </text>
  )
}

const Card = (props) => {
  const { title, description, rangeTime } = props;
  console.log(props)

  return (
    <div style={styles.cardContainer}>
      {_renderTitle(title)}
      {_renderDescription(description)}
      {_renderRangeTime(rangeTime)}
    </div>
  )
};

export default Card
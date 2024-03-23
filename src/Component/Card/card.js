import styles from "./card.styles";
import image from '../../Assets/Card/software-developer.jpg'; // TODO: need to add index

const _renderImage = () => {
  return (
    <img style={styles.image} src={image} alt="placeholder" />
  )
}

const _renderTitle = (title) => {
  return ( <h4 style={{
    marginRight: 10
  }}> { title } </h4> )
}

const _renderHeadlineSeparator = () => {
  return <div> | </div>
}

const _renderSubTitle = (subTitle) => {
  if (!subTitle) return <div/>

  return (
    <h6> {subTitle} </h6>
  )
};

const _renderHeadline = (title, subTitle) => {
  return (
    <div style={styles.headline}>
      {_renderTitle(title)}
      {/*{_renderHeadlineSeparator()}*/}
      {_renderSubTitle(subTitle)}
    </div>
  )
};

const _renderDescription = (description) => {
  return (
    <h6> {description} </h6>
  )
};

const _renderRangeTime = (rangeTime) => {

  return (
    <text> {rangeTime} </text>
  )
}

const Card = (props) => {
  const { title, subTitle, description, rangeTime } = props;
  console.log(props)

  return (
    <div style={styles.cardContainer}>
      <div style={styles.cardLeft}>
        {_renderImage()}
      </div>
      <div style={styles.cardRight}>
        {_renderHeadline(title, subTitle)}
        {_renderDescription(description)}
        {_renderRangeTime(rangeTime)}
      </div>
    </div>
  )
};

export default Card
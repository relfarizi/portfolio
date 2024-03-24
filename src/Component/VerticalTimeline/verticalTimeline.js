import styles from "./verticalTimeline.styles";
import Card from "../Card";

const _getMarginTop = (order) => {
  if (order === 0) return 0;
  if (order === 1) return 300;

  return 490;
}
const _renderScreen = (total, cards, section) => {
    return <div style={styles.screen(total, section)}>
      {
        cards.map(
          (props) => <Card
            {...props}
            reverse={section === 'left'}
            style={{
              width: 400,
              marginTop: _getMarginTop(props.order)
            }}
          />
        )
      }
    </div>
}

// TODO: need to move to component dir
const _renderRound = (index) => {
  return <div style={styles.round(index)}/>
}
const _renderLine = (total) => {
  return (
    <div style={styles.line(total)}>
      {
        Array.from({ length: total }, (_, index) => (
          _renderRound(index)
        ))
      }
    </div>
  )
}

const _getCardData = (cards) => {
  const leftCard = [];
  const rightCard = [];

  cards.forEach((card, index) => {
    if ((index % 2) === 0) {
      leftCard.push(card)
    } else {
      rightCard.push(card)
    }
  });

  return {
    leftCard,
    rightCard,
    total: cards.length
  }
}
const VerticalTimeline = (props) => {
  const { leftCard, rightCard, total } = _getCardData(props.cards);

  return (
    <div style={styles.screenContainer}>
      {_renderScreen(total, leftCard, 'left')}
      {_renderLine(total)}
      {_renderScreen(total, rightCard, 'right')}
    </div>
  )
}

export default VerticalTimeline;
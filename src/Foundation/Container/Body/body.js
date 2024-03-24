import React from 'react';

import { Card, VerticalTimeline } from '../../../Component';
import { mockCard } from '../../../Mock';
import {
  getRangeTime
} from '../../../Utils';

const _getCardProps = (card) => ({
  title: card.title,
  subTitle: card.place,
  rangeTime: getRangeTime(card.startDate, card.endDate),
  order: card.order
});

const Body = () => {
  const cards = mockCard;
  // return (
  //   cards.map((card) =>
  //     <Card
  //       {..._getCardProps(card)}
  //     />
  //   )
  // );
  const mappedCards = cards.map((card) => _getCardProps(card))
  return (
      <VerticalTimeline
        cards={mappedCards}
      />
    )
}

export default Body;

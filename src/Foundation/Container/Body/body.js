import React from 'react';

import { Card } from '../../../Component';
import { mockCard } from '../../../Mock';
import {
  getRangeTime
} from '../../../Utils';

const _getCardProps = (card) => ({
  title: card.title,
  description: card.description,
  rangeTime: getRangeTime()
});

const Body = () => {
  const cards = mockCard;
  return (
    cards.map((card) =>
      <Card
        {..._getCardProps(card)}
      />
    )
  );
}

export default Body;

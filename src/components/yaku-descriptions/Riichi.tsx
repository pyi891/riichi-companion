import React from 'react';
import { Link } from 'react-router-dom';

const Riichi = () => (
  <>
    <p>
      Riichi is scored when a player declares riichi and wins the hand. See the{' '}
      <Link to="/basics">Basics</Link> section for more information.
    </p>
    <p>
      Winning by riichi enables the potential to score the ippatsu yaku
      {/** TODO: LINK */} by winning within 1 uninterrupted turn of calling
      riichi. It also enables the potential addition of ura dora (hidden dora)
      to further increase the hand's score.
    </p>
  </>
);

export default Riichi;

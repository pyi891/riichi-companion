import React from 'react';

const Pinfu = () => (
  <>
    <p>Pinfu is scored when the player's hand meets the following criteria:</p>
    <ul>
      <li>The player's hand contains four sequences.</li>
      <li>
        The player's pair must not be their seat wind, the round wind, or a
        dragon.
      </li>
      <li>
        The player's last wait must have been to complete an open ended
        sequence.
      </li>
    </ul>
    <p>
      Specifically, pinfu must be a hand that does not score any additional fu
      {/**TODO: LINK */}. Triplets/quads, waits that are not for an open ended
      sequence, and pairs involving yakuhai{/**TODO: LINK */} tiles are all
      combinations that score fu.
    </p>
  </>
);

export default Pinfu;

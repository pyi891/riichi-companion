import React from 'react';

const NagashiMangan = () => (
  <>
    <p>
      Nagashi mangan is a special yaku that is awarded to a player in the event
      of an exhaustive draw (no tiles remain in the wall to be drawn) that meets
      the following criteria:
    </p>
    <ul>
      <li>
        The player's discards consist exclusively of terminal (1 or 9) and honor
        (wind and dragon) tiles.
      </li>
      <li>The player may not have called any tiles.</li>
      <li>No tiles have been called from the player's discards.</li>
    </ul>
    <p>
      Players who have successfully met these conditions are awarded the amount
      of points equivalent to a mangan tsumo during the exhaustive draw point
      exchange.
    </p>
  </>
);

export default NagashiMangan;

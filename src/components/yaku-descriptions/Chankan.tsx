import React from 'react';

const Chankan = () => (
  <>
    <p>
      Chankan is scored when a player calls their winning tile from another
      player who declares kan to upgrade their pon (open triplet) to a quad. In
      other words, if a player is in tenpai and waiting on a tile that another
      player uses to call a kan to upgrade their pon, the first player may then
      declare ron on that tile and win.
    </p>
    <p>
      Chankan generally may not be called on closed kans. The only exception to
      this rule is if the tile would complete a {/** TODO: LINK */} kokushi
      musou.
    </p>
  </>
);

export default Chankan;

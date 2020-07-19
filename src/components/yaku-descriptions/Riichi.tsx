import React from 'react';

const Riichi = () => (
  <>
    <p>
      Riichi may be declared when a player advances their hand to tenpai without
      calling any tiles from other players. Riichi may apply to any closed hand
      configuration that is in tenpai, making it an extremely flexible yaku to
      score.
    </p>
    <p>
      When declaring riichi, the player must place a 1000 point wager that they
      will win the hand on the table. Once they have declared riichi, the player
      may not alter their hand any further (i.e. call an opponent's tile or keep
      any drawn tiles that do not complete their hand) and must either wait for
      their winning tile to be discarded by another player (to win by ron) or
      draw it themselves from the wall (to win by tsumo, which additionally
      scores {/** TODO: LINK */} menzen tsumo due to the closed hand requirement
      of riichi).
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

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import MahjongHand from './MahjongHand';

const BasicsDiv = styled.div`
  padding: 1em 0;
`;

const Basics = () => (
  <BasicsDiv>
    <h3>Introduction</h3>
    <p>
      Riichi mahjong is a Japanese variant of mahjong . It features unique
      strategic elements to distinguish itself from other mahjong variants. The
      aim of this page is to provide a quick reference for newer players of the
      game. A full list of rules can be found on the{' '}
      <a
        href="http://arcturus.su/wiki/Japanese_mahjong"
        target="_blank"
        rel="noopener noreferrer"
      >
        arcturus.su wiki page for Japanese mahjong
      </a>
      .
    </p>
    <h3>Tiles</h3>
    <h4>Numbered suits</h4>
    <p>Listed in order from 1 to 9:</p>
    <p>Manzu (characters)</p>
    <MahjongHand tiles="123456789m" />
    <p>Pinzu (circles)</p>
    <MahjongHand tiles="123456789p" />
    <p>Souzu (bamboo)</p>
    <MahjongHand tiles="123456789s" />
    <h4>Winds</h4>
    <p>Ton, nan, shaa, pei (east, south, west, north)</p>
    <MahjongHand tiles="1234z" />
    <h4>Dragons</h4>
    <p>Haku, hatsu, chun (white, green, red)</p>
    <MahjongHand tiles="567z" />
    <h3>Winning a hand</h3>
    <p>
      Winning a hand in riichi mahjong requires at least one valid yaku (scoring
      combination). See the <Link to="/yaku">Yaku</Link> page for a full list of
      yaku.
    </p>
    <p>
      You must be in tenpai (one tile away from completing your hand) to make
      the following calls to win the hand:
    </p>
    <ul>
      <li>Tsumo - drawing your winning tile from the wall.</li>
      <li>
        Ron - claiming your winning tile from an opponent's discard. Cannot be
        called if you are in furiten (more on this later).
      </li>
    </ul>
    <h4>
      Why can't I win with a completed hand/why is Mahjong Soul telling me "No
      Yaku"?
    </h4>
    <p>
      <strong>
        You must have at least one valid <Link to="/yaku">yaku</Link> to win a
        hand.
      </strong>{' '}
      You can think of yaku as a condition you have to meet in order to score
      and win. This is usually related to the structure of your hand, but can
      also be tied to other situations, the two most notable being when you
      self-draw your winning tile while your hand is closed (menzen tsumo) or
      when claiming your winning tile after declaring riichi (see below).
    </p>
    <h4>Declaring riichi</h4>
    <p>
      Riichi may be declared when a player advances their hand to tenpai without
      calling any tiles from other players. Riichi may apply to any closed hand
      configuration that is in tenpai, making it by far the most commonly scored
      yaku.
    </p>
    <p>
      When declaring riichi, the player must place a 1000 point wager that they
      will win the hand on the table. A player with less than 1000 points cannot
      declare riichi. Once they have declared riichi, the player may not alter
      their hand any further (i.e. call an opponent's tile or keep any drawn
      tiles that do not complete their hand) and must either wait for their
      winning tile to be discarded by another player (to win by ron) or draw it
      themselves from the wall (to win by tsumo, which additionally scores
      menzen tsumo due to the closed hand requirement of riichi).
    </p>
    <h4>Why am I in furiten?</h4>
    <p>
      Furiten is a state in which you cannot declare ron to win off your
      opponent's discard due to at least one of the following conditions:
    </p>
    <ul>
      <li>
        One of your waits is in your discard pile or was called by an opponent.
        Change the offending wait(s) to fix this. Note that having even just one
        wait in your discard places your entire hand in furiten.
      </li>
      <li>
        You turned down a chance to win off an opponent's discard (ron). You
        will be in temporary furiten either until your next turn or until
        someone calls a tile.
      </li>
      <li>
        You called riichi and turned down a chance to win off an opponent's
        discard (ron). You are in furiten for the rest of the hand.
      </li>
    </ul>
    <p>Note that it is still possible to win by tsumo while in furiten.</p>
    <h3>Calls</h3>
    <p>
      Calling tiles will open your hand, with the exception of a closed kan.
    </p>
    <ul>
      <li>
        Chii - calling a tile to complete a sequence in your hand. Can only be
        called from the player to your left.
      </li>
      <li>
        Pon - calling a tile to complete a triplet in your hand. Can be called
        from any player.
      </li>
      <li>
        Kan - upgrading a triplet in your hand to a quad. Reveals one extra dora
        indicator and draws an additional tile from the dead wall. If you
        upgrade a closed triplet with a self-drawn fourth tile, your hand will
        remain closed.
      </li>
    </ul>{' '}
    <p>
      When calls are made simultaneously, they take the following precedence
      order: ron &gt; pon/kan &gt; chii.
    </p>
    <p>
      <strong>
        Keep in mind that opening your hand will invalidate certain yaku!
      </strong>{' '}
      In general, try to avoid calling tiles unless you have a specific plan in
      mind. Be extra careful of calling winds that are not the seat or round
      wind, as well as calling to make groups that include a terminal tile, as
      these calls will invalidate some of the most common yaku such as riichi,
      tanyao, and pinfu.
    </p>
    <h3>Dora</h3>
    <p>
      Dora are tiles that are worth one additional han if present in your hand
      when you win. Dora are not yaku -- that is, they will not win you the hand
      by themselves, but they can be used to boost the value of your hand.
    </p>
    <p>
      The dora tiles change every hand and are indicated by the dora indicator
      tile on the dead wall. Each hand starts with one dora indicator revealed,
      with an additional dora indicator being revealed every time somebody calls
      a kan. The tile that follows the indicator in the dora sequence is the
      dora for that hand. The dora sequence follows the same order that is shown
      in the Tiles section above, wrapping back to the start when at the end of
      the sequence. For example, an indicator of the 5 of bamboo would mean that
      the 6 of bamboo is a dora for that round, an indicator of the 9 of circles
      would mean that the 1 of circles is a dora for that round, and an
      indicator of the red dragon would mean that the white dragon is a dora for
      that round.
    </p>
    <p>
      When a player wins after calling riichi, they gain access to ura dora,
      which are the tiles underneath the dora indicators on the dead wall. They
      function as additional dora indicators for the winner and can potentially
      add value to the hand.
    </p>
    <p>
      Commonly (but not always, depending on the rule set), each number suit
      also contains one red five, which are counted as one dora each. They
      otherwise function identically to any other five tile.
    </p>
    <MahjongHand tiles="0m0p0s" />
  </BasicsDiv>
);
export default Basics;

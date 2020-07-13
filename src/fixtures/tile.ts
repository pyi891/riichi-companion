type TileData = {
  fileName: string;
  englishName?: string;
  japaneseName?: string;
};

export enum Tile {
  MAN_1 = '1m',
  MAN_2 = '2m',
  MAN_3 = '3m',
  MAN_4 = '4m',
  MAN_5 = '5m',
  MAN_5_RED = '5m-r',
  MAN_6 = '6m',
  MAN_7 = '7m',
  MAN_8 = '8m',
  MAN_9 = '9m',
  PIN_1 = '1p',
  PIN_2 = '2p',
  PIN_3 = '3p',
  PIN_4 = '4p',
  PIN_5 = '5p',
  PIN_5_RED = '5p-r',
  PIN_6 = '6p',
  PIN_7 = '7p',
  PIN_8 = '8p',
  PIN_9 = '9p',
  SOU_1 = '1s',
  SOU_2 = '2s',
  SOU_3 = '3s',
  SOU_4 = '4s',
  SOU_5 = '5s',
  SOU_5_RED = '5s-r',
  SOU_6 = '6s',
  SOU_7 = '7s',
  SOU_8 = '8s',
  SOU_9 = '9s',
  CHUN = 'chun', // red
  HAKU = 'haku', // white
  HATSU = 'hatsu', // green
  TON = 'ton', // east
  NAN = 'nan', // south
  SHAA = 'shaa', // west
  PEI = 'pei', // north
}

export const TILE: { [key in Tile]: TileData } = {
  [Tile.MAN_1]: { fileName: 'Man1.png' },
  [Tile.MAN_2]: { fileName: 'Man2.png' },
  [Tile.MAN_3]: { fileName: 'Man3.png' },
  [Tile.MAN_4]: { fileName: 'Man4.png' },
  [Tile.MAN_5]: { fileName: 'Man5.png' },
  [Tile.MAN_5_RED]: { fileName: 'Man5-Dora.png' },
  [Tile.MAN_6]: { fileName: 'Man6.png' },
  [Tile.MAN_7]: { fileName: 'Man7.png' },
  [Tile.MAN_8]: { fileName: 'Man8.png' },
  [Tile.MAN_9]: { fileName: 'Man9.png' },
  [Tile.PIN_1]: { fileName: 'Pin1.png' },
  [Tile.PIN_2]: { fileName: 'Pin2.png' },
  [Tile.PIN_3]: { fileName: 'Pin3.png' },
  [Tile.PIN_4]: { fileName: 'Pin4.png' },
  [Tile.PIN_5]: { fileName: 'Pin5.png' },
  [Tile.PIN_5_RED]: { fileName: 'Pin5-Dora.png' },
  [Tile.PIN_6]: { fileName: 'Pin6.png' },
  [Tile.PIN_7]: { fileName: 'Pin7.png' },
  [Tile.PIN_8]: { fileName: 'Pin8.png' },
  [Tile.PIN_9]: { fileName: 'Pin9.png' },
  [Tile.SOU_1]: { fileName: 'Sou1.png' },
  [Tile.SOU_2]: { fileName: 'Sou2.png' },
  [Tile.SOU_3]: { fileName: 'Sou3.png' },
  [Tile.SOU_4]: { fileName: 'Sou4.png' },
  [Tile.SOU_5]: { fileName: 'Sou5.png' },
  [Tile.SOU_5_RED]: { fileName: 'Sou5-Dora.png' },
  [Tile.SOU_6]: { fileName: 'Sou6.png' },
  [Tile.SOU_7]: { fileName: 'Sou7.png' },
  [Tile.SOU_8]: { fileName: 'Sou8.png' },
  [Tile.SOU_9]: { fileName: 'Sou9.png' },
  [Tile.CHUN]: {
    fileName: 'Chun.png',
    englishName: 'Red dragon',
    japaneseName: '「中」 - chun',
  },
  [Tile.HAKU]: {
    fileName: 'Haku.png',
    englishName: 'White dragon',
    japaneseName: '「白」 - haku',
  },
  [Tile.HATSU]: {
    fileName: 'Hatsu.png',
    englishName: 'Green dragon',
    japaneseName: '「發」 - hatsu',
  },
  [Tile.TON]: {
    fileName: 'Ton.png',
    englishName: 'East wind',
    japaneseName: '「東」 - ton',
  },
  [Tile.NAN]: {
    fileName: 'Nan.png',
    englishName: 'South wind',
    japaneseName: '「南」 - nan',
  },
  [Tile.SHAA]: {
    fileName: 'Shaa.png',
    englishName: 'West wind',
    japaneseName: '「西」 - shaa',
  },
  [Tile.PEI]: {
    fileName: 'Pei.png',
    englishName: 'North wind',
    japaneseName: '「北」 - pei',
  },
};

(this["webpackJsonpriichi-companion"]=this["webpackJsonpriichi-companion"]||[]).push([[0],{26:function(e,a,n){e.exports=n(39)},31:function(e,a,n){},39:function(e,a,n){"use strict";n.r(a);var t,i=n(0),o=n.n(i),l=n(21),r=n.n(l),s=(n(31),n(1)),u=n(7),c=n(2),h=n(14),m=n(18),p=n(22);!function(e){e.CLOSED="closed",e.OPEN="open",e.EASY="easy",e.COMMON="common",e.RIICHI="riichi",e.SEQUENCE="sequence",e.TRIPLET="triplet",e.QUAD="quad",e.TERMINALS="terminals",e.HONORS="honors",e.SUITS="suits",e.DRAW="draw",e.DISCARD="discard",e.SPECIAL="special",e.YAKUMAN="yakuman"}(t||(t={}));var d={RIICHI:{url:"http://arcturus.su/wiki/Riichi",englishName:"Ready hand, riichi, reach",japaneseName:"\u300c\u7acb\u76f4\u300d, \u300c\u30ea\u30fc\u30c1\u300d (riichi)",simpleName:"riichi",tags:new Set([t.CLOSED,t.RIICHI,t.EASY,t.COMMON]),descriptionComponent:"Riichi",closedValue:1},MENZEN_TSUMO:{url:"http://arcturus.su/wiki/Menzenchin_tsumohou",englishName:"Closed self draw, fully concealed hand",japaneseName:"\u300c\u9580\u524d\u6e05\u81ea\u6478\u548c\u300d, \u300c\u30c4\u30e2\u300d (menzenchin tsumohou, tsumo)",simpleName:"menzen tsumo",tags:new Set([t.CLOSED,t.DRAW,t.EASY,t.COMMON]),descriptionComponent:"MenzenTsumo",closedValue:1},IPPATSU:{url:"http://arcturus.su/wiki/Ippatsu",englishName:"One shot",japaneseName:"\u300c\u4e00\u767a\u300d (ippatsu)",simpleName:"ippatsu",tags:new Set([t.CLOSED,t.RIICHI,t.EASY,t.COMMON]),descriptionComponent:"Ippatsu",closedValue:1},PINFU:{url:"http://arcturus.su/wiki/Pinfu",englishName:"All sequences, pinfu",japaneseName:"\u300c\u5e73\u548c\u300d (pinfu)",simpleName:"pinfu",tags:new Set([t.CLOSED,t.SEQUENCE,t.COMMON]),descriptionComponent:"Pinfu",example:"234m11345p234789s",closedValue:1},IIPEIKOU:{url:"http://arcturus.su/wiki/Iipeikou",englishName:"Identical sequences, pure double sequence",japaneseName:"\u300c\u4e00\u76c3\u53e3\u300d (iipeikou)",simpleName:"iipeikou",tags:new Set([t.CLOSED,t.SEQUENCE,t.COMMON]),descriptionComponent:"Iipeikou",example:"223344m555p789s66z",closedValue:1},HAITEI:{url:"http://arcturus.su/wiki/Haitei_raoyue_and_houtei_raoyui",englishName:"Win by last draw, under the sea",japaneseName:"\u300c\u6d77\u5e95\u6488\u6708\u300d (haitei raoyue)",simpleName:"haitei",tags:new Set([t.DRAW]),descriptionComponent:"HaiteiRaoyue",openValue:1,closedValue:1},HOUTEI:{url:"http://arcturus.su/wiki/Haitei_raoyue_and_houtei_raoyui",englishName:"Win by last discard, under the river",japaneseName:"\u300c\u6cb3\u5e95\u6488\u9b5a\u300d (houtei raoyui)",simpleName:"houtei",tags:new Set([t.DISCARD]),descriptionComponent:"HouteiRaoyui",openValue:1,closedValue:1},RINSHAN:{url:"http://arcturus.su/wiki/Rinshan_kaihou",englishName:"Dead wall draw, after a kan",japaneseName:"\u300c\u5dba\u4e0a\u958b\u82b1\u300d (rinshan kaihou)",simpleName:"rinshan kaihou",tags:new Set([t.DRAW]),descriptionComponent:"RinshanKaihou",openValue:1,closedValue:1},CHANKAN:{url:"http://arcturus.su/wiki/Chankan",englishName:"Robbing a kan",japaneseName:"\u300c\u6436\u69d3\u300d (chankan)",simpleName:"chankan",tags:new Set([t.DISCARD,t.QUAD]),descriptionComponent:"Chankan",openValue:1,closedValue:1},TANYAO:{url:"http://arcturus.su/wiki/Tanyao",englishName:"All simples",japaneseName:"\u300c\u65ad\u4e48\u4e5d\u300d, \u300c\u65ad\u5e7a\u4e5d\u300d (tanyao)",simpleName:"tanyao",tags:new Set([t.CLOSED,t.OPEN,t.TERMINALS,t.HONORS,t.EASY,t.COMMON]),descriptionComponent:"Tanyao",example:"234m33355p566778s",openValue:1,closedValue:1},YAKUHAI:{url:"http://arcturus.su/wiki/Yakuhai",englishName:"Value honors, dragon/prevalent wind/seat wind",japaneseName:"\u300c\u5f79\u724c\u300d, \u300c\u98dc\u724c\u300d (yakuhai, fanpai)",simpleName:"yakuhai",tags:new Set([t.CLOSED,t.OPEN,t.HONORS,t.EASY,t.COMMON]),descriptionComponent:"Yakuhai",example:"111m345678p88s777z",openValue:1,closedValue:1},DOUBLE_RIICHI:{url:"http://arcturus.su/wiki/Daburu_riichi",englishName:"Double ready, double riichi",japaneseName:"\u300c\u30c0\u30d6\u30eb\u7acb\u76f4\u300d, \u300c\u30c0\u30d6\u30eb\u30ea\u30fc\u30c1\u300d (daburu riichi)",simpleName:"double riichi",tags:new Set([t.CLOSED,t.RIICHI]),descriptionComponent:"DoubleRiichi",closedValue:2},CHANTA:{url:"http://arcturus.su/wiki/Chanta",englishName:"Half outside hand, terminal or honor in each group",japaneseName:"\u300c\u6df7\u5168\u5e2f\u4e48\u4e5d\u300d, \u300c\u5168\u5e2f\u300d (honchantaiyaochuu, chanta)",simpleName:"chanta",tags:new Set([t.CLOSED,t.OPEN,t.TERMINALS,t.HONORS,t.COMMON]),descriptionComponent:"Chanta",example:"111789m123p33355z",openValue:1,closedValue:2},SANSHOKU_DOUJUN:{url:"http://arcturus.su/wiki/Sanshoku_doujun",englishName:"Three colored straight, mixed triple sequence",japaneseName:"\u300c\u4e09\u8272\u540c\u9806\u300d, \u300c\u4e09\u8272\u300d (sanshoku doujun, sanshoku)",simpleName:"sanshoku doujun",tags:new Set([t.CLOSED,t.OPEN,t.SEQUENCE,t.COMMON]),descriptionComponent:"SanshokuDoujun",example:"123m123p123567s11z",openValue:1,closedValue:2},ITTSUU:{url:"http://arcturus.su/wiki/Ikkitsuukan",englishName:"Full straight, pure straight",japaneseName:"\u300c\u4e00\u6c17\u901a\u8cab\u300d, \u300c\u4e00\u901a\u300d (ikkitsuukan, ittsuu)",simpleName:"ittsuu",tags:new Set([t.CLOSED,t.OPEN,t.SEQUENCE,t.COMMON]),descriptionComponent:"Ittsuu",example:"456p123456789s77z",openValue:1,closedValue:2},TOITOI:{url:"http://arcturus.su/wiki/Toitoihou",englishName:"All triplets",japaneseName:"\u300c\u5bfe\u3005\u548c\u300d, \u300c\u5bfe\u3005\u300d (toitoihou, toitoi)",simpleName:"toitoi",tags:new Set([t.CLOSED,t.OPEN,t.TRIPLET,t.EASY,t.COMMON]),descriptionComponent:"Toitoi",example:"222m777p555888s22z",openValue:2,closedValue:2},SANANKOU:{url:"http://arcturus.su/wiki/Sanankou",englishName:"Three concealed triplets",japaneseName:"\u300c\u4e09\u6697\u523b\u300d (sanankou)",simpleName:"sanankou",tags:new Set([t.CLOSED,t.OPEN,t.TRIPLET]),descriptionComponent:"Sanankou",example:"333555m222p22789s",openValue:2,closedValue:2},SANSHOKU_DOUKOU:{url:"http://arcturus.su/wiki/Sanshoku_doukou",englishName:"Three colored triplets, triple triplets",japaneseName:"\u300c\u4e09\u8272\u540c\u523b\u300d (sanshoku doukou)",simpleName:"sanshoku doukou",tags:new Set([t.CLOSED,t.OPEN,t.TRIPLET]),descriptionComponent:"SanshokuDoukou",example:"777m777p234777s66z",openValue:2,closedValue:2},SANKANTSU:{url:"http://arcturus.su/wiki/Sankantsu",englishName:"Three kans, three quads",japaneseName:"\u300c\u4e09\u69d3\u5b50\u300d (sankantsu)",simpleName:"sankantsu",tags:new Set([t.CLOSED,t.OPEN,t.QUAD]),descriptionComponent:"Sankantsu",example:"4444m7777p2222789s44z",openValue:2,closedValue:2},CHIITOITSU:{url:"http://arcturus.su/wiki/Chiitoitsu",englishName:"Seven pairs",japaneseName:"\u300c\u4e03\u5bfe\u5b50\u300d (chiitoitsu)",simpleName:"chiitoitsu",tags:new Set([t.CLOSED,t.SPECIAL,t.COMMON]),descriptionComponent:"Chiitoitsu",example:"1122m667799p33s55z",closedValue:2},HONROUTOU:{url:"http://arcturus.su/wiki/Honroutou",englishName:"All terminals and honors",japaneseName:"\u300c\u6df7\u8001\u982d\u300d (honroutou)",simpleName:"honroutou",tags:new Set([t.CLOSED,t.OPEN,t.TERMINALS,t.HONORS]),descriptionComponent:"Honroutou",example:"111999m99p222777z",openValue:2,closedValue:2},SHOUSANGEN:{url:"http://arcturus.su/wiki/Shousangen",englishName:"Little three dragons",japaneseName:"\u300c\u5c0f\u4e09\u5143\u300d (shousangen)",simpleName:"shousangen",tags:new Set([t.CLOSED,t.OPEN,t.HONORS]),descriptionComponent:"Shousangen",example:"678m456p55666777z",openValue:2,closedValue:2},HONITSU:{url:"http://arcturus.su/wiki/Honiisou",englishName:"Half flush",japaneseName:"\u300c\u6df7\u4e00\u8272\u300d, \u300c\u6df7\u4e00\u300d (honiisou, honitsu)",simpleName:"honitsu",tags:new Set([t.CLOSED,t.OPEN,t.SUITS,t.COMMON]),descriptionComponent:"Honitsu",example:"23477799p111444z",openValue:2,closedValue:3},JUNCHAN:{url:"http://arcturus.su/wiki/Junchantaiyaochuu",englishName:"Fully outside hand, terminal in each meld",japaneseName:"\u300c\u7d14\u5168\u5e2f\u4e48\u4e5d\u300d, \u300c\u7d14\u5168\u300d (junchantaiyaochuu, junchan)",simpleName:"junchan",tags:new Set([t.CLOSED,t.OPEN,t.TERMINALS]),descriptionComponent:"Junchan",example:"111789m111p78999s",openValue:2,closedValue:3},RYANPEIKOU:{url:"http://arcturus.su/wiki/Ryanpeikou",englishName:"Twice pure double sequence",japaneseName:"\u300c\u4e8c\u76c3\u53e3\u300d (ryanpeikou)",simpleName:"ryanpeikou",tags:new Set([t.CLOSED,t.SEQUENCE]),descriptionComponent:"Ryanpeikou",example:"223344m778899p22z",closedValue:3},CHINITSU:{url:"http://arcturus.su/wiki/Chiniisou",englishName:"Full flush",japaneseName:"\u300c\u6e05\u4e00\u8272\u300d, \u300c\u6e05\u4e00\u300d (chiniisou, chinitsu)",simpleName:"chinitsu",tags:new Set([t.CLOSED,t.OPEN,t.SUITS]),descriptionComponent:"Chinitsu",example:"12344455666789m",openValue:5,closedValue:6},KAZOE:{url:"http://arcturus.su/wiki/Kazoe_yakuman",englishName:"Counted yakuman",japaneseName:"\u300c\u6570\u3048\u5f79\u6e80\u300d (kazoe yakuman)",simpleName:"kazoe yakuman",tags:new Set([t.YAKUMAN,t.CLOSED,t.OPEN]),descriptionComponent:"KazoeYakuman",specialValue:"Yakuman"},KOKUSHI:{url:"http://arcturus.su/wiki/Kokushi_musou",englishName:"Thirteen orphans",japaneseName:"\u300c\u56fd\u58eb\u7121\u53cc\u300d (kokushi musou)",simpleName:"kokushi musou",tags:new Set([t.YAKUMAN,t.CLOSED,t.TERMINALS,t.HONORS,t.SPECIAL]),descriptionComponent:"KokushiMusou",example:"19m19p19s12345677z",specialValue:"Yakuman"},SUUANKOU:{url:"http://arcturus.su/wiki/Suuankou",englishName:"Four concealed triplets",japaneseName:"\u300c\u56db\u6697\u523b\u300d (suuankou)",simpleName:"suuankou",tags:new Set([t.YAKUMAN,t.CLOSED,t.TRIPLET]),descriptionComponent:"Suuankou",example:"222555m333p999s11z",specialValue:"Yakuman"},DAISANGEN:{url:"",englishName:"Big three dragons",japaneseName:"\u300c\u5927\u4e09\u5143\u300d (daisangen)",simpleName:"daisangen",tags:new Set([t.YAKUMAN,t.CLOSED,t.OPEN,t.HONORS,t.TRIPLET]),descriptionComponent:"Daisangen",example:"234m55s555666777z",specialValue:"Yakuman"},SHOUSUUSHII:{url:"http://arcturus.su/wiki/Suushiihou",englishName:"Four little winds",japaneseName:"\u300c\u5c0f\u56db\u559c\u300d (shousuushii)",simpleName:"shousuushii",tags:new Set([t.YAKUMAN,t.CLOSED,t.OPEN,t.HONORS,t.TRIPLET]),descriptionComponent:"Shousuushii",example:"678m11122233444z",specialValue:"Yakuman"},DAISUUSHII:{url:"http://arcturus.su/wiki/Suushiihou",englishName:"Four big winds",japaneseName:"\u300c\u5927\u56db\u559c\u300d (daisuushii)",simpleName:"daisuushii",tags:new Set([t.YAKUMAN,t.CLOSED,t.OPEN,t.HONORS,t.TRIPLET]),descriptionComponent:"Daisuushii",example:"77p111222333444z",specialValue:"Yakuman"},TSUUIISOU:{url:"http://arcturus.su/wiki/Tsuuiisou",englishName:"All honors",japaneseName:"\u300c\u5b57\u4e00\u8272\u300d (tsuuiisou)",simpleName:"tsuuiisou",tags:new Set([t.YAKUMAN,t.CLOSED,t.OPEN,t.HONORS]),descriptionComponent:"Tsuuiisou",example:"11122233666777z",specialValue:"Yakuman"},CHINROUTOU:{url:"http://arcturus.su/wiki/Chinroutou",englishName:"All terminals",japaneseName:"\u300c\u6e05\u8001\u982d\u300d (chinroutou)",simpleName:"chinroutou",tags:new Set([t.YAKUMAN,t.CLOSED,t.OPEN,t.TERMINALS]),descriptionComponent:"Chinroutou",example:"111999m999p11199s",specialValue:"Yakuman"},RYUUIISOU:{url:"http://arcturus.su/wiki/Ryuuiisou",englishName:"All green",japaneseName:"\u300c\u7dd1\u4e00\u8272\u300d (ryuuiisou)",simpleName:"ryuuiisou",tags:new Set([t.YAKUMAN,t.CLOSED,t.OPEN,t.SUITS]),descriptionComponent:"Ryuuiisou",example:"22244666888s666z",specialValue:"Yakuman"},CHUUREN_POUTOU:{url:"http://arcturus.su/wiki/Chuuren_poutou",englishName:"Nine gates",japaneseName:"\u300c\u4e5d\u9023\u5b9d\u71c8\u300d (chuuren poutou)",simpleName:"chuuren poutou",tags:new Set([t.YAKUMAN,t.CLOSED,t.SUITS]),descriptionComponent:"ChuurenPoutou",example:"11122345678999p",specialValue:"Yakuman"},SUUKANTSU:{url:"http://arcturus.su/wiki/Suukantsu",englishName:"Four kans, four quads",japaneseName:"\u300c\u56db\u69d3\u5b50\u300d (suukantsu)",simpleName:"suukantsu",tags:new Set([t.YAKUMAN,t.CLOSED,t.OPEN,t.QUAD]),descriptionComponent:"Suukantsu",example:"22224444m6666p111188s",specialValue:"Yakuman"},TENHOU:{url:"http://arcturus.su/wiki/Tenhou_and_chiihou",englishName:"Heavenly hand, blessing of heaven",japaneseName:"\u300c\u5929\u548c\u300d (tenhou)",simpleName:"tenhou",tags:new Set([t.YAKUMAN]),descriptionComponent:"Tenhou",specialValue:"Yakuman"},CHIIHOU:{url:"http://arcturus.su/wiki/Tenhou_and_chiihou",englishName:"Earthly hand, blessing of earth",japaneseName:"\u300c\u5730\u548c\u300d (chiihou)",simpleName:"chiihou",tags:new Set([t.YAKUMAN]),descriptionComponent:"Chiihou",specialValue:"Yakuman"},NAGASHI_MANGAN:{url:"http://arcturus.su/wiki/Nagashi_mangan",englishName:"Mangan at draw",japaneseName:"\u300c\u6d41\u3057\u6e80\u8cab\u300d (nagashi mangan)",simpleName:"nagashi mangan",tags:new Set([t.SPECIAL]),descriptionComponent:"NagashiMangan",specialValue:"Mangan"}},f={m1:{fileName:"Man1"},m2:{fileName:"Man2"},m3:{fileName:"Man3"},m4:{fileName:"Man4"},m5:{fileName:"Man5"},m0:{fileName:"Man5-Dora"},m6:{fileName:"Man6"},m7:{fileName:"Man7"},m8:{fileName:"Man8"},m9:{fileName:"Man9"},p1:{fileName:"Pin1"},p2:{fileName:"Pin2"},p3:{fileName:"Pin3"},p4:{fileName:"Pin4"},p5:{fileName:"Pin5"},p0:{fileName:"Pin5-Dora"},p6:{fileName:"Pin6"},p7:{fileName:"Pin7"},p8:{fileName:"Pin8"},p9:{fileName:"Pin9"},s1:{fileName:"Sou1"},s2:{fileName:"Sou2"},s3:{fileName:"Sou3"},s4:{fileName:"Sou4"},s5:{fileName:"Sou5"},s0:{fileName:"Sou5-Dora"},s6:{fileName:"Sou6"},s7:{fileName:"Sou7"},s8:{fileName:"Sou8"},s9:{fileName:"Sou9"},z1:{fileName:"Ton"},z2:{fileName:"Nan"},z3:{fileName:"Shaa"},z4:{fileName:"Pei"},z5:{fileName:"Haku"},z6:{fileName:"Hatsu"},z7:{fileName:"Chun"}},g=s.b.div.withConfig({displayName:"MahjongTile__TileDiv",componentId:"sc-137i9ti-0"})(["display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;border:1px solid ",";border-radius:4px;padding:4px;max-height:60px;max-width:48px;"],(function(e){return e.theme.foreground})),w=function(e){var a=e.tileCode,n=e.theme,t=void 0===n?"light":n,i=f[a].fileName;return o.a.createElement(g,null,o.a.createElement("img",{src:"".concat("/riichi-companion","/tiles/").concat(t,"/").concat(i,".svg"),alt:a,height:"100%",width:"100%"}))},N=/([0-9]*)m/,y=/([0-9]*)p/,E=/([0-9]*)s/,k=/([1-7]*)z/,S=s.b.div.withConfig({displayName:"MahjongHand__RowDiv",componentId:"p921kv-0"})(["display:flex;margin-bottom:1em;"]),C=function(e,a){return e.split("").map((function(e,n){return o.a.createElement(w,{key:"".concat(a,"-").concat(e,"-").concat(n),tileCode:"".concat(a).concat(e)})}))},b=function(e){var a=e.tiles,n=a.match(N),t=a.match(y),i=a.match(E),l=a.match(k);return o.a.createElement(S,null,n&&C(n[1],"m"),t&&C(t[1],"p"),i&&C(i[1],"s"),l&&C(l[1],"z"))},O={Chankan:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Chankan is scored when a player calls their winning tile from another player who declares kan to upgrade their pon (open triplet) to a quad. In other words, if a player is in tenpai and waiting on a tile that another player uses to call a kan to upgrade their pon, the first player may then declare ron on that tile and win."),o.a.createElement("p",null,"Chankan generally may not be called on closed kans. The only exception to this rule is if the tile would complete a "," kokushi musou."))},Chanta:function(){return o.a.createElement("p",null,"Chanta is scored when all groups in a player's hand contains at least one terminal or honor tile.")},Chiihou:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Chiihou is scored when a player is dealt a hand that is in tenpai and their winning tile is drawn on their first draw."),o.a.createElement("p",null,"Chiihou is distinct from tenhou in that non-dealers are also eligible to score this yakuman. However, chiihou can be denied if a tile call is made prior to the otherwise eligible player's draw."))},Chiitoitsu:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Chiitoitsu is scored when a player's hand contains seven pairs."),o.a.createElement("p",null,"Chiitoitsu is one of two exceptions to the rule that a completed hand must contain four groups of three tiles and a pair (the other being"," kokushi musou)."))},Chinitsu:function(){return o.a.createElement("p",null,"Chinitsu is scored when all groups in a player's hand are composed of a single suit of number tiles.")},Chinroutou:function(){return o.a.createElement("p",null,"Chinroutou is scored when a player's hand is composed entirely of terminal (1 or 9) tiles.")},ChuurenPoutou:function(){return o.a.createElement("p",null,"Chuuren poutou is scored when a player's hand consists of the pattern 1112345678999 of a single suit, plus any additional tile from the suit. It can be thought of as a full straight that is bookended by triplets of the terminal tiles.")},Daisangen:function(){return o.a.createElement("p",null,"Daisangen is scored when a player's hand contains a triplet of all three dragon tiles.")},Daisuushii:function(){return o.a.createElement("p",null,"Daisuushii is scored when a player's hand contains triplets of all four wind tiles.")},DoubleRiichi:function(){return o.a.createElement("p",null,"Double riichi is scored if a player is able to call ","riichi on their first turn of the game (i.e. achieve tenpai on their first discard) and win. All other conditions pertaining to riichi apply to double riichi, but double riichi is worth 2 han instead of 1.")},HaiteiRaoyue:function(){return o.a.createElement("p",null,"Haitei raoyue is scored when a player draws their winning tile from the final tile remaining in the wall.")},Honitsu:function(){return o.a.createElement("p",null,"Honitsu is scored when all groups in a player's hand are composed of honor tiles and a single suit of number tiles.")},Honroutou:function(){return o.a.createElement("p",null,"Honroutou is scored when a player's hand consists entirely of terminal (1 or 9) or honor (wind and dragon) tiles.")},HouteiRaoyui:function(){return o.a.createElement("p",null,"Houtei raoyui is scored when a player calls their winning tile off of another player's discard after drawing the final tile remaining in the wall.")},Iipeikou:function(){return o.a.createElement("p",null,"Iipeikou is scored when two identical sequences (same values and suit of number tiles) are present in a player's hand.")},Ippatsu:function(){return o.a.createElement("p",null,"Ippatsu is scored when a player who has declared riichi ",'wins within one uninterrupted turn of declaring riichi, with "uninterrupted" meaning that no calls (chii/pon/kan) were made by other players in between the player declaring riichi and drawing or calling their winning tile.')},Ittsuu:function(){return o.a.createElement("p",null,"Ittsuu is scored when a player's hand contains three distinct tile groups containing 123, 456, and 789 of a single suit.")},Junchan:function(){return o.a.createElement("p",null,"Junchan is scored when all groups in a player's hands contain a terminal (1 or 9) tile.")},KazoeYakuman:function(){return o.a.createElement("p",null,"Kazoe yakuman is scored when a non-yakuman hand is valued at 13 han or greater through a combination of other normal yaku and dora/ura dora tiles.")},KokushiMusou:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Kokushi musou is scored when a hand is composed of the 1 and 9 of each number tile, one of each wind and dragon tile, and one duplicate of any of these tiles."),o.a.createElement("p",null,"Kokushi musou is one of two exceptions to the rule that a completed hand must contain four groups of three tiles and a pair (the other being"," chiitoitsu)."))},MenzenTsumo:function(){return o.a.createElement("p",null,"Menzen tsumo is scored when a player draws their winning tile from the wall while their hand is closed (i.e. no tiles called from other players).")},NagashiMangan:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Nagashi mangan is a special yaku that is awarded to a player in the event of an exhaustive draw (no tiles remain in the wall to be drawn) that meets the following criteria:"),o.a.createElement("ul",null,o.a.createElement("li",null,"The player's discards consist exclusively of terminal (1 or 9) and honor (wind and dragon) tiles."),o.a.createElement("li",null,"The player may not have called any tiles."),o.a.createElement("li",null,"No tiles have been called from the player's discards.")),o.a.createElement("p",null,"Players who have successfully met these conditions are awarded the amount of points equivalent to a mangan tsumo during the exhaustive draw point exchange."))},Pinfu:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Pinfu is scored when the player's hand meets the following criteria:"),o.a.createElement("ul",null,o.a.createElement("li",null,"The player's hand contains four sequences."),o.a.createElement("li",null,"The player's pair must not be their seat wind, the round wind, or a dragon."),o.a.createElement("li",null,"The player's last wait must have been to complete an open ended sequence.")),o.a.createElement("p",null,"Specifically, pinfu must be a hand that does not score any additional fu",". Triplets/quads, waits that are not for an open ended sequence, and pairs involving yakuhai"," tiles are all combinations that score fu."))},Riichi:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Riichi is scored when a player declares riichi and wins the hand. See the"," ",o.a.createElement(u.b,{to:"/basics"},"Basics")," section for more information."),o.a.createElement("p",null,"Winning by riichi enables the potential to score the ippatsu yaku"," by winning within 1 uninterrupted turn of calling riichi. It also enables the potential addition of ura dora (hidden dora) to further increase the hand's score."))},RinshanKaihou:function(){return o.a.createElement("p",null,"Rinshan kaihou is scored when a player draws their winning tile from the dead wall after calling a kan (quad).")},Ryanpeikou:function(){return o.a.createElement("p",null,"Ryanpeikou is scored when a player's hand contains two occurences of two identical sequences (same values and suit of number tiles). It can be thought of as two occurences of "," iipeikou.")},Ryuuiisou:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Ryuuiisou is scored when a player's hand is composed entirely of the 2, 4, 6, and 8 of bamboo and the green dragon."),o.a.createElement("p",null,"These tiles are exclusively painted in green!"))},Sanankou:function(){return o.a.createElement("p",null,"Sanankou is scored when a player's hand contains three concealed triplets. Note that this does not necessarily mean that the player's hand needs to be closed, as long as the three triplets are not called from other players.")},Sankantsu:function(){return o.a.createElement("p",null,"Sankantsu is scored when a player's hand contains three kans (quads).")},SanshokuDoujun:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Sanshoku doujun is scored when a player's hand contains the same sequence across all three suits of numbered tiles."),o.a.createElement("p",null,'Note that while there are two yaku that start with the word "sanshoku", sanshoku doujun is most commonly referred to as "sanshoku" due to its relative ease of completion over '," sanshoku doukou."))},SanshokuDoukou:function(){return o.a.createElement("p",null,"Sanshoku doukou is scored when a player's hand contains the same triplet across all three suits of numbered tiles.")},Shousangen:function(){return o.a.createElement("p",null,"Shousangen is scored when a player's hand contains two triplets and a pair of the three dragon tiles.")},Shousuushii:function(){return o.a.createElement("p",null,"Shousuushii is scored when a player's hand contains triplets of three wind tiles and a pair of the fourth.")},Suuankou:function(){return o.a.createElement("p",null,"Suuankou is scored when a player's hand contains four concealed triplets.")},Suukantsu:function(){return o.a.createElement("p",null,"Suukantsu is scored when a player's hand contains four kans (quads).")},Tanyao:function(){return o.a.createElement("p",null,"Tanyao is scored when a player's hand consists only of numbered tiles between 2-8 (simple tiles). In other words, their hand must not contain any terminal (1 or 9) or honor (wind and dragon) tiles.")},Tenhou:function(){return o.a.createElement("p",null,"Tenhou is scored when the dealer is dealt a completed hand. It is the fastest way to win and can only be denied if the dealer calls a closed kan (quad), which would naturally be an extremely dubious decision.")},Toitoi:function(){return o.a.createElement("p",null,"Toitoi is scored when a player's hand contains any four triplets.")},Tsuuiisou:function(){return o.a.createElement("p",null,"Tsuuiisou is scored when a player's hand is composed entirely of honor (wind and dragon) tiles.")},Yakuhai:function(){return o.a.createElement("p",null,"Yakuhai is scored when a player's hand contains a triplet of a value honor tile. A value honor tile is defined as a player's seat wind, the round wind, or any dragon. Each yakuhai triplet in a hand is scored in a winning hand -- for example, triplets of both the green and red dragons are worth 1 han each.")}},I=s.b.a.withConfig({displayName:"YakuEntry__A",componentId:"c5mpmj-0"})(["text-transform:capitalize;"]),A=function(e){var a,n=e.yakuKey,t=d[n],i=t.url,l=t.simpleName,r=t.englishName,s=t.japaneseName,u=t.tags,c=t.descriptionComponent,m=t.example,p=t.openValue,f=t.closedValue,g=t.specialValue;return p&&f&&p===f?a="".concat(p," han"):p&&f&&p!==f?a="".concat(f," han (closed), ").concat(p," han (open)"):f&&!p?a="".concat(f," han (closed only)"):p||f||!g||(a="".concat(g)),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("strong",null,o.a.createElement(I,{href:i,target:"_blank",rel:"noopener noreferrer"},l))),o.a.createElement("p",null,"English: ",r),o.a.createElement("p",null,"Japanese: ",s),o.a.createElement("p",null,"Value: ",a),o.a.createElement("p",null,"Tags: ",Object(h.a)(u).join(", ")),o.a.createElement(O[c]),m&&o.a.createElement("div",null,o.a.createElement("p",null,"Example:")," ",o.a.createElement(b,{tiles:m})))},v=s.b.div.withConfig({displayName:"FilterableYakuList__FilterDiv",componentId:"sc-19ck7a9-0"})(["position:sticky;border-bottom:1px solid ",";width:100%;padding:",";top:0;background:",";"],(function(e){return e.theme.lowContrast}),(function(e){return e.isFilterCollapsed?"0 1em":"0 1em 1em"}),(function(e){return e.theme.background})),T=s.b.button.withConfig({displayName:"FilterableYakuList__Button",componentId:"sc-19ck7a9-1"})(["box-sizing:border-box;border:1px solid ",";border-radius:0.25em;padding:0.5em;background:",";color:",";&:active{background:",";color:",";}"],(function(e){return e.theme.lowContrast}),(function(e){return"outline"===e.backgroundType?e.theme.background:e.theme.lowContrast}),(function(e){return e.theme.foreground}),(function(e){return e.theme.highContrast}),(function(e){return e.theme.background})),D=Object(s.b)(T).withConfig({displayName:"FilterableYakuList__TagButton",componentId:"sc-19ck7a9-2"})(["margin:0 0.25em 0.25em 0;border:1px solid ",";background:",";color:",";"],(function(e){return e.selected?e.theme.highlight:e.theme.lowContrast}),(function(e){return e.selected?e.theme.highlight:e.theme.lowContrast}),(function(e){return e.selected?e.theme.background:e.theme.foreground})),x=s.b.button.withConfig({displayName:"FilterableYakuList__CaretButton",componentId:"sc-19ck7a9-3"})(["width:100%;text-align:left;font-size:1em;background:none;border:0;padding:0;margin:1em 0;&:focus{outline:none;}"]),j=s.b.div.withConfig({displayName:"FilterableYakuList__YakuListDiv",componentId:"sc-19ck7a9-4"})(["width:100%;"]),U=s.b.div.withConfig({displayName:"FilterableYakuList__YakuEntryDiv",componentId:"sc-19ck7a9-5"})(["&:last-child hr{display:none;}&:not(:last-child){border-bottom:1px solid ",";}"],(function(e){return e.theme.lowContrast})),M=Object.keys(d),R=function(){var e=Object(i.useState)(new Set),a=Object(m.a)(e,2),n=a[0],l=a[1],r=Object(i.useState)(!1),s=Object(m.a)(r,2),u=s[0],c=s[1],f=M.filter((function(e){return function(e,a){var n,t=Object(p.a)(a);try{for(t.s();!(n=t.n()).done;){var i=n.value;if(!e.has(i))return!1}}catch(o){t.e(o)}finally{t.f()}return!0}(d[e].tags,n)}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{isFilterCollapsed:u},o.a.createElement("div",null,o.a.createElement(x,{onClick:function(){return c(!u)}},"Filters ",u?"\u25b8":"\u25be"),!u&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,Object.values(t).map((function(e,a){return o.a.createElement(D,{key:"".concat(e,"-").concat(a),onClick:function(){return function(e){var a=new Set(Object(h.a)(n));n.has(e)?a.delete(e):a.add(e),l(a)}(e)},selected:n.has(e)},e)}))),o.a.createElement(T,{backgroundType:"outline",onClick:function(){return l(new Set)}},"Clear")))),o.a.createElement(j,null,f.map((function(e,a){return o.a.createElement(U,{key:"".concat(e,"-").concat(a)},o.a.createElement(A,{yakuKey:e,key:"".concat(a,"-").concat(e)}))}))))},H=(n(38),s.b.div.withConfig({displayName:"Basics__BasicsDiv",componentId:"sc-1toydwc-0"})(["padding:1em 0;"])),L=function(){return o.a.createElement(H,null,o.a.createElement("h3",null,"Introduction"),o.a.createElement("p",null,"Riichi mahjong is a Japanese variant of mahjong . It features unique strategic elements to distinguish itself from other mahjong variants. The aim of this page is to provide a quick reference for newer players of the game. A full list of rules can be found on the"," ",o.a.createElement("a",{href:"http://arcturus.su/wiki/Japanese_mahjong",target:"_blank",rel:"noopener noreferrer"},"arcturus.su wiki page for Japanese mahjong"),"."),o.a.createElement("h3",null,"Tiles"),o.a.createElement("h4",null,"Numbered suits"),o.a.createElement("p",null,"Listed in order from 1 to 9:"),o.a.createElement("p",null,"Manzu (characters)"),o.a.createElement(b,{tiles:"123456789m"}),o.a.createElement("p",null,"Pinzu (circles)"),o.a.createElement(b,{tiles:"123456789p"}),o.a.createElement("p",null,"Souzu (bamboo)"),o.a.createElement(b,{tiles:"123456789s"}),o.a.createElement("h4",null,"Winds"),o.a.createElement("p",null,"Ton, nan, shaa, pei (east, south, west, north)"),o.a.createElement(b,{tiles:"1234z"}),o.a.createElement("h4",null,"Dragons"),o.a.createElement("p",null,"Haku, hatsu, chun (white, green, red)"),o.a.createElement(b,{tiles:"567z"}),o.a.createElement("h3",null,"Winning a hand"),o.a.createElement("p",null,"Winning a hand in riichi mahjong requires at least one valid yaku (scoring combination). See the ",o.a.createElement(u.b,{to:"/yaku"},"Yaku")," page for a full list of yaku."),o.a.createElement("p",null,"You must be in tenpai (one tile away from completing your hand) to make the following calls to win the hand:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Tsumo - drawing your winning tile from the wall."),o.a.createElement("li",null,"Ron - claiming your winning tile from an opponent's discard. Cannot be called if you are in furiten (more on this later).")),o.a.createElement("h4",null,'Why can\'t I win with a completed hand/why is Mahjong Soul telling me "No Yaku"?'),o.a.createElement("p",null,o.a.createElement("strong",null,"You must have at least one valid ",o.a.createElement(u.b,{to:"/yaku"},"yaku")," to win a hand.")," ","You can think of yaku as a condition you have to meet in order to score and win. This is usually related to the structure of your hand, but can also be tied to other situations, the two most notable being when you self-draw your winning tile while your hand is closed (menzen tsumo) or when claiming your winning tile after declaring riichi (see below)."),o.a.createElement("h4",null,"Declaring riichi"),o.a.createElement("p",null,"Riichi may be declared when a player advances their hand to tenpai without calling any tiles from other players. Riichi may apply to any closed hand configuration that is in tenpai, making it by far the most commonly scored yaku."),o.a.createElement("p",null,"When declaring riichi, the player must place a 1000 point wager that they will win the hand on the table. A player with less than 1000 points cannot declare riichi. Once they have declared riichi, the player may not alter their hand any further (i.e. call an opponent's tile or keep any drawn tiles that do not complete their hand) and must either wait for their winning tile to be discarded by another player (to win by ron) or draw it themselves from the wall (to win by tsumo, which additionally scores menzen tsumo due to the closed hand requirement of riichi)."),o.a.createElement("h4",null,"Why am I in furiten?"),o.a.createElement("p",null,"Furiten is a state in which you cannot declare ron to win off your opponent's discard due to at least one of the following conditions:"),o.a.createElement("ul",null,o.a.createElement("li",null,"One of your waits is in your discard pile or was called by an opponent. Change the offending wait(s) to fix this. Note that having even just one wait in your discard places your entire hand in furiten."),o.a.createElement("li",null,"You turned down a chance to win off an opponent's discard (ron). You will be in temporary furiten either until your next turn or until someone calls a tile."),o.a.createElement("li",null,"You called riichi and turned down a chance to win off an opponent's discard (ron). You are in furiten for the rest of the hand.")),o.a.createElement("p",null,"Note that it is still possible to win by tsumo while in furiten."),o.a.createElement("h3",null,"Calls"),o.a.createElement("p",null,"Calling tiles will open your hand, with the exception of a closed kan."),o.a.createElement("ul",null,o.a.createElement("li",null,"Chii - calling a tile to complete a sequence in your hand. Can only be called from the player to your left."),o.a.createElement("li",null,"Pon - calling a tile to complete a triplet in your hand. Can be called from any player."),o.a.createElement("li",null,"Kan - upgrading a triplet in your hand to a quad. Reveals one extra dora indicator and draws an additional tile from the dead wall. If you upgrade a closed triplet with a self-drawn fourth tile, your hand will remain closed."))," ",o.a.createElement("p",null,"When calls are made simultaneously, they take the following precedence order: ron > pon/kan > chii."),o.a.createElement("p",null,o.a.createElement("strong",null,"Keep in mind that opening your hand will invalidate certain yaku!")," ","In general, try to avoid calling tiles unless you have a specific plan in mind. Be extra careful of calling winds that are not the seat or round wind, as well as calling to make groups that include a terminal tile, as these calls will invalidate some of the most common yaku such as riichi, tanyao, and pinfu."),o.a.createElement("h3",null,"Dora"),o.a.createElement("p",null,"Dora are tiles that are worth one additional han if present in your hand when you win. Dora are not yaku -- that is, they will not win you the hand by themselves, but they can be used to boost the value of your hand."),o.a.createElement("p",null,"The dora tiles change every hand and are indicated by the dora indicator tile on the dead wall. Each hand starts with one dora indicator revealed, with an additional dora indicator being revealed every time somebody calls a kan. The tile that follows the indicator in the dora sequence is the dora for that hand. The dora sequence follows the same order that is shown in the Tiles section above, wrapping back to the start when at the end of the sequence. For example, an indicator of the 5 of bamboo would mean that the 6 of bamboo is a dora for that round, an indicator of the 9 of circles would mean that the 1 of circles is a dora for that round, and an indicator of the red dragon would mean that the white dragon is a dora for that round."),o.a.createElement("p",null,"When a player wins after calling riichi, they gain access to ura dora, which are the tiles underneath the dora indicators on the dead wall. They function as additional dora indicators for the winner and can potentially add value to the hand."),o.a.createElement("p",null,"Commonly (but not always, depending on the rule set), each number suit also contains one red five, which are counted as one dora each. They otherwise function identically to any other five tile."),o.a.createElement(b,{tiles:"0m0p0s"}))},V=s.b.div.withConfig({displayName:"Scoring__ScoringDiv",componentId:"sc-1k3jg9f-0"})(["padding:1em 0;"]),Y=function(){return o.a.createElement(V,null,o.a.createElement("h1",null,"WIP"))},P=s.b.main.withConfig({displayName:"App__Main",componentId:"sc-1qv9r5a-0"})(["display:flex;flex-direction:column;align-items:center;flex:1;padding:0 1em;background:",";"],(function(e){return e.theme.background})),_=s.b.header.withConfig({displayName:"App__Header",componentId:"sc-1qv9r5a-1"})(["display:flex;justify-content:center;background:",";"],(function(e){return e.theme.background})),z=s.b.nav.withConfig({displayName:"App__Nav",componentId:"sc-1qv9r5a-2"})(["background:",";border-bottom:1px solid ",";width:100%;ul{padding:0;width:100%;margin:0;list-style:none;display:flex;justify-content:space-around;}"],(function(e){return e.theme.background}),(function(e){return e.theme.lowContrast})),K=Object(s.b)(u.c).withConfig({displayName:"App__NavigationLink",componentId:"sc-1qv9r5a-3"})(["flex:1;display:flex;justify-content:center;padding:1em;text-decoration:none;&:not(:last-child){border-right:1px solid ",";}&:visited{color:",";}"],(function(e){return e.theme.lowContrast}),(function(e){return e.theme.foreground})),F=s.b.footer.withConfig({displayName:"App__Footer",componentId:"sc-1qv9r5a-4"})(["padding:1em 0;display:flex;justify-content:center;border-top:1px solid ",";"],(function(e){return e.theme.lowContrast})),q={background:"#FFFFFF",foreground:"#000000",highlight:"#51A5E1",lowContrast:"#D5D5D5",highContrast:"#5C5C5C"},W={backgroundColor:q.lowContrast},B=function(){var e=q;return o.a.createElement(u.a,null,o.a.createElement(s.a,{theme:e},o.a.createElement(_,null,o.a.createElement(z,null,o.a.createElement("ul",null,o.a.createElement(K,{exact:!0,to:"/basics",activeStyle:W},o.a.createElement("li",null,"Basics")),o.a.createElement(K,{to:"/yaku",activeStyle:W},o.a.createElement("li",null,"Yaku")),o.a.createElement(K,{to:"/scoring",activeStyle:W},o.a.createElement("li",null,"Scoring"))))),o.a.createElement(P,null,o.a.createElement(c.d,null,o.a.createElement(c.a,{exact:!0,from:"/",to:"/basics"}),o.a.createElement(c.b,{path:"/basics"},o.a.createElement(L,null)),o.a.createElement(c.b,{path:"/yaku"},o.a.createElement(R,null)),o.a.createElement(c.b,{path:"/scoring"},o.a.createElement(Y,null)))),o.a.createElement(F,null,o.a.createElement("a",{href:"https://github.com/pyi891/riichi-companion"},o.a.createElement("img",{alt:"Link to GitHub repository",src:"".concat("/riichi-companion","/github-light.png"),height:32,width:32})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.bd83b0af.chunk.js.map
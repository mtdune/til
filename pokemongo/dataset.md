# Dataset

## 要件

- JSON もしくは CSV のような構造化されたデータ

## 目的

最初は複雑なものを求めない。簡単なものにする。

- 各リーグの最適個体の、進化前の CP の算出
- 種族値から PvP の適性を判定する
  - 草二重弱点のような弱点は下げる（これは評価に含めない。別の要因として扱う）
  - 0 か 1 かではなく百分率で表示する
  - 攻撃、防御、ヒットポイントのバランス（環境上位種族を参考に）
  - 最大 CP
    - 補正がかかるため最大 CP はそのリーグの上限に近いほうが有利（超えてもよい）
- SCP 計算
- 耐性と技タイプで検索できる
- 仮想敵を指定すると、対策種族を表示してくれるとよい

## リンク

基本

- <https://github.com/pokemongo-dev-contrib/pokemongo-game-master>
- <https://github.com/fanzeyi/pokemon.json>

名前リスト

- <https://github.com/fanzeyi/pokemon.json/blob/master/pokedex.json>

日英対語表

- <https://pokemongo-get.com/pokego02244/>

CP 計算式（レベル補正値）

- <https://pokemongo.gamewith.jp/article/show/54297>
- <https://pokemongo.gamepress.gg/cp-multiplier>
- <https://www.dasamon.com/2018/12/04/cp-formula/>

API

- <https://pokeapi.co/docs/>

Type chart

- <https://github.com/filipekiss/pokemon-type-chart/blob/master/types.json>
- <https://9db.jp/pokemongo/data/814>

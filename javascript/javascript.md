# JavaScript

## for 文での click 時の動作

クロージャにより意図した動作にならない。この場合、即時関数でくくればよい。

- <https://ja.stackoverflow.com/questions/1534/>

## JavaScript から JavaScript を呼び出す

- <https://www.jiichan.com/programming/programming.php?lang=js&no=03>

## 非同期ロードしたコードの読み込み完了後に処理を行う

- <http://megalodon.jp/2012-1203-2000-27/ameblo.jp/miramiku/entry-11014673659.html>

## パフォーマンス改善

- [ページ上でずっと動いている setTimeout, setInterval, requestAnimationFrame を見つけてパフォーマンス改善する](http://efcl.info/2017/12/07/capture-living-timer/)

## 値渡しと参照渡しの違い

- <https://qiita.com/Yametaro/items/21f7b1a4ae09f16f323e>

## 特定クラスへのイベント設定 jQuery 版

```JavaScript
$('.className').each(function(){
    $(this).on('click',funtion(){
        // 要素ごとの処理
    });
});
```

## jQuery リプレース作業

単に jQuery からヴァニラにすると、属人性の高いコードになる恐れがあるため superagent などが使えるならば、使ったほうがよい。

- <http://youmightnotneedjquery.com/>
- superagent

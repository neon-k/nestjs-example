# nestjs-example

業務でnest.jsを使って開発をすることがあったので、実際に手を動かしながら勉強した時のリポジトリです。

## Purpose
- nestjsの基本的な使い方把握
- TypeORMを使って構造体とマイグレーションを同期させる
- JWTを使ってトークン認証実装

## Library

使用しているライブラリは下記のとおりです。

| Library                                             | 説明                                         |
| --------------------------------------------------- | -------------------------------------------- |
| [nestjs](https://nestjs.com/)                          | Typescript製のバックエンドフレームワーク                         |
| [TypeORM](https://typeorm.io/#/)                    | ORMマッパー + マイグレーション                          |
| [mysql](https://www.mysql.com/jp/)                  | DB                                 |
| [passport-jwt](http://www.passportjs.org/packages/passport-jwt/) | JWT認証      |

## Impressions

- 雛形を自動で生成してくれるので開発する際に他のエンジニアと遜色ない書き方ができるので便利だと感じた。
- API開発の時にいつも苦労するのがバックエンドとフロントエンドの型の相違何ですがnestjsを使うことでそこが解消されると感じた。
- TypeORMの同期マイグレーションが構造体を主体とした構成になってるので、sqlと構造体の型を一括管理ができるのが素晴らしいと感じた。

## Reference

- [nestjs基本](https://qiita.com/elipmoc101/items/9b1e6b3efa62f3c2a166)
- [nestjsの基本の書き方はここでわかる](https://qiita.com/kmatae/items/5aacc8375f71105ce0e4)
- [nestjsマイグレーション](https://qiita.com/renresohasyachi/items/69357ce1d4e8e2fc4929)
- [nestjsとtypeORMをわかりやすく解説してくれている](https://qiita.com/potato4d/items/64a1f518abdfe281ce01)
- [nestjsのアーキテクチャーをわかりやすく解説](https://qiita.com/potato4d/items/aabb78fd201592352d64)
- [nestjsをdokcerで開発](https://qiita.com/Gma_Gama/items/407ad2f121f6d01a6361)
- [ormconfigの書き方](https://github.com/typeorm/typeorm/blob/master/docs/using-ormconfig.md#creating-a-new-connection-from-the-configuration-file%5D)
- [めちゃくちゃ参考になるnestjsのサンプルコード](https://github.com/pokotyan/nestjs-sample)
- [typeORMの詳細](https://www.wakuwakubank.com/posts/732-typeorm-repository/)
- [JWTtokenでの実装 応用](https://zenn.dev/uttk/articles/9095a28be1bf5d)
- [JWTtokenでの実装 基本](https://qiita.com/ci7lus/items/4b481d1ae670fba7e137)
# e-Learning by Yuckey-code-studio

Yuckey-Code-Studioで展開しているコーディング課題を作業するための初期設定環境です。こちらのプロジェクトをクローンもしくはForkしてご利用ください。

## 環境準備

### 作業環境

- Windows 10(21H2) / macOS(12.2.1)
- Node.js v16.14.0
- npm 8.3.1
- git version 2.34.1
- Visual Studio Code 1.65.2

### プロジェクトインストール

ローカルリポジトリの用意ができたら必要な npm パッケージをインストールします。

```
$ npm ci
```

※ npm パッケージの脆弱性で警告が発生しますが、とりあえず使用できます

### Visual Studio Code 拡張機能のインストール

Visual Studio Code（以下、VSCode）の推奨拡張機能を使用しています。  
プロジェクトで使用している拡張機能をインストールしてください。

- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
- [Japanese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

### 作業環境のテスト

パッケージのインストールと VSCode の拡張機能インストールが終了したら、html ファイルや SCSS ファイルをテスト編集して Lint チェックや保存時の自動整形が動いているか確認してください。

### ディレクトリ構成

`./src` ディレクトリに格納されている SCSS、JavaScript、SVG アイコン対象ファイルがコンパイルされて `./htdocs` ディレクトリに出力されます。`./htdocs` ディレクトリに成果物（html など）を格納します。

## サイト制作時

以下の npm-scripts を実行します。  
ローカルサーバーが起動し、SCSS や JavaScript のファイルが更新されたら自動で反映されます。同じネットワークに接続している端末であれば表示された IP アドレスにアクセスすることによってブラウザ同期やユーザーアクション同期が実行できます。

```
$ npm run start
```

### SVG アイコンフォント作成

SVG の中身を確認して `viewBox`、`width`、`height`、`preserveAspectRatio="xMinYMid"` が設定されていることを確認してください。  
その後、SVG を `./src/icons` に格納して npm-scripts を実行します。

```
$ npm run icon
```

`./tmp`ディレクトリが生成されサンプルの CSS と HTML が格納されます。  
HTML の表示に問題がないことを確認の上、CSS に設定されている `content` の値を SCSS に設定してください。

- ./src/sass/global/setting/\_icons.scss
- ./src/sass/component/\_icon.scss

## コミットメッセージ絵文字（optional）

コミットメッセージに絵文字が入っていると見たときにわかりやすいですし、開発のテンションが上がります ❗  
日本語入力に辞書追加を行って気軽に絵文字を入力できるようにしましょう 🥰

- [絵文字入力を日本語 🇯🇵 でするための IME 追加辞書](https://github.com/peaceiris/emoji-ime-dictionary)
- [Emoji で楽しく綺麗なコミットを手に入れる](https://goodpatch.com/blog/beautiful-commits-with-emojis)
- [GitHub のコミットメッセージに絵文字を入れて開発効率をあげる](https://qiita.com/Jung0/items/0a9a7a97a2c17f92d3c5)

| emoji |  IME 変換  |    code    | type                  |
| :---: | :--------: | :--------: | :-------------------- |
|  🎉   | ：おいわい |   :tada:   | 大きな機能追加/変更   |
|  ✨   | ：きらきら | :sparkles: | 部分的な機能追加/変更 |
|  🐛   | ：いもむし |   :bug:    | バグ修正（Bugfix）    |
|  👍   | ：おやゆび |    :+1:    | 機能改善              |
|  🎨   | ：ぱれっと |   :art:    | スタイリングの修正    |
|  📝   |   ：めも   |   :memo:   | ドキュメント追加/変更 |
|  🐴   |   ：うま   |  :horse:   | パフォーマンス改善    |
|  🔧   |  ：れんち  |  :wrench:  | ツールメンテナンス    |

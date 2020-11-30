---
title: 実機デバッグ中のAndroidの画面をMacにミラーリングするTips
description: 実機デバッグ中のAndroidの画面をMacにミラーリングしたいって話です。
slug: mirroring-android-device-to-mac
date: 2020/12/01
---

# 実機デバッグ中の Android の画面を Mac にミラーリングする Tips

この記事は [Akatsuki Advent Calendar 2020](https://adventar.org/calendars/5174) 1 日目の記事です.

最近友人から教えてもらった Tips でとても有用だなとおもったのでブログに書き起こしています。

結論から書くと、これを使います: [Genymobile/scrcpy](https://github.com/Genymobile/scrcpy)

## どうしてデバッグ中の画面をミラーリングしたいの？

例えば、私の場合では趣味でさわっている ReactNative のアプリを作るときなどに Android 端末と iOS 端末とで同時に画面を作って実機で確認するなどの作業が発生しているのですが、PC の上で Android emulator と iOS emulator を同時に動かすと PC の動作がもっさりしてくることもあって基本的なデバッグなどは実機で確認することがしばしばあります。

[Expo](https://expo.io/)を使っていることもあって実機で確認するということ自体は簡単ですが、実機の操作をするたびに PC もといキーボードやトラックパッドから手を話してディスプレイではなく、Android/iOS の端末を直接操作しないといけません。正直これが面倒です。

## scrcpy って何？

タイトルにあることが全てではありますが、Android の画面をミラーリングして表示することができるものです。
README より引用すると

```md
This application provides display and control of Android devices connected on USB (or over TCP/IP). It does not require any root access. It works on GNU/Linux, Windows and macOS.
```

とのことで、ざっくり書くと、USB 接続してる Android 端末の表示/制御ができるツールとのことです。

---

この scrcpy というのを使うと、実機の画面を PC(mac/windows/linux 問わず)に Android のデバイスの画面をミラーリングすることができ、マウスで、実際に画面を操作することができます。（便利！）
簡単に実際に操作している GIF を用意しました。

<img src='medias/mirroring-android-device/01.gif' width="300" />

ここだけ見ると、実機をわざわざ使わなくても Emulator でいいのでは？と感じるかもしれません。 もしかしたら大体のケースではそれでも問題ないかもしれません。しかし、Emulator では操作がしにくいもの(画面下部からスワイプする操作やダブルタップの操作など)は実機で直接触りつつ、細かいデバッグ操作は PC で行うと言ったようなハイブリッドな操作ができるというのがこの scrcpy のメリットかなと感じています。
また、`scrcpy --help` によって確認ができますが、いくつかの Android 端末への操作(e.g. APP SWITCH)は scrcpy 側でショートカットが定義されており MOD Key と任意のキーを操作することで Android に触れずに操作ができます。(痒いところに届かない感じがありますが...まぁ使えると便利かなという温度感です。)
(まぁ Android しかミラーリングできないので iOS は今まで通りやる必要があるのですが Android だけでも楽になると大変嬉しい..!)

ぜひ、同じような悩みを抱えてる人がいたら使ってみてはいかがでしょうか、とても使いやすくおすすめです。

### 実行/インストールするためのメモなどを ↓ にかきます。

筆者の実行環境は ↓ の通りで、最近アプデがあった macOS big Sur です。

```shell
 { fumihumi } (~): sw_vers
 ProductName:	macOS
 ProductVersion:	11.0.1
 BuildVersion:	20B29
```

すでに Android の開発環境(adb コマンドが利用可能)なら ↓ をするだけで可能です。(詳しくは Readme をみて下さい)
整っていない場合は README の指示に従って`android-platform-tools`をインストールする必要があるかと思います。

```bash
 $ brew install scrcpy
```

インストール後に scrcpy を利用するには

```bash
 $ scrcpy
```

を実行するだけとシンプルです。
もしうまく Android の画面がミラーリングされない場合は

```bash
 $ adb devices
```

などでデバイスが適切に認識されてるか確認などしてみてください。(この辺は普通の実機デバッグと同じと思います。)

ケーブルの接続が切れると scrcpy が強制的に終了されるようなので、ケーブルを途中で抜かないように気をつけてください(抜けた場合は再度 scrcpy を実行しなおす必要があります。)

実行までのメモ終わり

---

p.s.

この手の Debug の手法とかってわりと個々人のなかで出来上がっているのにあまり公開されなさそう(?)なのかなとか思ったりしました。
便利な Tips を見つけたらインターネットの海に公開していきたいなと思った今日この頃でした。

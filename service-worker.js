/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f2b11eafdc7b72be36dce4f219a7bda6"
  },
  {
    "url": "assets/css/0.styles.a3c9e4e0.css",
    "revision": "dc94f497368e3fd6a7407b8f43f948f1"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/architecture.396596da.png",
    "revision": "396596daac3a07bab23590ee7ea9dc72"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/js/10.6a4da56d.js",
    "revision": "74164847e349fceb62c0373025970e20"
  },
  {
    "url": "assets/js/11.34924ec2.js",
    "revision": "e515c5118023fba6a14ff132ca12ec50"
  },
  {
    "url": "assets/js/12.17bd36c8.js",
    "revision": "be87ef8ca66ba843da55e21b8c6c853a"
  },
  {
    "url": "assets/js/13.baca5a1a.js",
    "revision": "d914b7dcc5692ac5774a00fc1d010632"
  },
  {
    "url": "assets/js/14.2439e6bb.js",
    "revision": "62a0a1175734eedebb02d22426954e5c"
  },
  {
    "url": "assets/js/15.b54a727a.js",
    "revision": "7a452981a2a4c2714738473a4165ea2c"
  },
  {
    "url": "assets/js/16.cef4aa0e.js",
    "revision": "9675f576f6a0c89be952103bf4c1df5d"
  },
  {
    "url": "assets/js/17.69a2fcdf.js",
    "revision": "c52e8e1b75018474bfb2bcf04d38a714"
  },
  {
    "url": "assets/js/18.35e2497e.js",
    "revision": "bb82b134c0c24f49f7523868cfdbcf88"
  },
  {
    "url": "assets/js/19.cc09d9b1.js",
    "revision": "75449bc30afa3aa73739959dfaad7d2e"
  },
  {
    "url": "assets/js/2.0fda7ff4.js",
    "revision": "3850e9677f7fd26aa3ed326d1d44acb2"
  },
  {
    "url": "assets/js/20.b7631acc.js",
    "revision": "576d9a4144e271475084ca8a677982b6"
  },
  {
    "url": "assets/js/21.8448ef56.js",
    "revision": "fa3422f11446f8024ef00d5e9685fa43"
  },
  {
    "url": "assets/js/22.0710a60b.js",
    "revision": "c77a02d240b01917186e0a6c16235bf4"
  },
  {
    "url": "assets/js/23.724224a9.js",
    "revision": "d7af1c6bee6662c9b67d5e664aac891f"
  },
  {
    "url": "assets/js/24.ccb5490a.js",
    "revision": "8dee00c0c58668c27595150eaee27a22"
  },
  {
    "url": "assets/js/25.4f07f44b.js",
    "revision": "1f67ec9c9593c7c4e28dd76858d4b587"
  },
  {
    "url": "assets/js/26.0b36b478.js",
    "revision": "38e6c2b90388757287b4b54f54b8b90b"
  },
  {
    "url": "assets/js/27.7d50bbad.js",
    "revision": "4c8bc0799d0dc18bb241b9f502676f8a"
  },
  {
    "url": "assets/js/28.7e5c6568.js",
    "revision": "185099c5faebc3a00e82f6829e8dd257"
  },
  {
    "url": "assets/js/29.880bfe3b.js",
    "revision": "02855f7d5a6ec436181e4a3a2337ff7d"
  },
  {
    "url": "assets/js/3.e1a93165.js",
    "revision": "06f6cb0130cfc0fda370965fb25090cb"
  },
  {
    "url": "assets/js/30.047a9203.js",
    "revision": "164d83bf7a6da2c7cc0043522a1e03ea"
  },
  {
    "url": "assets/js/31.1faf01f2.js",
    "revision": "3181761e04ea0b013ac45be26aaa8930"
  },
  {
    "url": "assets/js/32.3c387bb3.js",
    "revision": "b02933b149223e0f8760f269a6e75943"
  },
  {
    "url": "assets/js/33.0eec625d.js",
    "revision": "26edd8c935027f2712f77e1f8dd9b6f2"
  },
  {
    "url": "assets/js/34.51c67951.js",
    "revision": "230c0c08d45797503fbd1557476d056d"
  },
  {
    "url": "assets/js/35.746becff.js",
    "revision": "46bfadf499311bfc429b5812f5d85692"
  },
  {
    "url": "assets/js/36.b1f7b8f6.js",
    "revision": "8cd67990976a5df1ae6d617dcb4455b6"
  },
  {
    "url": "assets/js/37.ab88c6d2.js",
    "revision": "1bd70fda631f9e0f14350cb5cb1a2db4"
  },
  {
    "url": "assets/js/4.470d57a9.js",
    "revision": "3205952bbf971c7aeba5c0ca9964274c"
  },
  {
    "url": "assets/js/5.c0602bbe.js",
    "revision": "6ef7d5fba5558af6c0b71ccd457c9eba"
  },
  {
    "url": "assets/js/6.3c37dfb4.js",
    "revision": "a859bb5491d5c3398f5c7fb20b88d4be"
  },
  {
    "url": "assets/js/7.e2841eb0.js",
    "revision": "9527b4a664c65ff7fce992fc6669d813"
  },
  {
    "url": "assets/js/8.9c4214fb.js",
    "revision": "ca02e8f1237e35e069d5668258e808bc"
  },
  {
    "url": "assets/js/9.785632fd.js",
    "revision": "98ef80b4d9e971a049ac8705e0fe6db0"
  },
  {
    "url": "assets/js/app.363f2d63.js",
    "revision": "b443749df39a7a99e3fe5eeb022e83bc"
  },
  {
    "url": "connex/api.html",
    "revision": "dd28b7421c7e58082750f3786b7d5840"
  },
  {
    "url": "connex/compatible-client.html",
    "revision": "fa1aa8b385e5cd50232fe61c79df6745"
  },
  {
    "url": "connex/connex-intro.html",
    "revision": "e1cc8297baf9e3941cc23209b392f7b8"
  },
  {
    "url": "connex/demos-and-service.html",
    "revision": "4fe807b061434925bf75ef25ff8206ef"
  },
  {
    "url": "connex/type.html",
    "revision": "3a7e274f93342b77a3b3f3185229f186"
  },
  {
    "url": "Contribute Doc.html",
    "revision": "08bf928e005fe56c73829c6fdbabba62"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "96b427f4c61825173465d8ff09320d92"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "e1170ca9b9e42c9ac1bef22652c2e893"
  },
  {
    "url": "sync/faq.html",
    "revision": "9a4582116ed7ea359a8522f3972ee7fc"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "7c9a09637127eabcebb163a915531589"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "31b0fdb03f0334b6bc01a24c8b510079"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "60d9c5070b1c1668c5ee010d7779c4c8"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "f2da672c4e6bf20f3659aed52812edd8"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "7e13ab109b750a44fa0581c0f6807043"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "885b5f06507569359c4cc45ba2bf8d3b"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "337fb00165c73253bb7745f67bd670e3"
  },
  {
    "url": "sync/user-guide/wallet.html",
    "revision": "6f47b2989467ff8bc9986f67368b5e15"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "3bd6fefe4150399c6956147911886108"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "db137eb1e66ab9924716c6ba6297efe2"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "3cfd7b5ea0af41fc0418a992d7077759"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "7d9646479d8902750cc3665226118068"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "85f9c9543dc7add6a096c46205dade5f"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "4c72d0139078a4c255b7b74ed8026d44"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "a13d5136a00f527fe325b22cb84ff84b"
  },
  {
    "url": "thor/learn/introduction.html",
    "revision": "512b60db67c6cdae12bf601ada7382f1"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "448fae5efbdf4b979508771cf18c6012"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "bf06251ae83a08fc5547ce4113d88cfa"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "dad670fae53bfd93d5cd0629e1ed9621"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "224006d5877b4a5bedca642f1a68adae"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "a7bd5c750dda7aef2955d988f4c058b6"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "a025a06eeeeacc7709dbdd8d44c2c7e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "d5dc65e6f2c7f3509d2614020a1b3fe1"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.82dbe501.css",
    "revision": "b956064276122139c5041c20a821752f"
  },
  {
    "url": "assets/img/connection.82a65816.png",
    "revision": "82a658161c1e554ee9833b4a4e5e84cc"
  },
  {
    "url": "assets/img/deleteAccess.a9fd01cc.png",
    "revision": "a9fd01cc6387cd7aa9bb95c7f7c613cd"
  },
  {
    "url": "assets/img/deleteCheckAccess.48ad7b5b.png",
    "revision": "48ad7b5bbca59d599dd9ec89c5bec95b"
  },
  {
    "url": "assets/img/deleteCheckRole.745857ac.png",
    "revision": "745857acb7a323f00bfaedc82f53fe47"
  },
  {
    "url": "assets/img/deleteRole.fc400b86.png",
    "revision": "fc400b869615fd9785b14a3611cddad1"
  },
  {
    "url": "assets/img/getAccess.d7ccb702.png",
    "revision": "d7ccb702986615bd3a180be4cea1aebe"
  },
  {
    "url": "assets/img/getAllRole.f3358087.png",
    "revision": "f33580870c3ade43402b75f5b5e8154f"
  },
  {
    "url": "assets/img/getByIdAccess.d6488324.png",
    "revision": "d64883245cf641ab393c22700a0cb9dd"
  },
  {
    "url": "assets/img/getByIdRole.84945189.png",
    "revision": "84945189fbba416bd542399f95a4f5a6"
  },
  {
    "url": "assets/img/postAccess.8c1924ed.png",
    "revision": "8c1924edd9f0eda2260e4d4f39f1efdc"
  },
  {
    "url": "assets/img/postCheckAccess.6edeb120.png",
    "revision": "6edeb1206acd458e2290997ceb29aec0"
  },
  {
    "url": "assets/img/postCheckRole.dfac69e2.png",
    "revision": "dfac69e23778d83771a855ff37ed6494"
  },
  {
    "url": "assets/img/postRole.1ca3c125.png",
    "revision": "1ca3c125da07127a19703556d4ae3915"
  },
  {
    "url": "assets/img/putAccess.6d312a00.png",
    "revision": "6d312a007e5f5501be369862ed2cd86a"
  },
  {
    "url": "assets/img/putCheckAccess.0347c431.png",
    "revision": "0347c4316b69a42164be85c7ea5127a9"
  },
  {
    "url": "assets/img/putCheckRole.e9d2ef02.png",
    "revision": "e9d2ef02d7c859bdc2fb840e383690d9"
  },
  {
    "url": "assets/img/putRole.acdedd22.png",
    "revision": "acdedd22a756e97e0e36c80567f06f57"
  },
  {
    "url": "assets/img/relscheme.20f4bef6.png",
    "revision": "20f4bef68d64bf57625c3b91cc2d2821"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e1273895.js",
    "revision": "9d9d293cdd1d8bbbc4485a4173518689"
  },
  {
    "url": "assets/js/11.b2a8966d.js",
    "revision": "9eb56cb4328fdf7b3b5720e1fe3f60c6"
  },
  {
    "url": "assets/js/12.70c24ba1.js",
    "revision": "b1c6f64a43140d2e63312895ebe0a483"
  },
  {
    "url": "assets/js/13.6a9aef9d.js",
    "revision": "cb91f65390d3e4e97798cde6898bfc37"
  },
  {
    "url": "assets/js/14.f6e69cd0.js",
    "revision": "70e2a57777d21dde9d07160140d4e156"
  },
  {
    "url": "assets/js/15.750f6f2f.js",
    "revision": "79690cb2d6b3c27f55f75cfbe8486ec4"
  },
  {
    "url": "assets/js/16.1355a11d.js",
    "revision": "736b18fb7cfad7aae039e7cf814221e7"
  },
  {
    "url": "assets/js/17.5aff68f2.js",
    "revision": "a48e865e716d8d473ed11b21dced17b1"
  },
  {
    "url": "assets/js/18.e0b89c4a.js",
    "revision": "ee54c41ba9a8a21d3d94bcd7a4e9aabc"
  },
  {
    "url": "assets/js/19.ef00871c.js",
    "revision": "8f5faf027485b43d8fca55f5b58401a0"
  },
  {
    "url": "assets/js/2.4de9a93a.js",
    "revision": "4a788ed2ec3bb40852a4cdeed12e52f6"
  },
  {
    "url": "assets/js/20.86dc33dc.js",
    "revision": "05a139a6cece0222df19827b0318ddc4"
  },
  {
    "url": "assets/js/21.47e35e13.js",
    "revision": "d32d63fbaa6f277fa04e30b4d879c212"
  },
  {
    "url": "assets/js/22.eef3feff.js",
    "revision": "15c1d8427431814383cedf0171077851"
  },
  {
    "url": "assets/js/23.03755afc.js",
    "revision": "8d2fce97486425eb0e0db00abb5b59ca"
  },
  {
    "url": "assets/js/24.d18be9b2.js",
    "revision": "eaf8e1094095432fae935e02a091fac2"
  },
  {
    "url": "assets/js/26.b038f0f8.js",
    "revision": "3cd3fa2cd5856af626304a2e0bc91950"
  },
  {
    "url": "assets/js/3.0cbbea41.js",
    "revision": "5268d7f1aa5b4fde000b74f00b7663f1"
  },
  {
    "url": "assets/js/4.29f993dc.js",
    "revision": "8dbb81d335ab579ccc62b2f9d4e48276"
  },
  {
    "url": "assets/js/5.88a38aef.js",
    "revision": "6e9dc463d419debcb226ca15a1956da4"
  },
  {
    "url": "assets/js/6.a686ffc5.js",
    "revision": "9a54e5d721c4c3303c758866399c6ef0"
  },
  {
    "url": "assets/js/7.3a5ea926.js",
    "revision": "963e7c0e51c2872fc164cbe617ca4810"
  },
  {
    "url": "assets/js/8.8a9585ed.js",
    "revision": "8e3af57e6746ad368f7e77c594c7bbfe"
  },
  {
    "url": "assets/js/9.b680df71.js",
    "revision": "d6fb10b59c593ff1ce1cf846714da527"
  },
  {
    "url": "assets/js/app.1b03e0d2.js",
    "revision": "55de2679e8dd49fea9c0698c72d3a800"
  },
  {
    "url": "conclusion/index.html",
    "revision": "938a13a5adb4b63ab8487d9751bfb7ef"
  },
  {
    "url": "design/index.html",
    "revision": "9f410c8d1a10ca17fcd43f65aff564b5"
  },
  {
    "url": "index.html",
    "revision": "31861a6996c59ddd59dfd84412a511bb"
  },
  {
    "url": "intro/index.html",
    "revision": "8acb5feaf28343b96ac816893fb4547d"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6f985caa95033c845e7c57b7820d40eb"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "d6e3bf161641760624aaf8c543dc3f9e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2f9b6d0daceb4352d5045b2bfd32e18e"
  },
  {
    "url": "software/index.html",
    "revision": "79376d0c9380c3ab379ec3e9a532adc5"
  },
  {
    "url": "test/index.html",
    "revision": "4457055d849b09144f2aa34fa76b7e01"
  },
  {
    "url": "use cases/index.html",
    "revision": "432c46b690e24971e1595ad9ec79d49e"
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

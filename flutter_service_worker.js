'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fa68ea3711896255ddea662296446433",
"assets/AssetManifest.bin.json": "0ddab8303b47ecc53b27eb6640e2562f",
"assets/AssetManifest.json": "0430a64fa19294b38e2f70551c71fc9f",
"assets/assets/Acolyte_Tot.jpg": "71f7e8a2d425a47f05ed9b8d4be2c7fb",
"assets/assets/AmberAcolyte.png": "9f0372175d4d758a7f067d536de7f82d",
"assets/assets/AmberGem.png": "48f329046b05d37d33574058cf63c51a",
"assets/assets/AmberVendari.png": "1cd8834f32dbe4166bd39bfb045be659",
"assets/assets/AM_Tot.jpg": "2d9471844845fdb52c225005c350efdc",
"assets/assets/AzEye.png": "4b891a8fd51f1e265e4824b0c6b80d87",
"assets/assets/Azservice.png": "59c4f78fc20451627861473aa2af9c28",
"assets/assets/AzuriteAcolyte.png": "8ec6d0cff96a8e10aad30fe1bf000480",
"assets/assets/AzuriteGem.png": "9dc44286627e5db5dd8407ed33156960",
"assets/assets/AzuriteGeneral.png": "4b72896937312d763023619fc61405cd",
"assets/assets/Azurite_chibi.png": "f2e2f8ed0cbd91540d0cab9db8d05958",
"assets/assets/BadAssRana_MageYew.png": "f6d7995aa9a88c3fd5c53288bb44d190",
"assets/assets/Bday_art.png": "d292babd0c7e98b1570cc3bb2061c3d2",
"assets/assets/Bday_artv2.png": "a1833e866804d9364e88cfbc6863e1eb",
"assets/assets/BestPapa_MageYew.png": "60a49b3a48ef3bd6e68d0d3e92b13b69",
"assets/assets/BlueberriesNCream_MageYew.png": "0887bea199fe2164b7643848f7fb8c29",
"assets/assets/BlueTopazAcolyte.png": "55bdd4cef6293e31b2f74198e5079f78",
"assets/assets/BlueTopazGem.png": "3b51f56ef88fe3acd0321ab5bb00bb02",
"assets/assets/BlueTopazVendari.png": "66b7b1dc38a86d54bdc6fda716282db2",
"assets/assets/BraveLana_MageYew.png": "49d4741f3fb98c671dfac0e2848ad703",
"assets/assets/BR_Banner.png": "7937387781abace04948994540ed3b94",
"assets/assets/BR_romance_moon_sketch_az.png": "4c68ef89260fdabb01a67083264987a2",
"assets/assets/BR_romance_moon_sketch_jarldance.png": "a2f3070befa3a890dae48dd4756279b5",
"assets/assets/BR_romance_moon_sketch_jarl_flower.png": "a8c6184df96936a49bc7b1de785e397e",
"assets/assets/BR_romance_moon_sketch_ranatell.png": "990301cb3f24fe852ba45354247d06ca",
"assets/assets/Carattere-Regular.ttf": "47d607fabf2194abbcf2b45e007e9188",
"assets/assets/Character_Bios_AM.jpg": "45a6fe93a46f74780aa237317c37bd1b",
"assets/assets/Character_Bio_Dukhat.jpg": "27d9c62d3c57cf2ed01911e615f230a0",
"assets/assets/Character_Bio_Petrichor.jpg": "99033c3f0b27bec01868ab841fa4451a",
"assets/assets/Chestco.png": "4e1a273277a052d723e58b33805bec4a",
"assets/assets/CookiesNCream.png": "8fae4c71d191845a02248f36cc624e4b",
"assets/assets/Cover.jpg": "7f9a0f29ffc1ccf8ce2cc79a82fe4147",
"assets/assets/Dance_Rana_Void.png": "46802af70191c8a2296ea87482d05346",
"assets/assets/DarkPearly_MageYew.jpg": "03fef2e53f213bb2aa7fcdb98c8091ca",
"assets/assets/Draco_ig.png": "2cb7831070a97233b9a9af6054790fbe",
"assets/assets/dreamscape.jpg": "0ccea541457912cad9069626ac7c4eeb",
"assets/assets/Dukhat.png": "74495938943da483a201db881212bec5",
"assets/assets/EmeraldAcolyte.png": "3ba8143c2ecd10b6d15888704b9f02a3",
"assets/assets/EmeraldGem.png": "333a7c7f688460e0ea04b850b2392a2f",
"assets/assets/EmeraldVendari.png": "b08862b206476b62d51c14ae114d83e6",
"assets/assets/FieryVey_MageYew.png": "cf2daeee5d51328043be961c2028ec20",
"assets/assets/Gnomen.jpg": "dfb9fcfbd5242c1384fa618b84683191",
"assets/assets/HIlturnd.png": "e8b0cc91578a68f946ccf254b4237dcf",
"assets/assets/Horror.jpg": "a87c4e7f792edcd3e778df1dfe410b26",
"assets/assets/IceChest_MageYew.png": "fe1023480afe79532aa31775dfd8fab1",
"assets/assets/jarlllllllllllllllll.png": "8ffbab54f81d0d9408fdf2701b5dc95f",
"assets/assets/Jarlquise.png": "630f2f3fb6f9d9defe05c2fa6473fe98",
"assets/assets/Jarl_chibi.png": "ff64dc0f1f4b023af61aa5e9630403f0",
"assets/assets/jarl_defend_that_bastionnnn.png": "5d5ba03adc438e523053af2ba39c00f5",
"assets/assets/Jer_tiefy.png": "9c569b2b1e59120404519665e2d1a913",
"assets/assets/Jeshi.jpg": "1e82177ee119d49a9f236f29aef64156",
"assets/assets/LanaRanaPicnic_MageYew.png": "e72aa1763c8c1ee7d5ea19281290ed06",
"assets/assets/MajestyArt_MageYew.png": "d7744652ad05ac870abd4bbf780566ef",
"assets/assets/MajestyChibi.png": "7ad71688de97d33a65e4409db3ecd0bc",
"assets/assets/Majesty_MageYew.jpg": "70f4a9fe1e5a33b0c77afdc50799990e",
"assets/assets/Marahlie.png": "31f77fe6df60e0a3c87aa6111dcaec4b",
"assets/assets/Marahlie_Tot.jpg": "9f5661321ce22bdd0195924a12713702",
"assets/assets/MootyComfort_MageYew.jpg": "cca844a6c6070ba092d5d49400924195",
"assets/assets/MootyLana2_MageYew.png": "f05d82de936f26487952114c14b1ef37",
"assets/assets/MootyLana_MageYew.png": "f445419c8c1684da253532f77603f910",
"assets/assets/MootyMine_MageYew.png": "1032de0526a995d8458948e9a8337652",
"assets/assets/Mooty_chibi2.png": "613bd26f01217192529a4939ec73b16f",
"assets/assets/Mooty_duck.png": "dfd3c80b42d6130fc11fb6fa31f8189a",
"assets/assets/Mooty_n_Lana.png": "31f63b593e5f1a32ab5d3959bf3329d0",
"assets/assets/Mooty_pink_hat.png": "833a56f5528db74b688571b78fb4b1ad",
"assets/assets/Ncrea.png": "96063914fb30907a1acbbf285b8eb60d",
"assets/assets/nodoffstory_Void.png": "48524c872cc4637eb3af4fc89847a415",
"assets/assets/Nothing.jpg": "7e10994e51092bc1aa1a608edef08363",
"assets/assets/ObsidianAcolyte.png": "d261957b6551daf090f015168f9d2e61",
"assets/assets/ObsidianGem.png": "db4f2955324cde6b8303d0ffcc5d23ec",
"assets/assets/ObsidianMajesty.png": "b872a4aa411dd261b446a96697ed3ee5",
"assets/assets/ObsidianRibbon.png": "521625442510ba4cc7067aa66fbc4eea",
"assets/assets/Obsidian_chibi.png": "7c1ebe357fc5dabcd10b5f8259823967",
"assets/assets/OmaSeyima.png": "72f623cdd6dcc502ee4ae91dd83360d3",
"assets/assets/PearlAcolyte.png": "028aaf54fcabeebc6c3e934c96bc7fc0",
"assets/assets/PearlGem.png": "55fa317018ebc62285c62f79b8665741",
"assets/assets/PearlOracle.png": "d857a23f1465e2ad612bb9fd7420149e",
"assets/assets/PearlProg.png": "a5ef13f9dba6ff09abab9edfe951f8f3",
"assets/assets/PearlyTanChin.png": "f7d771461a7479335aca2784b907e7fc",
"assets/assets/pearly_jer_chibi_time.png": "b970b90bf7ccf86c6bacfca786a79dc4",
"assets/assets/Pearl_chibi.png": "b4a319c4a8cdead639db1823cc1ac301",
"assets/assets/pearl_in_dat_top_hunty.png": "a7d8b99b6a7abf106e1e175429802fb5",
"assets/assets/Petrichor_in_petridish.png": "bb532fa171a326d35f39f01a531a3a62",
"assets/assets/petriwink.png": "cff9657711a3abedff1932e0ae1d9e27",
"assets/assets/pianolanamooty_MageYew.png": "abd7cfeb3c90829af4c4a7c73269f544",
"assets/assets/PissedMooty_MageYew.png": "f4ea854290c73d0831dcfad28f987482",
"assets/assets/preistpearl_Void.png": "3de32a97e15a151247581f47ba54d8db",
"assets/assets/RanaChibi.png": "c73bed2a8faf72911f10eafbb5020bbe",
"assets/assets/RanaLana_MageYew.png": "4d0f763305c951be0a6c216e18f9fae0",
"assets/assets/Rana_Telle.jpg": "b5f77d648a46a6be20093fedfa0c2764",
"assets/assets/RealmOfEmberAndFlames.png": "10fc53c52d5b94eb9f8810b2b0d1858b",
"assets/assets/Rose.png": "834ea206185843bd706c81e6664d5667",
"assets/assets/SacredCave.jpg": "fa5fb36a0f7e05ebab754c6c9741500d",
"assets/assets/SardonyxAcolyte.png": "5130197931b031162e6cc6460e3070af",
"assets/assets/SardonyxGem.png": "86f93bf99ea32ef2fbab92e45743415a",
"assets/assets/SardonyxVendari.png": "55143812f284e2e1da4c7147f5b32718",
"assets/assets/ShadowDaddy_MageYew.jpg": "34409f9fc730da9b3a4ac489032a063b",
"assets/assets/SpruceyAss_MageYew.jpg": "c24a68f0fdf3ae45ae64bc8894936f0f",
"assets/assets/StillAndSwells.jpg": "4838d6d03db3c5b52addf98699d23b98",
"assets/assets/Sylphs.png": "cffe68e54308b53964cee149a8b7628f",
"assets/assets/Tcheya.jpg": "c0965a8aa75ae3d6fc5d9ae36f124020",
"assets/assets/telluriaandjarlyetagain.png": "35ff67ac4960caed3544800e07ce6d66",
"assets/assets/telluria_and_her_ghost_boytoy.png": "227d276af23eccbe01d0d8f8ffbc23cc",
"assets/assets/telluria_gets_a_crick_in_her_neck.png": "5b30da7a7e20892eb67688e1c0037038",
"assets/assets/telluria_is_always_good_for_bridal_carry.png": "7e0574c3ef5c273f67fecef3068dd5f7",
"assets/assets/telluria_love_yshranaaaaaa.png": "55c80428f58760a4e3744370be883eca",
"assets/assets/telluria_studies_mootmoot.png": "60c2393ed11c64486db676dee2eb57eb",
"assets/assets/telluria_x_vey_polaroid.png": "5d4af0b658c748c8d41be1f3bdc4f94e",
"assets/assets/TharinVey_MageYew.png": "fe12dc5ac6e409491d43fbfccd2f83e9",
"assets/assets/TransparancyVey_Void.png": "c723f814f40376485a99f38bf2701dc4",
"assets/assets/UmbralPath.jpg": "5b55e5440eb40bd7bf4b0002ffc2dad2",
"assets/assets/UncleJarl_MageYew.png": "0c143418be470fe6610e4b707850ad97",
"assets/assets/Undine.png": "cd4c9f2490dc90698c63cb714c8803a3",
"assets/assets/veyimmolating.png": "5e20fae5d5eac42ba720d5e5a4881667",
"assets/assets/Veymoria.png": "78a673c74f079f258b429fb8b4cf528d",
"assets/assets/vey_chibi.png": "4fb85779cc708c75a3f8aeed8a5365fd",
"assets/assets/vey_nakeygold_NOW_WITHRIBBON.png": "d664446b97550a1a7147fbca5a4a1b85",
"assets/assets/Vey_Telle.jpg": "e4f6cfaf619966e3c003f9fb30c9e073",
"assets/assets/Yshrana.png": "e247c615446fcd0b89633a69d63372d7",
"assets/assets/Yshrana_christmas.png": "387a43c5a99b5e387833bee08bf68bc5",
"assets/assets/Yshrana_Myta.png": "5207665c16cd3876b4d7f415205f2eb6",
"assets/assets/Zahahmut.png": "e99196004d4ba86c7d43f255300df52a",
"assets/assets/ZahDayum.png": "3627ef9878be6751f0aa0d29f039494c",
"assets/assets/ZahDone.png": "30d46aa4cefcb75ca2e86a558a77085b",
"assets/FontManifest.json": "f7df083f41451d5a1b8ce75108cf93ea",
"assets/fonts/MaterialIcons-Regular.otf": "aef84232cead15f418c57e323d1a9e45",
"assets/NOTICES": "602bebebf05477f368330e73ad597e84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/hugeicons/lib/fonts/hugeicons-stroke-rounded.ttf": "85511f0673daae174f9e9f28a9e0c86e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a6fc220947fd1f7cf41884ef39255dd6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e79303566edf6e5377a6a5e4a35c2bcc",
"/": "e79303566edf6e5377a6a5e4a35c2bcc",
"main.dart.js": "8fdfe18f7f0ac47ff0d308f29af70124",
"manifest.json": "0f8e794abb86976e480264eab1bcb435",
"version.json": "57fa1ed4f07f9dfad3b8c5beadd729d6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

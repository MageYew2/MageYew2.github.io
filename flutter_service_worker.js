'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "29215cc20ce87aa75dad85a7a1f0286b",
".git/config": "a6c2ef883c431e95e624642f3a5440f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ee2faa834c9a5df76821a3abfc787bcf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "48b065d16ba69b0712cc1b2482f0de9f",
".git/logs/refs/heads/main": "915863d8da9cb1a3d1a7b3fbf086588f",
".git/logs/refs/remotes/origin/main": "750868c0d8e86fc1b556723362e13942",
".git/objects/00/cbfac174d87410ab07c66f77b59e054eaabdad": "726c88df9bb56a08aef7d7e8628792fc",
".git/objects/00/f5948a880ce73b613c29bd7904b8655c4575ab": "cc9d989be11898ec57f2b0bbce53103d",
".git/objects/03/1e939258074c538064b36addf79a64e40066ba": "d963145b08e691e865cd986870cbf5bb",
".git/objects/05/6839460db8d331835e7c30531129adf2a5faee": "2cc2d6c045c5e0ed6572801ae392e600",
".git/objects/06/cacf1923a11b3abd369a60cd68ce2b13af6ca5": "2851340de1a5263363243c8d136e8da3",
".git/objects/08/385e20953f094ad2a6043dbf35abffbb16e754": "40011d4a783c40296d2b297dd3496265",
".git/objects/08/73716ec4d752ea190c2cc81fec60a1e18e3a2f": "f9fe6f9c47df5e1b88c4f75b2a32d523",
".git/objects/08/f1d42a4bb622e67888ac479e40301c598f0395": "d7535a680ee4f12042979b94d046bd03",
".git/objects/09/82c38f52696086fb2e5a9eb68d148ca573f822": "6c242fc91818c93df260a00fa0634998",
".git/objects/09/bb1ef28c843aff0120a85d8e21cab96cfee885": "95022c37fd5469418f0ae937c96e375c",
".git/objects/0c/0363c2e34d90afbf19122a3d84b3ca5bc5ecfc": "75330178931df77174028da03890ca9c",
".git/objects/0c/43982de39beabf02fd1b4ffa2f2509716049a2": "e3604ec0a9b6900174915c73b8eff430",
".git/objects/0e/a4266d8baaa1dbaf44f48086fdec6ef0bf8a3f": "e9d8d32245b68230ce5e3ce1013b1fa0",
".git/objects/0e/cd1589d952935fd80c4c18b162c5129a9ac186": "7bd88d9a1bd95b86538491e80f12eb7e",
".git/objects/0f/3692adbd58260a7fb057d6e0beb713d2fdc334": "f7f883558afebdf908bb90933f06534c",
".git/objects/0f/a79c3afda319c8c6d36ab052c9042b541d8125": "4df3ba126f34ff43b4027a1182442da4",
".git/objects/0f/cb21f480fee3051890243abee90f5de3e3432f": "ce66e16410c3725ce0cf0c573d0627f1",
".git/objects/10/0cc4816d6bd1c658a42e89ab9e35bd0833e4b1": "10d4011dc55bdf0a49f11cec70e570b4",
".git/objects/11/345be997821fb78720fc023cfd4b40f611e5c4": "fdc2f87159b7bf8d4cd48d83152dab74",
".git/objects/13/a9ae70398a973892a3ac37397055a044e4a32c": "0a21eadea2837d3ca7baceabfdef9a1d",
".git/objects/13/d1f0c53b0a7a4e5b2cecffb7aa954a07bdc1a8": "93691e09a22274ddf26aca6d52d732c7",
".git/objects/15/8064a17913fed76b0267674414934ca9a5263b": "a289eec191295ce212507db52c478fad",
".git/objects/16/f883531b9775ebe9ded363b3d599b907d7253f": "6493223b164a944c28d09f965b097e19",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/d80e630c35e0f8b7090ce39e16352b7069ae2e": "c29e02d53a4a941f2c01f07063bffc91",
".git/objects/27/2ba03eff1a59e4ae6fe8af53d70387bc901df9": "717b6114e9df880f3af0cf0beaa7755b",
".git/objects/28/4942935e07fc58a3b450af3358942221838128": "396f85de28ad0d41f55beed4996719fd",
".git/objects/29/25dbd818c540b42adc9284bd544f72b6ec024b": "7ae98e71b78f57c85882669c9df5adb2",
".git/objects/29/4c92e240da601db19ddc90efb5b67849b6d99f": "d5318f22a70070224414c07b6a3535bb",
".git/objects/29/9fc67b6b6b08269fee85ef617957cce6d4f8fe": "59b56d619035c83817fb1be7113552a7",
".git/objects/29/e46694c38855bac8de5622922be06e201393df": "a5afaa6f61801a0b0bf586d927cae498",
".git/objects/2a/e9d4eb7ba49660950d23a7f3351c567a1c6390": "28cb7ac60cfc522d75118053dfc6b447",
".git/objects/2e/7f08702cd3f77cfaa4dc2017667509d9fb7bfc": "a1c9b5938587e819279fe54b7955eaee",
".git/objects/30/20d4cfa0904ea1c20e1d30d324bd4ee646243a": "a3e4368fba29d368689aa89cbe83be5c",
".git/objects/32/34d867e40d3a3349681b3810ff06a163dee2fb": "c0e68ecc2717ea5846e6357a7e9c4a1d",
".git/objects/33/60c487b30d437cf32123b8a8b45007a7474324": "69cdd196f5625535a3c16835b70ddaef",
".git/objects/37/bcc84ac15d518620f147cb9f0ed7b5f471af71": "661639f3f399ad181f18d6136b32448e",
".git/objects/3d/124fc4bdc4f7bde54a33978b5fbd08b00c4b6f": "763fdcc0df58d38eadd9114441c13b30",
".git/objects/3d/8c3b55d4d2e6861c7bbf92f4b3905987fc3041": "3308165ee613511f10e930651d512faa",
".git/objects/43/424dd5bfa94ea64765876e4b4fc938e94642fe": "a14995d54d4997a1ed45a3f8f27d2436",
".git/objects/43/ea3e967580f451435c0c612f75cd0dc1d05c37": "9cd1820bbe9c3917cd05ecf5f8ba0c75",
".git/objects/46/ea547986039d2e0fcfe42411ad1ff96d5fae9e": "d2135888b8194c96c9a3cf23eddba8b1",
".git/objects/48/084cd72bed84e4aa6ed09b83c6d441872a373b": "42cd4d7df5204ceb92ddd003f928ea4f",
".git/objects/48/624a9556689e60e95ddf34310271cb0c9967e1": "1e7425943a0b7ee9c0550146e515dba9",
".git/objects/49/2fc0b67f9a2170ad9213a21bb160927b77f567": "93df5990979b485a46708921bbe00641",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/1a4245485fa25d528b292ca77f15c6390938d4": "d1cb09475902eb0b29d7ac1e5646a0b1",
".git/objects/4e/d7a848c01690d10dadb75a7c8cde7e6fd8c115": "3b44fd89e54ad1c40d8485fdf7367ee0",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/56/379f429e55ebbf5f42885cc25c52a376bbcd01": "309f2f725de525cd5388442a8c8c3afe",
".git/objects/56/7d260626c8ec15084ca7ef5c88f231e31bc3a9": "31060766ab48aaa82858b27937c1153f",
".git/objects/56/c776fdb41cdcbeba41aa3bce92f430d86a0c5c": "dcfd77bc7fee6cb4c1a0427678acb5ec",
".git/objects/5e/3636b6630ad918a0a8a65153ba53e3b3cbda4d": "a5270ca11c95e6efc7b74191c5762e2f",
".git/objects/5e/491599a4648118d99dc9709599a2f8964485f8": "e9ea7c9082209d27375c302ecc03afb9",
".git/objects/5f/24fbc3bf30fbc3c638efbfe62d14ce39aab6e3": "67149a6d3049308d1739af74a6152dc7",
".git/objects/62/5636d6634a6214fde5d6afd999d752c99f4c67": "c6e5694ac7a92654e62b3a3eb237e997",
".git/objects/62/becac4c2e9352ecf91ef128320191ca8b99115": "1566d34db96666b2b91afaf08db09116",
".git/objects/68/c0b2fa437de0f4f9bb1ad739d4a78295fd3e7a": "0643629cca2b57282b4ffe0604476c9f",
".git/objects/68/cb219d3f371fa7ef1230b1cfeab46896cdb994": "80a98b2b31858bb734afc06968da33a1",
".git/objects/69/287e9fb3b0aedd9f730b763e86798cfaabc4c2": "fe233b37dc9375b416ddfa5c90a2720c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/e4dc02e5a91993993a1449a7c9df4598b9bc9d": "b4e23102dca386629b0be29ff29d821f",
".git/objects/6d/2eb00add60a257ca2e561abbc527ed383bd090": "a0d5f733cb104c1ae265327c9316815b",
".git/objects/6e/0390477480df5180b7cea4cdf97ac85c8dbb54": "d6719f11c2595583c16acda37817d0cf",
".git/objects/6e/3e3271711eb6e31fe64fc42c34d376a413edb7": "37175b0f20fab1bf057522b1e14c33ea",
".git/objects/6e/a7a88af0012233a3a517e5036608f1c2a555a5": "9d38e0a925859706d754cce9e40cc18e",
".git/objects/6e/fea6598b4339734ef2f34df67edae0b4bb5c31": "6de021197591f615342aa888c4af90f7",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/59144fe883c1754a52731de5f3cb0eae946a0f": "54497500ba9aa602b05d2502efb496bc",
".git/objects/79/af7e0a3187a797a02393d5c0cf0441516a0b1e": "73d7ebee99853d16ce90b6d9a8e172c0",
".git/objects/7a/6b9a98b6504215978c6a76e56d718e0a899fdf": "0634cac704a93170214cc10a8638c8f0",
".git/objects/7c/9a75a59e8efce5d8de6b99fba6d07a8e81320b": "7b836d98391d635bab63f2bfb0f865aa",
".git/objects/7e/20401365bb29bfe42637e4d5d5d50204a91bb1": "af2124a41080d24bdb2b920468d1e1c9",
".git/objects/7e/88c7e873a94ec3e79ee9f333c8dfd4b1115a1e": "7078b38e78ec2946c0d9023c2715290a",
".git/objects/7e/8a687696496201b81e3540b08196b8bb499f44": "895ba296fb7c148f6cd27e16fd7a7e07",
".git/objects/7f/27dd64ff8b0ec60822e3cfca3282a06d787e9e": "20973ef40298008e4c1fbd818d5f75aa",
".git/objects/82/9e9eb589b3fd9a3250c5f801eb7efdeec1296c": "016830ab59796b6e425f1508a37685e8",
".git/objects/83/b7838fe1c7e07d9e73d153416746943db389db": "d728f4c48e938505790e6c8f426fe365",
".git/objects/88/3ff12c823de1a1352f478bceef8d38d6d5e4d0": "a182cef9e95db3a4bf40cfd80512e14b",
".git/objects/88/9fb02f877973619834e8dc36014cc5519b55bf": "3170fe9dc494929fd396e1e12c3242d7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/068548efa6d026999db9b583715be140a3dd1a": "3a63402657de141ef4a349427cdc6664",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7cb31b05aa558c4254f00fb0b4db34c38957f3": "0118a5509bd33591f698c87922945f25",
".git/objects/8c/ead801c4e4793fa8afde40bb6b31845e0faac3": "d5d82d6bf6c0c0d689aa088022118823",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/8b634ab1b1fecb31716b510e4d4042cb5eb40b": "01b0e9b9852858b9c71fa9cd1bfa1d75",
".git/objects/91/d20ee5ef2d571c870075cb1681d528aaa416f3": "3d1424329a87b1faa36c279a1f6c5bb9",
".git/objects/94/9b8c8c48aea24575948524a997437baa3ee5cc": "b2eab5aed8e98e7300718a97e11fa61b",
".git/objects/95/bb4b299130295c0452a8c2f0d0b0c2afa7f854": "9bd072115629997a779b190061f5a3ef",
".git/objects/98/691f37f1f5ec61bff61d655d6646011f903946": "b7e37c1594a2980f82dd6b75b830b120",
".git/objects/98/6bf5bde83e21af84eeef11878a13d6df45cf7c": "70a3d40b01d7b8aeada304b2053d8a1a",
".git/objects/9a/797d935fbce412c264c302e514e94bf5abc45d": "7c118d3e4455436f2b8963bee7166c8e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/709eff791ac338591ca5c8d1a15264f7f0c81e": "7849061b0585b92c84813d273907ea3b",
".git/objects/9d/a91d649ce412ad374f8a4eb4b120b3e04fe538": "71ff304a94eed989b565f85fd557be46",
".git/objects/9f/05911601efda96bbd00c96f5b4fb6b6ca41951": "e9a82dfc0afa5b41056424ccf5051ff4",
".git/objects/9f/11a81742f726c11e1b47d31f46c2430c1c7ee5": "0f69d3caa6cd83abf734bc818ff0be82",
".git/objects/a1/dd11cfd16160b1151f426c2ee84d151eef58a4": "a837404b379ad0efd825a571277264f8",
".git/objects/a2/6830c725495ca4cde76ed6f378231970d5c64a": "38e075cb7cd32f8403979712464c6b44",
".git/objects/a6/a99135c7bab31bed00691866787331c51e1a57": "2c087066a92f4a7d8f222fc2a117e5d5",
".git/objects/a7/274d50e30cdfe478e5223c5a95c89d3ea5c83d": "eee4d9e9f3abc84617ffd68631267c2b",
".git/objects/a8/0605e72d053ce7d461d283660c3979bee4819d": "5ffe6f355fc29f3be82f36e0d8b1609f",
".git/objects/a8/22a7ef26f42d5c0d4f225bae251b6065d4d7e2": "2ea357671276768b85eb79bc54e5d1ec",
".git/objects/ab/5e2fd9758f6dba79b36454b2079587f1c0ef3c": "808c2ef600c4166226aa0ab1f3774e64",
".git/objects/ab/9bbd1fe599baa81121aeae7814b6f71cfcb106": "3680c8a4c8b8e26ea84d3a1c1dd7fc61",
".git/objects/ad/44903be42ffebd74506948d11d5f56e7ee7955": "d9b3b3f4f2e44fba136d54dacb8a73fe",
".git/objects/b5/b0cbd9937b8309fbddd6a0e27682871720185b": "676b1501187d559027d9e7ae3bc6f1e1",
".git/objects/b5/c02f3004c44b86bea5ff7d39b19751704ea852": "8ff293eb0577c89fba56a17fb825e08f",
".git/objects/b7/23c24ea882e2854378a3333facaf3c36ae5e3d": "3176691b8a373f4b7773a1a6c0456791",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cf78aa2c64e3fa21039bbce7dd2bf3cef23e19": "deeaa83d8f323d8a4eaa545c25f1bcb9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/c8b95321edbd2554b1c02d9615efe83eef6d5c": "bec19d6dbd1db0481d3fbde742bbab13",
".git/objects/ba/43d1ca783812a90ac06ee0e7e4b9852985d8a2": "1968fb5ab6a2650667c035e1afb28f9b",
".git/objects/bc/7e278a5deb8c1a66b7aecfd266fdd8d02ccddf": "ef34519be46c7abdc3ff68bf69a331e8",
".git/objects/bd/1b52d3abe8a00586e7e2225fbe329cb830d92f": "4a129940c38bd20059a3bee296f2059e",
".git/objects/be/94ed1541e2b7131338d32c840cd87c3d13fd5d": "68fde14d52e185a5f56e4df2f3521610",
".git/objects/be/c5ecd3eddc18465077f9783cbed51a4e943b2e": "8d2fa4981a3790c5db1a741d5388e879",
".git/objects/c0/0c44ff147e8fd5b310537d154368e89f7cd699": "c70854027903b3fff225ce1af2cd4ed9",
".git/objects/c0/46d8c623301fb6d1906733f317ad4c1376beb1": "1ef840e54866ff0da1ef0d10a8183af3",
".git/objects/c1/ab83090ac30750505a4ea009168a4945117b90": "357b1dc75ea08aa0c14f6daf16de1417",
".git/objects/c2/43bccbb929d2f82585e7d91666f463088de1aa": "baccab65148c8315d3a2d0d7240d2eee",
".git/objects/c2/f4efc1ea783d404330dcfe2562ce9687676b4d": "96ad5fd4688a7bb434808cfb443dacb0",
".git/objects/c4/40ff0b92b4e01dd3ef570539cc90f48a94ae8b": "7a430d1d7d5f29762aeaea93f8fd344e",
".git/objects/c6/01f2ed0057db01e53a0a6b17f40b50df35d805": "6e62f3c9abe29483b5f2672cf1ece2a2",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/e69e1137f1d50dae2101b232e2a26d6e238afe": "8193c9a50f014d6ed26c659c8e905beb",
".git/objects/ca/9e7e3eaf33123cead5a58c58c93ee78711434c": "534a4afd1955e33b08d5845a27f47612",
".git/objects/ca/d38d33035a5002a77c3a4bc813f0ce68683e63": "3c2d8387ffb3b9a74309ebbb4ced1f9b",
".git/objects/cc/dfbb7a24e8826eb4698555b2eb8fa624669973": "cfec34d9726784b415b82b8d2a5188d1",
".git/objects/cd/bada9006b2f08253637ea00f57f681aaa29f7a": "cbcae5f6530e9e3524c45c1ec2f6262b",
".git/objects/ce/27d1e7a36fce0ef5cd9416018ee533aca19316": "544f5a4fe270b17ddfc1e0f5f0a91975",
".git/objects/cf/72db5a9a472e403f9d6fb357752f2076aa77d2": "ce339eda10d1d744450be3e8d6310ff3",
".git/objects/d0/ab6d476a791b28b3359aee5c0e81e91e2c0611": "7e960e294e3b80fdc3ff0fc7f5a3a71c",
".git/objects/d1/b37330989f05cfdbe06efa68f6337103462b85": "5a68739f247217a82b0636ffcc4f11bb",
".git/objects/d3/812692e57a23d84e080e2ec96c7784337245f2": "aec209db43add55b64b4f7d9d046d8b5",
".git/objects/d3/a35cd047d01a0bf3dc693f399d2f904ee873d7": "93cb5c4a43935998848a9bba0cd36c7a",
".git/objects/d4/25e575bc4746e4a7901bad17f967c83f3a2a1a": "95c139b05cd8bdbb6c82ecf1f7374543",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a2faa866bfd8081436889e5e62bb0793d8b223": "121b436d95ce03ef0e75d7029c3c2c59",
".git/objects/d5/694d6cfd1730c97ee20fb53b33d1b678f41119": "b5f7e6846e17c80ee741a5a96214cd3d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/eea7137490f492dde8aa391dd30a5928d64c7f": "d4c835cbf978516cc856ba5831204b4a",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/307cffb8cdae15b1fe96eaf905a4afe62fe91c": "9b54b4810627c2e2c3d5810addbc525a",
".git/objects/e1/89c01ae39e9cab42520067065026c1bb5dd88a": "31f92a5e88c00114be258980923fe1dd",
".git/objects/e2/63da281941fc1c8cbfdbfde85c3e7f8e7de9bd": "b9361a3bd6d3a0ff329d96ebfe5feda7",
".git/objects/e5/a02d8b559d7d90fcbfc5d8495e04168e146400": "7175c10ad1c8fc64d4b74949188fa324",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/689a5238abab926a72fee749e414c88552d041": "65f28a13e4635645f588b4c1a667f4f8",
".git/objects/ea/b40b19268c08140ecfa20112cb41a257b4ebf8": "775ad390f2ef08ad379284d5713933bf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/12f619a665e0da6a0424c43dfb95c0436cfc1c": "f70b9eccf17e618bb542a5e104b410b6",
".git/objects/ed/1955e063146cd453a2b5b9c5d3d9bb9aa1199a": "b619a59b0aaf126dd62dd2f1f2924d4b",
".git/objects/f0/7dcad05325fd182d088244f15b188868912222": "3972b12ace87ecf17fd3cfbba7ef50a9",
".git/objects/f1/aacf2fd1f246c67a047ac482b191a1d64bf6c4": "12c08277b1e9879e72039f5e5f8ff1e7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/95c0a078556fe53143d173087687570d830c87": "ccfb8bf8a23ff769d9b883b1fb77deec",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/cb95a9ecb54c101f7e24b97509bc5d97e4af88": "ecd3d4417995ab5619d4a0a81829dc3b",
".git/objects/f8/b7bcdefcdcc626cf406ea5457d7e1e034f517d": "4970bd2f7b7fae062f45b610b00172a2",
".git/objects/fb/0edca9aea719443074c1433a5ea70934595674": "dd3f6872d01f075e3c2f734b1eec9325",
".git/objects/fc/76ace8a944c8fad1efb36958ca5d8582df2b90": "9f7018e45ed7709db6d1e12d6ad947b8",
".git/objects/ff/5f07eb66f684b4bf2c0fce4213fa3e81b00c3b": "8b81613ac1a8fd669a8bcd357f0ea715",
".git/objects/ff/682e5ef1794291a87744c52704205b20f26e40": "ebb3f09dc583fa709d9894f07571bc28",
".git/refs/heads/main": "ddb4b9208f1f22695a281aae8aafe16f",
".git/refs/remotes/origin/main": "ddb4b9208f1f22695a281aae8aafe16f",
"assets/AssetManifest.bin": "2b954059d1a9796d6c02395d444f49e5",
"assets/AssetManifest.bin.json": "e746d61857d78620c9e906a087f3d669",
"assets/AssetManifest.json": "0e0bbb9686680f77baea4db29ecba36c",
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
"assets/assets/Betoverens.jpg": "31dd595754deb5981f6ab1a473a0ef4f",
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
"flutter_bootstrap.js": "7947c56c236d7076402d0695a6452326",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e79303566edf6e5377a6a5e4a35c2bcc",
"/": "e79303566edf6e5377a6a5e4a35c2bcc",
"main.dart.js": "b3f27e76c117ce152aa99f8a7806cd50",
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

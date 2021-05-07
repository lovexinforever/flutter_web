'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6d85168016f4814f4228f583538a0b19",
"index.html": "f8ff13f786fedb06d37e5761588381d5",
"/": "f8ff13f786fedb06d37e5761588381d5",
"main.dart.js": "241840c83629fd140609c5fe39541632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "997465669e8fcf23092b05984e1a82be",
"assets/images/gift_alreadyGive.png": "8fb468161da2b063f3db03b97ea50189",
"assets/images/xxhd_jjks.png": "ad053250a8d608729fa4db3e626bec5a",
"assets/images/icon_message_subscribe.png": "026d4b135687f942b7416079c2e27b10",
"assets/images/wdhhr.png": "9a45cc6c28ff03bbd93fcaf7d15615da",
"assets/images/customerUp.png": "a1eaeb1f5e29eaedc52997c96a7c9ae3",
"assets/images/new_comment.png": "bd23626144271c5fe43e761d2a223945",
"assets/images/dianzan_selected.png": "25615e6002f8224be66cf2996b86f0b2",
"assets/images/icon_arrow_right_more.png": "3d77f7655aa9c58b0cd3d64eb0514a45",
"assets/images/icon_lock_grey.png": "361f4593439deb5630ca8f459c5295e2",
"assets/images/my_lv.png": "497c518d3c29c72c1d3baa2a9144e751",
"assets/images/xx_icon.png": "48bc1d3a2f6db2ba018cc89156ba76e4",
"assets/images/login_phone.png": "5c33bcd4bceff19099c1346cdcb4f53f",
"assets/images/helpUp.png": "a0696eb95774e456833a1a747f112f46",
"assets/images/tab_new_found.png": "1a7b37b45d86b14223b878f01e4e77ec",
"assets/images/my_gydz.png": "e05561fc8707d09bbad935861db8c6e2",
"assets/images/wdyqyl.png": "7ad6756fdf355e541dd1d824aa1bbbe7",
"assets/images/easy_qq.png": "68c19b05ad9fc9203cb3a2e0cc488c90",
"assets/images/icon_split.png": "4c89ce834dbbc5146eea746b2cdb5b23",
"assets/images/icon_play_white.png": "95d8e4b30c3ceef6c04e20b918043a74",
"assets/images/hhr_yqyl.png": "3b3eba26b107ff2280ee2d00a9a27edd",
"assets/images/icon_wx_pay.png": "27ebd2d665b7eea682da6f4d34985e04",
"assets/images/my_select.png": "191ca6cf4c857a2cf1c409c8d3a8a047",
"assets/images/circlrShare.png": "d32e5fefb9434ed00b5ee4500352be38",
"assets/images/unshoucang.png": "2e6ec5a2bb5f187a2631c0dfe74ed282",
"assets/images/gift_unuseless.png": "3e5507d854079c4f797dd9fd4c9ee9ba",
"assets/images/myMedalBg.png": "38c5fdc95f689b5e2c7aaa9a8ee44495",
"assets/images/icon_pic.png": "e50e9f93d10d1c3be02e120d47e61b93",
"assets/images/icon_comment.png": "518d1117be9ae265dd2755d35cc39cc8",
"assets/images/xxhd_ysh.png": "7278d131acfd2f0ea37a1d0c429005fc",
"assets/images/icon_share_black.png": "77ee27f9337b2a6f3cab44d5f6d6f4e3",
"assets/images/my_yqyl.png": "7ad6756fdf355e541dd1d824aa1bbbe7",
"assets/images/my_lb.png": "30ef4b65e30a206c8f4d9f7e0aaeae4b",
"assets/images/dealMessgae.png": "6ef4c10255e1b9494c743ecaae930f8e",
"assets/images/icon_mention_all.png": "e06bec3a80f74839816c2147935d44ac",
"assets/images/teacher.png": "ce03fb5751bdca225a8c97841e2dff7e",
"assets/images/signed.png": "40d3a6ea6d1385a43fbc3bd6d7ea2430",
"assets/images/detail_like.png": "0f00216f56d2c79173fce91e8cc66151",
"assets/images/photoBorder.png": "576a37b3d3fa7544ab7b1e6fd2342a03",
"assets/images/icon_listen_grey.png": "6c8bd7b880e541eaa1a2f33dea9114b0",
"assets/images/detail_collect.png": "4ef14fb02cb1d88d3ff87b9a7b5855b6",
"assets/images/my_arrow_right.png": "f8b0c30add9eff787bead4fe38a44d6d",
"assets/images/zengsonghaoyou.png": "a22d4ac2049e4e587ed62337c81bd4ab",
"assets/images/page_nan.png": "e2e725a64b26b8419a4b252e9d4aab54",
"assets/images/my_hybg.png": "96855bd66583f77a0a431926b60fbee5",
"assets/images/elder.png": "57da6132fabbe7836e3396fb2923bfc0",
"assets/images/chongzhihuiyuan.png": "8711952ecf10cb19abf95cbd22249b23",
"assets/images/user_clean.png": "4dee69aace919644e50cc401d8f80c49",
"assets/images/icon_author_follow_grey.png": "cc5e3a4b30156014753ddb66235c54c4",
"assets/images/icon_bill.png": "fee767ccc4033a7b61501ea210553edc",
"assets/images/icon_search_grey.png": "e8125b8cb8470b524c62813a523a558a",
"assets/images/icon_keyboard.png": "dcf278815f0b7a214c37df19dde7a959",
"assets/images/hot_bg.png": "460a4b8d808727a21b28df9e9e07f98d",
"assets/images/xxhd_shz.png": "bc53e0dffcf3598f041d70eb444106ad",
"assets/images/biyan.png": "ec01bc926b9bc8ddda5c16629a961084",
"assets/images/fire_fire.png": "8c7d561b555a4e30c96c231cb705733e",
"assets/images/lipinka.png": "8957f9f6397ee12cd72a1af12fa818f2",
"assets/images/icon_bg_select.png": "5aa5ad8940e439da7d013efcca3f27c1",
"assets/images/signInTop.png": "84c62dc8c4468a67eb51e9338a057117",
"assets/images/product_wx_fx.png": "7297674cac3843443b5372871e4eb37e",
"assets/images/community_normal.png": "de45d2d594c3d29ee94fd45394b7dfa0",
"assets/images/icon_topic.png": "894ba5c57f4aa4b6000992cfecc7517c",
"assets/images/member_recommen.png": "be6e587b7a5a9f246772f10420c3cf82",
"assets/images/home_select.png": "183502d70102937157e6a3e9b305f883",
"assets/images/test.jpeg": "3ef200e1d5f7dd1eeaeb60eea63a7c54",
"assets/images/icon_ali_pay.png": "a6e1d94073a5428cf2b2e9b4b8c31734",
"assets/images/grey_base.png": "7ca626fdc8bd11b63d34c8edb8fcff40",
"assets/images/ebook.png": "c749fb1654325e04b9de1aeb6f32d2eb",
"assets/images/bg_ranking_list.png": "852285f56a6e9772dfc570dc3dcee10e",
"assets/images/icon_comment_grey.png": "26f6a5900542c41616ec1226e4d33607",
"assets/images/icon_search_grey2.png": "1a8ad68257782e28f8164a2771e2267d",
"assets/images/helpDown.png": "abcf41c96bb7eb44ce3f52b4f51110aa",
"assets/images/hhr_dzk.png": "53ac4e9720df346b9e64c250ebcd8f0d",
"assets/images/icon_dz_logo.png": "9121b23f1cd31432a1013e02366d2977",
"assets/images/like_normal.png": "17df58e13e72b04ada6b795b8718827f",
"assets/images/page_nv.png": "3efe46c04a06e3eefd119ec7e6e4f8f6",
"assets/images/icon_arrow_up_gold.png": "fa732a187e33a5626ec142164664b72d",
"assets/images/icon_voice.png": "3217853e968e5104c66ebf359bd7a7a4",
"assets/images/browser_br.png": "dc7b61ce7829a53218e572bb4413a128",
"assets/images/signUpBg.png": "f3441b470792487f7ff92d8f8a370396",
"assets/images/fire.png": "10f2c38143eb67bf8983748717855dec",
"assets/images/activity_singup.png": "97dbf99cc5e88217f2e8a9083cdd1708",
"assets/images/icon_unliked.png": "fa272baec4ef50f3e7cd74af19096391",
"assets/images/icon_chapter_list_select.png": "219d5eac278ad28c58ba3d4eea436adc",
"assets/images/icon_position.png": "94719edd3bf90452e26026841f7865f2",
"assets/images/icon_write.png": "ee4638a9ae7c49aff564d7758efe7962",
"assets/images/icon_play_cycle.png": "5a1f1fa45bde03d0d332ebb45e9d95b5",
"assets/images/wx.png": "23dc1291c80e6f17504c606ce9ab5a5a",
"assets/images/son.png": "ccc20431618ea21b74c054fbc10678e8",
"assets/images/leader.png": "f8292113bdb6eb34d3141a09fdc1c13e",
"assets/images/my_xxhd.png": "de8dd0cac1193e6bc24d3194bc29dfd3",
"assets/images/product_pyq_fx.png": "4a6c98e7a38072671b9524abac550263",
"assets/images/vip_empty.png": "49e1418df7573fd408dfc9bc1ed44ded",
"assets/images/selectBorder.png": "e1fe4567d83134e9df561c93397018ec",
"assets/images/icon_message_comment_reply.png": "8676607b3d08887625bfae0b5e3b834d",
"assets/images/icon_audio_pause.png": "2e8d88465972363651eee43c0e779fae",
"assets/images/like_select.png": "00fa99972a5a407fa0dd841e5f896247",
"assets/images/icon_subscribe.png": "82913eba36a02cbfa63e7e641eea8b5d",
"assets/images/noCustomer.png": "51f7e562495c1b71c572a98254d27d2a",
"assets/images/xiexian.png": "5081b6e631b846a8acb5fcaf24b93592",
"assets/images/whiteCloud.png": "a380438f175d4b0b763a81955df97932",
"assets/images/my_wddz.png": "cb82ecbee83bed9b596139f643e8440c",
"assets/images/customerDown.png": "12f7b120852a0861cda6cbe2fdb56f5f",
"assets/images/01.png": "30641073dba45d946838c9f21c7a32c9",
"assets/images/icon_refresh.png": "f0fa0c0f0decdb54e939365009423335",
"assets/images/icon_chapter_list_normal.png": "81d2ccd59a19b48b677f4f0681a5ecd4",
"assets/images/icon_write_comment.png": "8787bd26e192cd5662ad2372a19003da",
"assets/images/messageShare.png": "108e8c884930298c5701b522642fedc2",
"assets/images/arrow_right_grey.png": "f962332e0afeb04bf23494fdb80c26b2",
"assets/images/icon_think.png": "d385cd7fba3b9761eee1a1029a0742ed",
"assets/images/03.png": "55a9c4165aad37ca06a47f75e5bab2fc",
"assets/images/icon_date.png": "a4214d82d57c7fb4a15175b05d57014c",
"assets/images/circle_arrow.png": "c230c8ae29402ef5f39dce751aea82fb",
"assets/images/wdwddz.png": "cb82ecbee83bed9b596139f643e8440c",
"assets/images/icon_close_grey.png": "4f2494fce675342d3c568c52b12053b8",
"assets/images/login_back.png": "2277db75f81e50def4a1762d9fabcdeb",
"assets/images/detail_share.png": "82fa32ae69cca93d17a88e5673daf2ae",
"assets/images/icon_share.png": "f836c1b7376071e769378b68dcf1ccf7",
"assets/images/icon_wx_friend.png": "e1a1772f4ca3d0d29d8d8ff717d3adb6",
"assets/images/icon_single_play.png": "452f079d6f235b33d1c46cedf5ff2485",
"assets/images/noNetwork.png": "acd1fa50497772735894a06e4d1b3774",
"assets/images/xx_place.png": "aa47918f85e35d51ac6239c60842f248",
"assets/images/home_normal.png": "98e7856eddd6a16804029f4af830a57c",
"assets/images/community_select.png": "21f12474151359af5afdf04618651e85",
"assets/images/icon_bg_normal.png": "12bbb9b36a8db1d99633caa986b973c2",
"assets/images/wdxxhd.png": "de8dd0cac1193e6bc24d3194bc29dfd3",
"assets/images/02.png": "0bedb93bf8be184688194b5f7e4ba9af",
"assets/images/icon_list_play.png": "4489726e133e2b08035a7d1ecd573855",
"assets/images/colleague.png": "d0ee7b96fd0dc09d5c84eec208687446",
"assets/images/icon_play_clock.png": "1db71b7d94fa72237ba49db1d2fe2a00",
"assets/images/my_lpk.png": "a3afec0ba9a51f905b0f07e407973a2d",
"assets/images/shouji.png": "60b4c0780669f6d4daccdbde14c9d346",
"assets/images/yellow_base.png": "7dc204d47860f6a274e94e3587898ceb",
"assets/images/weibo.png": "f835efb987c003999311abdeaf9a009d",
"assets/images/icon_qq.png": "80ccdcbb029b3f5297de0a031424be31",
"assets/images/icon_article.png": "4990d9cf15d5fb262d75bab82e1d219c",
"assets/images/tianxianBg.png": "3ad4c52c9b1c0fd23c72fc4622c7d4ef",
"assets/images/icon_recommend.png": "2a2b9ce10719334045a1a06fbf79adea",
"assets/images/06.png": "234ee49b7b2abbae376a03863c962ee1",
"assets/images/icon_audio_next_15.png": "fcefef6d73408d25cafb6465cb19d61d",
"assets/images/icon_listen_orange.png": "a8bc282650634e7bfd398e6a662b69a0",
"assets/images/noMessage.png": "7dbe5f63c1661a95aa19e431ae8a024c",
"assets/images/wdwdpl.png": "9428a222b3def0712b5c5e6bd1e7166b",
"assets/images/icon_author_unFollow_white.png": "45be570f9b5796b2fbcc5e744bf05a3c",
"assets/images/hhr_hy.png": "1b30878ba2e31340706bceaa1557eb52",
"assets/images/circle_ball.png": "17a7d0e26f334c27cf62477a36883963",
"assets/images/icon_pause_white.png": "d462f441e9265ba641c92ff65f2e9862",
"assets/images/my_sign.png": "ffd5e7787d013e88c7eb47554f6ef586",
"assets/images/author_detail_bg.png": "2f6d06664eb508f0fc6f70094155113d",
"assets/images/icon_photo.png": "7526e8c39850cbd23dca2a404da46651",
"assets/images/new_like.png": "d8b1b3c475649095c8bd291f008cca61",
"assets/images/saveShareImage.png": "8dce8b598f962c1df583ef1707c6703b",
"assets/images/leaveMessage.png": "16a78c4e8e698ee2336b965756c69dd0",
"assets/images/hhr_mrtx.png": "b844551266b20b3ac840cad495355cab",
"assets/images/05.png": "7cfb3a08a399966f48e42aee3ea4ed80",
"assets/images/my_yjfk.png": "2a08e0a38a8acead5ae08782bff15c53",
"assets/images/icon_system_tip.png": "dc706ba673375e1dc642c1a68f80aa27",
"assets/images/yanzhengma.png": "34d3de668d7a524f0371dcae7530fd7f",
"assets/images/noResult.png": "dc612b4ca47b939695732a2ea0ca1969",
"assets/images/my_vip_log.png": "03452897ec8a3ee909cf892c28bba5ad",
"assets/images/my_wdpl.png": "9428a222b3def0712b5c5e6bd1e7166b",
"assets/images/icon_author_unfollow_grey.png": "42d33198168a0f2cbbd95260016cd8c0",
"assets/images/xxhd_wtg.png": "1e5f4186c55434856c3566f7fd11eef8",
"assets/images/praised.png": "d9f5b1a2f1448a17eb04dffc67da040a",
"assets/images/ic_audio.png": "4c08ef1ba519cf8817952db1b2d09edd",
"assets/images/friend.png": "1c11bc724b216a0d3b4355ae7b12fb14",
"assets/images/my_normal.png": "ddbcc49860e07f91958d922c8a6d6e3c",
"assets/images/ic_clock.png": "809b43117ecc822d3199a1520e2bee14",
"assets/images/04.png": "1f9980918e327f68037510e00536f5d1",
"assets/images/icon_arrow_down_gold.png": "75135ea6ed91ab777f0cd7501ea47fae",
"assets/images/icon_eye.png": "ea4f3c5ea930d27d9117f1c5ffc67ec2",
"assets/images/un_select.png": "f53d92d11021cb69d4678e4a20e2d089",
"assets/images/zl_zldd.png": "5a3f9370907ce2f02ef3e1d1d3b948b5",
"assets/images/selected.png": "c6bdc3e95e31fb21a7f8604bce6bdf9c",
"assets/images/cityAdd.png": "1a651901f63918fb9c53deaeee7444b7",
"assets/images/icon_clock_grey.png": "9bfd7b46ee2789433cc473b4c4ca1265",
"assets/images/new_unlike.png": "112b505ad25b4341ebdd6e5b127a0ae4",
"assets/images/search.png": "e8051469309dd12b87a0a3b2dd6ca245",
"assets/images/found_circle_arrow.png": "c230c8ae29402ef5f39dce751aea82fb",
"assets/images/officalMessage.png": "edffef9c72e0d2426338f0bd9cd3c953",
"assets/images/icon_book_white.png": "cbae2864728d4115f8954a50d5f41fb0",
"assets/images/left_voice_3.png": "a6b379599ddab104fd36b3c24b3d9074",
"assets/images/photo_black.png": "1b876635bb0223c7d7997320d821d9ff",
"assets/images/topbg.png": "068db2cd52a2e35246b99bcaa83d48e7",
"assets/images/xx_date.png": "aed699d9f1ec472f69d99eda70e1c7ee",
"assets/images/icon_eye_grey.png": "d0e4f2a5e6e89eb4ec8e282aa13f3963",
"assets/images/spfx_placeholder.png": "adcd19e4baed08a3f0c37e741b6be817",
"assets/images/ic_more.png": "fd3696c72b2b55d521e1e2c0eaeef37d",
"assets/images/icon1.png": "42ae35c925767d7a4eaea33ba29c4580",
"assets/images/my_rl.png": "23b52b2e041596752608077c92f981e7",
"assets/images/icon_audio_pre_15.png": "5a732eeeaf8fcf834d6a25bf8260444f",
"assets/images/contractPhone.png": "7a900ec0f3527a6721bb1ba18eae8c40",
"assets/images/message_book.png": "c962560cbb9c43c6a90a8d8106f8574c",
"assets/images/icon_clock_grey_2.png": "0c251835845afff9bda8f86779a5578b",
"assets/images/apple.png": "ba3e2d7457e8dc82925a35d472e12bdd",
"assets/images/qianbao.png": "e3d89db990fdc4dfd28ac469fa60d8d9",
"assets/images/left_voice_2.png": "8dd5ad90be21af7f1081cd4eb3fe7b5e",
"assets/images/icon_play_black.png": "d7627d757d4c7120883d8c90414d618e",
"assets/images/message_delete.png": "3015a72c53b7ba05b3083c4eb9724965",
"assets/images/icon_font_select.png": "7ed324ae5365b4de758b105a84faa866",
"assets/images/id.png": "3b11972652f5bdbf0d907e338145a133",
"assets/images/password.png": "7c3d19e73f5974dd77f2211cf381d44a",
"assets/images/icon_liked.png": "2b63a39412788f7847dfa349ebe97043",
"assets/images/circle_more.png": "293374f7c461773f807867cc07565250",
"assets/images/new_share.png": "2ca94c4c3ac86e43f74223aa6e35f8c2",
"assets/images/growup_normal.png": "1dde53561cfdeac8503daab3a62e3308",
"assets/images/my_qb.png": "505c1b3559fdbd08a011092c368a745f",
"assets/images/my_scdd.png": "6843d95a167e363af0fb48ea5f046a60",
"assets/images/method_select.png": "1cca095fe594b35d6cbe3a623325c6de",
"assets/images/date.png": "c886a219c08753538ea688fff8c942e9",
"assets/images/hhr_wysj.png": "c7b4806a58b3936ff942c6615f8ec703",
"assets/images/icon2.png": "182dd354579653e3e180c60d90a14746",
"assets/images/course.png": "44f7b7acc86b86235adcc85e5d8b279b",
"assets/images/my_db.png": "c05dca9467edc96044b962d417dacb58",
"assets/images/my_kcdd.png": "6f16b68cd25ffc76b044c3e21c06b779",
"assets/images/my_dhm.png": "09061f6acc067e66d3f31b9ef022d078",
"assets/images/icon_play_list.png": "08a897fab871195aa99a1ddb2ba39b5d",
"assets/images/easy_wx.png": "9f160c1afe32f1b9009f0836ff31c288",
"assets/images/dianzan_normal.png": "80231592ee8637f341b29b36adebfddd",
"assets/images/left_voice_1.png": "046af9b5fbf06a7dd0e30136df1073bb",
"assets/images/xxhd_jxz.png": "bf6496d1bc51a188ebee6510640cb8e2",
"assets/images/logo.png": "13041d18330456f3adaecbe9c1fd18eb",
"assets/images/icon_activity_my_unselect.png": "9f57fb5e7dba83fb5051e354636aa2d2",
"assets/images/qbbg.png": "2109b9a29b0c449974e09e2bcdf96b6f",
"assets/images/icon_location.png": "690a7a2fad618cbf7cca0e89f136d223",
"assets/images/icon_zhengyan.png": "f79c79fd3fd26ac2a2b081ea6eb27825",
"assets/images/noResultDateRem.png": "48d5c2b2df782d57acef8ca5f5420fe5",
"assets/images/my_newyqyl.png": "10e026078994ba6f7f56920799b2fc3d",
"assets/images/hhr_tips.png": "7a7797a83c3af5551170469b66edd6cd",
"assets/images/icon_author_follow_white.png": "6b369c35783ab252303d0731ede090b3",
"assets/images/icon_like_select.png": "468cf13fff9cf922b05aaca928b32109",
"assets/images/my_lxkf.png": "33ff3f1a76cab53a2933be1c5d4be527",
"assets/images/icon_search_black.png": "0e5253a5aa58463073c9a9fa6cc36f35",
"assets/images/icon_activity_all_select.png": "3143a9cf10e6802ec16e294d0e15a76a",
"assets/images/my_hhr.png": "9a45cc6c28ff03bbd93fcaf7d15615da",
"assets/images/icon_round_select.png": "b0da501370953d5c71d719b805dfbede",
"assets/images/photoDelete.png": "f5706abecc61d7207b212aa7b573d804",
"assets/images/comment.png": "2d18664af7e7ad40a815c72074c8821c",
"assets/images/ic_launcher.png": "b99aa3879369a49613f295dc138c112f",
"assets/images/tab_new_message.png": "ca9b894b16486c1f776d5a0cc23a9a2a",
"assets/images/bg_book_status.png": "afdbbf28a6c90df4a6870a0efd8abcaa",
"assets/images/icon_play_speed.png": "25c1e38599dfb66cc46556c81fc1a08c",
"assets/images/comment_share.png": "c816270cb14224e6eae290b2a506a18c",
"assets/images/voice_volume_7.png": "efea8c723a364cff49734a4ffd8717aa",
"assets/images/icon_audio_pre.png": "adebe213f6a5da03d641f965a536327d",
"assets/images/circle_chat.png": "e346d1fbefd26d7f18fefad8f9707c4f",
"assets/images/qq.png": "d8d6dec179cab0b94ac400d5aba50fcb",
"assets/images/second.png": "ab1c766ce45f612d26403f885eaa8eb0",
"assets/images/weixuanzhong.png": "595575ae1b67d1e310124f88b1baddf3",
"assets/images/zhengyan.png": "f44f40c14f6ac42745ea6350bb9444f9",
"assets/images/new.png": "0553fb31897eee461d59a47634544314",
"assets/images/contract.jpeg": "4654bdf8ac5aa93df173a34fe0b0338c",
"assets/images/hhr_tghy.png": "790b451f488d82ce016dc4d45c12ffc9",
"assets/images/hhr_tgkc.png": "b94da1ca41c75f6aa6cd478c02b01fd4",
"assets/images/noResultDateSub.png": "8e7fd024ee93c5cd45683d8678785245",
"assets/images/product_placeholder.png": "591eefdd8b1601e9e1f34ae6682b9193",
"assets/images/my_sz.png": "ace4ac55af31e1f5f56ba4deab7bd769",
"assets/images/icon_activity_all_unselect.png": "dedd163c67d368be7ae66b2a0cae417f",
"assets/images/icon_camera.png": "45a3c0f4d321bf260d1bdf1e2e7d1bdb",
"assets/images/noSearchResult.png": "626e6ea58ccb89c2bf84d59b4a67e22c",
"assets/images/icon_rate_select.png": "ed81743a14e131942ef51ac9a13fe300",
"assets/images/clock.png": "1f8ca1594bc73b6cdf03124399c7b329",
"assets/images/audio.png": "136bab5ba7b0397f9eb19bf227962e20",
"assets/images/icon_comment_orange.png": "2bab37e1bd4eebd03657b50c974ce534",
"assets/images/circle_qr.png": "b3384235e9be6b98f9f77262b6f31c7e",
"assets/images/inviteArrow.png": "c3885775ce28099eee5c4f7f1c69ace8",
"assets/images/hhr_ljjl.png": "b889fbbef9f57ab325bfd3aed7a7c8e4",
"assets/images/hhr_ljkh.png": "beb85c88dccec7fadcd31e9a044e55a6",
"assets/images/tab_new_my.png": "394b8b1c4bd1ec149d47efc4fabbc4f5",
"assets/images/hot_hot.png": "103113210bf5abb3c755b61a5dadd697",
"assets/images/icon_course.png": "fa3e9f85b5ecbd76bd9bef91a9d4b803",
"assets/images/circle_add.png": "17a26aaf566e7edd92e4f2504863bf10",
"assets/images/tobeReviewMember.png": "fac08c80d0375197b272aa898dc7ac41",
"assets/images/liuyan.png": "c626815b1b9309007d237d5ff255701f",
"assets/images/icon_book_primary.png": "e60f2074d9b58ff0440e143ae13331a1",
"assets/images/icon_group.png": "9d58874c9ad6c4d5cc70001f24e0756d",
"assets/images/huiyaunduihuan.png": "f2426f88672d483869640993560c4b7a",
"assets/images/search_add.png": "dd0b16ffb4b71041ee2afc4096b54aad",
"assets/images/icon_biyan.png": "5786555493d50a42c7ba68835cb8d9ee",
"assets/images/default_post.png": "2374607d13c87152263dcccbd793ae47",
"assets/images/right_voice_1.png": "6e69d304a451081b0f12684f3a4ce0d6",
"assets/images/icon_audio_next.png": "d73e6bec952f8c2f05139691583ca535",
"assets/images/my_wdll.png": "2f856caad931ccf952865fd31fd93b84",
"assets/images/icon_rate_normal.png": "63d4eb9cd93b73359a9d7bb38397a937",
"assets/images/icon_current_position.png": "3da2650605e579b1b5cdbe4b568e8acb",
"assets/images/blackback.png": "25a44fbb0983c06d76e8af23bc2cb0b8",
"assets/images/icon_wx.png": "7cccb58ce5a5383b469e9534c66d6807",
"assets/images/hhr_ljdd.png": "8fb4819757c527a0c33cb4fb9ba1d01c",
"assets/images/my_zldd.png": "248e78079e9cf9423075419baf151c5f",
"assets/images/icon_back_white.png": "482268c55e77330a8a6635ef59fec841",
"assets/images/icon_select_right_bottom.png": "616f62c1bcd2f0ae354df6c933d06414",
"assets/images/icon_like_normal.png": "8916c3388a0a1b8de904c505b34f66b9",
"assets/images/workWechat.png": "4d252229c4dfa4b67b2de32b2c5ab99e",
"assets/images/found_circle_add.png": "d167505564c32e4ac5d0a4adcbb2220a",
"assets/images/circcle_add.png": "f93991bfcab0b29e3991e81668a8458c",
"assets/images/wdwdll.png": "2f856caad931ccf952865fd31fd93b84",
"assets/images/browser_comment.png": "4159015a1143ac5045874bb3e09114a0",
"assets/images/signup_report.png": "01ec75fabafa69cffdc6a084fe933039",
"assets/images/right_voice_2.png": "e554bc2ef8bdddcdd5e1f0d9779cb9ff",
"assets/images/right_voice_3.png": "8233d43302be8b38193872396d415714",
"assets/images/whiteBack.png": "5c81ba2e5dbc81272e13f87907f95bb0",
"assets/images/my_bzzx.png": "f2ec0575e5ee8c322975d08102498f93",
"assets/images/line.png": "9f24678b92dd8a73e8bf31046c186955",
"assets/images/tab_new_home.png": "d7574a7d37a4d4bb189a200e8ebb2fbc",
"assets/images/signIn.png": "b46928c2031aa2a5589d3ec90013da43",
"assets/images/my_xx.png": "67f820050d69119fe5f2b8d381c37050",
"assets/images/icon_round_normal.png": "491d22152543ca17526b4de4e4957780",
"assets/images/member_right.png": "41b6bb539f80e4b23e20d691481437d0",
"assets/images/huiyuankabeijing.png": "63f8a0b610b75b886746a375668baf0f",
"assets/images/icon_like_orange.png": "233ad7dd2893a725f8dae3efc2928cfe",
"assets/images/growup_select.png": "17dcefa27510a8728d12f6d420adcecd",
"assets/images/method_normal.png": "42f8ac9bf8a66f7ad39a4d18efdb56d9",
"assets/images/huiyuantou.png": "0f1de8253fc4e5ad816d9cc3ba8e9cba",
"assets/images/tjsh.png": "144c829876402bb1c544d495aaa6fe30",
"assets/images/my_log.png": "e4e0a4857c2941755464630b3765c05f",
"assets/images/icon_font_normal.png": "0a76d259df29ad1f348fbf82fd23bf5c",
"assets/images/third.png": "7f04ee1f1e02054dc7d4c2d4f8e9a301",
"assets/images/contractService.png": "857077804fb4922bbb5d185be12e0546",
"assets/images/my_fans_setting.png": "bad6a19865f319b415e0d9800f1b10ab",
"assets/images/icon_pause_black.png": "0e4f57ac2314cf9cbdab7050ebce9510",
"assets/images/wdwdxz.png": "7733eaa891a1cbc5e673f22072011776",
"assets/images/message.png": "5ba9ef915485e020ad0f6168b0ec14ea",
"assets/images/icon_air.png": "d9d0b824a5ff0e5ee5400245f0381969",
"assets/images/icon_activity_my_select.png": "514b022637c327bc8875b42fe84d5beb",
"assets/images/contract.png": "0b70fd69386ba1466a547baed319a93f",
"assets/images/loading.png": "fbe02e496cac61b80b870f2206de55e9",
"assets/images/circle_joinMessage.png": "ae80b9b282c3c4040a044ba237f4b537",
"assets/images/memberBg.png": "27ffb6b1ec0d3635bb8d71f658d5120a",
"assets/images/shsb.png": "b04cdaf26b84724fde84885bba529503",
"assets/images/back.png": "006dc7254a2e73f03e947f07d407a7aa",
"assets/images/my_czdd.png": "edbbd28afc50725621dc69e2caee929e",
"assets/images/icon_audio_play.png": "86cc1b90c2ee8f1aae704d6930197d78",
"assets/images/tab_select_message.png": "a69dbf5195f5e5b5e82cbb769d6978d4",
"assets/images/photo_grey.png": "d18f86aa1edae4137b8e268562e0ad73",
"assets/images/xx_back.png": "93a755877f8567998e2137e3dfc1fe23",
"assets/images/icon_refresh_grey.png": "f401b402781bd695a6a5aee3bb1dc19a",
"assets/images/xx_share.png": "56f31b4fbf60a0da740322334bf8f7fb",
"assets/images/icon_eye_orange.png": "e07523a50b6da776106133f51bc599de",
"assets/images/icon_back_down.png": "a9164271485f9b9abebe5fe7bc112ba9",
"assets/images/gift_canGive.png": "657e7412f0d6df2434b2f5e43cc5a96c",
"assets/images/icon_chat_add.png": "74713f695818fa41f74cd501f0a9e863",
"assets/images/my_wdxz.png": "7733eaa891a1cbc5e673f22072011776",
"assets/images/first.png": "fa6226325d875a4e18421d39e3641a7d",
"assets/images/giveProduct.png": "bae4fedd1a2c20009468b07e3e277f86",
"assets/images/icon_send_failed.png": "dc83bbc0afa4375c40de0a58f8fd301e",
"assets/images/xxhd_yjs.png": "ad45629d6e525ac8bd93788b99e06f80",
"assets/images/signup_report_detail.png": "db0c8cfc40262203544c94bddcddad33",
"assets/images/hhr_nodata.png": "be61129197f4511030db068833807792",
"assets/images/icon_subscribe_primary.png": "f156f2a054ed68f6a58f0766e2a80362",
"assets/images/icon_browse_grey.png": "a7b5a19e8d55deee3ea6d2b5ec63cea7",
"assets/images/yellowArrow.png": "59e7cb6827fbeaa58c9038157f487abe",
"assets/images/icon_db_pay.png": "d57a07c819a1bc013cd0afc3b1e9f651",
"assets/images/noResultDate.png": "39aa1054bfbaeba0ec5ace59dd09c98d",
"assets/images/signInBall.png": "34b476c6aed76fa3710db06e0a14eb89",
"assets/AssetManifest.json": "24a3d26110df9d65350727707f73872d",
"assets/NOTICES": "07c70426584b79a02ecca892f780e320",
"assets/FontManifest.json": "0f7ce88720b4e573efb15532de3c4416",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "453bc49ac506730361dd0573a10322b1",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "b9cdf9604fb0a589eeff1216a7e7df1d",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "3320b684446ace9b7e0f4a1d9bd9e287",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/font/PingFangSC-Regular.ttf": "c42f2cf165edb9e0ff57880dbee1d50a",
"assets/font/SourceSansPro-SemiboldIt.otf": "4e5ce2e7cf30ec4e0298b0225f57c454",
"assets/font/iconfont.ttf": "832143c041f52625bf7b4c229bcb1323",
"assets/font/Avenir.ttc": "bdf471713ee7dec3e19576abe39ee749",
"assets/font/PingFangSC-Medium.ttf": "a39de046f22404825373ee07c8bf7854",
"assets/font/YouSheBiaoTiHei.ttf": "1726685ca93be4e04930d6561afd1d68",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

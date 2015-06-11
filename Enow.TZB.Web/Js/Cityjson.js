﻿var cityget = {
    citylist: [{ "CityId": 454, "ProvinceId": 162, "Name": "石家庄市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 455, "ProvinceId": 162, "Name": "唐山市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 456, "ProvinceId": 162, "Name": "秦皇岛市", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 457, "ProvinceId": 162, "Name": "邯郸市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 458, "ProvinceId": 162, "Name": "邢台市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 459, "ProvinceId": 162, "Name": "保定市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 460, "ProvinceId": 162, "Name": "张家口市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 461, "ProvinceId": 162, "Name": "承德市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 462, "ProvinceId": 162, "Name": "沧州市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 463, "ProvinceId": 162, "Name": "廊坊市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 464, "ProvinceId": 162, "Name": "衡水市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 465, "ProvinceId": 163, "Name": "太原市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 466, "ProvinceId": 163, "Name": "大同市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 467, "ProvinceId": 163, "Name": "阳泉市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 468, "ProvinceId": 163, "Name": "长治市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 469, "ProvinceId": 163, "Name": "晋城市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 470, "ProvinceId": 163, "Name": "朔州市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 471, "ProvinceId": 163, "Name": "晋中市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 472, "ProvinceId": 163, "Name": "运城市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 473, "ProvinceId": 163, "Name": "忻州市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 474, "ProvinceId": 163, "Name": "临汾市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 475, "ProvinceId": 163, "Name": "吕梁市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 476, "ProvinceId": 164, "Name": "呼和浩特市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 477, "ProvinceId": 164, "Name": "包头市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 478, "ProvinceId": 164, "Name": "乌海市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 479, "ProvinceId": 164, "Name": "赤峰市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 480, "ProvinceId": 164, "Name": "通辽市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 481, "ProvinceId": 164, "Name": "鄂尔多斯市", "JP": "E", "QP": null, "EnName": null },
{ "CityId": 482, "ProvinceId": 164, "Name": "呼伦贝尔市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 483, "ProvinceId": 164, "Name": "巴彦淖尔市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 484, "ProvinceId": 164, "Name": "乌兰察布市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 485, "ProvinceId": 164, "Name": "兴安盟", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 486, "ProvinceId": 164, "Name": "锡林郭勒盟", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 487, "ProvinceId": 164, "Name": "阿拉善盟", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 488, "ProvinceId": 165, "Name": "沈阳市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 489, "ProvinceId": 165, "Name": "大连市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 490, "ProvinceId": 165, "Name": "鞍山市", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 491, "ProvinceId": 165, "Name": "抚顺市", "JP": "F", "QP": null, "EnName": null },
{ "CityId": 492, "ProvinceId": 165, "Name": "本溪市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 493, "ProvinceId": 165, "Name": "丹东市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 494, "ProvinceId": 165, "Name": "锦州市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 495, "ProvinceId": 165, "Name": "营口市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 496, "ProvinceId": 165, "Name": "阜新市", "JP": "F", "QP": null, "EnName": null },
{ "CityId": 497, "ProvinceId": 165, "Name": "辽阳市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 498, "ProvinceId": 165, "Name": "盘锦市", "JP": "P", "QP": null, "EnName": null },
{ "CityId": 499, "ProvinceId": 165, "Name": "铁岭市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 500, "ProvinceId": 165, "Name": "朝阳市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 501, "ProvinceId": 165, "Name": "葫芦岛市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 502, "ProvinceId": 166, "Name": "长春市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 503, "ProvinceId": 166, "Name": "吉林市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 504, "ProvinceId": 166, "Name": "四平市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 505, "ProvinceId": 166, "Name": "辽源市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 506, "ProvinceId": 166, "Name": "通化市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 507, "ProvinceId": 166, "Name": "白山市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 508, "ProvinceId": 166, "Name": "松原市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 509, "ProvinceId": 166, "Name": "白城市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 510, "ProvinceId": 166, "Name": "延边朝鲜族自治州", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 511, "ProvinceId": 167, "Name": "哈尔滨市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 512, "ProvinceId": 167, "Name": "齐齐哈尔市", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 513, "ProvinceId": 167, "Name": "鸡西市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 514, "ProvinceId": 167, "Name": "鹤岗市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 515, "ProvinceId": 167, "Name": "双鸭山市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 516, "ProvinceId": 167, "Name": "大庆市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 517, "ProvinceId": 167, "Name": "伊春市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 518, "ProvinceId": 167, "Name": "佳木斯市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 519, "ProvinceId": 167, "Name": "七台河市", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 520, "ProvinceId": 167, "Name": "牡丹江市", "JP": "M", "QP": null, "EnName": null },
{ "CityId": 521, "ProvinceId": 167, "Name": "黑河市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 522, "ProvinceId": 167, "Name": "绥化市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 523, "ProvinceId": 167, "Name": "大兴安岭地区", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 524, "ProvinceId": 168, "Name": "上海市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 525, "ProvinceId": 169, "Name": "南京市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 526, "ProvinceId": 169, "Name": "无锡市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 527, "ProvinceId": 169, "Name": "徐州市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 528, "ProvinceId": 169, "Name": "常州市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 529, "ProvinceId": 169, "Name": "苏州市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 530, "ProvinceId": 169, "Name": "南通市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 531, "ProvinceId": 169, "Name": "连云港市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 532, "ProvinceId": 169, "Name": "淮安市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 533, "ProvinceId": 169, "Name": "盐城市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 534, "ProvinceId": 169, "Name": "扬州市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 535, "ProvinceId": 169, "Name": "镇江市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 536, "ProvinceId": 169, "Name": "泰州市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 537, "ProvinceId": 169, "Name": "宿迁市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 538, "ProvinceId": 170, "Name": "杭州市", "JP": "H", "QP": "HZ", "EnName": "HZ" },
{ "CityId": 539, "ProvinceId": 170, "Name": "宁波市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 540, "ProvinceId": 170, "Name": "温州市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 541, "ProvinceId": 170, "Name": "嘉兴市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 542, "ProvinceId": 170, "Name": "湖州市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 543, "ProvinceId": 170, "Name": "绍兴市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 544, "ProvinceId": 170, "Name": "金华市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 545, "ProvinceId": 170, "Name": "衢州市", "JP": "*", "QP": null, "EnName": null },
{ "CityId": 546, "ProvinceId": 170, "Name": "舟山市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 547, "ProvinceId": 170, "Name": "台州市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 548, "ProvinceId": 170, "Name": "丽水市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 549, "ProvinceId": 171, "Name": "合肥市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 550, "ProvinceId": 171, "Name": "芜湖市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 551, "ProvinceId": 171, "Name": "蚌埠市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 552, "ProvinceId": 171, "Name": "淮南市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 553, "ProvinceId": 171, "Name": "马鞍山市", "JP": "M", "QP": null, "EnName": null },
{ "CityId": 554, "ProvinceId": 171, "Name": "淮北市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 555, "ProvinceId": 171, "Name": "铜陵市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 556, "ProvinceId": 171, "Name": "安庆市", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 557, "ProvinceId": 171, "Name": "黄山市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 558, "ProvinceId": 171, "Name": "滁州市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 559, "ProvinceId": 171, "Name": "阜阳市", "JP": "F", "QP": null, "EnName": null },
{ "CityId": 560, "ProvinceId": 171, "Name": "宿州市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 561, "ProvinceId": 171, "Name": "巢湖市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 562, "ProvinceId": 171, "Name": "六安市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 563, "ProvinceId": 171, "Name": "亳州市", "JP": "*", "QP": null, "EnName": null },
{ "CityId": 564, "ProvinceId": 171, "Name": "池州市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 565, "ProvinceId": 171, "Name": "宣城市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 566, "ProvinceId": 172, "Name": "福州市", "JP": "F", "QP": null, "EnName": null },
{ "CityId": 567, "ProvinceId": 172, "Name": "厦门市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 568, "ProvinceId": 172, "Name": "莆田市", "JP": "P", "QP": null, "EnName": null },
{ "CityId": 569, "ProvinceId": 172, "Name": "三明市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 570, "ProvinceId": 172, "Name": "泉州市", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 571, "ProvinceId": 172, "Name": "漳州市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 572, "ProvinceId": 172, "Name": "南平市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 573, "ProvinceId": 172, "Name": "龙岩市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 574, "ProvinceId": 172, "Name": "宁德市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 575, "ProvinceId": 173, "Name": "南昌市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 576, "ProvinceId": 173, "Name": "景德镇市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 577, "ProvinceId": 173, "Name": "萍乡市", "JP": "P", "QP": null, "EnName": null },
{ "CityId": 578, "ProvinceId": 173, "Name": "九江市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 579, "ProvinceId": 173, "Name": "新余市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 580, "ProvinceId": 173, "Name": "鹰潭市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 581, "ProvinceId": 173, "Name": "赣州市", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 582, "ProvinceId": 173, "Name": "吉安市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 583, "ProvinceId": 173, "Name": "宜春市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 584, "ProvinceId": 173, "Name": "抚州市", "JP": "F", "QP": null, "EnName": null },
{ "CityId": 585, "ProvinceId": 173, "Name": "上饶市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 586, "ProvinceId": 174, "Name": "济南市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 587, "ProvinceId": 174, "Name": "青岛市", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 588, "ProvinceId": 174, "Name": "淄博市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 589, "ProvinceId": 174, "Name": "枣庄市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 590, "ProvinceId": 174, "Name": "东营市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 591, "ProvinceId": 174, "Name": "烟台市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 592, "ProvinceId": 174, "Name": "潍坊市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 593, "ProvinceId": 174, "Name": "济宁市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 594, "ProvinceId": 174, "Name": "泰安市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 595, "ProvinceId": 174, "Name": "威海市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 596, "ProvinceId": 174, "Name": "日照市", "JP": "R", "QP": null, "EnName": null },
{ "CityId": 597, "ProvinceId": 174, "Name": "莱芜市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 598, "ProvinceId": 174, "Name": "临沂市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 599, "ProvinceId": 174, "Name": "德州市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 600, "ProvinceId": 174, "Name": "聊城市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 601, "ProvinceId": 174, "Name": "滨州市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 602, "ProvinceId": 174, "Name": "荷泽市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 603, "ProvinceId": 175, "Name": "郑州市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 604, "ProvinceId": 175, "Name": "开封市", "JP": "K", "QP": null, "EnName": null },
{ "CityId": 605, "ProvinceId": 175, "Name": "洛阳市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 606, "ProvinceId": 175, "Name": "平顶山市", "JP": "P", "QP": null, "EnName": null },
{ "CityId": 607, "ProvinceId": 175, "Name": "安阳市", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 608, "ProvinceId": 175, "Name": "鹤壁市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 609, "ProvinceId": 175, "Name": "新乡市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 610, "ProvinceId": 175, "Name": "焦作市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 611, "ProvinceId": 175, "Name": "濮阳市", "JP": "*", "QP": null, "EnName": null },
{ "CityId": 612, "ProvinceId": 175, "Name": "许昌市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 613, "ProvinceId": 175, "Name": "漯河市", "JP": "*", "QP": null, "EnName": null },
{ "CityId": 614, "ProvinceId": 175, "Name": "三门峡市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 615, "ProvinceId": 175, "Name": "南阳市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 616, "ProvinceId": 175, "Name": "商丘市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 617, "ProvinceId": 175, "Name": "信阳市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 618, "ProvinceId": 175, "Name": "周口市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 619, "ProvinceId": 175, "Name": "驻马店市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 620, "ProvinceId": 176, "Name": "武汉市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 621, "ProvinceId": 176, "Name": "黄石市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 622, "ProvinceId": 176, "Name": "十堰市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 623, "ProvinceId": 176, "Name": "宜昌市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 624, "ProvinceId": 176, "Name": "襄樊市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 625, "ProvinceId": 176, "Name": "鄂州市", "JP": "E", "QP": null, "EnName": null },
{ "CityId": 626, "ProvinceId": 176, "Name": "荆门市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 627, "ProvinceId": 176, "Name": "孝感市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 628, "ProvinceId": 176, "Name": "荆州市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 629, "ProvinceId": 176, "Name": "黄冈市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 630, "ProvinceId": 176, "Name": "咸宁市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 631, "ProvinceId": 176, "Name": "随州市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 632, "ProvinceId": 176, "Name": "恩施土家族苗族自治州", "JP": "E", "QP": null, "EnName": null },
{ "CityId": 633, "ProvinceId": 176, "Name": "神农架", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 634, "ProvinceId": 177, "Name": "长沙市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 635, "ProvinceId": 177, "Name": "株洲市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 636, "ProvinceId": 177, "Name": "湘潭市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 637, "ProvinceId": 177, "Name": "衡阳市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 638, "ProvinceId": 177, "Name": "邵阳市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 639, "ProvinceId": 177, "Name": "岳阳市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 640, "ProvinceId": 177, "Name": "常德市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 641, "ProvinceId": 177, "Name": "张家界市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 642, "ProvinceId": 177, "Name": "益阳市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 643, "ProvinceId": 177, "Name": "郴州市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 644, "ProvinceId": 177, "Name": "永州市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 645, "ProvinceId": 177, "Name": "怀化市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 646, "ProvinceId": 177, "Name": "娄底市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 647, "ProvinceId": 177, "Name": "湘西土家族苗族自治州", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 648, "ProvinceId": 178, "Name": "广州市", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 649, "ProvinceId": 178, "Name": "韶关市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 650, "ProvinceId": 178, "Name": "深圳市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 651, "ProvinceId": 178, "Name": "珠海市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 652, "ProvinceId": 178, "Name": "汕头市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 653, "ProvinceId": 178, "Name": "佛山市", "JP": "F", "QP": null, "EnName": null },
{ "CityId": 654, "ProvinceId": 178, "Name": "江门市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 655, "ProvinceId": 178, "Name": "湛江市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 656, "ProvinceId": 178, "Name": "茂名市", "JP": "M", "QP": null, "EnName": null },
{ "CityId": 657, "ProvinceId": 178, "Name": "肇庆市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 658, "ProvinceId": 178, "Name": "惠州市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 659, "ProvinceId": 178, "Name": "梅州市", "JP": "M", "QP": null, "EnName": null },
{ "CityId": 660, "ProvinceId": 178, "Name": "汕尾市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 661, "ProvinceId": 178, "Name": "河源市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 662, "ProvinceId": 178, "Name": "阳江市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 663, "ProvinceId": 178, "Name": "清远市", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 664, "ProvinceId": 178, "Name": "东莞市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 665, "ProvinceId": 178, "Name": "中山市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 666, "ProvinceId": 178, "Name": "潮州市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 667, "ProvinceId": 178, "Name": "揭阳市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 668, "ProvinceId": 178, "Name": "云浮市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 669, "ProvinceId": 179, "Name": "南宁市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 670, "ProvinceId": 179, "Name": "柳州市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 671, "ProvinceId": 179, "Name": "桂林市", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 672, "ProvinceId": 179, "Name": "梧州市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 673, "ProvinceId": 179, "Name": "北海市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 674, "ProvinceId": 179, "Name": "防城港市", "JP": "F", "QP": null, "EnName": null },
{ "CityId": 675, "ProvinceId": 179, "Name": "钦州市", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 676, "ProvinceId": 179, "Name": "贵港市", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 677, "ProvinceId": 179, "Name": "玉林市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 678, "ProvinceId": 179, "Name": "百色市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 679, "ProvinceId": 179, "Name": "贺州市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 680, "ProvinceId": 179, "Name": "河池市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 681, "ProvinceId": 179, "Name": "来宾市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 682, "ProvinceId": 179, "Name": "崇左市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 683, "ProvinceId": 180, "Name": "海口市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 684, "ProvinceId": 180, "Name": "三亚市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 685, "ProvinceId": 181, "Name": "重庆市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 686, "ProvinceId": 182, "Name": "成都市", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 687, "ProvinceId": 182, "Name": "自贡市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 688, "ProvinceId": 182, "Name": "攀枝花市", "JP": "P", "QP": null, "EnName": null },
{ "CityId": 689, "ProvinceId": 182, "Name": "泸州市", "JP": "*", "QP": null, "EnName": null },
{ "CityId": 690, "ProvinceId": 182, "Name": "德阳市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 691, "ProvinceId": 182, "Name": "绵阳市", "JP": "M", "QP": null, "EnName": null },
{ "CityId": 692, "ProvinceId": 182, "Name": "广元市", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 693, "ProvinceId": 182, "Name": "遂宁市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 694, "ProvinceId": 182, "Name": "内江市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 695, "ProvinceId": 182, "Name": "乐山市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 696, "ProvinceId": 182, "Name": "南充市", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 697, "ProvinceId": 182, "Name": "眉山市", "JP": "M", "QP": null, "EnName": null },
{ "CityId": 698, "ProvinceId": 182, "Name": "宜宾市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 699, "ProvinceId": 182, "Name": "广安市", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 700, "ProvinceId": 182, "Name": "达州市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 701, "ProvinceId": 182, "Name": "雅安市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 702, "ProvinceId": 182, "Name": "巴中市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 703, "ProvinceId": 182, "Name": "资阳市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 704, "ProvinceId": 182, "Name": "阿坝藏族羌族自治州", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 705, "ProvinceId": 182, "Name": "甘孜藏族自治州", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 706, "ProvinceId": 182, "Name": "凉山彝族自治州", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 707, "ProvinceId": 183, "Name": "贵阳市", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 708, "ProvinceId": 183, "Name": "六盘水市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 709, "ProvinceId": 183, "Name": "遵义市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 710, "ProvinceId": 183, "Name": "安顺市", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 711, "ProvinceId": 183, "Name": "铜仁地区", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 712, "ProvinceId": 183, "Name": "黔西南布依族苗族自治州", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 713, "ProvinceId": 183, "Name": "毕节地区", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 714, "ProvinceId": 183, "Name": "黔东南苗族侗族自治州", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 715, "ProvinceId": 183, "Name": "黔南布依族苗族自治州", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 716, "ProvinceId": 184, "Name": "昆明市", "JP": "K", "QP": null, "EnName": null },
{ "CityId": 717, "ProvinceId": 184, "Name": "曲靖市", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 718, "ProvinceId": 184, "Name": "玉溪市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 719, "ProvinceId": 184, "Name": "保山市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 720, "ProvinceId": 184, "Name": "昭通市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 721, "ProvinceId": 184, "Name": "丽江市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 722, "ProvinceId": 184, "Name": "思茅市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 723, "ProvinceId": 184, "Name": "临沧市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 724, "ProvinceId": 184, "Name": "楚雄彝族自治州", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 725, "ProvinceId": 184, "Name": "红河哈尼族彝族自治州", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 726, "ProvinceId": 184, "Name": "文山壮族苗族自治州", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 727, "ProvinceId": 184, "Name": "西双版纳傣族自治州", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 728, "ProvinceId": 184, "Name": "大理白族自治州", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 729, "ProvinceId": 184, "Name": "德宏傣族景颇族自治州", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 730, "ProvinceId": 184, "Name": "怒江傈僳族自治州", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 731, "ProvinceId": 184, "Name": "迪庆藏族自治州", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 732, "ProvinceId": 185, "Name": "拉萨市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 733, "ProvinceId": 185, "Name": "昌都地区", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 734, "ProvinceId": 185, "Name": "山南地区", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 735, "ProvinceId": 185, "Name": "日喀则地区", "JP": "R", "QP": null, "EnName": null },
{ "CityId": 736, "ProvinceId": 185, "Name": "那曲地区", "JP": "N", "QP": null, "EnName": null },
{ "CityId": 737, "ProvinceId": 185, "Name": "阿里地区", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 738, "ProvinceId": 185, "Name": "林芝地区", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 739, "ProvinceId": 186, "Name": "西安市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 740, "ProvinceId": 186, "Name": "铜川市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 741, "ProvinceId": 186, "Name": "宝鸡市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 742, "ProvinceId": 186, "Name": "咸阳市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 743, "ProvinceId": 186, "Name": "渭南市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 744, "ProvinceId": 186, "Name": "延安市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 745, "ProvinceId": 186, "Name": "汉中市", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 746, "ProvinceId": 186, "Name": "榆林市", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 747, "ProvinceId": 186, "Name": "安康市", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 748, "ProvinceId": 186, "Name": "商洛市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 749, "ProvinceId": 187, "Name": "兰州市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 750, "ProvinceId": 187, "Name": "嘉峪关市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 751, "ProvinceId": 187, "Name": "金昌市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 752, "ProvinceId": 187, "Name": "白银市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 753, "ProvinceId": 187, "Name": "天水市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 754, "ProvinceId": 187, "Name": "武威市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 755, "ProvinceId": 187, "Name": "张掖市", "JP": "Z", "QP": null, "EnName": null },
{ "CityId": 756, "ProvinceId": 187, "Name": "平凉市", "JP": "P", "QP": null, "EnName": null },
{ "CityId": 757, "ProvinceId": 187, "Name": "酒泉市", "JP": "J", "QP": null, "EnName": null },
{ "CityId": 758, "ProvinceId": 187, "Name": "庆阳市", "JP": "Q", "QP": null, "EnName": null },
{ "CityId": 759, "ProvinceId": 187, "Name": "定西市", "JP": "D", "QP": null, "EnName": null },
{ "CityId": 760, "ProvinceId": 187, "Name": "陇南市", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 761, "ProvinceId": 187, "Name": "临夏回族自治州", "JP": "L", "QP": null, "EnName": null },
{ "CityId": 762, "ProvinceId": 187, "Name": "甘南藏族自治州", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 763, "ProvinceId": 188, "Name": "西宁市", "JP": "X", "QP": null, "EnName": null },
{ "CityId": 764, "ProvinceId": 188, "Name": "海东地区", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 765, "ProvinceId": 188, "Name": "海北藏族自治州", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 766, "ProvinceId": 188, "Name": "黄南藏族自治州", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 767, "ProvinceId": 188, "Name": "海南藏族自治州", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 768, "ProvinceId": 188, "Name": "果洛藏族自治州", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 769, "ProvinceId": 188, "Name": "玉树藏族自治州", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 770, "ProvinceId": 188, "Name": "海西蒙古族藏族自治州", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 771, "ProvinceId": 189, "Name": "乌鲁木齐市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 772, "ProvinceId": 189, "Name": "克拉玛依市", "JP": "K", "QP": null, "EnName": null },
{ "CityId": 773, "ProvinceId": 189, "Name": "吐鲁番地区", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 774, "ProvinceId": 189, "Name": "哈密地区", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 775, "ProvinceId": 189, "Name": "昌吉回族自治州", "JP": "C", "QP": null, "EnName": null },
{ "CityId": 776, "ProvinceId": 189, "Name": "博尔塔拉蒙古自治州", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 777, "ProvinceId": 189, "Name": "巴音郭楞蒙古自治州", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 778, "ProvinceId": 189, "Name": "阿克苏地区", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 779, "ProvinceId": 189, "Name": "克孜勒苏柯尔克孜自治州", "JP": "K", "QP": null, "EnName": null },
{ "CityId": 780, "ProvinceId": 189, "Name": "喀什地区", "JP": "K", "QP": null, "EnName": null },
{ "CityId": 781, "ProvinceId": 189, "Name": "和田地区", "JP": "H", "QP": null, "EnName": null },
{ "CityId": 782, "ProvinceId": 189, "Name": "伊犁哈萨克自治州", "JP": "Y", "QP": null, "EnName": null },
{ "CityId": 783, "ProvinceId": 189, "Name": "塔城地区", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 784, "ProvinceId": 189, "Name": "阿勒泰地区", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 785, "ProvinceId": 189, "Name": "石河子市", "JP": "S", "QP": null, "EnName": null },
{ "CityId": 786, "ProvinceId": 189, "Name": "阿拉尔市", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 787, "ProvinceId": 189, "Name": "图木舒克市", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 788, "ProvinceId": 189, "Name": "五家渠市", "JP": "W", "QP": null, "EnName": null },
{ "CityId": 789, "ProvinceId": 190, "Name": "澳门特别行政区", "JP": "A", "QP": null, "EnName": null },
{ "CityId": 790, "ProvinceId": 191, "Name": "台湾省", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 791, "ProvinceId": 191, "Name": "台南", "JP": "T", "QP": null, "EnName": null },
{ "CityId": 792, "ProvinceId": 191, "Name": "高雄", "JP": "G", "QP": null, "EnName": null },
{ "CityId": 793, "ProvinceId": 192, "Name": "北京市", "JP": "B", "QP": null, "EnName": null },
{ "CityId": 794, "ProvinceId": 191, "Name": "台北市", "JP": "T", "QP": null, "EnName": "taipei" },
{ "CityId": 796, "ProvinceId": 170, "Name": "义乌市", "JP": "Y", "QP": null, "EnName": "义乌市（英）" },
{ "CityId": 29383, "ProvinceId": 988, "Name": "香港特别行政区", "JP": "X", "QP": "", "EnName": "" },
{ "CityId": 29384, "ProvinceId": 989, "Name": "天津市", "JP": "T", "QP": "", "EnName": "" },
{ "CityId": 29385, "ProvinceId": 990, "Name": "银川", "JP": "Y", "QP": "", "EnName": ""}]
}
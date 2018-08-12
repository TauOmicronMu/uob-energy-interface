// What screen are we on?
// 0 - Circles
// 1 - Historical Graphs
// 2 - Real-Time Graphs
CURRENT_SCREEN = 0;

DATES = ["01/01/2016","02/01/2016","03/01/2016","04/01/2016","05/01/2016","06/01/2016","07/01/2016","08/01/2016","09/01/2016","10/01/2016","11/01/2016","12/01/2016","13/01/2016","14/01/2016","15/01/2016","16/01/2016","17/01/2016","18/01/2016","19/01/2016","20/01/2016","21/01/2016","22/01/2016","23/01/2016","24/01/2016","25/01/2016","26/01/2016","27/01/2016","28/01/2016","29/01/2016","30/01/2016","31/01/2016","01/02/2016","02/02/2016","03/02/2016","04/02/2016","05/02/2016","06/02/2016","07/02/2016","08/02/2016","09/02/2016","10/02/2016","11/02/2016","12/02/2016","13/02/2016","14/02/2016","15/02/2016","16/02/2016","17/02/2016","18/02/2016","19/02/2016","20/02/2016","21/02/2016","22/02/2016","23/02/2016","24/02/2016","25/02/2016","26/02/2016","27/02/2016","28/02/2016","29/02/2016","01/03/2016","02/03/2016","03/03/2016","04/03/2016","05/03/2016","06/03/2016","07/03/2016","08/03/2016","09/03/2016","10/03/2016","11/03/2016","12/03/2016","13/03/2016","14/03/2016","15/03/2016","16/03/2016","17/03/2016","18/03/2016","19/03/2016","20/03/2016","21/03/2016","22/03/2016","23/03/2016","24/03/2016","25/03/2016","26/03/2016","27/03/2016","28/03/2016","29/03/2016","30/03/2016","31/03/2016","01/04/2016","02/04/2016","03/04/2016","04/04/2016","05/04/2016","06/04/2016","07/04/2016","08/04/2016","09/04/2016","10/04/2016","11/04/2016","12/04/2016","13/04/2016","14/04/2016","15/04/2016","16/04/2016","17/04/2016","18/04/2016","19/04/2016","20/04/2016","21/04/2016","22/04/2016","23/04/2016","24/04/2016","25/04/2016","26/04/2016","27/04/2016","28/04/2016","29/04/2016","30/04/2016","01/05/2016","02/05/2016","03/05/2016","04/05/2016","05/05/2016","06/05/2016","07/05/2016","08/05/2016","09/05/2016","10/05/2016","11/05/2016","12/05/2016","13/05/2016","14/05/2016","15/05/2016","16/05/2016","17/05/2016","18/05/2016","19/05/2016","20/05/2016","21/05/2016","22/05/2016","23/05/2016","24/05/2016","25/05/2016","26/05/2016","27/05/2016","28/05/2016","29/05/2016","30/05/2016","31/05/2016","01/06/2016","02/06/2016","03/06/2016","04/06/2016","05/06/2016","06/06/2016","07/06/2016","08/06/2016","09/06/2016","10/06/2016","11/06/2016","12/06/2016","13/06/2016","14/06/2016","15/06/2016","16/06/2016","17/06/2016","18/06/2016","19/06/2016","20/06/2016","21/06/2016","22/06/2016","23/06/2016","24/06/2016","25/06/2016","26/06/2016","27/06/2016","28/06/2016","29/06/2016","30/06/2016","01/07/2016","02/07/2016","03/07/2016","04/07/2016","05/07/2016","06/07/2016","07/07/2016","08/07/2016","09/07/2016","10/07/2016","11/07/2016","12/07/2016","13/07/2016","14/07/2016","15/07/2016","16/07/2016","17/07/2016","18/07/2016","19/07/2016","20/07/2016","21/07/2016","22/07/2016","23/07/2016","24/07/2016","25/07/2016","26/07/2016","27/07/2016","28/07/2016","29/07/2016","30/07/2016","31/07/2016","01/08/2016","02/08/2016","03/08/2016","04/08/2016","05/08/2016","06/08/2016","07/08/2016","08/08/2016","09/08/2016","10/08/2016","11/08/2016","12/08/2016","13/08/2016","14/08/2016","15/08/2016","16/08/2016","17/08/2016","18/08/2016","19/08/2016","20/08/2016","21/08/2016","22/08/2016","23/08/2016","24/08/2016","25/08/2016","26/08/2016","27/08/2016","28/08/2016","29/08/2016","30/08/2016","31/08/2016","01/09/2016","02/09/2016","03/09/2016","04/09/2016","05/09/2016","06/09/2016","07/09/2016","08/09/2016","09/09/2016","10/09/2016","11/09/2016","12/09/2016","13/09/2016","14/09/2016","15/09/2016","16/09/2016","17/09/2016","18/09/2016","19/09/2016","20/09/2016","21/09/2016","22/09/2016","23/09/2016","24/09/2016","25/09/2016","26/09/2016","27/09/2016","28/09/2016","29/09/2016","30/09/2016","01/10/2016","02/10/2016","03/10/2016","04/10/2016","05/10/2016","06/10/2016","07/10/2016","08/10/2016","09/10/2016","10/10/2016","11/10/2016","12/10/2016","13/10/2016","14/10/2016","15/10/2016","16/10/2016","17/10/2016","18/10/2016","19/10/2016","20/10/2016","21/10/2016","22/10/2016","23/10/2016","24/10/2016","25/10/2016","26/10/2016","27/10/2016","28/10/2016","29/10/2016","30/10/2016","31/10/2016","01/11/2016","02/11/2016","03/11/2016","04/11/2016","05/11/2016","06/11/2016","07/11/2016","08/11/2016","09/11/2016","10/11/2016","11/11/2016","12/11/2016","13/11/2016","14/11/2016","15/11/2016","16/11/2016","17/11/2016","18/11/2016","19/11/2016","20/11/2016","21/11/2016","22/11/2016","23/11/2016","24/11/2016","25/11/2016","26/11/2016","27/11/2016","28/11/2016","29/11/2016","30/11/2016","01/12/2016","02/12/2016","03/12/2016","04/12/2016","05/12/2016","06/12/2016","07/12/2016","08/12/2016","09/12/2016","10/12/2016","11/12/2016","12/12/2016","13/12/2016","14/12/2016","15/12/2016","16/12/2016","17/12/2016","18/12/2016","19/12/2016","20/12/2016","21/12/2016","22/12/2016","23/12/2016","24/12/2016","25/12/2016","26/12/2016","27/12/2016","28/12/2016","29/12/2016","30/12/2016","31/12/2016"];

SMALL_CHP = [3969,6014,5006,6041,6032,6044,5915,6033,6133,7001,2096,18,18,19,19,3,0,20,4080,8732,8342,7740,2664,3,354,20,5190,8537,8658,8715,8638,7474,7629,7984,7546,7547,7865,7853,8281,8143,8540,8722,8732,8720,8721,8359,7793,7991,7981,7572,8269,8597,8709,8729,8728,8733,8717,8711,8725,8723,7929,8321,7475,8350,8706,8341,8351,8704,7700,8728,8725,8692,6184,14,18,15,13,3859,7839,7278,7443,8302,8326,8643,8636,8466,3,3,14,13,13,15,3,3,16,14,16,16,15,3,3,17,13,14,14,18,3,3,16,13,13,13,17,3,3,15,15,13,15,3086,7816,7805,7819,8365,8275,8237,7429,7019,4511,4366,6356,4497,12,3479,6914,6914,6924,6921,6633,6923,6630,6625,6917,6922,6927,6927,6926,6629,5447,6321,6327,6626,6931,6931,6923,5305,3946,4772,3169,2433,2934,2337,2125,2607,3043,2729,3448,3452,3451,3485,2781,3106,2378,2350,1950,1412,2874,2930,2768,1872,834,13,13,3,3,14,12,13,17,13,3,3,13,46,13,13,15,3,3,12,13,14,14,12,3,3,14,15,13,16,16,3,3,16,15,14,13,13,3,3,1138,13,14,16,12,3,3,112,560,12,12,18,3,3,16,12,179,18,13,3,3,3,13,12,13,14,3,3,18,15,14,14,17,3,3,16,15,13,13,318,6,2,1500,5091,5853,2891,3444,562,3,1624,1864,2726,599,5400,7418,8505,7804,9225,9948,10240,10119,10584,10584,9840,9092,10683,11468,10810,10805,6911,10148,12641,12622,12235,12628,12623,12619,8168,11950,10410,11823,12645,12259,12041,12216,11180,10764,9366,11431,11143,9338,9876,12606,12460,12561,12633,12516,8439,5594,7721,9580,10224,11087,12599,12546,12391,12578,12641,12647,12107,10115,8455,10630,11697,12580,12249,12645,12614,12218,12414,11167,10658,12644,11919,12613,12613,10876,11996,11293,10440,12615,12611,12428,12451,12446,12361,8947,8936,9061,8984,4154,4151,4056,4144,6953,4147];

KW_PV_75 = [27,7,7,21,24,33,32,47,28,52,15,36,48,43,41,54,9,23,86,87,15,26,10,23,36,13,28,91,46,100,31,39,98,81,29,38,12,86,37,129,113,148,85,46,136,155,162,23,166,111,51,80,100,124,188,192,123,90,97,112,96,95,94,118,124,119,256,82,56,53,100,187,237,244,80,181,194,37,46,156,117,83,50,87,279,36,218,190,234,254,237,142,184,219,172,218,204,171,153,220,307,100,136,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,22,161,17,8,23,28,31,6,9,25,21,29,16,17,5,22,31,14,23,32,25,22,27,15,11,9,13,12,10,8,16,12,16,12,21,61,163,278,222,183,268,145,79,226,212,264,287,245,222,278,88,237,106,196,194,95,214,265,134,164,278,294,327,289,268,259,231,167,207,163,206,131,133,255,187,129,120,162,217,231,311,305,181,230,157,108,312,188,108,302,282,260,208,56,147,190,86,262,226,53,275,121,192,262,279,185,250,107,56,103,73,156,125,218,125,46,228,92,128,211,174,173,77,181,66,115,86,192,195,121,176,58,55,91,207,167,37,171,183,133,180,159,33,61,159,138,95,93,67,73,96,134,114,143,143,72,80,69,52,48,51,65,60,18,21,21,105,11,128,40,83,86,58,115,29,40,73,84,11,62,27,13,36,34,71,66,16,1,12,7,32,102,26,20,99,96,93,81,14,31,89,47,10,30,34,19,13,33,8,12,66,5,36,51,29,12,51,18,63,11,25,36,77,51,79,81,45,13
];

MW_CHP_21 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13855,51145,51121,27866,840,0,24611,51097,51122,51109,51121,36761,0,21131,26649,48497,51138,51130,39891,46013,25636,20614,42811,51135,51129,51132,51129,48714,51097,53439,51100,51119,51117,51099,51084,51105,31792,49242,51131,51094,50991,50765,51128,40706,14527,51094,51118,51099,46864,51085,51110,18148,0,0,0,0,0,0,0,0,0];

MW_CHP_44 = [107965,103094,103621,102555,102824,104719,104469,105883,102965,104641,103371,106457,108730,109125,110676,111586,110367,108434,111129,107133,108719,80395,445,215,32109,104359,103023,107980,103477,107254,104289,102936,107400,109160,105859,104883,103191,104508,103641,105652,106266,107648,105918,105527,107656,111184,110758,108000,109094,107434,103586,101871,106594,108883,110387,109992,107305,108586,109871,110121,104242,106496,106367,106875,107375,108574,109371,107855,106090,108586,107801,107930,108148,108676,108730,108348,108941,109785,108738,107563,108461,106906,107098,105820,104781,102895,104004,103258,105715,105648,106504,106195,102520,101695,63961,0,56504,106371,105121,106180,105320,103441,103852,103340,102977,105598,107316,107652,106938,105383,104547,104531,106180,107926,107879,106313,108336,108438,108133,107340,108938,106750,103734,106578,104168,97527,97922,97207,92801,93508,97898,97656,95980,101469,104293,104223,103285,101277,100824,100734,99703,98922,101074,102066,101184,104320,102613,99770,98891,99309,93813,81094,101555,102035,99766,95578,95742,93117,93352,94289,94711,91617,95371,87980,96145,95918,96262,94461,97320,98250,98297,95703,97250,95355,95461,97578,98500,98777,98133,98902,66031,98066,94574,13402,98535,98035,98992,99219,97137,96043,94934,94195,96625,100629,101469,34621,39273,94910,93586,92141,86293,88820,95188,93391,93992,95406,98031,97430,92625,92477,95930,97438,98992,98672,94508,94328,95695,97242,95969,94922,98945,101125,100680,97820,96266,96422,97695,95930,94414,93266,92063,94375,95844,96551,94770,89953,94117,93898,96680,97602,94766,96758,96086,95742,97773,64773,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44508,99031,96734,99453,100930,95727,98406,100187,95141,97000,97219,100102,101492,102945,103141,99609,99750,102000,100594,101453,103109,104852,103297,101344,102531,100375,99797,99773,101016,103141,102906,102422,104328,103914,103594,102656,102875,103000,102570,101172,101773,101453,101672,103992,106836,106094,100578,105547,106367,106781,104359,102203,101508,101563,57734,45516,103359,100445,99414,99133,102453,102070,98984,6422,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43391,99156,98367,94945,97109,101484,97539,98891,101719,100609,94766,91266,100266,99109,97750,102344,105422,105383,101961,107797,110625,110664,110063,108250,106727];

BLACK_START = [0,0,0,0,0,1370,1372,0,0,14,0,0,0,0,17,0,947,1022,1107,1102,1362,0,0,0,0,0,0,1209,0,0,0,0,0,0,0,0,0,0,0,0,0,1066,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1616,1527,1513,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2111,0,0,0,0,0,1890,0,0,0,0,0,0,0,0,0,0,0,0,0,729,0,0,0,0,0,0,0,0,0,0];

IMPORTED = [13975,14179,18798,55539,61505,62699,65561,64021,36864,39500,87271,89600,88033,90103,63810,37297,43866,85399,81703,81332,85206,97923,135273,137037,145222,86470,83718,74811,73136,35212,37901,75938,74212,75369,76422,71070,40327,39310,80827,81011,81426,77048,71721,36861,34087,71635,75275,77056,73844,69108,35330,35300,69743,73349,73611,72627,72347,40613,37310,78525,82968,83407,82964,75180,39140,38675,74606,77405,80201,75068,68123,34208,32869,75702,82453,82866,82538,76644,39593,37853,73028,74596,73492,64990,21309,18376,24175,27610,23342,27695,53117,53586,32636,33364,97981,154324,105633,63103,59628,32569,34723,66112,64339,63384,64642,61625,32450,33107,66628,67157,68543,68446,64221,33086,34026,72278,74512,73363,73921,66167,29888,29765,31823,61428,65882,71169,69772,40565,47959,79398,77751,79070,80723,67392,33451,33597,64562,68805,70989,69893,65128,41072,35908,64289,67072,66592,63329,61479,36940,35444,41368,82832,68320,64555,62312,41210,39744,71821,74503,76522,74308,74946,42926,45959,66877,71928,70344,72617,62518,34199,32637,67797,63100,68812,68013,62530,39158,30110,58558,62425,98381,65690,64697,110344,33441,60153,61292,59986,63622,63182,40129,38590,62015,61678,59851,118795,108939,38108,39777,75545,91555,85137,70037,74484,47262,42794,63890,66897,71483,73129,67140,38759,34644,61601,71148,68834,64386,62705,41930,42774,59321,58292,63702,67704,64823,39904,37044,67725,71677,76196,78560,73589,44218,43589,74083,84534,77469,75949,63026,38347,41133,40347,68839,72538,69741,99924,126766,122687,151254,140185,114299,123760,113150,130740,126589,141886,133316,135449,119902,121454,82117,128747,117153,72758,75720,74389,68987,50020,46999,78400,86005,84043,65650,29251,0,3784,39282,30312,36939,29963,26589,0,0,30068,36453,33854,36566,40244,28568,45262,47167,33017,28634,30121,25908,36174,35453,46664,29440,28292,37839,36363,0,2671,58773,48360,42846,34838,56759,39045,42782,51787,38652,39199,38910,31388,61939,93423,62910,60219,41805,41611,35478,11231,12518,158538,157611,142482,132476,122649,94370,95089,132725,133795,135252,132973,126510,91135,94420,132192,134894,110744,42215,32937,0,0,25354,26918,35472,53056,16926,0,0,22013,19185,15857,36467,19846,14726,15675,16409,19798,23469,22211,17694,17374
];

EXPORTED = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4626,0,0,0,0,0,0,4818,3910,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5194,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1315,2418,0,0,0,0,0,4683,1606,0,0,0,0,0,0,0,0,0,0,0,0,0];

var smallCHPTrace = {
  x: DATES,
  y: SMALL_CHP,
  name: "515kW CHP",
  type: 'bar'
};

var kWPV75Trace = {
  x: DATES,
  y: KW_PV_75,
  name: "75kW PV",
  type: 'bar'
};

var MWCHP21Trace = {
  x: DATES,
  y: MW_CHP_21,
  name: "2.1MW CHP",
  type: 'bar'
};

var MWCHP44Trace = {
  x: DATES,
  y: MW_CHP_44,
  name: "4.4MW CHP",
  type: 'bar'
};

var blackstartTrace = {
  x: DATES,
  y: BLACK_START,
  name: "1 MW Diesel Engine",
  type: 'bar'
};

var importTrace = {
  x: DATES,
  y: IMPORTED,
  name: "Imported (Grid)",
  type: 'bar'
};

var exportTrace = {
  x: DATES,
  y: EXPORTED,
  name: "Exported",
  type: 'bar'
};

plot_data = [smallCHPTrace, MWCHP21Trace, MWCHP44Trace, kWPV75Trace, blackstartTrace, importTrace, exportTrace];

layout = {
  yaxis: {title: 'Energy Usage/kWh'},
  barmode: 'stack',
  bargap: 0
};

CIRCLES = [];

CIRC_MAX_TXT_SIZE = 48;
CIRC_MIN_TXT_SIZE = 12;
CIRC_TXT_PAD = 25;

CIRC_PAD = 20;

// GRADIENT = ["#09FF00", "#2FD700", "#55AF00", "#7B8700", "#A25F00", "#B44C00", "#C73900", "#D92600", "#EC1300", "#FF0000"];
GRADIENT = ["#FFEBEB", "#FFD8d8", "#FFC4C4", "#FFB1B1", "#FF9D9D", "#FF8989", "#FF7676", "#FF6262", "#FF4E4E", "#FF3B3B", "#FF2727", "#FF1414", "#FF0000"];

MAX_CO2 = 0.0;

CHP_INTENSITY = 0.61;
BLACK_START_INTENSITY = 0.75;
PV_INTENSITY = 0.50;
GRID_INTENSITY = 0.25;

GR = 1.61803398875; // Golden Ratio

kwh_counter = null;
kwh_counter_wrap = null;
co2_counter = null;
co2_counter_wrap = null;
gbp_counter = null;
gbp_counter_wrap = null;
visualisation_canvas = null;

vis_description = null;
VIS_TXT_24H = "This visualisation shows the energy usage and Co2 emissions of buildings across campus.";
VIS_TXT_HIST_ENER = "This graph shows the energy usage of buildings across campus, and the source of the energy, across a period of time.";
VIS_TXT_HIST_CO2 = "This graph shows the CO2 emissions of buildings across campus, and the source of that CO2, across a period of time.";
VIS_TXT_RT_ENER = "This graph shows real-time data of energy usage on campus.";
VIS_TXT_RT_CO2 = "This graph shows real-time data of CO2 emissions on campus.";

energy_co2_switch = null;

building_info = null;
building_name = null;
building_location = null;
building_energy = null;
building_info_co2 = null;
building_cost = null;

total_info = null;

circles_button = null;
historical_graph_button = null;
realtime_graph_button = null;

// Offsets to the canvas
x_offset = null;
y_offset = null;


DATA = {
  buildings: [
    {
      name: "Computer Science",
      short_name: "CompSci",
      energy: {
        campus: 100,
        total: 150
      },
      location: "Y9",
    },
    {
      name: "Chemical Engineering",
      short_name: "ChemEng",
      energy: {
        campus: 84,
        total: 102,
      },
      location: "Y11" 
    },
    {
      name: "Haworth",
      short_name: "Haworth",
      energy: {
        campus: 65,
        total: 80
      },
      location: "Y2"
    },
    {
      name: "Guild of Students",
      short_name: "Guild",
      energy: {
        campus: 70,
        total: 84
      },
      location: "O1"
    },
    {
      name: "Estates West",
      short_name: "Estates W",
      energy: {
        campus: 50,
        total: 60
      },
      location: "Y5"
    },
    {
      name: "Aston Webb - Great Hall",
      short_name: "Great Hall",
      energy: {
        campus: 87,
        total: 129
      },
      location: "R6"
    },
    {
      name: "Arts Building",
      short_name: "Arts",
      energy: {
        campus: 122,
        total: 181
      },
      location: "R16"
    },
    {
      name: "Muirhead Tower",
      short_name: "Muirhead",
      energy: {
        campus: 232,
        total: 295
      },
      location: "R21"
    },
    {
      name: "Medical School",
      short_name: "Med School",
      energy: {
        campus: 191,
        total: 238
      },
      location: "B1"
    },
    {
      name: "Poynting Building",
      short_name: "Poynting",
      energy: {
        campus: 189,
        total: 230
      },
      location: "R13"
    },
    {
      name: "St Francis Hall",
      short_name: "Chaplaincy",
      energy: {
        campus: 35,
        total: 70
      },
      location: "O2"
    },
    {
      name: "Main Library",
      short_name: "Library",
      energy: {
        campus: 240,
        total: 367
      },
      location: "R30"
    },
    {
      name: "Nuffield",
      short_name: "Nuffield",
      energy: {
        campus: 87,
        total: 100
      },
      location: "R9"
    },
    {
      name: "Physics West",
      short_name: "Phys West",
      energy: {
        campus: 180,
        total: 213
      },
      location: "R8"
    },
    {
      name: "University Centre",
      short_name: "Uni Centre",
      energy: {
        campus: 223,
        total: 310
      },
      location: "R23"
    },
    {
      name: "Staff House",
      short_name: "Staff House",
      energy: {
        campus: 103,
        total: 121
      },
      location: "R24"
    },
  ]
};

// We scale the radii up exponentially based on total circles, which is
// equivalent to scaling the radii down logarithmically and then linearly
// scaling up
RADIUS_SCALE_FACTOR = 1.03;
RADIUS_SCALE = RADIUS_SCALE_FACTOR ** DATA.buildings.length;

/* 
 * Converts a given energy object into a value of Kg Co2
 */
function energy_to_co2(energy) {
  grid_energy = energy.total - energy.campus;
  grid_co2 = grid_energy * (7.0/20.0);
  campus_co2 = energy.campus * (3.5/20.0);
  total_co2 = grid_co2 + campus_co2;
  return +(total_co2.toFixed(2));
}

/* 
 * Returns the highest value for Co2 for any one building in DATA
 */
function get_max_co2() { 
  highest = 0.0;
  for(i = 0; i < DATA.buildings.length; i++) {
    co2 = energy_to_co2(DATA.buildings[i].energy);
    if( co2 > highest) highest = co2; 
  }
  return highest;
}

/*  
 * Returns the total energy, in kWh for all buildings in DATA
 */
function get_total_energy() {
  total = 0;
  for(i = 0 ; i < DATA.buildings.length ; i++) total += DATA.buildings[i].energy.total;
  return total;
}

/* 
 * Returns the total amount of campus energy used by buildings in DATA.
 */
function get_campus_energy() {
  total = 0;
  for(i = 0; i < DATA.buildings.length ; i++) total += DATA.buildings[i].energy.campus;
  return total;
}

/* 
 * Returns whether two circles intersect
 * Circles:
 *     (x-a)^2 + (y-b)^2 = r1^2
 *     (x-c)^2 + (y-d)^2 = r2^2
 */
function check_circle_intersection(a, b, r1, c, d, r2) {
  // The two circles intersect if the sum of their radii is less than or equal to
  // the distance between their centres
  //x_dist2 = Math.pow(a-c, 2);
  //y_dist2 = Math.pow(b-d, 2);
  dist = Math.sqrt((a-c) * (a-c) + (b-d) * (b-d));
 
  return (r1 + r2) >= dist;
}

/* 
 * Draws a circle with equation: 
 *     (x-a)^2 + (y-b)^2 = r^2
 *   to the visualisation canvas in an unoccupied space
 */
function draw_circle(r, col) {
  // get the height and width of the canvas element
  width = visualisation_canvas.width;
  height = visualisation_canvas.height;
  
  r = r * RADIUS_SCALE;
  
  // Keep choosing a point until one that doesn't intersect is found
  pointChosen = false;
  a = 0;
  b = 0;
  
  // If it's the first circle, choose the centre of the visualisation
  if(CIRCLES.length === 0) {
    a = width/2;
    b = height/2;
    pointChosen = true;
  }
  
  while(!pointChosen) {
    // Choose a random point about the centre of a random
    circ_i = +((Math.random() * (CIRCLES.length - 1)).toFixed(0));
    ia = CIRCLES[circ_i].a;
    ib = CIRCLES[circ_i].b;
    ir = CIRCLES[circ_i].r;
   
    // Choose a random angle, theta, between 0' and 90'
    theta = Math.random() * 90;
   
    rs = ir + r;
    dx = rs * Math.sin(theta);
    dy = rs * Math.cos(theta);
    
    a = ia + dx;
    b = ib + dy;
    
    // check if this intersects with the other circles or the bounding box
    intersects = false;
    
    for(i = 0 ; i < CIRCLES.length ; i++) {
      circle = CIRCLES[i];
      if(check_circle_intersection(a, b, r, circle.a, circle.b, circle.r)) {
        intersects = true;
        break;
      }
    }
    
    if((a - r) < 20 || (b - r) < 20 || (a + r) > width - 20 || (b + r) > height - 20) intersects = true;
    
    // if it does, try again!
    if(intersects) continue; 
    
    pointChosen = true;
  }
  
  // draw the circle with centre (a, b) and radius r to the canvas
  ctx = visualisation_canvas.getContext("2d");
  ctx.translate(0.5, 0.5);
  ctx.beginPath();
  ctx.arc(a,b,r,0,2*Math.PI);
  ctx.fillStyle = col;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "black";
  ctx.fill();
  
  CIRCLES.push({
    a: a,
    b: b,
    r: r
  });
}

/* 
 * Fixes the DPI of the canvas to stop blurring.
 */
function fix_dpi() {
  canvas = visualisation_canvas;
  dpi = window.devicePixelRatio;
  //create a style object that returns width and height
  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
    }
  };
//set the correct attributes for a crystal clear image!
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}

function textFits(s, r, size, ctx) {
  ctx.font = size + "px Quicksand";
  w = ctx.measureText(s).width;
  return w <= (2 * r - CIRC_TXT_PAD);
}

function draw_text(a, b, r, building) {
  ctx = visualisation_canvas.getContext("2d");
  
  size = CIRC_MAX_TXT_SIZE;
  text = building.name;
  short = false;
  initials = false;
  
  while(!textFits(text, r, size, ctx)) {
    // change the text appropriately if we can't fit the full name, short name, or initials...
    if(size <= CIRC_MIN_TXT_SIZE) {
      if(short) {
        if(initials) {
          text = "";
          break;
        } 
        initials = true;
        size = CIRC_MAX_TXT_SIZE;
        text = building.location;
        continue;
      }
      short = true;
      size = CIRC_MAX_TXT_SIZE;
      text = building.short_name;
      continue;
    }
    
    // Reduce the size by 2 and try again
    size = size - 2;    
  }
  
  // Now draw the text at the appropriate point
  if(text === "") return -1; // In this case, don't draw anything!
  
  ctx.font = size + "px Quicksand";
  w = ctx.measureText(text).width;
  h = ctx.measureText("M").width; // The height is about equal to the width of a capital M
  
  ctx.fillStyle = "black";
  ctx.shadowBlur=0;
  ctx.fillText(text, a - w/2, b + h/2);
  
}

function update_offset() {
  rect = visualisation_canvas.getBoundingClientRect();
  x_offset = rect.left;
  y_offset = rect.top;
  
}

/* 
 * Update the info panel on the page with the clicked building's info.
 */
function update_info(building) {
  building_name.innerHTML = building.name;
  building_location.innerHTML = building.location;
  building_energy.innerHTML = building.energy.total + " kWh";
  building_info_co2.innerHTML = energy_to_co2(building.energy) + " Kg";
  building_cost.innerHTML = "&pound" + (building.energy.total * 0.1541).toFixed(2);
}

function clear_info() {
    building_name.innerHTML = "";
    building_location.innerHTML = "";
    building_energy.innerHTML = "";
    building_info_co2.innerHTML = "";
    building_cost.innerHTML = "";
}

function handle_click(e) {
  mouse_x = e.clientX - x_offset;
  mouse_y = e.clientY - y_offset;
  
  // Check if the click was in the canvas or not!
  if(mouse_x < 0 || mouse_y < 0 || mouse_x > visualisation_canvas.offsetWidth 
                               || mouse_y > visualisation_canvas.offsetHeight) {
    // For now, just clear the info on the RHS
    clear_info();
    return;
  }

  // See if the click interesects with any of the circles
  for(i = 0; i < CIRCLES.length; i++) {
    // A point (x, y) is within a circle with center (a, b) and radius r iff
    // the distance from (x, y) to (a, b) is less that the radius
    circ = CIRCLES[i];
    x_diff = circ.a - mouse_x;
    y_diff = circ.b - mouse_y;
    if(Math.sqrt(x_diff * x_diff + y_diff * y_diff) <= circ.r) {
      update_info(DATA.buildings[i]);
      return;
    }   
  }
  clear_info();
}

function draw(newscreen) {
  CURRENT_SCREEN = newscreen;

  if(CURRENT_SCREEN === 0 ) {
    CIRCLES = [];

    fix_dpi();
    update_offset();

    width = visualisation_canvas.width;
    height = visualisation_canvas.height;

    dimension = Math.min(width, height);

    total_energy = get_total_energy();

    for (i = 0; i < DATA.buildings.length; i++) {
      energy = DATA.buildings[i].energy.total;
      proportion = energy / total_energy;
      radius = dimension * proportion;

      building_co2 = energy_to_co2(DATA.buildings[i].energy);

      // Calculate the correct colour for the circle
      index = Math.floor(building_co2 / (MAX_CO2 / GRADIENT.length)) - 1;

      draw_circle(radius, GRADIENT[index]);

      // Get the new circle
      circ = CIRCLES[CIRCLES.length - 1];

      // Draw the appropriate text for the building to the circle
      draw_text(circ.a, circ.b, radius, DATA.buildings[i]);
    }

      building_info.style.display = "block";
      co2_counter_wrap.style.display = "inline-block";
      gbp_counter_wrap.style.display = "inline-block";

      // write the appropriate description text
      vis_description.innerHTML = VIS_TXT_24H;
  }
  else if(CURRENT_SCREEN === 1) {
    Plotly.newPlot('visualisation-container', plot_data, layout);
      energy_co2_switch.style.display = "block";
      kwh_counter_wrap.style.display = "inline-block";
      co2_counter_wrap.style.display = "none";
      gbp_counter_wrap.style.display = "none";

      // write the appropriate description text
      vis_description.innerHTML = VIS_TXT_HIST_ENER;
  }
  else if(CURRENT_SCREEN === 2) {
      // TODO: plot the real-time data :)
      energy_co2_switch.style.display = "block";
      kwh_counter_wrap.style.display = "inline-block";
      co2_counter_wrap.style.display = "none";
      gbp_counter_wrap.style.display = "none";

      // write the appropriate description text
      vis_description.innerHTML = VIS_TXT_RT_ENER;

  }
}

function handle_switch_toggle() {
    // Purge the current Visualisation
    Plotly.purge('visualisation-container');

    if(CURRENT_SCREEN === 1) {
        // Change description
        vis_description.innerHTML = VIS_TXT_HIST_CO2;

        co2_counter_wrap.style.display = "inline-block";
        kwh_counter_wrap.style.display = "none";

        // calculate the historic co2 data for both campus and grid
        campus_co2_data = [];
        for(i = 0; i < SMALL_CHP.length; i++) {
            chps = (SMALL_CHP[i] + MW_CHP_21[i] + MW_CHP_44[i] * CHP_INTENSITY);
            blackstart = (BLACK_START[i] * BLACK_START_INTENSITY);
            pv = (KW_PV_75[i] * PV_INTENSITY);
            total = chps + blackstart + pv;
            campus_co2_data.push(total);
        }
        grid_co2_data = [];
        for(i = 0; i < IMPORTED.length; i++) {
            grid_co2_data[i] = IMPORTED[i] * GRID_INTENSITY;
        }

        var campusCo2Trace = {
            x: DATES,
            y: campus_co2_data,
            name: "Campus",
            type: 'bar'
        };

        var gridCo2Trace = {
            x: DATES,
            y: grid_co2_data,
            name: "Grid",
            type: 'bar'
        };

        co2_plot_data = [campusCo2Trace, gridCo2Trace];

        co2_layout = {
            yaxis: {title: 'CO2 Emissions/Kg CO2'},
            barmode: 'stack',
            bargap: 0
        };

        Plotly.newPlot('visualisation-container', co2_plot_data, co2_layout);
    }
    else if(CURRENT_SCREEN === 2) {
        // Change description
        vis_description.innerHTML = VIS_TXT_RT_CO2;
        co2_counter_wrap.style.display = "inline-block";
        kwh_counter_wrap.style.display = "none";

        // TODO: plot the real-time co2 data
    }
}

function sum(xs){
  total = 0;
  for(i = 0; i < xs.length; i++) {
    total += xs[i];
  }
  return total;
}

function update_counters() {
    total_energy = get_total_energy();
    campus_energy = get_campus_energy();
    grid_energy = total_energy - campus_energy;
    total_energy = total_energy.toFixed(2);

    // Update MAX_CO2 to be the highest value for Kg Co2 in the DATA
    MAX_CO2 = get_max_co2();

    campus_co2 = (campus_energy/20.0)*3.5; // Assuming the campus generator is twice as efficient as the grid
    grid_co2 = (grid_energy/20.0)*7.0; // 20kWh = ~7Kg Co2
    total_co2 = (campus_co2 + grid_co2).toFixed(2);

    total_cost = (total_energy * 0.1541).toFixed(2); // UK average is 15.41p/kWh

    // Update the counters based on the data for the current screen
  switch(CURRENT_SCREEN) {
    case 0:
      kwh_counter.innerHTML = total_energy;
      co2_counter.innerHTML = total_co2;
      gbp_counter.innerHTML = total_cost;
      break;
    case 1:
      total = 0;
        for(i = 0; i < plot_data.length; i++) {
          total += sum(plot_data[i].y);
        }
      kwh_counter.innerHTML = total;
      co2_counter.innerHTML = (total * (7.0/20.0)).toFixed(2);
      gbp_counter.innerHTML = (total * 0.1541).toFixed(2);
      break;
    case 2:
      break;
  }
}

function update() { 
  // Get the elements that are going to be modified
  kwh_counter = document.getElementById("kwh-value");
  co2_counter = document.getElementById("co2-value");
  gbp_counter = document.getElementById("gbp-value");
  visualisation_canvas = document.getElementById("visualisation-canvas");

    kwh_counter_wrap = document.getElementById("kwh-info");
    co2_counter_wrap = document.getElementById("co2-info");
    gbp_counter_wrap = document.getElementById("gbp-info");

    vis_description = document.getElementById("vis-description");

    energy_co2_switch = document.getElementById("switch-holder");

  building_info = document.getElementById("building-info");
  building_name = document.getElementById("info-building-name");
  building_location = document.getElementById("info-building-location");
  building_energy = document.getElementById("info-building-energy");
  building_info_co2 = document.getElementById("info-co2-emissions");
  building_cost = document.getElementById("info-energy-cost");

  total_info = document.getElementById("total-info");

  update_offset();
  
  // TODO: for the real system we need an API call here to populate 'DATA'
  
  // Sort DATA so that it's in descending order of kWh usage
  DATA.buildings.sort((a, b) => {
    return b.energy.total - a.energy.total;
  });
    
  // First, update the total energy/Co2/£ indicators
  // TODO: update this to use the actual metrics, not educated guesses

  update_counters();

  // Then update the visualisation
  draw(0);
}

window.onload = update;
window.onresize = draw;

// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"GALV_MessageBusts","status":true,"description":"(v.2.6) Displays a bust image instead of selected face image","parameters":{"Bust Priority":"1","Bust Position":"1","Text X Offset":"280","Filename Append":""}},
{"name":"CustomLogo","status":true,"description":"Shows RPG Maker and user logos at the start of the game.","parameters":{"logo1":"","logo1ImageName":"MadeWithMv","logo1Skippable":"true","logo1Coordinate":"","logo1X":"408","logo1Y":"312","logo1Origin":"0.5","logo1Time":"","logo1FadeinFrames":"12","logo1FadeoutFrames":"12","logo1DurationFrames":"120","logo2":"","logo2ImageName":"","logo2Skippable":"true","logo2Coordinate":"","logo2X":"408","logo2Y":"312","logo2Origin":"0.5","logo2Time":"","logo2FadeinFrames":"12","logo2FadeoutFrames":"12","logo2DurationFrames":"120","logo3":"","logo3ImageName":"","logo3Skippable":"true","logo3Coordinate":"","logo3X":"408","logo3Y":"312","logo3Origin":"0.5","logo3Time":"","logo3FadeinFrames":"12","logo3FadeoutFrames":"12","logo3DurationFrames":"120","allowTotalSkip":"true"}},
{"name":"OrangeMapshot截图插件","status":true,"description":"This plugin will save a picture of the entire map on a Mapshots folder when you press a key. <OrangeMapshot>","parameters":{"useMapName":"true","layerType":"0","drawAutoShadows":"true","drawEvents":"true","keyCode":"44","imageType":"png","imageQuality":"70","imagePath":"./Mapshots"}},
{"name":"ULDS","status":true,"description":"Unlimited Layer Display System.","parameters":{"Default Path":"parallaxes","Default Z":"0.5"}},
{"name":"Wasd keys","status":true,"description":"ヾ(◍°∇°◍)wasd移動基础插件 V0.2❀20.11.20","parameters":{"游戏开关查看":"F9"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"【YEP❀实用类】区域通行限制|YEP_RegionRestrictions.js","parameters":{"Player Restrict":"2","Event Restrict":"3","All Restrict":"1","Player Allow":"0","Event Allow":"0","All Allow":"0"}},
{"name":"MessageTextSound","status":true,"description":"v1.00 - 为事件的“显示文字”动作添加音效。","parameters":{"Text Sound Interval":"5","Text Sound Name":"按键1","Text Sound Volume":"20","Text Sound Pitch":"100","Text Sound Pan":"0"}},
{"name":"QPlus","status":false,"description":"<QPlus>核心插件             [R1]","parameters":{"Quick Test":"true","Default Enabled Switches":"[\"103\"]","Ignore Mouse when inactive":"false"}},
{"name":"TMAnimeLight","status":true,"description":"在事件中显示带动画的灯光。","parameters":{"range":"0.1","defaultZ":"4","frames":"30"}},
{"name":"MOG_CharacterMotion","status":true,"description":"【MOG系列】事件动态美化系统","parameters":{}},
{"name":"MrLiu_CharaterZoom","status":true,"description":"在RMMV游戏中的实现类似RM系列作品中近大远小的功能","parameters":{}},
{"name":"MBS_MapZoom","status":true,"description":"Makes it possible to zoom in and out the game map\n\n<MBS MapZoom>","parameters":{"Reset on map change":"true"}},
{"name":"YEP_FootstepSounds","status":true,"description":"【YEP❀实用类】脚步声系统|YEP_FootstepSounds.js","parameters":{"---Default---":"","Default Sound":"","Default Volume":"80","Default Pitch":"100","---Player Settings---":"","Player Enable":"true","Player Volume":"1.00","Player Pitch":"1.00","---Event Settings---":"","Event Enable":"true","Event Volume":"1.00","Distance Volume":"-0.10","Event Pitch":"1.00","Distance Pitch":"-0.00","Distance Pan":"10"}},
{"name":"KMS_MapActiveMessage","status":true,"description":"[v0.3.2] 自动显示地图上事件的消息。","parameters":{"Balloon offset Y":"20","Balloon margin":"-8","Default range":"2","Display duration":"300","Max message count":"10","Message skin":"ActiveMessageSkin"}},
{"name":"YEP_TestPlayAssist","status":false,"description":"v1.00 测试助手","parameters":{"AutoStart":"true","OnSwitches":"[\"18\",\"30\",\"52\",\"50\",\"103\",\"55\",\"106\",\"66\",\"129\",\"171\"]","CommonEvent":"0","StartCode":"\"// Get 10x of each regular item. Exclude key/hidden items.\\nfor (var i = 1; i < $dataItems.length; ++i) {\\n  var item = $dataItems[i];\\n  if (!item) continue;\\n  if (item.itypeId !== 1) continue;\\n  if (item.name.trim().length <= 0) continue;\\n  $gameParty.gainItem(item, 10);\\n}\"","AutoFPS":"false","AutoFullScr":"false"}},
{"name":"Bgs_Sunlight","status":true,"description":"阳光效果插件[V1.0]","parameters":{"Parallel":"true","Angle":"-45","Position":"0.2","Brightness":"0.2","Density":"25"}},
{"name":"MKR_PlayerMoveForbid","status":true,"description":"(v1.0.5) 玩家禁止移动","parameters":{"Default_Move_Flag":"200","Default_Menu_Flag":"true","Enter Flag":"true"}},
{"name":"GALV_TimedMessagePopups","status":true,"description":"(v.1.7) Display popup message boxes on screen that do not stop gameplay and auto close after a set time.","parameters":{"Y Offset":"-60","Default Windowskin":"Window","Use Arrows":"true","Windowskin Back Opacity":"255","Text Outline Width":"0"}},
{"name":"Galv_QuestLog","status":true,"description":"(v.1.3) A system to track quests/sidequests in your RPG.","parameters":{"File":"Quests","Folder":"data","Separator Character":",","- OPTIONS -":"","Font Size":"22","Categories":"主线任务|#FFF0F5","-- ICONS --":"","Not Complete Icon":"172","Complete Icon":"173","Failed Icon":"172","Tracked Quest Icon":"88","-- VOCAB --":"","Quest Command":"任务","Active Cmd Txt":"已接受","Completed Cmd Txt":"已完成","Failed Cmd Txt":"失败","Desc Txt":"任务详情","Objectives Txt":"任务目标","Difficulty Txt":"","No Tracked Quest":"没有正在进行中的任务","-- EXTRA --":"","Pop XY":"20,20","Pop Time":"130","Pop New Quest":"新任务","Pop Complete Quest":" \\C[24]√ \\C[0]","Pop Fail Quest":"任务失败","Pop New Objective":"新目标","Pop Complete Objective":"目标完成","Pop Fail Objective":"目标失败"}}
];

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import "./nav2.css";


const users = [
  {
    id: 1,
    region: "Toshkent sh.",
    data1: "22-Iyul 2024, 11:56",
    data2: "19-Iyul 2024, 09:21",
    text1:
      "O‘zbekistondagi tijorat banklarining jami aktivlari miqdori 690 trln so‘mdan oshdi",
    text2: "Toshkentda gastronomik koʻchalar soni yana bittaga ortadi",
    data3: "15-Iyul 2024, 04:23",
    text3:
      "'Toshkent shahar suv taʼminoti' aksiyadorlik jamiyatiga nisbatan ish qoʻzgʻatildi",
    data4: "12-Iyul 2024, 09:22",
    text4:
      "Joriy yil 1 avgustdan elektr energiyasini hisoblashning yangi billing tizimi joriy etiladi",
    data5: "11-Iyul 2024, 12:23",
    text5: "58-xalqaro kimyo olimpiadasi 2026-yilda Oʻzbekistonda oʻtkaziladi",
    data6: "8-Iyul 2024, 09:34",
    text6:
      "Yunusobod tumanidagi Toshkent YHXBning roʻyxatdan oʻtkazish boʻlimi vaqtincha yopildi",
    data7: "19-Iyul 2024, 12:24",
    text7:
      "Toshkent shahrida noqonuniy tashqi reklama konstruksiyalari majburiy demontaj qilinadi",
    data8: "16-Iyul 2024, 12:19",
    text8:
      "Tarkibida giyohvandlik moddalari boʻlgan saqichlar toʻxtatib qolindi",
    data9: "15-Iyul 2024, 12:07",
    text9:
      "Toshkentda boshqaruv kompaniyasi xodimlari aholidan yig‘ilgan 600 million so‘mdan ortiq mablag‘ni o‘z ehtiyojlari uchun sarflagan",
    data10: "12-Iyul 2024,09:04",
    text10: "Toshkentda III xalqaro haykaltaroshlik simpoziumi oʻtkaziladi",
    data11: "10-Iyul 2024, 10:32",
    text11:
      "Raqobat qoʻmitasi mijozlarni chalgʻitmoqchi boʻlgan bankka nisbatan ish qoʻzgʻatdi",
    data12: "3-Iyul 2024, 04:25",
    text12:
      "Vengriya kompaniyasi Toshkentda zamonaviy avtoturargohlarni yaratish loyihasi ustida ishlamoqda",
  },
  {
    id: 2,
    region: "Xorazm",
    data1: "03-May 20224, 13:30",
    text1:
      "Xorazm viloyatida yetishtirilgan qishloq xoʻjaligi mahsulotlarining Xitoy bozoriga eksporti kengayadi",
    data2: "15-Aprel 2024, 11:11",
    text2:
      "Xorazmda qiymati 25 mln dollarlik investitsiya asosida baliqchilik klasteri tashkil etiladi",
    data3: "01-Mart 2024, 02:41",
    text3:
      "Joriy yilda Xorazmda 119 ta koʻp qavatli uy qurilib, 3,5 mingta oilaning yashash sharoiti yaxshilanadi",
    data4: "01-Mart 2024, 12:50",
    text4:
      "10 mln dollardan koʻp eksport qilgan toʻqimachilik korxonalariga aylanma uchun 5 mln dollargacha kredit beriladi",
    data5: "9-Yanvar 2024, 11:37",
    text5: "Urganchda ota 14 yashar bolasini ayovsiz urdi",
    data6: "7-Noyabr 2023, 01:42",
    text6: "Хоразмда иккита туманга янги ҳоким, вилоятга прокурор тайинланди",
    data7: "16-Aaprel 2024, 09:50",
    text7:
      "Xorazm viloyatining bir qator oliy taʼlim muassasasalarida intellektual mulk sohasi boʻyicha seminar-treninglar boʻlib oʻtdi",
    data8: "05-Aprel 2024, 05:31",
    text8:
      "Muborak Ramazon oyida ehtiyojmand oilalarga Prezident sovgʻalari topshirildi",
    data9: "01-Mart 2024, 12:59",
    text9:
      "Sayyohlar bir yil davomida cheklovsiz Xorazmga kirish uchun viza tizimi joriy qilinadi",
    data10: "1-Mart 2024, 11:33",
    text10:
      "Xorazmda kichik va oʻrta biznesni yanada qoʻllab-quvvatlash uchun imtiyozli shartlarda 100 mln dollar ajratiladi",
    data11: "10-Noyabr 2023, 05:18",
    text11:
      "Хоразмда XX асрга оид билагузукларни яширинча олиб чиқишга уринган шахс ушланди",
  },
  {
    id: 3,
    region: "Buxoro",
    data1: "19-iyul 2024, 10:43",
    text1: "Daraxt kesgan fuqaro 100 tup ko'chat ekadigan boʻldi",
    data2: "11-iyul 2024, 09:01",
    text2:
      "'Boqiy Buxoro' madaniy etnografik parki shahar chetiga ko‘chirilishi rad etildi",
    data3: "10-iyun 2024, 09:49",
    text3:
      "'Murojaatdan – daromadga' loyihasi doirasida 115 nafar xotin-qizlar ishli boʻldi",
    data4: "31-May 2024, 10:04",
    text4: "Bugun Shavkat Mirziyoyev Buxoroga boradi",
    data5: "1-May 2024, 11:11",
    text5:
      "Buxoro mintaqaviy restavratsiya markazi mansabdorlari ustidan jinoyat ishi qoʻzgʻatildi",

    data6: "3-Fevral 2024, 06:16",
    text6:
      "Buxoroda YUNESKO konvensiyasi asosida tarixiy-etnografik park barpo etiladi",
    data7: "12-iyul 2024, 12:06",
    text7:
      "Qizilqum davlat qo'riqxonasida o'rnatilgan fotoqopqonga Buxoro bug'usi (Xongul) muhrlandi",
    data8: "04-iyul 2024, 03:31",
    text8:
      "Buxoroda onlayn kameralar orqali chiqindi tashlash bilan bog‘liq huquqbuzarliklar aniqlandi",
    data9: "31-May 2024, 12:59",
    text9: "Buxoroda Jadidlar merosi davlat muzeyi tashkil etiladi",
    data10: "30-May 2024, 10:31",
    text10: "“Buxoro tajribasi” – sadoqat namunasi” ekanligini koʻrsataylik!",
    data11: "04-Aprel 2024, 01:05",
    text11:
      "Buxoroda 'II Xalqaro zardo'zlik va zargarlik' festivali o'tkaziladi",
    data12: "15-Yanvar 2024, 12:22",
    text12:
      "Buxoroda ayol 5 yoshli farzandini ikki yildan beri beshikka bog'lab kaltaklab kelayotgani aniqlandi. Bu holatda ayolga qanday jazo beriladi?",
  },
  {
    id: 4,
    region: "Jizzax",
    data1: "22-Iyul 2024, 11:56",
    text1:
      "O‘zbekistonda BYD Seagull va E2 elektromobillarini ishlab chiqarish rejalashtirilmoqda",
    data2: "8-Iyul 2024, 05:16",
    text2:
      "Atrof-muhitga zarar keltirish huquqiy oqibatlarni keltirib chiqaradi",
    data3: "15-Mart 2024, 09:16",
    text3: "Oʻzbekiston yoshlar mamlakati",
    data4: "09-Mart 2024, 09:14",
    text4:
      "O‘qituvchilarga daftar tekshirgani uchun qo‘shimcha pul to‘lanadimi?",
    data5: "22-Fevral 2024, 04:08",
    text5: "Yoshlar bilan ishlash tizimining yangicha va samarali usuli",
    data6: "20-yanvar 2024, 10:04",
    text6: "Jizzaxda yer qimirladi",
    data7: "12-Iyul 2024, 03:53",
    text7:
      "Eronning 'Fors' ansambli solisti II Xalqaro maqom sanʼati anjumani bosh sovrinini qoʻlga kiritdi",
    data8: "08-Aprel 2024, 01:40",
    text8:
      "Yosh tadbirkorlarni qoʻllab-quvvatlash – prezident xalq qabulxonasi eʼtibori markazida",
    data9: "13-Mart 2024, 10:23",
    text9:
      "Toshkentda boshqaruv kompaniyasi xodimlari aholidan yig‘ilgan 600 million so‘mdan ortiq mablag‘ni o‘z ehtiyojlari uchun sarflagan",
    data10: "05-Mart 2024, 10:05",
    text10: "Huquqiy savollarga javoblar",
    data11: "22-Fevral 2024, 04:08",
    text11:
      "Jizzaxda aholi murojaatlari bilan ishlash holati tanqidiy muhokama qilindi",
    data12: "04-Yanvar 2024, 02:40",
    text12:
      "Jizzaxda 3 nafar shaxs chol va kampirning uyiga bosqinchilik uyushtirdi",
  },
  {
    id: 5,
    region: "Qashqadaryo",
    data1: "15-May 2024, 02:45",
    text1:
      "Яккабоғлик собиқ битирувчилар ўзлари ўқиган мактабни таъмирлаб беришди",
    data2: "24-Yanvar 2024, 04:47",
    text2:
      "Qashqadaryoda Xitoyning yirik kompaniyalari hamkorligida kompyuter qurilmalari ishlab chiqariladi",
    data3: "16-Yanvar 2024, 05:58",
    text3:
      "Qashqadaryoda talaba qizga oʻzi unashtirilgan yigit tomonidan turmushga chiqishga undab, ruhiy bosim oʻtkazilayotgani aniqlandi. Bu kabi harakatlar qanday javobgarlikka asos boʻladi?",
    data4: "29-Dekabr 2023, 09:25",
    text4:
      "Қашқадарёда экстремистик ғояларни тарғиб қилган 21 ёшли йигит қамалди",
    data5: "14-Dekavbr 2023, 01:32",
    text5: "Тарихда биринчи марта 4 та қор қоплони гуруҳи кузатилди",
    data6: "27-Noyabr 2023, 11:34",
    text6:
      "Қашқадарёда 14 яшар қизни жинсий қулликда сақлашда айбланаётган аёл қамоққа олинди",
    data7: "13-Fevral 2024, 12:45",
    text7:
      "Qarshida 200 o‘rinli yangi tug‘ruq kompleksi barpo etiladi – Prezident qarori",
    data8: "22-Yanvar 2024, 05:51",
    text8:
      "Ikkita hududda $4 ming evaziga ishga joylashtirib qoʻyishni vaʼda qilgan shaxslar ushlandi",
    data9: "13-Yanvar 2024, 08:38",
    text9: "Soliq organi tomonidan noto‘g‘ri qo‘llanilgan jarima kamaytirildi",
    data10: "25-Dekabr 2023, 04:00",
    text10:
      "Қашқадарёда жинсий қулликда сақланган 14 яшар қизнинг ҳозирги аҳволи маълум қилинди",
    data11: "28-Noyabr 2023, 10:03",
    text11:
      "Қашқадарёда иш вақтида туғилган кун нишонлаган “103” ходимлари жазоланди",

    data12: "26-Noyabr 2023, 03:02",
    text12:
      "Қашқадарёда 14 яшар қизнинг 7 ой давомида жинсий алоқа қилишга мажбурлангани айтилган ҳолат юзасидан қўшимча маълумот берилди",
  },
  {
    id: 6,
    region: "Navoiy",
    data1: "21-Iyun 2024, 02:49",
    text1: "Navoiyda 43 km pullik yoʻl quriladi",
    data2: "03-Aprel 2024, 10:48",
    text2:
      "Навоий вилоятида туркиялик сармоядорлар томонидан янги корхона ташкил этилмоқда",
    data3: "13-Mart 2024, 12:00",
    text3: "Navoiy viloyatida shamol elektr stansiyasi barpo etilmoqda",
    data4: "25-Dekabr 2023, 11:15",
    text4:
      "Навоийда Cobalt газ баллони портлаб кетиши оқибатида 3 яшар бола вафот этди",
    data5: "28-May 2024, 03:31",
    text5: "Navoiyda yangi loyihalarga start berildi",
    data6: "27-Mart 2024, 10:21",
    text6: "Навоийда Coworking маркази ишга тушди",
    data7: "10-Yanvar 2024,, 12:19",
    text7:
      "Tayvanlik investorlar Nurota tumaniga 25 mln dollarlik sarmoya kiritmoqchi",
    data8: "2-Dekabr 2023, 10:37",
    text8: "Томди тумани ҳокими лавозимидан озод қилинди",
  },
  {
    id: 7,
    region: "Namangan",
    data1: "19-Iyul 2024, 01:48",
    text1: "Namanganlik hamshiralar Germaniya shifoxonalarida ishlashi mumkin",
    data2: "05-May 2024, 01:34",
    text2: "Namanganda zilzila sodir bo‘ldi",
    data3: "27-Mart 2024, 09:30",
    text3:
      "Namanganda “Har bir oila – tadbirkor” dasturi doirasida 770 mln soʻmdan ziyod imtiyozli kredit mablagʻlari ajratildi",
    data4: "26-Mart 2024, 02:29",
    text4:
      "Joriy yilda Namanganda 1 ming megavattli 2 ta quyosh elektr stansiyasi barpo qilinadi",
    data5: "20-Mart 2024, 02:29",
    text5: "Nasibaning fuqaroligi tasdiqlandi",
    data6: "05-yanvar 2024, 10:49",
    text6: "Oʻzbekistonda yer qimirladi",
    data7: "15-iyul 2024, 05:28",
    text7: "Sulton Uvays Qaraniy ziyoratgohi",
    data8: "29-Mart 2024, 11:55",
    text8: "Президент 108 ёшли наманганлик нуронийга машина совға қилди",
    data9: "26-Mart 2024, 04:39",
    text9:
      "Namanganni Buxoro va Samarqand bilan bogʻlovchi temir yoʻl reyslari yoʻlga qoʻyiladi",
    data10: "26-Mart 2024, 01:54",
    text10:
      "Endilikda tadbirkorlar uchun alohida sharoitlarga ega zargarlik zonalari tashkil qilinadi",
    data11: "13-Fevral, 10:28",
    text11:
      "Oʻzbekistonni Qirgʻiziston bilan bogʻlovchi yana bir chegara posti ochiladi",
    data12: "04-Yanvar 2024, 04:09",
    text12:
      "Oʻzbekistonning bir nechta hududlarida qor koʻchish xavfi eʼlon qilindi",
  },
  {
    id: 8,
    region: "Samarqand",
    data1: "10-Iyul 2024, 01:52",
    text1:
      "Samarqand aeroportida yoʻlovchi tashish hajmi 2024 yilning birinchi yarmida qariyb 50 foizga oshgan",
    data2: "31-May 2024, 05:26",
    text2: "Samarqand katta yig‘ilishga mezbonlik qiladi",
    data3: "24-Aprel 2024, 09:54",
    text3: "'Sarkaritel': Samarqandda Osiyo xotin-qizlari forumi boʻlib oʻtadi",
    data4: "23-Mart 2024, 10:33",
    text4: "Malaka toifasi kimlarga beriladi?",
    data5: "02-Mart 2024, 01:29",
    text5:
      "Britaniyaning startaplarga sarmoya kiritishga ixtisoslashgan kompaniyasi Samarqandda vakolatxonasini ochmoqchi",
    data6: "20-Fevral 2024, 09:38",
    text6:
      "Respublika ishchi guruhi hal etilmagan murojaatlarni qayta koʻrib chiqmoqda",
    data7: "09-Iyul 2024, 04:52",
    text7:
      "Yaponiya va Turkiya hamkorligida Samarqandda qiymati 300 million dollarlik koʻp tarmoqli tibbiyot markazi quriladi",
    data8: "13-May 2024, 02:30",
    text8: "Samarqandda Osiyo xotin-qizlari forumi boshlandi",
    data9: "13-Aprel 2024, 11:33",
    text9:
      "Samarqandda yoshlar muammolarini hal etish bo‘yicha hokim va yoshlar uchrashuvi bo‘lib o‘tdi",
    data10: "05-Mart 2024, 01:08",
    text10:
      "“Kontrafaktsiz oy”: Intellektual mulk obyektlarning huquqiy himoyasi taʼminlandi",
    data11: "01-Mart 2024, 04:41",
    text11:
      "“Samarqand — Toshkent — Samarqand” yoʻnalishida qoʻshimcha yoʻlovchi poyezdlar harakati yoʻlga qoʻyildi",
    data12: "15-Fevral 2024, 03:43",
    text12:

      "Samarqandda Oʻzbekistondagi noyob koʻchmanchi hayvonlar koʻrgazmasi ochildi",
  },
  {
    id: 9,
    region: "Surxondaryo",
    data1: "17-Iyul 2024, 10:15",
    text1: "Himoya orderini qanday olish mumkin?",
    data2: "12-Iyul 2024, 06:16",
    text2:
      "Mehnat qonunchiligi boʻyicha xodimning qanday majburiyatlari mavjud?",
    data3: "11-Iyul 2024, 04:20",
    text3: "Aholi bilan yuzma-yuz muloqot",
    data4: "10-Iyul 2024, 10:53",
    text4: "Mehnat qonunchiligi boʻyicha xodimning qanday huquqlari mavjud?",
    data5: "07-Iyul 2024, 12:46",
    text5: "Mehnat shartnomasi asosida ish beruvchi qanday huquqlarga ega?",
    data6: "06-May 2024, 04:38",
    text6:
      "Davlat taʼlim standartlarini ishlab chiqish tartibi takomillashtirilmoqda",
    data7: "15-Iyul 2024, 13:41",
    text7:
      "Ekologiya vazirligi ogohlantiradi: hayvonlarga shafqatsizlik qilish javobgarlikka sabab boʻladi",
    data8: "12-Iyul 2024, 10:24",
    text8: "Mehnat shartnomasini bekor qilishning asoslari qanday?",
    data9: "11-Iyul 2024, 02:00",
    text9:
      "OTM talabalariga ham dekret ta’tili va puli beriladimi? Agar berilsa qanday imtiyozlari bor?",
    data10: "07-Iyul 2024, 04:49",
    text10:
      "Mehnatga oid huquq layoqati va muomala layoqati qachon vujudga keladi?",
    data11: "04-Iyul 2024, 12:52",
    text11:
      "Raqobat qoʻmitasi mijozlarni chalgʻitmoqchi boʻlgan bankka nisbatan ish qoʻzgʻatdi",
    data12: "02-May 2024, 01:12",
    text12: "Oilaviy mehmon uylari qanday tartibda ro'yxatdan o'tkaziladi?",
  },
  {
    id: 10,
    region: "Qoraqalpog'iston",
    data1: "19-Iyul 2024, 04:09",
    text1:
      "Orolboʻyi qishloq aholisi yerlarida suv tejovchi texnologiyalar joriy etilmoqda",
    data2: "26-Iyun 2024, 11:33",
    text2: "Orolboʻyida yuzlab aholi muammolari hal etilmoqda",
    data3: "25-Aprel 2024, 04:20",
    text3:
      "Bir oilaning 6 nafar farzandi tugʻilganlik haqidagi guvohnomaga ega boʻldi",
    data4: "29-Fevral 2024, 11:17",
    text4: "Shavkat Mirziyoyev Qoraqalpog‘iston va Xorazmga boradi",
    data5: "23-Yanvar 2024, 11:51",
    text5:
      "Sahnada bugun: “Padarkush”dan “Layli va Majnun”gacha. Bugun namoyish etiladigan spektakllar bilan tanishing",
    data6: "23-Yanvar 2024, 11:51",
    text6: "Қорақалпоғистонда бир оиладан 5 киши газдан заҳарланиб, вафот этди",
    data7: "01-Iyul 2024, 10:29",
    text7:
      "Prezident Xalq qabulxonasi Orolboʻyida “mahalla yettiligi” uchun seminarlar tashkil etmoqda",
    data8: "19-Iyun 2024, 05:32",
    text8: "Respublika ishchi guruhi faoliyati davom etmoqda",
    data9: "15-Mart 2024, 09:49",
    text9:
      "Qoraqalpogʻiston Respublikasida yoshlarga yaratilayotgan imkoniyatlar kengaymoqda",
    data10: "11-Fevral 2024, 10:50",
    text10:
      "Qoraqalpog‘istonda qiymati salkam $53 millionlik yangi investisiya loyihasi amalga oshiriladi",
    data11: "03-Yanvar 2024, 02:36",
    text11: "Qoraqalpogʻistonda ichimlik suvi va oqova xizmatlar narxi oshadi",
    data12: "19-Dekabr 2023, 04:13",
    text12: "Беруний туманига янги ҳоким тайинланди",
  },
  {
    id: 11,
    region: "Toshkent vil.",
    data1: "17-iyul 2024, 09:30",
    text1: "Taʼlim yoʻnalishlari soni yana oshadi",
    data2: "12-Iyul 2024, 05:41",
    text2: "Toshkentdagi eng soʻlim 10 dam olish maskani",
    data3: "09-Iyul 2024, 01:49",
    text3: "Оҳангаронда 23 та янги чарм саноат корхоналари барпо этилади",
    data4: "01-Iyul 2024, 02:05",
    text4:
      "BMT Bosh kotibi Toshkent viloyatidagi yirik fotoelektr stansiyasini borib koʻrdi",
    data5: "19-Aprel 2024, 07:10",
    text5: "58-xalqaro kimyo olimpiadasi 2026-yilda Oʻzbekistonda oʻtkaziladi",
    data6: "03-Aprel 2024, 11:29",
    text6:
      "Тошкент вилоятида йўлкира ҳақини тўлашда электрон тўлов тизими такомиллаштирилади",
    data7: "16-Iyul 2024, 02:30",
    text7:
      "Noqonuniy chiqindixona tashkil etgan fuqaro 3 yil-u 9 oyga ozodlikdan mahrum qilindi",
    data8: "09-Iyul 2024, 04:37",
    text8: "Toshkent viloyatidagi eng soʻlim 10 dam olish maskani",
    data9: "05-Iyul 2024, 05:30",
    text9: "Qirq qiz bulogʻi",
    data10: "18-Iyun 2024, 10:02",
    text10:
      "Fayzli bayram barchamiz uchun ibrat maktabi, kuch-gʻayrat manbaidir",
    data11: "19-Aprel 2024, 09:43",
    text11: "Toshkent viloyati volontyorlariga mablag‘ ajratildi",
    data12: "29-Mart 2024, 11:33",
    text12:
      "Тошкент вилоятидаги 34 гектар ер 30 йил муддатга ободонлаштириш бошқармаларига берилади",
  },
  {
    id: 12,
    region: "Sirdaryo",
    data1: "18-Mart 2024, 09:43",
    text1: "Otaliqqa olingan yoshlar sportda kuch sinashdi",
    data2: "14-Mart 2024, 0934",
    text2: "Adliya taqdimnomasi bilan qonun buzilishining oldi olindi",
    data3: "10-Mart 2024, 09:10",
    text3: "Shartnoma majburiyatlari buzildi",
    data4: "12-Yanvar 2024, 11:00",
    text4:
      "Sirdaryoda avtomobillarga gaz to‘ldirish kompressor shoxobchasi salkam 62,5 mlrd so‘mlik tabiiy gazni o‘g‘irladi. Bu kabi holatlarda “zapravka”lar qanday javobgarlikka tortiladi?",
    data5: "16-Mart 2024, 09:40",
    text5: "Adliya aralashuvi bilan hokim qarori bekor qilindi",
    data6: "12-Mart 2024, 09:26",
    text6: "“Bu mening birinchi hujjatim” – Sirdaryolik 8 yoshli qizaloq",
    data7: "22-Fevral 2024, 11:43",
    text7: "Sirdaryoda ilk bor qishloq xo‘jaligi texnikalari raqamlashtiriladi",
  },
  {
    id: 13,
    region: "Andijon",
    data1: "11-Iyul 2024, 04:30",
    text1: "Bogʻi Bobur: Andijonning eng soʻlim maskanlaridan biri",
    data2: "30-Aprel 2024, 11:40",
    text2:
      "Pasporti yoʻqotilganda qancha jarima toʻlanadi, “Zagranpasport” necha yil muddatga beriladi?",
    data3: "30-Mart 2024, 12:58",
    text3:
      "Inson qadrini ulugʻlash uning huquq va manfaatlarini himoyalashda yaqqol namoyon",
    data4: "20-Mart 2024, 09:10",
    text4:
      "Adliya aralashuvidan keyin fuqaroning xonadonida vujudga kelgan noreal qarzdorlik bartaraf qilindi",
    data5: "03-Mart 2024, 09:58",
    text5:
      "Adliya aralashuvi bilan fuqaro oʻz ish joyiga qaytarilib, unga ustama haqlari toʻlab berildi",
    data6: "20-Fevral 2024, 03:45",
    text6:
      "Andijonda chiqindidan elektr ishlab chiqaradigan pilot loyiha amalga oshiriladi",
    data7: "20-May 2024, 01:02",
    text7:
      "Oʻzbekistonda bola huquqlariga boʻlgan eʼtibor va ularning huquqiy muhofazasi",
    data8: "13-Aprel 2024, 11:21",
    text8: "Qalbaki patta",
    data9: "25-Mart 2024, 06:48",
    text9: "Onalik qilolmagan ayol",
    data10: "13-Mart 2024, 09:05",
    text10: "Adliya aralashuvidan soʻng fuqaro oʻz ish joyiga qaytarildi",
    data11: "02-Mart 2024, 12:12",
    text11:
      "Raqobat qoʻmitasi mijozlarni chalgʻitmoqchi boʻlgan bankka nisbatan ish qoʻzgʻatdi",
    data12: "16-Fevral 2024, 02:27",
    text12:
      "Vengriya kompaniyasi Toshkentda zamonaviy avtoturargohlarni yaratish loyihasi ustida ishlamoqda",
  },
];

function Navin() {
  const [selectedRegion, setSelectedRegion] = useState("Toshkent sh.");

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const filteredUsers = users.filter((user) => user.region === selectedRegion);
  const regions = [...new Set(users.map((user) => user.region))];

  return (
    <div className="flex">
      <div className="bg-[#f8f8f8]">
        {regions.map((region, index) => (
          <button
            key={index}
            onClick={() => handleRegionClick(region)}
            className="leading-[44.6px] w-[150px] border-b border-r region_hv"
            style={{
              display: "block",
              backgroundColor:
                region === selectedRegion ? "#d9534f" : "#ffffff",
              color: region === selectedRegion ? "#ffffff" : "#000000",
            }}
          >
            {region}
          </button>
        ))}
      </div>
      <div>
        <div className=" w-[680px] flex items-center justify-between px-5">
          <h1 className=" text-[30px] font-bold py-3 font-sans">
            {selectedRegion}
          </h1>
          <div className="flex items-center gap-2">
            <h1 className="text-[#ff0000] ">Barchasi </h1>
            <img className=" w-7 red-filter" src="/icons/next.png" alt="" />
          </div>
        </div>
        {filteredUsers.map((user, index) => (
          <div className="w-full flex" key={index}>
            <div className=" w-1/2">
              <div className=" px-3 py-2 border-t border-r hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data1}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text1}
                </p>
              </div>
              <div className="px-3 py-2 border-t border-r hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data2}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text2}
                </p>
              </div>
              <div className="px-3 py-2 border-t border-r hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data3}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text3}
                </p>
              </div>
              <div className="px-3 py-2 border-t border-r hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data4}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text4}
                </p>
              </div>
              <div className="px-3 py-2 border-t border-r hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data5}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text5}
                </p>
              </div>
              <div className="px-3 py-1 border-y border-r hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data6}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text6}
                </p>
              </div>
            </div>

            <div className="w-1/2">
              <div className="px-3 py-2 border-t hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data7}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text7}
                </p>
              </div>
              <div className="px-3 py-2 border-t hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data8}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text8}
                </p>
              </div>
              <div className="px-3 py-2 border-t hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data9}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text9}
                </p>
              </div>
              <div className="px-3 py-2 border-t hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data10}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text10}
                </p>
              </div>
              <div className="px-3 py-2 border-t hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data11}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text11}
                </p>
              </div>
              <div className="px-3  border-t hover:bg-[#F4F4F4]">
                <span className="font-sans opacity-45">{user.data12}</span>
                <p className=" text-[16px] line-clamp-2 leading-5">
                  {user.text12}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navin;

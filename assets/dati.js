/* Dati della guida: li usano sia la pagina web (index.html) sia il PDF (pdf-a4/index.html) */
/* ===== CONTATTI: si cambiano solo qui ===== */
var CONTATTI = {
  giorgia: { numero: '393894659385', saluto: 'Ciao Giorgia! Arrivo dalla guida di Gemma su Dubai, codice GEMMA', chiedo: 'Vorrei info su: ' },
  gemma:   { numero: '971583644458', saluto: 'Ciao Gemma! Arrivo dalla tua guida su Dubai', chiedo: 'Vorrei info su: ' }
};

/* ===== I TOUR: per aggiungere, togliere o cambiare un tour si tocca solo questa lista ===== */
var FILTRI = [
  ['tutti','Tutti'],['prima','Prima volta'],['coppia','In coppia'],['adrenalina','Adrenalina'],
  ['cultura','Cultura'],['mare','Mare e relax'],['speciale','Occasione speciale']
];
var GRUPPI = [['citta','In <em>città</em>'],['deserto','Nel <em>deserto</em>'],['mare','In <em>mare</em>'],['alto','Dall’<em>alto</em>']];
var TOUR = [
  {g:'citta', img:'full-day-dubai', pos:'50% 40%', t:'Full Day Dubai <em>antica e moderna</em>', nome:'Full Day Dubai antica e moderna',
   meta:['Giornata intera','Souk, Abra, Burj Al Arab, Dubai Frame'], tag:['prima','cultura'],
   txt:['Se è la tua prima volta, è il tour che ti fa capire subito la città','In una giornata passi dai souk e dall’Abra sul Creek ai grattacieli, senza stressarti con taxi e spostamenti']},
  {g:'citta', img:'dubai-vecchia', pos:'50% 60%', badge:'il mio preferito per la cultura', t:'Dubai <em>vecchia</em>', nome:'Dubai vecchia',
   meta:['A piedi','Degustazione inclusa'], tag:['cultura','prima'],
   txt:['Per chi non vuole solo i mall ma scoprire cosa c’era prima dei grattacieli','Al Seef, Al Fahidi, le torri del vento, i mercati dell’oro e delle spezie','La parte che amo di più? La degustazione: datteri, caffè arabo e piccoli assaggi']},
  {g:'citta', img:'abu-dhabi', pos:'50% 45%', t:'Full Day <em>Abu Dhabi</em>', nome:'Full Day Abu Dhabi (tour privato)',
   meta:['Giornata intera','Tour privato'], tag:['prima','cultura'],
   txt:['La Moschea Sheikh Zayed ti lascia senza parole: non puoi venire negli Emirati senza vederla','Poi Emirates Palace, Qasr Al Watan e le zone più iconiche, senza perdere tempo coi trasporti','Abu Dhabi è più lenta, elegante e riflessiva di Dubai']},

  {g:'deserto', img:'safari-vip', pos:'50% 55%', badge:'il primo che consiglio', t:'Safari <em>VIP</em>', nome:'Safari VIP',
   meta:['Pomeriggio e sera','Cena sotto le stelle'], tag:['prima'],
   txt:['Il classico safari tra le dune, ma in versione curata','Dune bashing (la guida «pazza» sulle dune), foto al tramonto e cena sotto le stelle con spettacoli','È quello che scelgo sempre per chi viene la prima volta']},
  {g:'deserto', img:'vintage-safari', pos:'50% 35%', t:'Vintage <em>Luxury</em> Safari', nome:'Vintage Luxury Safari',
   meta:['Land Rover d’epoca','Falconeria al tramonto'], tag:['coppia','cultura'],
   txt:['Qui non si parla di adrenalina ma di vivere il deserto come una volta','Land Rover d’epoca nella riserva reale, animali locali e falconeria al tramonto','Più lento, elegante e autentico del safari classico']},
  {g:'deserto', img:'gold-safari', pos:'50% 60%', t:'Gold <em>Luxury</em> Safari', nome:'Gold Luxury Safari',
   meta:['Range Rover','Cena gourmet in cabana privata'], tag:['coppia','speciale'],
   txt:['Il safari per chi vuole un’esperienza davvero esclusiva','Range Rover, cena gourmet in una cabana privata nel deserto e spettacoli beduini','Non è economico, ma per un anniversario o una luna di miele è il top']},
  {g:'deserto', img:'buggy', pos:'50% 55%', t:'Safari <em>Buggy</em>', nome:'Safari Experience Buggy',
   meta:['1 ora di buggy Polaris','Sandboarding e cammello'], tag:['adrenalina'],
   txt:['Se sei tipo da adrenalina pura, è quello che ti fa brillare gli occhi','Un’ora di guida sulle dune, poi sandboarding e cammello','Lo consiglio ai ragazzi o a chi vuole qualcosa di diverso dal solito safari']},
  {g:'deserto', img:'quad', pos:'50% 50%', t:'Safari <em>Quad</em>', nome:'Safari Quad Biking',
   meta:['1 ora di quad','Condiviso'], tag:['adrenalina'],
   txt:['Simile al buggy ma più light','Perfetto se vuoi un’esperienza veloce, senza spendere troppo, ma con l’adrenalina della sabbia']},
  {g:'deserto', img:'cavallo', pos:'50% 60%', badge:'la mia preferita in assoluto', t:'A <em>cavallo</em> nel deserto o in spiaggia', nome:'Horse riding nel deserto o in spiaggia',
   meta:['Deserto o spiaggia','Al tramonto'], tag:['coppia','speciale'],
   txt:['Chi mi segue lo sa: sono appassionata di cavalli','Montare nel deserto al tramonto o lungo la spiaggia è un momento intimo e silenzioso, senza motori né rumore','Se dovessi consigliarti una sola esperienza a Dubai, sarebbe questa']},

  {g:'mare', img:'yacht', pos:'50% 45%', t:'Yacht <em>privato</em>', nome:'Tour privato in yacht',
   meta:['2 ore','Privato','Meglio al tramonto'], tag:['coppia','mare','speciale'],
   txt:['Dubai vista dal mare è tutta un’altra storia','Due ore solo per te lungo JBR, Marina e Palm West Beach','Al tramonto il cielo si colora, lo skyline si accende e le foto vengono pazzesche']},
  {g:'mare', img:'dinner-cruise', pos:'50% 55%', t:'Dinner Cruise <em>VIP</em>', nome:'Dinner Cruise VIP',
   meta:['Sera','Cena, musica e spettacoli'], tag:['coppia'],
   txt:['La Marina di notte: ceni mentre scorri tra i grattacieli illuminati','Musica dal vivo, spettacoli arabi e buffet internazionale','Lo consiglio per una serata romantica, diversa dal solito ristorante']},
  {g:'mare', img:'jet-ski', pos:'50% 50%', t:'<em>Jet Ski</em> a Dubai', nome:'Jet Ski a Dubai',
   meta:['Meglio all’alba o al tramonto'], tag:['adrenalina','mare'],
   txt:['Se c’è un’esperienza che consiglio davvero di provare è questa','Scivolare sull’acqua col Burj Al Arab sullo sfondo ti resta negli occhi (e le foto vengono pazzesche ✨)','Vai al mattino presto o al tramonto: mare più calmo e meno gente']},
  {g:'mare', img:'flyboard', pos:'50% 40%', t:'<em>Flyboard</em> Experience', nome:'Flyboard Experience',
   meta:['Con istruttori','Anche alla prima volta'], tag:['adrenalina','mare'],
   txt:['Qui entriamo nel livello supereroe: ti alzi in aria coi getti d’acqua sotto i piedi','All’inizio sembra complicato, dopo qualche minuto ti senti Iron Man','Per chi vuole qualcosa di unico e non ha paura di osare']},
  {g:'mare', img:'snorkeling', pos:'50% 50%', t:'Snorkeling a <em>Fujairah</em>', nome:'Snorkeling a Fujairah',
   meta:['Giornata intera','Attrezzatura e barbecue inclusi'], tag:['mare'],
   txt:['Se ami il mare come me: i fondali più belli non sono a Dubai, ma a Fujairah','Acque limpide, coralli e pesci coloratissimi, guida certificata e barbecue in spiaggia','Una giornata per staccare dalla città']},
  {g:'mare', img:'fujairah-mirage', pos:'50% 50%', t:'Fujairah e relax <em>al Mirage</em>', nome:'Tour Premium Fujairah e relax al Mirage',
   meta:['Giornata intera','Cultura e spiaggia privata'], tag:['cultura','mare'],
   txt:['Un altro lato degli Emirati, più autentico e naturale','La mattina forti e moschee storiche, il pomeriggio spiaggia e piscina privata al Mirage Resort','Per unire cultura e relax senza il caos di Dubai']},

  {g:'alto', img:'mongolfiera', pos:'50% 50%', t:'Giro in <em>mongolfiera</em>', nome:'Giro in mongolfiera',
   meta:['All’alba','Colazione gourmet inclusa'], tag:['coppia','speciale'],
   txt:['Sì, la sveglia è alle 4 😅 ma quando vedi il sole che illumina piano piano il deserto capisci che ne è valsa la pena','Caffè arabo e datteri, volo sopra la riserva del deserto, falconeria e colazione emiratina appena atterrati']},
  {g:'alto', img:'elicottero', pos:'50% 50%', t:'Giro in <em>elicottero</em>', nome:'Giro in elicottero',
   meta:['12 minuti'], tag:['speciale','adrenalina'],
   txt:['12 minuti che valgono oro','Palm Jumeirah dall’alto, l’Atlantis, il Burj Khalifa e il Burj Al Arab come mai prima','Consigliatissimo se vuoi foto spettacolari e un ricordo che fa scena']},
];

/* ===== ITINERARI: [tour:Nome esatto del tour] diventa il link verde per Giorgia ===== */
var GIORNI_BASE = [
  {t:'Dubai antica e moderna', p:[['Giorno','[tour:Full Day Dubai antica e moderna]'],['Sera','fontane del Dubai Mall sotto il Burj Khalifa']]},
  {t:'Mare e deserto', p:[['Mattina','spiaggia a JBR o a Kite Beach'],['Pomeriggio e sera','[tour:Safari VIP] con cena nel deserto']]},
  {t:'Abu Dhabi', p:[['Giorno','[tour:Full Day Abu Dhabi (tour privato)] con la Moschea Sheikh Zayed'],['Sera','passeggiata e cena in Marina']]},
];
var GIORNI_5 = [
  {t:'Dubai dal mare', p:[['Mattina','[tour:Jet Ski a Dubai], quando il mare è più calmo'],['Tramonto','[tour:Tour privato in yacht] lungo Marina e Palm']]},
  {t:'Souk, shopping e Global Village', p:[['Mattina','[tour:Dubai vecchia] con degustazione, oppure shopping al Dubai Mall'],['Sera','Global Village (da ottobre a maggio)']]},
];
var GIORNI_7 = [
  {t:'Fujairah', p:[['Giorno','[tour:Snorkeling a Fujairah] oppure [tour:Tour Premium Fujairah e relax al Mirage]']]},
  {t:'Il ricordo speciale', p:[['Alba','[tour:Giro in mongolfiera], colazione inclusa'],['Pomeriggio','relax in spiaggia o all’Aquaventure'],['Tramonto','[tour:Horse riding nel deserto o in spiaggia], la mia preferita']]},
];
var ITINERARI = [
  {id:3, nome:'3 giorni', sotto:'prima volta', giorni:GIORNI_BASE},
  {id:5, nome:'5 giorni', sotto:'il giusto', giorni:[...GIORNI_BASE, ...GIORNI_5]},
  {id:7, nome:'7 giorni', sotto:'tutto', giorni:[...GIORNI_BASE, ...GIORNI_5, ...GIORNI_7]},
];

/* ===== CHECKLIST ===== */
var CHECK = [
  'Passaporto con almeno 6 mesi di validità (il visto te lo fanno all’arrivo)',
  'App scaricate: Careem, Uber, RTA Dubai, Talabat, The Entertainer',
  'Carta attivata per l’estero, meglio se anche su Apple Pay o Google Pay',
  'SIM o eSIM: in aeroporto (du o Etisalat) oppure eSIM prima di partire',
  'Un foulard o una giacchina per l’aria condizionata',
  'Vestiti più coprenti se visiti le moschee',
  'Medicine nella confezione originale, con la ricetta',
  'Safari e tour prenotati in anticipo con il codice GEMMA [tour:i tour a Dubai]',
  'Nol Card se userai metro e tram',
  'Ristoranti e brunch salvati, con The Entertainer per i 2x1',
  'Periodo controllato: da maggio a settembre fa molto caldo (ma trovi ottime offerte)',
  'Spazio in valigia: tra mall e souk torni con qualcosa in più',
];

/* ===== MESI ===== */
var MESI = [
  ['Gen',24,'fresco','fresco'],['Feb',25,'fresco','fresco · Ramadan'],['Mar',28,'top','top · Ramadan'],
  ['Apr',33,'top','top'],['Mag',38,'caldo','caldo'],['Giu',40,'caldo','hotel scontati'],['Lug',41,'caldo','hotel scontati'],
  ['Ago',41,'caldo','hotel scontati'],['Set',39,'caldo','caldo'],['Ott',35,'top','top'],['Nov',30,'top','top'],['Dic',26,'top','top · feste']
];


/* ===== ZONE DOVE DORMIRE (numeri uguali ai pin della mappa) ===== */
var ZONE = [
  {n:'Dubai Marina e JBR', per:'per mare e vita', t:'Spiaggia, passeggiata sul mare, ristoranti e locali: la sera si gira a piedi', q:'Dubai Marina, Dubai'},
  {n:'Palm Jumeirah', per:'per il relax da resort', t:'Hotel con spiaggia privata, beach club e Atlantis: perfetta se stai in hotel, meno comoda se vuoi girare', q:'Palm Jumeirah, Dubai'},
  {n:'Jumeirah e Umm Suqeim', per:'per la vista Burj Al Arab', t:'Più tranquilla, con Kite Beach e Madinat Jumeirah a due passi', q:'Umm Suqeim, Dubai'},
  {n:'Downtown', per:'per la prima volta', t:'Burj Khalifa, Dubai Mall e fontane sotto casa, centrale per tutto, ma è la più cara', q:'Downtown Dubai'},
  {n:'Business Bay', per:'per spendere meno', t:'Attaccata a Downtown ma con prezzi più bassi, tanti hotel e appartamenti nuovi', q:'Business Bay, Dubai'},
  {n:'Deira e Bur Dubai', per:'per il budget e l’atmosfera', t:'La Dubai vecchia, i souk e il Creek, prezzi bassi, ma lontana dal mare', q:'Al Fahidi Historical Neighbourhood, Dubai'},
];
var gmaps = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

/* ===== APP: link verificati il 7/10/2026 ===== */
var APPS = [
  {n:'Careem', cat:'Muoversi', t:'Taxi e car sharing, puoi pagare anche in contanti: prendi HALA Taxi, il meno costoso', col:'#1FA855', ios:'https://apps.apple.com/ae/app/careem-rides-food-more/id592978487', and:'https://play.google.com/store/apps/details?id=com.careem.acma'},
  {n:'Uber', cat:'Muoversi', t:'Come in Italia', col:'#221D20', ios:'https://apps.apple.com/ae/app/uber-request-a-ride/id368677368', and:'https://play.google.com/store/apps/details?id=com.ubercab'},
  {n:'RTA Dubai', cat:'Muoversi', t:'Bus, metro, tram e Nol Card', col:'#E2231A', ios:'https://apps.apple.com/ae/app/rta-dubai/id426109507', and:'https://play.google.com/store/apps/details?id=com.rta.rtadubai'},
  {n:'Talabat', cat:'Mangiare e spesa', t:'Cibo a domicilio e spesa', col:'#F49138', ios:'https://apps.apple.com/ae/app/talabat-food-grocery-more/id451001072', and:'https://play.google.com/store/apps/details?id=com.talabat'},
  {n:'Deliveroo', cat:'Mangiare e spesa', t:'Cibo a domicilio', col:'#00B8A9', ios:'https://apps.apple.com/ae/app/deliveroo-food-shopping/id1001501844', and:'https://play.google.com/store/apps/details?id=com.deliveroo.orderapp'},
  {n:'InstaShop', cat:'Mangiare e spesa', t:'La spesa a casa', col:'#CD2471', ios:'https://apps.apple.com/ae/app/instashop-groceries-more/id989276051', and:'https://play.google.com/store/apps/details?id=com.stedor.instashop'},
  {n:'Noon', cat:'Mangiare e spesa', t:'L’Amazon di Dubai, anche per il cibo', col:'#E9C200', ios:'https://apps.apple.com/ae/app/noon-shopping-food-grocery/id1269038866', and:'https://play.google.com/store/apps/details?id=com.noon.buyerapp'},
  {n:'The Entertainer', cat:'Risparmiare', t:'2x1 su ristoranti, hotel e attrazioni: se resti più di qualche giorno conviene', col:'#5B38C4', ios:'https://apps.apple.com/ae/app/the-entertainer/id702813714', and:'https://play.google.com/store/apps/details?id=com.theentertainerme.entertainer'},
  {n:'DubaiNow', cat:'Se resti a lungo', t:'Tutti i servizi ufficiali: bollette, multe, documenti', col:'#8A6D3B', ios:'https://apps.apple.com/ae/app/dubainow/id619712783', and:'https://play.google.com/store/apps/details?id=com.deg.mdubai'},
  {n:'Dubizzle', cat:'Se resti a lungo', t:'Il Subito.it locale, per affitti e acquisti', col:'#E00000', ios:'https://apps.apple.com/ae/app/dubizzle/id892172848', and:'https://play.google.com/store/apps/details?id=com.dubizzle.horizontal'},
  {n:'Justlife', cat:'Se resti a lungo', t:'Dalle pulizie alle unghie e ai massaggi, a casa', col:'#227CC0', ios:'https://apps.apple.com/ae/app/justlife-home-services/id1107705982', and:'https://play.google.com/store/apps/details?id=com.mobile.justmop'},
];

/* ===== SITI E PROFILI (link verificati il 7/10/2026) ===== */
var LINK = {
  casaHabibti: 'https://www.instagram.com/casahabibti/',
  globalVillage: 'https://www.globalvillage.ae/en',
  aquaventure: 'https://www.atlantis.com/dubai/atlantis-aquaventure/aquaventure-waterpark',
  moschea: 'https://www.szgmc.gov.ae/en',
  alserkal: 'https://alserkal.online/',
  expoCity: 'https://www.expocitydubai.com/en/',
  madinat: 'https://www.jumeirah.com/en/stay/dubai/madinat-jumeirah',
  instagramGemma: 'https://www.instagram.com/gemmalenoci/',
  guida: 'https://dubai.gemmalenoci.com/',
};

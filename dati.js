// Generato da costruisci.py: non modificare a mano.
const DATI = {
 "verifica": "12 ottobre 2026",
 "voci": [
  {
   "titolo": "Assegno unico e universale",
   "sezione": "Famiglie con figli",
   "icona": "👶",
   "chi": "Famiglie con figli minorenni a carico. Per i figli più grandi le regole cambiano: controllale sulla scheda Inps.",
   "quanto": "Fino a <b>203,8 € al mese per ogni figlio</b> con Isee fino a 17.468,51 €. Senza Isee, o con Isee da 46.582,71 € in su: <b>58,3 €</b> al mese.",
   "come": "Online sul sito Inps, con l'app Inps Mobile, tramite patronato o per telefono. La domanda già accolta <b>non va ripresentata</b>.",
   "quando": "",
   "attenzione": "L'Isee invece va rifatto ogni anno: senza un Isee valido, da marzo ricevi solo il minimo. Nel 2026, con l'Isee presentato entro il 30 giugno si sono recuperati gli arretrati da marzo.",
   "fonti": [
    {
     "nome": "Inps, scheda Assegno unico",
     "url": "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico-55984.assegno-unico-e-universale-per-i-figli-a-carico.html"
    },
    {
     "nome": "Inps, notizia di febbraio 2026",
     "url": "https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.02.assegno-unico-2026-presentazione-domanda-e-aggiornamento-importi.html"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "fino a 203,8 € al mese per figlio",
   "passi": [
    "Controlla sul sito o sull'app Inps se hai già la domanda accolta.",
    "Rifai l'Isee (DSU) quest'anno.",
    "Se non hai mai fatto domanda, falla online o al patronato."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "figli": "minori"
     },
     "esito": "si"
    }
   ]
  },
  {
   "titolo": "Bonus nuovi nati: 1.000 €",
   "sezione": "Famiglie con figli",
   "icona": "👶",
   "chi": "Figli nati, adottati o in affidamento preadottivo nel 2025 e nel 2026, con Isee per prestazioni familiari fino a <b>40.000 €</b>.",
   "quanto": "<b>1.000 € una tantum</b> per ogni figlio.",
   "come": "Sul portale Inps, al Contact Center Multicanale o tramite un patronato.",
   "quando": "Entro <b>120 giorni</b> dalla nascita o dall'ingresso in famiglia.",
   "attenzione": "Dopo i 120 giorni il diritto si perde.",
   "fonti": [
    {
     "nome": "Inps, scheda Bonus nuovi nati",
     "url": "https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.bonus-nuovi-nati.html"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "1.000 € per figlio",
   "passi": [
    "Fai l'Isee per le prestazioni familiari.",
    "Fai domanda sul portale Inps o al patronato.",
    "Segna la data: 120 giorni dalla nascita."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "figli": "nato_2526",
      "isee_max": 40000
     },
     "esito": "si"
    },
    {
     "se": {
      "figli": "nato_2526",
      "isee": "no"
     },
     "esito": "controlla"
    }
   ]
  },
  {
   "titolo": "Bonus asilo nido",
   "sezione": "Famiglie con figli",
   "icona": "👶",
   "chi": "Chi paga la retta di un nido o micronido, sezione primavera, spazio gioco o servizio educativo domiciliare, pubblico o privato autorizzato.",
   "quanto": "Nati dal 1° gennaio 2024: fino a <b>3.600 € l'anno</b> con Isee fino a 40.000 €. Nati prima: 3.000 € con Isee fino a 25.000,99 €, 2.500 € fino a 40.000 €. Sopra 40.000 € o senza Isee: 1.500 €. Al massimo 11 mensilità l'anno, mai più della retta pagata.",
   "come": "Domanda online sul sito Inps o tramite patronato, una per ogni figlio. Ogni mese alleghi la fattura o la ricevuta e la prova del pagamento.",
   "quando": "Dal 2026 la domanda vale fino ad agosto dell'anno in cui il bambino compie 3 anni: ogni anno aggiorni le mensilità.",
   "attenzione": "Il pagamento della retta deve essere <b>tracciabile</b> (bonifico, carta…): i contanti non valgono. Serve l'Isee per i minorenni.",
   "fonti": [
    {
     "nome": "Inps, scheda Bonus asilo nido",
     "url": "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.bonus-asilo-nido-e-forme-di-supporto-presso-la-propria-abitazione-51105.bonus-asilo-nido-e-forme-di-supporto-presso-la-propria-abitazione.html"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "fino a 3.600 € l'anno",
   "passi": [
    "Paga la retta con bonifico o carta, mai in contanti.",
    "Fai la domanda sul sito Inps o al patronato.",
    "Ogni mese carica la ricevuta e la prova del pagamento."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "figli": "nido"
     },
     "esito": "si"
    }
   ]
  },
  {
   "titolo": "Carta «Dedicata a te»: 500 € per la spesa",
   "sezione": "Isee basso",
   "icona": "🧾",
   "chi": "Famiglie di almeno 3 persone, tutte iscritte all'anagrafe, con Isee ordinario fino a <b>15.000 €</b>.",
   "quanto": "<b>500 €</b> su una carta prepagata di Poste Italiane, per generi alimentari di prima necessità (niente alcolici).",
   "come": "<b>Nessuna domanda.</b> L'Inps individua chi ne ha diritto, i Comuni pubblicano gli elenchi e avvisano. La carta si ritira negli uffici postali abilitati.",
   "quando": "Carte attive dal <b>4 novembre 2026</b>. Primo acquisto entro il <b>16 dicembre 2026</b>, altrimenti il contributo si perde.",
   "attenzione": "Sono escluse le famiglie che ricevono Assegno di inclusione, Carta acquisti, NASpI, DIS-COLL o cassa integrazione.",
   "fonti": [
    {
     "nome": "Inps, messaggio n. 2906 del 22/09/2026",
     "url": "https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.carta-dedicata-a-te-modalit-operative-per-il-2026-2027.html"
    },
    {
     "nome": "Ministero dell'agricoltura",
     "url": "https://www.masaf.gov.it/Carta_Dedicata_a_te_2026-info"
    }
   ],
   "tipo": "Arriva da sola",
   "cifra": "500 € per la spesa",
   "passi": [
    "Controlla di avere un Isee ordinario valido sotto 15.000 €.",
    "Guarda gli elenchi o gli avvisi del tuo Comune.",
    "Ritira la carta alle Poste e fai il primo acquisto entro il 16 dicembre."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "persone_min": 3,
      "isee_max": 15000
     },
     "esito": "si"
    },
    {
     "se": {
      "persone_min": 3,
      "isee": "no"
     },
     "esito": "controlla"
    }
   ]
  },
  {
   "titolo": "Carta acquisti: 80 € ogni due mesi",
   "sezione": "Isee basso",
   "icona": "🧾",
   "chi": "Genitori di bambini sotto i 3 anni e persone sopra i 65 anni, con Isee fino a <b>8.230,81 €</b>. Tra 65 e 70 anni anche redditi fino a 8.230,81 €; oltre i 70 fino a 10.974,42 €.",
   "quanto": "<b>40 € al mese</b>, caricati ogni due mesi (80 €). La carta è gratuita.",
   "come": "Si chiede negli uffici postali con il modulo apposito.",
   "quando": "",
   "attenzione": "Ci sono altri requisiti (per esempio sul patrimonio): leggili sul modulo. Si usa in supermercati e negozi alimentari, farmacie e parafarmacie, e per le bollette di luce e gas alle Poste.",
   "fonti": [
    {
     "nome": "Ministero dell'Economia, valori dal 1/1/2026",
     "url": "https://www.mef.gov.it/focus/carta_acquisti/eventi/2026/Dal-1-gennaio-2026-in-vigore-gli-aggiornamenti-ISTAT-per-gli-importi-di-reddito-e-lindicatore-ISEE/"
    },
    {
     "nome": "Ministero del Lavoro",
     "url": "https://www.lavoro.gov.it/temi-e-priorita/poverta-ed-esclusione-sociale/focus-on/carta-acquisti/pagine/default"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "80 € ogni due mesi",
   "passi": [
    "Controlla Isee e requisiti sul modulo (link nella pagina «Moduli ufficiali»).",
    "Compila il modulo e consegnalo all'ufficio postale."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "figli": "sotto3",
      "isee_max": 9796
     },
     "esito": "controlla"
    },
    {
     "se": {
      "eta_min": 65,
      "isee_max": 9796
     },
     "esito": "controlla"
    }
   ]
  },
  {
   "titolo": "Bonus sociali: luce, gas e acqua",
   "sezione": "Isee basso",
   "icona": "🧾",
   "chi": "Isee fino a <b>9.796 €</b> (dal 1° gennaio 2026), oppure fino a <b>20.000 €</b> con almeno 4 figli a carico.",
   "quanto": "Luce: 30% della spesa di un utente medio. Gas: 15%. Acqua: 50 litri gratis al giorno per persona.",
   "come": "<b>Nessuna domanda</b>: basta presentare ogni anno la DSU all'Inps (anche tramite un CAF). Gli sconti arrivano in bolletta da soli.",
   "quando": "",
   "attenzione": "La fornitura deve essere intestata a qualcuno del nucleo Isee.",
   "fonti": [
    {
     "nome": "ARERA, requisiti",
     "url": "https://www.arera.it/consumatori/bonus-sociale/bonus-sociale-per-disagio-economico/quali-sono-i-requisiti"
    },
    {
     "nome": "ARERA, soglia 2026",
     "url": "https://www.arera.it/comunicati-stampa/dettaglio/bonus-sociali-arera-alza-a-9796-euro-la-soglia-isee-per-laccesso-alle-agevolazioni-per-acqua-luce-gas-e-rifiuti"
    }
   ],
   "tipo": "Arriva da sola",
   "cifra": "−30% luce · −15% gas",
   "passi": [
    "Presenta la DSU ogni anno.",
    "Controlla che le bollette siano intestate a qualcuno del nucleo Isee."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "isee_max": 9796
     },
     "esito": "si"
    },
    {
     "se": {
      "figli": "quattro",
      "isee_max": 22000
     },
     "esito": "controlla"
    }
   ]
  },
  {
   "titolo": "Bonus rifiuti: TARI scontata del 25%",
   "sezione": "Isee basso",
   "icona": "🧾",
   "chi": "Le stesse soglie dei bonus sociali: Isee fino a 9.796 €, o 20.000 € con almeno 4 figli a carico.",
   "quanto": "<b>25% in meno</b> sulla TARI (o sulla tariffa dei rifiuti).",
   "come": "Automatico: basta la DSU con l'Isee sotto la soglia.",
   "quando": "Arriva l'anno dopo la DSU, direttamente sull'avviso di pagamento.",
   "attenzione": "Vale solo per la casa di residenza indicata nella DSU.",
   "fonti": [
    {
     "nome": "ARERA, bonus sociale rifiuti",
     "url": "https://www.arera.it/consumatori/bonus-sociale/bonus-sociale-per-disagio-economico/bonus-sociale-rifiuti-2-1"
    }
   ],
   "tipo": "Arriva da sola",
   "cifra": "−25% sulla TARI",
   "passi": [
    "Presenta la DSU.",
    "Controlla lo sconto sull'avviso TARI dell'anno dopo."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "isee_max": 9796
     },
     "esito": "si"
    },
    {
     "se": {
      "figli": "quattro",
      "isee_max": 22000
     },
     "esito": "controlla"
    }
   ]
  },
  {
   "titolo": "Conto corrente di base gratis",
   "sezione": "Isee basso",
   "icona": "🧾",
   "chi": "Chi ha un Isee sotto <b>11.600 €</b>. Anche i pensionati con pensione lorda fino a 18.000 € l'anno.",
   "quanto": "Con Isee sotto 11.600 €: <b>niente canone e niente imposta di bollo</b>. Pensionati: niente canone, ma il bollo (34,20 € l'anno) resta.",
   "come": "Chiedi il «conto di base» alla tua banca o a un'altra. Se il tuo Isee scende sotto la soglia, dillo alla banca: deve verificare e applicare la gratuità.",
   "quando": "Ogni anno, entro il <b>31 maggio</b>, porti alla banca l'autocertificazione Isee aggiornata.",
   "attenzione": "Se non la porti entro il 31 maggio, la banca applica le spese normali.",
   "fonti": [
    {
     "nome": "Banca d'Italia, Economia per tutti",
     "url": "https://economiapertutti.bancaditalia.it/informazioni-di-base/conto-base/"
    },
    {
     "nome": "Ministero dell'Economia, FAQ",
     "url": "https://www.dt.mef.gov.it/it/attivita_istituzionali/sistema_bancario_finanziario/conti_di_base/FAQ_Conti_di_base/"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "0 € di canone e di bollo",
   "passi": [
    "Chiedi alla tua banca il «conto di base».",
    "Consegna l'autocertificazione Isee.",
    "Ogni anno, entro il 31 maggio, rinnovala."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "isee_max": 11600
     },
     "esito": "si"
    },
    {
     "se": {
      "eta_min": 65
     },
     "esito": "controlla"
    }
   ]
  },
  {
   "titolo": "Esenzione ticket E01",
   "sezione": "Nonni e genitori",
   "icona": "👵",
   "chi": "Chi ha <b>meno di 6 anni o più di 65</b>, in un nucleo familiare con reddito complessivo fino a <b>36.151,98 €</b> (reddito dell'anno prima).",
   "quanto": "Niente ticket su visite specialistiche, esami di laboratorio e diagnostica.",
   "come": "Il medico di famiglia o il pediatra ha la lista degli esenti: chiedigli di controllare e di scrivere <b>E01 sulla ricetta</b>. Se non risulti, chiedi alla tua ASL.",
   "quando": "",
   "attenzione": "Non vale per i farmaci: lì decidono le regole della tua Regione.",
   "fonti": [
    {
     "nome": "Ministero della Salute, esenzioni per reddito",
     "url": "http://www.nsis.salute.gov.it/portale/temi/p2_6.jsp?area=esenzioni&id=1019&lingua=italiano&menu=vuoto"
    }
   ],
   "tipo": "Chiedila al medico",
   "cifra": "0 € di ticket",
   "passi": [
    "Chiedi al medico se risulti nella lista E01.",
    "Controlla che E01 sia scritto sulla ricetta, ogni volta."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "eta_min": 65
     },
     "esito": "controlla"
    },
    {
     "se": {
      "figli": "sotto3"
     },
     "esito": "controlla"
    },
    {
     "se": {
      "figli": "tra3e5"
     },
     "esito": "controlla"
    }
   ]
  },
  {
   "titolo": "Canone Rai gratis dopo i 75 anni",
   "sezione": "Nonni e genitori",
   "icona": "👵",
   "chi": "Chi ha compiuto 75 anni, con reddito proprio e del coniuge non superiore, in totale, a <b>8.000 € l'anno</b>, senza conviventi con un reddito proprio (colf, badanti e collaboratori domestici non contano).",
   "quanto": "<b>90 € l'anno</b> (il canone che si paga in bolletta della luce).",
   "come": "<b>Non è automatico</b>: serve una dichiarazione sostitutiva all'Agenzia delle Entrate, online, con PEC, raccomandata o in ufficio.",
   "quando": "Chi compie 75 anni entro il 31 gennaio è esonerato tutto l'anno; dal 1° febbraio al 31 luglio, per il secondo semestre.",
   "attenzione": "Se i requisiti restano, vale anche gli anni dopo senza ripresentarla. Se l'hai pagato pur avendo i requisiti, puoi chiedere il rimborso.",
   "fonti": [
    {
     "nome": "Agenzia delle Entrate, over 75",
     "url": "https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/canone-tv/casi-particolari-di-esonero-tv/cittadini-ultrasettantacinquenni"
    },
    {
     "nome": "Modulo ufficiale",
     "url": "https://www.agenziaentrate.gov.it/portale/documents/20143/2302621/TV_esenzione_75_mod.pdf/b8298e2b-55df-8f5e-c79a-510745506e9e"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "90 € l'anno",
   "passi": [
    "Scarica il modulo ufficiale (pagina «Moduli ufficiali»).",
    "Compilalo e mandalo all'Agenzia delle Entrate."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "eta_min": 75
     },
     "esito": "controlla"
    }
   ]
  },
  {
   "titolo": "No tax area: università senza contributo",
   "sezione": "Studenti",
   "icona": "🎓",
   "chi": "Studenti con Isee per l'università fino a <b>22.000 €</b> (soglia minima nazionale). Molti atenei la alzano.",
   "quanto": "Niente contributo annuale: restano tassa regionale e bollo. Tra 22.000 e 30.000 € ci sono sconti: 80% fino a 24.000 €, 50% fino a 26.000 €, 25% fino a 28.000 €, 10% fino a 30.000 €.",
   "come": "Fai l'Isee per le prestazioni universitarie e autorizza l'ateneo a usarlo, nei tempi che indica.",
   "quando": "",
   "attenzione": "Dal secondo anno servono anche requisiti di crediti (CFU) e di anni di iscrizione: li trovi nel regolamento tasse del tuo ateneo, con le soglie esatte.",
   "fonti": [
    {
     "nome": "Ministero dell'Università, DM 1016/2021",
     "url": "https://www.mur.gov.it/sites/default/files/2021-08/DM%20n.%201016%20del%2004-08-2021.pdf"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "0 € di contributo universitario",
   "passi": [
    "Fai l'Isee per le prestazioni universitarie.",
    "Autorizza l'ateneo a usarlo nei tempi indicati.",
    "Controlla soglie e crediti nel regolamento tasse."
   ],
   "lettera": null,
   "regole": [
    {
     "se": {
      "studio": "uni",
      "isee_max": 22000
     },
     "esito": "si"
    },
    {
     "se": {
      "studio": "uni",
      "isee_max": 40000
     },
     "esito": "controlla"
    },
    {
     "se": {
      "studio": "uni",
      "isee": "no"
     },
     "esito": "controlla"
    }
   ]
  },
  {
   "titolo": "Bollette: i consumi di più di 2 anni fa non si pagano",
   "sezione": "Per tutti",
   "icona": "✈️",
   "chi": "Chi riceve fatture di luce, gas o acqua con consumi di più di due anni prima (anche i ricalcoli).",
   "quanto": "Tutta la parte che riguarda i consumi prescritti.",
   "come": "Comunichi per iscritto che non paghi quella parte (si dice «eccepire la prescrizione»), con il modulo del fornitore o con il Modulo 1, in modo tracciabile: PEC o raccomandata.",
   "quando": "Vale per le bollette della luce scadute dopo il 1° marzo 2018, del gas dopo il 1° gennaio 2019, dell'acqua dopo il 1° gennaio 2020.",
   "attenzione": "Il fornitore deve segnalarti in bolletta gli importi prescritti. Con la domiciliazione bancaria quegli importi vanno esclusi in automatico: controlla.",
   "fonti": [
    {
     "nome": "ARERA, prescrizione biennale",
     "url": "https://www.arera.it/comunicati-stampa/dettaglio/it/com-stampa/20/200527"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "Non paghi i consumi di più di 2 anni fa",
   "passi": [
    "Cerca in bolletta gli importi segnalati come prescrivibili.",
    "Compila il Modulo 1 (o quello del fornitore).",
    "Mandalo con PEC o raccomandata e tieni la ricevuta."
   ],
   "lettera": "bollette",
   "regole": [
    {
     "se": {
      "evento": "bollette"
     },
     "esito": "si"
    }
   ]
  },
  {
   "titolo": "Volo in ritardo: fino a 600 €",
   "sezione": "Per tutti",
   "icona": "✈️",
   "chi": "Voli in partenza dall'UE con qualsiasi compagnia, o in arrivo nell'UE con una compagnia UE, arrivati con almeno 3 ore di ritardo.",
   "quanto": "<b>250 €</b> fino a 1.500 km. <b>400 €</b> oltre 1.500 km nell'UE e tra 1.500 e 3.500 km. <b>600 €</b> oltre 3.500 km, con almeno 4 ore di ritardo.",
   "come": "Prima la richiesta scritta alla compagnia (Modulo da compilare). Se non risponde o dice di no: reclamo all'ENAC.",
   "quando": "",
   "attenzione": "Niente compensazione per circostanze eccezionali (maltempo, sicurezza…). Se la compagnia ti mette su un altro volo che arriva con poco ritardo, l'importo può dimezzarsi. Si paga in denaro: i voucher solo se li accetti tu per iscritto.",
   "fonti": [
    {
     "nome": "Your Europe, diritti dei passeggeri aerei",
     "url": "https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_it.htm"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "250 · 400 · 600 €",
   "passi": [
    "Tieni carta d'imbarco e prenotazione.",
    "Compila il Modulo 2 e mandalo alla compagnia.",
    "Se non rispondono o dicono di no: reclamo all'ENAC."
   ],
   "lettera": "volo",
   "regole": [
    {
     "se": {
      "evento": "volo"
     },
     "esito": "si"
    }
   ]
  },
  {
   "titolo": "Treno in ritardo: 25% o 50% del biglietto",
   "sezione": "Per tutti",
   "icona": "✈️",
   "chi": "Chi arriva a destinazione con almeno 60 minuti di ritardo.",
   "quanto": "<b>25%</b> del prezzo con un ritardo tra 60 e 119 minuti. <b>50%</b> da 120 minuti in su.",
   "come": "Domanda alla compagnia ferroviaria (modulo online o modulo da compilare). Se non risponde entro un mese o dice di no: reclamo all'Autorità di regolazione dei trasporti.",
   "quando": "La compagnia deve pagare entro un mese dalla domanda; <b>in denaro</b>, se lo chiedi.",
   "attenzione": "Conta il ritardo all'arrivo. Sotto i 4 € la compagnia può non pagare. Niente indennizzo per meteo estremo o grandi catastrofi, ma lo sciopero del personale non è una scusa.",
   "fonti": [
    {
     "nome": "Your Europe, diritti dei passeggeri ferroviari",
     "url": "https://europa.eu/youreurope/citizens/travel/passenger-rights/rail/index_it.htm"
    },
    {
     "nome": "Autorità di regolazione dei trasporti",
     "url": "https://www.autorita-trasporti.it/wp-content/uploads/2021/12/Diritti_passeggeri_ferroviario.pdf"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "25% o 50% del biglietto",
   "passi": [
    "Tieni il biglietto.",
    "Usa il modulo della compagnia, il modulo UE o il Modulo 3.",
    "Se non pagano entro un mese: reclamo all'Autorità dei trasporti."
   ],
   "lettera": "treno",
   "regole": [
    {
     "se": {
      "evento": "treno"
     },
     "esito": "si"
    }
   ]
  },
  {
   "titolo": "Garanzia legale: 2 anni su quello che compri",
   "sezione": "Per tutti",
   "icona": "✈️",
   "chi": "Chi compra da un negozio o da un sito (non da un privato) un bene che si rompe o non funziona.",
   "quanto": "Riparazione o sostituzione <b>senza spese</b>. Se non arrivano: sconto sul prezzo o rimborso.",
   "come": "Ti rivolgi al <b>venditore</b>, non al produttore (Modulo da compilare).",
   "quando": "Per i difetti che compaiono entro 2 anni dalla consegna. Nel primo anno si presume che il difetto ci fosse già: tocca al venditore provare il contrario.",
   "attenzione": "La garanzia legale non si può togliere né ridurre. Non copre i danni da uso sbagliato.",
   "fonti": [
    {
     "nome": "Ministero delle Imprese, FAQ garanzie",
     "url": "https://www.mimit.gov.it/it/assistenza/domande-frequenti/le-garanzie-post-vendita-domande-frequenti-faq"
    }
   ],
   "tipo": "Va chiesta",
   "cifra": "Riparazione o cambio gratis per 2 anni",
   "passi": [
    "Tieni scontrino, fattura o ordine.",
    "Compila il Modulo 4 e mandalo al venditore."
   ],
   "lettera": "garanzia",
   "regole": [
    {
     "se": {
      "evento": "rotto"
     },
     "esito": "si"
    }
   ]
  }
 ],
 "lettere": [
  {
   "id": "bollette",
   "titolo": "Bollette prescritte",
   "dest": "Spett.le ………… PEC o indirizzo …………",
   "oggetto": "Eccezione di prescrizione biennale – fattura n. ………… del ………… – codice cliente …………",
   "corpo": [
    "Io sottoscritto/a {{NOME}}, residente in {{INDIRIZZO}}, intestatario/a della fornitura di ………… in …………, codice POD/PDR …………,",
    "eccepisco la prescrizione biennale prevista dalla legge 27 dicembre 2017, n. 205 (Legge di bilancio 2018), articolo 1, commi 4 e seguenti, come modificata dalla legge 27 dicembre 2019, n. 160, per gli importi della fattura indicata relativi a consumi risalenti a più di due anni, pari a euro ………….",
    "Chiedo quindi il ricalcolo della fattura senza gli importi prescritti e che, per quella parte, non siano avviati solleciti, sospensioni della fornitura o azioni di recupero del credito. Pagherò regolarmente la parte non prescritta."
   ],
   "allegati": "copia della fattura"
  },
  {
   "id": "volo",
   "titolo": "Volo in ritardo",
   "dest": "Spett.le ………… PEC o indirizzo …………",
   "oggetto": "Richiesta di compensazione pecuniaria – Regolamento (CE) n. 261/2004 – volo ………… del …………",
   "corpo": [
    "Io sottoscritto/a {{NOME}}, residente in {{INDIRIZZO}}, codice di prenotazione …………, ero passeggero/a del volo indicato da ………… a ………….",
    "Il volo è arrivato a destinazione con ………… ore di ritardo: arrivo previsto alle …………, arrivo effettivo alle ………….",
    "Ai sensi degli articoli 5, 6 e 7 del Regolamento (CE) n. 261/2004, come interpretati dalla Corte di giustizia dell'Unione europea, chiedo la compensazione pecuniaria di euro ………….",
    "Chiedo il pagamento in denaro con bonifico sul conto IBAN …………. Non accetto voucher. In mancanza di risposta mi rivolgerò all'ENAC."
   ],
   "allegati": "carta d'imbarco, conferma della prenotazione"
  },
  {
   "id": "treno",
   "titolo": "Treno in ritardo",
   "dest": "Spett.le ………… PEC o indirizzo …………",
   "oggetto": "Richiesta di indennizzo per ritardo – Regolamento (UE) 2021/782, articolo 19 – treno ………… del …………",
   "corpo": [
    "Io sottoscritto/a {{NOME}}, residente in {{INDIRIZZO}}, ho viaggiato sul treno indicato da ………… a …………, con il biglietto n. ………… pagato euro ………….",
    "Sono arrivato/a a destinazione con ………… minuti di ritardo.",
    "Ai sensi dell'articolo 19 del Regolamento (UE) 2021/782 chiedo l'indennizzo del …………% del prezzo del biglietto, da pagare in denaro con bonifico sul conto IBAN ………….",
    "L'indennizzo va corrisposto entro un mese dalla presentazione della domanda. In mancanza di risposta mi rivolgerò all'Autorità di regolazione dei trasporti."
   ],
   "allegati": "copia del biglietto"
  },
  {
   "id": "garanzia",
   "titolo": "Garanzia legale",
   "dest": "Spett.le ………… PEC o indirizzo …………",
   "oggetto": "Difetto di conformità – garanzia legale (Codice del Consumo, articoli 128 e seguenti) – documento n. …………",
   "corpo": [
    "Io sottoscritto/a {{NOME}}, residente in {{INDIRIZZO}}, ho acquistato da voi ………… il ………….",
    "Il prodotto presenta questo difetto: …………",
    "Ai sensi degli articoli 128 e seguenti del Codice del Consumo, il venditore risponde dei difetti di conformità che si manifestano entro due anni dalla consegna. Chiedo quindi, senza spese, ………… (riparazione o sostituzione).",
    "Se la riparazione o la sostituzione non sono possibili, chiedo la riduzione del prezzo o la risoluzione del contratto con il rimborso."
   ],
   "allegati": "copia dello scontrino, della fattura o dell'ordine; foto del difetto"
  }
 ],
 "calendario": [
  {
   "quando": "Ogni anno",
   "cosa": "Rifai l'Isee (DSU): serve per assegno unico pieno, bonus sociali, TARI, nido, università."
  },
  {
   "quando": "Entro il 31 maggio",
   "cosa": "Porta l'autocertificazione Isee alla banca, se hai il conto di base gratis."
  },
  {
   "quando": "Ogni mese",
   "cosa": "Carica sul sito Inps la ricevuta della retta del nido, pagata in modo tracciabile."
  },
  {
   "quando": "Entro 120 giorni",
   "cosa": "Dalla nascita: domanda del bonus nuovi nati da 1.000 €."
  },
  {
   "quando": "Dal 4 novembre 2026",
   "cosa": "Carte «Dedicata a te» attive: controlla gli elenchi del tuo Comune."
  },
  {
   "quando": "Entro il 16 dicembre 2026",
   "cosa": "Primo acquisto con la carta «Dedicata a te», altrimenti si perde."
  },
  {
   "quando": "Entro il 31 gennaio",
   "cosa": "Chi compie 75 anni entro questa data è esonerato dal canone Rai per tutto l'anno."
  }
 ]
};

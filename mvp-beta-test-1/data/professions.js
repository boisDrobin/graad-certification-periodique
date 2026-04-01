window.professionData = {
  medecin: {
    label: "Médecin",
    short: "Médecin",
    cycle: "Cycle de 6 ans",
    firstCycle:
      "Pour les médecins déjà diplômés avant le 1er janvier 2023, la première période peut être de 9 ans.",
    requiredPerBlock: 2,
    objective:
      "Construire un parcours équilibré dans les 4 blocs : apprendre, améliorer la pratique, renforcer la relation patient et prendre soin de sa santé.",
    note:
      "Démo inspirée des référentiels médecins. Beaucoup d’actions ci-dessous reprennent des situations très concrètes : DPC, congrès, audit clinique, groupe de pairs, dispositif d’annonce, médecin traitant, prévention du burn-out, etc.",
    blocks: [
      {
        id: "b1",
        name: "Bloc 1 · Connaissances & compétences",
        color: "linear-gradient(135deg, #0f7b8f, #2ea5bf)",
        description:
          "Actualiser ses connaissances et continuer à développer ses compétences d’exercice.",
        subparts: [
          {
            title: "Formations et diplômes",
            description:
              "Actions de formation continue, DPC, DU, DIU, e-learning, webinaires, formations structurées.",
            actions: [
              {
                id: "m-b1-a1",
                title: "Formation DPC sur l’antibiothérapie raisonnée",
                example:
                  "Exemple concret : suivre un programme DPC sur les infections respiratoires et la prescription antibiotique en cabinet.",
                tag: "Formation"
              },
              {
                id: "m-b1-a2",
                title: "DU / DIU en dermatologie, nutrition ou douleur",
                example:
                  "Exemple concret : valider un DU de dermatologie pratique pour mieux gérer les lésions fréquentes vues en médecine générale.",
                tag: "DU / DIU"
              },
              {
                id: "m-b1-a3",
                title: "Webinaire ou e-learning scientifique",
                example:
                  "Exemple concret : module en ligne sur l’IA en médecine, la téléconsultation ou la prise en charge des pathologies chroniques.",
                tag: "E-learning"
              }
            ]
          },
          {
            title: "Congrès, colloques et journées pro",
            description:
              "Présence ou participation à des événements scientifiques ou professionnels.",
            actions: [
              {
                id: "m-b1-a4",
                title: "Congrès de médecine générale",
                example:
                  "Exemple concret : assister au Congrès CMGF ou à une journée thématique sur les soins de premier recours.",
                tag: "Congrès"
              },
              {
                id: "m-b1-a5",
                title: "Journée CPTS ou journée institutionnelle",
                example:
                  "Exemple concret : participer à une journée de travail sur la coordination territoriale, l’accès aux soins ou la prévention.",
                tag: "Journée pro"
              }
            ]
          },
          {
            title: "Activités académiques",
            description:
              "Tutorat, maîtrise de stage, lecture critique, journal club.",
            actions: [
              {
                id: "m-b1-a6",
                title: "Maître de stage universitaire",
                example:
                  "Exemple concret : encadrer un interne pendant l’année universitaire et participer à sa montée en compétence.",
                tag: "Tutorat"
              },
              {
                id: "m-b1-a7",
                title: "Journal club ou revue bibliographique",
                example:
                  "Exemple concret : participer une fois par trimestre à une réunion de lecture critique d’articles sur le diabète, l’HTA ou la santé mentale.",
                tag: "Lecture critique"
              }
            ]
          }
        ]
      },
      {
        id: "b2",
        name: "Bloc 2 · Qualité des pratiques",
        color: "linear-gradient(135deg, #c06f00, #f1a91b)",
        description:
          "Analyser sa pratique réelle, améliorer la qualité et renforcer la sécurité des soins.",
        subparts: [
          {
            title: "Audit et analyse de pratiques",
            description:
              "Examiner sa pratique, repérer les écarts, améliorer ses habitudes professionnelles.",
            actions: [
              {
                id: "m-b2-a1",
                title: "Audit clinique ciblé",
                example:
                  "Exemple concret : mesurer sur 3 mois ses prescriptions d’antibiotiques ou ses renouvellements de benzodiazépines, puis corriger les écarts.",
                tag: "Audit"
              },
              {
                id: "m-b2-a2",
                title: "Groupe de pairs / groupe Balint / GLAP",
                example:
                  "Exemple concret : analyser des situations cliniques complexes avec d’autres médecins une fois tous les 2 ou 3 mois.",
                tag: "Groupe de pairs"
              }
            ]
          },
          {
            title: "Travail en équipe et coordination",
            description:
              "Coopération pluriprofessionnelle, protocoles, réunions de concertation.",
            actions: [
              {
                id: "m-b2-a3",
                title: "RCP ou réunions pluridisciplinaires",
                example:
                  "Exemple concret : participer à des réunions avec infirmier, kiné, pharmacien et médecin autour de patients diabétiques ou âgés polymédiqués.",
                tag: "Coordination"
              },
              {
                id: "m-b2-a4",
                title: "Création d’un protocole pluriprofessionnel",
                example:
                  "Exemple concret : écrire un protocole partagé sur le suivi du diabète en CPTS ou maison de santé.",
                tag: "Protocole"
              }
            ]
          },
          {
            title: "Contribution scientifique et qualité structurelle",
            description:
              "Études, registres, commissions, certification de structure.",
            actions: [
              {
                id: "m-b2-a5",
                title: "Participation à une étude ou un registre",
                example:
                  "Exemple concret : contribuer au réseau Sentinelles ou à une étude d’observation sur les infections hivernales.",
                tag: "Étude / registre"
              },
              {
                id: "m-b2-a6",
                title: "Participation à une démarche qualité de structure",
                example:
                  "Exemple concret : prendre part à une démarche de certification d’un centre de santé ou à un audit qualité interne.",
                tag: "Qualité"
              }
            ]
          }
        ]
      },
      {
        id: "b3",
        name: "Bloc 3 · Relation avec les patients",
        color: "linear-gradient(135deg, #a3313b, #db596a)",
        description:
          "Améliorer la communication, la compréhension mutuelle et la place du patient dans le soin.",
        subparts: [
          {
            title: "Communication et annonce",
            description:
              "Relation soignant-soigné, annonce, empathie, décision partagée, numérique en santé.",
            actions: [
              {
                id: "m-b3-a1",
                title: "Formation à l’annonce d’un diagnostic difficile",
                example:
                  "Exemple concret : se former à annoncer un cancer, une pathologie chronique ou une mauvaise nouvelle avec tact et clarté.",
                tag: "Communication"
              },
              {
                id: "m-b3-a2",
                title: "Formation à la relation patient en téléconsultation",
                example:
                  "Exemple concret : apprendre à mieux cadrer la téléconsultation, vérifier la compréhension du patient et sécuriser les consignes à distance.",
                tag: "Relation numérique"
              }
            ]
          },
          {
            title: "Co-construction avec les patients",
            description:
              "Actions menées avec des associations d’usagers ou programmes impliquant les patients.",
            actions: [
              {
                id: "m-b3-a3",
                title: "Atelier avec une association de patients",
                example:
                  "Exemple concret : coanimer une action de sensibilisation avec une association de patients diabétiques ou d’aidants.",
                tag: "Association"
              },
              {
                id: "m-b3-a4",
                title: "Création d’une fiche d’information claire",
                example:
                  "Exemple concret : concevoir une fiche patient simple sur la vaccination, le dépistage ou la prise d’un traitement chronique.",
                tag: "Info patient"
              }
            ]
          },
          {
            title: "Analyse de la relation soignant-soigné",
            description:
              "Retour réflexif sur les relations complexes ou émotionnellement chargées.",
            actions: [
              {
                id: "m-b3-a5",
                title: "Groupe d’analyse centré relation patient",
                example:
                  "Exemple concret : discuter d’une consultation tendue, d’un refus de soin ou d’une situation de souffrance morale du patient.",
                tag: "Analyse de pratique"
              },
              {
                id: "m-b3-a6",
                title: "Participation à un dispositif d’annonce",
                example:
                  "Exemple concret : intégrer une organisation d’annonce pour des patients atteints de pathologies lourdes ou chroniques.",
                tag: "Dispositif"
              }
            ]
          }
        ]
      },
      {
        id: "b4",
        name: "Bloc 4 · Santé du professionnel",
        color: "linear-gradient(135deg, #55771f, #8bc34a)",
        description:
          "Préserver sa santé pour pouvoir exercer durablement et dans de bonnes conditions.",
        subparts: [
          {
            title: "Suivi personnel",
            description:
              "Suivi médical, auto-évaluation, prévention personnelle.",
            actions: [
              {
                id: "m-b4-a1",
                title: "Avoir un médecin traitant et le consulter",
                example:
                  "Exemple concret : faire un bilan médical, parler fatigue, sommeil, prévention cardiovasculaire ou vaccination.",
                tag: "Suivi médical"
              },
              {
                id: "m-b4-a2",
                title: "Auto-évaluation de sa santé physique et mentale",
                example:
                  "Exemple concret : utiliser un questionnaire pour repérer surcharge, stress, risque d’épuisement ou difficultés d’équilibre vie pro/vie perso.",
                tag: "Auto-évaluation"
              }
            ]
          },
          {
            title: "Prévention et bien-être",
            description:
              "Actions de prévention, activité physique, nutrition, ergonomie, gestion du stress.",
            actions: [
              {
                id: "m-b4-a3",
                title: "Action de prévention du burn-out",
                example:
                  "Exemple concret : suivre une formation sur les risques psycho-sociaux ou sur l’organisation du temps médical pour éviter l’épuisement.",
                tag: "Prévention"
              },
              {
                id: "m-b4-a4",
                title: "Activité physique régulière sur la durée",
                example:
                  "Exemple concret : sport hebdomadaire pendant l’année avec trace de licence, attestation ou auto-déclaration.",
                tag: "Bien-être"
              }
            ]
          },
          {
            title: "Protection sociale et soutien",
            description:
              "Prévoyance, congés, soutien psychologique, actions améliorant la durabilité de l’exercice.",
            actions: [
              {
                id: "m-b4-a5",
                title: "Mise à jour de sa protection personnelle",
                example:
                  "Exemple concret : souscrire ou réviser une mutuelle, une prévoyance ou une assurance perte d’exploitation.",
                tag: "Protection"
              },
              {
                id: "m-b4-a6",
                title: "Groupe de soutien ou analyse de pratiques",
                example:
                  "Exemple concret : participer à un groupe de pairs qui aide aussi à prendre du recul sur la charge émotionnelle du métier.",
                tag: "Soutien"
              }
            ]
          }
        ]
      }
    ]
  },

  infirmier: {
    label: "Infirmier",
    short: "Infirmier",
    cycle: "Cycle de 6 ans",
    firstCycle:
      "Parcours organisé autour de 4 blocs, avec un socle commun et des déclinaisons selon l’exercice.",
    requiredPerBlock: 2,
    objective:
      "Montrer que l’infirmier maintient ses connaissances, sécurise ses pratiques, renforce la relation avec les patients et préserve sa santé au travail.",
    note:
      "Les exemples ci-dessous sont pensés pour être très parlants dans un usage terrain : soins techniques, coordination, éducation du patient, prévention des TMS et de l’épuisement.",
    blocks: [
      {
        id: "b1",
        name: "Bloc 1 · Connaissances & compétences",
        color: "linear-gradient(135deg, #0f7b8f, #2ea5bf)",
        description:
          "Rester à jour sur les soins infirmiers, les recommandations et les nouveaux contextes d’exercice.",
        subparts: [
          {
            title: "Formations cliniques",
            description:
              "Soins techniques, mise à jour réglementaire, pratiques spécialisées, prévention.",
            actions: [
              {
                id: "i-b1-a1",
                title: "Formation sur les plaies et cicatrisation",
                example:
                  "Exemple concret : réviser l’évaluation d’une plaie chronique, le choix des pansements et le suivi à domicile.",
                tag: "Formation"
              },
              {
                id: "i-b1-a2",
                title: "Formation sur la prise en charge de la douleur",
                example:
                  "Exemple concret : mieux évaluer une douleur post-opératoire ou chronique avec des outils adaptés au patient.",
                tag: "Formation"
              },
              {
                id: "i-b1-a3",
                title: "Webinaire sur les nouvelles recommandations vaccinales",
                example:
                  "Exemple concret : mise à jour sur les rappels, les publics fragiles et la traçabilité des vaccinations.",
                tag: "Webinaire"
              }
            ]
          },
          {
            title: "Compétences transversales",
            description:
              "Coordination, numérique, parcours patient, pratiques avancées selon le contexte.",
            actions: [
              {
                id: "i-b1-a4",
                title: "Formation au dossier patient informatisé",
                example:
                  "Exemple concret : mieux tracer les soins, les transmissions ciblées et les événements indésirables.",
                tag: "Numérique"
              },
              {
                id: "i-b1-a5",
                title: "Journée professionnelle infirmière",
                example:
                  "Exemple concret : assister à une journée sur les parcours chroniques, l’ETP ou les coopérations ville-hôpital.",
                tag: "Journée pro"
              }
            ]
          }
        ]
      },
      {
        id: "b2",
        name: "Bloc 2 · Qualité des pratiques",
        color: "linear-gradient(135deg, #c06f00, #f1a91b)",
        description:
          "Sécuriser les gestes, améliorer les transmissions et renforcer la qualité des soins.",
        subparts: [
          {
            title: "Analyse de pratiques et sécurité",
            description:
              "Audit, revue de cas, retour sur incidents, amélioration continue.",
            actions: [
              {
                id: "i-b2-a1",
                title: "Audit sur l’identitovigilance",
                example:
                  "Exemple concret : vérifier la bonne identification des patients avant administration de traitements ou prélèvements.",
                tag: "Audit"
              },
              {
                id: "i-b2-a2",
                title: "Revue de pratiques sur l’administration des médicaments",
                example:
                  "Exemple concret : analyser les erreurs évitées de justesse, les doubles vérifications et la traçabilité.",
                tag: "Analyse"
              }
            ]
          },
          {
            title: "Travail en équipe",
            description:
              "Transmissions, protocoles, coordination interprofessionnelle.",
            actions: [
              {
                id: "i-b2-a3",
                title: "Participation à un protocole de soins partagé",
                example:
                  "Exemple concret : contribuer à un protocole de suivi de patient diabétique avec médecin, diététicien et pharmacien.",
                tag: "Protocole"
              },
              {
                id: "i-b2-a4",
                title: "Réunion de coordination pluriprofessionnelle",
                example:
                  "Exemple concret : réunion de suivi pour un patient âgé fragile à domicile avec médecin traitant, kiné et SSIAD.",
                tag: "Coordination"
              }
            ]
          }
        ]
      },
      {
        id: "b3",
        name: "Bloc 3 · Relation avec les patients",
        color: "linear-gradient(135deg, #a3313b, #db596a)",
        description:
          "Renforcer l’écoute, la pédagogie et l’accompagnement du patient et de ses proches.",
        subparts: [
          {
            title: "Communication et éducation",
            description:
              "Explication des soins, adhésion du patient, pédagogie, décision partagée.",
            actions: [
              {
                id: "i-b3-a1",
                title: "Atelier d’éducation thérapeutique",
                example:
                  "Exemple concret : atelier sur l’insuline, la glycémie, l’alimentation et les gestes du quotidien pour un patient diabétique.",
                tag: "ETP"
              },
              {
                id: "i-b3-a2",
                title: "Formation à la communication en situation délicate",
                example:
                  "Exemple concret : mieux parler à un patient anxieux, douloureux ou agressif, et mieux gérer la relation avec les proches.",
                tag: "Communication"
              }
            ]
          },
          {
            title: "Lien avec les usagers",
            description:
              "Actions impliquant les patients, associations ou amélioration de l’information.",
            actions: [
              {
                id: "i-b3-a3",
                title: "Création d’un support d’information patient",
                example:
                  "Exemple concret : fiche simple sur la préparation d’un pansement complexe ou sur la surveillance après retour à domicile.",
                tag: "Info patient"
              },
              {
                id: "i-b3-a4",
                title: "Participation à une action avec des représentants d’usagers",
                example:
                  "Exemple concret : groupe de travail sur l’accueil, la compréhension des consignes ou l’expérience patient.",
                tag: "Usagers"
              }
            ]
          }
        ]
      },
      {
        id: "b4",
        name: "Bloc 4 · Santé du professionnel",
        color: "linear-gradient(135deg, #55771f, #8bc34a)",
        description:
          "Prévenir l’usure professionnelle, protéger sa santé physique et psychique.",
        subparts: [
          {
            title: "Prévention santé et ergonomie",
            description:
              "TMS, fatigue, manutention, hygiène de vie, stress.",
            actions: [
              {
                id: "i-b4-a1",
                title: "Formation prévention TMS et manutention",
                example:
                  "Exemple concret : revoir les bons gestes pour les transferts patients, la posture et le matériel d’aide au déplacement.",
                tag: "Ergonomie"
              },
              {
                id: "i-b4-a2",
                title: "Suivi médical et vaccinations professionnelles",
                example:
                  "Exemple concret : visite de santé au travail, rappels vaccinaux et discussion sur la fatigue ou les horaires décalés.",
                tag: "Suivi"
              }
            ]
          },
          {
            title: "Prévention de l’épuisement",
            description:
              "Charge mentale, stress, équilibre de l’exercice, soutien collectif.",
            actions: [
              {
                id: "i-b4-a3",
                title: "Atelier prévention du burn-out",
                example:
                  "Exemple concret : apprendre à repérer les signaux faibles d’épuisement et à réorganiser sa charge de travail.",
                tag: "Prévention"
              },
              {
                id: "i-b4-a4",
                title: "Activité physique ou routine bien-être durable",
                example:
                  "Exemple concret : marche active, natation, yoga ou sport hebdomadaire maintenu dans le temps.",
                tag: "Bien-être"
              }
            ]
          }
        ]
      }
    ]
  },

  dentiste: {
    label: "Chirurgien-dentiste",
    short: "Dentiste",
    cycle: "Cycle de 6 ans",
    firstCycle:
      "Le parcours doit rester équilibré sur les 4 blocs, avec traçabilité des actions.",
    requiredPerBlock: 2,
    objective:
      "Maintenir un haut niveau technique, qualité et sécurité des soins bucco-dentaires, communication patient et santé du praticien.",
    note:
      "Exemples très concrets de cabinet : radioprotection, stérilisation, information pré-opératoire, prévention des TMS, gestion du stress opératoire.",
    blocks: [
      {
        id: "b1",
        name: "Bloc 1 · Connaissances & compétences",
        color: "linear-gradient(135deg, #0f7b8f, #2ea5bf)",
        description:
          "Actualiser ses connaissances en prévention, techniques, chirurgie, prothèse, imagerie, réglementation.",
        subparts: [
          {
            title: "Formations cliniques et techniques",
            description:
              "Implantologie, endodontie, prévention, soins conservateurs, imagerie, urgences.",
            actions: [
              {
                id: "d-b1-a1",
                title: "Formation sur les urgences au cabinet dentaire",
                example:
                  "Exemple concret : conduite à tenir face à un malaise vagal, une urgence allergique ou une douleur aiguë.",
                tag: "Formation"
              },
              {
                id: "d-b1-a2",
                title: "Journée scientifique sur l’endodontie ou l’implantologie",
                example:
                  "Exemple concret : mettre à jour ses pratiques sur l’obturation canalaire, l’asepsie ou la pose d’implants.",
                tag: "Journée scientifique"
              }
            ]
          },
          {
            title: "Compétences réglementaires et sécurité",
            description:
              "Radioprotection, hygiène, stérilisation, traçabilité, nouveautés réglementaires.",
            actions: [
              {
                id: "d-b1-a3",
                title: "Formation radioprotection",
                example:
                  "Exemple concret : revoir les règles de sécurité, le bon usage de l’imagerie et la traçabilité associée.",
                tag: "Radioprotection"
              },
              {
                id: "d-b1-a4",
                title: "Formation stérilisation et circuit du matériel",
                example:
                  "Exemple concret : sécuriser la chaîne de stérilisation des instruments et la conformité du cabinet.",
                tag: "Hygiène"
              }
            ]
          }
        ]
      },
      {
        id: "b2",
        name: "Bloc 2 · Qualité des pratiques",
        color: "linear-gradient(135deg, #c06f00, #f1a91b)",
        description:
          "Sécuriser les actes, analyser les écarts et améliorer l’organisation du cabinet.",
        subparts: [
          {
            title: "Audit de cabinet",
            description:
              "Analyse des pratiques, qualité, traçabilité, hygiène et sécurité.",
            actions: [
              {
                id: "d-b2-a1",
                title: "Audit de stérilisation",
                example:
                  "Exemple concret : vérifier les cycles, le stockage, la traçabilité des lots et la conformité des procédures.",
                tag: "Audit"
              },
              {
                id: "d-b2-a2",
                title: "Revue des complications post-acte",
                example:
                  "Exemple concret : analyser les suites opératoires compliquées ou les reprises de traitement pour améliorer les protocoles.",
                tag: "Analyse"
              }
            ]
          },
          {
            title: "Travail collectif et protocoles",
            description:
              "Organisation d’équipe, protocoles internes, coordination avec d’autres professionnels.",
            actions: [
              {
                id: "d-b2-a3",
                title: "Protocole interne sur la prise en charge de l’urgence",
                example:
                  "Exemple concret : procédure claire pour douleur aiguë, abcès, accident d’exposition au sang ou allergie au cabinet.",
                tag: "Protocole"
              },
              {
                id: "d-b2-a4",
                title: "Réunion qualité avec assistant(e) et équipe",
                example:
                  "Exemple concret : améliorer l’accueil, la préparation des salles et la traçabilité des actes.",
                tag: "Qualité"
              }
            ]
          }
        ]
      },
      {
        id: "b3",
        name: "Bloc 3 · Relation avec les patients",
        color: "linear-gradient(135deg, #a3313b, #db596a)",
        description:
          "Renforcer l’explication des soins, le consentement, la pédagogie et la confiance.",
        subparts: [
          {
            title: "Pédagogie et consentement",
            description:
              "Explication du plan de traitement, consentement éclairé, compréhension du patient.",
            actions: [
              {
                id: "d-b3-a1",
                title: "Formation à l’information pré-opératoire",
                example:
                  "Exemple concret : mieux expliquer un devis, un traitement implantaire ou une extraction compliquée avant l’acte.",
                tag: "Information"
              },
              {
                id: "d-b3-a2",
                title: "Création de fiches patient post-soins",
                example:
                  "Exemple concret : document clair sur l’alimentation, les antalgiques, l’hygiène et les signes d’alerte après extraction.",
                tag: "Fiche patient"
              }
            ]
          },
          {
            title: "Gestion de la peur et de la relation",
            description:
              "Accompagnement du patient anxieux, enfant, personne vulnérable ou phobique.",
            actions: [
              {
                id: "d-b3-a3",
                title: "Formation à la prise en charge du patient anxieux",
                example:
                  "Exemple concret : mieux accueillir un patient qui a peur du bruit, de la douleur ou de la seringue.",
                tag: "Relation"
              },
              {
                id: "d-b3-a4",
                title: "Action avec des usagers ou retours patients",
                example:
                  "Exemple concret : recueillir les retours de patients sur la compréhension des consignes et sur l’expérience au cabinet.",
                tag: "Usagers"
              }
            ]
          }
        ]
      },
      {
        id: "b4",
        name: "Bloc 4 · Santé du professionnel",
        color: "linear-gradient(135deg, #55771f, #8bc34a)",
        description:
          "Prévenir les TMS, la fatigue visuelle, le stress et l’usure du cabinet.",
        subparts: [
          {
            title: "Ergonomie et prévention physique",
            description:
              "Postures, charge musculo-squelettique, environnement de travail.",
            actions: [
              {
                id: "d-b4-a1",
                title: "Formation ergonomie au fauteuil",
                example:
                  "Exemple concret : corriger sa posture, celle de l’assistante et la hauteur du matériel pour limiter douleurs cervicales et lombaires.",
                tag: "Ergonomie"
              },
              {
                id: "d-b4-a2",
                title: "Suivi médical personnel",
                example:
                  "Exemple concret : bilan de santé, contrôle visuel, fatigue, sommeil, prévention cardiovasculaire.",
                tag: "Suivi"
              }
            ]
          },
          {
            title: "Stress et durabilité de l’exercice",
            description:
              "Prévention burn-out, équilibre de l’activité, récupération.",
            actions: [
              {
                id: "d-b4-a3",
                title: "Atelier gestion du stress opératoire",
                example:
                  "Exemple concret : mieux gérer charge mentale, retards, douleur patient, urgences et pression du cabinet.",
                tag: "Stress"
              },
              {
                id: "d-b4-a4",
                title: "Routine bien-être durable",
                example:
                  "Exemple concret : sport régulier, pauses actives, organisation du planning, temps de récupération.",
                tag: "Bien-être"
              }
            ]
          }
        ]
      }
    ]
  },

  sagefemme: {
    label: "Sage-femme",
    short: "Sage-femme",
    cycle: "Cycle de 6 ans",
    firstCycle:
      "Le parcours maïeutique s’organise aussi autour des 4 blocs, avec un équilibre entre compétences, qualité, relation et santé du professionnel.",
    requiredPerBlock: 2,
    objective:
      "Actualiser les compétences en santé génésique et périnatale, sécuriser la pratique, renforcer la relation avec la femme, le couple et l’entourage, et préserver sa santé professionnelle.",
    note:
      "Exemples terrain : grossesse, post-partum, suivi gynécologique de prévention, coordination ville-hôpital, accompagnement émotionnel, fatigue et charge mentale.",
    blocks: [
      {
        id: "b1",
        name: "Bloc 1 · Connaissances & compétences",
        color: "linear-gradient(135deg, #0f7b8f, #2ea5bf)",
        description:
          "Actualiser les connaissances maïeutiques, obstétricales, gynécologiques et préventives.",
        subparts: [
          {
            title: "Grossesse, naissance et post-partum",
            description:
              "Surveillance, dépistage, prévention, prise en charge périnatale.",
            actions: [
              {
                id: "s-b1-a1",
                title: "Formation sur la surveillance de grossesse",
                example:
                  "Exemple concret : mise à jour sur les facteurs de risque, le dépistage, l’accompagnement de la grossesse physiologique et l’orientation si besoin.",
                tag: "Formation"
              },
              {
                id: "s-b1-a2",
                title: "Formation sur le post-partum et l’allaitement",
                example:
                  "Exemple concret : mieux accompagner le retour à domicile, l’allaitement, la douleur, la fatigue maternelle et les signes d’alerte.",
                tag: "Post-partum"
              }
            ]
          },
          {
            title: "Prévention et santé de la femme",
            description:
              "Suivi gynécologique de prévention, santé sexuelle, santé environnementale.",
            actions: [
              {
                id: "s-b1-a3",
                title: "Formation sur le suivi gynécologique de prévention",
                example:
                  "Exemple concret : contraception, dépistage, vaccination, consultation de prévention chez la jeune femme ou après accouchement.",
                tag: "Prévention"
              },
              {
                id: "s-b1-a4",
                title: "Journée sur les avancées maïeutiques",
                example:
                  "Exemple concret : participer à une journée sur la santé environnementale, l’éco-responsabilité ou les nouvelles recommandations en périnatalité.",
                tag: "Journée pro"
              }
            ]
          }
        ]
      },
      {
        id: "b2",
        name: "Bloc 2 · Qualité des pratiques",
        color: "linear-gradient(135deg, #c06f00, #f1a91b)",
        description:
          "Améliorer la sécurité, la coordination et la qualité du parcours périnatal.",
        subparts: [
          {
            title: "Analyse et sécurisation des pratiques",
            description:
              "Revues de cas, analyse de parcours, mise à jour des protocoles.",
            actions: [
              {
                id: "s-b2-a1",
                title: "Revue de dossiers post-partum",
                example:
                  "Exemple concret : analyser la qualité des transmissions, la détection des complications et l’organisation du suivi après accouchement.",
                tag: "Analyse"
              },
              {
                id: "s-b2-a2",
                title: "Audit sur le repérage des situations à risque",
                example:
                  "Exemple concret : revoir le dépistage de l’HTA, des signes d’alerte, des vulnérabilités psycho-sociales ou des violences.",
                tag: "Audit"
              }
            ]
          },
          {
            title: "Coordination du parcours",
            description:
              "Travail avec maternité, médecins, PMI, lactation, pédiatrie et partenaires du territoire.",
            actions: [
              {
                id: "s-b2-a3",
                title: "Réunion de coordination périnatale",
                example:
                  "Exemple concret : réunion ville-hôpital pour fluidifier le suivi des femmes enceintes vulnérables ou la sortie de maternité.",
                tag: "Coordination"
              },
              {
                id: "s-b2-a4",
                title: "Mise à jour d’un protocole de suivi",
                example:
                  "Exemple concret : améliorer un protocole local de suivi post-natal, de vaccination ou de repérage des urgences obstétricales.",
                tag: "Protocole"
              }
            ]
          }
        ]
      },
      {
        id: "b3",
        name: "Bloc 3 · Relation avec les patientes",
        color: "linear-gradient(135deg, #a3313b, #db596a)",
        description:
          "Renforcer la relation avec la femme, le couple, l’enfant et l’entourage dans une approche globale.",
        subparts: [
          {
            title: "Communication et accompagnement",
            description:
              "Préparation à la naissance, écoute, accompagnement émotionnel, consentement.",
            actions: [
              {
                id: "s-b3-a1",
                title: "Atelier préparation à la naissance et parentalité",
                example:
                  "Exemple concret : accompagner les futurs parents sur l’accouchement, l’accueil du bébé, les choix et les peurs.",
                tag: "Accompagnement"
              },
              {
                id: "s-b3-a2",
                title: "Formation à l’entretien sensible",
                example:
                  "Exemple concret : mieux conduire un entretien en cas de deuil périnatal, d’IVG, d’anxiété maternelle ou de violence repérée.",
                tag: "Communication"
              }
            ]
          },
          {
            title: "Supports et coopération avec les usagers",
            description:
              "Information claire, travail avec les patientes, associations et aidants.",
            actions: [
              {
                id: "s-b3-a3",
                title: "Création d’un support d’information patiente",
                example:
                  "Exemple concret : fiche claire sur les signes d’alerte du post-partum, l’allaitement ou la consultation de suivi gynécologique.",
                tag: "Info patiente"
              },
              {
                id: "s-b3-a4",
                title: "Action avec une association de soutien",
                example:
                  "Exemple concret : intervention commune avec une association autour de l’allaitement, du deuil périnatal ou de la parentalité.",
                tag: "Association"
              }
            ]
          }
        ]
      },
      {
        id: "b4",
        name: "Bloc 4 · Santé du professionnel",
        color: "linear-gradient(135deg, #55771f, #8bc34a)",
        description:
          "Prendre en compte la charge physique et émotionnelle du métier de sage-femme.",
        subparts: [
          {
            title: "Préservation physique",
            description:
              "Fatigue, horaires, posture, vigilance, récupération.",
            actions: [
              {
                id: "s-b4-a1",
                title: "Bilan de santé personnel",
                example:
                  "Exemple concret : suivi du sommeil, de la fatigue, de la charge physique et des contraintes de garde ou d’astreinte.",
                tag: "Suivi"
              },
              {
                id: "s-b4-a2",
                title: "Action prévention santé et activité physique",
                example:
                  "Exemple concret : programme durable de sport, de marche ou d’entretien physique pour tenir la durée dans l’exercice.",
                tag: "Prévention"
              }
            ]
          },
          {
            title: "Charge émotionnelle et soutien",
            description:
              "Prévenir l’épuisement, travailler le recul et la stabilité émotionnelle.",
            actions: [
              {
                id: "s-b4-a3",
                title: "Groupe de parole ou d’analyse de situations",
                example:
                  "Exemple concret : partager des situations lourdes en salle de naissance, en post-partum ou en contexte de vulnérabilité familiale.",
                tag: "Soutien"
              },
              {
                id: "s-b4-a4",
                title: "Formation prévention de l’épuisement professionnel",
                example:
                  "Exemple concret : repérer les signaux faibles de surcharge, mieux poser des limites et protéger son équilibre pro/perso.",
                tag: "Burn-out"
              }
            ]
          }
        ]
      }
    ]
  },

  pharmacien: {
    label: "Pharmacien",
    short: "Pharmacien",
    cycle: "Cycle de 6 ans",
    firstCycle:
      "Le parcours s’organise lui aussi autour de 4 blocs avec des preuves d’actions menées pendant la période de certification.",
    requiredPerBlock: 2,
    objective:
      "Actualiser ses connaissances, sécuriser la dispensation et le conseil, renforcer la relation avec le patient et protéger sa santé professionnelle.",
    note:
      "Le scénario pharmacien met l’accent sur la dispensation, la conciliation, l’entretien patient, la prévention, la qualité et la charge mentale officinale ou hospitalière.",
    blocks: [
      {
        id: "b1",
        name: "Bloc 1 · Connaissances & compétences",
        color: "linear-gradient(135deg, #0f7b8f, #2ea5bf)",
        description:
          "Rester à jour sur les traitements, les recommandations, la prévention et les nouvelles missions.",
        subparts: [
          {
            title: "Mise à jour thérapeutique",
            description:
              "Pharmacologie, nouvelles recommandations, vaccinations, entretiens, pathologies chroniques.",
            actions: [
              {
                id: "p-b1-a1",
                title: "Formation sur les anticoagulants ou psychotropes",
                example:
                  "Exemple concret : revoir interactions, surveillance, messages clés au patient et sécurisation de la délivrance.",
                tag: "Formation"
              },
              {
                id: "p-b1-a2",
                title: "Formation vaccination en officine",
                example:
                  "Exemple concret : mettre à jour les schémas vaccinaux, contre-indications, traçabilité et information patient.",
                tag: "Prévention"
              }
            ]
          },
          {
            title: "Nouvelles missions et pratique",
            description:
              "Entretiens, prévention, coordination, numérique.",
            actions: [
              {
                id: "p-b1-a3",
                title: "Journée pro sur les nouvelles missions du pharmacien",
                example:
                  "Exemple concret : dépistage, accompagnement des patients chroniques, vaccination, conciliation médicamenteuse.",
                tag: "Journée pro"
              },
              {
                id: "p-b1-a4",
                title: "Webinaire sur l’optimisation des bilans partagés de médication",
                example:
                  "Exemple concret : apprendre à structurer un entretien utile et exploitable pour le patient et le prescripteur.",
                tag: "Webinaire"
              }
            ]
          }
        ]
      },
      {
        id: "b2",
        name: "Bloc 2 · Qualité des pratiques",
        color: "linear-gradient(135deg, #c06f00, #f1a91b)",
        description:
          "Améliorer la sécurisation de la dispensation, la qualité du conseil et la coordination thérapeutique.",
        subparts: [
          {
            title: "Sécurisation des pratiques",
            description:
              "Analyse d’erreurs, dispensation, traçabilité, organisation.",
            actions: [
              {
                id: "p-b2-a1",
                title: "Audit sur les délivrances à risque",
                example:
                  "Exemple concret : revoir les délivrances de méthotrexate, AVK, opioïdes ou traitements tératogènes pour réduire les erreurs.",
                tag: "Audit"
              },
              {
                id: "p-b2-a2",
                title: "Analyse des erreurs évitées de justesse",
                example:
                  "Exemple concret : consigner et discuter les quasi-accidents liés aux dosages, interactions ou confusions de spécialités.",
                tag: "Analyse"
              }
            ]
          },
          {
            title: "Coordination thérapeutique",
            description:
              "Lien avec médecin, infirmier, EHPAD, hôpital, coordination de parcours.",
            actions: [
              {
                id: "p-b2-a3",
                title: "Réunion pluriprofessionnelle de coordination",
                example:
                  "Exemple concret : discuter des traitements d’un patient âgé polymédiqué avec le médecin traitant et l’infirmier.",
                tag: "Coordination"
              },
              {
                id: "p-b2-a4",
                title: "Construction d’un protocole de sécurisation",
                example:
                  "Exemple concret : mettre à jour une procédure interne sur les ordonnances sensibles ou les stupéfiants.",
                tag: "Protocole"
              }
            ]
          }
        ]
      },
      {
        id: "b3",
        name: "Bloc 3 · Relation avec les patients",
        color: "linear-gradient(135deg, #a3313b, #db596a)",
        description:
          "Mieux informer, expliquer et accompagner l’usage correct des traitements.",
        subparts: [
          {
            title: "Conseil et entretien patient",
            description:
              "Adhésion thérapeutique, compréhension des traitements, prévention.",
            actions: [
              {
                id: "p-b3-a1",
                title: "Entretien pharmaceutique patient chronique",
                example:
                  "Exemple concret : aider un patient sous anticoagulant à comprendre son traitement, ses risques et sa surveillance.",
                tag: "Entretien"
              },
              {
                id: "p-b3-a2",
                title: "Création d’un support de bon usage",
                example:
                  "Exemple concret : fiche très claire sur l’usage d’un inhalateur, d’une insuline ou d’un antibiotique.",
                tag: "Info patient"
              }
            ]
          },
          {
            title: "Relation de confiance et prévention",
            description:
              "Pédagogie, écoute, repérage, travail avec les usagers.",
            actions: [
              {
                id: "p-b3-a3",
                title: "Action de prévention en officine",
                example:
                  "Exemple concret : semaine de sensibilisation sur le sommeil, le sevrage tabagique ou l’automédication responsable.",
                tag: "Prévention"
              },
              {
                id: "p-b3-a4",
                title: "Formation communication patient difficile",
                example:
                  "Exemple concret : mieux gérer un patient pressé, inquiet, non observant ou en demande inadaptée.",
                tag: "Communication"
              }
            ]
          }
        ]
      },
      {
        id: "b4",
        name: "Bloc 4 · Santé du professionnel",
        color: "linear-gradient(135deg, #55771f, #8bc34a)",
        description:
          "Préserver sa santé physique et mentale dans un environnement souvent intense.",
        subparts: [
          {
            title: "Santé personnelle et rythme de travail",
            description:
              "Bilan, fatigue, récupération, prévention des troubles liés à la station debout et au stress.",
            actions: [
              {
                id: "p-b4-a1",
                title: "Bilan de santé personnel",
                example:
                  "Exemple concret : faire le point sur fatigue chronique, sommeil, stress, prévention cardiovasculaire et vaccinations.",
                tag: "Suivi"
              },
              {
                id: "p-b4-a2",
                title: "Prévention des douleurs et de la fatigue physique",
                example:
                  "Exemple concret : améliorer posture au comptoir, pauses, ergonomie du poste et rotation des tâches.",
                tag: "Ergonomie"
              }
            ]
          },
          {
            title: "Prévention de la surcharge mentale",
            description:
              "Stress, flux de patients, charge administrative, tension de l’officine ou du service.",
            actions: [
              {
                id: "p-b4-a3",
                title: "Atelier gestion du stress officinal",
                example:
                  "Exemple concret : mieux gérer les pics d’affluence, les ruptures, les tensions et la fatigue décisionnelle.",
                tag: "Stress"
              },
              {
                id: "p-b4-a4",
                title: "Routine bien-être durable",
                example:
                  "Exemple concret : activité physique hebdomadaire, temps de récupération, respiration ou organisation personnelle.",
                tag: "Bien-être"
              }
            ]
          }
        ]
      }
    ]
  }
};
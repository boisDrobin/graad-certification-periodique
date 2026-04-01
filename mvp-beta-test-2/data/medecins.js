(function () {
  "use strict";

  if (!window.CERTIFICATION_DATA || !Array.isArray(window.CERTIFICATION_DATA.professions)) {
    console.error("CERTIFICATION_DATA doit être initialisé avant de charger medecins.js");
    return;
  }

  window.CERTIFICATION_DATA.professions.push({
    id: "medecins",
    label: "Médecin",
    profiles: [
      {
        id: "medecin-generaliste",
        label: "Médecin généraliste",
        fullTitle: "Certification Périodique du Médecin Généraliste",
        subtitle: "Spécialité : médecine générale",
        icon: "🩺",
        theme: {
          primary: "#0f766e",
          primary2: "#115e59",
          accent: "#2563eb"
        },
        blocks: [
          {
            id: "bloc1",
            label: "Bloc 1",
            shortLabel: "Connaissances et compétences",
            colorClass: "bloc1",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation médecine générale : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Action de formation au titre du DPC publiée par l’ANDPC ou le FAF",
              "Action de formation scientifique ou professionnelle par organisme labellisé Qualiopi ou structure figurant sur la liste publique",
              "Formation certifiante ou diplômante dans le champ de la médecine générale",
              "Organisation, intervention ou participation à une journée, colloque ou conférence scientifique ou professionnelle",
              "Participation à une rencontre institutionnelle sur au moins 1 journée",
              "Tutorat ou maîtrise de stage en médecine générale ou pour d’autres professions de santé pendant au moins 1 an",
              "Revues bibliographiques ou journal club selon la méthode HAS",
              "Test de lecture d’une revue médicale réussi"
            ],
            actions: [
              {
                id: "mg_b1_dpc",
                label: "Action de formation DPC / FAF",
                hint: "Attestation de formation."
              },
              {
                id: "mg_b1_qualiopi",
                label: "Formation scientifique ou professionnelle par organisme Qualiopi / liste publique",
                hint: "Attestation de formation."
              },
              {
                id: "mg_b1_diu",
                label: "Formation certifiante ou diplômante en médecine générale",
                hint: "DU, DIU ou autre formation certifiante."
              },
              {
                id: "mg_b1_colloque",
                label: "Journée, colloque ou conférence scientifique / professionnelle",
                hint: "Participation, organisation ou intervention."
              },
              {
                id: "mg_b1_institution",
                label: "Rencontre institutionnelle sur au moins 1 journée",
                hint: "Ex. HAS, ARS, CNAM, CMG, Universités, etc."
              },
              {
                id: "mg_b1_tutorat",
                label: "Tutorat ou maîtrise de stage",
                hint: "Pendant au moins 1 an."
              },
              {
                id: "mg_b1_journalclub",
                label: "Revue bibliographique ou journal club",
                hint: "Méthode HAS, avec réunions régulières."
              },
              {
                id: "mg_b1_test_lecture",
                label: "Test de lecture d’une revue médicale réussi",
                hint: "Sur au moins 1 an de lecture."
              }
            ]
          },
          {
            id: "bloc2",
            label: "Bloc 2",
            shortLabel: "Qualité des pratiques et des soins",
            colorClass: "bloc2",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation médecine générale : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Action d’analyse de pratiques et gestion des risques publiée par l’ANDPC ou le FAF",
              "Action d’analyse de pratiques et de gestion des risques par organisme Qualiopi / liste publique",
              "Participation à au moins 1 expertise ou commission institutionnelle",
              "Participation à des réunions de concertation pluridisciplinaires",
              "Participation à l’élaboration d’un protocole pluriprofessionnel",
              "Participation à au moins 1 audit clinique selon la méthode HAS",
              "Contribution pendant au moins 1 an à un registre / observatoire / base de données",
              "Participation comme investigateur dans une étude scientifique",
              "Démarche de certification et d’accréditation d’une structure de soins",
              "Participation à un groupe d’analyse de pratiques selon la méthode HAS",
              "Publication en premier auteur d’un travail scientifique",
              "Participation au comité éditorial ou de lecture d’une revue scientifique"
            ],
            actions: [
              {
                id: "mg_b2_dpc",
                label: "Action d’analyse de pratiques / gestion des risques DPC ou FAF",
                hint: "Attestation de formation."
              },
              {
                id: "mg_b2_qualiopi",
                label: "Action d’analyse de pratiques par organisme Qualiopi / liste publique",
                hint: "Attestation de formation."
              },
              {
                id: "mg_b2_expertise",
                label: "Expertise ou commission institutionnelle",
                hint: "Participation à au moins 1 expertise."
              },
              {
                id: "mg_b2_rcp",
                label: "Réunions de concertation pluridisciplinaires",
                hint: "Au moins 4 réunions sur au moins 1 an."
              },
              {
                id: "mg_b2_protocole",
                label: "Élaboration d’un protocole pluriprofessionnel",
                hint: "Dans un groupe de travail."
              },
              {
                id: "mg_b2_audit",
                label: "Audit clinique selon la méthode HAS",
                hint: "Attestation de participation."
              },
              {
                id: "mg_b2_registre",
                label: "Registre / observatoire / base de données",
                hint: "Contribution pendant au moins 1 an."
              },
              {
                id: "mg_b2_etude",
                label: "Participation à une étude scientifique",
                hint: "Comme investigateur ou co-investigateur."
              },
              {
                id: "mg_b2_certif",
                label: "Certification / accréditation d’une structure de soins",
                hint: "Avec amélioration des pratiques."
              },
              {
                id: "mg_b2_gap",
                label: "Groupe d’analyse de pratiques",
                hint: "Méthode HAS, au moins 4 réunions sur 1 an."
              },
              {
                id: "mg_b2_publication",
                label: "Publication scientifique en premier auteur",
                hint: "Revue de la profession."
              },
              {
                id: "mg_b2_comite",
                label: "Comité éditorial / comité de lecture",
                hint: "Participation à une revue scientifique."
              }
            ]
          },
          {
            id: "bloc3",
            label: "Bloc 3",
            shortLabel: "Relation avec les patients",
            colorClass: "bloc3",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation médecine générale : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Action d’analyse de pratiques dans le champ de la relation avec les patients",
              "Formation certifiante ou diplômante dans le champ de la relation avec les patients",
              "Action réalisée dans le cadre d’une association d’usagers du système de santé agréée",
              "Contribution à un registre / observatoire / base de données intégrant des données patients",
              "Participation à un dispositif d’annonce",
              "Participation à un groupe d’analyse de pratiques centré sur la relation avec le patient"
            ],
            actions: [
              {
                id: "mg_b3_formation_relation",
                label: "Formation sur la relation avec les patients",
                hint: "DPC, Qualiopi ou structure listée."
              },
              {
                id: "mg_b3_diu_relation",
                label: "Formation certifiante / diplômante relation patient",
                hint: "DU, DIU ou équivalent."
              },
              {
                id: "mg_b3_association",
                label: "Action avec une association d’usagers / association de patients",
                hint: "Sensibilisation, fiche patient, enquête, programme, etc."
              },
              {
                id: "mg_b3_registre_patient",
                label: "Registre / observatoire intégrant des données patients",
                hint: "Contribution pendant au moins 1 an."
              },
              {
                id: "mg_b3_annonce",
                label: "Dispositif d’annonce",
                hint: "Participation avec réunions régulières."
              },
              {
                id: "mg_b3_gap_relation",
                label: "Groupe d’analyse de pratiques centré sur la relation patient",
                hint: "Ex. groupe Balint, groupe de pairs, GLAP."
              }
            ]
          },
          {
            id: "bloc4",
            label: "Bloc 4",
            shortLabel: "Santé personnelle du professionnel",
            colorClass: "bloc4",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation médecine générale : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Avoir un médecin traitant et l’avoir consulté pendant la période de certification",
              "Réaliser une auto-évaluation de son état de santé",
              "Action de gestion des risques professionnels publiée par l’ANDPC ou le FAF",
              "Action de gestion des risques professionnels par organisme reconnu",
              "Action de prévention en santé du professionnel de santé",
              "Action intégrant la dimension psychologique et sociale de la santé",
              "Participation à un groupe d’analyse de pratiques selon la méthode HAS"
            ],
            actions: [
              {
                id: "mg_b4_medecin_traitant",
                label: "Avoir un médecin traitant et l’avoir consulté",
                hint: "Hors auto-déclaration ou parent au 1er degré."
              },
              {
                id: "mg_b4_autoeval",
                label: "Auto-évaluation de son état de santé",
                hint: "Avec le questionnaire dédié."
              },
              {
                id: "mg_b4_risques_dpc",
                label: "Action de gestion des risques professionnels",
                hint: "DPC / FAF / organisme reconnu."
              },
              {
                id: "mg_b4_prevention",
                label: "Action de prévention en santé",
                hint: "Ex. activité physique, santé nutritionnelle, santé environnementale."
              },
              {
                id: "mg_b4_psycho_social",
                label: "Action intégrant la dimension psychologique et sociale",
                hint: "Ex. congés, mutuelle, prévoyance, assurance perte d’exploitation."
              },
              {
                id: "mg_b4_gap_sante",
                label: "Groupe d’analyse de pratiques",
                hint: "Méthode HAS, réunions régulières."
              }
            ]
          }
        ]
      },

      {
        id: "allergologie",
        label: "Allergologue",
        fullTitle: "Certification Périodique de l’Allergologue",
        subtitle: "Spécialité : allergologie",
        icon: "🌿",
        theme: {
          primary: "#7c3aed",
          primary2: "#5b21b6",
          accent: "#0ea5e9"
        },
        blocks: [
          {
            id: "bloc1",
            label: "Bloc 1",
            shortLabel: "Connaissances et compétences",
            colorClass: "bloc1",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation allergologie : 3 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 3
            },
            allReferentialActions: [
              "Action de formation au titre du DPC organisée par un ODPC d’allergologie",
              "Action de formation scientifique ou professionnelle dispensée par des organismes listés en préambule",
              "Action de formation au cours de congrès en allergologie",
              "Formation diplômante ou certifiante organisée par les universités ou autres",
              "Activité d’enseignement délivrée dans le cadre d’une université",
              "Activité de recherche institutionnelle",
              "Formation à la maîtrise de stage universitaire",
              "Publication d’article / revue de lecture / commentaire d’articles",
              "Participation effective au comité éditorial de revue scientifique",
              "Programmes intégrés (TCS, simulation, analyse de cas cliniques…)",
              "Participation active aux groupes de travail de la SFA",
              "Participation aux réunions de concertation pluridisciplinaires en allergologie",
              "Intervention lors d’un congrès ou d’une journée de formation en allergologie",
              "Participation à des réunions de bibliographie / revue de la littérature",
              "Abonnement à une revue d’allergologie nationale ou internationale",
              "Action hors liste validée par le CNP"
            ],
            actions: [
              {
                id: "alg_b1_dpc",
                label: "Action de formation DPC en allergologie",
                hint: "ODPC d’allergologie, attestation de participation."
              },
              {
                id: "alg_b1_formation",
                label: "Formation scientifique ou professionnelle en allergologie",
                hint: "Dispensée par un organisme listé en préambule."
              },
              {
                id: "alg_b1_congres",
                label: "Formation lors d’un congrès en allergologie",
                hint: "Au moins 5 demi-journées de congrès éligibles au total."
              },
              {
                id: "alg_b1_diplome",
                label: "Formation diplômante ou certifiante",
                hint: "DU, DIU, Master ou autre formation validée."
              },
              {
                id: "alg_b1_enseignement",
                label: "Activité d’enseignement universitaire",
                hint: "Formation initiale ou continue des professionnels de santé."
              },
              {
                id: "alg_b1_recherche",
                label: "Activité de recherche institutionnelle",
                hint: "Investigateur principal ou co-investigateur avec inclusion d’au moins un patient."
              },
              {
                id: "alg_b1_maitrise_stage",
                label: "Formation à la maîtrise de stage universitaire",
                hint: "Formation agréée."
              },
              {
                id: "alg_b1_publication",
                label: "Publication / revue de lecture / commentaire d’articles",
                hint: "Dans une revue à comité de lecture indépendant."
              },
              {
                id: "alg_b1_comite",
                label: "Comité éditorial de revue scientifique",
                hint: "Participation effective."
              },
              {
                id: "alg_b1_programme_integre",
                label: "Programme intégré (TCS, simulation, analyse de cas…)",
                hint: "Participation à au moins une action."
              },
              {
                id: "alg_b1_gt_sfa",
                label: "Participation active à un groupe de travail de la SFA",
                hint: "Participation régulière ou coordination d’un projet."
              },
              {
                id: "alg_b1_rcp",
                label: "Réunions de concertation pluridisciplinaires en allergologie",
                hint: "Au moins 5 RCP et/ou présentation d’au moins 2 dossiers."
              },
              {
                id: "alg_b1_intervention",
                label: "Intervention à un congrès ou une journée de formation",
                hint: "Comme présentateur ou organisateur."
              },
              {
                id: "alg_b1_biblio",
                label: "Réunion de bibliographie / revue de la littérature",
                hint: "Participation à au moins 5 réunions."
              },
              {
                id: "alg_b1_abonnement",
                label: "Abonnement à une revue d’allergologie",
                hint: "Au moins 3 années consécutives."
              }
            ]
          },
          {
            id: "bloc2",
            label: "Bloc 2",
            shortLabel: "Qualité des pratiques et des soins",
            colorClass: "bloc2",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation allergologie : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Participation régulière aux registres de pratiques en allergologie",
              "Action d’analyse de pratiques / gestion des risques DPC",
              "Action d’analyse de pratiques / gestion des risques par organisme listé",
              "Action d’amélioration des pratiques au sein des établissements (RMM, RCP, CREX…)",
              "Gestion des risques en équipe",
              "Participation régulière aux bureaux / CA des structures nationales de l’allergologie",
              "Participation régulière aux bureaux des structures régionales AREFORCAL",
              "Action d’amélioration des pratiques / mission d’expertise / participation à des recommandations",
              "Activité d’encadrement dans le cadre de la maîtrise de stage universitaire ou tutorat",
              "Activité de recherche",
              "Coordination ou inscription dans une équipe de soins spécialisés en allergologie",
              "Stage en immersion auprès d’un praticien expérimenté",
              "Élaboration de fiche de procédure hygiène / écoresponsabilité / traçabilité",
              "Intervention ou participation à une journée syndicale médicale",
              "Direction de thèse",
              "Action hors liste validée par le CNP"
            ],
            actions: [
              {
                id: "alg_b2_registre",
                label: "Participation régulière à un registre de pratiques en allergologie",
                hint: "Soumission de cas selon les attendus du registre."
              },
              {
                id: "alg_b2_dpc",
                label: "Action d’analyse de pratiques / gestion des risques DPC",
                hint: "Participation à au moins une action."
              },
              {
                id: "alg_b2_organisme",
                label: "Action d’analyse de pratiques / gestion des risques par organisme listé",
                hint: "Participation à au moins une action."
              },
              {
                id: "alg_b2_rmm_rcp",
                label: "Action d’amélioration des pratiques au sein des établissements",
                hint: "RMM, RCP, CREX, etc."
              },
              {
                id: "alg_b2_risques_equipe",
                label: "Gestion des risques en équipe",
                hint: "Réunions de pairs / de service avec ordre du jour et compte-rendu."
              },
              {
                id: "alg_b2_structures_nationales",
                label: "Participation régulière aux structures nationales de l’allergologie",
                hint: "Bureau / CA / structures listées."
              },
              {
                id: "alg_b2_areforcal",
                label: "Participation régulière aux structures régionales AREFORCAL",
                hint: "Participation régulière justifiée."
              },
              {
                id: "alg_b2_expertise",
                label: "Mission d’expertise / recommandations en allergologie",
                hint: "Au moins une action d’expert par cycle."
              },
              {
                id: "alg_b2_tutorat",
                label: "Encadrement / maîtrise de stage / tutorat",
                hint: "Présence effective d’un étudiant pendant au moins 3 semestres."
              },
              {
                id: "alg_b2_recherche",
                label: "Activité de recherche",
                hint: "Implication comme investigateur principal ou co-investigateur."
              },
              {
                id: "alg_b2_ess",
                label: "Coordination ou inscription dans une équipe de soins spécialisés en allergologie",
                hint: "Attestation ARS."
              },
              {
                id: "alg_b2_immersion",
                label: "Stage en immersion auprès d’un praticien expérimenté",
                hint: "Au moins 10 demi-journées."
              },
              {
                id: "alg_b2_procedure",
                label: "Élaboration de fiche de procédure",
                hint: "Hygiène, écoresponsabilité, traçabilité."
              },
              {
                id: "alg_b2_syndical",
                label: "Participation à une journée syndicale médicale",
                hint: "Présence à au moins une journée."
              },
              {
                id: "alg_b2_these",
                label: "Direction de thèse",
                hint: "Thèse de DES en allergologie."
              }
            ]
          },
          {
            id: "bloc3",
            label: "Bloc 3",
            shortLabel: "Relation avec les patients",
            colorClass: "bloc3",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation allergologie : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Action de formation sur le thème de la relation patient",
              "Participation régulière à un registre / observatoire / base de données intégrant des données patients",
              "Action réalisée dans le cadre d’une association d’usagers du système de santé agréée",
              "Conception et participation à des programmes associant des patients",
              "Patients traceurs",
              "Acquérir une connaissance du numérique en santé et de ses usages",
              "Faciliter le partage d’expériences interprofessionnelles et de bonnes pratiques",
              "Participation à des missions de communication et vulgarisation à destination du grand public",
              "Action hors liste validée par le CNP"
            ],
            actions: [
              {
                id: "alg_b3_formation",
                label: "Formation sur le thème de la relation patient",
                hint: "Participation à au moins une formation."
              },
              {
                id: "alg_b3_registre_patient",
                label: "Registre / observatoire / base de données intégrant des données patients",
                hint: "Soumission d’au moins 1 cas par an."
              },
              {
                id: "alg_b3_association",
                label: "Action avec une association d’usagers / association de patients",
                hint: "Participation à au moins 2 actions."
              },
              {
                id: "alg_b3_programme_patient",
                label: "Programme associant des patients",
                hint: "Éducation thérapeutique, patient expert, prévention, dépistage."
              },
              {
                id: "alg_b3_patient_traceur",
                label: "Patients traceurs",
                hint: "Projet mis en œuvre selon la procédure HAS."
              },
              {
                id: "alg_b3_numerique",
                label: "Numérique en santé et usages dans la relation avec le patient",
                hint: "Participation à des e-programmes ANS ou FAF-PM."
              },
              {
                id: "alg_b3_interpro",
                label: "Partage d’expériences interprofessionnelles et bonnes pratiques",
                hint: "Au moins 2 réunions formalisées sur le cycle."
              },
              {
                id: "alg_b3_communication",
                label: "Communication et vulgarisation à destination du grand public",
                hint: "Podcast, TV, radio, site web, presse, contenu d’information."
              }
            ]
          },
          {
            id: "bloc4",
            label: "Bloc 4",
            shortLabel: "Santé personnelle du professionnel",
            colorClass: "bloc4",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation allergologie : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Action de formation sur le thème de la santé personnelle du médecin",
              "Avoir un suivi médical",
              "Participation à des groupes d’échange et d’analyse entre pairs",
              "Actions de prévention en santé en lien avec la médecine du travail",
              "Participation à un atelier de sensibilisation à la gestion et la prévention de la santé personnelle en allergologie",
              "Pratique sportive et/ou culturelle",
              "Participation à un réseau confraternel informel",
              "Maintien et mise à jour des vaccinations recommandées",
              "Suivre les recommandations générales de dépistage selon son âge et son sexe",
              "Action hors liste validée par le CNP"
            ],
            actions: [
              {
                id: "alg_b4_formation",
                label: "Formation sur le thème de la santé personnelle du médecin",
                hint: "Attestation de participation à au moins une formation."
              },
              {
                id: "alg_b4_suivi_medical",
                label: "Avoir un suivi médical",
                hint: "Médecin traitant, consultation annuelle ou bilan de santé CPAM."
              },
              {
                id: "alg_b4_groupes_pairs",
                label: "Groupes d’échange et d’analyse entre pairs",
                hint: "Au moins 1 réunion formalisée."
              },
              {
                id: "alg_b4_medecine_travail",
                label: "Action de prévention en santé en lien avec la médecine du travail",
                hint: "Consultation avec le médecin du travail en sus de la visite obligatoire."
              },
              {
                id: "alg_b4_atelier",
                label: "Atelier de sensibilisation à la santé personnelle en allergologie",
                hint: "Attestation de présence."
              },
              {
                id: "alg_b4_sport_culture",
                label: "Pratique sportive et/ou culturelle",
                hint: "Pratique hebdomadaire déclarée."
              },
              {
                id: "alg_b4_reseau_confraternel",
                label: "Participation à un réseau confraternel informel",
                hint: "Excursions, sorties, team-building, repas de service, etc."
              },
              {
                id: "alg_b4_vaccins",
                label: "Maintien et mise à jour des vaccinations recommandées",
                hint: "Déclaration sur l’honneur."
              },
              {
                id: "alg_b4_depistage",
                label: "Suivre les recommandations générales de dépistage",
                hint: "Selon âge et sexe."
              }
            ]
          }
        ]
      },
//CARDIO
      {
        id: "medecine-cardiovasculaire",
        label: "Cardiologue",
        fullTitle: "Certification Périodique du Cardiologue",
        subtitle: "Spécialité : médecine cardiovasculaire",
        icon: "❤️",
        theme: {
          primary: "#c62828",
          primary2: "#7f1d1d",
          accent: "#2563eb"
        },
        blocks: [
          {
            id: "bloc1",
            label: "Bloc 1",
            shortLabel: "Connaissances et compétences",
            colorClass: "bloc1",
            openByDefault: false,
            validationMode: "compound",
            ruleText: "Validation cardio : 3 actions DPC/équivalentes + 1 autre action listée sur le cycle.",
            requirements: {
              dpcMin: 3,
              extraMin: 1
            },
            allReferentialActions: [
              "Action DPC / dispositif structuré équivalent n°1",
              "Action DPC / dispositif structuré équivalent n°2",
              "Action DPC / dispositif structuré équivalent n°3",
              "Congrès national validé par le CNP cardiovasculaire",
              "Congrès international validé par le CNP cardiovasculaire",
              "Formation régionale validée par le CNP cardiovasculaire",
              "Orateur / formateur lors d’un congrès ou d’une formation régionale validée",
              "Comité d’organisation d’un congrès ou d’une formation validée",
              "Formation diplômante DU / DIU ou certifiante dans le domaine cardiovasculaire",
              "Organisation d’une formation diplômante DU / DIU ou certifiante",
              "Enseignement universitaire dans le domaine cardiovasculaire",
              "Séminaire pédagogique du CNEC",
              "Peer reviewing",
              "Rédaction ou co-rédaction d’un chapitre d’ouvrage de référence",
              "Participation au comité de rédaction / éditorial d’un ouvrage de référence",
              "Activités au sein d’une société savante validée par le CNP cardiovasculaire",
              "Travail d’expertise pour une institution ou une agence d’État",
              "Activités de recherche clinique ou épidémiologique",
              "Publication dans une revue scientifique référencée",
              "Action hors liste validée par le CNP-CV"
            ],
            actions: [
              {
                id: "cardio_b1_dpc_1",
                label: "Action DPC / dispositif structuré équivalent n°1",
                hint: "Première action DPC ou équivalente du cycle.",
                group: "dpc"
              },
              {
                id: "cardio_b1_dpc_2",
                label: "Action DPC / dispositif structuré équivalent n°2",
                hint: "Deuxième action DPC ou équivalente du cycle.",
                group: "dpc"
              },
              {
                id: "cardio_b1_dpc_3",
                label: "Action DPC / dispositif structuré équivalent n°3",
                hint: "Troisième action DPC ou équivalente du cycle.",
                group: "dpc"
              },
              {
                id: "cardio_b1_congres_national",
                label: "Congrès national de la spécialité validé par le CNP cardiovasculaire",
                hint: "Participant auditeur à un congrès national validé.",
                group: "extra"
              },
              {
                id: "cardio_b1_congres_international",
                label: "Congrès international de la spécialité validé par le CNP cardiovasculaire",
                hint: "Participant auditeur à un congrès international validé.",
                group: "extra"
              },
              {
                id: "cardio_b1_formation_regionale",
                label: "Formation régionale de la spécialité validée par le CNP cardiovasculaire",
                hint: "Participation à une formation régionale validée.",
                group: "extra"
              },
              {
                id: "cardio_b1_orateur",
                label: "Orateur / formateur lors d’un congrès ou d’une formation régionale validée",
                hint: "Intervention dans une action reconnue par le CNP CV.",
                group: "extra"
              },
              {
                id: "cardio_b1_comite_org",
                label: "Comité d’organisation d’un congrès ou d’une formation validée",
                hint: "Participation au comité d’organisation.",
                group: "extra"
              },
              {
                id: "cardio_b1_du_diu_auditeur",
                label: "Formation diplômante DU / DIU ou certifiante dans le domaine cardiovasculaire",
                hint: "Participation à une formation universitaire.",
                group: "extra"
              },
              {
                id: "cardio_b1_du_diu_orga",
                label: "Organisation d’une formation diplômante DU / DIU ou certifiante",
                hint: "Organisation d’un diplôme ou certificat universitaire.",
                group: "extra"
              },
              {
                id: "cardio_b1_enseignement_univ",
                label: "Enseignement universitaire dans le domaine cardiovasculaire",
                hint: "Activité d’enseignement universitaire ou équivalente.",
                group: "extra"
              },
              {
                id: "cardio_b1_cnec",
                label: "Séminaire pédagogique du CNEC",
                hint: "Participation comme auditeur, orateur ou organisation.",
                group: "extra"
              },
              {
                id: "cardio_b1_peer_review",
                label: "Peer reviewing",
                hint: "Révision régulière de manuscrits scientifiques.",
                group: "extra"
              },
              {
                id: "cardio_b1_ouvrage_chapitre",
                label: "Rédaction ou co-rédaction d’un chapitre d’ouvrage de référence",
                hint: "Ouvrage d’enseignement de la pathologie cardiovasculaire.",
                group: "extra"
              },
              {
                id: "cardio_b1_ouvrage_editorial",
                label: "Participation au comité de rédaction / éditorial d’un ouvrage de référence",
                hint: "Participation éditoriale à un ouvrage de référence.",
                group: "extra"
              },
              {
                id: "cardio_b1_activite_societe",
                label: "Activités au sein d’une société savante validée par le CNP cardiovasculaire",
                hint: "Conseil d’administration ou mission ponctuelle.",
                group: "extra"
              },
              {
                id: "cardio_b1_expertise",
                label: "Travail d’expertise pour une institution ou une agence d’État",
                hint: "HAS, ANSM, HCSP, agences européennes, etc.",
                group: "extra"
              },
              {
                id: "cardio_b1_recherche",
                label: "Activités de recherche clinique ou épidémiologique",
                hint: "Étude institutionnelle, universitaire, réseau ou service clinique.",
                group: "extra"
              },
              {
                id: "cardio_b1_publication",
                label: "Publication dans une revue scientifique référencée",
                hint: "Publication scientifique en lien avec la spécialité.",
                group: "extra"
              }
            ]
          },
          {
            id: "bloc2",
            label: "Bloc 2",
            shortLabel: "Qualité des pratiques et des soins",
            colorClass: "bloc2",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation cardio : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Programme HAS d’accréditation CARDIORISQ",
              "Analyse de pratiques et gestion des risques au sein de l’établissement (RMM / CREX…)",
              "Action de DPC d’analyse de pratiques / gestion des risques",
              "Participation à un registre de pratiques",
              "Exercice coordonné et protocolé d’une équipe pluriprofessionnelle de soins en ambulatoire",
              "Participation à un réseau de vigilance",
              "Action hors liste validée par le CNP-CV"
            ],
            actions: [
              {
                id: "cardio_b2_cardiorisq",
                label: "Programme HAS d’accréditation CARDIORISQ",
                hint: "Pour les cardiologues interventionnels / rythmologues / congénitaux invasifs."
              },
              {
                id: "cardio_b2_rmm_crex",
                label: "Analyse de pratiques et gestion des risques au sein de l’établissement (RMM / CREX…)",
                hint: "Démarche qualité officielle encadrée par l’établissement."
              },
              {
                id: "cardio_b2_dpc_epp",
                label: "Action de DPC d’analyse de pratiques / gestion des risques",
                hint: "Action relevant du bloc 2."
              },
              {
                id: "cardio_b2_registre",
                label: "Participation à un registre de pratiques",
                hint: "Participation active à un registre de la spécialité."
              },
              {
                id: "cardio_b2_exercice_coordonne",
                label: "Exercice coordonné et protocolé d’une équipe pluriprofessionnelle de soins en ambulatoire",
                hint: "Participation active poursuivie sur la durée."
              },
              {
                id: "cardio_b2_vigilance",
                label: "Participation à un réseau de vigilance",
                hint: "Réseau de vigilance de la spécialité."
              }
            ]
          },
          {
            id: "bloc3",
            label: "Bloc 3",
            shortLabel: "Relation avec les patients",
            colorClass: "bloc3",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation cardio : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Formation universitaire centrée sur la relation médecin-patient",
              "Formation ODPC / Qualiopi / organisme de formation sur la relation médecin-patient",
              "Mesure de la satisfaction des patients / PREMs",
              "Action réalisée avec une association d’usagers du système de santé",
              "Programme élaboré pour le patient / programme associant des patients",
              "Registre de pratiques intégrant un recueil de données patients",
              "Groupe d’échange et d’analyse entre pairs centré sur la relation avec le patient",
              "Participation à un dispositif d’annonce",
              "Programme d’accréditation HAS CARDIORISQ – pilier relation patient",
              "Action hors liste validée par le CNP-CV"
            ],
            actions: [
              {
                id: "cardio_b3_formation_univ_relation",
                label: "Formation universitaire centrée sur la relation médecin-patient",
                hint: "DU / DIU ou formation universitaire dédiée."
              },
              {
                id: "cardio_b3_formation_odpc_relation",
                label: "Formation ODPC / Qualiopi / organisme de formation sur la relation médecin-patient",
                hint: "Session, atelier, simulation ou congrès validé."
              },
              {
                id: "cardio_b3_mesure_satisfaction",
                label: "Mesure de la satisfaction des patients / PREMs",
                hint: "Participation à une enquête ou à son exploitation."
              },
              {
                id: "cardio_b3_association_usagers",
                label: "Action réalisée dans le cadre d’une association d’usagers du système de santé",
                hint: "Action menée avec une association d’usagers."
              },
              {
                id: "cardio_b3_programme_patient",
                label: "Programme élaboré pour le patient / programme associant des patients",
                hint: "Conception et participation à la mise en place de programmes pour le patient."
              },
              {
                id: "cardio_b3_registre_patient",
                label: "Registre de pratiques intégrant un recueil de données patients",
                hint: "Action relevant de la relation et de l’expérience patient."
              },
              {
                id: "cardio_b3_groupes_pairs",
                label: "Groupe d’échange et d’analyse entre pairs centré sur la relation avec le patient",
                hint: "Travail entre pairs sur les situations cliniques et relationnelles."
              },
              {
                id: "cardio_b3_dispositif_annonce",
                label: "Participation à un dispositif d’annonce",
                hint: "Cancer, dommage associé aux soins, insuffisance cardiaque, transplantation cardiaque."
              },
              {
                id: "cardio_b3_cardiorisq_relation",
                label: "Programme d’accréditation HAS CARDIORISQ – pilier relation patient",
                hint: "Engagement officiel avec validation annuelle du pilier relation patient."
              }
            ]
          },
          {
            id: "bloc4",
            label: "Bloc 4",
            shortLabel: "Santé personnelle du professionnel",
            colorClass: "bloc4",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Validation cardio : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Formation diplômante sur la santé personnelle du médecin (DIU Soigner les soignants)",
              "Participation à un colloque concernant les aspects humains de la spécialité",
              "Activité sportive",
              "Activité culturelle en tant qu’acteur",
              "Activité caritative ou de coopération nationale ou internationale",
              "Groupe d’échange et d’analyse entre pairs sur la santé personnelle du médecin"
            ],
            actions: [
              {
                id: "cardio_b4_diu_soigner",
                label: "Formation diplômante sur la santé personnelle du médecin (DIU Soigner les soignants)",
                hint: "Formation diplômante dédiée."
              },
              {
                id: "cardio_b4_colloque_humain",
                label: "Participation à un colloque concernant les aspects humains de la spécialité",
                hint: "Ex. assises professionnelles de la cardiologie."
              },
              {
                id: "cardio_b4_sport",
                label: "Activité sportive régulière",
                hint: "Avec ou sans licence sportive."
              },
              {
                id: "cardio_b4_culture",
                label: "Activité culturelle régulière en tant qu’acteur",
                hint: "Musique, théâtre, danse, etc."
              },
              {
                id: "cardio_b4_caritatif",
                label: "Activité caritative ou de coopération nationale ou internationale",
                hint: "Participation active à une association ou mission."
              },
              {
                id: "cardio_b4_groupes_pairs_sante",
                label: "Groupe d’échange et d’analyse entre pairs sur la santé personnelle du médecin",
                hint: "Action dédiée à la santé du professionnel."
              }
            ]
          }
        ]
      },
//anesthesie-reanimation
{
  id: "anesthesie-reanimation",
  label: "Anesthésiste-réanimateur",
  fullTitle: "Certification Périodique de l’Anesthésiste-Réanimateur",
  subtitle: "Spécialité : anesthésie-réanimation médecine péri-opératoire",
  icon: "💉",
  theme: {
    primary: "#1e3a8a",
    primary2: "#1e40af",
    accent: "#06b6d4"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation anesthésie-réanimation : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation dans le cadre d’une démarche d’accréditation accompagnée par l’OA CFAR",
        "Actions de formation continue du DPC publiées par l’ANDPC",
        "Autres actions de formation validées par le CNP : congrès nationaux ou régionaux, simulation en santé, visio ou e-learning",
        "Formations diplômantes ou certifiantes organisées par les universités intéressant la spécialité",
        "Activités d’enseignement délivrées dans le cadre universitaire ou dans des instituts de formation des professionnels de santé",
        "Activités de recherche effectuées dans le cadre d’une unité de recherche labellisée, d’une université ou d’un établissement de soins",
        "Formation à la maîtrise de stage universitaire",
        "Publication ou revue de lecture dans des revues référencées à comité de lecture indépendant, ou ouvrages pédagogiques",
        "Participation effective au comité éditorial de revues scientifiques",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "ar_b1_accreditation_cfar",
          label: "Formation dans le cadre d’une démarche d’accréditation accompagnée par l’OA CFAR",
          hint: "Démarche poursuivie au moins 4 ans."
        },
        {
          id: "ar_b1_dpc",
          label: "Action de formation continue du DPC publiée par l’ANDPC",
          hint: "Éligibilité de fait pour la spécialité anesthésie-réanimation."
        },
        {
          id: "ar_b1_formation_cnp",
          label: "Autre action de formation validée par le CNP",
          hint: "Congrès national ou régional, simulation en santé, visio ou e-learning ; 1 action = au moins 6 heures."
        },
        {
          id: "ar_b1_diplome",
          label: "Formation diplômante ou certifiante universitaire",
          hint: "DU, DIU, Master ou formation certifiante validée par le CNP."
        },
        {
          id: "ar_b1_enseignement",
          label: "Activité d’enseignement universitaire ou en institut de formation",
          hint: "Sans minimum requis dans le référentiel."
        },
        {
          id: "ar_b1_recherche",
          label: "Activité de recherche clinique ou universitaire",
          hint: "Participation significative à un projet de recherche."
        },
        {
          id: "ar_b1_maitrise_stage",
          label: "Formation à la maîtrise de stage universitaire",
          hint: "Formation agréée, avec attestation."
        },
        {
          id: "ar_b1_publication",
          label: "Publication, revue de lecture ou ouvrage pédagogique",
          hint: "Quelle que soit la position de l’auteur."
        },
        {
          id: "ar_b1_comite_editorial",
          label: "Participation effective au comité éditorial d’une revue scientifique",
          hint: "Activité de révision d’articles ou participation éditoriale."
        }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation anesthésie-réanimation : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions d’EPP dans le cadre d’une démarche d’accréditation accompagnée par l’OA CFAR",
        "Actions d’EPP du DPC (analyse de pratiques, gestion des risques ou programmes intégrés) publiées par l’ANDPC",
        "Autres actions d’analyse de pratiques et de gestion des risques validées par le CNP, notamment simulation en santé",
        "Participation régulière à des registres de pratiques",
        "Actions d’amélioration des pratiques organisées au sein des établissements : RMM, RCP, CREX",
        "Gestion des risques en équipe : programme de type PACTE ou accréditation en équipe accompagnée par l’OA CFAR",
        "Travaux d’expertise institutionnelle : sociétés savantes, composantes du CNP, HAS, autres agences",
        "Rédaction d’un protocole médical d’établissement",
        "Activité d’encadrement des internes, externes ou étudiants IADE",
        "Participation aux missions transversales de l’établissement : CME, CLIAS, CLUD, CSE, COMEDIMS, commission de bloc, management",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "ar_b2_accreditation_cfar",
          label: "Action d’EPP dans le cadre d’une démarche d’accréditation accompagnée par l’OA CFAR",
          hint: "Démarche poursuivie au moins 4 ans."
        },
        {
          id: "ar_b2_dpc_epp",
          label: "Action d’EPP du DPC publiée par l’ANDPC",
          hint: "Analyse de pratiques, gestion des risques ou programme intégré."
        },
        {
          id: "ar_b2_ap_gr",
          label: "Autre action d’analyse de pratiques et de gestion des risques validée par le CNP",
          hint: "Dont simulation en santé ; il faut a minima être acteur lors de l’action."
        },
        {
          id: "ar_b2_registre",
          label: "Participation régulière à un registre de pratiques",
          hint: "Au moins 1 patient inclus."
        },
        {
          id: "ar_b2_rmm_rcp_crex",
          label: "Action d’amélioration des pratiques en établissement : RMM, RCP, CREX",
          hint: "Au moins 2 par an, poursuivies pendant la période de 6 ans."
        },
        {
          id: "ar_b2_pacte_equipe",
          label: "Gestion des risques en équipe : programme PACTE ou accréditation en équipe",
          hint: "Implication individuelle significative dans une équipe engagée."
        },
        {
          id: "ar_b2_expertise",
          label: "Travaux d’expertise institutionnelle",
          hint: "Participation à des réunions institutionnelles ou travaux d’expertise."
        },
        {
          id: "ar_b2_protocole",
          label: "Rédaction d’un protocole médical d’établissement",
          hint: "Comme rédacteur ou valideur du protocole."
        },
        {
          id: "ar_b2_encadrement",
          label: "Encadrement des internes, externes ou étudiants IADE",
          hint: "Implication significative dans une équipe d’encadrement agréée."
        },
        {
          id: "ar_b2_missions_transversales",
          label: "Participation aux missions transversales de l’établissement",
          hint: "CME, CLIAS, CLUD, CSE, COMEDIMS, commission de bloc, management ; pendant au moins 2 ans."
        }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation anesthésie-réanimation : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation sur le thème de la relation patient dans le cadre d’une démarche d’accréditation accompagnée par l’OA CFAR",
        "Actions de formation sur le thème de la relation patient délivrées par un ODPC",
        "Autres actions de formation sur le thème de la relation patient validées par le CNP",
        "Mesurer la satisfaction des patients : E-Satis ou autres enquêtes de satisfaction / PREMs",
        "Action réalisée dans le cadre d’une association d’usagers du système de santé agréée",
        "Formations diplômantes ou certifiantes sur le thème de la relation patient organisées par les universités",
        "Implication dans la gestion ou la formation des dispositifs d’annonce : dommage associé aux soins, mauvaise nouvelle",
        "Patients traceurs",
        "Connaissance du numérique en santé et de ses usages dans l’amélioration des pratiques et de la relation avec le patient",
        "Actions de médiation, de conciliation ou participation à la commission des usagers",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "ar_b3_accreditation_cfar",
          label: "Formation sur la relation patient dans le cadre d’une démarche d’accréditation accompagnée par l’OA CFAR",
          hint: "Démarche poursuivie au moins 4 ans."
        },
        {
          id: "ar_b3_dpc_relation",
          label: "Action de formation sur la relation patient délivrée par un ODPC",
          hint: "Éligibilité de fait."
        },
        {
          id: "ar_b3_formation_cnp",
          label: "Autre action de formation sur la relation patient validée par le CNP",
          hint: "Heures dédiées au bloc 3 en plus de celles déjà comptées pour le bloc 1."
        },
        {
          id: "ar_b3_satisfaction",
          label: "Mesure de la satisfaction des patients / PREMs",
          hint: "Participation significative à la conception de l’enquête, à l’analyse des données ou aux propositions d’amélioration."
        },
        {
          id: "ar_b3_association_usagers",
          label: "Action réalisée dans le cadre d’une association d’usagers du système de santé agréée",
          hint: "Participation à une journée, action de sensibilisation, fiche d’information, enquête de satisfaction, etc."
        },
        {
          id: "ar_b3_diplome_relation",
          label: "Formation diplômante ou certifiante sur le thème de la relation patient",
          hint: "DU ou DIU relevant du bloc 3."
        },
        {
          id: "ar_b3_dispositif_annonce",
          label: "Implication dans un dispositif d’annonce",
          hint: "Annonce d’un dommage associé aux soins ou d’une mauvaise nouvelle."
        },
        {
          id: "ar_b3_patient_traceur",
          label: "Patients traceurs",
          hint: "Participation aux réunions avec implication individuelle significative."
        },
        {
          id: "ar_b3_numerique_sante",
          label: "Connaissance du numérique en santé et de ses usages dans la relation patient",
          hint: "Téléconsultation, téléexpertise, qualité et sécurité des parcours numériques."
        },
        {
          id: "ar_b3_mediation",
          label: "Médiation, conciliation ou participation à la commission des usagers",
          hint: "Pendant au moins 2 ans."
        }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé personnelle du professionnel",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation anesthésie-réanimation : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation sur le thème de la santé personnelle du médecin dans le cadre d’une démarche d’accréditation accompagnée par l’OA CFAR",
        "Actions de formation sur le thème de la santé personnelle du médecin délivrées par un ODPC",
        "Autres actions de formation sur le thème de la santé personnelle du médecin validées par le CNP",
        "Auto-évaluation de son état de santé",
        "Avoir un médecin traitant ou un médecin du travail",
        "Autres actions de gestion des risques professionnels validées par le CNP : radioprotection, prévention AES, ergonomie",
        "Programmes de prévention des risques psycho-sociaux",
        "Activité physique",
        "Participation à des groupes d’échange et d’analyse permettant de travailler sur la santé personnelle du médecin",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "ar_b4_accreditation_cfar",
          label: "Formation sur la santé personnelle dans le cadre d’une démarche d’accréditation accompagnée par l’OA CFAR",
          hint: "Démarche poursuivie au moins 4 ans."
        },
        {
          id: "ar_b4_dpc_sante",
          label: "Action de formation sur la santé personnelle du médecin délivrée par un ODPC",
          hint: "Éligibilité de fait."
        },
        {
          id: "ar_b4_formation_cnp",
          label: "Autre action de formation sur la santé personnelle validée par le CNP",
          hint: "Heures dédiées au bloc 4 en plus de celles déjà comptées pour le bloc 1."
        },
        {
          id: "ar_b4_autoeval",
          label: "Auto-évaluation de son état de santé",
          hint: "Répondre à au moins un autotest SMART et consulter les propositions de suivi ou de prise en charge."
        },
        {
          id: "ar_b4_medecin_traitant",
          label: "Avoir un médecin traitant ou un médecin du travail",
          hint: "Hors auto-déclaration ou parent au 1er degré, avec au moins 2 consultations pendant la période."
        },
        {
          id: "ar_b4_risques_pro",
          label: "Action de gestion des risques professionnels validée par le CNP",
          hint: "Ex. radioprotection, prévention des accidents d’exposition au sang, ergonomie."
        },
        {
          id: "ar_b4_rps",
          label: "Programme de prévention des risques psycho-sociaux",
          hint: "Ex. prévention des violences sexistes et sexuelles, prévention des violences aux soignants."
        },
        {
          id: "ar_b4_sport",
          label: "Activité physique régulière",
          hint: "Pratique adaptée à l’état de santé."
        },
        {
          id: "ar_b4_groupes_pairs",
          label: "Groupe d’échange et d’analyse sur la santé personnelle du médecin",
          hint: "Implication individuelle significative dans le groupe."
        }
      ]
    }
  ]
},
//dermatologie venereologie
{
  id: "dermatologie-venereologie",
  label: "Dermatologue",
  fullTitle: "Certification Périodique du Dermatologue",
  subtitle: "Spécialité : dermatologie et vénéréologie",
  icon: "🧴",
  theme: {
    primary: "#be185d",
    primary2: "#9d174d",
    accent: "#f59e0b"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation dermatologie-vénéréologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à une action de formation au titre du DPC publiée par l’ANDPC",
        "Participation à une action de formation scientifique ou professionnelle dispensée par un organisme Qualiopi ou figurant sur la liste publique des organismes de formation",
        "Participation à un congrès international labellisé par le CNP-DV",
        "Formations diplômantes ou certifiantes organisées par les universités : DU / DIU labellisés CNP-DV",
        "Activités d’enseignement délivrées dans le cadre d’une université",
        "Activités de recherche institutionnelles ou portées par les instances de la dermatologie",
        "Participation à un travail d’expertise institutionnelle ou contribution à des recommandations",
        "Publication scientifique, communication en congrès ou reviewing",
        "Participation à des réunions formalisées de revue bibliographique de type journal club",
        "Abonnement à une revue médicale avec test de lecture effectué et réussi",
        "Examen de certification en Dermatologie et Vénéréologie du board Européen de l’UEMS",
        "Participation à un programme intégré proposé par l’ODPC dans le cadre des Orientations Prioritaires",
        "Développement d’une action de DPC",
        "Action hors liste validée par le CNP-DV"
      ],
      actions: [
        {
          id: "derm_b1_dpc",
          label: "Action de formation au titre du DPC publiée par l’ANDPC",
          hint: "Éligibilité de fait, avec attestation ANDPC."
        },
        {
          id: "derm_b1_formation_qualiopi",
          label: "Action de formation scientifique ou professionnelle par organisme Qualiopi / liste publique",
          hint: "Congrès national, séminaire régional ou local ; durée au moins 3 heures."
        },
        {
          id: "derm_b1_congres_international",
          label: "Congrès international labellisé par le CNP-DV",
          hint: "Congrès d’une société savante reconnue par le CNP-DV ; durée au moins 3 heures."
        },
        {
          id: "derm_b1_diu_du",
          label: "Formation diplômante ou certifiante universitaire",
          hint: "DU / DIU labellisé par le CNP-DV."
        },
        {
          id: "derm_b1_enseignement_univ",
          label: "Activité d’enseignement universitaire",
          hint: "Enseignement facultaire de 2e ou 3e cycle ; durée au moins 3 heures."
        },
        {
          id: "derm_b1_recherche",
          label: "Activité de recherche clinique ou épidémiologique",
          hint: "Étude institutionnelle ou portée par les instances de la dermatologie."
        },
        {
          id: "derm_b1_expertise",
          label: "Travail d’expertise institutionnelle ou recommandations",
          hint: "Participation à des recommandations ou travaux d’expertise dans le champ de la spécialité."
        },
        {
          id: "derm_b1_publication",
          label: "Publication scientifique, communication en congrès ou reviewing",
          hint: "Publication, communication ou activité de relecture scientifique."
        },
        {
          id: "derm_b1_journal_club",
          label: "Revue bibliographique formalisée de type journal club",
          hint: "Participation à au moins 5 réunions annuelles pour une action validée."
        },
        {
          id: "derm_b1_test_lecture",
          label: "Abonnement à une revue médicale avec test de lecture réussi",
          hint: "Éligibilité de fait, avec attestation d’abonnement."
        },
        {
          id: "derm_b1_uems",
          label: "Examen de certification UEMS en Dermatologie et Vénéréologie",
          hint: "Board Européen de l’UEMS."
        },
        {
          id: "derm_b1_programme_integre",
          label: "Programme intégré proposé par l’ODPC",
          hint: "Programme relevant des Orientations Prioritaires."
        },
        {
          id: "derm_b1_dev_dpc",
          label: "Développement d’une action de DPC",
          hint: "Élaboration de TCS, simulation en santé ou cas cliniques."
        }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation dermatologie-vénéréologie : 2 actions minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Conception d’un nouveau registre ou participation active à un registre",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés au titre du DPC publiées par l’ANDPC",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés dispensées par des organismes Qualiopi ou figurant sur la liste publique",
        "Actions d’amélioration des pratiques organisées au sein des établissements de santé : RMM, CREX, etc.",
        "Participation régulière à des RCP de dermatologie",
        "Participation à des réunions de concertation avec d’autres professionnels dans le cadre de prises en charge complexes",
        "Participation à un groupe de pairs ou groupe d’analyse de pratiques",
        "Rédaction ou participation à l’élaboration de protocoles, procédures, référentiels ou chemins cliniques",
        "Participation à la mise en place ou au suivi d’indicateurs qualité et sécurité des soins",
        "Participation à une démarche qualité ou à des missions transversales d’établissement",
        "Publications, communications, reviewing en lien avec l’amélioration des pratiques",
        "Accréditation des médecins et des équipes médicales en établissement",
        "Participation à un programme intégré proposé par l’ODPC dans le cadre des Orientations Prioritaires",
        "Action hors liste validée par le CNP-DV"
      ],
      actions: [
        {
          id: "derm_b2_registre",
          label: "Conception d’un nouveau registre ou participation active à un registre",
          hint: "Activité continue sur la période, avec inclusion d’au moins 10 patients."
        },
        {
          id: "derm_b2_dpc_epp",
          label: "Action d’analyse de pratiques / gestion des risques DPC",
          hint: "Analyse de pratiques, gestion des risques ou programme intégré publié par l’ANDPC."
        },
        {
          id: "derm_b2_ap_qualiopi",
          label: "Action d’analyse de pratiques / gestion des risques par organisme Qualiopi / liste publique",
          hint: "Éligibilité de fait avec attestation de participation."
        },
        {
          id: "derm_b2_rmm_crex",
          label: "Action d’amélioration des pratiques en établissement : RMM, CREX",
          hint: "Participation à au moins 2 actions."
        },
        {
          id: "derm_b2_rcp",
          label: "Participation régulière à des RCP de dermatologie",
          hint: "Participation à au moins 6 réunions, notamment en cancérologie ou pathologies inflammatoires."
        },
        {
          id: "derm_b2_concertation_complexe",
          label: "Réunions de concertation pour prises en charge complexes",
          hint: "Travail coordonné avec d’autres professionnels de santé."
        },
        {
          id: "derm_b2_groupes_pairs",
          label: "Groupe de pairs / analyse de pratiques",
          hint: "Analyse régulière de situations cliniques ou organisationnelles."
        },
        {
          id: "derm_b2_protocoles",
          label: "Protocoles, procédures, référentiels ou chemins cliniques",
          hint: "Rédaction ou participation à leur élaboration."
        },
        {
          id: "derm_b2_indicateurs",
          label: "Mise en place ou suivi d’indicateurs qualité et sécurité",
          hint: "Suivi structuré d’indicateurs de pratique."
        },
        {
          id: "derm_b2_qualite_etablissement",
          label: "Participation à une démarche qualité ou à des missions transversales",
          hint: "Qualité, sécurité, commissions, organisation des soins."
        },
        {
          id: "derm_b2_publication_qualite",
          label: "Publication, communication ou reviewing en lien avec l’amélioration des pratiques",
          hint: "Publication ou communication lors d’un congrès labellisé par le CNP-DV."
        },
        {
          id: "derm_b2_accreditation",
          label: "Accréditation des médecins et des équipes médicales en établissement",
          hint: "Éligibilité HAS, sous réserve d’une implication personnelle forte."
        },
        {
          id: "derm_b2_programme_integre",
          label: "Programme intégré proposé par l’ODPC",
          hint: "Tests de concordance de scripts, simulation, cas cliniques."
        }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation dermatologie-vénéréologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation sur le thème de la relation patient délivrées par des organismes Qualiopi, un ODPC ou une structure figurant sur la liste publique",
        "Formations diplômantes ou certifiantes sur le thème de la relation patient organisées par les universités",
        "Formations diplômantes ou certifiantes sur l’adaptation de la prise en charge aux publics spécifiques",
        "Actions réalisées dans le cadre d’associations de patients",
        "Participation aux registres de pratiques intégrant un recueil de données patients",
        "Conception et participation à la mise en place de programmes associant des patients",
        "Participation à une action d’Education Thérapeutique du Patient répertoriée sur le site de la SFD",
        "Participation à une action d’ETP non répertoriée sur le site de la SFD",
        "Patients traceurs",
        "Participation à un dispositif d’annonce",
        "Participation à des groupes d’échange et d’analyse entre pairs centrés sur la relation avec le patient",
        "Mise en place d’enquêtes de satisfaction au sein de la structure d’exercice",
        "Élaboration de documents informatifs et/ou de suivi à destination des patients",
        "Conception et participation à la mise en place de programmes associant des patients : décision médicale partagée, e-santé, patients partenaires",
        "Action permettant d’acquérir une connaissance du numérique en santé et de ses usages",
        "Action pour s’approprier la téléconsultation et l’éducation des patients à ce mode de consultation",
        "Action pour faciliter le partage d’expériences interprofessionnelles et de bonnes pratiques",
        "Actions de promotion de la santé environnementale et de l’éco-soins",
        "Participation à l’élaboration et à la mise en œuvre d’actions de prévention du risque solaire",
        "Action hors liste validée par le CNP-DV"
      ],
      actions: [
        {
          id: "derm_b3_formation_relation",
          label: "Formation sur le thème de la relation patient",
          hint: "Organisme Qualiopi, ODPC ou structure figurant sur la liste publique."
        },
        {
          id: "derm_b3_diplome_relation",
          label: "Formation diplômante ou certifiante sur le thème de la relation patient",
          hint: "DU ou DIU en lien avec la relation de soin."
        },
        {
          id: "derm_b3_publics_specifiques",
          label: "Formation sur l’adaptation de la prise en charge aux publics spécifiques",
          hint: "Handicap, LGBTQI+, non-francophone, etc."
        },
        {
          id: "derm_b3_associations_patients",
          label: "Action réalisée dans le cadre d’associations de patients",
          hint: "Interventions, fonctions exercées, actions de sensibilisation, fiches d’information, enquêtes."
        },
        {
          id: "derm_b3_registre_patient",
          label: "Participation à un registre intégrant un recueil de données patients",
          hint: "Activité continue avec inclusion d’au moins 10 patients."
        },
        {
          id: "derm_b3_programmes_patients",
          label: "Conception et participation à des programmes associant des patients",
          hint: "Patients partenaires, éducation thérapeutique, décision partagée, etc."
        },
        {
          id: "derm_b3_etp_sfd",
          label: "Participation à une action d’ETP répertoriée sur le site de la SFD",
          hint: "Action d’Education Thérapeutique du Patient reconnue par la spécialité."
        },
        {
          id: "derm_b3_etp_hors_sfd",
          label: "Participation à une action d’ETP non répertoriée sur le site de la SFD",
          hint: "Avec demande de validation par le CNP-DV."
        },
        {
          id: "derm_b3_patient_traceur",
          label: "Patients traceurs",
          hint: "Participation à l’évaluation et à l’analyse d’un patient traceur."
        },
        {
          id: "derm_b3_dispositif_annonce",
          label: "Participation à un dispositif d’annonce",
          hint: "Cancer, dommage associé aux soins, mauvaise nouvelle, maladie chronique."
        },
        {
          id: "derm_b3_groupes_pairs",
          label: "Groupes d’échange et d’analyse entre pairs centrés sur la relation patient",
          hint: "Au moins 6 réunions, notamment dans les pathologies inflammatoires chroniques ou cancéreuses."
        },
        {
          id: "derm_b3_satisfaction",
          label: "Mise en place d’enquêtes de satisfaction",
          hint: "En établissement ou en structure libérale."
        },
        {
          id: "derm_b3_docs_patients",
          label: "Élaboration de documents informatifs ou de suivi pour les patients",
          hint: "Flyers, affiches, site internet, documents de suivi."
        },
        {
          id: "derm_b3_numerique_sante",
          label: "Connaissance du numérique en santé et de ses usages dans la relation avec le patient",
          hint: "Amélioration des parcours de soins et gestion des risques numériques."
        },
        {
          id: "derm_b3_teleconsultation",
          label: "Appropriation de la téléconsultation et éducation des patients à ce mode de consultation",
          hint: "Bonnes pratiques d’échange de documents et indication adaptée."
        },
        {
          id: "derm_b3_partage_interpro",
          label: "Partage d’expériences interprofessionnelles et de bonnes pratiques",
          hint: "Patients vulnérables, fin de vie, lutte contre les discriminations et inégalités d’accès aux soins."
        },
        {
          id: "derm_b3_eco_soins",
          label: "Promotion de la santé environnementale et de l’éco-soins",
          hint: "Développement de compétences en éco-responsabilité."
        },
        {
          id: "derm_b3_risque_solaire",
          label: "Action de prévention du risque solaire",
          hint: "Élaborée et mise en œuvre au sein d’équipes coordonnées de territoire."
        }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé personnelle du professionnel",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation dermatologie-vénéréologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation sur le thème de la santé personnelle du médecin délivrées par des organismes Qualiopi, un ODPC ou une structure figurant sur la liste publique",
        "Participation à des groupes d’échange et d’analyse entre pairs permettant de travailler sur la santé personnelle du médecin",
        "Auto-évaluation de son état de santé et de son suivi à partir d’échelles validées",
        "Actions de gestion des risques professionnels délivrées par des organismes Qualiopi, un ODPC ou une structure figurant sur la liste publique",
        "Actions dans le domaine de la prévention en santé : calendrier vaccinal, RPS, santé environnementale, nutrition, activité physique, dépistage",
        "Consultation et suivi auprès d’un médecin autre que soi-même ou un parent du 1er degré",
        "Suivi par un médecin du travail",
        "Participation à des associations d’entraide aux médecins",
        "Participation à un programme intégré proposé par un ODPC sur le thème de la santé personnelle ou des risques psychosociaux",
        "Action hors liste validée par le CNP-DV"
      ],
      actions: [
        {
          id: "derm_b4_formation_sante",
          label: "Formation sur le thème de la santé personnelle du médecin",
          hint: "Organisme Qualiopi, ODPC ou structure figurant sur la liste publique."
        },
        {
          id: "derm_b4_groupes_pairs",
          label: "Groupe d’échange et d’analyse entre pairs sur la santé personnelle",
          hint: "Travail entre pairs sur la santé du professionnel."
        },
        {
          id: "derm_b4_autoeval",
          label: "Auto-évaluation de son état de santé et de son suivi",
          hint: "À partir d’échelles validées, avec une évaluation annuelle."
        },
        {
          id: "derm_b4_risques_pro",
          label: "Action de gestion des risques professionnels",
          hint: "Formation sur les risques professionnels dans l’exercice médical."
        },
        {
          id: "derm_b4_prevention_sante",
          label: "Actions de prévention en santé",
          hint: "Calendrier vaccinal, risques psychosociaux, santé environnementale, nutrition, sport, dépistage ; deux actions attendues."
        },
        {
          id: "derm_b4_medecin",
          label: "Consultation et suivi auprès d’un médecin",
          hint: "Médecin autre que soi-même ou un parent du 1er degré."
        },
        {
          id: "derm_b4_medecin_travail",
          label: "Suivi par un médecin du travail",
          hint: "Une action, avec attestation."
        },
        {
          id: "derm_b4_entraide_medecins",
          label: "Participation à une association d’entraide aux médecins",
          hint: "Ex. Association Soins aux Professionnels de Santé, Association MOTS."
        },
        {
          id: "derm_b4_programme_integre",
          label: "Programme intégré ODPC sur la santé personnelle ou les risques psychosociaux",
          hint: "Éligibilité de fait."
        }
      ]
    }
  ]
},
//endocrinologie diabetologie-nutrition
{
  id: "endocrinologie-diabetologie-nutrition",
  label: "Endocrinologue",
  fullTitle: "Certification Périodique de l’Endocrinologue",
  subtitle: "Spécialité : endocrinologie-diabétologie-nutrition",
  icon: "🧪",
  theme: {
    primary: "#0f766e",
    primary2: "#0f5e59",
    accent: "#14b8a6"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation endocrinologie-diabétologie-nutrition : 2 actions différentes minimum dans ce bloc, dont au moins 1 congrès de la liste CNP EDN.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à un congrès de la spécialité EDN retenu par le CNP",
        "Action de formation au titre du DPC organisée par l’ODPC d’endocrinologie-diabétologie ou l’ODPC de nutrition et publiée par l’ANDPC",
        "Action de formation scientifique ou professionnelle dispensée par un organisme Qualiopi ou figurant sur la liste publique des organismes de formation",
        "Formation diplômante ou certifiante organisée par les universités ou autres",
        "Activité d’enseignement délivrée dans le cadre d’une université en formation initiale ou continue",
        "Activité de recherche clinique ou épidémiologique institutionnelle",
        "Formation à la maîtrise de stage universitaire",
        "Travaux d’expertise se déroulant dans un cadre de traçabilité, de rigueur et d’indépendance",
        "Publications ou revues de lecture ou commentaires d’articles dans des revues référencées à comité de lecture indépendant",
        "Participation au comité éditorial de revues scientifiques de la spécialité",
        "Action hors liste validée par le comité scientifique du CNP EDN"
      ],
      actions: [
        {
          id: "endo_b1_congres",
          label: "Congrès de la spécialité EDN retenu par le CNP",
          hint: "Obligatoire dans le bloc 1. Participation comme apprenant ou formateur ; congrès national ou européen ; durée scientifique totale d’au moins 10 heures."
        },
        {
          id: "endo_b1_dpc",
          label: "Action de formation DPC Endocrinologie / Nutrition publiée par l’ANDPC",
          hint: "ODPC endo ou ODPC nutrition ; participation comme apprenant ou formateur ; minimum de 2 DPC sur 6 ans pour valider une action."
        },
        {
          id: "endo_b1_formation_qualiopi",
          label: "Action de formation scientifique ou professionnelle par organisme Qualiopi / liste publique",
          hint: "Formation validée par le comité scientifique du CNP EDN ; minimum de 2 journées sur 6 ans pour valider une action."
        },
        {
          id: "endo_b1_diplome",
          label: "Formation diplômante ou certifiante universitaire",
          hint: "DU, DIU ou DESIU validés par le CNP EDN."
        },
        {
          id: "endo_b1_enseignement",
          label: "Activité d’enseignement universitaire",
          hint: "Formation initiale ou continue ; minimum de 8 heures par an durant au moins 2 ans."
        },
        {
          id: "endo_b1_recherche",
          label: "Activité de recherche clinique ou épidémiologique institutionnelle",
          hint: "Recherche réalisée dans le cadre d’une unité labellisée, d’une université ou d’un appel d’offre international."
        },
        {
          id: "endo_b1_maitrise_stage",
          label: "Formation à la maîtrise de stage universitaire",
          hint: "Formation agréée, avec attestation."
        },
        {
          id: "endo_b1_expertise",
          label: "Travaux d’expertise dans un cadre de traçabilité, de rigueur et d’indépendance",
          hint: "Sociétés savantes, CNP, universités, CHU, HAS, ANSM, ANSES, agences européennes."
        },
        {
          id: "endo_b1_publication",
          label: "Publication, revue de lecture ou commentaire d’article",
          hint: "Minimum de 3 publications / commentaires sur les 6 ans."
        },
        {
          id: "endo_b1_comite_editorial",
          label: "Participation au comité éditorial d’une revue scientifique de la spécialité",
          hint: "Validation par le comité scientifique du CNP EDN."
        }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation endocrinologie-diabétologie-nutrition : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action d’analyse de pratiques et de gestion des risques ou programme intégré au titre du DPC publié par l’ANDPC par les ODPC Endo ou Nutrition",
        "Action d’analyse de pratiques et de gestion des risques ou programme intégré dispensé par un organisme Qualiopi ou figurant sur la liste publique",
        "Action d’amélioration des pratiques organisée au sein des établissements de santé : RMM, RCP, CREX, etc.",
        "Participation à l’élaboration de recommandations professionnelles dans le domaine de la spécialité EDN",
        "Participation régulière à un registre de pratiques, observatoire ou base de données de la spécialité",
        "Accréditation individuelle",
        "Actions d’amélioration des pratiques : missions d’expertise, participation à des recommandations au sein de groupes de travail",
        "Participation à un réseau de vigilance dans le cadre de la spécialité EDN",
        "Travaux d’expertise dans un cadre de traçabilité, de rigueur et d’indépendance",
        "Activité d’encadrement dans le cadre de la maîtrise de stage universitaire ou tutorat agréés",
        "Activités de recherche clinique ou épidémiologique institutionnelles",
        "Participation à un exercice coordonné et protocolé en équipe pluri-professionnelle de soin en ambulatoire",
        "Action hors liste validée par le CNP EDN"
      ],
      actions: [
        {
          id: "endo_b2_dpc_epp",
          label: "Action d’analyse de pratiques / gestion des risques DPC",
          hint: "Action ou programme intégré publié par l’ANDPC via les ODPC Endo ou Nutrition."
        },
        {
          id: "endo_b2_qualiopi_epp",
          label: "Action d’analyse de pratiques / gestion des risques par organisme Qualiopi / liste publique",
          hint: "Formation validée par le CNP EDN."
        },
        {
          id: "endo_b2_rmm_rcp_crex",
          label: "Action d’amélioration des pratiques en établissement : RMM, RCP, CREX",
          hint: "Au moins une participation par an sur le cycle de 6 ans."
        },
        {
          id: "endo_b2_recommandations",
          label: "Participation à l’élaboration de recommandations professionnelles",
          hint: "Institution, société savante ou HAS, dans le domaine de la spécialité EDN."
        },
        {
          id: "endo_b2_registre",
          label: "Participation régulière à un registre de pratiques / observatoire / base de données",
          hint: "Nouveau registre ou participation active au moins 2 ans avec inclusion d’au moins 10 patients."
        },
        {
          id: "endo_b2_accreditation",
          label: "Accréditation individuelle",
          hint: "Action individuelle du médecin et non collective dans le cadre d’un établissement."
        },
        {
          id: "endo_b2_groupes_travail",
          label: "Missions d’expertise ou participation à des recommandations au sein de groupes de travail",
          hint: "CNP, Ordres, syndicats, ministère ou agences."
        },
        {
          id: "endo_b2_vigilance",
          label: "Participation à un réseau de vigilance",
          hint: "Participation poursuivie pendant un minimum de 2 ans."
        },
        {
          id: "endo_b2_expertise",
          label: "Travaux d’expertise dans un cadre de traçabilité, de rigueur et d’indépendance",
          hint: "Minimum de 2 projets expertisés pour valider une action."
        },
        {
          id: "endo_b2_encadrement",
          label: "Encadrement dans le cadre de la maîtrise de stage universitaire ou tutorat",
          hint: "Participation cumulée équivalente à 6 mois sur un cycle."
        },
        {
          id: "endo_b2_recherche",
          label: "Activité de recherche institutionnelle",
          hint: "Études cliniques ou épidémiologiques réalisées dans une structure labellisée."
        },
        {
          id: "endo_b2_exercice_coordonne",
          label: "Exercice coordonné et protocolé en équipe pluri-professionnelle de soin en ambulatoire",
          hint: "Participation minimale de 2 ans."
        }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation endocrinologie-diabétologie-nutrition : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation sur le thème de la relation patient et/ou de l’éducation thérapeutique",
        "Formation diplômante ou certifiante sur le thème de la relation patient organisée par les universités",
        "Action réalisée dans le cadre d’une association d’usagers du système de santé agréée",
        "Conception et participation à la mise en place de programmes associant des patients",
        "Participation à des groupes d’échange et d’analyse entre pairs centrés sur la relation avec le patient",
        "Participation aux registres de pratiques intégrant un recueil de données patients dans la spécialité EDN",
        "Participation à un dispositif d’annonce : diagnostic d’un cancer, dommage associé aux soins, maladie chronique",
        "Définition et évaluation de parcours des patients traceurs",
        "Partage d’expériences interprofessionnelles et de bonnes pratiques pour améliorer la prise en charge des patients vulnérables, la fin de vie et lutter contre les discriminations",
        "Actions de promotion de la santé environnementale et de l’éco-responsabilité dans le cadre de l’éco-soins",
        "Action hors liste validée par le CNP EDN"
      ],
      actions: [
        {
          id: "endo_b3_formation_relation",
          label: "Formation sur la relation patient et / ou l’éducation thérapeutique",
          hint: "Organisme Qualiopi, ODPC Endo, ODPC Nutrition, autre ODPC ANDPC ou structure figurant sur la liste publique."
        },
        {
          id: "endo_b3_diplome_relation",
          label: "Formation diplômante ou certifiante sur le thème de la relation patient",
          hint: "DU / DIU validés par le CNP EDN ou par son comité scientifique."
        },
        {
          id: "endo_b3_association_usagers",
          label: "Action réalisée dans le cadre d’une association d’usagers du système de santé agréée",
          hint: "Journées patients, fonctions dans une association, sensibilisation, fiches d’information, enquêtes de satisfaction."
        },
        {
          id: "endo_b3_programmes_patients",
          label: "Conception et participation à des programmes associant des patients",
          hint: "Éducation thérapeutique, patients experts, programmes centrés sur le patient."
        },
        {
          id: "endo_b3_groupes_pairs",
          label: "Groupes d’échange et d’analyse entre pairs centrés sur la relation avec le patient",
          hint: "Groupe pérenne validé par le comité scientifique du CNP EDN ; au moins 6 réunions sur le cycle."
        },
        {
          id: "endo_b3_registre_patient",
          label: "Participation à des registres intégrant un recueil de données patients",
          hint: "Registres de pratiques de la spécialité EDN avec données patients."
        },
        {
          id: "endo_b3_dispositif_annonce",
          label: "Participation à un dispositif d’annonce",
          hint: "Diagnostic de cancer, dommage associé aux soins, maladie chronique, etc."
        },
        {
          id: "endo_b3_patient_traceur",
          label: "Définition et évaluation de parcours de patients traceurs",
          hint: "Action relevant des méthodes HAS."
        },
        {
          id: "endo_b3_partage_interpro",
          label: "Partage d’expériences interprofessionnelles et de bonnes pratiques",
          hint: "Patients vulnérables, fin de vie, inégalités d’accès aux soins, discriminations ; dispositif à valider par le comité scientifique du CNP EDN."
        },
        {
          id: "endo_b3_eco_soins",
          label: "Promotion de la santé environnementale et de l’éco-soins",
          hint: "Dispositif à valider par le comité scientifique du CNP EDN."
        }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé personnelle du professionnel",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation endocrinologie-diabétologie-nutrition : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation sur le thème de la santé personnelle du médecin",
        "Actions dans le domaine de la prévention en santé : calendrier vaccinal, prévention et gestion des risques psycho-sociaux, radioprotection",
        "Auto-évaluation de son état de santé et de son suivi avec propositions d’outils de prise en charge",
        "Actions de gestion des risques professionnels",
        "Consultation de médecine du travail au moins tous les trois ans",
        "Avoir un médecin traitant autre que soi-même",
        "Action hors liste validée par le CNP EDN"
      ],
      actions: [
        {
          id: "endo_b4_formation_sante",
          label: "Formation sur le thème de la santé personnelle du médecin",
          hint: "Organisme Qualiopi, ODPC, liste publique ou ODPC Endo / Nutrition."
        },
        {
          id: "endo_b4_prevention",
          label: "Actions de prévention en santé",
          hint: "Respect du calendrier vaccinal, prévention et gestion des risques psycho-sociaux, radioprotection."
        },
        {
          id: "endo_b4_autoeval",
          label: "Auto-évaluation de son état de santé et de son suivi",
          hint: "Au moins un questionnaire validé parmi les outils proposés en annexe."
        },
        {
          id: "endo_b4_risques_pro",
          label: "Actions de gestion des risques professionnels",
          hint: "Action délivrée par organisme Qualiopi, ODPC, liste publique ou ODPC Endo / Nutrition."
        },
        {
          id: "endo_b4_medecine_travail",
          label: "Consultation de médecine du travail",
          hint: "Au moins tous les 3 ans."
        },
        {
          id: "endo_b4_medecin_traitant",
          label: "Avoir un médecin traitant autre que soi-même",
          hint: "Éligibilité de fait, avec attestation."
        }
      ]
    }
  ]
},
//gynecologie-obstetrique-gynecologie-medicale
{
  id: "gynecologie-obstetrique-gynecologie-medicale",
  label: "Gynécologue",
  fullTitle: "Certification Périodique du Gynécologue",
  subtitle: "Spécialité : gynécologie-obstétrique et gynécologie médicale",
  icon: "🩺",
  theme: {
    primary: "#b83280",
    primary2: "#97266d",
    accent: "#ed64a6"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation GO-GM : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation au titre du DPC publiée par l’ANDPC",
        "Formation scientifique ou professionnelle dispensée par un organisme Qualiopi ou figurant sur la liste publique des organismes de formation",
        "Participation à un congrès de niveau national ou international",
        "Participation à une journée régionale, un colloque, une association, un réseau de périnatalité ou un réseau de soins spécifiques",
        "Formations diplômantes ou certifiantes universitaires (DU/DIU)",
        "Validation d’une démarche d’accréditation",
        "Activités d’enseignement universitaire",
        "Maîtrise de stage universitaire",
        "Activités de conférencier",
        "Activités de recherche",
        "Travaux d’expertise",
        "Publications, revues de lecture ou commentaires d’articles",
        "Participation au comité éditorial de revues scientifiques",
        "Abonnement à une revue médicale de la spécialité",
        "Participation régulière à des réunions formalisées de revue bibliographique",
        "Programme intégré DPC",
        "Programme intégré DPC",
        "Programme intégré DPC",
        "Programme intégré DPC",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "gogm_b1_dpc",
          label: "Formation DPC ANDPC",
          hint: "Action correspondant aux orientations prioritaires nationales ou GO-GM ; attestation de réalisation + programme."
        },
        {
          id: "gogm_b1_qualiopi",
          label: "Formation scientifique / professionnelle Qualiopi ou liste publique",
          hint: "Dans le domaine de la gynécologie-obstétrique et de la gynécologie médicale."
        },
        {
          id: "gogm_b1_congres",
          label: "Congrès national ou international",
          hint: "Une unité correspond à 6 demi-journées sur 6 ans ; congrès validé par le CNP."
        },
        {
          id: "gogm_b1_journee_regionale",
          label: "Journée régionale / colloque / association / réseau",
          hint: "Colloque, association, réseau de périnatalité ou réseau de soins spécifiques : infertilité, cancer, endométriose, etc."
        },
        {
          id: "gogm_b1_diu_du",
          label: "DU / DIU de la spécialité",
          hint: "Formation diplômante ou certifiante universitaire en GO-GM."
        },
        {
          id: "gogm_b1_accreditation",
          label: "Validation d’une démarche d’accréditation HAS",
          hint: "Accréditation GYNERISQ poursuivie pendant la période de 6 ans."
        },
        {
          id: "gogm_b1_enseignement",
          label: "Activités d’enseignement universitaire",
          hint: "À destination des internes, médecins, sages-femmes, infirmières, kinésithérapeutes, etc. Une unité = 1 an."
        },
        {
          id: "gogm_b1_maitrise_stage",
          label: "Maîtrise de stage universitaire",
          hint: "Pour les internes ; justificatif par attestation de stage."
        },
        {
          id: "gogm_b1_conferencier",
          label: "Activités de conférencier",
          hint: "Lors d’un congrès national/international ou d’une session de formation ; activité régulière, 3 sur 6 ans."
        },
        {
          id: "gogm_b1_recherche",
          label: "Activités de recherche",
          hint: "Études cliniques ou épidémiologiques institutionnelles, PHRC, université, appel d’offre international."
        },
        {
          id: "gogm_b1_expertise",
          label: "Travaux d’expertise",
          hint: "Sociétés savantes, CNP, universités, CHU, instituts de recherche, HAS, ANSM, ABM, agences nationales ou européennes."
        },
        {
          id: "gogm_b1_publications",
          label: "Publications / revues de lecture / commentaires d’articles",
          hint: "Article en rang utile ; une unité correspond à une publication sur 6 ans ou à une activité de revue de lecture sur un an."
        },
        {
          id: "gogm_b1_comite_editorial",
          label: "Participation au comité éditorial d’une revue scientifique",
          hint: "Dans le domaine de la spécialité."
        },
        {
          id: "gogm_b1_abonnement_revue",
          label: "Abonnement à une revue médicale de la spécialité",
          hint: "Preuve d’abonnement."
        },
        {
          id: "gogm_b1_revue_biblio",
          label: "Réunions formalisées de revue bibliographique",
          hint: "Une unité correspond à une revue bibliographique par trimestre pendant un an."
        },
        {
          id: "gogm_b1_programme_integre",
          label: "Programme intégré DPC",
          hint: "Le référentiel liste plusieurs lignes de programme intégré ; combinaison formation continue / EPP / gestion des risques."
        },
        {
          id: "gogm_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Validation a priori ou a posteriori sur dossier."
        }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation GO-GM : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Action d’analyses de pratiques ou de gestion des risques par organisme Qualiopi ou liste publique",
        "Validation des blocs sécurité des patients et pratiques professionnelles de l’accréditation HAS",
        "Actions d’amélioration des pratiques organisées dans les établissements de santé",
        "Participation à des RMM / RCP / CREX",
        "Analyse des événements indésirables et gestion des risques",
        "Registres de pratiques de la spécialité",
        "Protocoles / procédures / indicateurs qualité",
        "Activité de simulation en santé / analyse de cas",
        "Participation aux commissions qualité / gestion des risques",
        "Suivi d’indicateurs IQSS / qualité / sécurité",
        "Encadrement / tutorat / maîtrise de stage",
        "Travaux de recherche à visée amélioration des pratiques",
        "Groupes institutionnels / sociétés savantes / recommandations",
        "Participation à l’amélioration des pratiques au sein d’un réseau",
        "Relecture / expertise / audits",
        "Expertises médicales CCI, ANSM…",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "gogm_b2_app_gdr",
          label: "Analyse de pratiques / gestion des risques Qualiopi ou liste publique",
          hint: "Action à caractère scientifique ou professionnel ; attestation + programme."
        },
        {
          id: "gogm_b2_accreditation",
          label: "Validation des blocs sécurité des patients et pratiques professionnelles de l’accréditation HAS",
          hint: "Accréditation GYNERISQ avec bilan annuel validé par un expert HAS."
        },
        {
          id: "gogm_b2_rmm_rcp_crex",
          label: "RMM / RCP / CREX / démarches d’amélioration des pratiques",
          hint: "Actions d’amélioration des pratiques organisées au sein des établissements."
        },
        {
          id: "gogm_b2_ei_gdr",
          label: "Analyse des événements indésirables et gestion des risques",
          hint: "Démarches qualité-sécurité, retour d’expérience, prévention des risques."
        },
        {
          id: "gogm_b2_registres",
          label: "Participation à un registre de pratiques",
          hint: "Registres cités en annexe : ESSURE, CONTRAGYN, EPIGYN."
        },
        {
          id: "gogm_b2_protocoles",
          label: "Protocoles / procédures / indicateurs qualité",
          hint: "Élaboration, utilisation, suivi ou évaluation de protocoles et d’indicateurs."
        },
        {
          id: "gogm_b2_simulation",
          label: "Simulation en santé / analyse de cas cliniques",
          hint: "Action orientée amélioration des pratiques et sécurité."
        },
        {
          id: "gogm_b2_commissions",
          label: "Participation aux commissions qualité / gestion des risques",
          hint: "Activités institutionnelles liées à la qualité et à la sécurité des soins."
        },
        {
          id: "gogm_b2_iqss",
          label: "Suivi d’indicateurs qualité et sécurité",
          hint: "IQSS et autres indicateurs d’amélioration des pratiques."
        },
        {
          id: "gogm_b2_encadrement",
          label: "Encadrement / tutorat / maîtrise de stage",
          hint: "Activité d’encadrement contribuant à la qualité des pratiques."
        },
        {
          id: "gogm_b2_recherche_pratiques",
          label: "Recherche orientée pratiques / qualité / sécurité",
          hint: "Travaux ou études contribuant à l’amélioration des pratiques."
        },
        {
          id: "gogm_b2_groupes_travail",
          label: "Groupes de travail / recommandations / réseaux",
          hint: "Participation à des groupes institutionnels ou de sociétés savantes."
        },
        {
          id: "gogm_b2_audits_relecture",
          label: "Audits / relecture / expertise de pratiques",
          hint: "Démarches structurées d’évaluation et d’amélioration."
        },
        {
          id: "gogm_b2_expertise_medicale",
          label: "Expertises médicales CCI, ANSM…",
          hint: "Une unité correspond à une expertise pendant une année."
        },
        {
          id: "gogm_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Validation sur demande, a priori ou a posteriori."
        }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation GO-GM : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Validation du bloc amélioration de la relation avec les patients de l’accréditation HAS",
        "Action de formation relation patient par organisme Qualiopi ou liste des OF",
        "Formations diplômantes ou certifiantes sur le thème de la relation patient",
        "Programmes de santé associant le patient ou pour le patient",
        "Relation médecin-patient : dispositifs d’annonce",
        "Actions en lien avec les associations de patient(e)s",
        "Participation à la diffusion d’informations adaptées au patient",
        "Activité de veille bibliographique avec adaptation de l’information",
        "Animation de réunions d’information auprès des patient(e)s ou du public",
        "PREMs / PROMs / satisfaction patient",
        "Commissions des usagers / qualité / gestion des risques",
        "Partage d’expériences interprofessionnelles pour patients vulnérables",
        "Lutte contre les inégalités d’accès aux soins et les discriminations",
        "Prévention / éducation thérapeutique / médiations",
        "Promotion de la santé environnementale et éco-soins",
        "Enquêtes de satisfaction annuelles des patient(e)s",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "gogm_b3_accreditation",
          label: "Validation du bloc relation patient de l’accréditation HAS",
          hint: "Accréditation GYNERISQ, bilan annuel validé par un expert HAS."
        },
        {
          id: "gogm_b3_formation_relation",
          label: "Formation relation patient",
          hint: "Action dispensée par organisme Qualiopi ou figurant sur la liste des OF."
        },
        {
          id: "gogm_b3_diplome_relation",
          label: "DU / DIU sur la relation patient",
          hint: "Diplôme ou certificat universitaire sur le thème de la relation patient."
        },
        {
          id: "gogm_b3_programmes_patients",
          label: "Programmes de santé associant le patient ou pour le patient",
          hint: "Éducation thérapeutique, patients experts, information patient, vulgarisation, réunions d’information."
        },
        {
          id: "gogm_b3_dispositif_annonce",
          label: "Relation médecin-patient : dispositifs d’annonce",
          hint: "Diagnostic d’un cancer, dommage associé aux soins, mauvaise nouvelle, etc."
        },
        {
          id: "gogm_b3_associations_patients",
          label: "Actions avec des associations de patient(e)s",
          hint: "Participation à des actions d’information, de sensibilisation ou d’accompagnement."
        },
        {
          id: "gogm_b3_information_patient",
          label: "Diffusion d’informations adaptées au patient",
          hint: "Documents, abstracts de vulgarisation, actions d’information pour le public."
        },
        {
          id: "gogm_b3_reunions_info",
          label: "Animation de réunions d’information patient / public",
          hint: "Réunions d’information, prévention, accompagnement."
        },
        {
          id: "gogm_b3_prems_proms",
          label: "PREMs / PROMs / enquêtes de satisfaction",
          hint: "Mesure de l’expérience de soins perçue et de la satisfaction des patients."
        },
        {
          id: "gogm_b3_commissions_usagers",
          label: "Participation aux commissions des usagers / qualité / gestion des risques",
          hint: "Feuille de présence aux activités des commissions concernées."
        },
        {
          id: "gogm_b3_patients_vulnerables",
          label: "Partage d’expériences interprofessionnelles pour patients vulnérables",
          hint: "Amélioration de la prise en charge, lutte contre les inégalités d’accès aux soins et les discriminations."
        },
        {
          id: "gogm_b3_prevention_etp_mediation",
          label: "Prévention / éducation thérapeutique / médiations",
          hint: "Actions de prévention, d’éducation thérapeutique ou de médiation."
        },
        {
          id: "gogm_b3_eco_soins",
          label: "Santé environnementale et éco-soins",
          hint: "Promotion de la santé environnementale et de l’éco-responsabilité."
        },
        {
          id: "gogm_b3_satisfaction_annuelle",
          label: "Enquêtes de satisfaction annuelles",
          hint: "Enquête patient, voire patient / médecin ; une unité correspond à un travail pendant un an."
        },
        {
          id: "gogm_b3_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Validation a priori ou a posteriori."
        }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé personnelle du professionnel",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation GO-GM : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Auto-évaluation de son état de santé et de son suivi",
        "Validation du bloc Santé du Professionnel de l’accréditation HAS",
        "Formation sur la santé personnelle du médecin",
        "DIU Soigner les soignants",
        "Formation à la prise en compte de l’ergonomie au travail",
        "Groupes d’échange et d’analyse entre pairs sur la santé personnelle du médecin",
        "Auto-évaluation de l’état de santé avec identification de points de difficultés et mesures préventives",
        "Actions dans le domaine de la prévention en santé",
        "Visite médicale régulière de prévention",
        "Suivi par un médecin traitant référent autre que soi-même",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "gogm_b4_autoeval_plateforme",
          label: "Auto-évaluation de son état de santé et de son suivi",
          hint: "Renseignement de 3 questionnaires sur 6 ans ; outils proposés par le CNP GO-GM."
        },
        {
          id: "gogm_b4_accreditation",
          label: "Validation du bloc Santé du Professionnel de l’accréditation HAS",
          hint: "Accréditation GYNERISQ couvrant la période."
        },
        {
          id: "gogm_b4_formation_sante",
          label: "Formation santé du professionnel",
          hint: "Action dispensée par organisme Qualiopi, liste des OF ou ODPC."
        },
        {
          id: "gogm_b4_diu_soigner_soignants",
          label: "DIU Soigner les soignants",
          hint: "Validation du DIU."
        },
        {
          id: "gogm_b4_ergonomie",
          label: "Formation à l’ergonomie au travail",
          hint: "Attestation de réalisation de l’action de formation."
        },
        {
          id: "gogm_b4_groupes_pairs",
          label: "Groupes d’échange et d’analyse entre pairs",
          hint: "Permettent de travailler sur la santé personnelle du médecin."
        },
        {
          id: "gogm_b4_autoreperage",
          label: "Auto-évaluation avec identification de points de difficulté",
          hint: "Une unité correspond à au moins une auto-évaluation tous les 6 ans."
        },
        {
          id: "gogm_b4_prevention",
          label: "Actions dans le domaine de la prévention en santé",
          hint: "Programme de prévention : calendrier vaccinal, dépistages, etc."
        },
        {
          id: "gogm_b4_visite_prevention",
          label: "Visite médicale régulière de prévention",
          hint: "Au moins tous les 6 ans."
        },
        {
          id: "gogm_b4_medecin_traitant",
          label: "Médecin traitant référent autre que soi-même",
          hint: "Déclarer un médecin traitant autre que soi-même."
        },
        {
          id: "gogm_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Validation sur dossier, a priori ou a posteriori."
        }
      ]
    }
  ]
},
//medecine-interne-immunologie-clinique
{
  id: "medecine-interne-immunologie-clinique",
  label: "Médecin interniste",
  fullTitle: "Certification Périodique du Médecin Interniste",
  subtitle: "Spécialité : médecine interne, médecine polyvalente et immunologie clinique",
  icon: "🩺",
  theme: {
    primary: "#2563eb",
    primary2: "#1d4ed8",
    accent: "#60a5fa"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation MIPIC : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Actions de formation au titre du DPC publiées par l’ANDPC",
        "Participation à un congrès national",
        "Participation à un congrès international",
        "Actions de formation de type e-learning / MOOC / webinaires",
        "Actions de formation issues des UMFC en santé / départements de formation continue / CHU / CH / CHS / secteur privé",
        "Formations diplômantes ou certifiantes post-3e cycle (DU, DIU, DESU, CESU, FST, options, 2e DES, Master)",
        "Activités d’enseignement universitaire et instituts de formation",
        "Formation à la maîtrise de stage universitaire",
        "Direction de thèse / mémoire / master",
        "Activités de recherche",
        "Publications / revues de lecture / commentaires d’articles",
        "Participation au comité éditorial d’une revue scientifique",
        "Participation à la rédaction ou comme paneliste aux Tests de Concordance de Scripts",
        "Participation active à un programme de simulation en santé",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "mipic_b1_dpc",
          label: "Formation DPC ANDPC",
          hint: "Action publiée par l’ANDPC, destinée aux médecins de médecine interne / médecine polyvalente / immunologie clinique."
        },
        {
          id: "mipic_b1_congres_national",
          label: "Congrès national de la spécialité",
          hint: "Exemples reconnus : SNFMI, SFMP, SFI, SFH, SFGM-TC, SFNDT, SPLF, SFA, SPILF, SFMV, SFGG, SFR, SFAP, SFC, SFD, AFEF, SNFGE, SFN, SFR, Printemps de la Médecine Interne, formations des filières FAI2R, MARIH, MCGRE."
        },
        {
          id: "mipic_b1_congres_international",
          label: "Congrès international",
          hint: "Exemples reconnus : ACP, ACR, ASH, ATS, CROI, ECI, ECMID, EFIM, ERS, ESID, EULAR, EUSTAR, ISSAID, ISA, MIRCIM, SHM, SSIEM."
        },
        {
          id: "mipic_b1_elearning",
          label: "E-learning / MOOC / webinaire",
          hint: "Exemples : MOOC Fondation Maladies Rares, FUN MOOC, Coursera, edX, MOOC MARIH, cours en ligne EULAR, EFIM Webinar."
        },
        {
          id: "mipic_b1_umfc",
          label: "Formation continue universitaire / CHU / CH / CHS / secteur privé",
          hint: "Actions issues des UMFC en santé, départements de formation continue, CHU, centres hospitaliers, secteur privé dans le domaine d’exercice."
        },
        {
          id: "mipic_b1_diu_du",
          label: "DU / DIU / DESU / CESU / FST / 2e DES / Master",
          hint: "Formations complémentaires post-3e cycle adaptées à la spécialité ; exemples cités : DIU de médecine polyvalente hospitalière, FST de médecine hospitalière polyvalente, DU/DIU de la filière FAI2R."
        },
        {
          id: "mipic_b1_enseignement",
          label: "Activités d’enseignement universitaire",
          hint: "Validation si participation à un enseignement en tant qu’enseignant d’au moins 12 heures sur les 6 ans."
        },
        {
          id: "mipic_b1_msu",
          label: "Formation à la maîtrise de stage universitaire",
          hint: "Encadrement de stages ou MSU via actions de formation ANDPC ou URPS."
        },
        {
          id: "mipic_b1_direction_these",
          label: "Direction de thèse / mémoire / master",
          hint: "Au moins une thèse de science, thèse de médecine, mémoire de master ou mémoire de médecine."
        },
        {
          id: "mipic_b1_recherche",
          label: "Activité de recherche",
          hint: "Recherche dans le champ de la médecine interne / médecine polyvalente / immunologie clinique."
        },
        {
          id: "mipic_b1_publication",
          label: "Publication / revue de lecture / commentaire d’article",
          hint: "Production scientifique dans le champ de la spécialité."
        },
        {
          id: "mipic_b1_comite_editorial",
          label: "Participation à un comité éditorial",
          hint: "Participation à un comité éditorial de revue scientifique."
        },
        {
          id: "mipic_b1_tcs",
          label: "Tests de Concordance de Scripts (TCS)",
          hint: "Participation à la rédaction ou en tant que paneliste."
        },
        {
          id: "mipic_b1_simulation",
          label: "Programme de simulation en santé",
          hint: "Participation active à un programme de simulation."
        },
        {
          id: "mipic_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action conforme à une fiche méthode HAS ou aux critères FSM, validée a priori ou a posteriori par le CNP."
        }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation MIPIC : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Participation régulière à un registre de pratiques / observatoire / base de données de la spécialité",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés au titre du DPC",
        "Participation à un colloque sur l’évaluation des pratiques / qualité / sécurité / analyse de pratiques",
        "Actions d’amélioration des pratiques organisées au sein des établissements de santé (RMM, CREX, autres EPP, patients traceurs)",
        "Participation aux campagnes IQSS",
        "Participation à des démarches qualité HAS / ANAES / PDCA / audit clinique / audit système / chemin clinique / parcours traceur / traceur ciblé",
        "Participation à des protocoles pluriprofessionnels / protocoles de coopération / organisation des parcours",
        "Gestion des risques en équipe et événements indésirables liés aux soins",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "mipic_b2_registre",
          label: "Registre de pratiques / observatoire / base de données",
          hint: "Validation si participation active durant au moins 2 ans avec inclusion d’au moins 5 patients ; pathologies correspondant à l’exercice de la spécialité."
        },
        {
          id: "mipic_b2_dpc_app",
          label: "DPC analyse de pratiques / gestion des risques / programme intégré",
          hint: "Publié par l’ANDPC et destiné aux médecins de médecine interne / immunologie clinique / médecine polyvalente."
        },
        {
          id: "mipic_b2_colloque_qualite",
          label: "Colloque qualité / sécurité / EPP",
          hint: "Exemples : assises professionnelles, journées professionnelles SNFMI, SFMP, CNP MIPIC, « cafés du CNP ». Minimum de 4 participations pour valider une action."
        },
        {
          id: "mipic_b2_rmm_crex_epp",
          label: "RMM / CREX / autres méthodes d’EPP / patient traceur",
          hint: "Actions d’amélioration des pratiques organisées en établissement."
        },
        {
          id: "mipic_b2_iqss",
          label: "Campagnes IQSS",
          hint: "Participation aux indicateurs de qualité et de sécurité des soins en établissements de santé."
        },
        {
          id: "mipic_b2_demarche_qualite",
          label: "Audit clinique / audit système / PDCA / parcours traceur / chemin clinique",
          hint: "Toute activité entrant dans les méthodes et outils des démarches qualité pour les établissements de santé et parcours de soins."
        },
        {
          id: "mipic_b2_protocoles",
          label: "Protocoles pluriprofessionnels / coopération / parcours",
          hint: "Élaboration ou participation à des protocoles et démarches d’organisation des parcours."
        },
        {
          id: "mipic_b2_gdr_equipe",
          label: "Gestion des risques en équipe",
          hint: "Toute action liée à l’identification, l’analyse et la correction des événements indésirables liés aux soins."
        },
        {
          id: "mipic_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Validation sur dossier par le CNP."
        }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation MIPIC : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation sur la relation patient / annonce / accompagnement / décision partagée / éducation thérapeutique / éthique",
        "Formations diplômantes ou certifiantes sur le thème de la relation patient, soins palliatifs, éducation thérapeutique, éthique",
        "Participation à un comité d’éthique ou CPP",
        "Patients traceurs",
        "Connaissance du numérique en santé, de la e-santé et de l’intelligence artificielle appliquée au soin et à la relation patient",
        "Partage d’expériences interprofessionnelles pour patients vulnérables et lutte contre les inégalités / discriminations",
        "Groupes d’échange et d’analyse entre pairs centrés sur la relation avec le patient",
        "Promotion de la santé environnementale et de l’éco-responsabilité dans le cadre des éco-soins",
        "Action de promotion de la bientraitance, du respect de la dignité, de l’intimité, des droits et du consentement",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "mipic_b3_formation_relation",
          label: "Formation relation patient / annonce / éthique / ETP",
          hint: "Formation sur l’information du patient, l’annonce d’un dommage associé aux soins, l’annonce d’une mauvaise nouvelle, l’annonce/accompagnement du diagnostic d’une maladie chronique, la décision médicale partagée, FAIRE DIRE, etc."
        },
        {
          id: "mipic_b3_du_relation",
          label: "DU / DIU relation patient / éthique / soins palliatifs / ETP",
          hint: "Tout DU ou DIU sur l’éthique en santé, les soins palliatifs et accompagnement, l’éducation thérapeutique du patient ; formations européennes type EULAR Patient Education."
        },
        {
          id: "mipic_b3_comite_ethique",
          label: "Participation à un comité d’éthique / CPP",
          hint: "Validation si participation à 4 réunions sur la période de 6 ans."
        },
        {
          id: "mipic_b3_patient_traceur",
          label: "Patients traceurs",
          hint: "Validation si participation à un minimum de 4 réunions."
        },
        {
          id: "mipic_b3_numerique_ia",
          label: "Numérique en santé / e-santé / IA",
          hint: "Participation à une ou plusieurs réunions ou formations comptabilisant au moins 8 heures sur le cycle."
        },
        {
          id: "mipic_b3_patients_vulnerables",
          label: "Prise en charge des publics vulnérables / lutte contre les discriminations",
          hint: "Partage d’expériences interprofessionnelles et bonnes pratiques ; au moins 8 heures sur le cycle."
        },
        {
          id: "mipic_b3_pairs_relation",
          label: "Groupes d’échange et d’analyse entre pairs",
          hint: "Travail sur des situations cliniques centrées sur la relation avec le patient."
        },
        {
          id: "mipic_b3_eco_soins",
          label: "Éco-soins / santé environnementale",
          hint: "Formation ou groupe de travail One Health, développement durable, déchets, recyclage ; au moins 8 heures sur le cycle."
        },
        {
          id: "mipic_b3_bientraitance",
          label: "Bientraitance / dignité / consentement / droits du patient",
          hint: "Soit formation sur cette thématique, soit mise en place d’une évaluation selon la méthodologie HAS."
        },
        {
          id: "mipic_b3_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action conforme à une fiche méthode HAS ou aux critères FSM, validée par le CNP."
        }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé personnelle du professionnel",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation MIPIC : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Actions de formation sur la santé personnelle du médecin, la qualité de vie au travail et la gestion des risques professionnels",
        "Avoir un médecin traitant",
        "Auto-évaluation de son état de santé et de son suivi",
        "Groupes d’échange et d’analyse entre pairs sur la santé du soignant",
        "Action de prévention en santé",
        "Activité physique / lutte contre la sédentarité",
        "Suivi des vaccinations / dépistages",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "mipic_b4_formation_sante",
          label: "Formation santé personnelle / QVT / risques professionnels",
          hint: "Action de formation axée sur la santé personnelle du soignant, la qualité de vie au travail ou la gestion des risques professionnels ; 1 action sur un cycle de 6 ans."
        },
        {
          id: "mipic_b4_medecin_traitant",
          label: "Avoir un médecin traitant",
          hint: "Le référentiel prévoit la prise en compte du médecin traitant comme action validante."
        },
        {
          id: "mipic_b4_autoevaluation",
          label: "Auto-évaluation de son état de santé",
          hint: "Validation si le médecin a rempli au moins 4 auto-questionnaires, dont au moins 1 dans chaque catégorie : souffrance psychique, troubles musculosquelettiques/sédentarité, risque de dépendance ; à refaire au moins une fois tous les 3 ans."
        },
        {
          id: "mipic_b4_groupes_pairs",
          label: "Groupes d’échange et d’analyse entre pairs",
          hint: "Groupes permettant de travailler sur la santé du soignant."
        },
        {
          id: "mipic_b4_prevention",
          label: "Action de prévention en santé",
          hint: "Prévention personnelle au sens large, dans l’esprit du référentiel."
        },
        {
          id: "mipic_b4_activite_physique",
          label: "Activité physique / lutte contre la sédentarité",
          hint: "Le référentiel inclut explicitement une évaluation de la sédentarité et la prise en compte de l’activité physique."
        },
        {
          id: "mipic_b4_vaccination_depistage",
          label: "Vaccinations / dépistages / prévention personnelle",
          hint: "Dans la logique des actions de prévention et d’auto-repérage."
        },
        {
          id: "mipic_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Validation sur dossier par le CNP."
        }
      ]
    }
  ]
},
//neurologie
{
  id: "neurologie",
  label: "Neurologue",
  fullTitle: "Certification Périodique du Neurologue",
  subtitle: "Spécialité : neurologie",
  icon: "🧠",
  theme: {
    primary: "#7c3aed",
    primary2: "#6d28d9",
    accent: "#2563eb"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC neurologie",
        "Congrès de spécialité",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "neuro_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "neuro_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "neuro_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "neuro_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "neuro_b1_recherche", label: "Activité de recherche", hint: "Projet ou étude." },
        { id: "neuro_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Audit clinique",
        "EPP",
        "RCP",
        "Registre",
        "Protocoles",
        "Gestion des risques"
      ],
      actions: [
        { id: "neuro_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "neuro_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "neuro_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "neuro_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "neuro_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation relation patient",
        "Dispositif d’annonce",
        "Association de patients",
        "Enquête satisfaction",
        "Programme patient"
      ],
      actions: [
        { id: "neuro_b3_relation", label: "Formation relation patient", hint: "Communication et accompagnement." },
        { id: "neuro_b3_annonce", label: "Dispositif d’annonce", hint: "Annonce et accompagnement." },
        { id: "neuro_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." },
        { id: "neuro_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient." }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé du pro",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Suivi médical",
        "Prévention santé",
        "Activité physique",
        "Groupe de pairs"
      ],
      actions: [
        { id: "neuro_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "neuro_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "neuro_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "neuro_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
},
{
  id: "ophtalmologie",
  label: "Ophtalmologue",
  fullTitle: "Certification Périodique de l’Ophtalmologue",
  subtitle: "Spécialité : ophtalmologie",
  icon: "👁️",
  theme: {
    primary: "#2563eb",
    primary2: "#1d4ed8",
    accent: "#06b6d4"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC ophtalmologie",
        "Congrès de spécialité",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "opht_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "opht_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "opht_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "opht_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "opht_b1_recherche", label: "Activité de recherche", hint: "Projet ou étude." },
        { id: "opht_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Audit clinique",
        "EPP",
        "RCP",
        "Registre",
        "Protocoles",
        "Gestion des risques"
      ],
      actions: [
        { id: "opht_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "opht_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "opht_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "opht_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "opht_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation relation patient",
        "Dispositif d’annonce",
        "Association de patients",
        "Enquête satisfaction",
        "Programme patient"
      ],
      actions: [
        { id: "opht_b3_relation", label: "Formation relation patient", hint: "Communication et accompagnement." },
        { id: "opht_b3_annonce", label: "Dispositif d’annonce", hint: "Annonce et accompagnement." },
        { id: "opht_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." },
        { id: "opht_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient." }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé du pro",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Suivi médical",
        "Prévention santé",
        "Activité physique",
        "Groupe de pairs"
      ],
      actions: [
        { id: "opht_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "opht_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "opht_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "opht_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
},
{
  id: "pediatrie",
  label: "Pédiatre",
  fullTitle: "Certification Périodique du Pédiatre",
  subtitle: "Spécialité : pédiatrie",
  icon: "🧸",
  theme: {
    primary: "#ec4899",
    primary2: "#db2777",
    accent: "#8b5cf6"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC pédiatrie",
        "Congrès de spécialité",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "ped_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "ped_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "ped_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "ped_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "ped_b1_recherche", label: "Activité de recherche", hint: "Projet ou étude." },
        { id: "ped_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Audit clinique",
        "EPP",
        "RCP",
        "Registre",
        "Protocoles",
        "Gestion des risques"
      ],
      actions: [
        { id: "ped_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "ped_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "ped_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "ped_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "ped_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation relation patient",
        "Association de patients / familles",
        "Éducation thérapeutique",
        "Enquête satisfaction",
        "Dispositif d’annonce"
      ],
      actions: [
        { id: "ped_b3_relation", label: "Formation relation patient", hint: "Communication avec l’enfant et la famille." },
        { id: "ped_b3_asso", label: "Action avec association de patients / familles", hint: "Association d’usagers, familles ou patients." },
        { id: "ped_b3_etp", label: "Éducation thérapeutique", hint: "Programme patient ou participation." },
        { id: "ped_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient / famille." }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé du pro",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Suivi médical",
        "Prévention santé",
        "Activité physique",
        "Groupe de pairs"
      ],
      actions: [
        { id: "ped_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "ped_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "ped_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "ped_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
},
{
  id: "pneumologie",
  label: "Pneumologue",
  fullTitle: "Certification Périodique du Pneumologue",
  subtitle: "Spécialité : pneumologie",
  icon: "🫁",
  theme: {
    primary: "#0ea5e9",
    primary2: "#0284c7",
    accent: "#14b8a6"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC pneumologie",
        "Congrès de spécialité",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "pneumo_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "pneumo_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "pneumo_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "pneumo_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "pneumo_b1_recherche", label: "Activité de recherche", hint: "Projet ou étude." },
        { id: "pneumo_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Audit clinique",
        "EPP",
        "RCP",
        "Registre",
        "Protocoles",
        "Gestion des risques"
      ],
      actions: [
        { id: "pneumo_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "pneumo_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "pneumo_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "pneumo_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "pneumo_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation relation patient",
        "ETP",
        "Association de patients",
        "Enquête satisfaction",
        "Dispositif d’annonce"
      ],
      actions: [
        { id: "pneumo_b3_relation", label: "Formation relation patient", hint: "Communication et accompagnement." },
        { id: "pneumo_b3_etp", label: "Éducation thérapeutique", hint: "Programme patient ou participation." },
        { id: "pneumo_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." },
        { id: "pneumo_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient." }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé du pro",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Suivi médical",
        "Prévention santé",
        "Activité physique",
        "Groupe de pairs"
      ],
      actions: [
        { id: "pneumo_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "pneumo_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "pneumo_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "pneumo_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
},
{
  id: "psychiatrie",
  label: "Psychiatre",
  fullTitle: "Certification Périodique du Psychiatre",
  subtitle: "Spécialité : psychiatrie",
  icon: "🧠",
  theme: {
    primary: "#7c3aed",
    primary2: "#5b21b6",
    accent: "#ec4899"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC psychiatrie",
        "Congrès de spécialité",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "psy_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "psy_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "psy_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "psy_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "psy_b1_recherche", label: "Activité de recherche", hint: "Projet ou étude." },
        { id: "psy_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Audit clinique",
        "EPP",
        "Staff / RCP",
        "Registre",
        "Protocoles",
        "Gestion des risques"
      ],
      actions: [
        { id: "psy_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "psy_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "psy_b2_staff", label: "Staff / RCP", hint: "Réunion clinique pluriprofessionnelle." },
        { id: "psy_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "psy_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation relation thérapeutique",
        "Association de patients",
        "Programme patient",
        "Enquête satisfaction",
        "Groupes de réflexion clinique"
      ],
      actions: [
        { id: "psy_b3_relation", label: "Formation relation thérapeutique", hint: "Communication, alliance thérapeutique, accompagnement." },
        { id: "psy_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." },
        { id: "psy_b3_programme", label: "Programme patient / psychoéducation", hint: "Programme ou participation." },
        { id: "psy_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient." }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé du pro",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Suivi médical",
        "Prévention santé",
        "Activité physique",
        "Groupe de pairs / supervision"
      ],
      actions: [
        { id: "psy_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "psy_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "psy_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "psy_b4_pairs", label: "Groupe de pairs / supervision", hint: "Échange entre confrères ou supervision." }
      ]
    }
  ]
},
{
  id: "radiologie-imagerie-medicale",
  label: "Radiologue",
  fullTitle: "Certification Périodique du Radiologue",
  subtitle: "Spécialité : radiologie et imagerie médicale",
  icon: "🩻",
  theme: {
    primary: "#334155",
    primary2: "#1e293b",
    accent: "#0ea5e9"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC radiologie",
        "Congrès de spécialité",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "radio_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "radio_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "radio_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "radio_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "radio_b1_recherche", label: "Activité de recherche", hint: "Projet ou étude." },
        { id: "radio_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Audit clinique",
        "EPP",
        "Double lecture / revue de dossiers",
        "Registre",
        "Protocoles",
        "Radioprotection / gestion des risques"
      ],
      actions: [
        { id: "radio_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "radio_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "radio_b2_doublelecture", label: "Double lecture / revue de dossiers", hint: "Analyse collégiale des pratiques." },
        { id: "radio_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "radio_b2_radioprotection", label: "Radioprotection / gestion des risques", hint: "Prévention et sécurité des pratiques." }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation relation patient",
        "Information patient",
        "Association de patients",
        "Enquête satisfaction",
        "Dispositif d’annonce"
      ],
      actions: [
        { id: "radio_b3_relation", label: "Formation relation patient", hint: "Communication et accompagnement." },
        { id: "radio_b3_info", label: "Information patient", hint: "Information, consentement, préparation à l’examen." },
        { id: "radio_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." },
        { id: "radio_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient." }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé du pro",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Suivi médical",
        "Prévention santé",
        "Activité physique",
        "Groupe de pairs"
      ],
      actions: [
        { id: "radio_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "radio_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "radio_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "radio_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
},
{
  id: "rhumatologie",
  label: "Rhumatologue",
  fullTitle: "Certification Périodique du Rhumatologue",
  subtitle: "Spécialité : rhumatologie",
  icon: "🦴",
  theme: {
    primary: "#ea580c",
    primary2: "#c2410c",
    accent: "#f97316"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC rhumatologie",
        "Congrès de spécialité",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "rhuma_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "rhuma_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "rhuma_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "rhuma_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "rhuma_b1_recherche", label: "Activité de recherche", hint: "Projet ou étude." },
        { id: "rhuma_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des pratiques et des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Audit clinique",
        "EPP",
        "RCP",
        "Registre",
        "Protocoles",
        "Gestion des risques"
      ],
      actions: [
        { id: "rhuma_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "rhuma_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "rhuma_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "rhuma_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "rhuma_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation avec les patients",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation relation patient",
        "ETP",
        "Association de patients",
        "Enquête satisfaction",
        "Programme patient"
      ],
      actions: [
        { id: "rhuma_b3_relation", label: "Formation relation patient", hint: "Communication et accompagnement." },
        { id: "rhuma_b3_etp", label: "Éducation thérapeutique", hint: "Programme patient ou participation." },
        { id: "rhuma_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." },
        { id: "rhuma_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient." }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé du pro",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Suivi médical",
        "Prévention santé",
        "Activité physique",
        "Groupe de pairs"
      ],
      actions: [
        { id: "rhuma_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "rhuma_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "rhuma_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "rhuma_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
}
	  
    ]
  });
})();

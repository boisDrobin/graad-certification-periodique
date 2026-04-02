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
      ruleText: "Validation neurologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation indemnisées au titre du DPC publiées par l’ANDPC",
        "Actions de formation présentielles à caractère scientifique ou professionnel dispensées par des organismes de formation certifiés Qualiopi ou figurant sur la liste publique des organismes de formation",
        "Participation à une journée d’une association régionale de formation",
        "Participation à une série de formation en ligne de type e-learning",
        "Participation à un congrès de niveau international",
        "Participation à un congrès national généraliste ou de surspécialité organisé par une société savante française",
        "Participation à une action de formation organisée par un établissement public ou privé à caractère scientifique ou professionnel labellisée par le CNP",
        "Formations diplômantes ou certifiantes organisées par les établissements publics à caractère scientifique",
        "Enseignements universitaires",
        "Validation de l’EBN ou participation à un enseignement international de l’EBN",
        "Activités de recherche",
        "Travaux d’expertise scientifique se déroulant dans un cadre de traçabilité, de rigueur et d’indépendance",
        "Publications en premier ou dernier auteur dans des revues référencées à comité de lecture indépendant",
        "Participation effective au comité éditorial de revues scientifiques",
        "Participation à des réunions formalisées de revue bibliographique",
        "Formation à la maîtrise de stage universitaire",
        "Participation à un programme intégré proposé par un ODPC dans le cadre des orientations prioritaires nationales ou de la spécialité",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "neuro_b1_dpc",
          label: "Action de formation indemnisée au titre du DPC publiée par l’ANDPC",
          hint: "Auditeur ou formateur ; action destinée aux neurologues."
        },
        {
          id: "neuro_b1_formation_qualiopi",
          label: "Formation scientifique ou professionnelle Qualiopi / liste publique",
          hint: "Formation présentielle à caractère scientifique ou professionnel ; peut inclure aussi une journée d’association régionale de formation."
        },
        {
          id: "neuro_b1_elearning",
          label: "Formation en ligne de type e-learning",
          hint: "Série de formation en ligne avec minimum de 4 webinaires par an."
        },
        {
          id: "neuro_b1_congres_international",
          label: "Congrès international de neurologie",
          hint: "Présence minimale de deux jours. Exemples d’annexe : EAN, AAN, MDS, AD/PD, ECTRIMS, ILAE."
        },
        {
          id: "neuro_b1_congres_national",
          label: "Congrès national ou de surspécialité de neurologie",
          hint: "Présence minimale de deux jours pour les congrès de plusieurs jours, ou sur la totalité du congrès si durée d’une journée. Exemples : JNLF, journées de la SFN, Rencontres de Neurologies, Journées scientifiques de l’ANLLF."
        },
        {
          id: "neuro_b1_formation_label_cnp",
          label: "Action de formation labellisée par le CNP",
          hint: "Formation organisée par un établissement public ou privé à caractère scientifique ou professionnel et labellisée par le CNP."
        },
        {
          id: "neuro_b1_du_diu_master",
          label: "Formation diplômante ou certifiante (DU, DIU, master…)",
          hint: "Formation organisée par un établissement public à caractère scientifique."
        },
        {
          id: "neuro_b1_enseignement_universitaire",
          label: "Enseignement universitaire",
          hint: "Activité d’enseignement universitaire dans le champ de la neurologie."
        },
        {
          id: "neuro_b1_ebn",
          label: "Validation de l’EBN ou enseignement international EBN",
          hint: "European Board of Neurology ou enseignement international de l’EBN."
        },
        {
          id: "neuro_b1_recherche",
          label: "Activités de recherche",
          hint: "Activités de recherche dans le champ de la neurologie."
        },
        {
          id: "neuro_b1_expertise",
          label: "Travaux d’expertise scientifique",
          hint: "Sociétés savantes, CNP, universités, instituts de formation, CHU, instituts de recherche, HAS, ANSM, autres agences de santé, agences européennes."
        },
        {
          id: "neuro_b1_publication",
          label: "Publication scientifique en premier ou dernier auteur",
          hint: "Publication dans une revue référencée à comité de lecture indépendant."
        },
        {
          id: "neuro_b1_comite_editorial",
          label: "Participation effective au comité éditorial d’une revue scientifique",
          hint: "Participation effective à un comité éditorial de revue scientifique."
        },
        {
          id: "neuro_b1_revue_biblio",
          label: "Réunions formalisées de revue bibliographique",
          hint: "Participation à des réunions structurées de revue de littérature."
        },
        {
          id: "neuro_b1_msu",
          label: "Formation à la maîtrise de stage universitaire",
          hint: "Formation universitaire dédiée à la maîtrise de stage."
        },
        {
          id: "neuro_b1_programme_integre",
          label: "Programme intégré ODPC",
          hint: "Programme intégré proposé par un ODPC dans le cadre des orientations prioritaires nationales ou de la spécialité."
        },
        {
          id: "neuro_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par le neurologue, évaluée a priori ou a posteriori par le comité scientifique du CNP."
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
      ruleText: "Validation neurologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation régulière à un registre de pratiques",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés au titre du DPC",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés dispensés par des organismes figurant sur la liste publique des organismes de formation",
        "Actions d’amélioration des pratiques organisées au sein des établissements de santé",
        "Participation régulière et impliquée à des réunions de concertation pluridisciplinaire",
        "Audit clinique",
        "Chemin clinique",
        "Exercice coordonné et protocolisé d’une équipe pluriprofessionnelle de soins en ambulatoire",
        "Suivi d’indicateurs de qualité et de sécurité des soins",
        "Participation à un réseau de vigilance",
        "Gestion des risques en équipe",
        "Encadrement maîtrise de stages",
        "Staffs de service clinique / équipe soignante",
        "Actions d’amélioration des pratiques : missions d’expertise, participation à des recommandations",
        "Participation effective aux actions liées à la certification des établissements de santé",
        "Tests de Concordance de Scripts",
        "Simulation en santé",
        "Analyse de cas cliniques",
        "Patient traceur",
        "Revue de pertinence des soins",
        "Participation à un programme intégré proposé par un ODPC dans le cadre des orientations prioritaires",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "neuro_b2_registre",
          label: "Participation régulière à un registre de pratiques",
          hint: "Participation active à un registre de pratiques dans le champ de la neurologie."
        },
        {
          id: "neuro_b2_dpc_epp",
          label: "Action d’analyse de pratiques / gestion des risques / programme intégré DPC",
          hint: "Action publiée par l’ANDPC à destination des neurologues."
        },
        {
          id: "neuro_b2_qualiopi_epp",
          label: "Action d’analyse de pratiques / gestion des risques par organisme figurant sur la liste publique",
          hint: "Action structurée répondant aux attendus du CNP et aux méthodes HAS."
        },
        {
          id: "neuro_b2_rmm_crex",
          label: "Actions d’amélioration des pratiques en établissement",
          hint: "Exemples : RMM, CREX et autres démarches structurées de retour d’expérience."
        },
        {
          id: "neuro_b2_rcp",
          label: "Réunions de concertation pluridisciplinaire",
          hint: "Participation régulière et impliquée à des RCP."
        },
        {
          id: "neuro_b2_audit_clinique",
          label: "Audit clinique",
          hint: "Action structurée d’évaluation des pratiques."
        },
        {
          id: "neuro_b2_chemin_clinique",
          label: "Chemin clinique",
          hint: "Participation à une démarche de chemin clinique."
        },
        {
          id: "neuro_b2_exercice_coordonne",
          label: "Exercice coordonné et protocolisé en équipe pluriprofessionnelle",
          hint: "Action relevant de la coordination des soins en ambulatoire."
        },
        {
          id: "neuro_b2_indicateurs",
          label: "Suivi d’indicateurs qualité et sécurité des soins",
          hint: "Suivi et amélioration d’indicateurs de qualité et sécurité."
        },
        {
          id: "neuro_b2_vigilance",
          label: "Participation à un réseau de vigilance",
          hint: "Participation à un réseau de vigilance dans le champ de la neurologie."
        },
        {
          id: "neuro_b2_gestion_risques_equipe",
          label: "Gestion des risques en équipe",
          hint: "Analyse collective et amélioration de la sécurité des pratiques."
        },
        {
          id: "neuro_b2_msu",
          label: "Encadrement / maîtrise de stage",
          hint: "Encadrement dans le cadre universitaire ou de stages."
        },
        {
          id: "neuro_b2_staffs",
          label: "Staffs de service clinique / équipe soignante",
          hint: "Participation à des staffs cliniques et pluriprofessionnels."
        },
        {
          id: "neuro_b2_recommandations",
          label: "Missions d’expertise / recommandations",
          hint: "Participation à des recommandations ou missions d’expertise."
        },
        {
          id: "neuro_b2_certification",
          label: "Participation aux actions liées à la certification des établissements de santé",
          hint: "Action institutionnelle reconnue dans le bloc 2."
        },
        {
          id: "neuro_b2_tcs",
          label: "Tests de Concordance de Scripts",
          hint: "Action structurée d’amélioration des pratiques."
        },
        {
          id: "neuro_b2_simulation",
          label: "Simulation en santé",
          hint: "Action de simulation dans le champ neurologique."
        },
        {
          id: "neuro_b2_cas_cliniques",
          label: "Analyse de cas cliniques",
          hint: "Travail structuré sur des cas cliniques."
        },
        {
          id: "neuro_b2_patient_traceur",
          label: "Patient traceur",
          hint: "Méthode HAS appliquée à l’amélioration des pratiques."
        },
        {
          id: "neuro_b2_pertinence",
          label: "Revue de pertinence des soins",
          hint: "Analyse de la pertinence dans les parcours et actes."
        },
        {
          id: "neuro_b2_programme_integre",
          label: "Programme intégré ODPC",
          hint: "Programme intégré proposé par un ODPC dans le cadre des orientations prioritaires."
        },
        {
          id: "neuro_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par le neurologue et validée par le CNP après analyse."
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
      ruleText: "Validation neurologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation sur le thème de la relation patient délivrées par un ODPC et publiées par l’ANDPC ou par des structures figurant sur la liste publique des organismes de formation",
        "Formations diplômantes ou certifiantes sur le thème de la relation patient",
        "Participation régulière à un registre de pratiques, observatoire, base de données de la spécialité intégrant des données patients",
        "Action réalisée dans le cadre d’une association d’usagers du système de santé agréée",
        "Conception et participation à la mise en place de programmes associant des patients",
        "Patients traceurs",
        "Faciliter le partage d’expériences interprofessionnelles et de bonnes pratiques pour améliorer la prise en charge des patients vulnérables, de la fin de vie, et lutter contre l’inégalité d’accès aux soins et les discriminations",
        "Actions de promotion de la santé environnementale et de l’éco-responsabilité dans le cadre des éco-soins",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "neuro_b3_formation_relation",
          label: "Formation sur le thème de la relation patient",
          hint: "Formation délivrée par un ODPC publiée par l’ANDPC ou par une structure figurant sur la liste publique des organismes de formation."
        },
        {
          id: "neuro_b3_diplome_relation",
          label: "Formation diplômante ou certifiante sur la relation patient",
          hint: "Formation universitaire ou certifiante dédiée à la relation avec le patient."
        },
        {
          id: "neuro_b3_registre_patient",
          label: "Registre / observatoire / base de données intégrant des données patients",
          hint: "Participation régulière à un registre incluant des données issues des patients."
        },
        {
          id: "neuro_b3_association_usagers",
          label: "Action réalisée dans le cadre d’une association d’usagers agréée",
          hint: "Interventions lors de journées, fonctions exercées, actions de sensibilisation, fiches d’information patients, enquêtes de satisfaction."
        },
        {
          id: "neuro_b3_programme_patient",
          label: "Programme élaboré pour le patient ou associant des patients",
          hint: "Programme impliquant les patients, les aidants ou des patients experts."
        },
        {
          id: "neuro_b3_patients_traceurs",
          label: "Patients traceurs",
          hint: "Action relevant de la méthode patient traceur, centrée sur l’expérience et la relation patient."
        },
        {
          id: "neuro_b3_partage_interpro",
          label: "Partage d’expériences interprofessionnelles et bonnes pratiques",
          hint: "Patients vulnérables, fin de vie, inégalités d’accès aux soins, discriminations."
        },
        {
          id: "neuro_b3_eco_soins",
          label: "Promotion de la santé environnementale et des éco-soins",
          hint: "Développement de compétences en santé environnementale et éco-responsabilité."
        },
        {
          id: "neuro_b3_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par le neurologue et validée par le CNP."
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
      ruleText: "Validation neurologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation sur le thème de la santé personnelle du médecin",
        "Participation à des groupes d’échange et d’analyse entre pairs permettant de travailler sur la santé personnelle du médecin",
        "Auto-évaluation de son état de santé et de son suivi",
        "Actions de gestion des risques professionnels délivrées par un ODPC ou par des structures figurant sur la liste publique des organismes de formation",
        "Actions dans le domaine de la prévention en santé : respect du calendrier vaccinal, prévention et gestion des risques psychosociaux, radioprotection, santé environnementale ou nutritionnelle, activités physiques et sportives",
        "Participation à un programme intégré proposé par un ODPC sur le thème de la santé personnelle ou des risques psychosociaux",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "neuro_b4_formation_sante",
          label: "Action de formation sur le thème de la santé personnelle du médecin",
          hint: "Formation dédiée à la santé personnelle, à la qualité de vie au travail ou à la prévention."
        },
        {
          id: "neuro_b4_groupes_pairs",
          label: "Participation à des groupes d’échange et d’analyse entre pairs",
          hint: "Groupes permettant de travailler sur la santé personnelle du médecin."
        },
        {
          id: "neuro_b4_autoeval_has",
          label: "Auto-questionnaire HAS santé du professionnel",
          hint: "Questionnaire préconisé par le CNP de Neurologie ; santé globale à refaire tous les deux ans."
        },
        {
          id: "neuro_b4_autoeval_karasek",
          label: "Auto-évaluation avec questionnaire Karasek",
          hint: "Questionnaire préconisé par le CNP de Neurologie."
        },
        {
          id: "neuro_b4_autoeval_nordic",
          label: "Auto-évaluation avec Nordic Musculoskeletal Questionnaire",
          hint: "Questionnaire préconisé par le CNP de Neurologie."
        },
        {
          id: "neuro_b4_autoeval_pss",
          label: "Auto-évaluation avec Perceived Stress Scale (PSS)",
          hint: "Questionnaire préconisé par le CNP de Neurologie."
        },
        {
          id: "neuro_b4_autoeval_madrs",
          label: "Auto-évaluation avec MADRS",
          hint: "Montgomery Asberg Depression Rating Scale préconisée par le CNP de Neurologie."
        },
        {
          id: "neuro_b4_autoeval_lipt",
          label: "Auto-évaluation avec questionnaire LIPT",
          hint: "Leymann Inventory of Psychological Terror préconisé par le CNP de Neurologie."
        },
        {
          id: "neuro_b4_autoeval_had",
          label: "Auto-évaluation avec échelle HAD",
          hint: "Hospital Anxiety and Depression Scale préconisée par le CNP de Neurologie."
        },
        {
          id: "neuro_b4_autoeval_mbi",
          label: "Auto-évaluation avec Maslach Burnout Inventory (MBI)",
          hint: "Questionnaire préconisé par le CNP de Neurologie."
        },
        {
          id: "neuro_b4_risques_pro",
          label: "Action de gestion des risques professionnels",
          hint: "Exemples de thèmes listés : santé psychique et physique, ergonomie au travail, radioprotection, prévention et gestion des risques psychosociaux, participation active à un comité de vie professionnelle santé au travail, santé environnementale et éco-responsabilité."
        },
        {
          id: "neuro_b4_prevention_vaccins",
          label: "Respect du calendrier vaccinal",
          hint: "Action de prévention en santé explicitement listée dans le bloc 4."
        },
        {
          id: "neuro_b4_prevention_rps",
          label: "Prévention et gestion des risques psychosociaux",
          hint: "Action de prévention en santé explicitement listée dans le bloc 4."
        },
        {
          id: "neuro_b4_prevention_radioprotection",
          label: "Radioprotection",
          hint: "Action de prévention en santé explicitement listée dans le bloc 4."
        },
        {
          id: "neuro_b4_prevention_sante_env",
          label: "Santé environnementale ou nutritionnelle",
          hint: "Action de prévention en santé explicitement listée dans le bloc 4."
        },
        {
          id: "neuro_b4_prevention_sport",
          label: "Activités physiques et sportives",
          hint: "Action de prévention en santé explicitement listée dans le bloc 4."
        },
        {
          id: "neuro_b4_programme_integre",
          label: "Programme intégré ODPC sur la santé personnelle ou les risques psychosociaux",
          hint: "Programme intégré proposé par un ODPC ; au moins une action sur la période."
        },
        {
          id: "neuro_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par le neurologue, évaluée a priori ou a posteriori par le CNP."
        }
      ]
    }
  ]
},
//ophtalmologie
{
  id: "ophtalmologie",
  label: "Ophtalmologiste",
  fullTitle: "Certification Périodique de l’Ophtalmologiste",
  subtitle: "Spécialité : ophtalmologie",
  icon: "👁️",
  theme: {
    primary: "#0f766e",
    primary2: "#0b5f5a",
    accent: "#2dd4bf"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation ophtalmologie : 3 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 3
      },
      allReferentialActions: [
        "Actions de formation au titre du DPC",
        "Actions de formation à caractère scientifique ou professionnel dispensées par des organismes de formation labellisés Qualiopi",
        "Participation à un congrès de niveau international ou national",
        "Participation à une journée d’une société savante ou d’une association régionale",
        "Participation à plusieurs formations en ligne de type e-learning organisée par une société savante ou une association régionale",
        "Formations diplômantes ou certifiantes organisées par les universités : DU et DIU",
        "Activités d’enseignement délivrées dans le cadre d’une université",
        "Obtention d’un master 2",
        "Formation à la maîtrise de stage universitaire",
        "Publications ou communications orales ou affichées ou revues de lecture ou commentaires d’articles dans des revues scientifiques",
        "Participation effective au comité éditorial de revues scientifiques",
        "Abonnement à une revue médicale avec tests de lecture effectué",
        "Travaux d’expertise",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "opht_b1_dpc",
          label: "Action de formation au titre du DPC",
          hint: "Actions publiées par l’ANDPC concernant les ophtalmologistes, conformes aux orientations prioritaires générales ou spécifiques ; participation comme apprenant ou formateur."
        },
        {
          id: "opht_b1_formation_qualiopi",
          label: "Action de formation scientifique ou professionnelle par organisme Qualiopi",
          hint: "Action en rapport avec les orientations prioritaires générales ou spécifiques publiées par l’ANDPC pour la période concernée, en lien avec le CNP d’ophtalmologie ; participation comme apprenant ou formateur."
        },
        {
          id: "opht_b1_congres_national_international",
          label: "Participation à un congrès national ou international",
          hint: "Durée d’au moins une journée ; liste validée par le CNPO-AFO ; 7 heures effectives minimum pour valider une journée, avec cumul possible de demi-journées."
        },
        {
          id: "opht_b1_sfo",
          label: "Congrès SFO",
          hint: "Congrès national retenu dans l’annexe 2 du référentiel ophtalmologie."
        },
        {
          id: "opht_b1_escrs",
          label: "Congrès ESCRS",
          hint: "Congrès international retenu dans l’annexe 2."
        },
        {
          id: "opht_b1_ever",
          label: "Congrès EVER",
          hint: "Congrès international retenu dans l’annexe 2."
        },
        {
          id: "opht_b1_euretina",
          label: "Congrès EURETINA",
          hint: "Congrès international retenu dans l’annexe 2."
        },
        {
          id: "opht_b1_jro",
          label: "Congrès JRO",
          hint: "Congrès retenu dans l’annexe 2."
        },
        {
          id: "opht_b1_apodep",
          label: "Congrès APODEP",
          hint: "Congrès retenu dans l’annexe 2."
        },
        {
          id: "opht_b1_aop",
          label: "Congrès AOP",
          hint: "Congrès retenu dans l’annexe 2."
        },
        {
          id: "opht_b1_journee_societe_savante",
          label: "Journée d’une société savante ou d’une association régionale",
          hint: "Durée d’au moins une journée ; soumise aux mêmes critères que les congrès."
        },
        {
          id: "opht_b1_safir",
          label: "Réunion de la société savante SAFIR",
          hint: "Réunion de société savante explicitement listée dans l’annexe 2."
        },
        {
          id: "opht_b1_sfg",
          label: "Réunion de la société savante SFG",
          hint: "Réunion de société savante explicitement listée dans l’annexe 2."
        },
        {
          id: "opht_b1_cfsr",
          label: "Réunion de la société savante CFSR",
          hint: "Réunion de société savante explicitement listée dans l’annexe 2."
        },
        {
          id: "opht_b1_seve",
          label: "Réunion de la société savante SEVE",
          hint: "Réunion de société savante explicitement listée dans l’annexe 2."
        },
        {
          id: "opht_b1_elearning",
          label: "Formations en ligne de type e-learning",
          hint: "Organisées par une société savante ou une association régionale ; le cumul doit être supérieur ou égal à 7 heures pour valider une action."
        },
        {
          id: "opht_b1_du_diu",
          label: "Formation diplômante ou certifiante universitaire (DU / DIU)",
          hint: "Liste validée par le CNPO-AFO sur proposition du COUF."
        },
        {
          id: "opht_b1_du_lentilles",
          label: "DU Adaptation de lentilles de contact",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_diu_chir_refraction",
          label: "DIU de chirurgie réfractive et de phakoémulsification",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_diu_retino_vitreenne",
          label: "DIU de chirurgie rétino-vitréenne",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_diu_cornee",
          label: "DIU Cornée",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_diu_glaucomes",
          label: "DIU Glaucomes",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_du_imagerie_retinienne",
          label: "DU Imagerie et pathologie rétinienne / DU Imagerie rétinienne et traitements maculaires",
          hint: "Formations explicitement listées en annexe 1."
        },
        {
          id: "opht_b1_diu_inflammations_infections",
          label: "DIU Inflammations et infections oculaires",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_du_microchirurgie",
          label: "DU Microchirurgie ophtalmologique",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_du_neuro_ophtalmologie",
          label: "DU Neuro-Ophtalmologie",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_diu_oct",
          label: "DIU OCT en ophtalmologie",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_du_oeil_medecine_interne",
          label: "DU Oeil et médecine interne",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_du_oncologie_oculaire",
          label: "DU Oncologie oculaire",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_diu_ophtalmo_pediatrique",
          label: "DIU Ophtalmologie pédiatrique",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_diu_orbito_palpebro_lacrymale",
          label: "DIU Pathologie et chirurgie orbito-palpebro-lacrymale",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_diu_surface_oculaire",
          label: "DIU Surface oculaire",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_du_handicap_visuel",
          label: "DU Techniques de compensation du handicap visuel",
          hint: "Formation explicitement listée en annexe 1."
        },
        {
          id: "opht_b1_enseignement_universitaire",
          label: "Activité d’enseignement universitaire",
          hint: "Activité d’enseignement délivrée dans le cadre d’une université."
        },
        {
          id: "opht_b1_master2",
          label: "Obtention d’un master 2",
          hint: "Obtention d’un master 2 dans le cadre du cursus universitaire."
        },
        {
          id: "opht_b1_msu",
          label: "Formation à la maîtrise de stage universitaire",
          hint: "Formation délivrée par un ODPC ou une université reconnue par l’ANDPC."
        },
        {
          id: "opht_b1_publication",
          label: "Publication / communication scientifique / revue de lecture",
          hint: "Publications dans le domaine de l’ophtalmologie ; revues indexées ou avec comité de lecture ; position de premier ou dernier auteur."
        },
        {
          id: "opht_b1_comite_editorial",
          label: "Participation effective au comité éditorial d’une revue scientifique",
          hint: "Soit activité de rédacteur en chef ou adjoint, soit activité de révision d’un minimum de 3 articles par an pendant la période de 6 ans."
        },
        {
          id: "opht_b1_test_lecture",
          label: "Abonnement à une revue médicale avec tests de lecture réussis",
          hint: "Avec tests de lecture effectués et réussis : 6 tests par période."
        },
        {
          id: "opht_b1_expertise",
          label: "Travaux d’expertise",
          hint: "Travaux réalisés pour sociétés savantes, CNP, universités, instituts de formation, CHU, instituts de recherche, HAS, ANSM, autres agences de santé ou agences européennes, dans un cadre de transparence, de rigueur méthodologique et d’indépendance."
        },
        {
          id: "opht_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action conforme à une fiche méthode HAS ou aux critères d’éligibilité de la FSM, évaluée et validée a priori ou a posteriori par le conseil scientifique du CNPO-AFO."
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
      ruleText: "Validation ophtalmologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à un registre de pratiques, observatoire, base de données de la spécialité",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés au titre du DPC",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés dispensés par des organismes figurant sur la liste publique des organismes de formation",
        "Actions d’amélioration des pratiques organisées au sein des établissements de santé",
        "Exercice coordonné et protocolé d’une équipe pluriprofessionnelle de soins en ambulatoire",
        "Suivi d’indicateurs de qualité et de sécurité des soins",
        "Participation à un réseau de vigilance",
        "Gestion des risques en équipe",
        "Autres actions d’amélioration des pratiques : missions, expertises, participation à des recommandations à la demande d’un organisateur institutionnel",
        "Encadrement de stages, maîtrise de stage, tutorat",
        "Activités de recherche cliniques ou épidémiologiques institutionnelles",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "opht_b2_registre",
          label: "Participation à un registre de pratiques / observatoire / base de données",
          hint: "Conception d’un nouveau registre ou participation active durant la durée de vie du registre avec un minimum de 2 ans et inclusion d’un minimum de 10 patients sur la durée de participation."
        },
        {
          id: "opht_b2_dpc_epp",
          label: "Action d’analyse de pratiques / gestion des risques / programme intégré DPC",
          hint: "Action publiée par l’ANDPC à destination des ophtalmologistes ; éligibilité de fait."
        },
        {
          id: "opht_b2_qualiopi_epp",
          label: "Action d’analyse de pratiques / gestion des risques par organisme figurant sur la liste publique",
          hint: "Action conforme aux critères d’éligibilité de la FSM ou à une fiche méthode HAS."
        },
        {
          id: "opht_b2_rmm_rcp_crex",
          label: "Actions d’amélioration des pratiques organisées en établissement",
          hint: "Exemples : RMM, RCP, CREX, autres démarches d’EPP ; action relevant des méthodes HAS."
        },
        {
          id: "opht_b2_exercice_coordonne",
          label: "Exercice coordonné et protocolé en équipe pluriprofessionnelle",
          hint: "Participation poursuivie pendant un minimum de 2 ans ; éligibilité de fait."
        },
        {
          id: "opht_b2_indicateurs",
          label: "Suivi d’indicateurs qualité et sécurité des soins",
          hint: "Participation poursuivie pendant un minimum de 2 ans ; éligibilité de fait."
        },
        {
          id: "opht_b2_vigilance",
          label: "Participation à un réseau de vigilance",
          hint: "Participation poursuivie pendant un minimum de 2 ans."
        },
        {
          id: "opht_b2_gestion_risques_equipe",
          label: "Gestion des risques en équipe",
          hint: "Participation poursuivie pendant un minimum de 2 ans ; éligibilité de fait."
        },
        {
          id: "opht_b2_expertise_recommandations",
          label: "Missions / expertises / recommandations",
          hint: "Participation à des recommandations ou expertises à la demande d’un organisateur institutionnel : CNP, Ordres, syndicats, ministère ou agences."
        },
        {
          id: "opht_b2_encadrement",
          label: "Encadrement de stages / maîtrise de stage / tutorat",
          hint: "Encadrement ou tutorat dans le cadre d’un 3e cycle de formation médicale ; participation cumulée équivalente à 6 mois sur un cycle de certification."
        },
        {
          id: "opht_b2_recherche",
          label: "Activités de recherche cliniques ou épidémiologiques institutionnelles",
          hint: "Participation comme investigateur principal ou inclusion / adressage d’un minimum de 10 patients dans un protocole académique ; action conforme aux critères d’éligibilité de la FSM."
        },
        {
          id: "opht_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action conforme à une fiche méthode HAS ou aux critères d’éligibilité de la FSM, évaluée et validée a priori ou a posteriori par le conseil scientifique du CNPO-AFO."
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
      ruleText: "Validation ophtalmologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation sur le thème de la relation patient délivrées par des organismes de formation labellisés Qualiopi ou par un ODPC ou par des structures figurant sur la liste publique des organismes de formation",
        "Formations diplômantes ou certifiantes sur le thème de la relation patient organisées par les universités",
        "Actions réalisées dans le cadre d’associations de patients",
        "Participation régulière à un registre de pratiques, observatoire, base de données de la spécialité, intégrant des données saisies par les patients (PROMs, PREMs)",
        "Conception et participation à la mise en place de programmes associant des patients",
        "Patients traceurs",
        "Participation à un dispositif d’annonce",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "opht_b3_formation_relation",
          label: "Formation sur le thème de la relation patient",
          hint: "Soit action publiée par l’ANDPC à destination des médecins, soit action de formation par un autre organisme avec minimum d’une journée de participation et conformité aux critères d’éligibilité de la FSM."
        },
        {
          id: "opht_b3_diplome_relation",
          label: "Formation diplômante ou certifiante sur le thème de la relation patient",
          hint: "Formation universitaire dédiée à la relation patient ; liste renvoyée à l’annexe 7 du référentiel."
        },
        {
          id: "opht_b3_association_patients",
          label: "Actions réalisées dans le cadre d’associations de patients",
          hint: "Interventions lors de journées organisées par les associations de patients, fonctions exercées dans une association, actions de sensibilisation, contribution active à des fiches d’information patients, enquêtes de satisfaction ; minimum de 2 actions sur 6 ans."
        },
        {
          id: "opht_b3_registre_proms_prems",
          label: "Registre / observatoire / base de données avec PROMs / PREMs",
          hint: "Conception d’un nouveau registre ou participation active pendant au moins 2 ans avec inclusion d’au moins 10 patients sur la durée de participation."
        },
        {
          id: "opht_b3_programmes_patients",
          label: "Programme élaboré pour le patient ou associant des patients",
          hint: "Exemples : éducation thérapeutique, patients experts ; élaboration d’un programme d’ETP ou participation à 4 réunions d’un programme d’ETP sur la période de 6 ans."
        },
        {
          id: "opht_b3_patients_traceurs",
          label: "Patients traceurs",
          hint: "Participation à un minimum de 4 réunions."
        },
        {
          id: "opht_b3_dispositif_annonce",
          label: "Participation à un dispositif d’annonce",
          hint: "Annonce d’un cancer, d’un dommage associé aux soins, d’une mauvaise nouvelle ou d’une situation nécessitant un accompagnement structuré."
        },
        {
          id: "opht_b3_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action conforme à une fiche méthode HAS ou aux critères d’éligibilité de la FSM, évaluée et validée par le conseil scientifique du CNPO-AFO."
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
      ruleText: "Validation ophtalmologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation sur le thème de la santé personnelle du médecin",
        "Avoir un médecin traitant ou un médecin du travail",
        "Auto-évaluation de son état de santé et de son suivi",
        "Actions de gestion des risques professionnels",
        "Formation diplômante sur la santé personnelle du médecin",
        "Actions dans le domaine de la prévention en santé physique et mentale",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "opht_b4_formation_sante",
          label: "Action de formation sur le thème de la santé personnelle du médecin",
          hint: "Action publiée par l’ANDPC ou autre action conforme aux critères d’éligibilité de la FSM, centrée sur la santé personnelle du professionnel."
        },
        {
          id: "opht_b4_medecin_traitant",
          label: "Avoir un médecin traitant ou un médecin du travail",
          hint: "Au moins 2 consultations pendant la période de 6 ans ; hors auto-déclaration, parent au 1er degré ou associé."
        },
        {
          id: "opht_b4_autoevaluation",
          label: "Auto-évaluation de son état de santé et de son suivi",
          hint: "Renseignement de 3 questionnaires sur la période de 6 ans ; questionnaires proposés dans les annexes du référentiel."
        },
        {
          id: "opht_b4_autoevaluation_has",
          label: "Auto-questionnaire HAS santé du professionnel",
          hint: "Questionnaire recommandé par le CNPO-AFO dans les annexes bloc 4."
        },
        {
          id: "opht_b4_autoevaluation_karasek",
          label: "Auto-évaluation avec questionnaire Karasek",
          hint: "Questionnaire recommandé par le CNPO-AFO dans les annexes bloc 4."
        },
        {
          id: "opht_b4_autoevaluation_nordic",
          label: "Auto-évaluation avec Nordic Musculoskeletal Questionnaire",
          hint: "Questionnaire recommandé par le CNPO-AFO dans les annexes bloc 4."
        },
        {
          id: "opht_b4_autoevaluation_pss",
          label: "Auto-évaluation avec Perceived Stress Scale (PSS)",
          hint: "Questionnaire recommandé par le CNPO-AFO dans les annexes bloc 4."
        },
        {
          id: "opht_b4_autoevaluation_madrs",
          label: "Auto-évaluation avec MADRS",
          hint: "Montgomery Asberg Depression Rating Scale recommandée dans les annexes bloc 4."
        },
        {
          id: "opht_b4_autoevaluation_lipt",
          label: "Auto-évaluation avec questionnaire LIPT",
          hint: "Leymann Inventory of Psychological Terror recommandé dans les annexes bloc 4."
        },
        {
          id: "opht_b4_autoevaluation_had",
          label: "Auto-évaluation avec échelle HAD",
          hint: "Hospital Anxiety and Depression Scale recommandée dans les annexes bloc 4."
        },
        {
          id: "opht_b4_risques_professionnels",
          label: "Action de gestion des risques professionnels",
          hint: "Action publiée par l’ANDPC ou autre action conforme aux critères d’éligibilité de la FSM ; thèmes détaillés dans l’annexe 4."
        },
        {
          id: "opht_b4_diu_soigner",
          label: "Formation diplômante sur la santé personnelle du médecin",
          hint: "DIU Soigner les soignants."
        },
        {
          id: "opht_b4_prevention_sante",
          label: "Actions de prévention en santé physique et mentale",
          hint: "Actions en santé environnementale ou nutritionnelle, activités socio-culturelles, physiques et sportives ; minimum de 2 actions prévues par le référentiel."
        },
        {
          id: "opht_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action conforme à une fiche méthode HAS ou aux critères d’éligibilité de la FSM, évaluée et validée a priori ou a posteriori par le conseil scientifique du CNPO-AFO."
        }
      ]
    }
  ]
},
//pediatrie
{
  id: "pediatrie",
  label: "Pédiatre",
  fullTitle: "Certification Périodique du Pédiatre",
  subtitle: "Spécialité : pédiatrie",
  icon: "🧸",
  theme: {
    primary: "#0f766e",
    primary2: "#0891b2",
    accent: "#22c55e"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation pédiatrie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation validées au titre du DPC et ayant pour cible les pédiatres",
        "Actions de formation à caractère scientifique ou professionnel dispensées par des organismes de formation labellisés Qualiopi ou par des structures figurant sur la liste publique des organismes de formation",
        "Actions de formation dans le cadre de la complétion d’une démarche d’accréditation",
        "Formations diplômantes ou certifiantes organisées par les universités",
        "Activités d’enseignement délivrées dans le cadre d’une université en formation initiale ou continue",
        "Activités de recherche (participation à des études cliniques ou épidémiologiques institutionnelles)",
        "Formation à la maîtrise de stage universitaire",
        "Publications / livres / chapitres / ouvrages pédagogiques",
        "Participation à une activité éditoriale",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "ped_b1_dpc_faf",
          label: "Actions de formation DPC / FAF-PM à destination des pédiatres",
          hint: "Formations cognitives et formations FAF-PM ; 2 actions DPC et/ou FAF en 6 ans pour valider UNE action ; éligibilité de fait."
        },
        {
          id: "ped_b1_formation_scientifique",
          label: "Formation scientifique ou professionnelle Qualiopi / liste publique",
          hint: "Congrès de niveau national ou international, congrès ou journées de formation d’une association type FMC régionale ; participation comme apprenant ou formateur ; 3 journées minimum en 6 ans pour valider UNE action."
        },
        {
          id: "ped_b1_accreditation",
          label: "Formation dans le cadre d’une démarche d’accréditation HAS",
          hint: "Seuls les pédiatres réanimateurs sont concernés ; démarche poursuivie pendant la période de 6 ans ; validation de fait avec preuve HAS."
        },
        {
          id: "ped_b1_du_diu_master",
          label: "Formation diplômante ou certifiante universitaire",
          hint: "Un DU ou DIU sur la période valide UNE action ; liste renvoyée vers les DU/DIU de santé de l’enfant validés par le CNP."
        },
        {
          id: "ped_b1_enseignement",
          label: "Activité d’enseignement universitaire",
          hint: "Activités d’enseignement délivrées dans le cadre d’une université, cours en formation courte, DU, DIU, Master 2, unité d’enseignement ; attendus du CNP : au minimum 6 heures d’enseignement sur la période."
        },
        {
          id: "ped_b1_direction_travaux",
          label: "Direction de travaux / coordination pédagogique",
          hint: "Direction de thèse de doctorat en médecine, mémoire de DU, master ; coordination locale ou régionale du DES de Pédiatrie, FST, option ou DIU ; participation à des comités pédagogiques."
        },
        {
          id: "ped_b1_programme_dpc_faf",
          label: "Conception et mise en œuvre d’un programme DPC ou FAF-PM",
          hint: "Action explicitement listée dans l’annexe des activités d’enseignement."
        },
        {
          id: "ped_b1_recherche",
          label: "Activités de recherche clinique ou fondamentale",
          hint: "Conception d’un projet présenté à un appel d’offre, participation comme partenaire à un projet de recherche ou rôle d’investigateur dans un essai clinique."
        },
        {
          id: "ped_b1_msu",
          label: "Formation à la maîtrise de stage universitaire",
          hint: "Formation agréée par l’ANDPC ; validation de fait."
        },
        {
          id: "ped_b1_publications",
          label: "Publications / ouvrages / chapitres",
          hint: "Publication dans des revues référencées à comité de lecture indépendant ou dans des revues médicales ; publication de livres consacrés à la pédiatrie ou à la santé de l’enfant ; participation à la rédaction de chapitres ou d’ouvrages pédagogiques."
        },
        {
          id: "ped_b1_editorial",
          label: "Participation à une activité éditoriale",
          hint: "Participation éditoriale en lien avec la pédiatrie ou la santé de l’enfant."
        },
        {
          id: "ped_b1_congres_eap",
          label: "Congrès de l’European Academy of Paediatrics (EAP)",
          hint: "Exemple explicite de congrès international validé en annexe."
        },
        {
          id: "ped_b1_congres_espid",
          label: "Congrès de l’European Society for Paediatric Infectious Diseases (ESPID)",
          hint: "Exemple explicite de congrès international validé en annexe."
        },
        {
          id: "ped_b1_congres_espghan",
          label: "Congrès de l’European Society for Paediatric Gastroenterology, Hepatology and Nutrition (ESPGHAN)",
          hint: "Exemple explicite de congrès international validé en annexe."
        },
        {
          id: "ped_b1_congres_sfpeda",
          label: "Congrès de la Société Française de Psychiatrie de l’Enfant et de l’Adolescent (SFPEDA)",
          hint: "Exemple explicite de congrès consacré à la santé mentale de l’enfant."
        },
        {
          id: "ped_b1_congres_tdah",
          label: "Congrès de la Société Française du TDAH",
          hint: "Exemple explicite de congrès national de spécialité."
        },
        {
          id: "ped_b1_congres_pmi",
          label: "Colloque National Annuel du Syndicat des Médecins de PMI",
          hint: "Exemple explicite de formation nationale listée en annexe."
        },
        {
          id: "ped_b1_congres_fcpc",
          label: "Congrès de la Filiale de Cardiologie Pédiatrique et Congénitale (FCPC/SFC)",
          hint: "Exemple explicite de congrès national de surspécialité."
        },
        {
          id: "ped_b1_congres_gfhgnp",
          label: "Congrès du Groupe Francophone d’Hépatologie-Gastroentérologie et Nutrition Pédiatrique (GFHGNP)",
          hint: "Exemple explicite de congrès national de surspécialité."
        },
        {
          id: "ped_b1_congres_sp2a",
          label: "Congrès de Pneumologie et d’Allergologie Pédiatrique (SP2A)",
          hint: "Exemple explicite de congrès national de surspécialité."
        },
        {
          id: "ped_b1_journees_reseaux",
          label: "Journées de formation de réseaux ou filières pédiatriques",
          hint: "Journées avec numéro de formateur ou validation Qualiopi organisées par les réseaux de périnatalité, les réseaux de suivi des nouveau-nés vulnérables ou des troubles des apprentissages."
        },
        {
          id: "ped_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Le pédiatre peut proposer une action au CNP, a priori ou a posteriori, avec programme écrit, nombre d’heures et justificatif de présence."
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
      ruleText: "Validation pédiatrie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation régulière à un registre de pratiques",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés au titre du DPC publiées par l’ANDPC",
        "Actions d’analyse et d’amélioration des pratiques / gestion des risques dispensées par des organismes de formation labellisés Qualiopi ou par des structures figurant sur la liste publique des organismes de formation",
        "Actions d’amélioration des pratiques organisées au sein des établissements de santé",
        "Gestion des risques en équipe",
        "Actions d’amélioration des pratiques : missions d’expertise, participation à des recommandations",
        "Encadrement de stages / tutorat",
        "Participation à des groupes qualité / réseaux / démarches institutionnelles",
        "Accréditation / participation via le SIAM",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "ped_b2_registre",
          label: "Participation régulière à un registre de pratiques",
          hint: "Pas de nombre minimum de patients exigé ; le référentiel précise que la participation à ces registres peut être très chronophage même avec un faible nombre d’inclusions."
        },
        {
          id: "ped_b2_dpc_epp",
          label: "Action d’analyse de pratiques / gestion des risques / programme intégré DPC",
          hint: "Un programme publié par l’ANDPC sur la période de 6 ans valide UNE action."
        },
        {
          id: "ped_b2_qualiopi_epp",
          label: "Action d’analyse et d’amélioration des pratiques / gestion des risques par organisme Qualiopi",
          hint: "Un programme sur 6 ans valide UNE action ; éligibilité de fait lorsqu’il répond à une fiche méthode HAS."
        },
        {
          id: "ped_b2_rmm_rcp_crex",
          label: "Actions d’amélioration des pratiques organisées en établissement",
          hint: "Exemples : RMM, RCP, CREX, actions individuelles reconnues au sein des établissements."
        },
        {
          id: "ped_b2_gestion_risques_equipe",
          label: "Gestion des risques en équipe",
          hint: "Analyse des parcours de soins, coordination des soins, protocoles pluriprofessionnels, exercice coordonné, périnatalité, suivi des enfants vulnérables, troubles du neurodéveloppement, etc."
        },
        {
          id: "ped_b2_expertise_recommandations",
          label: "Missions d’expertise / participation à des recommandations",
          hint: "Participation à des groupes de travail organisés par les professions, le ministère ou des agences."
        },
        {
          id: "ped_b2_encadrement",
          label: "Encadrement de stages / tutorat",
          hint: "Encadrement et accompagnement dans le cadre de la formation des étudiants ou internes."
        },
        {
          id: "ped_b2_groupes_qualite",
          label: "Participation à des groupes qualité / réseaux / démarches institutionnelles",
          hint: "Action structurée d’amélioration continue de la qualité des prises en charge pédiatriques."
        },
        {
          id: "ped_b2_accreditation",
          label: "Accréditation / participation via le SIAM",
          hint: "Le référentiel mentionne aussi les démarches d’accréditation, avec validation HAS de la participation et de la complétude des actions."
        },
        {
          id: "ped_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action évaluée et validée par le CNP selon les conditions de l’annexe bloc 2."
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
      ruleText: "Validation pédiatrie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Formation diplômante / certifiante / continue / DPC sur la relation avec l’enfant et sa famille",
        "Démarche PROMs et/ou PREMs",
        "Participation régulière à un registre de pratiques / observatoire / base de données",
        "Action de prévention / éducation thérapeutique / médiation dans le champ de la pédiatrie",
        "Patients traceurs",
        "Participation à des associations / projets avec les familles",
        "Actions de promotion de la santé environnementale et de l’éco-soin",
        "Participation à un comité d’éthique",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "ped_b3_formation_relation",
          label: "Formation diplômante / certifiante / continue / DPC sur la relation avec l’enfant et sa famille",
          hint: "Thèmes cités dans le référentiel : accompagnement de l’enfant/adolescent et de sa famille, annonce diagnostique ou d’EIG, handicap/TND, violences faites aux enfants, douleur, éducation thérapeutique, deuil, soins palliatifs, droits des patients, bientraitance."
        },
        {
          id: "ped_b3_proms_prems",
          label: "Démarche PROMs / PREMs",
          hint: "Réalisation d’un cycle d’étude sur au moins une catégorie de patients/usagers, avec synthèse des résultats et plan d’action d’amélioration."
        },
        {
          id: "ped_b3_registre",
          label: "Participation régulière à un registre / observatoire / base de données",
          hint: "Registre de pratiques ou base de données intégrant les attendus du CNP de Pédiatrie."
        },
        {
          id: "ped_b3_prevention_etp_mediation",
          label: "Prévention / éducation thérapeutique / médiation / parcours de soins",
          hint: "Actions dans une structure ou un dispositif d’exercice coordonné : sensibilisation, ETP, fiches d’information, enquêtes de satisfaction, projets d’amélioration de parcours."
        },
        {
          id: "ped_b3_patients_traceurs",
          label: "Patients traceurs",
          hint: "Action explicitement reconnue par le référentiel, avec renvoi à la méthode HAS."
        },
        {
          id: "ped_b3_associations_familles",
          label: "Participation à des associations / projets avec les familles",
          hint: "Participation à des actions menées avec les familles ou les associations d’usagers, dans le champ de la pédiatrie."
        },
        {
          id: "ped_b3_ecosoins",
          label: "Promotion de la santé environnementale et de l’éco-soin",
          hint: "Développement de compétences en promotion de la santé environnementale et en éco-responsabilité."
        },
        {
          id: "ped_b3_ethique",
          label: "Participation à un comité d’éthique",
          hint: "Action explicitement prévue dans le bloc 3 du référentiel pédiatrie."
        },
        {
          id: "ped_b3_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action évaluée / validée par le CNP selon les conditions de l’annexe du bloc 3."
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
      ruleText: "Validation pédiatrie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Formation diplômante / certifiante / continue / DPC sur la santé personnelle",
        "Auto-évaluation de son état de santé et de son suivi",
        "Avoir un médecin traitant et l’avoir consulté pendant la période",
        "Participation à un groupe d’échange et d’analyse entre pairs",
        "Action de prévention en santé",
        "Pratique sportive et/ou culturelle",
        "Participation à un réseau confraternel",
        "Mise à jour des vaccinations recommandées",
        "Dépistages recommandés",
        "Action caritative / engagement associatif",
        "Participation à une association professionnelle",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "ped_b4_formation_sante",
          label: "Formation diplômante / certifiante / continue / DPC sur la santé personnelle",
          hint: "Thèmes cités dans le référentiel : santé personnelle, qualité de vie au travail, déchets, AES, violences sexistes et sexuelles, violences aux soignants, ergonomie, risques professionnels, violences entre soignants/étudiants, analyse des pratiques."
        },
        {
          id: "ped_b4_autoevaluation",
          label: "Auto-évaluation de son état de santé et de son suivi",
          hint: "Renseignement de 2 questionnaires sur la période de 6 ans ; questionnaires et outils proposés en annexe."
        },
        {
          id: "ped_b4_medecin_traitant",
          label: "Avoir un médecin traitant et l’avoir consulté pendant la période",
          hint: "Hors auto-déclaration ou parent au 1er degré."
        },
        {
          id: "ped_b4_groupes_pairs",
          label: "Participation à un groupe d’échange et d’analyse entre pairs",
          hint: "Action orientée santé du professionnel et soutien entre pairs."
        },
        {
          id: "ped_b4_prevention",
          label: "Action de prévention en santé",
          hint: "Action de prévention et de maintien de la santé du professionnel."
        },
        {
          id: "ped_b4_pratique_sportive_culturelle",
          label: "Pratique sportive et/ou culturelle",
          hint: "Action de prévention reconnue dans les annexes du bloc 4."
        },
        {
          id: "ped_b4_reseau_confraternel",
          label: "Participation à un réseau confraternel",
          hint: "Participation à un réseau ou à une dynamique confraternelle favorisant la santé du professionnel."
        },
        {
          id: "ped_b4_vaccinations",
          label: "Mise à jour des vaccinations recommandées",
          hint: "Maintien et mise à jour des vaccinations recommandées pour le professionnel de santé."
        },
        {
          id: "ped_b4_depistages",
          label: "Dépistages recommandés",
          hint: "Suivi des recommandations générales de dépistage selon l’âge et la situation personnelle."
        },
        {
          id: "ped_b4_action_caritative",
          label: "Action caritative / engagement associatif",
          hint: "Exemples cités en annexe : Pédiatres du Monde, Médecins du Monde, Médecins Sans Frontières, Croix-Rouge française, IPA, EAP, EAPS."
        },
        {
          id: "ped_b4_association_professionnelle",
          label: "Participation à une association professionnelle",
          hint: "Exemples cités en annexe : SFP et sociétés filles, AFPA, syndicats, CNP de Pédiatrie."
        },
        {
          id: "ped_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action en lien avec la pédiatrie et/ou l’exercice professionnel, proposée a priori ou a posteriori avec programme écrit, nombre d’heures et attestation de présence."
        }
      ]
    }
  ]
},
//Pneumologue
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
      ruleText: "Validation pneumologie : 2 actions différentes minimum dans ce bloc, dont au moins 1 action de DPC.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Participation à des actions DPC de formation pneumologique validées par un organisme agréé et répondant aux orientations prioritaires communes et de la spécialité",
        "Participation annuelle à un ou plusieurs congrès français (nationaux ou régionaux) ou internationaux de la spécialité",
        "Participation annuelle à une ou plusieurs réunions de formation continue reconnues par le CNP",
        "Participation à des actions de formation à caractère scientifique ou professionnel dispensées par des organismes labellisés Qualiopi ou par des structures figurant sur la liste publique des organismes de formation",
        "Participation à des formations diplômantes ou certifiantes retenues par le CNP",
        "Activités d’enseignement universitaire ou dans un cadre institutionnel défini",
        "Formation à la maîtrise de stage universitaire",
        "Activités de recherche",
        "Travaux d’expertise se déroulant dans un cadre de traçabilité, de rigueur et d’indépendance",
        "Publications / revues de lecture / commentaires d’articles",
        "Participation effective au comité éditorial de revues scientifiques",
        "Participation à des réunions formalisées de revue bibliographique",
        "Abonnement à une revue médicale avec test de lecture effectué et réussi",
        "Participation à un programme intégré proposé par un ODPC dans le cadre des orientations prioritaires",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "pneumo_b1_dpc",
          label: "Action DPC de formation pneumologique",
          hint: "Action validée par un organisme agréé, notamment PneumODPC, et répondant aux orientations prioritaires communes et de la spécialité. Intervenant ou participant auditeur à l’intégralité ; présentiel ou distanciel."
        },
        {
          id: "pneumo_b1_congres",
          label: "Congrès français ou international de la spécialité",
          hint: "Participation annuelle à un ou plusieurs congrès nationaux, régionaux ou internationaux. Exemples d’annexe : CPLF, ERS, ATS, J2R."
        },
        {
          id: "pneumo_b1_reunions_cnp",
          label: "Réunion de formation continue reconnue par le CNP",
          hint: "Exemples d’annexe : webinaires / ateliers SPLF, formations des groupes de travail SPLF, formations organisées par les réseaux/filières comme RespiFIL ou réseau HTP."
        },
        {
          id: "pneumo_b1_formation_qualiopi",
          label: "Formation scientifique ou professionnelle Qualiopi / liste publique",
          hint: "Action de formation à caractère scientifique ou professionnel, en lien avec la pneumologie."
        },
        {
          id: "pneumo_b1_du_diu",
          label: "Formation diplômante ou certifiante retenue par le CNP",
          hint: "DU / DIU ou autre formation retenue par le CNPP ; la liste indicative est renvoyée vers la SPLF Académie."
        },
        {
          id: "pneumo_b1_enseignement",
          label: "Activité d’enseignement",
          hint: "Enseignement universitaire ou dans un cadre institutionnel défini, dans le champ de la pneumologie."
        },
        {
          id: "pneumo_b1_msu",
          label: "Formation à la maîtrise de stage universitaire",
          hint: "Formation reconnue dans le cadre universitaire."
        },
        {
          id: "pneumo_b1_recherche",
          label: "Activité de recherche",
          hint: "Activité de recherche clinique, épidémiologique ou institutionnelle dans le champ de la pneumologie."
        },
        {
          id: "pneumo_b1_expertise",
          label: "Travaux d’expertise",
          hint: "Travaux réalisés dans un cadre de traçabilité, de rigueur et d’indépendance."
        },
        {
          id: "pneumo_b1_publications",
          label: "Publication / revue de lecture / commentaire d’article",
          hint: "Publications et travaux scientifiques dans le champ de la spécialité."
        },
        {
          id: "pneumo_b1_comite_editorial",
          label: "Participation au comité éditorial d’une revue scientifique",
          hint: "Participation effective à l’activité éditoriale d’une revue scientifique."
        },
        {
          id: "pneumo_b1_revue_biblio",
          label: "Réunions formalisées de revue bibliographique",
          hint: "Participation à des réunions régulières de revue de littérature."
        },
        {
          id: "pneumo_b1_test_lecture",
          label: "Abonnement à une revue médicale avec test de lecture",
          hint: "Abonnement et test de lecture effectué et réussi."
        },
        {
          id: "pneumo_b1_programme_integre",
          label: "Programme intégré ODPC",
          hint: "Programme intégré proposé par un ODPC dans le cadre des orientations prioritaires."
        },
        {
          id: "pneumo_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action analysée par le CNPP-FFP quant à son contenu scientifique, pédagogique et méthodologique."
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
      ruleText: "Validation pneumologie : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Participation régulière à un registre de pratiques, observatoire ou base de données de la spécialité",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés au titre du DPC",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés dispensés par des organismes labellisés Qualiopi ou par des structures figurant sur la liste publique des organismes de formation",
        "Actions d’amélioration des pratiques organisées au sein des établissements de santé",
        "Participation à des RMM, RCP, CREX, patients traceurs ou autres démarches d’EPP",
        "Participation à un exercice coordonné et protocolé d’une équipe pluri-professionnelle de soins en ambulatoire",
        "Participation au suivi d’indicateurs de qualité et de sécurité des soins",
        "Participation à un réseau de vigilance",
        "Gestion des risques en équipe",
        "Rédaction ou actualisation de procédures / protocoles",
        "Participation à des missions d’expertise ou à des recommandations",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "pneumo_b2_registre",
          label: "Registre de pratiques / observatoire / base de données",
          hint: "Participation régulière à un registre conduit sous l’égide du CNPP ou reconnu par le CNP. Exemple visible en annexe : EpiGETIF."
        },
        {
          id: "pneumo_b2_dpc_epp",
          label: "Analyse de pratiques / gestion des risques DPC",
          hint: "Action ou programme intégré publié par l’ANDPC en lien avec la pneumologie."
        },
        {
          id: "pneumo_b2_qualiopi_epp",
          label: "Analyse de pratiques / gestion des risques Qualiopi / liste publique",
          hint: "Action de qualité / sécurité / EPP répondant aux attendus méthodologiques du CNP."
        },
        {
          id: "pneumo_b2_rmm_rcp_crex",
          label: "RMM / RCP / CREX / patient traceur",
          hint: "Actions d’amélioration des pratiques organisées dans les établissements de santé."
        },
        {
          id: "pneumo_b2_exercice_coordonne",
          label: "Exercice coordonné et protocolé en équipe pluriprofessionnelle",
          hint: "Participation à une organisation structurée des parcours ou à une équipe pluriprofessionnelle de soins en ambulatoire."
        },
        {
          id: "pneumo_b2_indicateurs",
          label: "Suivi d’indicateurs qualité et sécurité des soins",
          hint: "Participation à des indicateurs de suivi qualité / sécurité et à leur amélioration."
        },
        {
          id: "pneumo_b2_vigilance",
          label: "Participation à un réseau de vigilance",
          hint: "Participation à une démarche structurée de vigilance en lien avec la spécialité."
        },
        {
          id: "pneumo_b2_gestion_risques_equipe",
          label: "Gestion des risques en équipe",
          hint: "Analyse collective et amélioration des pratiques de sécurité."
        },
        {
          id: "pneumo_b2_protocoles",
          label: "Procédures / protocoles / référentiels",
          hint: "Élaboration ou actualisation de procédures et protocoles de pratique."
        },
        {
          id: "pneumo_b2_expertise_recommandations",
          label: "Expertise / recommandations / groupes de travail",
          hint: "Participation à des missions d’expertise ou à l’élaboration de recommandations."
        },
        {
          id: "pneumo_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action analysée et validée par le CNPP-FFP sur son adéquation scientifique, pédagogique et méthodologique."
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
      ruleText: "Validation pneumologie : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Actions de formation sur le thème de la relation avec les patients",
        "Formations diplômantes ou certifiantes sur le thème de la relation avec les patients",
        "Action réalisée dans le cadre d’une association d’usagers du système de santé agréée",
        "Participation à un registre de pratiques intégrant des données patients",
        "Conception et participation à la mise en place de programmes associant des patients",
        "Participation à un dispositif d’annonce",
        "Patients traceurs",
        "Actions favorisant l’amélioration de la qualité de la relation avec l’entourage, les aidants ou les usagers",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "pneumo_b3_formation_relation",
          label: "Formation sur la relation avec les patients",
          hint: "Formation visant le dialogue, l’écoute active, la bienveillance, les droits du patient, la décision partagée ou l’information du patient."
        },
        {
          id: "pneumo_b3_diplome_relation",
          label: "Formation diplômante ou certifiante relation patient",
          hint: "DU / DIU ou autre formation certifiante sur le thème de la relation patient."
        },
        {
          id: "pneumo_b3_association_usagers",
          label: "Action dans le cadre d’une association d’usagers",
          hint: "Action menée avec une association agréée du système de santé."
        },
        {
          id: "pneumo_b3_registre_patient",
          label: "Registre intégrant des données patients",
          hint: "Participation à un registre de pratiques avec données patients, au service de l’amélioration de l’expérience et de la prise en charge."
        },
        {
          id: "pneumo_b3_programmes_patients",
          label: "Programme associant des patients",
          hint: "Conception et participation à la mise en place de programmes impliquant les patients ou leurs aidants."
        },
        {
          id: "pneumo_b3_dispositif_annonce",
          label: "Participation à un dispositif d’annonce",
          hint: "Action centrée sur l’information, l’annonce diagnostique ou l’accompagnement du patient."
        },
        {
          id: "pneumo_b3_patients_traceurs",
          label: "Patients traceurs",
          hint: "Démarche d’analyse de parcours centrée sur l’expérience patient."
        },
        {
          id: "pneumo_b3_aidants_usagers",
          label: "Relation avec l’entourage / les aidants / les usagers",
          hint: "Action améliorant la qualité de la relation avec l’entourage et la collaboration avec les aidants."
        },
        {
          id: "pneumo_b3_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action validée par le CNPP-FFP après analyse scientifique, pédagogique et méthodologique."
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
      ruleText: "Validation pneumologie : 2 actions différentes minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Avoir un médecin traitant (ou du travail)",
        "Auto-évaluation de son état de santé et de son suivi",
        "Staffs d’équipe médico-soignante, groupes d’analyse de pratiques, groupes d’échange et d’analyse entre pairs permettant de travailler sur la santé personnelle du médecin",
        "Actions de gestion des risques professionnels délivrées par des organismes de formation labellisés Qualiopi ou par un ODPC ou par des structures figurant sur la liste publique des organismes de formation",
        "Une démarche d’accréditation sur la période",
        "Actions dans le domaine de la prévention en santé",
        "Participation à des activités sportives dans ou hors le cadre professionnel",
        "Participation aux actions nationales de dépistage organisé des cancers selon sa situation de santé personnelle",
        "Tenue à jour de ses vaccinations personnelles",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "pneumo_b4_medecin_traitant",
          label: "Médecin traitant (ou du travail)",
          hint: "Hors autodéclaration ou parent au 1er degré, et l’avoir consulté au moins 3 fois pendant la période de certification."
        },
        {
          id: "pneumo_b4_autoevaluation",
          label: "Auto-évaluation de son état de santé",
          hint: "Renseignement de 2 questionnaires sur la période de 6 ans, avec propositions d’outils de suivi ou de prise en charge."
        },
        {
          id: "pneumo_b4_groupes_pairs",
          label: "Groupes d’échange / analyse entre pairs / staffs médico-soignants",
          hint: "Participation à un minimum de 4 réunions ; éligibilité de fait selon la fiche méthode HAS."
        },
        {
          id: "pneumo_b4_risques_pro",
          label: "Gestion des risques professionnels",
          hint: "Formation délivrée par organisme Qualiopi, ODPC ou structure figurant sur la liste publique. Thèmes visibles en annexe : santé psychique et physique, ergonomie, radioprotection, prévention et gestion des RPS, comité de vie professionnelle santé au travail, éco-soins."
        },
        {
          id: "pneumo_b4_accreditation",
          label: "Démarche d’accréditation sur la période",
          hint: "Attestation d’accréditation."
        },
        {
          id: "pneumo_b4_prevention_sante",
          label: "Actions de prévention en santé personnelle",
          hint: "Au moins 3 actions sur la période. Exemples visibles en annexe : prévention et gestion des risques psycho-sociaux, radioprotection, santé environnementale ou nutritionnelle."
        },
        {
          id: "pneumo_b4_sport",
          label: "Activité sportive régulière",
          hint: "Participation à des activités sportives dans ou hors le cadre professionnel ; fournir licence, preuve d’abonnement/cotisation et participation."
        },
        {
          id: "pneumo_b4_depistage_cancers",
          label: "Dépistage organisé des cancers",
          hint: "Participation selon les recommandations à la situation de santé personnelle : cancer du sein, du colon, du poumon."
        },
        {
          id: "pneumo_b4_vaccinations",
          label: "Vaccinations personnelles à jour",
          hint: "Mise à jour au moins des vaccinations obligatoires pour les soignants."
        },
        {
          id: "pneumo_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée au CNPP, puis évaluée individuellement sur pièces ou a priori."
        }
      ]
    }
  ]
},
//psychiatrie
{
  id: "psychiatrie",
  label: "Psychiatre",
  fullTitle: "Certification Périodique du Psychiatre",
  subtitle: "Spécialité : psychiatrie",
  icon: "🧠",
  theme: {
    primary: "#7c3aed",
    primary2: "#6d28d9",
    accent: "#a78bfa"
  },
  blocks: [
    {
      id: "bloc1",
      label: "Bloc 1",
      shortLabel: "Connaissances et compétences",
      colorClass: "bloc1",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "Validation psychiatrie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation au titre du DPC publiées par l’ANDPC",
        "Participation à un congrès de niveau national ou international, à une journée d’association régionale de formation ou à une formation en ligne de type e-learning labellisé Qualiopi",
        "Actions de formation à caractère scientifique ou professionnel dispensées par des organismes de formation labellisés Qualiopi ou par des structures figurant sur la liste publique des organismes de formation",
        "Formations diplômantes ou certifiantes organisées par les universités",
        "Activités d’enseignement délivrées dans le cadre d’une université",
        "Activité d’enseignement dans un cadre institutionnel défini",
        "Activités de recherche",
        "Maîtrise de stage universitaire",
        "Travaux d’expertise se déroulant dans un cadre de traçabilité, de rigueur et d’indépendance",
        "Publications dans des revues référencées à comité de lecture indépendant ou revues de lecture ou commentaires d’articles",
        "Participation effective au comité éditorial de revues scientifiques",
        "Participation à des réunions formalisées de revue bibliographique",
        "Abonnement à une revue médicale avec test de lecture effectué et réussi",
        "Psychothérapie didactique personnelle par société reconnue",
        "Participation à un programme intégré proposé par un ODPC dans le cadre des Orientations Prioritaires",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "psy_b1_dpc",
          label: "Action de formation au titre du DPC publiée par l’ANDPC",
          hint: "Participation à l’intégralité d’une action de ce type comme auditeur ou formateur ; 2 actions de ce type sur un cycle de 6 ans."
        },
        {
          id: "psy_b1_congres_formation",
          label: "Congrès national / international, journée régionale ou e-learning Qualiopi",
          hint: "Participation à l’intégralité d’une action de ce type comme auditeur ou formateur ; le référentiel regroupe ici congrès, journées régionales et e-learning labellisé Qualiopi."
        },
        {
          id: "psy_b1_congres_francais_psychiatrie",
          label: "Congrès Français de Psychiatrie",
          hint: "Congrès explicitement listé dans l’annexe 4 des formations validées par le CNPP."
        },
        {
          id: "psy_b1_afpbn",
          label: "Journées de l’Association Française de Psychiatrie Biologique et de Neuropsychopharmacologie (AFPBN)",
          hint: "Formation explicitement listée dans l’annexe 4."
        },
        {
          id: "psy_b1_encephale",
          label: "Congrès encéphale",
          hint: "Congrès explicitement listé dans l’annexe 4."
        },
        {
          id: "psy_b1_geps",
          label: "Congrès Groupement d’Étude et de Prévention du Suicide (GEPS)",
          hint: "Congrès explicitement listé dans l’annexe 4."
        },
        {
          id: "psy_b1_information_psychiatrie",
          label: "Journées de la Société de l’Information de psychiatrie",
          hint: "Formation explicitement listée dans l’annexe 4."
        },
        {
          id: "psy_b1_sfpeada",
          label: "Congrès de la Société Française de Psychiatrie de l’Enfant et de l’Adolescent et Disciplines Associées (SFPEADA)",
          hint: "Congrès explicitement listé dans l’annexe 4."
        },
        {
          id: "psy_b1_cpnlf",
          label: "Congrès de Psychiatrie et de Neurologie de Langue Française (CPNLF)",
          hint: "Congrès explicitement listé dans l’annexe 4."
        },
        {
          id: "psy_b1_pedopsychiatrie",
          label: "Journées de pédopsychiatrie et journées de psychiatrie adulte",
          hint: "Formations explicitement listées dans l’annexe 4."
        },
        {
          id: "psy_b1_afpep_snpp",
          label: "Journées nationales de l’AFPEP-SNPP",
          hint: "Formations explicitement listées dans l’annexe 4."
        },
        {
          id: "psy_b1_ffp",
          label: "Journées d’études de la Fédération Française de Psychiatrie (FFP)",
          hint: "Formations explicitement listées dans l’annexe 4."
        },
        {
          id: "psy_b1_smp",
          label: "Séminaires et journées de la Société Médico-Psychologique",
          hint: "Formations explicitement listées dans l’annexe 4."
        },
        {
          id: "psy_b1_evolution_psychiatrique",
          label: "Séminaires de la Société de l’Évolution Psychiatrique",
          hint: "Formations explicitement listées dans l’annexe 4."
        },
        {
          id: "psy_b1_psychotherapie_institutionnelle",
          label: "Journées et rencontres de psychothérapie institutionnelle",
          hint: "Exemples listés en annexe 4 : Journée nationale de psychothérapie institutionnelle, Rencontres de Saint-Alban, Rencontres de la Criée, journée de psychothérapie institutionnelle à Landerneau, journées de l’Association méditerranéenne de psychothérapie institutionnelle."
        },
        {
          id: "psy_b1_tdah",
          label: "Journée annuelle de la Société Française du TDAH",
          hint: "Formation explicitement listée dans l’annexe 4."
        },
        {
          id: "psy_b1_afp_spf",
          label: "Journées de séminaire et colloques de l’AFP / SPF",
          hint: "Formations explicitement listées dans l’annexe 4."
        },
        {
          id: "psy_b1_formation_qualiopi",
          label: "Formation scientifique ou professionnelle par organisme Qualiopi / liste publique",
          hint: "Participation à l’intégralité d’une action de ce type ; action scientifique ou professionnelle structurée."
        },
        {
          id: "psy_b1_diplome_universitaire",
          label: "Formation diplômante ou certifiante organisée par une université",
          hint: "Le référentiel prévoit cette catégorie, mais l’annexe 2 des formations retenues par le CNP est indiquée “à venir”."
        },
        {
          id: "psy_b1_enseignement_universitaire",
          label: "Activité d’enseignement délivrée dans le cadre d’une université",
          hint: "Activité d’enseignement universitaire dans le champ de la psychiatrie."
        },
        {
          id: "psy_b1_enseignement_institutionnel",
          label: "Activité d’enseignement dans un cadre institutionnel défini",
          hint: "Activité d’enseignement hors université mais dans un cadre institutionnel formalisé."
        },
        {
          id: "psy_b1_recherche",
          label: "Activités de recherche",
          hint: "Activités de recherche dans le champ de la psychiatrie."
        },
        {
          id: "psy_b1_msu",
          label: "Maîtrise de stage universitaire",
          hint: "Formation ou activité relevant de la maîtrise de stage universitaire."
        },
        {
          id: "psy_b1_expertise",
          label: "Travaux d’expertise",
          hint: "Travaux réalisés dans un cadre de traçabilité, de rigueur et d’indépendance."
        },
        {
          id: "psy_b1_publication",
          label: "Publication / revue de lecture / commentaire d’article",
          hint: "Publication dans une revue référencée à comité de lecture indépendant, ou activité de revue/commentaire d’article."
        },
        {
          id: "psy_b1_comite_editorial",
          label: "Participation effective au comité éditorial d’une revue scientifique",
          hint: "Participation effective à un comité éditorial de revue scientifique."
        },
        {
          id: "psy_b1_revue_biblio",
          label: "Participation à des réunions formalisées de revue bibliographique",
          hint: "Réunions structurées de revue de la littérature."
        },
        {
          id: "psy_b1_test_lecture",
          label: "Abonnement à une revue médicale avec test de lecture réussi",
          hint: "Abonnement à une revue médicale avec test de lecture effectué et réussi."
        },
        {
          id: "psy_b1_psychotherapie_didactique",
          label: "Psychothérapie didactique personnelle par société reconnue",
          hint: "Action explicitement listée dans le bloc 1 du référentiel psychiatrie."
        },
        {
          id: "psy_b1_programme_integre",
          label: "Programme intégré proposé par un ODPC dans le cadre des Orientations Prioritaires",
          hint: "Programme intégré ODPC relevant des orientations prioritaires de la spécialité."
        },
        {
          id: "psy_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par le psychiatre, évaluée a priori ou a posteriori par le CNP."
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
      ruleText: "Validation psychiatrie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à un groupe de pairs, supervision, intervision",
        "Participation régulière à un registre de pratiques",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés au titre du DPC publiées par l’ANDPC",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés dispensées par des organismes de formation labellisés Qualiopi ou par des structures figurant sur la liste publique des organismes de formation",
        "Actions d’amélioration des pratiques organisées au sein des établissements de santé",
        "Exercice coordonné et protocolisé d’une équipe pluri-professionnelle de soins en ambulatoire",
        "Suivi d’indicateurs de qualité et de sécurité des soins",
        "Participation à un réseau de vigilance",
        "Gestion des risques en équipe",
        "Maîtrise de stage universitaire",
        "Actions d’amélioration des pratiques : missions d’expertise, participation à des recommandations",
        "Participation à une Commission Départementale des Soins Psychiatriques",
        "Participation à un programme intégré proposé par un ODPC dans le cadre des orientations prioritaires",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "psy_b2_groupes_pairs",
          label: "Participation à un groupe de pairs, supervision, intervision",
          hint: "Groupes de pairs, supervision ou intervision dans une logique d’analyse de pratique."
        },
        {
          id: "psy_b2_registre",
          label: "Participation régulière à un registre de pratiques",
          hint: "Participation active à un registre de pratiques dans le champ de la psychiatrie."
        },
        {
          id: "psy_b2_dpc_epp",
          label: "Action d’analyse de pratiques / gestion des risques / programme intégré DPC",
          hint: "Action publiée par l’ANDPC à destination des psychiatres."
        },
        {
          id: "psy_b2_qualiopi_epp",
          label: "Action d’analyse de pratiques / gestion des risques par organisme Qualiopi / liste publique",
          hint: "Action structurée répondant aux attendus du référentiel et aux méthodes HAS."
        },
        {
          id: "psy_b2_amelioration_etablissement",
          label: "Actions d’amélioration des pratiques organisées au sein des établissements de santé",
          hint: "Action institutionnelle d’amélioration des pratiques en établissement."
        },
        {
          id: "psy_b2_exercice_coordonne",
          label: "Exercice coordonné et protocolisé d’une équipe pluri-professionnelle de soins en ambulatoire",
          hint: "Action relevant de la coordination pluriprofessionnelle des parcours."
        },
        {
          id: "psy_b2_indicateurs",
          label: "Suivi d’indicateurs de qualité et de sécurité des soins",
          hint: "Suivi et amélioration d’indicateurs qualité / sécurité."
        },
        {
          id: "psy_b2_vigilance",
          label: "Participation à un réseau de vigilance",
          hint: "Participation à un réseau de vigilance dans le champ de la psychiatrie."
        },
        {
          id: "psy_b2_gestion_risques_equipe",
          label: "Gestion des risques en équipe",
          hint: "Analyse collective et amélioration de la sécurité des pratiques."
        },
        {
          id: "psy_b2_msu",
          label: "Maîtrise de stage universitaire",
          hint: "Encadrement universitaire ou maîtrise de stage reconnue dans le bloc 2."
        },
        {
          id: "psy_b2_expertise_recommandations",
          label: "Missions d’expertise / participation à des recommandations",
          hint: "Participation à des recommandations ou missions d’expertise."
        },
        {
          id: "psy_b2_cdsp",
          label: "Participation à une Commission Départementale des Soins Psychiatriques",
          hint: "Action explicitement prévue par le référentiel psychiatrie."
        },
        {
          id: "psy_b2_programme_integre",
          label: "Programme intégré proposé par un ODPC dans le cadre des orientations prioritaires",
          hint: "Programme intégré ODPC relevant des orientations prioritaires de la spécialité."
        },
        {
          id: "psy_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par le psychiatre et validée par le CNP après analyse."
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
      ruleText: "Validation psychiatrie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Suivre une formation qualifiante à la psychothérapie",
        "Assurer la supervision de psychothérapies",
        "Inscription à un annuaire de psychothérapeutes ou d’une société savante en psychothérapie",
        "Actions de formation sur le thème de la relation au patient délivrées par des organismes de formation labellisés Qualiopi ou par un ODPC ou par des structures figurant sur la liste publique des organismes de formation",
        "Formations diplômantes ou certifiantes sur le thème de la relation au patient organisées par les universités",
        "Actions réalisées dans le cadre d’associations de patients",
        "Conception et participation à la mise en place de programmes associant des patients",
        "Travaux avec association ad hoc et travail territorial",
        "Patients traceurs",
        "Participation à un dispositif d’annonce",
        "Participation à des groupes d’échange et d’analyse entre pairs centrés sur la relation avec le patient",
        "Faciliter le partage d’expériences interprofessionnelles et de bonnes pratiques pour améliorer la prise en charge des patients vulnérables, de la fin de vie et lutter contre les discriminations",
        "Formation prévention violences sexistes et sexuelles",
        "Adaptation de la prise en charge aux publics spécifiques",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "psy_b3_formation_psychotherapie",
          label: "Formation qualifiante à la psychothérapie",
          hint: "Action explicitement prévue dans le bloc 3 pour améliorer la relation thérapeutique."
        },
        {
          id: "psy_b3_supervision_psychotherapies",
          label: "Supervision de psychothérapies",
          hint: "Assurer la supervision de psychothérapies."
        },
        {
          id: "psy_b3_annuaire_psychotherapeutes",
          label: "Inscription à un annuaire de psychothérapeutes ou d’une société savante en psychothérapie",
          hint: "Inscription ou participation à une société savante en psychothérapie."
        },
        {
          id: "psy_b3_formation_relation",
          label: "Formation sur le thème de la relation au patient",
          hint: "Formation délivrée par un organisme Qualiopi, un ODPC ou une structure figurant sur la liste publique."
        },
        {
          id: "psy_b3_diplome_relation",
          label: "Formation diplômante ou certifiante sur le thème de la relation au patient",
          hint: "Formation universitaire ou certifiante dédiée à la relation patient."
        },
        {
          id: "psy_b3_associations_patients",
          label: "Actions réalisées dans le cadre d’associations de patients",
          hint: "Le référentiel prévoit cette catégorie ; l’annexe 5 des associations agréées est indiquée “à venir”."
        },
        {
          id: "psy_b3_programmes_patients",
          label: "Conception et participation à la mise en place de programmes associant des patients",
          hint: "Programme élaboré pour ou avec les patients."
        },
        {
          id: "psy_b3_travail_territorial",
          label: "Travaux avec association ad hoc et travail territorial",
          hint: "Action explicitement prévue dans le bloc 3."
        },
        {
          id: "psy_b3_patients_traceurs",
          label: "Patients traceurs",
          hint: "Action relevant de la méthode patient traceur, centrée sur l’expérience et la relation patient."
        },
        {
          id: "psy_b3_dispositif_annonce",
          label: "Participation à un dispositif d’annonce",
          hint: "Action d’annonce / accompagnement du patient dans son parcours."
        },
        {
          id: "psy_b3_groupes_pairs_relation",
          label: "Participation à des groupes d’échange et d’analyse entre pairs centrés sur la relation avec le patient",
          hint: "Travail entre pairs sur la relation avec le patient."
        },
        {
          id: "psy_b3_partage_interpro",
          label: "Partage d’expériences interprofessionnelles et bonnes pratiques",
          hint: "Patients vulnérables, fin de vie, discriminations, inégalités d’accès aux soins."
        },
        {
          id: "psy_b3_vss",
          label: "Formation prévention violences sexistes et sexuelles",
          hint: "Action explicitement prévue dans le bloc 3."
        },
        {
          id: "psy_b3_publics_specifiques",
          label: "Adaptation de la prise en charge aux publics spécifiques",
          hint: "Action explicitement prévue dans le bloc 3."
        },
        {
          id: "psy_b3_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par le psychiatre et validée par le CNP."
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
      ruleText: "Validation psychiatrie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Médecin traitant",
        "Psychothérapie individuelle",
        "Activité sportive avec licence ou attestation",
        "Activité culturelle en tant qu’acteur ou spectateur",
        "Sensibilisation à la souffrance au travail",
        "Participation à des groupes d’échange et d’analyse entre pairs permettant de travailler sur la santé personnelle du médecin",
        "Actions dans le domaine de la prévention en santé et la gestion des risques psychosociaux",
        "Participation à un programme intégré proposé par ODPC sur le thème de la relation patient, de la santé personnelle ou des risques psychosociaux",
        "Prévention des violences sexistes et sexuelles",
        "Prévention des violences aux soignants dans le cadre de la prise en charge des patients et de leurs proches",
        "Ergonomie du lieu de travail",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "psy_b4_medecin_traitant",
          label: "Médecin traitant",
          hint: "Avoir un médecin traitant hors auto-déclaration."
        },
        {
          id: "psy_b4_psychotherapie_individuelle",
          label: "Psychothérapie individuelle",
          hint: "Action explicitement prévue dans le bloc 4 du référentiel."
        },
        {
          id: "psy_b4_sport",
          label: "Activité sportive avec licence ou attestation",
          hint: "Action de prévention listée dans le référentiel et l’annexe 7."
        },
        {
          id: "psy_b4_culture",
          label: "Activité culturelle en tant qu’acteur ou spectateur",
          hint: "Action listée dans le référentiel ; l’annexe 7 précise les activités culturelles en tant qu’acteur."
        },
        {
          id: "psy_b4_souffrance_travail",
          label: "Sensibilisation à la souffrance au travail",
          hint: "Action explicitement prévue dans le bloc 4."
        },
        {
          id: "psy_b4_groupes_pairs",
          label: "Participation à des groupes d’échange et d’analyse entre pairs",
          hint: "Permettant de travailler sur la santé personnelle du médecin."
        },
        {
          id: "psy_b4_prevention_rps",
          label: "Actions dans le domaine de la prévention en santé et la gestion des risques psychosociaux",
          hint: "Le référentiel vise le repérage et la prévention de ses propres risques en santé et dangers psychosociaux ; renvoi explicite à l’annexe 7."
        },
        {
          id: "psy_b4_programme_integre",
          label: "Programme intégré ODPC sur la relation patient, la santé personnelle ou les risques psychosociaux",
          hint: "Participation à l’intégralité d’une action de ce type ; 1 action de ce type sur un cycle de 6 ans."
        },
        {
          id: "psy_b4_vss",
          label: "Prévention des violences sexistes et sexuelles",
          hint: "Identifier et réguler au mieux les violences sexistes et sexuelles ; fournir des leviers de protection renforcée aux praticiens."
        },
        {
          id: "psy_b4_violences_soignants",
          label: "Prévention des violences aux soignants dans le cadre de la prise en charge des patients et de leurs proches",
          hint: "Identifier et réguler au mieux les violences dans le cadre professionnel."
        },
        {
          id: "psy_b4_ergonomie",
          label: "Ergonomie du lieu de travail",
          hint: "Identifier et réguler les atteintes possibles à la santé des praticiens."
        },
        {
          id: "psy_b4_depistage_cancers",
          label: "Participation aux actions nationales de dépistage organisé des cancers",
          hint: "Selon sa situation de santé personnelle : cancer du sein, du côlon, du poumon ; action explicitement listée dans l’annexe 7."
        },
        {
          id: "psy_b4_sante_nutritionnelle",
          label: "Action en santé nutritionnelle",
          hint: "Action explicitement listée dans l’annexe 7."
        },
        {
          id: "psy_b4_conge_parental",
          label: "Prise de congé parental",
          hint: "Action explicitement listée dans l’annexe 7."
        },
        {
          id: "psy_b4_conges_annuels",
          label: "Prise d’au moins 5 semaines de congés pendant l’année",
          hint: "Action explicitement listée dans l’annexe 7."
        },
        {
          id: "psy_b4_caritatif",
          label: "Participation à une activité caritative ou de coopération",
          hint: "Action explicitement listée dans l’annexe 7."
        },
        {
          id: "psy_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par le psychiatre, évaluée a priori ou a posteriori par le CNP."
        }
      ]
    }
  ]
},
//radiologie-imagerie-medicale
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
      ruleText: "Validation radiologie : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Action de formation au titre du DPC en radiologie et imagerie médicale",
        "Action de formation spécialisée en imagerie médicale",
        "Participation à un congrès ou une journée scientifique de radiologie",
        "Formation ciblée par domaine d’imagerie : sénologie, tête et cou, musculo-squelettique, pédiatrie, vasculaire, oncologie, gynécologie, radiologie interventionnelle",
        "Formation à de nouvelles pratiques : téléradiologie, intelligence artificielle, nouvelles techniques d’imagerie",
        "Validation d’actions de formation dans le cadre d’une démarche d’accréditation",
        "Formation diplômante ou certifiante retenue par le CNP",
        "Activité d’enseignement universitaire",
        "Participation à des cours spécialisés, DES, masters, DU/DIU",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "radio_b1_dpc",
          label: "Action de formation DPC en radiologie",
          hint: "Action relevant du DPC dans le champ de la radiologie et de l’imagerie médicale."
        },
        {
          id: "radio_b1_formation_specialisee",
          label: "Formation spécialisée en imagerie médicale",
          hint: "Exemples visibles dans le référentiel : tomosynthèse, IRM mammaire, imagerie du sein traité, imagerie avec prothèse, imagerie des lombalgies, vomissements de l’enfant, radiologie interventionnelle, etc."
        },
        {
          id: "radio_b1_congres",
          label: "Congrès / journée scientifique de radiologie",
          hint: "Participation à un congrès ou à une journée scientifique de la spécialité."
        },
        {
          id: "radio_b1_nouvelles_pratiques",
          label: "Nouvelles pratiques en radiologie",
          hint: "Exemples visibles : téléradiologie, intelligence artificielle et radiologie."
        },
        {
          id: "radio_b1_accreditation",
          label: "Formation dans le cadre d’une démarche d’accréditation",
          hint: "Action de formation réalisée dans le cadre de la complétion d’une démarche d’accréditation accompagnée par un OA, poursuivie pendant la période de 6 ans."
        },
        {
          id: "radio_b1_du_diu",
          label: "Formation diplômante ou certifiante retenue par le CNP",
          hint: "Exemples visibles en annexe : DU Imagerie gynécologie et mammaire, DIU Imagerie sénologique, DIU Radiologie interventionnelle musculo-squelettique, DIU Neuroradiologie diagnostique et thérapeutique, DIU Imagerie neurovasculaire, DIU Imagerie cardiovasculaire, DIU Radio pédiatrie."
        },
        {
          id: "radio_b1_enseignement",
          label: "Activité d’enseignement universitaire",
          hint: "Enseignements des 2e et 3e cycles, DES, masters, DU/DIU et cours en ligne mentionnés par le référentiel."
        },
        {
          id: "radio_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Une formation diplômante ne figurant pas dans la liste peut être soumise au CNPR pour validation."
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
      ruleText: "Validation radiologie : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Décision réglementaire ASN et utilisations médicales",
        "Décision ASN : parcours intégral vers l’assurance qualité obligatoire",
        "DACS : comment optimiser la dose patient",
        "Sécurité informatique et dossier médical",
        "Gestion du matériel dans un service d’imagerie",
        "Urgences vitales en cabinet de radiologie",
        "Gestes d’urgence en radiologie : prise en charge de l’allergie et de l’arrêt cardio-respiratoire",
        "Santé et sécurité en IRM",
        "Hygiène et prévention des infections en imagerie médicale",
        "Gestion des produits de contraste",
        "Participation à un registre de pratiques / observatoire / base de données",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "radio_b2_asn_utilisations",
          label: "Décision réglementaire ASN et utilisations médicales",
          hint: "Action relevant de la sécurité du patient."
        },
        {
          id: "radio_b2_asn_assurance_qualite",
          label: "Décision ASN : parcours intégral vers l’assurance qualité obligatoire",
          hint: "Action relevant de l’analyse du parcours de soins."
        },
        {
          id: "radio_b2_dacs_dose",
          label: "DACS : comment optimiser la dose patient",
          hint: "Action relevant de la sécurité du patient."
        },
        {
          id: "radio_b2_securite_informatique",
          label: "Sécurité informatique et dossier médical",
          hint: "Action relevant de la gestion des risques."
        },
        {
          id: "radio_b2_materiel",
          label: "Gestion du matériel dans un service d’imagerie",
          hint: "Action relevant de la sécurité du patient."
        },
        {
          id: "radio_b2_urgences_vitales",
          label: "Urgences vitales en cabinet de radiologie",
          hint: "Action relevant de la gestion des risques."
        },
        {
          id: "radio_b2_allergie_acr",
          label: "Gestes d’urgence en radiologie : allergie et arrêt cardio-respiratoire",
          hint: "Action relevant de la gestion des risques."
        },
        {
          id: "radio_b2_irm_securite",
          label: "Santé et sécurité en IRM",
          hint: "Action relevant de la sécurité du patient."
        },
        {
          id: "radio_b2_hygiene_infections",
          label: "Hygiène et prévention des infections en imagerie médicale",
          hint: "Action relevant de la sécurité du patient."
        },
        {
          id: "radio_b2_produits_contraste",
          label: "Gestion des produits de contraste",
          hint: "Action relevant de la sécurité du patient."
        },
        {
          id: "radio_b2_registres",
          label: "Registre de pratiques / observatoire / base de données",
          hint: "Exemples visibles en annexe bloc 2 : FRAN, ETIS, Seno Log, Angio mammographie, Cohorte EndoCryo, Renape, Big Renape."
        },
        {
          id: "radio_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action soumise au CNPR pour validation."
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
      ruleText: "Validation radiologie : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Optimiser l’accueil physique en centre d’imagerie médicale",
        "Bonnes pratiques d’accueil au secrétariat du centre d’imagerie médicale",
        "Personne compétente en radioprotection (PCR) – formation de renouvellement de niveau 1/2",
        "Optimiser l’accueil téléphonique en centre d’imagerie médicale",
        "Annonce d’une maladie grave : comment dire et accompagner",
        "RGPD : impacts et actions à mener pour le radiologue",
        "Introduction à l’identifiant national de santé (INS)",
        "Participation à une association d’usagers du système de santé agréée",
        "Registre intégrant des données patients",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "radio_b3_accueil_physique",
          label: "Optimiser l’accueil physique en centre d’imagerie médicale",
          hint: "Action classée dans le référentiel au titre de la bientraitance."
        },
        {
          id: "radio_b3_secretariat",
          label: "Bonnes pratiques d’accueil au secrétariat",
          hint: "Action classée dans le référentiel au titre de la bientraitance."
        },
        {
          id: "radio_b3_pcr",
          label: "PCR – formation de renouvellement niveau 1/2",
          hint: "Action classée dans le référentiel au bloc 3."
        },
        {
          id: "radio_b3_accueil_telephonique",
          label: "Optimiser l’accueil téléphonique en centre d’imagerie médicale",
          hint: "Action classée dans le référentiel au titre de communiquer / informer."
        },
        {
          id: "radio_b3_annonce_maladie_grave",
          label: "Annonce d’une maladie grave : comment dire et accompagner",
          hint: "Action classée dans le référentiel au titre de communiquer / informer."
        },
        {
          id: "radio_b3_rgpd",
          label: "RGPD : impacts et actions à mener pour le radiologue",
          hint: "Action classée dans le référentiel au titre de l’e-santé."
        },
        {
          id: "radio_b3_ins",
          label: "Introduction à l’identifiant national de santé (INS)",
          hint: "Action classée dans le référentiel au titre de l’e-santé."
        },
        {
          id: "radio_b3_association_usagers",
          label: "Association d’usagers du système de santé agréée",
          hint: "Le référentiel renvoie à la liste nationale des associations d’usagers agréées ; d’autres actions radiologiques avec ces associations peuvent être retenues."
        },
        {
          id: "radio_b3_registre_patient",
          label: "Registre intégrant des données patients",
          hint: "Exemple visible en annexe : FRI report – radiologie interventionnelle oncologique (bloc 3)."
        },
        {
          id: "radio_b3_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action soumise au CNPR pour validation."
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
      ruleText: "Validation radiologie : 2 actions minimum dans ce bloc.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Formation à la radioprotection travailleurs",
        "La financiarisation n’est pas une fatalité, comment s’organiser pour garder son indépendance",
        "Retraite, cessation d’activité et transmission",
        "Gestion des compétences et habilitations",
        "Intégrer un nouvel associé",
        "Le salarié compétent en santé et sécurité au travail",
        "Médico-légal : cas pratiques",
        "Auto-questionnaire santé du professionnel HAS",
        "Karasek Job Content Questionnaire",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "radio_b4_radioprotection_travailleurs",
          label: "Formation à la radioprotection des travailleurs",
          hint: "Action classée dans le référentiel au titre de la prévention des risques."
        },
        {
          id: "radio_b4_independance",
          label: "Garder son indépendance face à la financiarisation",
          hint: "Action classée dans le référentiel au titre de la prévention des risques."
        },
        {
          id: "radio_b4_retraite_transmission",
          label: "Retraite, cessation d’activité et transmission",
          hint: "Action classée dans le référentiel au titre de la prévention des risques."
        },
        {
          id: "radio_b4_competences_habilitations",
          label: "Gestion des compétences et habilitations",
          hint: "Action classée dans le référentiel au titre du management."
        },
        {
          id: "radio_b4_nouvel_associe",
          label: "Intégrer un nouvel associé",
          hint: "Action classée dans le référentiel au titre du management."
        },
        {
          id: "radio_b4_salarie_competent_sst",
          label: "Le salarié compétent en santé et sécurité au travail",
          hint: "Action classée dans le référentiel dans le champ prévention burn-out / santé-sécurité au travail."
        },
        {
          id: "radio_b4_medico_legal",
          label: "Médico-légal : cas pratiques",
          hint: "Action classée dans le référentiel au titre de la prévention des risques."
        },
        {
          id: "radio_b4_autoq_has",
          label: "Auto-questionnaire HAS santé du professionnel",
          hint: "Questionnaire préconisé par le CNPRAD, à refaire tous les 2 ans pour le domaine santé globale."
        },
        {
          id: "radio_b4_karasek",
          label: "Auto-évaluation Karasek",
          hint: "Questionnaire d’auto-évaluation de santé préconisé par le CNPRAD."
        },
        {
          id: "radio_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action soumise au CNPR pour validation."
        }
      ]
    }
  ]
},
//rhumatologie
{
  id: "rhumatologie",
  label: "Rhumatologue",
  fullTitle: "Certification Périodique du Rhumatologue",
  subtitle: "Spécialité : rhumatologie",
  icon: "🦴",
  theme: {
    primary: "#7b5ea7",
    primary2: "#5b3f88",
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
      ruleText: "Validation rhumatologie : 2 actions différentes minimum dans ce bloc. Certaines actions ont des attendus spécifiques du CNPR.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de DPC à destination des rhumatologues",
        "Actions de formation à caractère scientifique ou professionnel dispensées par des organismes labellisés Qualiopi ou structures figurant sur la liste publique des organismes de formation",
        "Congrès et autres formations retenus par le CNPR",
        "Formations diplômantes ou certifiantes retenues par le CNPR",
        "Activités d’enseignement délivrées dans le cadre d’une université",
        "Formation à la maîtrise de stage universitaire",
        "Publications ou communications orales ou affichées ou revues de lecture ou commentaires d’articles dans des revues scientifiques",
        "Participation effective au comité éditorial de revues scientifiques",
        "Participation à des réunions formalisées de revue bibliographique de type journal club",
        "Test de lecture d’une revue médicale réussi",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "rhumato_b1_dpc",
          label: "Actions de DPC à destination des rhumatologues",
          hint: "Participation comme apprenant ou formateur ; minimum de 2 DPC sur 6 ans pour valider une action."
        },
        {
          id: "rhumato_b1_formation_scientifique",
          label: "Formation scientifique ou professionnelle par organisme Qualiopi / liste publique",
          hint: "Congrès, FMC ou autre formation ; pour les congrès, au moins 2 congrès différents sur 6 ans pour valider une action ; pour les formations hors congrès, au moins 3 sessions de FMC par an pendant au moins 2 ans."
        },
        {
          id: "rhumato_b1_congres_sfr",
          label: "Congrès annuel de la Société française de rhumatologie (SFR)",
          hint: "Congrès national retenu par le CNPR au titre du bloc 1."
        },
        {
          id: "rhumato_b1_journees_nationales_sfr",
          label: "Journées nationales de rhumatologie de la SFR",
          hint: "Formation / congrès retenu par le CNPR."
        },
        {
          id: "rhumato_b1_section_rachis",
          label: "Réunion de la Section Rachis de la SFR",
          hint: "Formation spécialisée retenue par le CNPR."
        },
        {
          id: "rhumato_b1_education_therapeutique_sfr",
          label: "Journée d’Éducation Thérapeutique de la SFR",
          hint: "Journée thématique retenue par le CNPR."
        },
        {
          id: "rhumato_b1_section_arthrose",
          label: "Journée de la Section Arthrose de la SFR",
          hint: "Journée thématique retenue par le CNPR."
        },
        {
          id: "rhumato_b1_grep",
          label: "Journée Nationale de l’Épaule du GREP",
          hint: "Formation nationale retenue par le CNPR."
        },
        {
          id: "rhumato_b1_grio",
          label: "Journée annuelle du Groupe de recherche et d’information sur les ostéoporoses (GRIO)",
          hint: "Formation / congrès retenu par le CNPR."
        },
        {
          id: "rhumato_b1_sfetd",
          label: "Congrès national de la Société Française d’Étude et de Traitement de la Douleur (SFETD)",
          hint: "Congrès retenu par le CNPR."
        },
        {
          id: "rhumato_b1_rhumagerie",
          label: "Congrès Rhumagerie",
          hint: "Congrès retenu par le CNPR."
        },
        {
          id: "rhumato_b1_sims",
          label: "Congrès de la Société d’Imagerie Musculo-Squelettique (SIMS)",
          hint: "Congrès retenu par le CNPR."
        },
        {
          id: "rhumato_b1_eular",
          label: "Congrès de l’European League Against Rheumatism (EULAR)",
          hint: "Congrès international retenu par le CNPR."
        },
        {
          id: "rhumato_b1_acr",
          label: "Congrès de l’American College of Rheumatology (ACR)",
          hint: "Congrès international retenu par le CNPR."
        },
        {
          id: "rhumato_b1_oarsi",
          label: "Congrès de l’Osteoarthritis Research Society International (OARSI)",
          hint: "Congrès international retenu par le CNPR."
        },
        {
          id: "rhumato_b1_asbmr",
          label: "Congrès de l’American Society for Bone and Mineral Research (ASBMR)",
          hint: "Congrès international retenu par le CNPR."
        },
        {
          id: "rhumato_b1_ects",
          label: "Congrès de l’European Calcified Tissue Society (ECTS)",
          hint: "Congrès international retenu par le CNPR."
        },
        {
          id: "rhumato_b1_wco_iof_esceo",
          label: "Congrès WCO-IOF-ESCEO",
          hint: "Congrès international retenu par le CNPR dans le champ de l’ostéoporose."
        },
        {
          id: "rhumato_b1_european_crystal_network",
          label: "European Crystal Network Workshop",
          hint: "Workshop international retenu par le CNPR."
        },
        {
          id: "rhumato_b1_du_diu",
          label: "Formation diplômante ou certifiante retenue par le CNPR",
          hint: "Ex. 2e DES ou FST disponibles pour les rhumatologues : cancérologie, douleur, expertise médicale – préjudice corporel, médecine du sport, soins palliatifs."
        },
        {
          id: "rhumato_b1_enseignement_universitaire",
          label: "Activité d’enseignement universitaire",
          hint: "Minimum de 8 heures d’enseignement / formation par an durant au moins 2 ans."
        },
        {
          id: "rhumato_b1_msu",
          label: "Formation à la maîtrise de stage universitaire",
          hint: "Formation proposée par l’ANDPC ou par une URPS."
        },
        {
          id: "rhumato_b1_publication",
          label: "Publication / communication scientifique / revue de lecture",
          hint: "Dans le domaine de la rhumatologie ; revues indexées ou avec comité de lecture ; position de 1er, 2e, 3e, dernier ou avant-dernier auteur ; au minimum 1 publication sur le cycle."
        },
        {
          id: "rhumato_b1_comite_editorial",
          label: "Participation effective au comité éditorial d’une revue scientifique",
          hint: "Soit activité de rédacteur en chef ou adjoint, soit activité de révision d’un minimum de 3 articles par an pendant la période de 6 ans."
        },
        {
          id: "rhumato_b1_journal_club",
          label: "Réunion formalisée de revue bibliographique de type journal club",
          hint: "Participation à au moins 6 réunions sur le cycle ; réunions conformes à la fiche méthode HAS."
        },
        {
          id: "rhumato_b1_test_lecture",
          label: "Test de lecture d’une revue médicale réussi",
          hint: "Action explicitement prévue dans le bloc 1 du référentiel rhumatologie."
        },
        {
          id: "rhumato_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action conforme à une fiche méthode HAS ou aux critères d’éligibilité de la FSM, évaluée et validée a priori ou a posteriori par le CNP."
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
      ruleText: "Validation rhumatologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation régulière à un registre de pratiques",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés au titre du DPC publiés par l’ANDPC",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés dispensés par des organismes de formation labellisés Qualiopi ou structures figurant sur la liste publique",
        "Actions d’amélioration des pratiques organisées au sein des établissements de santé : RMM, RCP, CREX, autres méthodes d’EPP, patients traceurs",
        "Exercice coordonné et protocolé d’une équipe pluriprofessionnelle de soins en ambulatoire",
        "Activités de recherche clinique ou épidémiologique institutionnelle",
        "Publications ou communications orales ou affichées ou revues de lecture ou commentaires d’articles dans des revues scientifiques",
        "Participation effective au comité éditorial de revues scientifiques",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "rhumato_b2_registre_pratiques",
          label: "Participation régulière à un registre de pratiques",
          hint: "Participation active pendant la durée de vie du registre avec un minimum de 2 ans et inclusion d’un minimum de 10 patients sur la durée de participation."
        },
        {
          id: "rhumato_b2_combatt",
          label: "Participation à un registre validé de la spécialité (ex. registre COMBATT)",
          hint: "Exemple visible en annexe : observatoire national des combinaisons de thérapies ciblées dans les maladies inflammatoires à médiation immunitaire (IMIDs)."
        },
        {
          id: "rhumato_b2_dpc_epp",
          label: "Action d’analyse de pratiques / gestion des risques / programme intégré DPC",
          hint: "Action publiée par l’ANDPC à destination des rhumatologues ; éligibilité de fait."
        },
        {
          id: "rhumato_b2_qualiopi_epp",
          label: "Action d’analyse de pratiques / gestion des risques par organisme Qualiopi",
          hint: "Action délivrée par un organisme labellisé Qualiopi ou structure figurant sur la liste publique ; éligibilité de fait."
        },
        {
          id: "rhumato_b2_rmm_rcp_crex",
          label: "RMM / RCP / CREX / autres méthodes d’EPP / patients traceurs",
          hint: "Minimum de 4 participations pour valider une action."
        },
        {
          id: "rhumato_b2_exercice_coordonne",
          label: "Exercice coordonné et protocolé d’une équipe pluriprofessionnelle de soins en ambulatoire",
          hint: "Action prévue par le référentiel dans le bloc 2, dans une logique de coordination des soins."
        },
        {
          id: "rhumato_b2_recherche",
          label: "Activités de recherche clinique ou épidémiologique institutionnelle",
          hint: "Participation comme investigateur principal ou inclusion / adressage d’un minimum de 10 patients dans un protocole académique."
        },
        {
          id: "rhumato_b2_publication",
          label: "Publications / communications / revues de lecture",
          hint: "Publications dans le domaine de la rhumatologie ; revues indexées ou avec comité de lecture ; au minimum 1 publication sur le cycle."
        },
        {
          id: "rhumato_b2_comite_editorial",
          label: "Participation effective au comité éditorial d’une revue scientifique",
          hint: "Dans le domaine de la rhumatologie ; rédacteur en chef / adjoint ou activité de révision d’au moins 3 articles par an pendant la période de 6 ans."
        },
        {
          id: "rhumato_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action conforme à une fiche méthode HAS ou aux critères d’éligibilité de la FSM, validée a priori ou a posteriori par le CNP."
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
      ruleText: "Validation rhumatologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation sur le thème de la relation patient délivrées par des organismes de formation labellisés Qualiopi ou par un ODPC ou par des structures figurant sur la liste publique des organismes de formation",
        "Formations diplômantes ou certifiantes sur le thème de la relation patient organisées par les universités",
        "Action réalisée dans le cadre d’une association d’usagers du système de santé agréée",
        "Programme associant des patients",
        "Registre / observatoire / base de données intégrant des données patients",
        "Participation à un dispositif d’annonce",
        "Patients traceurs",
        "Action d’éducation thérapeutique",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "rhumato_b3_formation_relation",
          label: "Formation sur le thème de la relation patient",
          hint: "Soit action publiée par l’ANDPC à destination des rhumatologues, soit action d’un autre organisme avec minimum d’une journée de participation."
        },
        {
          id: "rhumato_b3_diplome_relation",
          label: "Formation diplômante ou certifiante sur le thème de la relation patient",
          hint: "Formation universitaire dédiée à la relation patient."
        },
        {
          id: "rhumato_b3_association_usagers",
          label: "Action réalisée dans le cadre d’une association d’usagers agréée",
          hint: "Exemples d’associations listées : France Lyme, Gougerot-Sjögren, Alliance Maladies Rares, Fibromyalgie France, AFPric, AFL+, Spondyl’Asso, etc."
        },
        {
          id: "rhumato_b3_programme_patient",
          label: "Programme élaboré pour le patient ou associant des patients",
          hint: "Action en lien avec l’information, l’accompagnement, l’implication ou la co-construction avec les patients."
        },
        {
          id: "rhumato_b3_registre_patient",
          label: "Registre / observatoire intégrant des données patients",
          hint: "Action relevant à la fois du suivi des pratiques et de la prise en compte de l’expérience / des données patients."
        },
        {
          id: "rhumato_b3_dispositif_annonce",
          label: "Participation à un dispositif d’annonce",
          hint: "Action formalisée d’annonce ou d’accompagnement du patient dans son parcours."
        },
        {
          id: "rhumato_b3_patients_traceurs",
          label: "Patients traceurs",
          hint: "Participation à la méthode patient traceur dans une logique d’amélioration de la relation et de l’expérience patient."
        },
        {
          id: "rhumato_b3_etp",
          label: "Action d’éducation thérapeutique",
          hint: "Ex. Journée d’Éducation Thérapeutique de la SFR ou programme d’éducation thérapeutique du patient."
        },
        {
          id: "rhumato_b3_hors_liste",
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
      ruleText: "Validation rhumatologie : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation sur le thème de la santé personnelle du médecin",
        "Auto-évaluation de son état de santé et de son suivi",
        "Participation à des groupes d’échange et d’analyse entre pairs",
        "Actions de gestion des risques professionnels",
        "Actions de prévention en santé personnelle",
        "Avoir un médecin traitant / organiser son suivi de santé",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "rhumato_b4_formation_sante_personnelle",
          label: "Action de formation sur le thème de la santé personnelle du médecin",
          hint: "Action du bloc 4 en lien avec la santé psychique et physique, l’ergonomie, la prévention ou la qualité de vie au travail."
        },
        {
          id: "rhumato_b4_autoevaluation_has",
          label: "Auto-questionnaire HAS santé du professionnel",
          hint: "Questionnaire recommandé par le CNPR ; à refaire tous les deux ans pour la partie santé globale."
        },
        {
          id: "rhumato_b4_autoevaluation_karasek",
          label: "Auto-évaluation avec questionnaire Karasek",
          hint: "Questionnaire recommandé par le CNPR sur les contraintes psychosociales au travail."
        },
        {
          id: "rhumato_b4_autoevaluation_nordic",
          label: "Auto-évaluation avec Nordic Musculoskeletal Questionnaire",
          hint: "Questionnaire recommandé par le CNPR, pertinent pour la santé musculo-squelettique du professionnel."
        },
        {
          id: "rhumato_b4_autoevaluation_pss",
          label: "Auto-évaluation avec Perceived Stress Scale (PSS)",
          hint: "Questionnaire recommandé par le CNPR pour l’évaluation du stress perçu."
        },
        {
          id: "rhumato_b4_groupes_pairs",
          label: "Participation à des groupes d’échange et d’analyse entre pairs",
          hint: "Action dédiée à la santé personnelle du médecin."
        },
        {
          id: "rhumato_b4_risques_professionnels",
          label: "Action de gestion des risques professionnels",
          hint: "Exemples de thèmes : santé psychique et physique, ergonomie au travail, radioprotection, prévention et gestion des risques psychosociaux, comité de vie professionnelle santé au travail, santé environnementale et éco-soins."
        },
        {
          id: "rhumato_b4_prevention_vaccins",
          label: "Suivi de la tenue à jour de ses vaccinations personnelles",
          hint: "Action de prévention en santé personnelle prévue dans la liste actualisée du bloc 4."
        },
        {
          id: "rhumato_b4_prevention_depistages",
          label: "Participation aux dépistages organisés selon sa situation personnelle",
          hint: "Ex. dépistages organisés des cancers selon la situation de santé du professionnel."
        },
        {
          id: "rhumato_b4_prevention_rps",
          label: "Prévention et gestion des risques psycho-sociaux",
          hint: "Action de prévention en santé personnelle reconnue dans l’annexe 11."
        },
        {
          id: "rhumato_b4_prevention_sport",
          label: "Activité sportive régulière",
          hint: "Action explicitement listée en prévention santé personnelle."
        },
        {
          id: "rhumato_b4_prevention_culture",
          label: "Activité culturelle régulière en tant qu’acteur",
          hint: "Action explicitement listée en prévention santé personnelle."
        },
        {
          id: "rhumato_b4_prevention_caritatif",
          label: "Participation à une activité caritative ou de coopération",
          hint: "Action listée au titre de la prévention en santé personnelle."
        },
        {
          id: "rhumato_b4_medecin_traitant",
          label: "Organisation de son suivi de santé personnel",
          hint: "Démarche cohérente avec le bloc 4 : médecin traitant, suivi de santé, prise en compte de son état de santé dans son exercice."
        },
        {
          id: "rhumato_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action conforme à une fiche méthode HAS ou aux critères d’éligibilité de la FSM, validée a priori ou a posteriori par le CNP."
        }
      ]
    }
  ]
}

	  
    ]
  });
})();

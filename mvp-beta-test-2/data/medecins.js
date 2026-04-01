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
	  //anesthesie
	  {
  id: "anesthesie-reanimation",
  label: "Anesthésiste-réanimateur",
  fullTitle: "Certification Périodique de l’Anesthésiste-Réanimateur",
  subtitle: "Spécialité : anesthésie-réanimation",
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
      validationMode: "compound",
      ruleText: "Validation : 2 actions DPC/équivalentes + 1 autre action scientifique.",
      requirements: {
        dpcMin: 2,
        extraMin: 1
      },
      allReferentialActions: [
        "Action DPC en anesthésie-réanimation",
        "Formation scientifique spécialisée",
        "Congrès national ou international",
        "Formation certifiante (DU/DIU)",
        "Enseignement universitaire",
        "Recherche clinique",
        "Publication scientifique",
        "Simulation haute fidélité",
        "Action hors liste validée"
      ],
      actions: [
        { id: "ar_b1_dpc1", label: "Action DPC n°1", group: "dpc" },
        { id: "ar_b1_dpc2", label: "Action DPC n°2", group: "dpc" },
        { id: "ar_b1_congres", label: "Congrès ou journée scientifique", group: "extra" },
        { id: "ar_b1_simulation", label: "Simulation haute fidélité", group: "extra" },
        { id: "ar_b1_enseignement", label: "Enseignement / formation", group: "extra" },
        { id: "ar_b1_recherche", label: "Participation à une étude / recherche", group: "extra" }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité et sécurité",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "2 actions différentes minimum.",
      requirements: { min: 2 },
      allReferentialActions: [
        "RMM",
        "CREX",
        "Audit clinique",
        "Gestion des risques anesthésiques",
        "Protocoles",
        "Registre"
      ],
      actions: [
        { id: "ar_b2_rmm", label: "RMM / CREX" },
        { id: "ar_b2_audit", label: "Audit clinique" },
        { id: "ar_b2_risques", label: "Gestion des risques anesthésiques" },
        { id: "ar_b2_protocoles", label: "Élaboration de protocoles" },
        { id: "ar_b2_registre", label: "Participation à un registre" }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation patient",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "2 actions différentes minimum.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Information patient",
        "Dispositif d’annonce",
        "Enquête satisfaction",
        "Formation communication",
        "Relation pré-opératoire"
      ],
      actions: [
        { id: "ar_b3_info", label: "Information et consentement patient" },
        { id: "ar_b3_annonce", label: "Dispositif d’annonce" },
        { id: "ar_b3_satisfaction", label: "Enquête patient" },
        { id: "ar_b3_formation", label: "Formation communication" }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé du pro",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "2 actions différentes minimum.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Suivi médical",
        "Prévention burn-out",
        "Sport",
        "Groupes de pairs",
        "Gestion du stress"
      ],
      actions: [
        { id: "ar_b4_suivi", label: "Suivi médical" },
        { id: "ar_b4_stress", label: "Gestion du stress" },
        { id: "ar_b4_sport", label: "Activité physique" },
        { id: "ar_b4_pairs", label: "Groupe de pairs" }
      ]
    }
  ]
},
//anesthesie
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
      ruleText: "3 actions différentes minimum.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC dermatologie",
        "Congrès",
        "Formation certifiante",
        "Recherche",
        "Publication",
        "Enseignement",
        "Groupes experts"
      ],
      actions: [
        { id: "derm_b1_dpc", label: "Action DPC" },
        { id: "derm_b1_congres", label: "Congrès dermatologie" },
        { id: "derm_b1_formation", label: "Formation spécialisée" },
        { id: "derm_b1_recherche", label: "Recherche clinique" },
        { id: "derm_b1_publication", label: "Publication scientifique" }
      ]
    },
    {
      id: "bloc2",
      label: "Bloc 2",
      shortLabel: "Qualité des soins",
      colorClass: "bloc2",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "2 actions différentes minimum.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Audit",
        "Registre",
        "EPP",
        "Protocoles",
        "RCP"
      ],
      actions: [
        { id: "derm_b2_audit", label: "Audit clinique" },
        { id: "derm_b2_epp", label: "EPP / analyse de pratiques" },
        { id: "derm_b2_registre", label: "Registre dermatologique" },
        { id: "derm_b2_rcp", label: "RCP" }
      ]
    },
    {
      id: "bloc3",
      label: "Bloc 3",
      shortLabel: "Relation patient",
      colorClass: "bloc3",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "2 actions différentes minimum.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Éducation thérapeutique",
        "Information patient",
        "Association patients",
        "PREMs"
      ],
      actions: [
        { id: "derm_b3_edu", label: "Éducation thérapeutique" },
        { id: "derm_b3_info", label: "Information patient" },
        { id: "derm_b3_asso", label: "Association patients" },
        { id: "derm_b3_prems", label: "Enquête PREMs" }
      ]
    },
    {
      id: "bloc4",
      label: "Bloc 4",
      shortLabel: "Santé du pro",
      colorClass: "bloc4",
      openByDefault: false,
      validationMode: "minimumDistinct",
      ruleText: "2 actions différentes minimum.",
      requirements: { min: 2 },
      allReferentialActions: [
        "Suivi médical",
        "Sport",
        "Prévention",
        "Groupes de pairs"
      ],
      actions: [
        { id: "derm_b4_suivi", label: "Suivi médical" },
        { id: "derm_b4_sport", label: "Activité physique" },
        { id: "derm_b4_prevention", label: "Prévention santé" },
        { id: "derm_b4_pairs", label: "Groupes de pairs" }
      ]
    }
  ]
},
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
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC endocrinologie",
        "Congrès de spécialité",
        "Formation spécialisée",
        "Formation diplômante",
        "Enseignement",
        "Recherche",
        "Publication",
        "Action hors liste validée"
      ],
      actions: [
        { id: "endo_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "endo_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "endo_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "endo_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "endo_b1_recherche", label: "Activité de recherche", hint: "Participation à une étude ou projet." },
        { id: "endo_b1_publication", label: "Publication scientifique", hint: "Article ou contribution scientifique." }
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
        "EPP",
        "Audit clinique",
        "RCP",
        "Registre",
        "Protocoles",
        "Gestion des risques"
      ],
      actions: [
        { id: "endo_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "endo_b2_audit", label: "Audit clinique", hint: "Audit selon une méthode reconnue." },
        { id: "endo_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "endo_b2_registre", label: "Participation à un registre", hint: "Contribution à un registre." },
        { id: "endo_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
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
        "Éducation thérapeutique",
        "Formation relation patient",
        "Association de patients",
        "Enquête satisfaction",
        "Programme patient"
      ],
      actions: [
        { id: "endo_b3_etp", label: "Éducation thérapeutique", hint: "Programme ou participation active." },
        { id: "endo_b3_relation", label: "Formation relation patient", hint: "Communication, annonce, accompagnement." },
        { id: "endo_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." },
        { id: "endo_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient." }
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
        "Groupes de pairs"
      ],
      actions: [
        { id: "endo_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "endo_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "endo_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "endo_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
},
{
  id: "gynecologie-obstetrique-gynecologie-medicale",
  label: "Gynécologue",
  fullTitle: "Certification Périodique du Gynécologue",
  subtitle: "Spécialité : gynécologie-obstétrique et gynécologie médicale",
  icon: "🤰",
  theme: {
    primary: "#be185d",
    primary2: "#9d174d",
    accent: "#f472b6"
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
        "DPC gynécologie",
        "Congrès de spécialité",
        "Formation certifiante",
        "Simulation",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "gyne_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "gyne_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée thématique." },
        { id: "gyne_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "gyne_b1_simulation", label: "Simulation / atelier pratique", hint: "Action de formation pratique." },
        { id: "gyne_b1_recherche", label: "Activité de recherche", hint: "Projet, étude ou protocole." },
        { id: "gyne_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
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
        "RMM",
        "Audit clinique",
        "RCP",
        "Protocoles",
        "Gestion des risques",
        "Registre"
      ],
      actions: [
        { id: "gyne_b2_rmm", label: "RMM / revue qualité", hint: "Participation à une démarche qualité." },
        { id: "gyne_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "gyne_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "gyne_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." },
        { id: "gyne_b2_registre", label: "Participation à un registre", hint: "Contribution à un registre." }
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
        "Association de patientes",
        "Éducation thérapeutique",
        "Enquête satisfaction"
      ],
      actions: [
        { id: "gyne_b3_relation", label: "Formation relation patient", hint: "Communication et accompagnement." },
        { id: "gyne_b3_annonce", label: "Dispositif d’annonce", hint: "Annonce et accompagnement." },
        { id: "gyne_b3_asso", label: "Action avec association de patientes", hint: "Association d’usagers ou de patientes." },
        { id: "gyne_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patiente." }
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
        { id: "gyne_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "gyne_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "gyne_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "gyne_b4_pairs", label: "Groupe de pairs", hint: "Partage entre confrères." }
      ]
    }
  ]
},
{
  id: "hepato-gastro-enterologie",
  label: "Hépato-gastro-entérologue",
  fullTitle: "Certification Périodique de l’Hépato-gastro-entérologue",
  subtitle: "Spécialité : hépato-gastro-entérologie",
  icon: "🫃",
  theme: {
    primary: "#92400e",
    primary2: "#78350f",
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
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC HGE",
        "Congrès HGE",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "hge_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "hge_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "hge_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "hge_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "hge_b1_recherche", label: "Activité de recherche", hint: "Étude ou protocole." },
        { id: "hge_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
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
        "RMM",
        "Audit clinique",
        "RCP",
        "Registre",
        "Gestion des risques",
        "Protocoles"
      ],
      actions: [
        { id: "hge_b2_rmm", label: "RMM / revue qualité", hint: "Participation à une revue structurée." },
        { id: "hge_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "hge_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "hge_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "hge_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
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
        "Éducation thérapeutique",
        "Association de patients",
        "Enquête satisfaction"
      ],
      actions: [
        { id: "hge_b3_relation", label: "Formation relation patient", hint: "Communication et accompagnement." },
        { id: "hge_b3_annonce", label: "Dispositif d’annonce", hint: "Annonce diagnostique ou dommage associé aux soins." },
        { id: "hge_b3_etp", label: "Éducation thérapeutique", hint: "Programme patient ou participation." },
        { id: "hge_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." }
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
        { id: "hge_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "hge_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "hge_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "hge_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
},
{
  id: "medecine-interne-immunologie-clinique",
  label: "Médecin interniste",
  fullTitle: "Certification Périodique du Médecin Interniste",
  subtitle: "Spécialité : médecine interne et immunologie clinique",
  icon: "🧬",
  theme: {
    primary: "#4338ca",
    primary2: "#3730a3",
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
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC médecine interne",
        "Congrès de spécialité",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "miic_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "miic_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "miic_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "miic_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "miic_b1_recherche", label: "Activité de recherche", hint: "Projet ou étude." },
        { id: "miic_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
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
        { id: "miic_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "miic_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "miic_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "miic_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "miic_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
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
        { id: "miic_b3_relation", label: "Formation relation patient", hint: "Communication et accompagnement." },
        { id: "miic_b3_annonce", label: "Dispositif d’annonce", hint: "Annonce et accompagnement." },
        { id: "miic_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." },
        { id: "miic_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient." }
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
        { id: "miic_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "miic_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "miic_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "miic_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
},
{
  id: "nephrologie",
  label: "Néphrologue",
  fullTitle: "Certification Périodique du Néphrologue",
  subtitle: "Spécialité : néphrologie",
  icon: "🫘",
  theme: {
    primary: "#0f766e",
    primary2: "#14532d",
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
      ruleText: "Prototype : 3 actions différentes minimum dans ce bloc.",
      requirements: { min: 3 },
      allReferentialActions: [
        "DPC néphrologie",
        "Congrès de spécialité",
        "Formation spécialisée",
        "DU / DIU",
        "Recherche",
        "Publication"
      ],
      actions: [
        { id: "nephro_b1_dpc", label: "Action DPC", hint: "Attestation de participation." },
        { id: "nephro_b1_congres", label: "Congrès de spécialité", hint: "Congrès ou journée scientifique." },
        { id: "nephro_b1_formation", label: "Formation spécialisée", hint: "Formation scientifique ou professionnelle." },
        { id: "nephro_b1_diplome", label: "Formation diplômante", hint: "DU, DIU ou équivalent." },
        { id: "nephro_b1_recherche", label: "Activité de recherche", hint: "Projet ou étude." },
        { id: "nephro_b1_publication", label: "Publication scientifique", hint: "Article ou contribution." }
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
        { id: "nephro_b2_audit", label: "Audit clinique", hint: "Audit structuré." },
        { id: "nephro_b2_epp", label: "EPP / analyse de pratiques", hint: "Évaluation des pratiques." },
        { id: "nephro_b2_rcp", label: "RCP", hint: "Réunion de concertation pluridisciplinaire." },
        { id: "nephro_b2_registre", label: "Participation à un registre", hint: "Contribution active." },
        { id: "nephro_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration ou mise à jour." }
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
        { id: "nephro_b3_relation", label: "Formation relation patient", hint: "Communication et accompagnement." },
        { id: "nephro_b3_etp", label: "Éducation thérapeutique", hint: "Programme patient ou participation." },
        { id: "nephro_b3_asso", label: "Action avec association de patients", hint: "Association d’usagers ou de patients." },
        { id: "nephro_b3_satisfaction", label: "Enquête satisfaction / PREMs", hint: "Mesure de l’expérience patient." }
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
        { id: "nephro_b4_suivi", label: "Suivi médical", hint: "Suivi personnel / médecin traitant." },
        { id: "nephro_b4_prevention", label: "Prévention santé", hint: "Action de prévention ou auto-évaluation." },
        { id: "nephro_b4_sport", label: "Activité physique", hint: "Pratique régulière." },
        { id: "nephro_b4_pairs", label: "Groupe de pairs", hint: "Échange entre confrères." }
      ]
    }
  ]
},
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
(function () {
  "use strict";

  if (!window.CERTIFICATION_DATA || !Array.isArray(window.CERTIFICATION_DATA.professions)) {
    console.error("CERTIFICATION_DATA doit être initialisé avant de charger dentistes.js");
    return;
  }

  window.CERTIFICATION_DATA.professions.push({
    id: "dentistes",
    label: "Chirurgien-dentiste",
    profiles: [
      {
  id: "chirurgien-dentiste",
  label: "Chirurgien-dentiste",
  fullTitle: "Certification Périodique du Chirurgien-dentiste",
  subtitle: "Profession : chirurgien-dentiste",
  icon: "🦷",
  theme: {
    primary: "#0f766e",
    primary2: "#115e59",
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
      ruleText: "Validation chirurgien-dentiste : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation continue validée par l’ANDPC d’une durée minimale de 6 heures",
        "Action de formation continue d’une durée minimale de 6 heures",
        "Participation à une journée, colloque ou conférence à caractère scientifique ou professionnel non financé par les industries de santé, d’une durée minimale de 6 heures",
        "Participation à un programme labellisé de simulation, serious game ou réalité virtuelle",
        "Formation universitaire diplômante ou certifiante validée par la Commission d’enseignement et des titres du Conseil national de l’Ordre",
        "Maîtrise de stage universitaire",
        "Travaux d’expertise institutionnelle (CNP, HAS, ANSM, ANS ou autres agences intervenant dans le domaine de la santé)",
        "Activités de recherche clinique effectuées dans le cadre d’une structure de recherche ou d’une université",
        "Participation à l’élaboration de recommandations professionnelles (HAS, CNP, société savante)",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "dent_b1_dpc",
          label: "Action de formation continue validée par l’ANDPC",
          hint: "Durée minimale de 6 heures ; labellisation de fait ; élément de preuve : attestation de participation."
        },
        {
          id: "dent_b1_formation_continue",
          label: "Action de formation continue",
          hint: "Durée minimale de 6 heures ; labellisation à demander au CNP ; élément de preuve : attestation de participation."
        },
        {
          id: "dent_b1_journee_colloque",
          label: "Participation à une journée, colloque ou conférence scientifique / professionnelle",
          hint: "Durée minimale de 6 heures ; non financé par les industries de santé ; labellisation à demander au CNP."
        },
        {
          id: "dent_b1_simulation",
          label: "Programme labellisé de simulation, serious game ou réalité virtuelle",
          hint: "Labellisation à demander au CNP ; élément de preuve : attestation de participation."
        },
        {
          id: "dent_b1_diplome_universitaire",
          label: "Formation universitaire diplômante ou certifiante validée par l’Ordre",
          hint: "Labellisation de fait ; élément de preuve : diplôme obtenu."
        },
        {
          id: "dent_b1_msu",
          label: "Maîtrise de stage universitaire",
          hint: "Labellisation de fait ; élément de preuve : attestation de réalisation."
        },
        {
          id: "dent_b1_expertise",
          label: "Travaux d’expertise institutionnelle",
          hint: "CNP, HAS, ANSM, ANS ou autres agences intervenant dans le domaine de la santé ; labellisation de fait."
        },
        {
          id: "dent_b1_recherche",
          label: "Activités de recherche clinique",
          hint: "Effectuées dans le cadre d’une structure de recherche ou d’une université ; labellisation à demander au CNP ; élément de preuve : attestation de participation."
        },
        {
          id: "dent_b1_recommandations",
          label: "Participation à l’élaboration de recommandations professionnelles",
          hint: "HAS, CNP ou société savante ; labellisation de fait ; élément de preuve : attestation de participation."
        },
        {
          id: "dent_b1_infections_antibioresistance",
          label: "Formation sur la prévention des infections et de l’antibiorésistance",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_douleur",
          label: "Formation sur l’évaluation, le traitement et la prise en charge de la douleur",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_cancers",
          label: "Formation sur la prévention, le dépistage, le diagnostic et la prise en charge des cancers",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_violences_adultes",
          label: "Formation sur le repérage et la conduite à tenir face aux violences faites aux adultes",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_violences_enfants",
          label: "Formation sur le repérage et la conduite à tenir face aux violences faites aux enfants",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_handicap",
          label: "Formation sur la prise en charge des patients en situation de handicap",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_sse",
          label: "Formation à la préparation aux situations sanitaires exceptionnelles",
          hint: "Préparation et organisation coordonnée, civile et militaire, de la réponse aux SSE."
        },
        {
          id: "dent_b1_risques_actes_parcours",
          label: "Formation sur la maîtrise des risques associés aux actes et aux parcours de soins",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_numerique_sante",
          label: "Formation à l’intégration du numérique en santé à la pratique",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_nutrition",
          label: "Formation au repérage et à la prise en charge des troubles nutritionnels",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_addictions",
          label: "Formation au repérage, à l’accompagnement et à la prise en charge des pratiques addictives",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_bon_usage_medicaments",
          label: "Formation au bon usage des médicaments",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_examens_complementaires",
          label: "Formation à la juste prescription des examens complémentaires",
          hint: "Avec amélioration de leur interprétation."
        },
        {
          id: "dent_b1_actes_chirurgicaux",
          label: "Formation à l’amélioration de la pertinence des actes chirurgicaux",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_dentisterie_preventive",
          label: "Formation en dentisterie préventive, endodontique et restauratrice contemporaine",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_edentement",
          label: "Formation sur la prise en charge de l’édentement",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_numerique_odontologie",
          label: "Formation à la maîtrise du numérique et de l’odontologie",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_patients_risque",
          label: "Formation sur la prise en charge des patients à risques médicaux et/ou vulnérables au cabinet dentaire",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_muqueuse_osseuses",
          label: "Formation sur les pathologies muqueuses et osseuses buccodentaires",
          hint: "Diagnostic, prévention, traitements et conséquences."
        },
        {
          id: "dent_b1_saos",
          label: "Formation à la prise en charge odontologique du syndrome d’apnées obstructives du sommeil",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_urgences",
          label: "Formation à la maîtrise des gestes et soins d’urgence",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_radioprotection",
          label: "Formation à la maîtrise des règles de radioprotection des patients",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_deficiences_masticatoires",
          label: "Formation au dépistage des déficiences et incapacités masticatoires",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_troubles_neurocognitifs",
          label: "Formation aux pathologies bucco-dentaires des personnes âgées avec troubles neuro-cognitifs",
          hint: "Maladie d’Alzheimer et apparentées."
        },
        {
          id: "dent_b1_post_irradiation",
          label: "Formation à la prise en charge odontologique après irradiation cervico-faciale",
          hint: "En cancérologie."
        },
        {
          id: "dent_b1_orthodontie_reevaluation",
          label: "Formation à la réévaluation des traitements orthodontiques",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_cbct",
          label: "Formation à la juste prescription du Cone-Beam CT (CBCT)",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_pathologies_muqueuse",
          label: "Formation à la prise en charge des pathologies de la muqueuse buccale",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_pathologies_osseuses",
          label: "Formation à la prise en charge des pathologies osseuses maxillo-mandibulaires",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_chirurgico_orthodontique",
          label: "Formation à la maîtrise des techniques chirurgico-orthodontiques",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_traumatologie_maxillo",
          label: "Formation à la prise en charge de la traumatologie maxillo-mandibulaire",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_douleurs_orofaciales",
          label: "Formation au diagnostic et à la prise en charge des douleurs oro-faciales",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_atm",
          label: "Formation au diagnostic et à la prise en charge des pathologies de l’ATM",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_salivaires",
          label: "Formation au diagnostic et à la prise en charge des pathologies salivaires",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_anesthesies",
          label: "Formation à la maîtrise des anesthésies",
          hint: "Anesthésie locale, loco-régionale, sédation et anesthésie générale."
        },
        {
          id: "dent_b1_dysharmonies_occlusion",
          label: "Formation au diagnostic et à la prise en charge des dysharmonies dento-maxillo-faciales",
          hint: "Positionnement dento-maxillaire et problèmes d’occlusion."
        },
        {
          id: "dent_b1_contention_odf",
          label: "Formation à la maîtrise des indications et techniques de contention en ODF",
          hint: "Orientation scientifique explicitement listée dans l’axe 1."
        },
        {
          id: "dent_b1_action_libre",
          label: "Action libre validée par le CNP",
          hint: "Labellisation à demander au CNP."
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
      ruleText: "Validation chirurgien-dentiste : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action DPC d’évaluation des pratiques professionnelles ou programme intégré validée par l’ANDPC",
        "Action d’évaluation des pratiques professionnelles et de gestion des risques",
        "Action de formation de type travaux pratiques d’une durée minimale de 3 heures",
        "Participation à des Réunions de Coordination Pluridisciplinaire",
        "Contribution pendant au moins 1 an à un registre / observatoire / base de données porté par la profession",
        "Recherche clinique : participation à des études cliniques ou épidémiologiques",
        "Participation à l’élaboration de recommandations de bonnes pratiques par la HAS, le CNP ou l’ADF",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "dent_b2_dpc_epp",
          label: "Action DPC d’évaluation des pratiques professionnelles ou programme intégré validée par l’ANDPC",
          hint: "Labellisation de fait ; élément de preuve : attestation de participation."
        },
        {
          id: "dent_b2_epp_gdr",
          label: "Action d’évaluation des pratiques professionnelles et de gestion des risques",
          hint: "Labellisation à demander au CNP ; élément de preuve : attestation de participation."
        },
        {
          id: "dent_b2_travaux_pratiques",
          label: "Action de formation de type travaux pratiques",
          hint: "Durée minimale de 3 heures ; labellisation à demander au CNP."
        },
        {
          id: "dent_b2_rcp",
          label: "Participation à des Réunions de Coordination Pluridisciplinaire",
          hint: "Au moins 4 réunions pendant 1 an ; labellisation de fait ; élément de preuve : attestation de participation."
        },
        {
          id: "dent_b2_registre",
          label: "Contribution à un registre / observatoire / base de données porté par la profession",
          hint: "Contribution pendant au moins 1 an ; labellisation à demander au CNP."
        },
        {
          id: "dent_b2_recherche_clinique",
          label: "Recherche clinique : participation à des études cliniques ou épidémiologiques",
          hint: "Labellisation à demander au CNP ; élément de preuve : attestation de participation."
        },
        {
          id: "dent_b2_recommandations",
          label: "Participation à l’élaboration de recommandations de bonnes pratiques",
          hint: "HAS, CNP ou ADF ; labellisation de fait."
        },
        {
          id: "dent_b2_infections_antibioresistance",
          label: "Amélioration de la prévention des infections et de l’antibiorésistance",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_douleur",
          label: "Amélioration de l’évaluation, du traitement et de la prise en charge de la douleur",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_cancers",
          label: "Amélioration de la prévention, du dépistage, du diagnostic et de la prise en charge des cancers",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_violences_adultes",
          label: "Repérage et conduite à tenir face aux violences faites aux adultes",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_violences_enfants",
          label: "Repérage et conduite à tenir face aux violences faites aux enfants",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_handicap",
          label: "Prise en compte des spécificités de prise en charge des patients en situation de handicap",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_risques_actes_parcours",
          label: "Maîtrise des risques associés aux actes et aux parcours de soins",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_nutrition",
          label: "Repérage et prise en charge des troubles nutritionnels",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_addictions",
          label: "Repérage, accompagnement et prise en charge des pratiques addictives",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_bon_usage_medicaments",
          label: "Bon usage des médicaments",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_examens_complementaires",
          label: "Juste prescription des examens complémentaires et amélioration de leurs interprétations",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_dentisterie_preventive",
          label: "Amélioration de la prise en charge en dentisterie préventive, endodontique et restauratrice contemporaine",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_edentement",
          label: "Amélioration de la prise en charge de l’édentement",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_numerique_odontologie",
          label: "Maîtrise du numérique et odontologie",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_patients_risque",
          label: "Prise en charge des patients à risques médicaux et/ou vulnérables au cabinet dentaire",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_muqueuse_osseuses",
          label: "Amélioration du diagnostic, de la prévention et des traitements des pathologies muqueuses et osseuses buccodentaires",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_saos",
          label: "Prise en charge odontologique du syndrome d’apnées obstructives du sommeil",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_urgences",
          label: "Maîtrise des gestes et soins d’urgence",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_radioprotection",
          label: "Maîtrise des règles de radioprotection des patients",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_deficiences_masticatoires",
          label: "Amélioration du dépistage des déficiences et incapacités masticatoires",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_troubles_neurocognitifs",
          label: "Prévention et traitement des pathologies bucco-dentaires des personnes âgées avec troubles neuro-cognitifs",
          hint: "Maladie d’Alzheimer et apparentée."
        },
        {
          id: "dent_b2_post_irradiation",
          label: "Prise en charge odontologique des patients après irradiation cervico-faciale en cancérologie",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_orthodontie_reevaluation",
          label: "Amélioration de la réévaluation des traitements orthodontiques",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_cbct",
          label: "Amélioration de la juste prescription du Cone-Beam CT (CBCT)",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_pathologies_muqueuse",
          label: "Amélioration de la prise en charge des pathologies de la muqueuse buccale",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_pathologies_osseuses",
          label: "Amélioration de la prise en charge des pathologies osseuses maxillo-mandibulaires",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_traumatologie_maxillo",
          label: "Amélioration de la prise en charge de la traumatologie maxillo-mandibulaire",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_douleurs_orofaciales",
          label: "Amélioration du diagnostic et de la prise en charge des douleurs oro-faciales",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_atm",
          label: "Amélioration du diagnostic et de la prise en charge des pathologies de l’ATM",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_salivaires",
          label: "Amélioration du diagnostic et de la prise en charge des pathologies salivaires",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_anesthesies",
          label: "Amélioration de la maîtrise des anesthésies",
          hint: "Anesthésie locale, loco-régionale, sédation et anesthésie générale."
        },
        {
          id: "dent_b2_dysharmonies_occlusion",
          label: "Amélioration du diagnostic et de la prise en charge des dysharmonies dento-maxillo-faciales",
          hint: "Problèmes de positionnement dento-maxillaires et d’occlusion."
        },
        {
          id: "dent_b2_contention_odf",
          label: "Maîtrise des indications et techniques de contention en ODF",
          hint: "Orientation scientifique explicitement listée dans l’axe 2."
        },
        {
          id: "dent_b2_action_libre",
          label: "Action libre validée par le CNP",
          hint: "Labellisation à demander au CNP."
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
      ruleText: "Validation chirurgien-dentiste : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation labellisée par le CNP d’une durée minimale de 6 heures",
        "S’engager dans une démarche PROMs et/ou PREMs",
        "Participer à une action réalisée dans le cadre d’une association d’usagers du système de santé et/ou dans la mise en place d’un programme associant des patients",
        "Participer dans le cadre d’une association, d’une structure ou d’un dispositif d’exercice coordonné à une action de prévention / éducation thérapeutique / médiation / amélioration de parcours",
        "Faciliter l’accès aux soins aux personnes en situation de handicap",
        "S’assurer de la bonne information du patient/usager à la fois sur ses droits, sa situation et sa sécurité",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "dent_b3_formation_relation",
          label: "Action de formation labellisée par le CNP sur la relation avec les patients",
          hint: "Durée minimale de 6 heures. Thèmes listés : accompagnement du patient/usager et de ses proches, relation thérapeutique, communication interpersonnelle, relation d’aide, annonce au patient et à ses proches, adaptation aux publics spécifiques, repérage et prise en charge des patients victimes de violences, traitement de la douleur, décision partagée, éducation thérapeutique, accompagnement au deuil, droits des patients/usagers, soins palliatifs, fin de vie, bientraitance, prévention de la maltraitance, prise en compte de l’expérience patient."
        },
        {
          id: "dent_b3_proms_prems",
          label: "Démarche PROMs et/ou PREMs",
          hint: "Réaliser un cycle d’étude sur au moins une catégorie de patient/usager sur la perception de la qualité des résultats de soins et/ou de l’expérience vécue ; fournir une synthèse et un plan d’action."
        },
        {
          id: "dent_b3_association_usagers",
          label: "Action réalisée dans le cadre d’une association d’usagers ou d’un programme associant des patients",
          hint: "Interventions lors de journées d’associations, fonctions exercées, actions de sensibilisation, contribution à des fiches d’information, enquêtes de satisfaction, action de conciliation avec les patients dans le cadre d’une plainte."
        },
        {
          id: "dent_b3_prevention_etp_mediation",
          label: "Action de prévention / éducation thérapeutique / médiation / amélioration de parcours",
          hint: "Dans une association, une structure ou un dispositif d’exercice coordonné : CPTS, MSP, ESP, CDS, ESCAP, etc."
        },
        {
          id: "dent_b3_handicap",
          label: "Faciliter l’accès aux soins aux personnes en situation de handicap",
          hint: "Handicap visible ou non ; élément de preuve : déclaratif."
        },
        {
          id: "dent_b3_information_patient",
          label: "S’assurer de la bonne information du patient/usager",
          hint: "Informer sur ses droits, sa situation et sa sécurité ; élément de preuve : modèle de fiche d’information distribuée."
        },
        {
          id: "dent_b3_action_libre",
          label: "Action libre validée par le CNP",
          hint: "Action proposée au CNP dans le cadre de l’axe 3."
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
      ruleText: "Validation chirurgien-dentiste : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation labellisée par le CNP d’une durée minimale de 6 heures portant sur la santé personnelle",
        "Auto-évaluation de son état de santé et de son suivi",
        "Avoir un médecin traitant et l’avoir consulté pendant la période de certification",
        "Consulter la médecine du travail",
        "Maintenir son calendrier vaccinal à jour",
        "Suivre les recommandations générales de dépistage selon son âge et son sexe",
        "Pratiquer une activité physique/sportive régulière sur la période de certification",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "dent_b4_formation_sante",
          label: "Action de formation labellisée par le CNP sur la santé personnelle",
          hint: "Durée minimale de 6 heures. Thèmes listés : gestion des déchets, utilisation et gestion des produits à risque, gestion des AES, prévention des violences sexistes et sexuelles, prévention des violences aux soignants, ergonomie et sécurité physique, risques professionnels d’exposition, gestion de la charge psychologique, prévention de la violence entre soignants et/ou étudiants, analyse des pratiques."
        },
        {
          id: "dent_b4_autoevaluation",
          label: "Auto-évaluation de son état de santé et de son suivi",
          hint: "Notamment santé mentale et rapport aux substances addictives consommées ; au moins 1 fois par an ; élément de preuve : déclaratif."
        },
        {
          id: "dent_b4_medecin_traitant",
          label: "Avoir un médecin traitant et l’avoir consulté pendant la période",
          hint: "Hors auto-déclaration et parent au 1er degré ; élément de preuve : déclaratif."
        },
        {
          id: "dent_b4_medecine_travail",
          label: "Consulter la médecine du travail",
          hint: "Élément de preuve : attestation de visite."
        },
        {
          id: "dent_b4_vaccins",
          label: "Maintenir son calendrier vaccinal à jour",
          hint: "Élément de preuve : déclaratif."
        },
        {
          id: "dent_b4_depistages",
          label: "Suivre les recommandations générales de dépistage selon son âge et son sexe",
          hint: "Élément de preuve : déclaratif."
        },
        {
          id: "dent_b4_activite_physique",
          label: "Pratiquer une activité physique / sportive régulière",
          hint: "Sur la période de certification ; élément de preuve : déclaratif."
        },
        {
          id: "dent_b4_action_libre",
          label: "Action libre validée par le CNP",
          hint: "Action proposée au CNP dans le cadre de l’axe 4."
        }
      ]
    }
  ]
}
    ]
  });
})();

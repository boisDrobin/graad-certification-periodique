(function () {
  "use strict";

  if (!window.CERTIFICATION_DATA || !Array.isArray(window.CERTIFICATION_DATA.professions)) {
    console.error("CERTIFICATION_DATA doit être initialisé avant de charger infirmiers.js");
    return;
  }

  window.CERTIFICATION_DATA.professions.push({
    id: "infirmiers",
    label: "Infirmier",
    profiles: [
      {
  id: "infirmier-de",
  label: "Infirmier diplômé d’État",
  fullTitle: "Certification Périodique de l’Infirmier diplômé d’État",
  subtitle: "Profession : infirmier diplômé d’État généraliste (métier socle)",
  icon: "💉",
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
      ruleText: "Validation IDE : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation DPC",
        "Action de formation continue / renforcement des connaissances",
        "Participation à une ou plusieurs journées professionnelles",
        "Action de transmission des savoirs professionnels",
        "Travaux d’expertise professionnelle",
        "Action d’analyse des pratiques",
        "Action de gestion des risques",
        "Participation à un programme intégré proposé par un ODPC dans le cadre des orientations prioritaires",
        "Tests de Concordance de Scripts",
        "Simulation en santé",
        "Analyse de cas cliniques",
        "Action libre validée par le CNPI"
      ],
      actions: [
        {
          id: "ide_b1_formation_dpc",
          label: "Action de formation DPC",
          hint: "Action de formation relevant du DPC, dans le cadre des orientations prioritaires de la profession infirmière."
        },
        {
          id: "ide_b1_formation_continue",
          label: "Action de formation continue / renforcement des connaissances",
          hint: "Action visant l’actualisation et le renforcement des connaissances et compétences professionnelles."
        },
        {
          id: "ide_b1_journees_professionnelles",
          label: "Participation à une ou plusieurs journées professionnelles",
          hint: "Action explicitement listée dans les actions de formation de l’axe 1."
        },
        {
          id: "ide_b1_transmission_savoirs",
          label: "Action de transmission des savoirs professionnels",
          hint: "Transmission des savoirs professionnels à des pairs, étudiants ou autres professionnels."
        },
        {
          id: "ide_b1_expertise_professionnelle",
          label: "Travaux d’expertise professionnelle",
          hint: "Participation à des travaux d’expertise contribuant au développement professionnel infirmier."
        },
        {
          id: "ide_b1_analyse_pratiques",
          label: "Action d’analyse des pratiques",
          hint: "Participation à une ou plusieurs actions d’analyse de pratiques dans le cadre de l’axe 1."
        },
        {
          id: "ide_b1_gestion_risques",
          label: "Action de gestion des risques",
          hint: "Participation à une ou plusieurs actions de gestion des risques dans le cadre de l’axe 1."
        },
        {
          id: "ide_b1_programme_integre",
          label: "Programme intégré proposé par un ODPC",
          hint: "Participation à un programme intégré proposé par un ODPC dans le cadre des orientations prioritaires."
        },
        {
          id: "ide_b1_tcs",
          label: "Tests de Concordance de Scripts",
          hint: "Action explicitement listée comme modalité des programmes intégrés."
        },
        {
          id: "ide_b1_simulation",
          label: "Simulation en santé",
          hint: "Action explicitement listée comme modalité des programmes intégrés."
        },
        {
          id: "ide_b1_cas_cliniques",
          label: "Analyse de cas cliniques",
          hint: "Action explicitement listée comme modalité des programmes intégrés."
        },
        {
          id: "ide_b1_action_libre",
          label: "Action libre validée par le CNPI",
          hint: "Action ayant enrichi les connaissances et validée par le CNPI en appui du référentiel infirmier généraliste."
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
      ruleText: "Validation IDE : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de renforcement des connaissances et des acquis professionnels",
        "Élaboration et construction de l’exercice professionnel",
        "Organisation de l’exercice pluriprofessionnel",
        "Transmission des pratiques professionnelles",
        "Action d’analyse des pratiques",
        "Réunions cliniques d’analyse de pratique entre pairs et/ou interprofessionnelles",
        "Audit clinique",
        "Bilans de compétences / vignettes cliniques",
        "Réunions pluridisciplinaires (RCP)",
        "Élaboration de recommandations ou programmes d’EPP",
        "Participation à la recherche, publications, missions d’expertise",
        "Action de gestion des risques",
        "Participation aux RMM et/ou à un CREX",
        "Gestion des évènements porteurs de risque : identification, déclaration, analyse, actions correctives",
        "Suivi des indicateurs de qualité et sécurité des soins",
        "Participation à un réseau de vigilance",
        "Déclaration et gestion d’évènements porteurs de risques",
        "Participation à un comité d’établissement ou à une instance/entité qualité sécurité des soins",
        "Participation à un programme intégré proposé par un ODPC dans le cadre des orientations prioritaires",
        "Tests de Concordance de Scripts",
        "Simulation en santé",
        "Analyse de cas cliniques",
        "Action libre validée par le CNPI"
      ],
      actions: [
        {
          id: "ide_b2_renforcement_acquis",
          label: "Action de renforcement des connaissances et des acquis professionnels",
          hint: "Action explicitement listée dans la formation de l’axe 2."
        },
        {
          id: "ide_b2_construction_exercice",
          label: "Élaboration et construction de l’exercice professionnel",
          hint: "Action explicitement listée dans la formation de l’axe 2."
        },
        {
          id: "ide_b2_exercice_pluripro",
          label: "Organisation de l’exercice pluriprofessionnel",
          hint: "Implication dans l’organisation de l’exercice pluriprofessionnel."
        },
        {
          id: "ide_b2_transmission_pratiques",
          label: "Transmission des pratiques professionnelles",
          hint: "Transmission structurée des pratiques professionnelles."
        },
        {
          id: "ide_b2_analyse_pratiques",
          label: "Action d’analyse des pratiques",
          hint: "Participation à une ou plusieurs actions d’analyse de pratiques dans le cadre de l’axe 2."
        },
        {
          id: "ide_b2_gap_staff",
          label: "Réunions cliniques d’analyse de pratique entre pairs et/ou interprofessionnelles",
          hint: "Exemples : staffs d’une équipe médico-soignante, groupes d’analyse de pratiques selon la méthode HAS."
        },
        {
          id: "ide_b2_audit_clinique",
          label: "Audit clinique",
          hint: "Action structurée d’évaluation des pratiques explicitement listée dans les modalités de l’axe 2."
        },
        {
          id: "ide_b2_bilans_competences",
          label: "Bilans de compétences / vignettes cliniques",
          hint: "Modalité explicitement listée pour l’analyse des pratiques dans l’axe 2."
        },
        {
          id: "ide_b2_rcp",
          label: "Réunions pluridisciplinaires (RCP)",
          hint: "Modalité explicitement listée pour l’analyse des pratiques dans l’axe 2."
        },
        {
          id: "ide_b2_epp_recommandations",
          label: "Élaboration de recommandations ou programmes d’EPP",
          hint: "Action explicitement listée dans les modalités d’analyse des pratiques."
        },
        {
          id: "ide_b2_recherche_expertise",
          label: "Participation à la recherche, publications, missions d’expertise",
          hint: "Action explicitement listée comme modalité mobilisable dans l’axe 2."
        },
        {
          id: "ide_b2_gestion_risques",
          label: "Action de gestion des risques",
          hint: "Participation à une ou plusieurs actions de gestion des risques dans le cadre de l’axe 2."
        },
        {
          id: "ide_b2_rmm_crex",
          label: "Participation aux RMM et/ou à un CREX",
          hint: "Modalité explicitement listée dans la gestion des risques de l’axe 2."
        },
        {
          id: "ide_b2_epr",
          label: "Gestion des évènements porteurs de risque",
          hint: "Identification, déclaration, analyse et actions correctives."
        },
        {
          id: "ide_b2_indicateurs_qss",
          label: "Suivi des indicateurs de qualité et sécurité des soins",
          hint: "Action explicitement listée dans la gestion des risques."
        },
        {
          id: "ide_b2_reseau_vigilance",
          label: "Participation à un réseau de vigilance",
          hint: "Action explicitement listée dans le référentiel infirmier."
        },
        {
          id: "ide_b2_declaration_epr",
          label: "Déclaration et gestion d’évènements porteurs de risques",
          hint: "Action explicitement citée dans les exemples du référentiel."
        },
        {
          id: "ide_b2_comite_qss",
          label: "Participation à un comité d’établissement ou à une instance qualité-sécurité des soins",
          hint: "Exemples cités : CLUD-SP, CLIN, CLAN, comité éthique, ou instance équivalente en exercice coordonné : CPTS, MSP, ESP, ESS, ESP CLAP, ESCAP, CDS, DAC."
        },
        {
          id: "ide_b2_programme_integre",
          label: "Programme intégré proposé par un ODPC",
          hint: "Action d’analyse clinique en lien avec le raisonnement professionnel."
        },
        {
          id: "ide_b2_tcs",
          label: "Tests de Concordance de Scripts",
          hint: "Modalité explicitement listée dans les programmes intégrés."
        },
        {
          id: "ide_b2_simulation",
          label: "Simulation en santé",
          hint: "Élaboration, participation, animation de mise en situation apprenante ; pratiques innovantes ; sessions de simulation haute-fidélité mono, inter et pluriprofessionnelle."
        },
        {
          id: "ide_b2_cas_cliniques",
          label: "Analyse de cas cliniques",
          hint: "Modalité explicitement listée dans les programmes intégrés de l’axe 2."
        },
        {
          id: "ide_b2_action_libre",
          label: "Action libre validée par le CNPI",
          hint: "Autre action ayant enrichi les pratiques et validée par le CNPI en appui du référentiel infirmier généraliste."
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
      ruleText: "Validation IDE : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation pour améliorer la relation avec la personne soignée et son entourage",
        "Action d’analyse des pratiques participant à l’amélioration de la relation avec les personnes soignées et leurs aidants",
        "Action de gestion des risques visant la prévention et l’amélioration continue de la relation avec les personnes soignées",
        "Participation à un programme intégré en lien avec le raisonnement professionnel",
        "Tests de Concordance de Scripts",
        "Simulation en santé",
        "Analyse de cas cliniques",
        "Action libre validée par le CNPI"
      ],
      actions: [
        {
          id: "ide_b3_formation_relation",
          label: "Action de formation pour améliorer la relation avec la personne soignée et son entourage",
          hint: "Action explicitement listée dans la partie formation de l’axe 3."
        },
        {
          id: "ide_b3_analyse_pratiques_relation",
          label: "Action d’analyse des pratiques participant à l’amélioration de la relation avec les personnes soignées et leurs aidants",
          hint: "Action explicitement listée dans l’axe 3."
        },
        {
          id: "ide_b3_gestion_risques_relation",
          label: "Action de gestion des risques visant la prévention et l’amélioration continue de la relation avec les personnes soignées",
          hint: "Action explicitement listée dans l’axe 3."
        },
        {
          id: "ide_b3_programme_integre",
          label: "Programme intégré en lien avec le raisonnement professionnel",
          hint: "Action d’analyse clinique en lien avec le raisonnement professionnel dans le cadre de l’axe 3."
        },
        {
          id: "ide_b3_tcs",
          label: "Tests de Concordance de Scripts",
          hint: "Modalité mobilisable dans le cadre des programmes intégrés de l’axe 3."
        },
        {
          id: "ide_b3_simulation",
          label: "Simulation en santé",
          hint: "Modalité mobilisable dans le cadre des programmes intégrés de l’axe 3."
        },
        {
          id: "ide_b3_cas_cliniques",
          label: "Analyse de cas cliniques",
          hint: "Modalité mobilisable dans le cadre des programmes intégrés de l’axe 3."
        },
        {
          id: "ide_b3_action_libre",
          label: "Action libre validée par le CNPI",
          hint: "Action ayant enrichi les relations avec les personnes soignées et/ou leur entourage."
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
      ruleText: "Validation IDE : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation pour prendre soin de soi",
        "Action d’analyse des pratiques selon la méthode HAS pour améliorer la santé personnelle",
        "Action de gestion des risques contribuant à la santé personnelle",
        "Participation à un programme intégré en lien avec la santé personnelle",
        "Tests de Concordance de Scripts",
        "Simulation en santé",
        "Analyse de cas cliniques",
        "Action libre validée par le CNPI"
      ],
      actions: [
        {
          id: "ide_b4_formation_sante",
          label: "Action de formation pour prendre soin de soi",
          hint: "Action explicitement listée dans la partie formation de l’axe 4."
        },
        {
          id: "ide_b4_analyse_pratiques_sante",
          label: "Action d’analyse des pratiques selon la méthode HAS pour améliorer la santé personnelle",
          hint: "Concerne la santé personnelle du professionnel infirmier et/ou celle de son équipe."
        },
        {
          id: "ide_b4_gestion_risques_sante",
          label: "Action de gestion des risques contribuant à la santé personnelle",
          hint: "Action explicitement listée dans l’axe 4, au bénéfice de sa propre santé ou de celle de son équipe."
        },
        {
          id: "ide_b4_programme_integre",
          label: "Programme intégré en lien avec la santé personnelle",
          hint: "Action d’analyse clinique en lien avec la santé personnelle dans le cadre de l’axe 4."
        },
        {
          id: "ide_b4_tcs",
          label: "Tests de Concordance de Scripts",
          hint: "Modalité mobilisable dans les programmes intégrés de l’axe 4."
        },
        {
          id: "ide_b4_simulation",
          label: "Simulation en santé",
          hint: "Modalité mobilisable dans les programmes intégrés de l’axe 4."
        },
        {
          id: "ide_b4_cas_cliniques",
          label: "Analyse de cas cliniques",
          hint: "Modalité mobilisable dans les programmes intégrés de l’axe 4."
        },
        {
          id: "ide_b4_action_libre",
          label: "Action libre validée par le CNPI",
          hint: "Action libre contribuant à la santé personnelle, validée par le CNPI en appui du référentiel infirmier généraliste."
        }
      ]
    }
  ]
},

     {
  id: "iade",
  label: "Infirmier anesthésiste diplômé d’État",
  fullTitle: "Certification Périodique de l’Infirmier anesthésiste diplômé d’État",
  subtitle: "Profession : IADE",
  icon: "💉",
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
      ruleText: "Parcours IADE : axe centré sur l’actualisation des connaissances et compétences. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation sur les thématiques cœur de métier IADE",
        "Programme labellisé de simulation HF, serious game, réalité virtuelle",
        "Session identifiée au sein d’un congrès national ou international",
        "Webinaire / podcast en lien avec l’exercice IADE",
        "Formation universitaire en lien avec les champs d’activités ouverts à l’exercice de l’IADE",
        "Activité de formation institutionnelle sur un thème ciblé en lien avec l’exercice IADE",
        "Communication orale dans un congrès",
        "Approfondissement du raisonnement clinique de l’IADE",
        "Pratique fondée sur les données probantes",
        "Approfondissement des compétences en recherche bibliographique",
        "Approfondissement des compétences en lecture critique d’articles scientifiques",
        "Actualisation des connaissances en gestion des voies aériennes",
        "Actualisation des connaissances en pharmacologie clinique",
        "Actualisation des connaissances en physiopathologie",
        "Actualisation des connaissances en équipements et technologies incluant le numérique en santé",
        "Approfondissement des compétences en leadership clinique",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "iade_b1_formation_thematique",
          label: "Action de formation sur les thématiques cœur de métier IADE",
          hint: "Formation en ligne/e-learning ou présentielle ; thèmes explicitement listés : gestion des voies aériennes, pharmacologie clinique, physiopathologie, équipements et technologies incluant le numérique en santé en anesthésie, réanimation, urgences et douleur."
        },
        {
          id: "iade_b1_simulation_hf",
          label: "Programme labellisé de simulation HF / serious game / réalité virtuelle",
          hint: "Participation à une simulation en santé ; action explicitement listée dans le tableau synoptique de l’axe 1."
        },
        {
          id: "iade_b1_congres",
          label: "Session identifiée au sein d’un congrès national ou international",
          hint: "Formation en ligne/e-learning ou présentielle dans le cadre d’un congrès national ou international."
        },
        {
          id: "iade_b1_webinaire_podcast",
          label: "Webinaire / podcast",
          hint: "Participation à une formation en ligne/e-learning organisée par une société savante ou une organisation professionnelle."
        },
        {
          id: "iade_b1_formation_universitaire",
          label: "Formation universitaire en lien avec les champs d’activités ouverts à l’exercice de l’IADE",
          hint: "Formation universitaire de type DU ou Master, validée en instance universitaire."
        },
        {
          id: "iade_b1_formation_institutionnelle",
          label: "Activité de formation institutionnelle sur un thème ciblé en lien avec l’exercice IADE",
          hint: "Conception, mise en œuvre et évaluation d’une activité de formation institutionnelle, ou contribution à sa mise en œuvre."
        },
        {
          id: "iade_b1_communication_congres",
          label: "Communication orale dans un congrès",
          hint: "Communication plénière ou communication parallèle sélectionnée par le comité scientifique."
        },
        {
          id: "iade_b1_raisonnement_clinique",
          label: "Approfondissement du raisonnement clinique de l’IADE",
          hint: "Objectif explicitement listé dans les attendus de l’axe 1."
        },
        {
          id: "iade_b1_ebn",
          label: "Pratique fondée sur les données probantes (EBN)",
          hint: "Objectif explicitement listé dans les attendus de l’axe 1."
        },
        {
          id: "iade_b1_recherche_biblio",
          label: "Approfondissement des compétences en recherche bibliographique",
          hint: "Objectif explicitement listé dans les attendus de l’axe 1."
        },
        {
          id: "iade_b1_lecture_critique",
          label: "Approfondissement des compétences en lecture critique d’articles scientifiques",
          hint: "Objectif explicitement listé dans les attendus de l’axe 1."
        },
        {
          id: "iade_b1_voies_aeriennes",
          label: "Actualisation des connaissances en gestion des voies aériennes",
          hint: "Exemple donné dans le référentiel : intubation difficile, etc."
        },
        {
          id: "iade_b1_pharmacologie",
          label: "Actualisation des connaissances en pharmacologie clinique",
          hint: "Thématique explicitement listée dans les attendus de l’axe 1."
        },
        {
          id: "iade_b1_physiopathologie",
          label: "Actualisation des connaissances en physiopathologie",
          hint: "Exemple donné : comorbidités et anesthésie."
        },
        {
          id: "iade_b1_technologies_numerique",
          label: "Actualisation des connaissances en équipements, technologies et numérique en santé",
          hint: "En anesthésie, médecine péri-opératoire, réanimation, urgences et douleur."
        },
        {
          id: "iade_b1_leadership",
          label: "Approfondissement des compétences en leadership clinique",
          hint: "Objectif explicitement listé dans les attendus de l’axe 1."
        },
        {
          id: "iade_b1_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Action proposée individuellement et validée par le CNP IADE."
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
      ruleText: "Parcours IADE : axe centré sur l’analyse des pratiques et la gestion des risques. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action de formation intégrant les aspects qualité, sécurité, gestion des risques",
        "Programme labellisé de simulation HF, serious game, réalité virtuelle intégrant les aspects qualité sécurité gestion des risques",
        "Session identifiée au sein d’un congrès national ou international intégrant les aspects qualité sécurité gestion des risques",
        "Contribution à l’analyse des événements indésirables en équipe",
        "Mise en œuvre d’un plan d’amélioration suite à l’analyse des EIAS lors de RMM, CREX, REMED",
        "Protocolisation d’une situation à risque (SAR) incluant les risques associés à l’exercice professionnel IADE",
        "Évaluation des pratiques professionnelles et proposition de projets d’amélioration de la qualité",
        "Favoriser l’émergence de la culture de sécurité",
        "Identifier les contextes et situations qui majorent les risques",
        "Inciter à la déclaration des événements indésirables et à l’application des procédures de vigilance",
        "Participer aux CREX pluridisciplinaires",
        "Mettre en œuvre l’EBN pour éclairer les processus de décision",
        "Promouvoir le développement des compétences non techniques",
        "Conforter l’intelligence émotionnelle dans les contextes de stress",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "iade_b2_formation_qsgr",
          label: "Action de formation intégrant les aspects qualité, sécurité, gestion des risques",
          hint: "Formation en ligne/e-learning ou présentielle intégrant la qualité, la sécurité et la gestion des risques des pratiques professionnelles de l’IADE."
        },
        {
          id: "iade_b2_simulation_qsgr",
          label: "Programme labellisé de simulation HF / serious game / réalité virtuelle intégrant la qualité-sécurité",
          hint: "Participation à une simulation en santé orientée qualité, sécurité et gestion des risques."
        },
        {
          id: "iade_b2_congres_qsgr",
          label: "Session identifiée au sein d’un congrès national ou international intégrant la qualité-sécurité",
          hint: "Formation présentielle ou en ligne intégrant les aspects qualité, sécurité, gestion des risques."
        },
        {
          id: "iade_b2_analyse_ei_equipe",
          label: "Contribution à l’analyse des événements indésirables en équipe",
          hint: "Action explicitement listée dans le tableau synoptique de l’axe 2 ; preuve : attestation employeur."
        },
        {
          id: "iade_b2_plan_amelioration_eias",
          label: "Mise en œuvre d’un plan d’amélioration suite à l’analyse des EIAS lors de RMM, CREX, REMED",
          hint: "Déploiement d’actions correctives et suivi des plans d’amélioration définis en RMM, CREX ou REMED."
        },
        {
          id: "iade_b2_sar",
          label: "Protocolisation d’une situation à risque (SAR)",
          hint: "Élaboration, formalisation, diffusion et suivi d’un protocole de situation à risque incluant les risques associés à l’exercice professionnel IADE."
        },
        {
          id: "iade_b2_epp_qualite",
          label: "Évaluation des pratiques professionnelles et proposition de projets d’amélioration",
          hint: "Objectif explicitement listé dans les attendus de l’axe 2."
        },
        {
          id: "iade_b2_culture_securite",
          label: "Développement de la culture de sécurité",
          hint: "Objectif explicitement listé dans les attendus de l’axe 2."
        },
        {
          id: "iade_b2_contextes_risque",
          label: "Identification des contextes et situations majorant les risques",
          hint: "Exemples donnés : pression de production, insuffisance d’équipement, manque d’effectifs."
        },
        {
          id: "iade_b2_declaration_ei",
          label: "Déclaration des événements indésirables et application des procédures de vigilance",
          hint: "Objectif explicitement listé dans les attendus de l’axe 2."
        },
        {
          id: "iade_b2_crex_pluri",
          label: "Participation aux CREX pluridisciplinaires",
          hint: "Action explicitement citée dans les attendus de l’axe 2."
        },
        {
          id: "iade_b2_ebn_decision",
          label: "Mise en œuvre de l’EBN pour éclairer les processus de décision",
          hint: "Objectif explicitement listé dans les attendus de l’axe 2."
        },
        {
          id: "iade_b2_competences_non_techniques",
          label: "Développement des compétences non techniques",
          hint: "Objectif explicitement listé pour articuler la contribution spécifique de l’IADE au sein de l’équipe pluriprofessionnelle."
        },
        {
          id: "iade_b2_intelligence_emotionnelle",
          label: "Développement de l’intelligence émotionnelle en contexte de stress",
          hint: "Objectif explicitement listé dans les attendus de l’axe 2."
        },
        {
          id: "iade_b2_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Action proposée individuellement et validée par le CNP IADE."
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
      ruleText: "Parcours IADE : axe centré sur l’approche centrée sur la personne. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Formation intégrant la dimension communication de l’approche centrée sur la personne",
        "Session identifiée au sein d’un congrès national ou international intégrant la communication de l’approche centrée sur la personne",
        "Programme labellisé de simulation HF, serious game, réalité virtuelle intégrant la dimension communication avec patient simulé",
        "Webinaire / podcasts intégrant la dimension communication de l’approche centrée sur la personne",
        "Formation universitaire intégrant la dimension communication de l’approche centrée sur la personne",
        "Activités de formation institutionnelle intégrant la dimension communication de l’approche centrée sur la personne",
        "Activités d’animation de sessions d’éducation thérapeutique du patient",
        "Auto-évaluation de l’approche centrée sur la personne",
        "Promotion de la bientraitance et prévention de la maltraitance",
        "Prise en compte de la fin de vie dans le cadre d’une approche palliative",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "iade_b3_formation_relation",
          label: "Formation intégrant la dimension communication de l’approche centrée sur la personne",
          hint: "Formation en ligne/e-learning ou présentielle ; peut porter notamment sur la fin de vie dans une approche palliative, la bientraitance et la prévention de la maltraitance."
        },
        {
          id: "iade_b3_congres_relation",
          label: "Session identifiée au sein d’un congrès national ou international intégrant la communication de l’approche centrée sur la personne",
          hint: "Action explicitement listée dans le tableau synoptique de l’axe 3."
        },
        {
          id: "iade_b3_simulation_patient_simule",
          label: "Programme labellisé de simulation intégrant un patient simulé",
          hint: "Simulation HF, serious game ou réalité virtuelle intégrant la dimension communication de l’approche centrée sur la personne."
        },
        {
          id: "iade_b3_webinaire_relation",
          label: "Webinaire / podcasts intégrant la dimension communication de l’approche centrée sur la personne",
          hint: "Formation en ligne/e-learning organisée par une société savante ou une organisation professionnelle."
        },
        {
          id: "iade_b3_formation_universitaire_relation",
          label: "Formation universitaire intégrant la dimension communication de l’approche centrée sur la personne",
          hint: "Formation universitaire de type DU ou Master."
        },
        {
          id: "iade_b3_formation_institutionnelle_relation",
          label: "Activité de formation institutionnelle intégrant la dimension communication de l’approche centrée sur la personne",
          hint: "Conception, mise en œuvre et évaluation de l’activité, ou contribution à sa mise en œuvre."
        },
        {
          id: "iade_b3_etp",
          label: "Activités d’animation de sessions d’éducation thérapeutique du patient",
          hint: "Action explicitement listée dans le tableau synoptique de l’axe 3."
        },
        {
          id: "iade_b3_autoeval_approche_centree",
          label: "Auto-évaluation de l’approche centrée sur la personne",
          hint: "Le parcours conseillé IADE sur 6 ans mentionne explicitement une auto-évaluation de l’approche centrée sur la personne."
        },
        {
          id: "iade_b3_bientraitance",
          label: "Promotion de la bientraitance et prévention de la maltraitance",
          hint: "Thématique explicitement citée dans les formations de l’axe 3."
        },
        {
          id: "iade_b3_fin_vie_palliatif",
          label: "Prise en compte de la fin de vie dans le cadre d’une approche palliative",
          hint: "Thématique explicitement citée dans les formations de l’axe 3."
        },
        {
          id: "iade_b3_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Action proposée individuellement et validée par le CNP IADE."
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
      ruleText: "Parcours IADE : axe centré sur la santé personnelle et les facteurs de risque. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Formations sur les risques d’exposition du professionnel",
        "Formations sur l’ergonomie et la sécurité physique",
        "Formations sur l’adaptation des professionnels IADE vivant avec une maladie chronique, en situation de handicap ou concernés par le vieillissement",
        "Formations sur la réduction des facteurs de stress",
        "Formations sur la gestion du stress et le travail en équipe",
        "Formations sur les autres compétences non techniques",
        "Auto-évaluation santé et facteurs de risque",
        "Prévention des violences sexistes et sexuelles à l’égard des professionnels de santé",
        "Prévention des risques spécifiques inhérents à l’exercice IADE",
        "Pratique d’une activité physique/sportive régulière",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "iade_b4_risques_exposition",
          label: "Formation sur les risques d’exposition du professionnel",
          hint: "Thématiques explicitement citées : gestion des déchets anesthésiques, radioprotection, exposition aux gaz anesthésiques, prévention des risques biologiques, prise en charge des expositions accidentelles, NRBC, suraccident, incendie."
        },
        {
          id: "iade_b4_ergonomie",
          label: "Formation sur l’ergonomie et la sécurité physique",
          hint: "Port de charge, gestes, postures, transfert de patients obèses et sécurité physique au travail."
        },
        {
          id: "iade_b4_adaptation_maladie_handicap_vieillissement",
          label: "Formation sur l’adaptation des professionnels IADE vivant avec une maladie chronique, en situation de handicap ou concernés par le vieillissement",
          hint: "Action explicitement listée dans le tableau synoptique de l’axe 4."
        },
        {
          id: "iade_b4_reduction_stress",
          label: "Formation sur la réduction des facteurs de stress",
          hint: "Action explicitement listée dans les attendus de l’axe 4."
        },
        {
          id: "iade_b4_gestion_stress_equipe",
          label: "Formation sur la gestion du stress et le travail en équipe",
          hint: "Développement des compétences non techniques pour réduire les facteurs de stress."
        },
        {
          id: "iade_b4_competences_non_techniques",
          label: "Formation sur les autres compétences non techniques",
          hint: "Mécanismes de l’attention, fatigue et impact sur la performance, communication, intelligence émotionnelle, travail en équipe, raisonnement clinique et biais cognitifs."
        },
        {
          id: "iade_b4_autoeval_sante_facteurs_risque",
          label: "Auto-évaluation santé et facteurs de risque",
          hint: "Le parcours conseillé IADE mentionne explicitement une auto-évaluation santé et facteurs de risque sur les années 1 et 6."
        },
        {
          id: "iade_b4_vss",
          label: "Prévention des violences sexistes et sexuelles à l’égard des professionnels de santé",
          hint: "Objectif explicitement listé dans les attendus de l’axe 4."
        },
        {
          id: "iade_b4_risques_specifiques_ia",
          label: "Prévention des risques spécifiques inhérents à l’exercice IADE",
          hint: "Inclut les risques environnementaux, la charge de travail physique, la charge mentale, la charge psychologique et la notion de “seconde victime”."
        },
        {
          id: "iade_b4_activite_physique",
          label: "Pratiquer une activité physique / sportive régulière",
          hint: "Action libre explicitement mentionnée dans le tableau synoptique de l’axe 4 ; déclaratif ; 1 crédit/an."
        },
        {
          id: "iade_b4_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Action proposée individuellement et validée par le CNP IADE."
        }
      ]
    }
  ]
},

{
  id: "ibode",
  label: "Infirmier de bloc opératoire diplômé d’État",
  fullTitle: "Certification Périodique de l’Infirmier de bloc opératoire diplômé d’État",
  subtitle: "Profession : IBODE",
  icon: "🛠️",
  theme: {
    primary: "#0f766e",
    primary2: "#0f5f5b",
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
      ruleText: "Parcours IBODE : axe centré sur l’actualisation des connaissances et compétences. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à des congrès nationaux ou régionaux labellisés par le CNP IBODE",
        "Participation à des journées organisées par des associations régionales reconnues",
        "Participation à des actions de formation proposées par des organismes de DPC dans le cadre des orientations prioritaires de la spécialité",
        "Formations universitaires qualifiantes ou diplômantes (DU/DIU, Master) labellisées par le CNP IBODE",
        "E-learning et formations en ligne labellisées par le CNP IBODE",
        "DU/DIU en ligne labellisés",
        "Préparation ou intervention dans des actions de formation institutionnelles labellisées par le CNP IBODE",
        "Enseignement universitaire (1er, 2ème ou 3ème cycle)",
        "Participation à des études de cas cliniques incluant des actes invasifs",
        "Participation à des réunions de concertation pluridisciplinaires pour échanger sur les pratiques",
        "Participation à des séances de gestion des risques liés aux actes invasifs",
        "Élaboration de protocoles pour l’utilisation sûre des nouveaux équipements",
        "Participation à des programmes intégrés combinant formation et évaluation des pratiques professionnelles",
        "Participation à des projets personnels de recherche sur les techniques invasives",
        "Contribution à des publications scientifiques",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "ibode_b1_congres_cnp",
          label: "Participation à des congrès nationaux ou régionaux labellisés par le CNP IBODE",
          hint: "Formation présentielle explicitement listée dans la documentation d’accompagnement du référentiel IBODE."
        },
        {
          id: "ibode_b1_journees_regionales",
          label: "Participation à des journées organisées par des associations régionales reconnues",
          hint: "Formation présentielle explicitement listée dans la documentation d’accompagnement."
        },
        {
          id: "ibode_b1_dpc",
          label: "Participation à des actions de formation proposées par des organismes de DPC",
          hint: "Dans le cadre des orientations prioritaires de la spécialité."
        },
        {
          id: "ibode_b1_du_diu_master",
          label: "Formation universitaire qualifiante ou diplômante (DU / DIU / Master) labellisée par le CNP IBODE",
          hint: "Action explicitement listée dans les formations présentielles."
        },
        {
          id: "ibode_b1_elearning",
          label: "E-learning et formations en ligne labellisés par le CNP IBODE",
          hint: "Formation non présentielle explicitement listée dans le référentiel."
        },
        {
          id: "ibode_b1_du_diu_en_ligne",
          label: "DU / DIU en ligne labellisés",
          hint: "Action explicitement listée dans les formations non présentielles."
        },
        {
          id: "ibode_b1_formation_institutionnelle",
          label: "Préparation ou intervention dans une action de formation institutionnelle labellisée par le CNP IBODE",
          hint: "Action d’enseignement explicitement listée dans le référentiel."
        },
        {
          id: "ibode_b1_enseignement_universitaire",
          label: "Enseignement universitaire (1er, 2ème ou 3ème cycle)",
          hint: "Action d’enseignement explicitement listée dans le référentiel."
        },
        {
          id: "ibode_b1_etudes_cas_cliniques",
          label: "Participation à des études de cas cliniques incluant des actes invasifs",
          hint: "Le référentiel les cite dans les analyses de pratiques du bloc 1 de l’axe 1, pour optimiser la pertinence des soins en intégrant les dernières techniques et équipements."
        },
        {
          id: "ibode_b1_rcp",
          label: "Participation à des réunions de concertation pluridisciplinaires",
          hint: "Réunions permettant d’échanger sur les pratiques ; explicitement citées dans les modalités d’analyse des pratiques."
        },
        {
          id: "ibode_b1_gdr_actes_invasifs",
          label: "Participation à des séances de gestion des risques liés aux actes invasifs",
          hint: "Action explicitement citée dans la partie gestion des risques."
        },
        {
          id: "ibode_b1_protocoles_equipements",
          label: "Élaboration de protocoles pour l’utilisation sûre des nouveaux équipements",
          hint: "Action explicitement citée dans la partie gestion des risques."
        },
        {
          id: "ibode_b1_programme_integre",
          label: "Participation à des programmes intégrés combinant formation et évaluation des pratiques professionnelles",
          hint: "Action explicitement citée dans la partie programmes intégrés."
        },
        {
          id: "ibode_b1_recherche_personnelle",
          label: "Participation à des projets personnels de recherche sur les techniques invasives",
          hint: "Action explicitement citée dans les actions libres du bloc 1 de l’axe 1."
        },
        {
          id: "ibode_b1_publications",
          label: "Contribution à des publications scientifiques",
          hint: "Action explicitement citée dans les actions libres du bloc 1 de l’axe 1."
        },
        {
          id: "ibode_b1_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Le référentiel prévoit explicitement que les professionnels peuvent proposer des actions non répertoriées mais répondant aux objectifs du référentiel et validées par le CNP."
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
      ruleText: "Parcours IBODE : axe centré sur le renforcement de la qualité des pratiques professionnelles. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à un audit d’observation de l’usage de la check-list",
        "Contribution à la personnalisation de la check-list",
        "Participation à des formations sur les techniques complexes d’assistance chirurgicale labellisées CNP IBODE",
        "Formation universitaire : suivre des DU/DIU axés sur les nouvelles technologies et méthodes chirurgicales",
        "Participation à des analyses de pratiques / pratiques réflexives individuelles ou en groupe",
        "Animation d’ateliers d’analyse des pratiques",
        "Contribution à l’élaboration de chemins cliniques",
        "Revues de pertinence",
        "Vignettes cliniques",
        "Rédaction / actualisation de protocoles et d’aides cognitives",
        "Conception / mise en œuvre / évaluation de séances de simulation",
        "Participation à un programme intégré dans le cadre des orientations prioritaires nationales",
        "Tests de Concordance de Scripts",
        "Simulation en santé",
        "Analyse de cas cliniques",
        "Sessions de simulation haute-fidélité interprofessionnelle",
        "Participation régulière aux CREX",
        "Gestion des événements porteurs de risque : identification, déclaration, analyse et mise en œuvre des actions correctives",
        "Suivi des indicateurs de qualité et sécurité des soins",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "ibode_b2_audit_checklist",
          label: "Participation à un audit d’observation de l’usage de la check-list",
          hint: "Exemple explicite de modélisation du parcours IBODE dans l’axe 2."
        },
        {
          id: "ibode_b2_personnalisation_checklist",
          label: "Contribution à la personnalisation de la check-list",
          hint: "Exemple explicite de modélisation du parcours IBODE dans l’axe 2."
        },
        {
          id: "ibode_b2_formation_techniques_complexes",
          label: "Participation à des formations sur les techniques complexes d’assistance chirurgicale",
          hint: "Formations spécialisées labellisées CNP IBODE."
        },
        {
          id: "ibode_b2_du_diu_technologies",
          label: "Formation universitaire sur les nouvelles technologies et méthodes chirurgicales",
          hint: "DU / DIU axés sur les nouvelles technologies et méthodes chirurgicales."
        },
        {
          id: "ibode_b2_analyse_pratiques",
          label: "Participation à des analyses de pratiques / pratiques réflexives individuelles ou en groupe",
          hint: "Action explicitement listée dans les analyses de pratiques."
        },
        {
          id: "ibode_b2_animation_ateliers",
          label: "Animation d’ateliers d’analyse des pratiques",
          hint: "Action explicitement listée dans les analyses de pratiques."
        },
        {
          id: "ibode_b2_chemins_cliniques",
          label: "Contribution à l’élaboration de chemins cliniques",
          hint: "Action explicitement listée dans les analyses de pratiques."
        },
        {
          id: "ibode_b2_revue_pertinence",
          label: "Revue de pertinence",
          hint: "Action explicitement listée dans les analyses de pratiques."
        },
        {
          id: "ibode_b2_vignettes_cliniques",
          label: "Vignettes cliniques",
          hint: "Action explicitement listée dans les analyses de pratiques et les programmes intégrés."
        },
        {
          id: "ibode_b2_protocoles_aides_cognitives",
          label: "Rédaction / actualisation de protocoles et d’aides cognitives",
          hint: "Action explicitement listée dans la gestion des risques."
        },
        {
          id: "ibode_b2_simulation_conception",
          label: "Conception / mise en œuvre / évaluation de séances de simulation",
          hint: "Action explicitement listée dans la gestion des risques."
        },
        {
          id: "ibode_b2_programme_integre_opn",
          label: "Participation à un programme intégré dans le cadre des orientations prioritaires nationales",
          hint: "Action explicitement listée dans les programmes intégrés."
        },
        {
          id: "ibode_b2_tcs",
          label: "Tests de Concordance de Scripts",
          hint: "Action explicitement listée dans les programmes intégrés."
        },
        {
          id: "ibode_b2_simulation_sante",
          label: "Simulation en santé",
          hint: "Action explicitement listée dans les programmes intégrés."
        },
        {
          id: "ibode_b2_cas_cliniques",
          label: "Analyse de cas cliniques",
          hint: "Action explicitement listée dans les programmes intégrés."
        },
        {
          id: "ibode_b2_simulation_hf_interpro",
          label: "Sessions de simulation haute-fidélité interprofessionnelle",
          hint: "Action explicitement listée dans les programmes intégrés."
        },
        {
          id: "ibode_b2_crex",
          label: "Participation régulière aux CREX",
          hint: "Action explicitement listée dans les exemples de l’axe 2."
        },
        {
          id: "ibode_b2_epr",
          label: "Gestion des événements porteurs de risque",
          hint: "Identification, déclaration, analyse et mise en œuvre des actions correctives."
        },
        {
          id: "ibode_b2_indicateurs_qss",
          label: "Suivi des indicateurs de qualité et sécurité des soins",
          hint: "Action explicitement listée dans les exemples de l’axe 2."
        },
        {
          id: "ibode_b2_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Action non répertoriée mais répondant aux objectifs du référentiel et validée par le CNP."
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
      ruleText: "Parcours IBODE : axe centré sur l’amélioration de la relation avec les patients. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à des formations sur la relation patient, l’information et l’accompagnement",
        "Participation à des sessions identifiées dans des congrès intégrant la relation avec les patients",
        "Programme labellisé de simulation intégrant la communication et la relation avec le patient",
        "Participation à des programmes intégrés proposés par des organismes de formation",
        "Tests de Concordance de Scripts",
        "Simulation en santé et utilisation de vignettes cliniques",
        "Actions libres répondant aux objectifs du référentiel et validées par le CNP"
      ],
      actions: [
        {
          id: "ibode_b3_formation_relation",
          label: "Participation à des formations sur la relation patient, l’information et l’accompagnement",
          hint: "Axe 3 du référentiel IBODE : amélioration de la relation avec les patients."
        },
        {
          id: "ibode_b3_sessions_congres_relation",
          label: "Participation à des sessions identifiées en congrès intégrant la relation avec les patients",
          hint: "Action cohérente avec la logique de formations / sessions identifiées du référentiel IBODE."
        },
        {
          id: "ibode_b3_simulation_relation",
          label: "Programme labellisé de simulation intégrant la communication et la relation avec le patient",
          hint: "Action cohérente avec la logique des programmes labellisés de simulation du référentiel IBODE."
        },
        {
          id: "ibode_b3_programme_integre",
          label: "Participation à des programmes intégrés proposés par des organismes de formation",
          hint: "Le référentiel IBODE mentionne explicitement, pour l’axe 3, des programmes intégrés prenant en compte le parcours de soins avant, pendant et après l’hôpital."
        },
        {
          id: "ibode_b3_tcs",
          label: "Tests de Concordance de Scripts",
          hint: "Action explicitement listée dans les programmes intégrés de l’axe 3."
        },
        {
          id: "ibode_b3_simulation_sante",
          label: "Simulation en santé",
          hint: "Action explicitement listée dans les programmes intégrés de l’axe 3."
        },
        {
          id: "ibode_b3_vignettes_cliniques",
          label: "Utilisation de vignettes cliniques",
          hint: "Action explicitement listée dans les programmes intégrés de l’axe 3."
        },
        {
          id: "ibode_b3_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Le référentiel prévoit explicitement des actions non répertoriées répondant aux objectifs de l’axe et validées par le CNP."
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
      ruleText: "Parcours IBODE : axe centré sur la santé personnelle du professionnel. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à des actions de formation sur la santé personnelle du professionnel",
        "Participation à des actions de gestion des risques professionnels",
        "Participation à des programmes intégrés proposés par des organismes de formation",
        "Tests de Concordance de Scripts",
        "Simulation en santé et utilisation de vignettes cliniques",
        "Actions libres répondant aux objectifs du référentiel et validées par le CNP"
      ],
      actions: [
        {
          id: "ibode_b4_formation_sante_personnelle",
          label: "Participation à des actions de formation sur la santé personnelle du professionnel",
          hint: "Axe 4 du référentiel IBODE : mieux prendre en compte la santé personnelle des professionnels de santé."
        },
        {
          id: "ibode_b4_gestion_risques_pro",
          label: "Participation à des actions de gestion des risques professionnels",
          hint: "Action cohérente avec la logique générale du référentiel IBODE sur la gestion des risques dans les secteurs interventionnels et associés."
        },
        {
          id: "ibode_b4_programme_integre",
          label: "Participation à des programmes intégrés proposés par des organismes de formation",
          hint: "Le référentiel prévoit des programmes intégrés dans la logique des axes de certification."
        },
        {
          id: "ibode_b4_tcs",
          label: "Tests de Concordance de Scripts",
          hint: "Action mobilisable dans la logique des programmes intégrés."
        },
        {
          id: "ibode_b4_simulation_sante",
          label: "Simulation en santé",
          hint: "Action mobilisable dans la logique des programmes intégrés."
        },
        {
          id: "ibode_b4_vignettes_cliniques",
          label: "Utilisation de vignettes cliniques",
          hint: "Action mobilisable dans la logique des programmes intégrés."
        },
        {
          id: "ibode_b4_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Le référentiel prévoit explicitement des actions non répertoriées répondant aux objectifs de l’axe et validées par le CNP."
        }
      ]
    }
  ]
},

     {
  id: "ipa",
  label: "Infirmier en pratique avancée",
  fullTitle: "Certification Périodique de l’Infirmier en pratique avancée",
  subtitle: "Profession : infirmier en pratique avancée",
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
      ruleText: "Référentiel IPA : 4 actions minimum et 14h minimum sur 6 ans pour cet axe. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation / intervention à des congrès nationaux ou régionaux labellisés",
        "Participation à des journées / temps d’échange organisés par des associations régionales ou nationales",
        "Participation à des formations DPC relevant des orientations prioritaires de la spécialité",
        "Participation à des formations universitaires qualifiantes ou diplômantes (DU/DIU, Master…) labellisées",
        "Participation à des programmes intégrés",
        "Participation à des e-learning, formations en ligne labellisées ou DU/DIU en ligne labellisés",
        "Validation des acquis de l’expérience (VAE)",
        "Validation des acquis professionnels (VAP)",
        "Validation des études supérieures (VES)",
        "Développement professionnel continu",
        "Auto-évaluation de l’impact, plan d’action, bilan personnel",
        "Portfolio réflexif / rapport de synthèse / documentation personnelle",
        "Synthèse de lectures, revue de littérature, documentation de changements réalisés",
        "Participation à des groupes de travail, comités scientifiques, sociétés savantes",
        "Preuves de contribution à la recherche, projets, publications",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "ipa_b1_congres_labellise",
          label: "Participation / intervention à un congrès national ou régional labellisé",
          hint: "Action explicitement listée dans la catégorie formations (présentiel / distanciel) du référentiel IPA."
        },
        {
          id: "ipa_b1_journee_association",
          label: "Participation à une journée ou un temps d’échange organisé par une association régionale ou nationale",
          hint: "Action explicitement listée dans la catégorie formations."
        },
        {
          id: "ipa_b1_dpc",
          label: "Formation DPC relevant des orientations prioritaires de la spécialité",
          hint: "Action explicitement listée dans la catégorie formations."
        },
        {
          id: "ipa_b1_du_diu_master",
          label: "Formation universitaire qualifiante ou diplômante (DU / DIU / Master) labellisée",
          hint: "Action explicitement listée dans la catégorie formations."
        },
        {
          id: "ipa_b1_programme_integre",
          label: "Participation à un programme intégré",
          hint: "Action explicitement listée dans la catégorie formations, avec rapports de programmes intégrés comme justificatifs possibles."
        },
        {
          id: "ipa_b1_elearning",
          label: "E-learning, formation en ligne ou DU/DIU en ligne labellisé",
          hint: "Action explicitement listée dans la catégorie formations ; certification numérique possible (PIX, MOOC, e-learning validé)."
        },
        {
          id: "ipa_b1_vae",
          label: "Validation des acquis de l’expérience (VAE)",
          hint: "Action explicitement listée dans la catégorie formations."
        },
        {
          id: "ipa_b1_vap_ves",
          label: "Validation des acquis professionnels (VAP) / Validation des études supérieures (VES)",
          hint: "Action explicitement listée dans la catégorie formations."
        },
        {
          id: "ipa_b1_dpc_dev_professionnel",
          label: "Développement professionnel continu",
          hint: "Action explicitement listée dans la catégorie formations."
        },
        {
          id: "ipa_b1_autoevaluation_impact",
          label: "Auto-évaluation de l’impact, plan d’action, bilan personnel",
          hint: "Le tableau des justificatifs associés mentionne explicitement ces éléments comme preuves liées aux actions de formation."
        },
        {
          id: "ipa_b1_portfolio_reflexif",
          label: "Portfolio réflexif / rapport de synthèse / documentation personnelle",
          hint: "Le référentiel IPA cite explicitement portfolio réflexif, rapport personnel structuré, suivi de progression, journal d’apprentissage et analyse de cas."
        },
        {
          id: "ipa_b1_revue_litterature",
          label: "Synthèse de lectures, revue de littérature, documentation de changements réalisés",
          hint: "Action cohérente avec les justificatifs explicitement listés dans le référentiel IPA."
        },
        {
          id: "ipa_b1_groupes_travail",
          label: "Participation à des groupes de travail, comités scientifiques ou sociétés savantes",
          hint: "Le tableau des justificatifs cite explicitement l’engagement institutionnel ou collectif via groupes de travail, comités scientifiques, sociétés savantes."
        },
        {
          id: "ipa_b1_recherche_publications",
          label: "Contribution à la recherche, à des projets ou à des publications",
          hint: "Le tableau des justificatifs cite explicitement les preuves de contribution à la recherche, projets et publications."
        },
        {
          id: "ipa_b1_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Le référentiel précise que les IPA peuvent proposer une action à valider par le CNP, a priori ou sur pièce a posteriori."
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
      ruleText: "Référentiel IPA : 4 actions minimum et 14h minimum sur 6 ans pour cet axe. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Gestion des thérapeutiques médicamenteuses et non médicamenteuses, conciliation médicamenteuse, bonnes pratiques de prescription",
        "Gestion des risques spécifiques chez les femmes",
        "Gestion des spécificités de la consultation de l’IPA avec la population pédiatrique",
        "Gestion des populations vulnérables, isolées, victimes d’inégalités sociales et spatiales pour leur santé",
        "Séances d’analyse des pratiques / pratique réflexive individuelles ou en groupe",
        "Animation d’atelier d’analyse des pratiques",
        "Contribution à l’élaboration de chemins cliniques",
        "Revues de pertinence",
        "Rédaction / actualisation de protocoles et d’aides cognitives",
        "Conception / mise en œuvre / évaluation de séances de simulation",
        "Participation à un programme intégré dans le cadre des orientations prioritaires nationales",
        "Tests de Concordance de Scripts",
        "Simulation en santé",
        "Analyse de cas cliniques",
        "Création d’ECOS (Examens Cliniques Objectifs Structurés)",
        "Participation à la lecture de RSCA (résumé de situations cliniques authentiques)",
        "Sessions de simulation haute-fidélité interprofessionnelle",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "ipa_b2_therapeutiques_prescription",
          label: "Gestion des thérapeutiques médicamenteuses et non médicamenteuses, conciliation médicamenteuse, bonnes pratiques de prescription",
          hint: "Action explicitement visible dans les méthodes et modalités de développement de compétences de l’axe 2."
        },
        {
          id: "ipa_b2_risques_femmes",
          label: "Gestion des risques spécifiques chez les femmes",
          hint: "Action explicitement visible dans les méthodes et modalités de développement de compétences de l’axe 2."
        },
        {
          id: "ipa_b2_pediatrie",
          label: "Gestion des spécificités de la consultation IPA avec la population pédiatrique",
          hint: "Le référentiel cite explicitement : consultation de l’enfant, suivi standard, dépistage des handicaps, relation parent-enfant, maladie chronique, transition adolescence / âge adulte."
        },
        {
          id: "ipa_b2_populations_vulnerables",
          label: "Gestion des populations vulnérables, isolées ou victimes d’inégalités sociales et spatiales",
          hint: "Le référentiel cite explicitement l’aller-vers, les besoins spécifiques des populations en situation de précarité, le dépistage des IST, la santé communautaire et la prise en soins des personnes LGBTI."
        },
        {
          id: "ipa_b2_analyse_pratiques",
          label: "Séances d’analyse des pratiques / pratique réflexive individuelles ou en groupe",
          hint: "Action explicitement listée dans l’axe 2."
        },
        {
          id: "ipa_b2_animation_atelier",
          label: "Animation d’atelier d’analyse des pratiques",
          hint: "Action explicitement listée dans l’axe 2."
        },
        {
          id: "ipa_b2_chemins_cliniques",
          label: "Contribution à l’élaboration de chemins cliniques",
          hint: "Action explicitement listée dans l’axe 2."
        },
        {
          id: "ipa_b2_revue_pertinence",
          label: "Revues de pertinence",
          hint: "Action explicitement listée dans l’axe 2."
        },
        {
          id: "ipa_b2_protocoles_aides_cognitives",
          label: "Rédaction / actualisation de protocoles et d’aides cognitives",
          hint: "Action explicitement listée dans la gestion des risques de l’axe 2."
        },
        {
          id: "ipa_b2_simulation_conception",
          label: "Conception / mise en œuvre / évaluation de séances de simulation",
          hint: "Action explicitement listée dans la gestion des risques de l’axe 2."
        },
        {
          id: "ipa_b2_programme_integre",
          label: "Participation à un programme intégré dans le cadre des orientations prioritaires nationales",
          hint: "Action explicitement listée dans les programmes intégrés de l’axe 2."
        },
        {
          id: "ipa_b2_tcs",
          label: "Tests de Concordance de Scripts",
          hint: "Action explicitement listée dans les programmes intégrés de l’axe 2."
        },
        {
          id: "ipa_b2_simulation_sante",
          label: "Simulation en santé",
          hint: "Action explicitement listée dans les programmes intégrés de l’axe 2."
        },
        {
          id: "ipa_b2_cas_cliniques",
          label: "Analyse de cas cliniques",
          hint: "Action explicitement listée dans les programmes intégrés de l’axe 2."
        },
        {
          id: "ipa_b2_ecos",
          label: "Création d’ECOS (Examens Cliniques Objectifs Structurés)",
          hint: "Action explicitement listée dans les programmes intégrés de l’axe 2."
        },
        {
          id: "ipa_b2_rsca",
          label: "Participation à la lecture de RSCA",
          hint: "Le référentiel cite explicitement la lecture de RSCA : résumé de situations cliniques authentiques."
        },
        {
          id: "ipa_b2_simulation_hf_interpro",
          label: "Sessions de simulation haute-fidélité interprofessionnelle",
          hint: "Action explicitement listée dans les programmes intégrés de l’axe 2."
        },
        {
          id: "ipa_b2_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Le référentiel précise que les IPA peuvent proposer une action à valider par le CNP, a priori ou sur pièce a posteriori."
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
      ruleText: "Référentiel IPA : 4 actions minimum et 14h minimum sur 6 ans pour cet axe. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation / intervention à des congrès nationaux ou régionaux labellisés sur la relation avec les patients",
        "Participation à des journées / temps d’échange organisés par des associations régionales ou nationales",
        "Participation à des formations DPC relevant de l’amélioration de la relation avec les patients",
        "Participation à des formations universitaires qualifiantes ou diplômantes labellisées",
        "Participation à des programmes intégrés",
        "Participation à des e-learning, formations en ligne labellisées ou DU/DIU en ligne labellisés",
        "Audit clinique, bilans de compétences",
        "Simulation, test de concordance de script",
        "Pratique réflexive",
        "Portfolio réflexif, rapport de synthèse, analyse de cas",
        "Documentation de projets ou actions d’amélioration",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "ipa_b3_congres_relation",
          label: "Participation / intervention à un congrès national ou régional labellisé sur la relation avec les patients",
          hint: "Le référentiel IPA prévoit, pour chaque axe, des actions de formation relevant des congrès, journées d’échange et formations labellisées."
        },
        {
          id: "ipa_b3_journee_association",
          label: "Participation à une journée ou un temps d’échange organisé par une association régionale ou nationale",
          hint: "Action de formation mobilisable dans l’axe 3."
        },
        {
          id: "ipa_b3_dpc_relation",
          label: "Formation DPC relevant de l’amélioration de la relation avec les patients",
          hint: "Action de formation au titre du DPC, en lien avec l’axe 3."
        },
        {
          id: "ipa_b3_du_diu_relation",
          label: "Formation universitaire qualifiante ou diplômante labellisée",
          hint: "Action mobilisable pour développer les compétences de communication et de relation patient dans l’axe 3."
        },
        {
          id: "ipa_b3_programme_integre",
          label: "Participation à un programme intégré",
          hint: "Le référentiel IPA prévoit des programmes intégrés pour les différents axes du parcours."
        },
        {
          id: "ipa_b3_elearning_relation",
          label: "E-learning, formation en ligne ou DU/DIU en ligne labellisé",
          hint: "Action mobilisable dans l’axe 3 au titre des formations présentielles / distancielles."
        },
        {
          id: "ipa_b3_audit_bilan",
          label: "Audit clinique / bilan de compétences",
          hint: "Le tableau des catégories d’actions cite explicitement audit clinique et bilans de compétences dans la partie analyse des pratiques."
        },
        {
          id: "ipa_b3_simulation_tcs",
          label: "Simulation / test de concordance de script",
          hint: "Le tableau des catégories d’actions cite explicitement simulation et tests de concordance de script dans la partie analyse des pratiques."
        },
        {
          id: "ipa_b3_pratique_reflexive",
          label: "Pratique réflexive",
          hint: "Action explicitement listée dans la catégorie analyse des pratiques du référentiel IPA."
        },
        {
          id: "ipa_b3_portfolio_reflexif",
          label: "Portfolio réflexif / rapport de synthèse / analyse de cas",
          hint: "Le tableau des justificatifs cite explicitement portfolio réflexif, rapport de synthèse et documentation personnelle incluant l’analyse de cas."
        },
        {
          id: "ipa_b3_documentation_amelioration",
          label: "Documentation de projets ou actions d’amélioration",
          hint: "Le tableau des justificatifs cite explicitement fiches projets, plans d’action et documentation d’implémentation."
        },
        {
          id: "ipa_b3_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Le référentiel précise que les IPA peuvent proposer une action à valider par le CNP, a priori ou sur pièce a posteriori."
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
      ruleText: "Référentiel IPA : 4 actions minimum et 14h minimum sur 6 ans pour cet axe. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à des formations présentielles ou distancielles sur la santé personnelle des professionnels",
        "Participation à des programmes intégrés",
        "Audit clinique, bilans de compétences",
        "Simulation, test de concordance de script",
        "Pratique réflexive",
        "Portfolio réflexif, rapport de synthèse, auto-évaluation",
        "Rapports d’évaluation / feedback",
        "Indicateurs de performance ou qualité",
        "Documentation de projets ou actions d’amélioration",
        "Documentation de veille et de changement de pratique",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "ipa_b4_formation_sante_personnelle",
          label: "Formation présentielle ou distancielle sur la santé personnelle des professionnels",
          hint: "Le référentiel IPA consacre un axe 4 à la santé personnelle des professionnels de santé et mobilise les mêmes grandes catégories de formation."
        },
        {
          id: "ipa_b4_programme_integre",
          label: "Participation à un programme intégré",
          hint: "Le référentiel prévoit des programmes intégrés pour les différents axes du parcours IPA."
        },
        {
          id: "ipa_b4_audit_bilan",
          label: "Audit clinique / bilan de compétences",
          hint: "Le tableau des catégories d’actions cite explicitement audit clinique et bilans de compétences."
        },
        {
          id: "ipa_b4_simulation_tcs",
          label: "Simulation / test de concordance de script",
          hint: "Le tableau des catégories d’actions cite explicitement simulation et TCS."
        },
        {
          id: "ipa_b4_pratique_reflexive",
          label: "Pratique réflexive",
          hint: "Action explicitement listée dans la catégorie analyse des pratiques du référentiel IPA."
        },
        {
          id: "ipa_b4_portfolio_reflexif",
          label: "Portfolio réflexif / rapport de synthèse / auto-évaluation",
          hint: "Le tableau des justificatifs cite explicitement portfolio réflexif, rapport de synthèse et auto-évaluation de l’impact, plan d’action, bilan personnel."
        },
        {
          id: "ipa_b4_feedback",
          label: "Rapports d’évaluation / feedback",
          hint: "Le tableau des justificatifs cite explicitement les évaluations formatives et retours des pairs, formateurs ou superviseurs."
        },
        {
          id: "ipa_b4_indicateurs_performance",
          label: "Indicateurs de performance ou qualité",
          hint: "Le tableau des justificatifs cite explicitement le suivi d’indicateurs cliniques, sécurité et efficacité."
        },
        {
          id: "ipa_b4_documentation_amelioration",
          label: "Documentation de projets ou actions d’amélioration",
          hint: "Le tableau des justificatifs cite explicitement fiches projets, plans d’action et documentation d’implémentation."
        },
        {
          id: "ipa_b4_veille_changement_pratique",
          label: "Documentation de veille et de changement de pratique",
          hint: "Le tableau des justificatifs cite explicitement synthèse de lectures, revue de littérature et documentation de changements réalisés."
        },
        {
          id: "ipa_b4_hors_liste",
          label: "Action libre validée par le CNP",
          hint: "Le référentiel précise que les IPA peuvent proposer une action à valider par le CNP, a priori ou sur pièce a posteriori."
        }
      ]
    }
  ]
},

{
  id: "puericultrice-de",
  label: "Puéricultrice diplômée d’État",
  fullTitle: "Certification Périodique de la Puéricultrice diplômée d’État",
  subtitle: "Profession : puéricultrice diplômée d’État",
  icon: "🍼",
  theme: {
    primary: "#db2777",
    primary2: "#be185d",
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
      ruleText: "Référentiel puéricultrice : engagement dans chacun des 4 axes sur un cycle de 6 ans. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à des formations en présentiel ou à distance",
        "Participation à une simulation",
        "Participation à un congrès ou une session en ligne",
        "Programme annoté, QCM pré/post-formation, quiz interactifs, enquête de satisfaction",
        "Auto-évaluation de l’impact, plan d’action, bilan personnel",
        "Certification numérique (PIX, MOOC, e-learning validé)",
        "Diplôme, certificat de réussite, certification professionnelle, attestation de compétences",
        "Portfolio réflexif, rapport de synthèse, documentation personnelle",
        "Documentation de veille, synthèse de lectures, revue de littérature",
        "Participation à des groupes de travail, comités scientifiques, travaux collectifs",
        "Contribution à la recherche, à des projets ou à des publications",
        "Participation à des formations ou travaux en lien avec l’environnement du nouveau-né",
        "Participation à des formations ou travaux en lien avec la protection de l’enfance",
        "Participation à des formations ou travaux en lien avec la prématurité",
        "Participation à des formations ou travaux en lien avec la santé mentale des familles",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "puer_b1_formation",
          label: "Participation à une formation en présentiel ou à distance",
          hint: "Le référentiel prévoit explicitement comme preuve une attestation de présence à une formation, un congrès, une session en ligne ou une simulation."
        },
        {
          id: "puer_b1_simulation",
          label: "Participation à une simulation",
          hint: "La simulation figure explicitement dans l’annexe 1 parmi les types d’actions pouvant être justifiés."
        },
        {
          id: "puer_b1_congres_session",
          label: "Participation à un congrès ou à une session en ligne",
          hint: "Le référentiel prévoit explicitement une attestation / certificat de présence à un congrès ou à une session en ligne."
        },
        {
          id: "puer_b1_elements_pedagogiques",
          label: "Programme annoté, QCM pré/post-formation, quiz interactifs, enquête de satisfaction",
          hint: "Éléments pédagogiques associés explicitement listés dans l’annexe 1."
        },
        {
          id: "puer_b1_autoevaluation_impact",
          label: "Auto-évaluation de l’impact, plan d’action, bilan personnel",
          hint: "Le référentiel liste explicitement cette catégorie de preuve au titre de l’évaluation / auto-évaluation."
        },
        {
          id: "puer_b1_certification_numerique",
          label: "Certification numérique (PIX, MOOC, e-learning validé)",
          hint: "Le référentiel cite explicitement les certificats PIX, MOOC et e-learning validés."
        },
        {
          id: "puer_b1_diplome_certificat",
          label: "Diplôme, certificat de réussite, certification professionnelle ou attestation de compétences",
          hint: "Le référentiel cite explicitement DU, certification professionnelle et attestations de compétences."
        },
        {
          id: "puer_b1_portfolio_reflexif",
          label: "Portfolio réflexif / rapport de synthèse / documentation personnelle",
          hint: "Le référentiel cite explicitement portfolio réflexif, rapport de synthèse, suivi de progression, journal d’apprentissage et analyse de cas."
        },
        {
          id: "puer_b1_veille_litterature",
          label: "Documentation de veille, synthèse de lectures, revue de littérature",
          hint: "Le référentiel cite explicitement la documentation de veille et de changement de pratique ainsi que la revue de littérature."
        },
        {
          id: "puer_b1_groupes_travail",
          label: "Participation à des groupes de travail, comités scientifiques ou travaux collectifs",
          hint: "L’annexe 1 cite explicitement les groupes de travail, comités scientifiques et attestions de participation à des travaux collectifs."
        },
        {
          id: "puer_b1_recherche_publication",
          label: "Contribution à la recherche, à des projets ou à des publications",
          hint: "Le référentiel cite explicitement les preuves de contribution à la recherche, les projets, publications et articles / guides rédigés."
        },
        {
          id: "puer_b1_nouveau_ne",
          label: "Formation ou travail en lien avec l’environnement du nouveau-né",
          hint: "Le référentiel cite explicitement, dans ses références, le Groupe de Réflexion et d’Évaluation de l’Environnement du Nouveau-né."
        },
        {
          id: "puer_b1_protection_enfance",
          label: "Formation ou travail en lien avec la protection de l’enfance",
          hint: "Le référentiel cite explicitement l’Observatoire National de la Protection de l’Enfance dans les références."
        },
        {
          id: "puer_b1_prematurite",
          label: "Formation ou travail en lien avec la prématurité",
          hint: "Le référentiel cite explicitement SOS Préma dans les références."
        },
        {
          id: "puer_b1_sante_mentale_familles",
          label: "Formation ou travail en lien avec la santé mentale des familles",
          hint: "Le référentiel cite explicitement l’UNAFAM dans les références."
        },
        {
          id: "puer_b1_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par la puéricultrice et validée dans le cadre du référentiel."
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
      ruleText: "Référentiel puéricultrice : engagement dans chacun des 4 axes sur un cycle de 6 ans. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Suivi d’indicateurs cliniques, sécurité, efficacité",
        "Preuves de réinvestissement à 6 mois, mise en place de protocoles, nouvelles procédures",
        "Documentation de projets ou actions d’amélioration",
        "Rapports de programmes intégrés",
        "Résultats de simulations",
        "Protocoles documentés",
        "Rapports d’évaluation des risques",
        "Comptes-rendus de réunions d’équipe, de projets, de revues de pratiques",
        "Participation à des groupes de travail, comités scientifiques, travaux collectifs",
        "Analyse de cas",
        "Action d’amélioration en lien avec la sécurité des nouveau-nés",
        "Action d’amélioration en lien avec la qualité des prises en charge en enfance",
        "Action d’amélioration en lien avec la prévention ou la gestion des risques",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "puer_b2_indicateurs",
          label: "Suivi d’indicateurs cliniques, de sécurité ou d’efficacité",
          hint: "Le référentiel cite explicitement les indicateurs de performance ou qualité parmi les preuves mobilisables."
        },
        {
          id: "puer_b2_reinvestissement",
          label: "Preuves de réinvestissement : rapport à 6 mois, mise en place de protocoles, nouvelles procédures",
          hint: "Action explicitement soutenue par l’annexe 1."
        },
        {
          id: "puer_b2_projet_amelioration",
          label: "Documentation de projets ou actions d’amélioration",
          hint: "Le référentiel cite explicitement fiches projets, plans d’action et documentation d’implémentation."
        },
        {
          id: "puer_b2_programme_integre",
          label: "Rapports de programmes intégrés",
          hint: "Le référentiel cite explicitement les parcours de formation institutionnels, tutorats et mentorats comme preuves de programmes intégrés."
        },
        {
          id: "puer_b2_resultats_simulation",
          label: "Résultats de simulations",
          hint: "Le référentiel cite explicitement la documentation des scénarios, analyses et apprentissages issus des sessions."
        },
        {
          id: "puer_b2_protocoles_documentes",
          label: "Protocoles documentés",
          hint: "Le référentiel cite explicitement les protocoles documentés en lien avec la gestion des risques, la sécurité, l’encadrement et les procédures."
        },
        {
          id: "puer_b2_evaluation_risques",
          label: "Rapports d’évaluation des risques",
          hint: "Le référentiel cite explicitement l’analyse en contexte de formation ou d’intervention."
        },
        {
          id: "puer_b2_cr_reunions",
          label: "Comptes-rendus de réunions d’équipe, de projets ou de revues de pratiques",
          hint: "Le référentiel cite explicitement les comptes-rendus et participations aux réunions."
        },
        {
          id: "puer_b2_groupes_travail",
          label: "Participation à des groupes de travail, comités scientifiques ou travaux collectifs",
          hint: "Le référentiel cite explicitement les attestations de participation à des travaux collectifs."
        },
        {
          id: "puer_b2_analyse_cas",
          label: "Analyse de cas",
          hint: "Le référentiel cite explicitement l’analyse de cas dans la documentation personnelle et le portfolio réflexif."
        },
        {
          id: "puer_b2_securite_nouveau_ne",
          label: "Action d’amélioration en lien avec la sécurité des nouveau-nés",
          hint: "Le référentiel cite explicitement en bibliographie les ressources HAS sur les événements indésirables graves associés aux soins survenant chez les nouveau-nés."
        },
        {
          id: "puer_b2_qualite_enfance",
          label: "Action d’amélioration en lien avec la qualité des prises en charge en enfance",
          hint: "Action cohérente avec le champ de compétences de la puéricultrice et les références du référentiel sur l’enfance."
        },
        {
          id: "puer_b2_prevention_risques",
          label: "Action d’amélioration en lien avec la prévention ou la gestion des risques",
          hint: "Le référentiel s’appuie explicitement sur des preuves de protocoles documentés et d’évaluation des risques."
        },
        {
          id: "puer_b2_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par la puéricultrice et validée dans le cadre du référentiel."
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
      ruleText: "Référentiel puéricultrice : engagement dans chacun des 4 axes sur un cycle de 6 ans. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à des formations, congrès ou sessions en ligne sur la relation avec l’enfant, l’adolescent et les familles",
        "Auto-évaluation de l’impact, plan d’action, bilan personnel",
        "Portfolio réflexif, rapport de synthèse, documentation personnelle",
        "Rapports d’évaluation / feedback",
        "Comptes-rendus de réunions d’équipe, de projets, de revues de pratiques",
        "Travaux collectifs, groupes de travail, comités scientifiques",
        "Documentation de projets ou actions d’amélioration du parcours",
        "Action en lien avec les familles, la parentalité et les aidants",
        "Action en lien avec la protection de l’enfance",
        "Action en lien avec la prématurité et les situations de vulnérabilité",
        "Action hors liste validée par le CNP"
      ],
      actions: [
        {
          id: "puer_b3_formation_relation",
          label: "Participation à des formations, congrès ou sessions en ligne sur la relation avec l’enfant, l’adolescent et les familles",
          hint: "Le référentiel prévoit explicitement les attestations de présence à des formations, congrès, simulations et sessions en ligne."
        },
        {
          id: "puer_b3_autoevaluation",
          label: "Auto-évaluation de l’impact, plan d’action, bilan personnel",
          hint: "Le référentiel cite explicitement cette catégorie de preuve."
        },
        {
          id: "puer_b3_portfolio_reflexif",
          label: "Portfolio réflexif / rapport de synthèse / documentation personnelle",
          hint: "Le référentiel cite explicitement portfolio réflexif, rapport de synthèse, journal d’apprentissage et analyse de cas."
        },
        {
          id: "puer_b3_feedback",
          label: "Rapports d’évaluation / feedback",
          hint: "Le référentiel cite explicitement les retours des pairs, formateurs et superviseurs."
        },
        {
          id: "puer_b3_cr_reunions",
          label: "Comptes-rendus de réunions d’équipe, de projets ou de revues de pratiques",
          hint: "Le référentiel cite explicitement les CR de réunions dans l’annexe 1."
        },
        {
          id: "puer_b3_travaux_collectifs",
          label: "Participation à des travaux collectifs, groupes de travail ou comités scientifiques",
          hint: "Le référentiel cite explicitement cette catégorie de preuve."
        },
        {
          id: "puer_b3_projets_parcours",
          label: "Documentation de projets ou actions d’amélioration du parcours",
          hint: "Le référentiel cite explicitement fiches projets, plans d’action et documentation d’implémentation."
        },
        {
          id: "puer_b3_parentalite_aidants",
          label: "Action en lien avec les familles, la parentalité et les aidants",
          hint: "Action cohérente avec le cœur de métier de la puéricultrice sur le parcours de vie et de santé de l’enfant et de sa famille."
        },
        {
          id: "puer_b3_protection_enfance",
          label: "Action en lien avec la protection de l’enfance",
          hint: "Le référentiel cite explicitement l’Observatoire National de la Protection de l’Enfance dans ses références."
        },
        {
          id: "puer_b3_prematurite_vulnerabilite",
          label: "Action en lien avec la prématurité et les situations de vulnérabilité",
          hint: "Le référentiel cite explicitement SOS Préma dans ses références."
        },
        {
          id: "puer_b3_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par la puéricultrice et validée dans le cadre du référentiel."
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
      ruleText: "Référentiel puéricultrice : engagement dans chacun des 4 axes sur un cycle de 6 ans. Pour cohérence avec le moteur du site : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à des formations, simulations, congrès ou sessions en ligne sur la santé personnelle des professionnels",
        "Auto-évaluation de l’impact, plan d’action, bilan personnel",
        "Portfolio réflexif, rapport de synthèse, documentation personnelle",
        "Rapports d’évaluation / feedback",
        "Indicateurs de performance ou qualité",
        "Documentation de projets ou actions d’amélioration",
        "Documentation de veille et de changement de pratique",
        "Action en lien avec la santé mentale des professionnels ou des équipes",
        "Action en lien avec la santé environnementale ou le quotidien professionnel",
        "Action libre validée par le CNP"
      ],
      actions: [
        {
          id: "puer_b4_formation_sante",
          label: "Participation à des formations, simulations, congrès ou sessions en ligne sur la santé personnelle des professionnels",
          hint: "Le référentiel prévoit explicitement les attestations de présence à des formations, simulations, congrès et sessions en ligne."
        },
        {
          id: "puer_b4_autoevaluation",
          label: "Auto-évaluation de l’impact, plan d’action, bilan personnel",
          hint: "Le référentiel cite explicitement cette catégorie de preuve."
        },
        {
          id: "puer_b4_portfolio_reflexif",
          label: "Portfolio réflexif / rapport de synthèse / documentation personnelle",
          hint: "Le référentiel cite explicitement portfolio réflexif, rapport de synthèse, journal d’apprentissage et analyse de cas."
        },
        {
          id: "puer_b4_feedback",
          label: "Rapports d’évaluation / feedback",
          hint: "Le référentiel cite explicitement les retours des pairs, formateurs et superviseurs."
        },
        {
          id: "puer_b4_indicateurs",
          label: "Indicateurs de performance ou qualité",
          hint: "Le référentiel cite explicitement le suivi d’indicateurs cliniques, sécurité et efficacité."
        },
        {
          id: "puer_b4_projets_amelioration",
          label: "Documentation de projets ou actions d’amélioration",
          hint: "Le référentiel cite explicitement fiches projets, plans d’action et documentation d’implémentation."
        },
        {
          id: "puer_b4_veille_changement",
          label: "Documentation de veille et de changement de pratique",
          hint: "Le référentiel cite explicitement la synthèse de lectures, la revue de littérature et la documentation des changements réalisés."
        },
        {
          id: "puer_b4_sante_mentale",
          label: "Action en lien avec la santé mentale des professionnels ou des équipes",
          hint: "Le référentiel cite l’UNAFAM parmi les références ; cette action reste cohérente avec l’axe 4 et les attendus de santé personnelle."
        },
        {
          id: "puer_b4_sante_environnementale",
          label: "Action en lien avec la santé environnementale ou le quotidien professionnel",
          hint: "Le référentiel cite le Groupe de Réflexion et d’Évaluation de l’Environnement du Nouveau-né parmi ses références."
        },
        {
          id: "puer_b4_hors_liste",
          label: "Action hors liste validée par le CNP",
          hint: "Action proposée par la puéricultrice et validée dans le cadre du référentiel."
        }
      ]
    }
  ]
}
    ]
  });
})();

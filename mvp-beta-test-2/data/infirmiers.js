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
        subtitle: "Profession : infirmier anesthésiste diplômé d’État",
        icon: "💊",
        theme: {
          primary: "#1e3a8a",
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: { min: 2 },
            allReferentialActions: [
              "Action DPC IADE",
              "Formation spécialisée anesthésie",
              "Congrès / colloque",
              "Formation certifiante",
              "Simulation haute fidélité",
              "Enseignement",
              "Recherche",
              "Action hors liste validée"
            ],
            actions: [
              { id: "iade_b1_dpc", label: "Action DPC IADE", hint: "Attestation de participation." },
              { id: "iade_b1_formation", label: "Formation spécialisée anesthésie", hint: "Formation scientifique ou professionnelle." },
              { id: "iade_b1_congres", label: "Congrès / colloque", hint: "Participation à un événement professionnel." },
              { id: "iade_b1_certif", label: "Formation certifiante", hint: "DU, DIU ou autre formation certifiante." },
              { id: "iade_b1_simulation", label: "Simulation haute fidélité", hint: "Ex. urgences, prise en charge anesthésique." },
              { id: "iade_b1_enseignement", label: "Activité d’enseignement", hint: "Intervention ou enseignement dans le champ professionnel." }
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
              "Analyse de pratiques / EPP",
              "Audit clinique",
              "RMM / CREX / revue qualité",
              "Protocoles / procédures",
              "Gestion des risques",
              "Travail en équipe pluriprofessionnelle",
              "Action hors liste validée"
            ],
            actions: [
              { id: "iade_b2_epp", label: "Analyse de pratiques / EPP", hint: "Action d’évaluation ou d’analyse des pratiques." },
              { id: "iade_b2_audit", label: "Audit clinique", hint: "Audit structuré selon une méthode reconnue." },
              { id: "iade_b2_rmm", label: "RMM / CREX / revue qualité", hint: "Participation à une démarche qualité structurée." },
              { id: "iade_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration, actualisation ou mise en œuvre." },
              { id: "iade_b2_risques", label: "Gestion des risques", hint: "Prévention des événements indésirables et amélioration de la sécurité." },
              { id: "iade_b2_equipe", label: "Travail en équipe pluriprofessionnelle", hint: "Participation coordonnée à une prise en charge collective." }
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
              "Formation relation soignant-soigné",
              "Information / accompagnement patient",
              "Action avec association d’usagers",
              "Enquête de satisfaction / PREMs",
              "Dispositif d’annonce",
              "Action hors liste validée"
            ],
            actions: [
              { id: "iade_b3_relation", label: "Formation relation soignant-soigné", hint: "Communication, écoute, accompagnement." },
              { id: "iade_b3_information", label: "Information / accompagnement patient", hint: "Information pré-opératoire et accompagnement." },
              { id: "iade_b3_association", label: "Action avec association d’usagers", hint: "Participation à une action avec les usagers." },
              { id: "iade_b3_satisfaction", label: "Enquête de satisfaction / PREMs", hint: "Mesure de l’expérience patient." },
              { id: "iade_b3_annonce", label: "Dispositif d’annonce", hint: "Participation à une action d’annonce / accompagnement." }
            ]
          },
          {
            id: "bloc4",
            label: "Bloc 4",
            shortLabel: "Santé personnelle du professionnel",
            colorClass: "bloc4",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: { min: 2 },
            allReferentialActions: [
              "Suivi médical / médecin traitant",
              "Auto-évaluation de son état de santé",
              "Prévention des TMS",
              "Gestes et postures / ergonomie",
              "Gestion du stress / fatigue",
              "Activité physique régulière",
              "Prévention santé",
              "Action hors liste validée"
            ],
            actions: [
              { id: "iade_b4_suivi", label: "Suivi médical / médecin traitant", hint: "Avoir un suivi médical personnel." },
              { id: "iade_b4_autoeval", label: "Auto-évaluation de son état de santé", hint: "Démarche personnelle régulière." },
              { id: "iade_b4_tms", label: "Prévention des TMS", hint: "Prévention des troubles musculo-squelettiques liés à l’exercice." },
              { id: "iade_b4_ergonomie", label: "Gestes et postures / ergonomie", hint: "Préservation physique dans la pratique quotidienne." },
              { id: "iade_b4_stress", label: "Gestion du stress / fatigue", hint: "Prévention de la surcharge, récupération, équilibre." },
              { id: "iade_b4_sport", label: "Activité physique régulière", hint: "Pratique sportive ou activité physique régulière." }
            ]
          }
        ]
      },

      {
        id: "ibode",
        label: "Infirmier de bloc opératoire diplômé d’État",
        fullTitle: "Certification Périodique de l’Infirmier de bloc opératoire diplômé d’État",
        subtitle: "Profession : infirmier de bloc opératoire diplômé d’État",
        icon: "🩹",
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: { min: 2 },
            allReferentialActions: [
              "Action DPC IBODE",
              "Formation spécialisée bloc opératoire",
              "Congrès / colloque",
              "Formation certifiante",
              "Simulation / atelier pratique",
              "Enseignement",
              "Recherche",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ibode_b1_dpc", label: "Action DPC IBODE", hint: "Attestation de participation." },
              { id: "ibode_b1_formation", label: "Formation spécialisée bloc opératoire", hint: "Formation scientifique ou professionnelle." },
              { id: "ibode_b1_congres", label: "Congrès / colloque", hint: "Participation à un événement professionnel." },
              { id: "ibode_b1_certif", label: "Formation certifiante", hint: "DU, DIU ou autre formation certifiante." },
              { id: "ibode_b1_atelier", label: "Simulation / atelier pratique", hint: "Ex. instrumentation, hygiène, sécurité." },
              { id: "ibode_b1_enseignement", label: "Activité d’enseignement", hint: "Intervention ou enseignement dans le champ professionnel." }
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
              "Analyse de pratiques / EPP",
              "Audit clinique",
              "RMM / CREX / revue qualité",
              "Protocoles / procédures",
              "Gestion des risques",
              "Travail en équipe pluriprofessionnelle",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ibode_b2_epp", label: "Analyse de pratiques / EPP", hint: "Action d’évaluation ou d’analyse des pratiques." },
              { id: "ibode_b2_audit", label: "Audit clinique", hint: "Audit structuré selon une méthode reconnue." },
              { id: "ibode_b2_rmm", label: "RMM / CREX / revue qualité", hint: "Participation à une démarche qualité structurée." },
              { id: "ibode_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration, actualisation ou mise en œuvre." },
              { id: "ibode_b2_risques", label: "Gestion des risques", hint: "Prévention des événements indésirables et amélioration de la sécurité." },
              { id: "ibode_b2_equipe", label: "Travail en équipe pluriprofessionnelle", hint: "Participation coordonnée à une prise en charge collective." }
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
              "Formation relation soignant-soigné",
              "Information / accompagnement patient",
              "Action avec association d’usagers",
              "Enquête de satisfaction / PREMs",
              "Dispositif d’annonce",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ibode_b3_relation", label: "Formation relation soignant-soigné", hint: "Communication, écoute, accompagnement." },
              { id: "ibode_b3_information", label: "Information / accompagnement patient", hint: "Information et préparation du patient." },
              { id: "ibode_b3_association", label: "Action avec association d’usagers", hint: "Participation à une action avec les usagers." },
              { id: "ibode_b3_satisfaction", label: "Enquête de satisfaction / PREMs", hint: "Mesure de l’expérience patient." },
              { id: "ibode_b3_annonce", label: "Dispositif d’annonce", hint: "Participation à une action d’annonce / accompagnement." }
            ]
          },
          {
            id: "bloc4",
            label: "Bloc 4",
            shortLabel: "Santé personnelle du professionnel",
            colorClass: "bloc4",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: { min: 2 },
            allReferentialActions: [
              "Suivi médical / médecin traitant",
              "Auto-évaluation de son état de santé",
              "Prévention des TMS",
              "Gestes et postures / ergonomie",
              "Gestion du stress / fatigue",
              "Activité physique régulière",
              "Prévention santé",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ibode_b4_suivi", label: "Suivi médical / médecin traitant", hint: "Avoir un suivi médical personnel." },
              { id: "ibode_b4_autoeval", label: "Auto-évaluation de son état de santé", hint: "Démarche personnelle régulière." },
              { id: "ibode_b4_tms", label: "Prévention des TMS", hint: "Prévention des troubles musculo-squelettiques liés à l’exercice." },
              { id: "ibode_b4_ergonomie", label: "Gestes et postures / ergonomie", hint: "Préservation physique dans la pratique quotidienne." },
              { id: "ibode_b4_stress", label: "Gestion du stress / fatigue", hint: "Prévention de la surcharge, récupération, équilibre." },
              { id: "ibode_b4_sport", label: "Activité physique régulière", hint: "Pratique sportive ou activité physique régulière." }
            ]
          }
        ]
      },

      {
        id: "ipa",
        label: "Infirmier en pratique avancée",
        fullTitle: "Certification Périodique de l’Infirmier en pratique avancée",
        subtitle: "Profession : infirmier en pratique avancée",
        icon: "🧠",
        theme: {
          primary: "#2563eb",
          primary2: "#1d4ed8",
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: { min: 2 },
            allReferentialActions: [
              "Action DPC IPA",
              "Formation scientifique ou professionnelle",
              "Congrès / colloque",
              "Formation certifiante ou diplômante",
              "Atelier pratique / simulation",
              "Enseignement",
              "Recherche",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ipa_b1_dpc", label: "Action DPC IPA", hint: "Attestation de participation." },
              { id: "ipa_b1_formation", label: "Formation scientifique ou professionnelle", hint: "Formation reconnue dans le champ IPA." },
              { id: "ipa_b1_congres", label: "Congrès / colloque", hint: "Participation à un événement professionnel." },
              { id: "ipa_b1_certif", label: "Formation certifiante ou diplômante", hint: "DU, DIU ou autre formation certifiante." },
              { id: "ipa_b1_simulation", label: "Atelier pratique / simulation", hint: "Ex. raisonnement clinique, coordination, situations complexes." },
              { id: "ipa_b1_enseignement", label: "Activité d’enseignement", hint: "Intervention ou enseignement dans le champ professionnel." }
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
              "Analyse de pratiques / EPP",
              "Audit clinique",
              "Protocoles / procédures",
              "Participation à un registre / observatoire",
              "Gestion des risques",
              "Travail en équipe pluriprofessionnelle",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ipa_b2_epp", label: "Analyse de pratiques / EPP", hint: "Action d’évaluation ou d’analyse des pratiques." },
              { id: "ipa_b2_audit", label: "Audit clinique", hint: "Audit structuré selon une méthode reconnue." },
              { id: "ipa_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration, actualisation ou mise en œuvre." },
              { id: "ipa_b2_registre", label: "Participation à un registre / observatoire", hint: "Contribution active à une démarche de suivi." },
              { id: "ipa_b2_risques", label: "Gestion des risques", hint: "Prévention des événements indésirables et amélioration de la sécurité." },
              { id: "ipa_b2_equipe", label: "Travail en équipe pluriprofessionnelle", hint: "Participation coordonnée à une prise en charge collective." }
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
              "Formation relation soignant-soigné",
              "Programme d’éducation / prévention",
              "Action avec association d’usagers ou de patients",
              "Enquête de satisfaction / PREMs",
              "Accompagnement / adhésion du patient",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ipa_b3_relation", label: "Formation relation soignant-soigné", hint: "Communication, écoute, accompagnement, alliance thérapeutique." },
              { id: "ipa_b3_prevention", label: "Programme d’éducation / prévention", hint: "Prévention, information, autonomie du patient." },
              { id: "ipa_b3_association", label: "Action avec association d’usagers ou de patients", hint: "Participation à une action avec les usagers." },
              { id: "ipa_b3_satisfaction", label: "Enquête de satisfaction / PREMs", hint: "Mesure de l’expérience patient." },
              { id: "ipa_b3_adhesion", label: "Accompagnement / adhésion du patient", hint: "Action centrée sur l’observance et l’implication du patient." }
            ]
          },
          {
            id: "bloc4",
            label: "Bloc 4",
            shortLabel: "Santé personnelle du professionnel",
            colorClass: "bloc4",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: { min: 2 },
            allReferentialActions: [
              "Suivi médical / médecin traitant",
              "Auto-évaluation de son état de santé",
              "Prévention des TMS",
              "Gestes et postures / ergonomie",
              "Gestion du stress / fatigue",
              "Activité physique régulière",
              "Prévention santé",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ipa_b4_suivi", label: "Suivi médical / médecin traitant", hint: "Avoir un suivi médical personnel." },
              { id: "ipa_b4_autoeval", label: "Auto-évaluation de son état de santé", hint: "Démarche personnelle régulière." },
              { id: "ipa_b4_tms", label: "Prévention des TMS", hint: "Prévention des troubles musculo-squelettiques liés à l’exercice." },
              { id: "ipa_b4_ergonomie", label: "Gestes et postures / ergonomie", hint: "Préservation physique dans la pratique quotidienne." },
              { id: "ipa_b4_stress", label: "Gestion du stress / fatigue", hint: "Prévention de la surcharge, récupération, équilibre." },
              { id: "ipa_b4_sport", label: "Activité physique régulière", hint: "Pratique sportive ou activité physique régulière." }
            ]
          }
        ]
      },

      {
        id: "puericultrice",
        label: "Puéricultrice diplômée d’État",
        fullTitle: "Certification Périodique de la Puéricultrice diplômée d’État",
        subtitle: "Profession : puéricultrice diplômée d’État",
        icon: "🍼",
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: { min: 2 },
            allReferentialActions: [
              "Action DPC puéricultrice",
              "Formation scientifique ou professionnelle",
              "Congrès / colloque",
              "Formation certifiante ou diplômante",
              "Atelier pratique / simulation",
              "Enseignement",
              "Recherche",
              "Action hors liste validée"
            ],
            actions: [
              { id: "puer_b1_dpc", label: "Action DPC puéricultrice", hint: "Attestation de participation." },
              { id: "puer_b1_formation", label: "Formation scientifique ou professionnelle", hint: "Formation reconnue dans le champ de la puériculture." },
              { id: "puer_b1_congres", label: "Congrès / colloque", hint: "Participation à un événement professionnel." },
              { id: "puer_b1_certif", label: "Formation certifiante ou diplômante", hint: "DU, DIU ou autre formation certifiante." },
              { id: "puer_b1_simulation", label: "Atelier pratique / simulation", hint: "Ex. soins pédiatriques, urgences, parentalité." },
              { id: "puer_b1_enseignement", label: "Activité d’enseignement", hint: "Intervention ou enseignement dans le champ professionnel." }
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
              "Analyse de pratiques / EPP",
              "Audit clinique",
              "Protocoles / procédures",
              "Participation à un registre / observatoire",
              "Gestion des risques",
              "Travail en équipe pluriprofessionnelle",
              "Action hors liste validée"
            ],
            actions: [
              { id: "puer_b2_epp", label: "Analyse de pratiques / EPP", hint: "Action d’évaluation ou d’analyse des pratiques." },
              { id: "puer_b2_audit", label: "Audit clinique", hint: "Audit structuré selon une méthode reconnue." },
              { id: "puer_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration, actualisation ou mise en œuvre." },
              { id: "puer_b2_registre", label: "Participation à un registre / observatoire", hint: "Contribution active à une démarche de suivi." },
              { id: "puer_b2_risques", label: "Gestion des risques", hint: "Prévention des événements indésirables et amélioration de la sécurité." },
              { id: "puer_b2_equipe", label: "Travail en équipe pluriprofessionnelle", hint: "Participation coordonnée à une prise en charge collective." }
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
              "Formation relation soignant-soigné",
              "Programme d’éducation / prévention",
              "Action avec association d’usagers ou de patients",
              "Enquête de satisfaction / PREMs",
              "Accompagnement parental",
              "Action hors liste validée"
            ],
            actions: [
              { id: "puer_b3_relation", label: "Formation relation soignant-soigné", hint: "Communication, écoute, accompagnement." },
              { id: "puer_b3_prevention", label: "Programme d’éducation / prévention", hint: "Prévention, information, autonomie des familles." },
              { id: "puer_b3_association", label: "Action avec association d’usagers ou de patients", hint: "Participation à une action avec les usagers." },
              { id: "puer_b3_satisfaction", label: "Enquête de satisfaction / PREMs", hint: "Mesure de l’expérience patient / famille." },
              { id: "puer_b3_parentalite", label: "Accompagnement parental", hint: "Action centrée sur le soutien et l’accompagnement des familles." }
            ]
          },
          {
            id: "bloc4",
            label: "Bloc 4",
            shortLabel: "Santé personnelle du professionnel",
            colorClass: "bloc4",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: { min: 2 },
            allReferentialActions: [
              "Suivi médical / médecin traitant",
              "Auto-évaluation de son état de santé",
              "Prévention des TMS",
              "Gestes et postures / ergonomie",
              "Gestion du stress / fatigue",
              "Activité physique régulière",
              "Prévention santé",
              "Action hors liste validée"
            ],
            actions: [
              { id: "puer_b4_suivi", label: "Suivi médical / médecin traitant", hint: "Avoir un suivi médical personnel." },
              { id: "puer_b4_autoeval", label: "Auto-évaluation de son état de santé", hint: "Démarche personnelle régulière." },
              { id: "puer_b4_tms", label: "Prévention des TMS", hint: "Prévention des troubles musculo-squelettiques liés à l’exercice." },
              { id: "puer_b4_ergonomie", label: "Gestes et postures / ergonomie", hint: "Préservation physique dans la pratique quotidienne." },
              { id: "puer_b4_stress", label: "Gestion du stress / fatigue", hint: "Prévention de la surcharge, récupération, équilibre." },
              { id: "puer_b4_sport", label: "Activité physique régulière", hint: "Pratique sportive ou activité physique régulière." }
            ]
          }
        ]
      }
    ]
  });
})();

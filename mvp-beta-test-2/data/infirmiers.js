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
        id: "ide",
        label: "Infirmier diplômé d’État",
        fullTitle: "Certification Périodique de l’Infirmier diplômé d’État",
        subtitle: "Profession : infirmier diplômé d’État",
        icon: "💉",
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: { min: 2 },
            allReferentialActions: [
              "Action DPC infirmier",
              "Formation scientifique ou professionnelle",
              "Congrès / colloque / journée professionnelle",
              "Formation certifiante ou diplômante",
              "Atelier pratique / simulation",
              "Activité d’enseignement",
              "Activité de recherche",
              "Publication / communication professionnelle",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ide_b1_dpc", label: "Action DPC infirmier", hint: "Attestation de participation." },
              { id: "ide_b1_formation", label: "Formation scientifique ou professionnelle", hint: "Formation reconnue dans le champ infirmier." },
              { id: "ide_b1_congres", label: "Congrès / colloque / journée professionnelle", hint: "Participation à un événement professionnel." },
              { id: "ide_b1_diplome", label: "Formation certifiante ou diplômante", hint: "DU, DIU ou autre formation certifiante." },
              { id: "ide_b1_simulation", label: "Atelier pratique / simulation", hint: "Ex. gestes techniques, urgences, mises en situation." },
              { id: "ide_b1_enseignement", label: "Activité d’enseignement", hint: "Intervention ou enseignement dans le champ professionnel." }
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
              "Revue de dossiers / revue qualité",
              "Action hors liste validée"
            ],
            actions: [
              { id: "ide_b2_epp", label: "Analyse de pratiques / EPP", hint: "Action d’évaluation ou d’analyse des pratiques." },
              { id: "ide_b2_audit", label: "Audit clinique", hint: "Audit structuré selon une méthode reconnue." },
              { id: "ide_b2_protocoles", label: "Protocoles / procédures", hint: "Élaboration, actualisation ou mise en œuvre." },
              { id: "ide_b2_registre", label: "Participation à un registre / observatoire", hint: "Contribution active à une démarche de suivi." },
              { id: "ide_b2_risques", label: "Gestion des risques", hint: "Prévention des événements indésirables et amélioration de la sécurité." },
              { id: "ide_b2_equipe", label: "Travail en équipe pluriprofessionnelle", hint: "Participation coordonnée à une prise en charge collective." }
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
              { id: "ide_b3_relation", label: "Formation relation soignant-soigné", hint: "Communication, écoute, accompagnement, alliance thérapeutique." },
              { id: "ide_b3_prevention", label: "Programme d’éducation / prévention", hint: "Prévention, information, autonomie du patient." },
              { id: "ide_b3_association", label: "Action avec association d’usagers ou de patients", hint: "Participation à une action avec les usagers." },
              { id: "ide_b3_satisfaction", label: "Enquête de satisfaction / PREMs", hint: "Mesure de l’expérience patient." },
              { id: "ide_b3_adhesion", label: "Accompagnement / adhésion du patient", hint: "Action centrée sur l’observance et l’implication du patient." }
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
              { id: "ide_b4_suivi", label: "Suivi médical / médecin traitant", hint: "Avoir un suivi médical personnel." },
              { id: "ide_b4_autoeval", label: "Auto-évaluation de son état de santé", hint: "Démarche personnelle régulière." },
              { id: "ide_b4_tms", label: "Prévention des TMS", hint: "Prévention des troubles musculo-squelettiques liés à l’exercice." },
              { id: "ide_b4_ergonomie", label: "Gestes et postures / ergonomie", hint: "Préservation physique dans la pratique quotidienne." },
              { id: "ide_b4_stress", label: "Gestion du stress / fatigue", hint: "Prévention de la surcharge, récupération, équilibre." },
              { id: "ide_b4_sport", label: "Activité physique régulière", hint: "Pratique sportive ou activité physique régulière." }
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
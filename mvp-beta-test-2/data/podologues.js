(function () {
  "use strict";

  if (!window.CERTIFICATION_DATA || !Array.isArray(window.CERTIFICATION_DATA.professions)) {
    console.error("CERTIFICATION_DATA doit être initialisé avant de charger podologues.js");
    return;
  }

  window.CERTIFICATION_DATA.professions.push({
    id: "podologues",
    label: "Pédicure-podologue",
    profiles: [
      {
        id: "pedicure-podologue",
        label: "Pédicure-podologue",
        fullTitle: "Certification Périodique du Pédicure-podologue",
        subtitle: "Profession : pédicure-podologue",
        icon: "🦶",
        theme: {
          primary: "#b45309",
          primary2: "#92400e",
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Action DPC en pédicurie-podologie",
              "Formation scientifique ou professionnelle",
              "Congrès, colloque ou journée professionnelle",
              "Formation certifiante ou diplômante",
              "Atelier pratique / mise en situation",
              "Activité d’enseignement",
              "Activité de recherche",
              "Publication / communication professionnelle",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "podo_b1_dpc",
                label: "Action DPC en pédicurie-podologie",
                hint: "Attestation de participation."
              },
              {
                id: "podo_b1_formation",
                label: "Formation scientifique ou professionnelle",
                hint: "Formation reconnue dans le champ de la pédicurie-podologie."
              },
              {
                id: "podo_b1_congres",
                label: "Congrès / colloque / journée professionnelle",
                hint: "Participation à un événement professionnel."
              },
              {
                id: "podo_b1_diplome",
                label: "Formation certifiante ou diplômante",
                hint: "DU, DIU ou autre formation certifiante."
              },
              {
                id: "podo_b1_atelier",
                label: "Atelier pratique / mise en situation",
                hint: "Ex. geste technique, prise en charge du pied diabétique, orthèses, etc."
              },
              {
                id: "podo_b1_enseignement",
                label: "Activité d’enseignement",
                hint: "Intervention ou enseignement dans le champ professionnel."
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
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
              {
                id: "podo_b2_epp",
                label: "Analyse de pratiques / EPP",
                hint: "Action d’évaluation ou d’analyse des pratiques."
              },
              {
                id: "podo_b2_audit",
                label: "Audit clinique",
                hint: "Audit structuré selon une méthode reconnue."
              },
              {
                id: "podo_b2_protocoles",
                label: "Protocoles / procédures",
                hint: "Élaboration, actualisation ou mise en œuvre."
              },
              {
                id: "podo_b2_registre",
                label: "Participation à un registre / observatoire",
                hint: "Contribution active à une démarche de suivi."
              },
              {
                id: "podo_b2_risques",
                label: "Gestion des risques",
                hint: "Prévention des événements indésirables et amélioration de la sécurité."
              },
              {
                id: "podo_b2_equipe",
                label: "Travail en équipe pluriprofessionnelle",
                hint: "Participation coordonnée à une prise en charge collective."
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Formation relation thérapeutique",
              "Programme d’éducation / prévention",
              "Action avec association d’usagers ou de patients",
              "Enquête de satisfaction / PREMs",
              "Accompagnement / adhésion du patient",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "podo_b3_relation",
                label: "Formation relation thérapeutique",
                hint: "Communication, écoute, pédagogie, alliance thérapeutique."
              },
              {
                id: "podo_b3_prevention",
                label: "Programme d’éducation / prévention",
                hint: "Ex. prévention du pied diabétique, chaussage, hygiène, autonomie."
              },
              {
                id: "podo_b3_association",
                label: "Action avec association d’usagers ou de patients",
                hint: "Participation à une action avec les usagers."
              },
              {
                id: "podo_b3_satisfaction",
                label: "Enquête de satisfaction / PREMs",
                hint: "Mesure de l’expérience patient."
              },
              {
                id: "podo_b3_adhesion",
                label: "Accompagnement / adhésion du patient",
                hint: "Action centrée sur l’observance, la compréhension et l’implication du patient."
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
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
              {
                id: "podo_b4_suivi",
                label: "Suivi médical / médecin traitant",
                hint: "Avoir un suivi médical personnel."
              },
              {
                id: "podo_b4_autoeval",
                label: "Auto-évaluation de son état de santé",
                hint: "Démarche personnelle régulière."
              },
              {
                id: "podo_b4_tms",
                label: "Prévention des TMS",
                hint: "Prévention des troubles musculo-squelettiques liés à l’exercice."
              },
              {
                id: "podo_b4_ergonomie",
                label: "Gestes et postures / ergonomie",
                hint: "Préservation physique dans la pratique quotidienne."
              },
              {
                id: "podo_b4_stress",
                label: "Gestion du stress / fatigue",
                hint: "Prévention de la surcharge, récupération, équilibre."
              },
              {
                id: "podo_b4_sport",
                label: "Activité physique régulière",
                hint: "Pratique sportive ou activité physique régulière."
              }
            ]
          }
        ]
      }
    ]
  });
})();
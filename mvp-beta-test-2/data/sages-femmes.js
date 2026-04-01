(function () {
  "use strict";

  if (!window.CERTIFICATION_DATA || !Array.isArray(window.CERTIFICATION_DATA.professions)) {
    console.error("CERTIFICATION_DATA doit être initialisé avant de charger sages-femmes.js");
    return;
  }

  window.CERTIFICATION_DATA.professions.push({
    id: "sages-femmes",
    label: "Sage-femme",
    profiles: [
      {
        id: "sage-femme",
        label: "Sage-femme",
        fullTitle: "Certification Périodique de la Sage-femme",
        subtitle: "Profession : sage-femme",
        icon: "🤱",
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
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Action DPC en maïeutique",
              "Formation scientifique ou professionnelle",
              "Congrès, colloque ou journée professionnelle",
              "Formation certifiante ou diplômante",
              "Simulation / entraînement en situation",
              "Activité d’enseignement",
              "Activité de recherche",
              "Publication / communication professionnelle",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "sf_b1_dpc",
                label: "Action DPC en maïeutique",
                hint: "Attestation de participation."
              },
              {
                id: "sf_b1_formation",
                label: "Formation scientifique ou professionnelle",
                hint: "Formation reconnue dans le champ de la maïeutique."
              },
              {
                id: "sf_b1_congres",
                label: "Congrès / colloque / journée professionnelle",
                hint: "Participation à un événement professionnel."
              },
              {
                id: "sf_b1_diplome",
                label: "Formation certifiante ou diplômante",
                hint: "DU, DIU ou autre formation certifiante."
              },
              {
                id: "sf_b1_simulation",
                label: "Simulation / entraînement en situation",
                hint: "Ex. urgences obstétricales, gestes techniques, travail en équipe."
              },
              {
                id: "sf_b1_enseignement",
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
              "RMM / CREX / revue qualité",
              "Protocoles / procédures",
              "Participation à un registre / observatoire",
              "Gestion des risques",
              "Travail en équipe pluriprofessionnelle",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "sf_b2_epp",
                label: "Analyse de pratiques / EPP",
                hint: "Action d’évaluation ou d’analyse des pratiques."
              },
              {
                id: "sf_b2_audit",
                label: "Audit clinique",
                hint: "Audit structuré selon une méthode reconnue."
              },
              {
                id: "sf_b2_rmm",
                label: "RMM / CREX / revue qualité",
                hint: "Participation à une démarche qualité structurée."
              },
              {
                id: "sf_b2_protocoles",
                label: "Protocoles / procédures",
                hint: "Élaboration, actualisation ou mise en œuvre."
              },
              {
                id: "sf_b2_registre",
                label: "Participation à un registre / observatoire",
                hint: "Contribution active à une démarche de suivi."
              },
              {
                id: "sf_b2_risques",
                label: "Gestion des risques",
                hint: "Prévention des événements indésirables et amélioration de la sécurité."
              }
            ]
          },
          {
            id: "bloc3",
            label: "Bloc 3",
            shortLabel: "Relation avec les patientes",
            colorClass: "bloc3",
            openByDefault: false,
            validationMode: "minimumDistinct",
            ruleText: "Prototype : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Formation sur la relation soignant-soignée",
              "Dispositif d’annonce",
              "Entretien prénatal / accompagnement",
              "Programme d’éducation / prévention",
              "Action avec association d’usagers ou de patientes",
              "Enquête de satisfaction / PREMs",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "sf_b3_relation",
                label: "Formation sur la relation soignant-soignée",
                hint: "Communication, écoute, accompagnement, bientraitance."
              },
              {
                id: "sf_b3_annonce",
                label: "Dispositif d’annonce",
                hint: "Annonce, accompagnement ou information sensible."
              },
              {
                id: "sf_b3_entretien",
                label: "Entretien prénatal / accompagnement personnalisé",
                hint: "Action centrée sur l’écoute et le suivi de la patiente."
              },
              {
                id: "sf_b3_prevention",
                label: "Programme d’éducation / prévention",
                hint: "Préparation à la naissance, allaitement, prévention, information."
              },
              {
                id: "sf_b3_association",
                label: "Action avec association d’usagers ou de patientes",
                hint: "Participation à une action avec les usagers."
              },
              {
                id: "sf_b3_satisfaction",
                label: "Enquête de satisfaction / PREMs",
                hint: "Mesure de l’expérience patiente."
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
              "Consultation médecine du travail",
              "Maintien du calendrier vaccinal",
              "Prévention AES",
              "Formation gestes et postures / ergonomie",
              "Gestion du stress / risques psychosociaux",
              "Activité physique régulière",
              "Prévention des violences",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "sf_b4_suivi",
                label: "Suivi médical / médecin traitant",
                hint: "Avoir un suivi médical personnel."
              },
              {
                id: "sf_b4_autoeval",
                label: "Auto-évaluation de son état de santé",
                hint: "Démarche personnelle régulière."
              },
              {
                id: "sf_b4_medtravail",
                label: "Consultation médecine du travail",
                hint: "Visite ou suivi de santé au travail."
              },
              {
                id: "sf_b4_vaccins",
                label: "Maintien du calendrier vaccinal",
                hint: "Vaccinations recommandées à jour."
              },
              {
                id: "sf_b4_aes",
                label: "Prévention AES",
                hint: "Prévention des accidents d’exposition au sang."
              },
              {
                id: "sf_b4_ergonomie",
                label: "Gestes et postures / ergonomie",
                hint: "Prévention des TMS et sécurité physique."
              },
              {
                id: "sf_b4_stress",
                label: "Gestion du stress / risques psychosociaux",
                hint: "Stress, fatigue, burn-out, charge émotionnelle."
              },
              {
                id: "sf_b4_sport",
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
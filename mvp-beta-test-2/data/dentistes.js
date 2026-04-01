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
            ruleText: "Prototype test : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Action de formation DPC",
              "Formation scientifique ou professionnelle",
              "Formation certifiante ou diplômante",
              "Congrès, colloque ou journée scientifique",
              "Activité d’enseignement",
              "Activité de recherche",
              "Publication scientifique",
              "Travaux d’expertise",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "dent_b1_dpc",
                label: "Action de formation DPC",
                hint: "Attestation de participation."
              },
              {
                id: "dent_b1_formation",
                label: "Formation scientifique ou professionnelle",
                hint: "Formation reconnue dans le champ professionnel."
              },
              {
                id: "dent_b1_diplome",
                label: "Formation certifiante ou diplômante",
                hint: "DU, DIU ou autre formation certifiante."
              },
              {
                id: "dent_b1_congres",
                label: "Congrès / colloque / journée scientifique",
                hint: "Participation à un événement scientifique."
              },
              {
                id: "dent_b1_enseignement",
                label: "Activité d’enseignement",
                hint: "Intervention ou enseignement dans le champ de la profession."
              },
              {
                id: "dent_b1_recherche",
                label: "Activité de recherche",
                hint: "Participation à une activité de recherche."
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
            ruleText: "Prototype test : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Analyse de pratiques / EPP",
              "Gestion des risques",
              "Audit clinique",
              "RMM / CREX / revue qualité",
              "Participation à un registre",
              "Participation à une commission / groupe qualité",
              "Protocoles / procédures",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "dent_b2_epp",
                label: "Analyse de pratiques / EPP",
                hint: "Action d’évaluation des pratiques professionnelles."
              },
              {
                id: "dent_b2_risques",
                label: "Gestion des risques",
                hint: "Action centrée sur la sécurité et les risques."
              },
              {
                id: "dent_b2_audit",
                label: "Audit clinique",
                hint: "Audit selon une méthode reconnue."
              },
              {
                id: "dent_b2_rmm",
                label: "RMM / CREX / revue qualité",
                hint: "Participation à une démarche qualité structurée."
              },
              {
                id: "dent_b2_registre",
                label: "Participation à un registre",
                hint: "Contribution à un registre ou observatoire."
              },
              {
                id: "dent_b2_protocoles",
                label: "Élaboration de protocoles / procédures",
                hint: "Rédaction ou participation à une procédure qualité."
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
            ruleText: "Prototype test : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Formation sur la relation patient",
              "Association d’usagers / de patients",
              "Programme associant des patients",
              "Enquête de satisfaction / PREMs",
              "Dispositif d’annonce",
              "Groupe d’échange sur la relation patient",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "dent_b3_formation",
                label: "Formation sur la relation patient",
                hint: "Formation sur l’écoute, l’information ou la communication."
              },
              {
                id: "dent_b3_association",
                label: "Action avec une association d’usagers / de patients",
                hint: "Participation à une action menée avec les usagers."
              },
              {
                id: "dent_b3_programme",
                label: "Programme associant des patients",
                hint: "Programme d’information, d’éducation ou de sensibilisation."
              },
              {
                id: "dent_b3_satisfaction",
                label: "Enquête de satisfaction / PREMs",
                hint: "Mesure ou exploitation du retour patient."
              },
              {
                id: "dent_b3_annonce",
                label: "Dispositif d’annonce",
                hint: "Participation à un dispositif d’annonce adapté."
              },
              {
                id: "dent_b3_groupe",
                label: "Groupe d’échange sur la relation patient",
                hint: "Travail entre pairs sur la relation avec le patient."
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
            ruleText: "Prototype test : 2 actions différentes minimum dans ce bloc.",
            requirements: {
              min: 2
            },
            allReferentialActions: [
              "Avoir un médecin traitant / suivi médical",
              "Auto-évaluation de son état de santé",
              "Action de prévention en santé",
              "Gestion des risques professionnels",
              "Activité physique régulière",
              "Activité culturelle / sociale",
              "Groupe d’échange entre pairs sur la santé du professionnel",
              "Action hors liste validée"
            ],
            actions: [
              {
                id: "dent_b4_suivi",
                label: "Suivi médical / médecin traitant",
                hint: "Avoir un suivi médical personnel."
              },
              {
                id: "dent_b4_autoeval",
                label: "Auto-évaluation de son état de santé",
                hint: "Démarche personnelle d’auto-évaluation."
              },
              {
                id: "dent_b4_prevention",
                label: "Action de prévention en santé",
                hint: "Ex. sommeil, nutrition, prévention, hygiène de vie."
              },
              {
                id: "dent_b4_risques",
                label: "Gestion des risques professionnels",
                hint: "Ergonomie, exposition, prévention au cabinet, etc."
              },
              {
                id: "dent_b4_sport",
                label: "Activité physique régulière",
                hint: "Pratique sportive régulière."
              },
              {
                id: "dent_b4_pairs",
                label: "Groupe d’échange entre pairs sur la santé du professionnel",
                hint: "Partage entre confrères sur la santé du praticien."
              }
            ]
          }
        ]
      }
    ]
  });
})();
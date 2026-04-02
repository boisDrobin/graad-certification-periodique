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
  subtitle: "Profession : pédicurie-podologie",
  icon: "🦶",
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
      ruleText: "Validation pédicure-podologue : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Simulation en santé",
        "Programme intégré au titre de l’ANDPC",
        "Programme intégré avec action de formation continue",
        "Présentation de travaux scientifiques",
        "Porteur d’un projet de recherche institutionnelle ou établissement de santé",
        "Participation à un parcours de santé et d’études de cas en exercice coordonné et protocolé d’une équipe pluriprofessionnelle",
        "Participation à l’élaboration interprofessionnelle d’un programme d’ETP ou coordination d’un programme au sein d’un exercice coordonné",
        "Participation aux instances représentatives et décisionnelles de la pédicurie-podologie",
        "AFGSU2 et renouvellement",
        "Action hors liste validée par le CNPP"
      ],
      actions: [
        {
          id: "pp_b1_simulation",
          label: "Simulation en santé",
          hint: "Type d’action : évaluation des pratiques professionnelles, gestion des risques, formation cognitive ; durée minimale 6h ; attestation de présence ; évaluation des acquis ; absence de lien d’intérêt avec des entreprises commercialisant des produits ou services pouvant donner lieu à une prise en charge du patient."
        },
        {
          id: "pp_b1_programme_integre_andpc",
          label: "Programme intégré au titre de l’ANDPC",
          hint: "Type d’action : évaluation des pratiques professionnelles, formation cognitive, gestion des risques ; formation et analyse des pratiques ; durée minimale 6h ; attestation de présence avec émargement ; attestation de fin de formation ; évaluation des acquis ; modalité présentielle."
        },
        {
          id: "pp_b1_programme_integre_fc",
          label: "Programme intégré avec action de formation continue",
          hint: "Action explicitement listée dans le référentiel des pédicures-podologues ; relève d’un programme intégré articulant formation continue et autres dimensions du parcours."
        },
        {
          id: "pp_b1_presentation_travaux",
          label: "Présentation de travaux scientifiques",
          hint: "Intervenant dans un congrès labellisé ; intervention ou poster en lien avec les compétences du pédicure-podologue ; attestation de l’organisateur ; 2 max par période de certification."
        },
        {
          id: "pp_b1_projet_recherche",
          label: "Porteur d’un projet de recherche institutionnelle ou établissement de santé",
          hint: "Projet validé par le comité scientifique après avis de la commission scientifique du CNPP ; en lien avec les compétences en pédicurie-podologie ; attestation de participation au projet par l’institution ou l’établissement de santé ; 2 max par période de certification."
        },
        {
          id: "pp_b1_parcours_sante_exercice_coordonne",
          label: "Participation à un parcours de santé et d’études de cas en exercice coordonné et protocolé",
          hint: "Action transversale axe 1/2/3/4 ; adhésion à un exercice coordonné ; attestation de participation par la structure ; action visée par le projet de santé de la structure porteuse ; 2 max par période de certification."
        },
        {
          id: "pp_b1_etp_coordination",
          label: "Participation à l’élaboration interprofessionnelle d’un programme d’ETP ou coordination d’un programme",
          hint: "Action transversale axe 1/2/3/4 ; programme ETP ou de coordination ; attestation de participation active de la structure d’exercice coordonné ; 2 max par période de certification."
        },
        {
          id: "pp_b1_instances_representatives",
          label: "Participation aux instances représentatives et décisionnelles de la pédicurie-podologie",
          hint: "Élu ordinal, élu d’un syndicat représentatif, membre du conseil d’administration du CNPP ou membre de la commission scientifique du CNPP ; 1 mandat par période de certification ; attestation de la structure avec poste occupé."
        },
        {
          id: "pp_b1_afgsu2",
          label: "AFGSU2 et renouvellement",
          hint: "Action explicitement listée dans le référentiel pédicure-podologue comme action transversale."
        },
        {
          id: "pp_b1_hors_liste",
          label: "Action hors liste validée par le CNPP",
          hint: "Action soumise au comité scientifique du CNPP pour validation selon les critères de labellisation en annexe."
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
      ruleText: "Validation pédicure-podologue : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Simulation en santé",
        "Programme intégré au titre de l’ANDPC",
        "Programme intégré avec action de formation continue",
        "Porteur d’un projet de recherche institutionnelle ou établissement de santé",
        "Participation à un parcours de santé et d’études de cas en exercice coordonné et protocolé d’une équipe pluriprofessionnelle",
        "Participation à l’élaboration interprofessionnelle d’un programme d’ETP ou coordination d’un programme au sein d’un exercice coordonné",
        "Participation aux instances représentatives et décisionnelles de la pédicurie-podologie",
        "AFGSU2 et renouvellement",
        "Action hors liste validée par le CNPP"
      ],
      actions: [
        {
          id: "pp_b2_simulation",
          label: "Simulation en santé",
          hint: "Action relevant à la fois de l’évaluation des pratiques professionnelles, de la gestion des risques et de la formation cognitive ; durée minimale 6h ; attestation de présence ; évaluation des acquis."
        },
        {
          id: "pp_b2_programme_integre_andpc",
          label: "Programme intégré au titre de l’ANDPC",
          hint: "Formation et analyse des pratiques ; durée minimale 6h ; présence avec émargement ; attestation de fin de formation ; évaluation des acquis ; modalité présentielle."
        },
        {
          id: "pp_b2_programme_integre_fc",
          label: "Programme intégré avec action de formation continue",
          hint: "Action explicitement listée dans le référentiel pédicure-podologue pour les axes 1/2/3."
        },
        {
          id: "pp_b2_projet_recherche",
          label: "Porteur d’un projet de recherche institutionnelle ou établissement de santé",
          hint: "Type d’action : formation cognitive, gestion des risques, évaluation des pratiques professionnelles ; projet validé par le comité scientifique et la commission scientifique du CNPP."
        },
        {
          id: "pp_b2_parcours_sante_exercice_coordonne",
          label: "Participation à un parcours de santé et d’études de cas en exercice coordonné et protocolé",
          hint: "Type d’action : gestion des risques ; adhésion à un exercice coordonné ; attestation de participation par la structure ; projet visé par le projet de santé de la structure porteuse."
        },
        {
          id: "pp_b2_etp_coordination",
          label: "Participation à l’élaboration interprofessionnelle d’un programme d’ETP ou coordination d’un programme",
          hint: "Type d’action : gestion des risques, évaluation des pratiques professionnelles, formation cognitive ; programme ETP ou de coordination ; attestation de participation active de la structure."
        },
        {
          id: "pp_b2_instances_representatives",
          label: "Participation aux instances représentatives et décisionnelles de la pédicurie-podologie",
          hint: "Type d’action : gestion des risques, formation continue ; mandat ordinal, syndical ou CNPP."
        },
        {
          id: "pp_b2_afgsu2",
          label: "AFGSU2 et renouvellement",
          hint: "Action explicitement listée dans le référentiel comme transversale."
        },
        {
          id: "pp_b2_hors_liste",
          label: "Action hors liste validée par le CNPP",
          hint: "Action soumise au comité scientifique du CNPP pour validation."
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
      ruleText: "Validation pédicure-podologue : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Simulation en santé",
        "Programme intégré au titre de l’ANDPC",
        "Programme intégré avec action de formation continue",
        "Présentation de travaux scientifiques",
        "Porteur d’un projet de recherche institutionnelle ou établissement de santé",
        "Participation à un parcours de santé et d’études de cas en exercice coordonné et protocolé d’une équipe pluriprofessionnelle",
        "Participation à l’élaboration interprofessionnelle d’un programme d’ETP ou coordination d’un programme au sein d’un exercice coordonné",
        "Participation aux instances représentatives et décisionnelles de la pédicurie-podologie",
        "AFGSU2 et renouvellement",
        "Action hors liste validée par le CNPP"
      ],
      actions: [
        {
          id: "pp_b3_simulation",
          label: "Simulation en santé",
          hint: "Action transversale axe 1/2/3 ; durée minimale 6h ; attestation de présence aux sessions ; fiche d’aides à la progression."
        },
        {
          id: "pp_b3_programme_integre_andpc",
          label: "Programme intégré au titre de l’ANDPC",
          hint: "Action transversale axe 1/2/3 articulant formation et analyse des pratiques."
        },
        {
          id: "pp_b3_programme_integre_fc",
          label: "Programme intégré avec action de formation continue",
          hint: "Action explicitement listée dans le référentiel pédicure-podologue."
        },
        {
          id: "pp_b3_presentation_travaux",
          label: "Présentation de travaux scientifiques",
          hint: "Intervenant ou poster en lien avec les compétences du pédicure-podologue, dans un congrès labellisé."
        },
        {
          id: "pp_b3_projet_recherche",
          label: "Porteur d’un projet de recherche institutionnelle ou établissement de santé",
          hint: "Peut relever de l’axe 3 lorsque le projet est en lien avec les compétences du pédicure-podologue et validé par le CNPP."
        },
        {
          id: "pp_b3_parcours_sante_exercice_coordonne",
          label: "Participation à un parcours de santé et d’études de cas en exercice coordonné et protocolé",
          hint: "Action transversale pouvant contribuer à la qualité de la relation patient dans un cadre pluriprofessionnel."
        },
        {
          id: "pp_b3_etp_coordination",
          label: "Participation à l’élaboration interprofessionnelle d’un programme d’ETP ou coordination d’un programme",
          hint: "Action transversale axe 1/2/3/4 ; attestation de participation active de la structure d’exercice coordonné."
        },
        {
          id: "pp_b3_instances_representatives",
          label: "Participation aux instances représentatives et décisionnelles de la pédicurie-podologie",
          hint: "Action transversale également valorisable dans l’axe 3 selon le référentiel."
        },
        {
          id: "pp_b3_afgsu2",
          label: "AFGSU2 et renouvellement",
          hint: "Action explicitement listée dans le référentiel pédicure-podologue comme transversale."
        },
        {
          id: "pp_b3_hors_liste",
          label: "Action hors liste validée par le CNPP",
          hint: "Action soumise au comité scientifique du CNPP pour validation."
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
      ruleText: "Validation pédicure-podologue : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participation à un parcours de santé et d’études de cas en exercice coordonné et protocolé d’une équipe pluriprofessionnelle",
        "Participation à l’élaboration interprofessionnelle d’un programme d’ETP ou coordination d’un programme au sein d’un exercice coordonné",
        "Participation aux instances représentatives et décisionnelles de la pédicurie-podologie",
        "AFGSU2 et renouvellement",
        "Action hors liste validée par le CNPP"
      ],
      actions: [
        {
          id: "pp_b4_parcours_sante_exercice_coordonne",
          label: "Participation à un parcours de santé et d’études de cas en exercice coordonné et protocolé",
          hint: "Action transversale axe 1/2/3/4 ; adhésion à un exercice coordonné ; attestation de participation active de la structure."
        },
        {
          id: "pp_b4_etp_coordination",
          label: "Participation à l’élaboration interprofessionnelle d’un programme d’ETP ou coordination d’un programme",
          hint: "Action transversale axe 1/2/3/4 ; programme ETP ou coordination en exercice coordonné ; attestation de participation active."
        },
        {
          id: "pp_b4_instances_representatives",
          label: "Participation aux instances représentatives et décisionnelles de la pédicurie-podologie",
          hint: "Mandat ordinal, syndical ou responsabilité au sein du CNPP ; attestation par la structure."
        },
        {
          id: "pp_b4_afgsu2",
          label: "AFGSU2 et renouvellement",
          hint: "Action explicitement listée dans le référentiel pédicure-podologue comme transversale aux 4 axes."
        },
        {
          id: "pp_b4_hors_liste",
          label: "Action hors liste validée par le CNPP",
          hint: "Action soumise au comité scientifique du CNPP pour validation selon les critères de labellisation en annexe."
        }
      ]
    }
  ]
}
    ]
  });
})();

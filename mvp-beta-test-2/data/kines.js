(function () {
  "use strict";

  if (!window.CERTIFICATION_DATA || !Array.isArray(window.CERTIFICATION_DATA.professions)) {
    console.error("CERTIFICATION_DATA doit être initialisé avant de charger kines.js");
    return;
  }

  window.CERTIFICATION_DATA.professions.push({
    id: "kines",
    label: "Masseur-kinésithérapeute",
    profiles: [
{
  id: "masseurs-kinesitherapeutes",
  label: "Masseur-kinésithérapeute",
  fullTitle: "Certification Périodique du Masseur-kinésithérapeute",
  subtitle: "Profession : masso-kinésithérapie",
  icon: "👐",
  theme: {
    primary: "#0f766e",
    primary2: "#0b5f5a",
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
      ruleText: "Validation masseur-kinésithérapeute : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Formation DPC : formation continue +/- évaluation des pratiques professionnelles +/- gestion des risques",
        "Formation continue : ANFH, OPCO, FIF-PL, CPF…",
        "Formation diplômante / certifiante",
        "Formation en situation de travail",
        "Participation aux congrès professionnels ou des domaines de la santé",
        "Participation à un protocole de tutorat / mentorat",
        "Participation à l’enseignement et/ou à la recherche",
        "Contribution scientifique à une manifestation professionnelle organisée par une société savante",
        "Rencontres et interventions institutionnelles en lien avec l’amélioration des connaissances et des compétences",
        "Lecture d’une revue scientifique avec questionnaire permettant attestation de lecture",
        "Participation à des coopérations pluriprofessionnelles et interdisciplinaires",
        "Participation à des actions de prévention ou de promotion de la santé sur un territoire",
        "Participation à des actions innovantes protocolées",
        "Action hors liste validée par la Commission Professionnelle des Masseurs Kinésithérapeutes"
      ],
      actions: [
        {
          id: "mk_b1_dpc",
          label: "Formation DPC",
          hint: "Formation continue pouvant inclure évaluation des pratiques professionnelles et/ou gestion des risques ; action relevant explicitement de la typologie du référentiel."
        },
        {
          id: "mk_b1_formation_continue",
          label: "Formation continue (ANFH, OPCO, FIF-PL, CPF…)",
          hint: "Action relevant explicitement de la typologie des actions de formation du référentiel."
        },
        {
          id: "mk_b1_diplomante_certifiante",
          label: "Formation diplômante / certifiante",
          hint: "Action relevant explicitement de la typologie des actions de formation du référentiel."
        },
        {
          id: "mk_b1_fest",
          label: "Formation en situation de travail",
          hint: "Action relevant explicitement de la typologie des actions de formation du référentiel."
        },
        {
          id: "mk_b1_congres",
          label: "Participation à des congrès professionnels ou des domaines de la santé",
          hint: "Action support de l’exercice professionnel explicitement listée dans l’annexe 3."
        },
        {
          id: "mk_b1_tutorat_mentorat",
          label: "Participation à un protocole de tutorat / mentorat",
          hint: "Action support de l’exercice professionnel explicitement listée dans l’annexe 3."
        },
        {
          id: "mk_b1_enseignement_recherche",
          label: "Participation à l’enseignement et/ou à la recherche",
          hint: "Action support de l’exercice professionnel explicitement listée dans l’annexe 3."
        },
        {
          id: "mk_b1_contribution_scientifique",
          label: "Contribution scientifique à une manifestation professionnelle organisée par une société savante",
          hint: "Doit concerner une société savante reconnue par le CNPMK ou par un autre CNP d’une profession à ordre ; types d’évènements acceptés : colloque, congrès, symposium, conférence."
        },
        {
          id: "mk_b1_rencontres_institutionnelles",
          label: "Rencontres et interventions institutionnelles en lien avec l’amélioration des connaissances et des compétences",
          hint: "La durée des interventions doit atteindre un minimum de 18 heures sur une période de certification pour être validante."
        },
        {
          id: "mk_b1_revue_questionnaire",
          label: "Lecture d’une revue scientifique avec questionnaire permettant attestation de lecture",
          hint: "Action explicitement listée dans les fiches de l’axe 1."
        },
        {
          id: "mk_b1_cooperation_pluripro",
          label: "Participation à des coopérations pluriprofessionnelles et interdisciplinaires",
          hint: "Action support de l’exercice professionnel explicitement listée dans l’annexe 3."
        },
        {
          id: "mk_b1_prevention_territoire",
          label: "Participation à des actions de prévention ou de promotion de la santé sur un territoire",
          hint: "Action support de l’exercice professionnel explicitement listée dans l’annexe 3."
        },
        {
          id: "mk_b1_actions_innovantes",
          label: "Participation à des actions innovantes protocolées",
          hint: "Action support de l’exercice professionnel explicitement listée dans l’annexe 3."
        },
        {
          id: "mk_b1_hors_liste",
          label: "Action hors liste validée par la Commission Professionnelle",
          hint: "Action soumise à la Commission Professionnelle des Masseurs Kinésithérapeutes selon les critères d’éligibilité du référentiel."
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
      ruleText: "Validation masseur-kinésithérapeute : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Démarches d’évaluation ou d’analyse des pratiques professionnelles (EPP / APP)",
        "Démarches de certification des établissements de santé et médico-sociaux",
        "Démarches préventives, de gestion des risques et de sécurité des soins",
        "Démarches correctives d’analyse des évènements indésirables associés aux soins",
        "Démarches institutionnelles (commissions professionnelles, travaux institutionnels, rencontres ARS…)",
        "Audit du bilan diagnostic kinésithérapique et du plan de traitement initial",
        "Contribution à une démarche qualité sectorielle",
        "Participation au tutorat de stage",
        "Mise en œuvre formalisée d’un encadrement ou accompagnement de professionnel, mentorat",
        "Analyse réflexive individuelle guidée à partir de situations relevant de la déontologie",
        "Autoscopie et auto-évaluation",
        "Action hors liste validée par la Commission Professionnelle des Masseurs Kinésithérapeutes"
      ],
      actions: [
        {
          id: "mk_b2_epp_app",
          label: "Démarche d’EPP / APP",
          hint: "Action relevant explicitement de la typologie des démarches d’amélioration de la qualité et des risques en santé."
        },
        {
          id: "mk_b2_certification_etablissement",
          label: "Démarche de certification d’établissement de santé ou médico-social",
          hint: "Action relevant explicitement de la typologie du référentiel."
        },
        {
          id: "mk_b2_gdr_securite",
          label: "Démarche préventive de gestion des risques et de sécurité des soins",
          hint: "Action relevant explicitement de la typologie du référentiel."
        },
        {
          id: "mk_b2_eias",
          label: "Analyse des évènements indésirables associés aux soins",
          hint: "Action relevant explicitement de la typologie corrective d’analyse des EIAS."
        },
        {
          id: "mk_b2_demarches_institutionnelles",
          label: "Démarches institutionnelles",
          hint: "Commissions professionnelles, travaux institutionnels, rencontres ARS…"
        },
        {
          id: "mk_b2_audit_bdk",
          label: "Audit du bilan diagnostic kinésithérapique et du plan de traitement initial",
          hint: "Minimum 6 dossiers comportant les initiales des patients concernés à présenter par période certificative ; les éléments retraçant les connaissances et compétences du praticien doivent être explicités en lien avec le bilan, le plan de traitement et le contexte de prise en charge."
        },
        {
          id: "mk_b2_demarche_qualite_sectorielle",
          label: "Contribution à une démarche qualité sectorielle",
          hint: "Une seule participation à cette démarche par période certificative est validante ; exemples cités : Qualiopi, participation à l’enregistrement au DPC d’un organisme de formation, validation d’une démarche ISO 9001 pour une structure."
        },
        {
          id: "mk_b2_tutorat_stage",
          label: "Participation au tutorat de stage",
          hint: "Action labellisée par la Commission Professionnelle ; l’attestation de formation au tutorat doit respecter le nombre d’heures et les modalités de mise en situation et d’hétéroévaluation prévues."
        },
        {
          id: "mk_b2_mentorat",
          label: "Mise en œuvre formalisée d’un encadrement ou accompagnement de professionnel, mentorat",
          hint: "Nécessite une formation ou un diplôme permettant de légitimer l’animation de mentorats ; au moins 1 mentorat sur 3 des 6 années de la période certificative est attendu."
        },
        {
          id: "mk_b2_reflexive_deontologie",
          label: "Analyse réflexive individuelle guidée à partir de situations relevant de la déontologie",
          hint: "Action explicitement listée dans les fiches de l’axe 2."
        },
        {
          id: "mk_b2_autoscopie",
          label: "Autoscopie et auto-évaluation",
          hint: "Nécessite une séquence filmée du praticien lors d’une prise en charge courante ; utilisation d’une méthodologie objective d’auto-analyse réflexive accompagnée d’un plan d’amélioration ; validation si au moins 1 situation par an sur au moins 3 années par période certificative."
        },
        {
          id: "mk_b2_hors_liste",
          label: "Action hors liste validée par la Commission Professionnelle",
          hint: "Action soumise à la Commission Professionnelle des Masseurs Kinésithérapeutes selon les critères d’éligibilité du référentiel."
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
      ruleText: "Validation masseur-kinésithérapeute : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Action éligible au DPC formant à la communication avec le patient dans la relation éthique et déontologique",
        "Participation à un dispositif d’accès aux soins",
        "Affichage des documents professionnels obligatoires",
        "Utilisation annuelle et récurrente du numérique en santé avec respect du RGPD",
        "Actions visant l’amélioration de la relation avec les patients au regard des recommandations de bonne pratique, des valeurs professionnelles, de l’éthique, de la déontologie et des droits des patients",
        "Action hors liste validée par la Commission Professionnelle des Masseurs Kinésithérapeutes"
      ],
      actions: [
        {
          id: "mk_b3_dpc_communication",
          label: "Action DPC formant à la communication avec le patient dans la relation éthique et déontologique",
          hint: "L’action peut s’appuyer sur une fiche prioritaire proposée par l’ANDPC ; les objectifs pédagogiques doivent entretenir ou améliorer toute forme de communication ou interaction avec le patient ; minimum 14 heures pour être validante."
        },
        {
          id: "mk_b3_dispositif_acces_soins",
          label: "Participation à un dispositif d’accès aux soins",
          hint: "Nécessite d’appartenir à une structure d’exercice coordonnée et de participer à un dispositif d’accès aux soins ou SAS au sein d’une ESP, MSP, CPTS, URPS… ; ne correspond pas à l’accès direct ; peut correspondre aux dispositifs de soins non programmés."
        },
        {
          id: "mk_b3_affichage_documents",
          label: "Affichage des documents professionnels obligatoires",
          hint: "Doivent être fournis : tarif des consultations, base de remboursement, situation conventionnelle du praticien, respect du RGPD, adhésion éventuelle à une association de gestion agréée ; une mise à jour doit être réalisée avec preuve à l’appui."
        },
        {
          id: "mk_b3_numerique_sante_rgpd",
          label: "Utilisation du numérique en santé et respect du RGPD",
          hint: "Utilisation annuelle et récurrente d’outils numériques sécurisés (adresse sécurisée active, e-CPS, logiciel métier…) ; conformité RGPD avec éléments de preuve reconductibles annuellement."
        },
        {
          id: "mk_b3_relation_ethique_droits",
          label: "Action visant la relation patient au regard de l’éthique, de la déontologie et des droits des patients",
          hint: "Action cohérente avec la finalité de l’axe 3 : assurer une relation de qualité au regard des recommandations de bonne pratique, des valeurs professionnelles, de l’éthique, de la déontologie et des droits des patients."
        },
        {
          id: "mk_b3_hors_liste",
          label: "Action hors liste validée par la Commission Professionnelle",
          hint: "Action soumise à la Commission Professionnelle des Masseurs Kinésithérapeutes selon les critères d’éligibilité du référentiel."
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
      ruleText: "Validation masseur-kinésithérapeute : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Avoir et consulter son médecin traitant ou consulter la médecine du travail",
        "Maintenir son calendrier vaccinal à jour",
        "Suivre les recommandations générales de dépistage selon son âge et son sexe",
        "Actions visant à promouvoir, maintenir et améliorer l’état de sa santé",
        "Action hors liste validée par la Commission Professionnelle des Masseurs Kinésithérapeutes"
      ],
      actions: [
        {
          id: "mk_b4_medecin_traitant",
          label: "Avoir et consulter son médecin traitant ou consulter la médecine du travail",
          hint: "Nécessite d’avoir consulté son médecin traitant ou la médecine du travail au moins une fois par période de certification ; le médecin consulté ne doit pas être un parent au 1er degré."
        },
        {
          id: "mk_b4_vaccins",
          label: "Maintenir son calendrier vaccinal à jour",
          hint: "Action explicitement listée dans les fiches de l’axe 4 ; élément de preuve : attestation sur l’honneur."
        },
        {
          id: "mk_b4_depistages",
          label: "Suivre les recommandations générales de dépistage selon son âge et son sexe",
          hint: "Action explicitement listée dans les fiches de l’axe 4 ; élément de preuve : attestation sur l’honneur."
        },
        {
          id: "mk_b4_promouvoir_sante",
          label: "Action visant à promouvoir, maintenir et améliorer l’état de sa santé",
          hint: "Action cohérente avec la finalité de l’axe 4 : promouvoir, maintenir et améliorer l’état de sa santé ou conserver ses aptitudes professionnelles."
        },
        {
          id: "mk_b4_hors_liste",
          label: "Action hors liste validée par la Commission Professionnelle",
          hint: "Action soumise à la Commission Professionnelle des Masseurs Kinésithérapeutes selon les critères d’éligibilité du référentiel."
        }
      ]
    }
  ]
}
    ]
  });
})();

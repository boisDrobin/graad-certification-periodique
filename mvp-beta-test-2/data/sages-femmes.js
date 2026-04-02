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
  subtitle: "Profession : maïeutique",
  icon: "🤱",
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
      ruleText: "Validation maïeutique : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Actions de formation au titre du DPC",
        "Participation à un programme intégré dans le cadre des orientations prioritaires",
        "Actions de formation à caractère scientifique ou professionnel dispensées par des organismes de formation labellisés ou des universités",
        "Tests de concordance de script",
        "Simulation en santé",
        "Analyse de cas cliniques",
        "Revue bibliographique",
        "Enseignement dans le cadre de parcours de formation de professionnels",
        "Direction et/ou jury d’une thèse d’exercice, mémoire de DES ou Master 2, thèse d’université",
        "Jury de concours ou d’examens hors soutenance de thèse",
        "Travaux d’expertise dans un cadre de traçabilité, de rigueur et d’indépendance",
        "Publications : rédaction et/ou révision d’articles avant publication",
        "Présentation de travaux scientifiques",
        "Abonnement à une revue médicale avec test de lecture effectué et réussi",
        "Activités de recherche institutionnelles",
        "Participation à un congrès, colloque, journées d’études ou action libre / hors liste proposée par une sage-femme"
      ],
      actions: [
        {
          id: "sf_b1_dpc",
          label: "Action de formation au titre du DPC",
          hint: "Programme dûment enregistré DPC, respectant les orientations triennales prioritaires ; preuve : attestation de formation."
        },
        {
          id: "sf_b1_programme_integre_op",
          label: "Programme intégré dans le cadre des orientations prioritaires",
          hint: "Combinaison de 2 typologies d’action avec thématique commune : formation continue, évaluation des pratiques professionnelles ou gestion des risques ; preuve : attestation de formation."
        },
        {
          id: "sf_b1_formation_labellisee_universite",
          label: "Formation scientifique ou professionnelle par organisme labellisé ou université",
          hint: "Action de formation à caractère scientifique ou professionnel dispensée par un organisme de formation labellisé ou une université."
        },
        {
          id: "sf_b1_tcs",
          label: "Test de concordance de script (TCS)",
          hint: "Action de formation / situations cliniques courtes / programme d’évaluation des pratiques ; intégrée dans un programme d’évaluation des pratiques professionnelles ; preuve : attestation."
        },
        {
          id: "sf_b1_simulation",
          label: "Simulation en santé",
          hint: "Respect de la méthodologie HAS ; preuve : attestation de présence aux sessions de simulation."
        },
        {
          id: "sf_b1_cas_cliniques",
          label: "Analyse de cas cliniques",
          hint: "Respect de la méthodologie HAS ; preuve : attestation de suivi de formation."
        },
        {
          id: "sf_b1_revue_biblio",
          label: "Revue bibliographique",
          hint: "Liste des articles analysés et des actions entreprises ; preuve : compte rendu des réunions avec liste de présence."
        },
        {
          id: "sf_b1_enseignement",
          label: "Enseignement dans le cadre de parcours de formation de professionnels",
          hint: "Enseignement fondé sur des données actualisées, recommandations nationales, revues de littérature de qualité ou consensus professionnels ; preuve : attestation de l’organisme formateur."
        },
        {
          id: "sf_b1_direction_jury_these",
          label: "Direction et/ou jury d’une thèse d’exercice, mémoire ou thèse d’université",
          hint: "Action d’enseignement en adéquation avec les finalités du bloc 1 ; preuve : 1re page du manuscrit ou attestation de participation."
        },
        {
          id: "sf_b1_jury_concours",
          label: "Jury de concours ou d’examens hors soutenance de thèse",
          hint: "Action d’enseignement ; preuve : attestation de l’université, composition du jury, arrêté de nomination ou attestation de participation."
        },
        {
          id: "sf_b1_expertise",
          label: "Travaux d’expertise",
          hint: "Dans un cadre de traçabilité, de rigueur et d’indépendance : sociétés savantes, CNP, universités, instituts de formation, CHU, instituts de recherche, HAS, ANSM, autres agences de santé, agences européennes."
        },
        {
          id: "sf_b1_publications",
          label: "Publications : rédaction et/ou révision d’articles avant publication",
          hint: "Production scientifique relevant du champ maïeutique."
        },
        {
          id: "sf_b1_presentation_travaux",
          label: "Présentation de travaux scientifiques",
          hint: "Présentation de travaux dans un cadre scientifique ou professionnel."
        },
        {
          id: "sf_b1_revue_test_lecture",
          label: "Abonnement à une revue médicale avec test de lecture réussi",
          hint: "Abonnement assorti d’un test de lecture effectué et validé."
        },
        {
          id: "sf_b1_recherche",
          label: "Activité de recherche institutionnelle",
          hint: "Participation à des études cliniques ou épidémiologiques institutionnelles, registres, RIPH ou investigations cliniques dans une unité de recherche labellisée EPST, une université, un appel d’offre ou un établissement de santé ; preuve : attestation de l’établissement porteur."
        },
        {
          id: "sf_b1_congres_hors_liste",
          label: "Congrès, colloque, journées d’études ou action libre / hors liste",
          hint: "Peut inclure une action libre proposée par une sage-femme ; validation par la commission professionnelle requise si action libre ou hors liste ; preuve : attestation de formation ou attestation de validation."
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
      ruleText: "Validation maïeutique : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Participer à une démarche d’accréditation en équipe",
        "Actions d’analyse de pratiques et de gestion des risques ou programmes intégrés au titre du DPC",
        "Programme intégré avec action d’analyse de pratiques au titre du DPC",
        "Programme intégré avec action de gestion des risques au titre du DPC",
        "Programme intégré avec action d’analyse de pratiques",
        "Programme intégré avec action de gestion des risques",
        "Simulation en santé",
        "Actions d’amélioration des pratiques en établissement de santé, en libéral, en MSP, en exercice régional ou territorial",
        "Suivi d’indicateurs de qualité et de sécurité des soins",
        "Développer les pratiques d’éducation thérapeutique du patient en périnatalité",
        "S’engager dans des soins éco-responsables en périnatalité",
        "Participation aux instances professionnelles et/ou institutionnelles",
        "Participer à un réseau de vigilance",
        "Participer à des actions d’amélioration des pratiques à l’échelle locale, territoriale, régionale ou nationale"
      ],
      actions: [
        {
          id: "sf_b2_accreditation_equipe",
          label: "Démarche d’accréditation en équipe",
          hint: "Action labellisée DPC relevant explicitement du tableau synthétique du bloc 2."
        },
        {
          id: "sf_b2_dpc_ap_gr",
          label: "Action d’analyse de pratiques / gestion des risques / programme intégré DPC",
          hint: "Action publiée au titre du DPC pour la maïeutique, visant l’amélioration continue de la qualité et de la sécurité des soins."
        },
        {
          id: "sf_b2_programme_integre_ap_dpc",
          label: "Programme intégré avec action d’analyse de pratiques au titre du DPC",
          hint: "Programme intégré DPC comportant explicitement une composante d’analyse de pratiques."
        },
        {
          id: "sf_b2_programme_integre_gr_dpc",
          label: "Programme intégré avec action de gestion des risques au titre du DPC",
          hint: "Programme intégré DPC comportant explicitement une composante de gestion des risques."
        },
        {
          id: "sf_b2_programme_integre_ap",
          label: "Programme intégré avec action d’analyse de pratiques",
          hint: "Axe listé dans le tableau synthétique du bloc 2."
        },
        {
          id: "sf_b2_programme_integre_gr",
          label: "Programme intégré avec action de gestion des risques",
          hint: "Axe listé dans le tableau synthétique du bloc 2."
        },
        {
          id: "sf_b2_simulation",
          label: "Simulation en santé",
          hint: "Méthode mobilisable dans une logique d’amélioration des pratiques et de sécurité des soins."
        },
        {
          id: "sf_b2_amelioration_pratiques",
          label: "Actions d’amélioration des pratiques",
          hint: "En établissement de santé, en libéral, en MSP ou en exercice régional / territorial ; exemples cités : RMM, RCP, CREX, ADP, etc."
        },
        {
          id: "sf_b2_indicateurs_qss",
          label: "Suivi d’indicateurs de qualité et de sécurité des soins",
          hint: "Suivi structuré d’indicateurs en lien avec la qualité et la sécurité des prises en charge."
        },
        {
          id: "sf_b2_etp_perinatalite",
          label: "Développer les pratiques d’éducation thérapeutique du patient en périnatalité",
          hint: "Action explicitement listée dans les axes du bloc 2."
        },
        {
          id: "sf_b2_eco_responsable",
          label: "S’engager dans des soins éco-responsables en périnatalité",
          hint: "Action explicitement listée dans les axes du bloc 2, en cohérence avec les attendus en santé environnementale."
        },
        {
          id: "sf_b2_instances",
          label: "Participation aux instances professionnelles et/ou institutionnelles",
          hint: "Implication dans les instances de la profession ou des structures de santé."
        },
        {
          id: "sf_b2_vigilance",
          label: "Participation à un réseau de vigilance",
          hint: "Action explicitement listée dans le tableau du bloc 2."
        },
        {
          id: "sf_b2_amelioration_locale_territoriale",
          label: "Action d’amélioration des pratiques à l’échelle locale, territoriale, régionale ou nationale",
          hint: "Peut relever d’une CPTS, d’un conseil territorial de santé, d’un conseil local de santé, d’un réseau de santé périnatale, d’une mission d’expertise ou d’une participation à des recommandations."
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
      ruleText: "Validation maïeutique : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Formation sur le thème de la relation patient au titre du DPC",
        "S’engager dans une démarche d’évaluation en lien avec le patient : PROMs et/ou PREMs",
        "Actions de formation à caractère scientifique ou professionnel dispensées par des organismes de formation labellisés Qualiopi ou figurant sur la liste publique",
        "Faciliter l’accès aux soins aux personnes en situation de handicap et/ou de vulnérabilité",
        "Participer, dans une structure ou un dispositif d’exercice coordonné, à une action de prévention, d’éducation thérapeutique, de médiation ou d’amélioration de parcours",
        "Prise en charge des violences faites aux femmes",
        "Participer à une intervention auprès d’une association d’usagers du système de santé et/ou à un programme associant des patients",
        "Participer à une action en lien avec l’éducation à la santé et l’accompagnement à la parentalité",
        "Promouvoir le projet de naissance, la santé environnementale, les mille premiers jours, l’EPP et l’EPNP",
        "S’assurer de la bonne information du patient/usager sur ses droits, sa situation et sa sécurité",
        "Mener des actions d’évaluation du service rendu et du respect des droits du patient",
        "Assurer la sécurité, la qualité des soins et la relation patients en e-santé",
        "Action libre"
      ],
      actions: [
        {
          id: "sf_b3_formation_dpc_relation",
          label: "Formation sur le thème de la relation patient au titre du DPC",
          hint: "Action DPC dédiée à l’amélioration de la relation avec la patiente, le co-parent, l’enfant et les usagers du système de santé."
        },
        {
          id: "sf_b3_proms_prems",
          label: "Démarche PROMs et/ou PREMs",
          hint: "Évaluation en lien avec le patient permettant de mieux recueillir l’expérience vécue et les résultats rapportés par les patientes."
        },
        {
          id: "sf_b3_formation_qualiopi_relation",
          label: "Formation scientifique ou professionnelle Qualiopi / liste publique",
          hint: "Action de formation portant sur la relation patient, dispensée par un organisme labellisé Qualiopi ou figurant sur la liste publique."
        },
        {
          id: "sf_b3_handicap_vulnerabilite",
          label: "Faciliter l’accès aux soins aux personnes en situation de handicap et/ou de vulnérabilité",
          hint: "Inclut le handicap visible ou non et les situations de vulnérabilité nécessitant une réponse adaptée."
        },
        {
          id: "sf_b3_exercice_coordonne",
          label: "Action de prévention / ETP / médiation / amélioration de parcours en exercice coordonné",
          hint: "Dans le cadre d’une CPTS, MSP, ESP, CDS, ESCAP, DRSP… pour améliorer la prise en soin et la prise en charge."
        },
        {
          id: "sf_b3_violences_femmes",
          label: "Prise en charge des violences faites aux femmes",
          hint: "Action relevant explicitement du bloc 3, dans une logique de repérage, d’accompagnement et d’orientation."
        },
        {
          id: "sf_b3_association_usagers",
          label: "Intervention auprès d’une association d’usagers / programme associant des patients",
          hint: "Implication auprès d’associations d’usagers du système de santé ou dans la mise en place d’un programme associant les patients."
        },
        {
          id: "sf_b3_education_parentalite",
          label: "Action en lien avec l’éducation à la santé et l’accompagnement à la parentalité",
          hint: "En cohérence avec les attendus du bloc 3 autour des 1000 jours, du soutien aux parents et de l’accompagnement individualisé."
        },
        {
          id: "sf_b3_projet_naissance_1000j",
          label: "Promouvoir le projet de naissance, la santé environnementale, les mille premiers jours, l’EPP et l’EPNP",
          hint: "Action explicitement listée dans le référentiel maïeutique."
        },
        {
          id: "sf_b3_information_droits",
          label: "S’assurer de la bonne information du patient/usager sur ses droits, sa situation et sa sécurité",
          hint: "Contribue à la transparence de l’information, à la qualité de la relation et au respect des droits."
        },
        {
          id: "sf_b3_evaluation_service_rendu",
          label: "Évaluer le service rendu et le respect des droits du patient",
          hint: "Action visant à mesurer la satisfaction, le respect des droits et la qualité perçue de la prise en charge."
        },
        {
          id: "sf_b3_esante",
          label: "Assurer la sécurité, la qualité des soins et la relation patients en e-santé",
          hint: "Prise en compte des nouveaux outils numériques et des nouvelles formes de prise en charge numérique."
        },
        {
          id: "sf_b3_action_libre",
          label: "Action libre",
          hint: "Action libre du bloc 3 prévue par le référentiel maïeutique."
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
      ruleText: "Validation maïeutique : 2 actions différentes minimum dans ce bloc.",
      requirements: {
        min: 2
      },
      allReferentialActions: [
        "Prévenir le risque : auto-évaluation de son état de santé et de son suivi",
        "Prévenir le risque : disposer d’un référent médical et l’avoir consulté pendant la période de certification",
        "Prévenir le risque : consulter le service de santé au travail",
        "Prévenir le risque : maintenir son calendrier vaccinal à jour",
        "Prévenir le risque : suivre les recommandations générales de dépistage selon son âge et son sexe",
        "Prévenir le risque : mener toute action bénéfique pour sa santé"
      ],
      actions: [
        {
          id: "sf_b4_autoevaluation_sante",
          label: "Auto-évaluation de son état de santé et de son suivi",
          hint: "Notamment santé mentale et rapport aux substances addictives consommées ; élément de preuve : attestation ou déclaratif."
        },
        {
          id: "sf_b4_referent_medical",
          label: "Disposer d’un référent médical et l’avoir consulté",
          hint: "Hors auto-déclaration et parent au 1er degré ; consultation pendant la période de certification ; preuve : attestation ou déclaratif."
        },
        {
          id: "sf_b4_sante_travail",
          label: "Consulter le service de santé au travail",
          hint: "Action explicitement intégrée à l’axe 4.11 “Prévenir le risque”."
        },
        {
          id: "sf_b4_vaccins",
          label: "Maintenir son calendrier vaccinal à jour",
          hint: "Action explicitement intégrée à l’axe 4.11 ; preuve : attestation ou déclaratif."
        },
        {
          id: "sf_b4_depistages",
          label: "Suivre les recommandations générales de dépistage selon son âge et son sexe",
          hint: "Action explicitement intégrée à l’axe 4.11 ; preuve : attestation ou déclaratif."
        },
        {
          id: "sf_b4_action_benefique_sante",
          label: "Mettre en place une action bénéfique pour sa santé",
          hint: "Exemples explicitement cités : activité physique, alimentation, sommeil ; preuve : attestation ou déclaratif."
        }
      ]
    }
  ]
}
    ]
  });
})();

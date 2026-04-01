const CERTIFICATION_DATA = {
  professions: [
    {
      id: "medecin",
      label: "Médecin",
      specialities: [
        {
          id: "medecine-cardiovasculaire",
          label: "Cardiologue",
          fullTitle: "Certification Périodique du Cardiologue",
          subtitle: "Spécialité : médecine cardiovasculaire",
          icon: "❤️",
          theme: {
            primary: "#c62828",
            primary2: "#7f1d1d",
            accent: "#2563eb"
          },
          blocks: [
            {
              id: "bloc1",
              label: "Bloc 1",
              shortLabel: "Connaissances et compétences",
              colorClass: "bloc1",
              openByDefault: true,
              validationMode: "compound",
              ruleText:
                "Validation cardio : 3 actions DPC/équivalentes + 1 autre action listée sur le cycle.",
              requirements: {
                dpcMin: 3,
                extraMin: 1
              },
              allReferentialActions: [
                "Action DPC / dispositif structuré équivalent n°1",
                "Action DPC / dispositif structuré équivalent n°2",
                "Action DPC / dispositif structuré équivalent n°3",
                "Congrès national validé par le CNP cardiovasculaire",
                "Congrès international validé par le CNP cardiovasculaire",
                "Formation régionale validée par le CNP cardiovasculaire",
                "Orateur / formateur lors d’un congrès ou d’une formation régionale validée",
                "Comité d’organisation d’un congrès ou d’une formation validée",
                "Formation diplômante DU / DIU ou certifiante dans le domaine cardiovasculaire",
                "Organisation d’une formation diplômante DU / DIU ou certifiante",
                "Enseignement universitaire dans le domaine cardiovasculaire",
                "Séminaire pédagogique du CNEC",
                "Peer reviewing",
                "Rédaction ou co-rédaction d’un chapitre d’ouvrage de référence",
                "Participation au comité de rédaction / éditorial d’un ouvrage de référence",
                "Activités au sein d’une société savante validée par le CNP cardiovasculaire",
                "Travail d’expertise pour une institution ou une agence d’État",
                "Activités de recherche clinique ou épidémiologique",
                "Publication dans une revue scientifique référencée",
                "Action hors liste validée par le CNP-CV"
              ],
              actions: [
                {
                  id: "b1_dpc_1",
                  label: "Action DPC / dispositif structuré équivalent n°1",
                  hint: "Première action DPC ou équivalente du cycle.",
                  group: "dpc"
                },
                {
                  id: "b1_dpc_2",
                  label: "Action DPC / dispositif structuré équivalent n°2",
                  hint: "Deuxième action DPC ou équivalente du cycle.",
                  group: "dpc"
                },
                {
                  id: "b1_dpc_3",
                  label: "Action DPC / dispositif structuré équivalent n°3",
                  hint: "Troisième action DPC ou équivalente du cycle.",
                  group: "dpc"
                },
                {
                  id: "b1_congres_national",
                  label: "Congrès national de la spécialité validé par le CNP cardiovasculaire",
                  hint: "Participant auditeur à un congrès national validé.",
                  group: "extra"
                },
                {
                  id: "b1_congres_international",
                  label: "Congrès international de la spécialité validé par le CNP cardiovasculaire",
                  hint: "Participant auditeur à un congrès international validé.",
                  group: "extra"
                },
                {
                  id: "b1_formation_regionale",
                  label: "Formation régionale de la spécialité validée par le CNP cardiovasculaire",
                  hint: "Participation à une formation régionale validée.",
                  group: "extra"
                },
                {
                  id: "b1_orateur",
                  label: "Orateur / formateur lors d’un congrès ou d’une formation régionale validée",
                  hint: "Intervention dans une action reconnue par le CNP CV.",
                  group: "extra"
                },
                {
                  id: "b1_comite_org",
                  label: "Comité d’organisation d’un congrès ou d’une formation validée",
                  hint: "Participation au comité d’organisation.",
                  group: "extra"
                },
                {
                  id: "b1_du_diu_auditeur",
                  label: "Formation diplômante DU / DIU ou certifiante dans le domaine cardiovasculaire",
                  hint: "Participation à une formation universitaire.",
                  group: "extra"
                },
                {
                  id: "b1_du_diu_orga",
                  label: "Organisation d’une formation diplômante DU / DIU ou certifiante",
                  hint: "Organisation d’un diplôme ou certificat universitaire.",
                  group: "extra"
                },
                {
                  id: "b1_enseignement_univ",
                  label: "Enseignement universitaire dans le domaine cardiovasculaire",
                  hint: "Activité d’enseignement universitaire ou équivalente.",
                  group: "extra"
                },
                {
                  id: "b1_cnec",
                  label: "Séminaire pédagogique du CNEC",
                  hint: "Participation comme auditeur, orateur ou organisation.",
                  group: "extra"
                },
                {
                  id: "b1_peer_review",
                  label: "Peer reviewing",
                  hint: "Révision régulière de manuscrits scientifiques.",
                  group: "extra"
                },
                {
                  id: "b1_ouvrage_chapitre",
                  label: "Rédaction ou co-rédaction d’un chapitre d’ouvrage de référence",
                  hint: "Ouvrage d’enseignement de la pathologie cardiovasculaire.",
                  group: "extra"
                },
                {
                  id: "b1_ouvrage_editorial",
                  label: "Participation au comité de rédaction / éditorial d’un ouvrage de référence",
                  hint: "Participation éditoriale à un ouvrage de référence.",
                  group: "extra"
                },
                {
                  id: "b1_activite_societe",
                  label: "Activités au sein d’une société savante validée par le CNP cardiovasculaire",
                  hint: "Conseil d’administration ou mission ponctuelle.",
                  group: "extra"
                },
                {
                  id: "b1_expertise",
                  label: "Travail d’expertise pour une institution ou une agence d’État",
                  hint: "HAS, ANSM, HCSP, agences européennes, etc.",
                  group: "extra"
                },
                {
                  id: "b1_recherche",
                  label: "Activités de recherche clinique ou épidémiologique",
                  hint: "Étude institutionnelle, universitaire, réseau ou service clinique.",
                  group: "extra"
                },
                {
                  id: "b1_publication",
                  label: "Publication dans une revue scientifique référencée",
                  hint: "Publication scientifique en lien avec la spécialité.",
                  group: "extra"
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
              ruleText:
                "Validation cardio : 2 actions différentes parmi les actions listées.",
              requirements: {
                min: 2
              },
              allReferentialActions: [
                "Programme HAS d’accréditation CARDIORISQ",
                "Analyse de pratiques et gestion des risques au sein de l’établissement (RMM / CREX…)",
                "Action de DPC d’analyse de pratiques / gestion des risques",
                "Participation à un registre de pratiques",
                "Exercice coordonné et protocolé d’une équipe pluriprofessionnelle de soins en ambulatoire",
                "Participation à un réseau de vigilance",
                "Action hors liste validée par le CNP-CV"
              ],
              actions: [
                {
                  id: "b2_cardiorisq",
                  label: "Programme HAS d’accréditation CARDIORISQ",
                  hint: "Pour les cardiologues interventionnels / rythmologues / congénitaux invasifs."
                },
                {
                  id: "b2_rmm_crex",
                  label: "Analyse de pratiques et gestion des risques au sein de l’établissement (RMM / CREX…)",
                  hint: "Démarche qualité officielle encadrée par l’établissement."
                },
                {
                  id: "b2_dpc_epp",
                  label: "Action de DPC d’analyse de pratiques / gestion des risques",
                  hint: "Action relevant du bloc 2."
                },
                {
                  id: "b2_registre",
                  label: "Participation à un registre de pratiques",
                  hint: "Participation active à un registre de la spécialité."
                },
                {
                  id: "b2_exercice_coordonne",
                  label: "Exercice coordonné et protocolé d’une équipe pluriprofessionnelle de soins en ambulatoire",
                  hint: "Participation active poursuivie sur la durée."
                },
                {
                  id: "b2_vigilance",
                  label: "Participation à un réseau de vigilance",
                  hint: "Réseau de vigilance de la spécialité."
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
              ruleText:
                "Validation cardio : 2 actions différentes parmi les actions listées.",
              requirements: {
                min: 2
              },
              allReferentialActions: [
                "Formation universitaire centrée sur la relation médecin-patient",
                "Formation ODPC / Qualiopi / organisme de formation sur la relation médecin-patient",
                "Mesure de la satisfaction des patients / PREMs",
                "Action réalisée avec une association d’usagers du système de santé",
                "Programme élaboré pour le patient / programme associant des patients",
                "Registre de pratiques intégrant un recueil de données patients",
                "Groupe d’échange et d’analyse entre pairs centré sur la relation avec le patient",
                "Participation à un dispositif d’annonce",
                "Programme d’accréditation HAS CARDIORISQ – pilier relation patient",
                "Action hors liste validée par le CNP-CV"
              ],
              actions: [
                {
                  id: "b3_formation_univ_relation",
                  label: "Formation universitaire centrée sur la relation médecin-patient",
                  hint: "DU / DIU ou formation universitaire dédiée."
                },
                {
                  id: "b3_formation_odpc_relation",
                  label: "Formation ODPC / Qualiopi / organisme de formation sur la relation médecin-patient",
                  hint: "Session, atelier, simulation ou congrès validé."
                },
                {
                  id: "b3_mesure_satisfaction",
                  label: "Mesure de la satisfaction des patients / PREMs",
                  hint: "Participation à une enquête ou à son exploitation."
                },
                {
                  id: "b3_association_usagers",
                  label: "Action réalisée dans le cadre d’une association d’usagers du système de santé",
                  hint: "Action menée avec une association d’usagers."
                },
                {
                  id: "b3_programme_patient",
                  label: "Programme élaboré pour le patient / programme associant des patients",
                  hint: "Conception et participation à la mise en place de programmes pour le patient."
                },
                {
                  id: "b3_registre_patient",
                  label: "Registre de pratiques intégrant un recueil de données patients",
                  hint: "Action relevant de la relation et de l’expérience patient."
                },
                {
                  id: "b3_groupes_pairs",
                  label: "Groupe d’échange et d’analyse entre pairs centré sur la relation avec le patient",
                  hint: "Travail entre pairs sur les situations cliniques et relationnelles."
                },
                {
                  id: "b3_dispositif_annonce",
                  label: "Participation à un dispositif d’annonce",
                  hint: "Cancer, dommage associé aux soins, insuffisance cardiaque, transplantation cardiaque."
                },
                {
                  id: "b3_cardiorisq_relation",
                  label: "Programme d’accréditation HAS CARDIORISQ – pilier relation patient",
                  hint: "Engagement officiel avec validation annuelle du pilier relation patient."
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
              ruleText:
                "Validation cardio : 2 actions différentes parmi les actions listées.",
              requirements: {
                min: 2
              },
              allReferentialActions: [
                "Formation diplômante sur la santé personnelle du médecin (DIU Soigner les soignants)",
                "Participation à un colloque concernant les aspects humains de la spécialité",
                "Activité sportive",
                "Activité culturelle en tant qu’acteur",
                "Activité caritative ou de coopération nationale ou internationale",
                "Groupe d’échange et d’analyse entre pairs sur la santé personnelle du médecin"
              ],
              actions: [
                {
                  id: "b4_diu_soigner",
                  label: "Formation diplômante sur la santé personnelle du médecin (DIU Soigner les soignants)",
                  hint: "Formation diplômante dédiée."
                },
                {
                  id: "b4_colloque_humain",
                  label: "Participation à un colloque concernant les aspects humains de la spécialité",
                  hint: "Ex. assises professionnelles de la cardiologie."
                },
                {
                  id: "b4_sport",
                  label: "Activité sportive régulière",
                  hint: "Avec ou sans licence sportive."
                },
                {
                  id: "b4_culture",
                  label: "Activité culturelle régulière en tant qu’acteur",
                  hint: "Musique, théâtre, danse, etc."
                },
                {
                  id: "b4_caritatif",
                  label: "Activité caritative ou de coopération nationale ou internationale",
                  hint: "Participation active à une association ou mission."
                },
                {
                  id: "b4_groupes_pairs_sante",
                  label: "Groupe d’échange et d’analyse entre pairs sur la santé personnelle du médecin",
                  hint: "Action dédiée à la santé du professionnel."
                }
              ]
            }
          ]
        }

        /*
        ============================================================
        EXEMPLE D’AJOUT D’UNE AUTRE SPÉ MÉDECIN
        ============================================================

        ,
        {
          id: "allergologie",
          label: "Allergologue",
          fullTitle: "Certification Périodique de l’Allergologue",
          subtitle: "Spécialité : allergologie",
          icon: "🫁",
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
              openByDefault: true,
              validationMode: "minimumDistinct",
              ruleText: "Validation allergologie : 3 actions dans le bloc 1.",
              requirements: { min: 3 },
              allReferentialActions: [],
              actions: []
            },
            {
              id: "bloc2",
              label: "Bloc 2",
              shortLabel: "Qualité des pratiques et des soins",
              colorClass: "bloc2",
              openByDefault: false,
              validationMode: "minimumDistinct",
              ruleText: "Validation allergologie : 2 actions dans le bloc 2.",
              requirements: { min: 2 },
              allReferentialActions: [],
              actions: []
            },
            {
              id: "bloc3",
              label: "Bloc 3",
              shortLabel: "Relation avec les patients",
              colorClass: "bloc3",
              openByDefault: false,
              validationMode: "minimumDistinct",
              ruleText: "Validation allergologie : 2 actions dans le bloc 3.",
              requirements: { min: 2 },
              allReferentialActions: [],
              actions: []
            },
            {
              id: "bloc4",
              label: "Bloc 4",
              shortLabel: "Santé personnelle du professionnel",
              colorClass: "bloc4",
              openByDefault: false,
              validationMode: "minimumDistinct",
              ruleText: "Validation allergologie : 2 actions dans le bloc 4.",
              requirements: { min: 2 },
              allReferentialActions: [],
              actions: []
            }
          ]
        }
        */
      ]
    }

    /*
    ============================================================
    EXEMPLE D’AJOUT D’UNE AUTRE PROFESSION
    ============================================================

    ,
    {
      id: "infirmier",
      label: "Infirmier",
      specialities: [
        {
          id: "ide",
          label: "Infirmier diplômé d’État",
          fullTitle: "Certification Périodique de l’Infirmier",
          subtitle: "Fonction : infirmier diplômé d’État",
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
              openByDefault: true,
              validationMode: "minimumDistinct",
              ruleText: "Règle à compléter selon le référentiel IDE.",
              requirements: { min: 2 },
              allReferentialActions: [],
              actions: []
            },
            {
              id: "bloc2",
              label: "Bloc 2",
              shortLabel: "Qualité des pratiques et des soins",
              colorClass: "bloc2",
              openByDefault: false,
              validationMode: "minimumDistinct",
              ruleText: "Règle à compléter selon le référentiel IDE.",
              requirements: { min: 2 },
              allReferentialActions: [],
              actions: []
            },
            {
              id: "bloc3",
              label: "Bloc 3",
              shortLabel: "Relation avec les patients",
              colorClass: "bloc3",
              openByDefault: false,
              validationMode: "minimumDistinct",
              ruleText: "Règle à compléter selon le référentiel IDE.",
              requirements: { min: 2 },
              allReferentialActions: [],
              actions: []
            },
            {
              id: "bloc4",
              label: "Bloc 4",
              shortLabel: "Santé personnelle du professionnel",
              colorClass: "bloc4",
              openByDefault: false,
              validationMode: "minimumDistinct",
              ruleText: "Règle à compléter selon le référentiel IDE.",
              requirements: { min: 2 },
              allReferentialActions: [],
              actions: []
            }
          ]
        }
      ]
    }
    */
  ]
};
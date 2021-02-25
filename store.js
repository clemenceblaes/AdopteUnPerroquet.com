import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        sizeChoice: {},

        parrotsSize: [
            {
                id: "little", name: "Petites espèces", desc1: "Ils sont tous petits et tous mimis !",
                desc2: "Venez découvrir nos petites espèces : Youyous, Touis, Conures...", router: "/littleParrots",
            },
            {
                id: "medium", name: "Moyennes espèces", desc1: "Ici c'est le bon compromis de taille !",
                desc2: "Faites un tour parmi nos moyennes espèces : Eclectus, Perruches à Collier, ...", router: "/mediumParrots",
            },
            {
                id: "large", name: "Grandes espèces", desc1: "Pour ceux qui n'ont pas peur des gros becs !",
                desc2: "La sélection grande taille : Aras, Cacatoes, Amazones, ...", router: "/largeParrots",
            }
        ],

        littleParrots: [
            {
                id: "perruches", name: "Perruches", desc1: "Qu'est-ce qui est jaune, et qui...",
                desc2: "Douce et très sociable, c’est un excellent animal de compagnie pour les enfants.", router: "/Perruches",
                guide: {
                    desc1: "La perruche ondulée mesure entre 18 et 24 centimètres de long et pèse entre 25 et 45 grammes. Cet oiseau est caractérisé par son plumage vert et sa tête jaune.En captivité, la couleur de sa robe peut varier du violet, au bleu ou au gris.Des rayures noires sont également visibles sur le haut du crâne et sur ses ailes, et des tâches noires se trouvent autour de sa gorge.Son bec est court et de couleur olive, et ses yeux sont de couleur noire.La couleur de leur cire(renflement mou, charnu trouvé à la partie supérieure de la base du bec) est un indicateur important : la cire sera beige ou brun foncé chez la femelle, tandis qu’elle sera bleue brillante chez le mâle.",
                    desc2: "La perruche ondulée est relativement sociable et apprécie la présence de ses congénères. Il est même préférable d’adopter au moins un couple pour éviter que l’animal ne s’ennuie. En revanche, sachez que la perruche est bavarde et qu’elle aime jouer. D’une grande douceur, elle apaise le conflit et construit des relations basées sur la confiance et la sécurité.",
                    desc3: "Une perruche ondulée a besoin d’une nourriture adaptée, équilibrée et variée, riche en minéraux, en vitamines, en fibres, en protéines et en oligoéléments. Sans une bonne alimentation, l’animal voit son espérance de vie se réduire, son système immunitaire s’affaiblir, son plumage s’affadir et le surpoids l’envahir. Il est conseillé de lui donner les fruits et légumes crus(épinards, endives, carottes, pommes, kiwis et potiron), de préférence frais, des jeunes pousses, des minéraux, des vitamines et de l’argile.Les os de seiche sont également une bonne source de calcium. Nous vous conseillons de varier le type de graines afin de prendre soin de la digestion de votre animal.Pensez aux graines sèches, aux graines laiteuses et mi- mûres et aux graines germées pour son bon équilibre et préserver sa santé et son bien- être.Le sésame, le lin, le riz, la courge, le maïs et le chia, mais également les arachides, sont très intéressants.",
                    desc4: "Jusqu’à deux perruches, comptez 1 m² au minimum, car elles ont besoin d’espace. Augmentez la taille à proportion si vous disposez de plus d’individus. Si vous le pouvez, réservez-leur une pièce pour leur permettre de voler en toute liberté. La cage de vos perruches doit être équipée d’accessoires :",
                    desc4x: {
                        desc41: "Une mangeoire : vous trouverez différents modèles très bien, à poser au sol ou à accrocher à la grille. Vos oiseaux pourront ainsi disposer facilement de leur nourriture et la recharge sera simplifiée. Les versions en distributeur sont également intéressantes, notamment pour leur aspect hygiénique.",
                        desc42: "Un abreuvoir : vos oiseaux ont besoin de boire en libre accès. Choisissez un modèle pratique et propre et pensez à renouveler l’eau chaque jour.",
                        desc43: "Des perchoirs : les perruches adorent les perchoirs en bois brut. Il vous suffit de les fabriquer avec de petits branchages.",
                        desc44: "Une baignoire : les perruches ont besoin de s’hydrater l’épiderme dans une baignoire, pour le soin de leur plumage. En plus, elles apprécient de s’y amuser. Attention toutefois à ne pas les laisser se baigner sans surveillance !"
                    },
                    desc5: "La perruche a besoin d’un environnement sain pour réduire le risque de maladie. Il est donc important de nettoyer régulièrement sa cage et de bien la désinfecter pour en ôter les virus et bactéries. Un peu de liquide vaisselle mêlé à de l’eau chaude suffit pour un usage quotidien. Pensez également à nettoyer chaque jour la mangeoire et l’abreuvoir. Lorsqu’elle est malade, la perruche ondulée est apathique, peu active et elle a tendance à dormir beaucoup. Elle mange peu et cherche à s’isoler. Il se peut que son plumage se ternisse, que ses fientes changent, que sa tenue se modifie et que sa respiration soit plus difficile. Les principales maladies qui peuvent toucher la perruche sont les suivantes :",
                    desc5x: {
                        desc51: "La gale : de petits acariens attaquent le bec de l’oiseau qui se couvre de croûtes. L’animal se gratte et a des difficultés à s’alimenter. La gale est très contagieuse, raison pour laquelle il faut isoler l’animal malade et le soigner rapidement avec une pommade adaptée.",
                        desc52: "La mycose : il s’agit d’un champignon qui cause des troubles respiratoires, des sifflements rauques et de la toux. L’animal peut peiner à ouvrir le bec. Une prise de sang est nécessaire pour confirmer le diagnostic et le traitement se fait par antibiotiques.",
                        desc53: "La salmonellose : la perruche atteinte par cette bactérie vomit, maigrit et souffre de tremblements et de diarrhées. Le traitement est à base d’antibiotiques."
                    },
                    desc6: "La perruche ondulée peut se reproduire à partir d’un an. En période de reproduction, le mâle se met à chanter davantage et se montre plus attentionné avec sa compagne, notamment en la nourrissant et en lui donnant des coups de bec affectueux. Après un accouplement, il faut compter 4 à 8 jours pour que le premier œuf soit pondu, puis d’autres œufs suivront, à raison d’un tous les deux jours, pour atteindre un total de 5 ou 6 œufs en moyenne, parfois plus. La femelle couve ensuite ses œufs pendant environ 20 jours. Le perruchon nait les yeux clos et dépourvu de plumes. Il est nourri par sa mère, elle-même nourrie par le père. Le plumage se forme peu à peu, dès 2 jours après la naissance, et s’achève après 5 semaines. C’est à partir de cette période que le perruchon apprend l’indépendance en se nourrissant tout seul, puis en apprenant à voler vers 8 semaines.",
                }
            },
            {
                id: "calopsittes", name: "Calopsittes", desc1: "Arrêtez, vous le faites rougir !",
                desc2: "Intelligente, curieuse et joueuse, la Calopsitte a un plumage gris et coloré.", router: "/Calopsittes",
                guide: {
                    desc1: "La perruche Calopsitte (Nymphicus hollandicus) est un oiseau de l’ordre des Psittaciformes (ordre connu pour contenir de nombreux perroquets, comme le Cacatoès ou les Aras), originaire d’Australie. Physiquement, la perruche Calopsitte a le corps de couleur grise, avec des bandes blanches sur les ailes. Mais sa particularité première est sa tête, de couleur jaune, avec des taches rondes orangées sur les joues, et sa crête située sur le haut de son crâne, qui lui permet d’être très expressive. Il existe également de nombreuses mutations de couleurs sur les espèces élevées en captivité. La perruche Calopsitte mesure entre 30 et 40cm, pèse entre 80 et 150grammes et vit entre 10 et 20 ans en moyenne.",
                    desc2: "Très sociable, la perruche Calopsitte aime observer et vivre avec les habitants de la maison, comme un membre à part entière plus que comme un animal de compagnie. Elle s’attache très vite à celui qui s’occupe d’elle et s’identifie fortement à sa personne. En outre, elle est très bavarde, excellente siffleuse et bruyante, raison pour laquelle elle est souvent déconseillée en appartement ou dans les familles qui recherchent le calme. La perruche Calopsitte peut vivre seule chez vous, mais si vous vous absentez souvent, il est préférable d’adopter au moins un couple. Cela permettra de tromper l’ennui et surtout la dépression, car ces animaux sont très solidaires. Évitez en revanche de placer deux mâles ensemble ou plus de mâles que de femelles, car ils risquent de s’affronter à coups de bec pour affirmer leur supériorité.",
                    desc3: "Vous pouvez acheter des mélanges de graines adaptés en magasin ou en animalerie. Véritable granivore, la perruche adore les graines de toutes sortes et s’en régale. Complétez son alimentation de fruits et de légumes frais pour lui apporter un maximum de vitamines et de minéraux. Renouvelez-les chaque jour pour préserver leur fraîcheur. La perruche Calopsitte apprécie les pommes, les poires, les épinards, le cresson, les blettes, les feuilles de choux et les carottes notamment. Par ailleurs, pour compléter ses apports en calcium, donnez-lui une à deux fois par semaine un os de seiche et du millet. Enfin, pensez à lui fournir de l’eau propre et fraîche que vous renouvellerez chaque jour.",
                    desc4: "La perruche Calopsitte a besoin d’une cage spacieuse pour être pleinement heureuse. Très active, elle aime voler chaque jour et déployer ses ailes pour s’étirer. Équipez la cage de jouets et de perchoirs en bois, car elle adore mordiller et s’amuser. En revanche, évitez les miroirs qui ont tendance à l’affoler ou à lui faire perdre la tête. Quant aux perchoirs, variez les tailles et les diamètres pour éviter le risque d’arthrose des pattes.",
                    desc4x: {
                        desc41: "Installez une baignoire d’eau tiède dans la cage chaque jour pour que la perruche s’y baigne. Elle aime s’amuser dans l’eau et s’en servir pour se laver.",
                        desc42: "La cage doit être installée dans une pièce animée, comme un séjour. En effet, la perruche Calopsitte est très sociable et aime observer et interagir avec ceux qui l’entourent. Si vous l’isolez, elle sera malheureuse et risque de déprimer.",
                        desc43: "Vous pouvez la laisser sortir chaque jour dans une pièce sécurisée et fermée, isolée des autres animaux, des très jeunes enfants et des différents dangers.",
                        desc44: "Gardez sa cage propre en tapissant le fond de papier journal pour absorber les fientes. Lavez la cage régulièrement (une fois par semaine au moins) avec de l’eau chaude et du savon noir pour la désinfecter et éviter que les acariens et autres parasites s’y développent."
                    },
                    desc5: "La Calopsitte a besoin d’un environnement sain pour réduire le risque de maladie. Il est donc important de nettoyer régulièrement sa cage et de bien la désinfecter pour en ôter les virus et bactéries. Un peu de liquide vaisselle mêlé à de l’eau chaude suffit pour un usage quotidien. Pensez également à nettoyer chaque jour la mangeoire et l’abreuvoir. Lorsqu’elle est malade, la perruche ondulée est apathique, peu active et elle a tendance à dormir beaucoup. Elle mange peu et cherche à s’isoler. Il se peut que son plumage se ternisse, que ses fientes changent, que sa tenue se modifie et que sa respiration soit plus difficile. Les principales maladies qui peuvent toucher la perruche sont les suivantes :",
                    desc5x: {
                        desc51: "La gale : de petits acariens attaquent le bec de l’oiseau qui se couvre de croûtes. L’animal se gratte et a des difficultés à s’alimenter. La gale est très contagieuse, raison pour laquelle il faut isoler l’animal malade et le soigner rapidement avec une pommade adaptée.",
                        desc52: "La mycose : il s’agit d’un champignon qui cause des troubles respiratoires, des sifflements rauques et de la toux. L’animal peut peiner à ouvrir le bec. Une prise de sang est nécessaire pour confirmer le diagnostic et le traitement se fait par antibiotiques.",
                        desc53: "La salmonellose : la perruche atteinte par cette bactérie vomit, maigrit et souffre de tremblements et de diarrhées. Le traitement est à base d’antibiotiques."
                    },
                    desc6: "La calopsitte pond entre 5 et 6 œufs en moyenne avec un espacement de 24h entre chaque œuf et d’une durée d’incubation de 21 jours. Généralement le couple couve en alternance, le mâle plutôt en journée et la femelle à partir du soir jusqu’au matin. ",
                }
            },
            {
                id: "youyous", name: "Youyous du Sénégal", desc1: "Non, il ne vit pas qu'au Sénégal !",
                desc2: "Il est un compagnon agréable, amusant à observer en raison de ses acrobaties.", router: "/Youyous",
                guide: {
                    desc1: "Le Youyou du Sénégal vit dans plusieurs pays du centre et de l’ouest de l’Afrique : le Sénégal, donc, mais aussi le Nigéria, le Mali, le Togo, la Côte d’Ivoire ou encore le Tchad. Son habitat naturel se trouve dans les savanes arborées et arides. L’espèce apprécie également les forêts de baobabs. Il n’est pas non plus rare de rencontrer cet oiseau dans certaines villes d’Europe, notamment Barcelone en Espagne, où il s’est parfaitement acclimaté.",
                    desc2: "Dans son milieu naturel, le Youyou du Sénégal évolue soit en couple, soit au sein de groupes constitués de 10 à 20 oiseaux. En captivité, ce perroquet est extrêmement attachant. Il est amusant à observer, notamment lorsqu’il se met à effectuer des acrobaties. Très joueur, il ne demande qu’à être convenablement sociabilisé. Le Youyou du Sénégal risque toutefois de ne faire confiance qu’à son propriétaire et de devenir très méfiant envers le reste de la famille, jusqu’à se montrer agressif parfois.",
                    desc3: "Le régime alimentaire du Youyou du Sénégal se compose essentiellement de graines, de fruits, de légumes, de bourgeons et de pousses. Il apprécie tout particulièrement les pommes, les bananes et les raisins, qui sont à lui donner frais et bien lavés. Il est également important de retirer de sa cage les fruits pourris. Un os de seiche, une pierre minérale ou encore un bloc d’iode permettent de compléter les apports.",
                    desc4: "Les dimensions minimum d’une cage pour Youyou du Sénégal sont de 80 cm pour la longueur et la hauteur, et 50 cm pour la profondeur. Cage qui est d’ailleurs appelée à être régulièrement ouverte, car ce perroquet aime jouer, déployer ses ailes et accompagner son maître. Il est important de laisser à se disposition des jouets robustes et en matières naturelles comme le bois. Sans oublier les indispensables mangeoires, abreuvoirs et perchoirs.",
                    desc5: "Le Youyou du Sénégal peut être sujet à différentes maladies, dont l’aspergillose, une affection respiratoire provoquée par des champignons qui se développent dans les graines. La salmonellose, ainsi que la gale du bec et des narines font aussi partie des pathologies susceptibles de toucher ce perroquet. Par ailleurs, il est essentiel de le protéger contre les vers intestinaux.",
                    desc6: "Chez le Youyou du Sénégal, la période de reproduction se situe généralement entre septembre et novembre. On compte entre 1 et 4 œufs par ponte.La mère assure ensuite la couvaison pendant 28 jours.Les oisillons commencent à quitter le nid vers l’âge de 9 ou 10 semaines.",
                }
            },
            {
                id: "conures", name: "Conures", desc1: "Un petit rayon de soleil chez soi.",
                desc2: "Oiseaux sociables, joueurs, affectueux et possibilité de l’apprivoiser.", router: "/Conures",
                guide: {
                    desc1: "Il existe 3 groupes de Conure : genre Aratinga (réputé pour être bruyant tel que la Conure Soleil, Jandaya…), genre Phyrrhura (plus discret tel que la Conure de Molinae, Tiriba…) et genre Nandayus (tel que Conure Nanday) originaire d’Amérique du sud ou centrale essentiellement. ",
                    desc2: "Oiseaux sociables, joueurs, affectueux et possibilité de l’apprivoiser. Les Conures ont la possibilité d’apprendre à parler mais contrairement au perroquet ne sont pas considérer comme d’excellent parleur.",
                    desc3: "Elle se compose de graines spécifiques, de friandises  pour grande perruche (baguette), de fruits et légumes (pomme, raisin, céleri…) Ainsi que des compléments alimentaires (pâtée os de seiche) et vitamines pendant la période de mue ou la couvaison, ou pour entretenir la couleur des plumes.",
                    desc4: "Les conures ont aussi la mauvaise réputation d’être malpropre. Les conures adorent faire le ménage de leur cage en déchiquetant les fruits, les légumes et le papier du fond et en repoussant le tout à l’extérieur de la cage sur nos planchers et nos murs. De plus, étant d’habiles grimpeurs qui aiment se promener de barreau en barreau de cage, je peux vous parier que ces derniers seront rapidement souillés de fientes et de restants de nourriture. Mais quand on s’y attend, c’est toujours moins pire! Paradoxalement, ils sont très propres de leur personne! La majorité des conures adorent prendre leur bain dans tout ce qui peut ressembler à de l’eau!",
                    desc4x: {
                        desc41: "Les conures ont une véritable passion pour la douche, et sont capables de prendre un bain absolument dans n’importe quel récipient. ",
                        desc42: "Mâchouiller du bois ou autres jouets est une activité indispensable pour ces oiseaux actifs. Les jouets et tout autre objet (cartons, bois pas trop dur, etc) sont indispensables.",
                        desc43: "Donnez-leur une cage proportionnellement assez grande, ce sont des oiseaux très actifs et très explorateurs. Autre particularité, ces oiseaux dorment toutes les nuits dans leur nid et il est utile de leur installer une petite tente dans leur cage.",
                    },
                    desc5: "La cage doit se trouver à l’abri des courants d’air et du soleil direct, des odeurs de cuisine et des bruits aigus. L’idéal est une pièce calme avec une température constante (18°C).Celle-ci doit être désinfectée une fois par semaine.",
                    desc6: "Les conures vivant à l'extérieure couvent généralement au printemps. Les couples maintenus à l'intérieure peuvent nicher toute l'année selon les paramètres de la pièce de reproduction (temps d'éclairage, température, hygrométrie...). Une femelle pond généralement de 4 à 6 œufs en moyenne dans des nichoirs adaptés à leur morphologie. Peut importe la forme du nid (horizontale ou verticale) il faut qu'il soit assez spacieux pour éviter tout risque de casse. Sur le fond du nid, il faut répandre des copeaux de bois ou de la rafle de maïs pour le maintien des œufs et les éviter tout futurs problèmes aux pattes des jeunes (le sol plat est à proscrire). La ponte des œufs est espacée sur un intervalle de 2 à 3 jours et la femme commence à couver au premier ou au deuxième œuf. La plupart de mes femelles couvent dès le premier œuf pondu.",
                }
            },
            {
                id: "touis", name: "Touis", desc1: "Ils font Toui-Toui et pas Cui-Cui ceux-là !",
                desc2: "Le Toui est un oiseau peu bruyant, très attachant, mais avec son caractère.", router: "/Touis",
                guide: {
                    desc1: "On les retrouve en Équateur, au Pérou, sur l'île de la Trinité en Guyane, au Venezuela central et septentrional, au nord de la Colombie, au nord du Brésil, dans les régions orientales de l'Amazonie, sur les îles Curaçao, en Amérique et dans certaines îles du Pacifique.",
                    ddesc2: "C'est une perruche très peureuse, timide et demande énormément de temps pour être domestiquée; en revanche une fois passé ce cap, il développe un très bon caractère. Il est intelligent, audacieux, confiant, enjoué, intrépide et courageux. Avec amour et pratique, il pourra apprendre à dire plusieurs mots, de courtes phrases et exprimer plusieurs sons et sifflement. ",
                    desc3: "Mélange de graines pour petites perruches, fruits, millet en grappe et quelques branches fraîches à grignoter. On lui donne de l'alpiste, du panic, de l'avoine décortiquée, petites graines de tournesol, divers millets, figues trempées, mouron des oiseaux, oseille, inflorescences de laiteron.",
                    desc4: "La cage doit être suffisamment grande pour qu’il puisse y battre des ailes et jouer à son aise. L’espacement des barreaux ne doit pas permettre à l’oiseau de passer sa tête. De préférence, on choisit une cage rectangulaire. On installe la cage dans un coin (si possible) et loin des courants d’air froid.",
                    desc4x: {
                        desc41: "Installez une baignoire d’eau tiède dans la cage chaque jour pour que l'oiseau s’y baigne. Elle aime s’amuser dans l’eau et s’en servir pour se laver.",
                        desc42: "Il est préférable d'acheter plusieurs perchoirs en différents matériaux (corde, plastique, bois, ciment, etc.) de différentes grosseurs, afin d’évité que votre oiseau ne développer des problèmes aux pattes.",
                        desc43: "Mâchouiller du bois ou autres jouets est une activité indispensable pour ces oiseaux actifs. Les jouets et tout autre objet (cartons, bois pas trop dur, etc) sont indispensables.",
                    },
                    desc5: "Quand les griffes deviennent trop longues, il est important de les couper pour éviter que l’animal ne se blesse lui-même. Pour cela, vous pouvez soit vous munir de petits ciseaux prévus à cet effet (en vous renseignant au préalable sur la manière de les couper), soit vous rendre directement au vétérinaire. ",
                    desc5x: {
                        desc51: "Les Touis sont des oiseaux pouvant faire du piquage.",
                    },
                    desc6: " La maturité sexuelle est de 12 mois, la femelle pond 4 à 8 œufs qu'elle couve pendant 18 à 21 jours, les jeunes quittent le nid vers l'âge de 30 jours ou 5 semaines. Les parents les nourrissent pendant 2 à 3 mois. Il n'est pas rare de voir la femelle entamer une nouvelle ponte dès que les jeunes sont sevrés, il est donc préférable d'enlever les nids afin de ne pas épuiser la femelle. La femelle couve et sort occasionnellement pour se nourrir; le mâle va la nourrir à la porte du nid ou dans le nid seulement s'il a la permission de sa conjointe. Un bon couple produit deux ou trois couvées par année à partir du mois d'avril. À noter que, ces oiseaux aiment s'attaquer les uns les autres aux pattes, surtout pendant la reproduction.",
                }
            },
        ],

        mediumParrots: [
            {
                id: "eclectus", name: "Eclectus", desc1: "Un pur végétarien !",
                desc2: "Oiseau calme et peu bruyant, c'est un perroquet calme et très réservé.", router: "/Eclectus",
                guide: {
                    desc1: "Il mesure entre 30 et 40 cm, pèse entre 300 et 600 gr, et sa longévité est estimée à une quarantaine d’année, bien qu’on ait peu d’études à ce sujet. Ce perroquet est, sur de nombreux points, une exception parmi les perroquets. Tout d’abord, et à la différence de nombreux psittacidés, l’eclectus possède un dimorphisme sexuel marqué, à tel point qu’on a longtemps prit les mâles et les femelles pour des espèces différentes. Les mâles ont un plumage d’un beau vert lumineux, avec des plumes rouges et bleues au niveau du dessous des ailes, des rémiges et de la queue, avec un bec à la mandibule supérieur couleur orange corail. La femelle quand à elle à un plumage à dominante rouge, avec le ventre d’un beau violet et un collier bleu derrière la nuque. La queue vire vers une couleur orangée et le bec est entièrement noir.",
                    desc2: "Les Eclectus sont généralement curieux et inquisiteurs. Ils adorent explorer leur environnement, et être à toute proximité de l’activité familiale. Et s’ils décident de faire une grosse sieste, installés tel un bouddha sur leur perchoir, ne vous méprenez pas, ils ne cesseront jamais de vous suivre d’un œil. Cette forme de conscience tranquille est un trait caractéristique de l’Eclectus. Ces oiseaux sont d’ailleurs sensibles au regard, aux humeurs et au ton de la voix. Lorsqu’ils veulent être tranquilles, ces interactions peuvent leur suffire. Cela n’empêche pas d’avoir des échanges plus étoffés, ils adoreront par exemple les séances de jeu et de dressage.",
                    desc3: "Les Eclectus sont de gros mangeurs, et l’heure du repas est généralement une grande fête. Cet engouement pour la nourriture facilite d’ailleurs les séances de dressage. Il ne fait pas de doute que le chemin pour toucher le cœur d’un Eclectus passe par son estomac ! Leur nature est plutôt sédentaire, et ils peuvent avoir tendance à prendre un peu de poids. D’autre part, ces oiseaux sont essentiellement frugivores, et il est indispensable de distribuer des fruits et des légumes, accompagnés d’un mélange de graines et/ou de granulés. Les eclectus boivent peu, l’essentiel de leur hydratation étant procurée par les produits frais. Si vous le nourrissez de graines et de granulés, votre oiseau n’absorbera pas assez d’eau pour pouvoir traiter la nourriture solide et les vitamines synthétiques, entraînant ainsi un engorgement du foie et une toxicité chimique. Nous recommandons donc sérieusement de s’appliquer sur l’alimentation de votre eclectus, car ceux ci sont souvent très mal nourrit et sont donc victimes de picage.",
                    desc4: "Les Eclectus, comparés à bien d’autres espèces de perroquets, ont peu d’exigence. Ce qui fait d’eux des oiseaux très adaptés à la vie familiale. Cependant, pour lutter contre leur tendance à l’introversion, il est très important d’interagir en permanence, avec des échanges simples, caresses (dans le sens des plumes uniquement), petits mots doux, jeux, séances de dressage.",
                    desc4x: {
                        desc41: "La douche reste un point important. Cela vous donnera l’occasion de découvrir de plus près leur étonnant plumage, qui s’apparente à une fourrure. Ces oiseaux ont d’ailleurs une mue plus graduelle que les autres perroquets.",
                        desc42: "Comme pour tous les perroquets, la cage doit être bien grande et contenir plusieurs types de jouets que l’on changera de temps en temps.",
                    },
                    desc5: "Puisque les Eclectus sont si intelligents, ils sont souvent très sensibles et peuvent facilement devenir stressés s’ils commencent à se sentir négligés.",
                    desc5x: {
                        desc51: "Une autre particularité de l’Eclectus est le tapotement des orteils et le retournement des ailes. Ceci est similaire à la cueillette de plumes, qui est un problème de comportement courant chez les perroquets qui se sentent négligés.",
                        desc52: "Pour info: le plumage du perroquet éclectus est huileux. C’est un net avantage pour les personnes souffrant d’allergie. car pas de pellicules…",
                    },
                    desc6: "Dans la nature, un couple choisi une cavité dans un tronc d’arbre puis la femelle y ponds 2 oeufs, et elle attendra la venue d’un ou plusieurs mâles qui la nourriront le temps de la couvaison. En captivité, la reproduction commence par des parades consistant en des lissages de plumes et des salutations.La femelle va ensuite aller au nid, l’aménager à sa convenance, et pondre.",
                }
            },
            {
                id: "perruchesCollier", name: "Perruches à Collier", desc1: "Quelle valeur le collier ?",
                desc2: "Facile à élever, la perruche à collier peut-être peureuse et exclusive.", router: "/Alexandre",
                guide: {
                    desc1: "Cet oiseau afro-asiatique est aujourd’hui très courant en Europe y compris en France, notamment dans nos régions les plus au sud où la Perruche à collier est retournée à la vie sauvage, mais il est aussi possible d’en apercevoir dans les parcs et jardins à Nancy, en région parisienne ou encore à Lille. Depuis son introduction en Europe, dans certains pays (Espagne, Angleterre, Pays-Bas…) et plus particulièrement dans leurs grandes agglomérations, la Perruche à collier est jugée espèce invasive et la concurrence avec les étourneaux sansonnets, les moineaux domestiques et autres passereaux endémiques s’avère parfois inquiétante.",
                    desc2: "A l’état sauvage, les Perruches à collier constituent de grands groupes qui passent leurs nuits sur des arbres et ne les quittent que le matin pour chercher de la nourriture. La Perruche à collier émet un cri bien particulier, appelé sifflement ou jacassement. En captivité, c’est un oiseau assez simple à élever. Réputée moins démonstrative que d’autres espèces de perruches, celle à collier reste assez affectueuse et joueuse. Elle a tout autant besoin d’être stimulée par des jeux et des interactions.",
                    desc3: "La Perruche à collier ne consomme que des aliments d’origine végétale tels que des graines et une grande variété de fruits locaux, des fleurs, du riz, des baies, de la verdure, des germes de légumineuses, des légumes, du quinoa, des amandes, des céréales. Elle n’hésite pas à profiter des graines que l’on dépose dans les mangeoires à oiseaux.",
                    desc4: "L’idéal pour l’élevage des Perruche à collier est de leur consacrer une spacieuse volière, plutôt qu’une simple cage. Elle peut d’ailleurs être placée à l’extérieur, à condition de prévoir un abri permettant de fournir une protection efficace contre les intempéries.",
                    desc4x: {
                        desc41: "A l’intérieur, et outre les indispensables mangeoires et abreuvoirs à remplir et nettoyer quotidiennement, il est essentiel de disposer des accessoires permettant aux Perruches à collier de jouer, de s’occuper et de s’exercer : perchoirs, branches, etc.",
                        desc42: "Comme tous les oiseaux, il a besoin d'un bac d’eau pour satisfaire ses besoins de baignade.",
                    },
                    desc5: "Oiseau plutôt robuste, la Perruche à collier est néanmoins susceptible de souffrir de quelques maladies. Il s’agit principalement de la chlamydiose et de la maladie de pacheco, cette dernière étant associé à un herpès virus et pouvant, dans certains cas, donner lieu à des atteintes hépatiques graves.",
                    desc6: "La Perruche à collier atteint sa maturité sexuelle à l’âge de 3 ans, plus rarement dès 2 ans. Elle n’a qu’une seule couvée par an. Mâle et femelle se font des offrandes pendant la période nuptiale. Cet oiseau construit son nid dans des arbres creux et autres cavités. On parle donc de nidification cavernicole. C’est en mars-avril qu’a lieu la période de reproduction. Après l’accouplement, la femelle pond 2 à 5 œufs, rarement 6, qu’elle couve pendant 21 à 23 jours. Après l’éclosion, les petits sont nus, totalement démuni de duvet. Leur peau est toute rose. Ils demeurent au nid où ils sont nourris à la becquée par leurs deux parents. Ils commencent à prendre leur envol après une quarantaine de jours, mais les parents continuent de nourrir leur progéniture pendant encore un mois puis les juvéniles se nourrissent seuls. Ils peuvent toutefois vivre en famille jusqu’à la couvée suivante, soit pendant un an.",
                }
            },
            {
                id: "pionus", name: "Pionus", desc1: "Qu'est-ce qui est jaune, et qui...",
                desc2: "Oiseau non bruyant, ils sont doux, affectueux et sociables.", router: "/Pionus",
                guide: {
                    desc1: " C'est un oiseau qui se distingue par ses larges yeux bordés d'un cercle oculaire dénudé. Il est trapu, une queue courte et carrée d'où on peut apercevoir en dessous un triangle rouge. En fait, aucune autre espèce de perroquet ne vous montrera cette gamme de couleurs et peu importe l'espèce, vous serez toujours éblouis par les reflets qu'offre leurs plumages à la lumière du soleil.",
                    desc2: "Pour ceux ne voulant pas un oiseau bruyant, le pionus s'avère idéal. Ils sont doux, affectueux et sociables mais sans être accaparants. En attendant votre retour, ils peuvent très bien s'occuper avec leurs jouets. Mais comme tous les perroquets, ils auront tout de même besoin d'affection. Ils sont des oiseaux obéissants et facile à apprivoiser. De plus, cet oiseau n’a pas la réputation d’être mordeur, ce qui en fait un très bon perroquet pour débuter ou avec des enfants. ",
                    desc3: "L’alimentation de la Pione de Maximilien est composées de feuilles, fruits et graines. Pour reproduire son régime alimentaire à l’état captif on lui proposera des mélanges pour perroquets qui contiennent les essentiels en graines et on agrémentera les repas de quelques fruits et verdure.",
                    desc4: "Bien que n’appréciant guère la manipulation, la Pione a besoin de contact avec un congénère ou à défaut avec son maître. Lui parler quotidiennement et rester proche de la cage pour lui montrer votre présence est très important si on ne veut pas qu’elle dépérisse de solitude.",
                    desc4x: {
                        desc41: "En captivité cet oiseau est capable de bien s’adapter en volière et s’apprivoise sans grande difficulté",
                        desc42: "Ils ont également une odeur particulière bien qu’elle ne soit pas très très forte ou désagréable dans leur milieu naturel.",
                        desc43: "Comme pour tous les perroquets, la cage doit être bien grande et contenir plusieurs types de jouets que l’on changera de temps en temps.",
                    },
                    desc5: "Ce perroquet est très facile d’entretien et demande peu d’investissement. Son habitat doit régulièrement être nettoyé et désinfecté pour éviter la prolifération de bactéries.",
                    desc5x: {
                        desc51: "La caractéristique comportementale qui les distingue peut-être est leur respiration haletante voire asthmatique quand ils sont excités ou stressés. Ce bruit entendu pour la première fois par un nouveau propriétaire l'a préoccupé et inquiété jusqu'à ce qu’il se rende compte que cette respiration particulière  était normale.",
                        desc52: "Ne pas oublier de lui fournir un os de seiche ainsi qu’une pierre à minéraux pour lui donner tous les nutriments nécessaires.",
                        desc53: "L’activité de l’oiseau doit suffire à limer ses griffes si on veille à lui mettre des perchoirs en bois naturel et adaptés à la taille de ses doigts, à défaut on pourra les lui tailler à la main en faisant attention à ne pas le blesser. Un vétérinaire est habilité à le faire si vous avez peur de lui faire mal ou s’il se débat trop.",
                        desc54: "De temps en temps on peut lui proposer un bain sous surveillance, soit en plaçant un bac dans sa cage soit directement dans un lavabo si l’oiseau se laisse facilement manipuler.",
                    },
                    desc6: "La reproduction nécessite la formation d’un couple mature, la mise en place d’un nid-boîte et une volière spécifique. La femelle pond trois à cinq oeufs puis les couve durant environ 26 jours. Epinards et autres légumes verts doivent alors figurer à son menu régulièrement, ainsi que des vers de farine. Le maïs frais est alors particulièrement apprécié aussi, surtout en épi. Les petits sont sevrés entre 2,5 et 3 mois.",
                }
            },
        ],

        largeParrots: [
            {
                id: "aras", name: "Aras", desc1: "Des arcs-en-ciel sur pattes !",
                desc2: "Oiseau calme et peu bruyant, c'est un perroquet calme et très réservé.", router: "/Aras",
            },
            {
                id: "cacatoes", name: "Cacatoes", desc1: "Une crète qui en dit long...",
                desc2: "Selon l'espèce, le cacatoes peut-être très exclusif, mais ce sont de vrais clowns.", router: "/Cacatoes",
            },
            {
                id: "amazones", name: "Amazones", desc1: "Ce sont des vraies guerrières",
                desc2: "Oiseau non bruyant, ils sont doux, affectueux et sociables.", router: "/Amazones",
                guide: {
                    desc1: "Amazone, un perroquet en provenance d’amérique centrale puis du sud. Ces très beaux perroquets doivent leur nom à l’Amazonie dont quelques espèces sont originaires. Les amazones proviennent d’Amérique centrale puis d’Amérique du Sud. ",
                    desc2: "Elle est extrêmement sociable, s'adapte facilement et a de bons rapports avec l'homme. Bien dressée, elle apprend rapidement à très bien parler et à faire des exercices d'adresse.",
                    desc3: "Si à l’état sauvage l’amazone à front jaune se nourrit de fruits, de noix, de baies et de graines des champs de culture, en captivité un régime à base de mélange adapté pour perroquet tropical est requis. On peut compléter l’alimentation par des fruits, des noix et graines germées et de la verdure.",
                    desc4: "L’amazone vit habituellement en groupe dans la nature. Ce n’est qu’en période de reproduction que le couple s’éloigne du reste du groupe. Pour son bien-être l’amazone à front jaune a besoin d’une présence importante de ses maîtres ou à défaut d’un congénère.",
                    desc4x: {
                        desc41: "Bien sûr son habitat doit être proportionnel à sa taille pour lui laisser la possibilité d’évoluer sans être compressé dans un petit espace. Les volières sont la solution idéale pour l’amazone. L’exercice étant important chez l’amazone pour s’épanouir.",
                        desc42: " Un bain quotidien est nécessaire pour entretenir son plumage.",
                        desc43: "Comme pour tous les perroquets, la cage doit être bien grande et contenir plusieurs types de jouets que l’on changera de temps en temps.",
                    },
                    desc5: "L’Amazone peut présenter être atteint de différentes maladies dont les plus connues sont :",
                    desc5x: {
                        desc51: "La rhinite, causée par des différences de température importantes et des courants d’air qui favorisent des inflammations de la cire et de la muqueuse nasale. Quand elle n'est pas soignée à temps, la rhinite peut se transformer en trachéo-bronchite ou en pneumonie abdominale intense.",
                        desc52: "La chlamydiose est un virus transmissible entre oiseaux par voie respiratoire principalement et parfois par voie digestive. La pathologie se développe à cause d'une hygiène déplorable ou du stress.",
                        desc53: "L’aspergillose est une mycose déclenchée suite à une baisse d’immunité ou un traitement antibiotique en pénétrant par voie respiratoire sous forme de spores. Les symptômes sont la diarrhée, un abattement soudain et un amaigrissement.",
                        desc54: "La candidose est une mycose au même titre que l’aspergillose mais qui s’attaque cette fois au système digestif. L’oiseau contaminé est peu actif, reste en boule et s’amaigrit des suites d’un refus de s’alimenter. Dans certains cas on peut observer des déformations du bec, voire plus rarement des soucis neurologiques.",
                    },
                    desc6: "À l'état sauvage, la femelle pond une seule fois par an de 2 à 5 oeufs qu'elle couve environ 25 jours, et il n'est pas rare de voir jusqu'à 4 ou 5 poussins survivre. Les nouveaux nés sont capables de quitter le nid dès 9 semaines. Mais ils ne seront véritablement indépendant que 8 semaines plus tard. En captivité, elle se reproduit assez facilement dans les volières spacieuses, avec des soins adaptés. Les résultats obtenus aujourd'hui permettent de penser que c'est l'une des espèces les plus faciles à élever.",
                }

            },
            {
                id: "gris", name: "Gris du Gabon", desc1: "Où est le bouton sourdine ?",
                desc2: "L'oiseau parleur par excellence, le gris est un oiseau très sociable.", router: "/Gris",
                guide: {
                    desc1: "L’appellation du Gris du Gabon fait donc référence à son pays d’origine, mais aussi à la couleur caractéristique de son plumage. Le gris apparaît dans diverses nuances selon les zones du corps. La couleur est nettement plus foncée, voire noire, au niveau du bec et l’extrémité des ailes. Elle est plus claire, tendant vers le blanc, sur la face et l’abdomen. La face intérieure de la queue contraste avec tout le reste, puisqu’elle est rouge.",
                    desc2: "Le Gris du Gabon est surtout connu pour ses talents de parleur. Il est non seulement capable de restituer fidèlement des paroles et des sons, mais il le fait en plus dans le bon contexte. D’un naturel timide, il devient toutefois affectueux et expressif lorsqu’on lui laisse le temps de s’habituer à son environnement et son entourage. Il n’aime pas la solitude et demande à être stimulé fréquemment en lui parlant et en jouant avec lui. A la faveur d’un accompagnement de qualité et d’une éducation adaptée, il est possible de le laisser sortir de sa cage au bout d’une dizaine de jours pour qu’il puisse explorer la pièce ou la maison (bien fermer les issues). Dans son milieu naturel, le perroquet Gris du Gabon est extrêmement fidèle, puisqu’il garde le même partenaire durant toute sa vie. Jusqu’à sa maturité sexuelle, il évolue au sein de vastes groupes pouvant compter des centaines de membres. C’est donc un animal très sociable.",
                    desc3: "Le Gris du Gabon se nourrit principalement de graines. On peut donc lui donner des mélanges disponibles en animalerie, mais l’oiseau risque aussi de trier et s’expose ainsi aux carences. Dans tous les cas, il est nécessaire de lui proposer régulièrement des fruits frais et de la pierre minérale pour compléter son alimentation. Il peut également avoir besoin de vitamines à incorporer à son eau de temps en temps. Le vétérinaire saura définir ses besoins sur ce point.",
                    desc4: "Le Gris du Gabon ne supportant ni la solitude ni l’isolement, sa cage est à placer dans une pièce fréquentée, comme le séjour ou le salon. La cuisine et les pièces d’eau sont à éviter en raison de la fragilité de son système respiratoire.",
                    desc4x: {
                        desc41: "Sa cage doit être suffisamment spacieuse. A l’intérieur, des jouets et des perchoirs en bois naturel et robustes sont à laisser à sa disposition pour l’occuper.",
                        desc42: "Animal très intelligent, le Gris du Gabon est capable d’apprendre à déverrouiller les loquets simples, d’où la nécessité d’opter pour des dispositifs d’ouverture un peu plus sophistiqués.",
                        desc43: "Concernant ses mangeoires, on privilégiera les contenants en céramique ou en acier inoxydable, plus résistants que ceux en plastique qu’il sera susceptible d’endommager rapidement.",
                        desc44: "Par ailleurs, le Gris du Gabon adore se baigner. Il est donc recommander de l’installer une fois par semaine dans l’évier ou la baignoire pour qu’il puisse patauger librement, mais sous surveillance."
                    },
                    desc5: "Côté santé, le Gris du Gabon réclame une attention particulière en ce qui concerne ses voies respiratoires, réputées assez fragiles. Les maladies les plus fréquentes observées chez cette espèce sont, en effet, l’encombrement nasal, voire la formation de masse nasale, ainsi que les infections d’origine bactérienne ou fongique. Le Gris du Gabon peut également souffrir d’hypocalcémie, de circovirus (touchant le bec et les plumes), ainsi que de la dilatation du proventricule.",
                    desc6: "En règle générale, on compte 3 à 4 œufs par ponte chez le femelle perroquet Gris du Gabon. La période de couvaison dure ensuite entre 28 et 30 jours. Les parents nourrissent leurs oisillons pendant 12 semaines environ, puis les jeunes oiseaux commencent à prendre leur indépendance.",
                }
            },
        ],

        aras: [
            {
                id: "hyacinthe", name: "Aras Hyacinthe",
                guide: {
                    desc1: "Aujourd’hui, l’Ara hyacinthe est une espèce menacée. Elle est considérée comme vulnérable d’après son statut de conservation UICN (Union internationale pour la conservation de la nature). Ce bel oiseau est, en effet, victime du braconnage. Il est notamment chassé pour ses plumes. Un programme de sauvegarde et de reproduction en captivité est actuellement mené dans le but d’en préserver les effectifs. On estime que le nombre d’individus vivant dans leur milieu naturel avoisine les 2000, alors que cette population était 50 fois plus élevée il y a quelques décennies.",
                    desc2: "Doté d’une voix très puissante, l’Ara hyacinthe s’exprime fréquemment à travers elle en émettant différents types de cris en fonction de la situation. Lorsqu’il vole en couple, par exemple, ces derniers lui permettent de maintenir le contact avec le partenaire. En collectivité, l’oiseau a tendance à grogner et peut même pousser des jappements faisant penser à ceux du chiot. Et lorsqu’il est en alerte, l’Ara hyacinthe émet des cris plus grinçants. Généralement, il préfère mener une vie de solitaire ou en couple, surtout pendant la saison de nidification, mais on peut rencontrer des groupes constitués de 20 individus dans certaines régions.",
                    desc3: "La nourriture préférée de l’Ara hyacinthe, ce sont les noix de palmiers, dont il parvient sans peine à briser la coque grâce à son puissant bec. Il ne rechigne pas non plus à manger les fruits tombés, notamment après un incendie. Les figues et quelques autres fruits figurent également à son menu. S’il en a l’occasion, l’Ara hyacinthe consomme volontiers des mollusques d’eau douce comme les ampullaires.",
                    desc4: "En raison de sa grande taille, l’Ara hyacinthe a besoin de beaucoup d’espace pour être heureux. Il lui faut donc une grande cage lui permettant de déployer ses ailes. Dans l’idéal, on pourrait lui consacrer une petite pièce.",
                    desc4x: {
                        desc41: "Il convient aussi de rappeler qu’il n’hésite pas à utiliser la puissance de son bec, d’où la nécessité de laisser des objets en bois dur et des branches à sa disposition.",
                        desc42: "L’ensemble des accessoires destinés à l’Ara hyacinthe sont choisis pour leur robustesse, y compris les perchoirs.",
                    },
                    desc5: "Bien acclimaté, l’Ara hyacinthe est un oiseau réputé robuste. Il ne pose pas de problème de santé majeur tant qu’il reçoit une alimentation et des soins adaptés.",
                    desc6: "La saison de nidification de l’Ara hyacinthe est très variable selon la région. Elle peut débuter en octobre comme en juillet, et prendre fin en décembre, janvier ou février. Généralement, on compte 2 œufs par ponte.La couvaison dure, quant à elle, 27 à 30 jours. Les jeunes oiseaux quittent le nid vers l’âge de 14 semaines.",
                }
            },
            {
                id: "ararauna", name: "Aras Ararauna",
                guide: {
                    desc1: "Originaire d’Amazonie, l’Ara bleu et jaune est une espèce protégée. L’oiseau lui-même et son habitat sont menacés. Ce grand perroquet affiche un tempérament enjoué et expressif. On apprécie également sa capacité à « parler », ou plutôt à imiter notre langage.",
                    desc2: "En captivité, le caractère de l’Ara bleu et jaune est souvent décrit comme joueur et attachant. Il est aussi réputé très bruyant et expressif. Il émet différentes sortes de cris et amuse par sa capacité à imiter le langage humain. A l’état sauvage, l’Ara bleu et jaune évolue en couple au sein de groupes plus ou moins étendus.Il s’agit d’ailleurs d’un animal monogame ; il gardera un seul et unique partenaire tout au long de sa vie.",
                    desc3: "L’Ara bleu et jaune se nourrit principalement de grains, de noix, de fruits (pomme, poire, banane, fraise…) et de légumes (carotte, haricots verts…).",
                    desc4: "Du fait de sa grande taille, l’Ara bleu et jaune a besoin d’une grande cage, voire d’une volière en extérieur. Il convient toutefois de bien choisir l’emplacement de cette dernière pour que les oiseaux soient bien protégés des conditions météorologiques.",
                    desc4x: {
                        desc41: "L’espace de vie de l’Ara bleu et jaune doit être agrémenté de perchoirs solides, de troncs, de jeux lui offrant l’occasion de décortiquer, d’abris, d’abreuvoirs et de mangeoires bien accessibles.",
                    },
                    desc5: "L’Ara bleu et jaune est un oiseau à la santé plutôt robuste, mais il peut souffrir de diverses maladies s’il ne bénéficie pas du suivi et des soins adéquats : kyste folliculaire, conjonctivite, chlamydiose, vers capillaires…",
                    desc6: "L’Ara bleu et jaune établit son nid dans les trous de palmiers, préférablement secs. La femelle génère 2 à 4 œufs par ponte, puis en assure la couvaison pendant 28 jours. C’est vers l’âge de 3 mois que les jeunes perroquets quittent le nid. Cependant, ils continuent d’être nourris par leurs géniteurs jusqu’à 6, 7 ou même 8 mois. L’âge de la maturité sexuelle chez l’Ara bleu et jaune se situe entre 8 et 10 ans.",
                }
            },
            {
                id: "macao", name: "Aras Macao",
                guide: {
                    desc1: "Originaire d’Amazonie, l’Ara Macao est une espèce protégée. L’oiseau lui-même et son habitat sont menacés. Ce grand perroquet affiche un tempérament enjoué et expressif. On apprécie également sa capacité à « parler », ou plutôt à imiter notre langage.",
                    desc2: "En captivité, le caractère de l’Ara Macao est souvent décrit comme joueur et attachant. Il est aussi réputé très bruyant et expressif. Il émet différentes sortes de cris et amuse par sa capacité à imiter le langage humain. A l’état sauvage, l’Ara Macao évolue en couple au sein de groupes plus ou moins étendus.Il s’agit d’ailleurs d’un animal monogame ; il gardera un seul et unique partenaire tout au long de sa vie.",
                    desc3: "L’Ara Macao se nourrit principalement de grains, de noix, de fruits (pomme, poire, banane, fraise…) et de légumes (carotte, haricots verts…).",
                    desc4: "Du fait de sa grande taille, l’Ara Macao a besoin d’une grande cage, voire d’une volière en extérieur. Il convient toutefois de bien choisir l’emplacement de cette dernière pour que les oiseaux soient bien protégés des conditions météorologiques.",
                    desc4x: {
                        desc41: "L’espace de vie de l’Ara Macao doit être agrémenté de perchoirs solides, de troncs, de jeux lui offrant l’occasion de décortiquer, d’abris, d’abreuvoirs et de mangeoires bien accessibles.",
                    },
                    desc5: "L’Ara Macao  est un oiseau à la santé plutôt robuste, mais il peut souffrir de diverses maladies s’il ne bénéficie pas du suivi et des soins adéquats : kyste folliculaire, conjonctivite, chlamydiose, vers capillaires…",
                    desc6: "L’Ara Macao  établit son nid dans les trous de palmiers, préférablement secs. La femelle génère 2 à 4 œufs par ponte, puis en assure la couvaison pendant 28 jours. C’est vers l’âge de 3 mois que les jeunes perroquets quittent le nid. Cependant, ils continuent d’être nourris par leurs géniteurs jusqu’à 6, 7 ou même 8 mois. L’âge de la maturité sexuelle chez l’Ara Macao se situe entre 8 et 10 ans.",
                }
            },
        ],

        cockatoos: [
            {
                id: "rosalbin", name: "Cacatoes Rosalbin",
                guide: {
                    desc1: "Les Rosalbins sont de véritables clowns, faciles à vivre, très affectueux (comme tous les cacatoès), mais aussi pleins d’énergie. Ils sont probablement les plus extravertis du groupe des cacatoès. Découvrez leur personnalité et leurs exigences...",
                    desc2: "Particulièrement joueurs, curieux de tout, ils font des oiseaux de compagnie merveilleux et faciles à éduquer. Un vrai petit bonheur avec une personnalité pétillante. Les Rosalbins sont des oiseaux très sociaux, intelligents et joueurs nécessitant une stimulation et des interactions fréquentes : jeux, entraînements à des tours, échanges verbaux. Ils ont une grande confiance en eux et si l’on n’y prend pas garde, ils peuvent avoir des réactions imprévisibles. Il est donc indispensable de bien les éduquer en respectant des règles très claires. Ces oiseaux ne sont généralement pas bruyants (contrairement aux autres membres de leur famille) excepté le matin et le soir et durant leur petit moment de folie. Leur voix est particulièrement agréable et expressive. En revanche leur cri est perçant, heureusement, rarement utilisé. C’est un oiseau que l’on peut facilement garder en appartement.",
                    desc3: "Les Rosalbins ont fortement tendance à l’obésité et il faut faire particulièrement attention à ne pas leur distribuer une nourriture trop grasse. Un mélange pour grande perruche (et non pas pour perroquet) est adapté tant qu’il n’y a pas de graine de tournesol. On peut distribuer des morceaux de branches de millet dans la ration. Les Rosalbins en raffolent et cela les occupe bien. Les fruits et légumes n’ont, en revanche, pas beaucoup de succès auprès des Rosalbins. Soyons clair, ils n’en mangent pas ou très difficilement. On peut toujours essayer de leur donner des carottes, qu’ils aiment déchiqueter, et à très petite dose, du maïs, des pois chiches. Les pommes et les poires sont généralement refusées.",
                    desc4: "Les rosalbins ont absolument besoin de se dépenser, et il est indispensable de les laisser voler le plus possible. La cage, surtout pour ces oiseaux, n’est qu’un refuge pour se nourrir, pour jouer, se reposer, dormir. Il s’agit moins d’avoir une cage gigantesque que de laisser la porte ouverte pour leur permettre de faire de l’exercice.",
                    desc4x: {
                        desc41: "Comme tous les cacatoès, ils adorent mâcher tout ce qui passe à portée de leur bec (moins pourtant que les autres membres de la famille). Il faut donc impérativement leur distribuer des jouets, des branches, des pommes de pins, etc. Cela conserve leur bec dans de bonnes conditions, et c’est une excellente occupation.",
                        desc42: "Les Rosalbins sont considérés comme des espèces dépendantes. Bien moins que les autres membres de la famille, mais plus qu’un Eclectus par exemple. Ils sont dépendant dans le sens ou ils ont besoin d’interactions sociales fréquentes que l’on peut satisfaire en manipulant l’oiseau, en jouant, en le dressant, en lui expliquant de nouveaux comportements, en conservant un contact visuel, en reconnaissant ses bonnes actions, en l’encourageant, en le félicitant. Les cacaotès Rosalbin sont des  oiseaux sont extrêmement affectueux, nécessitant beaucoup d’attention et d’amour.",
                        desc43: "Sa cage doit être suffisamment spacieuse. A l’intérieur, des jouets et des perchoirs en bois naturel et robustes sont à laisser à sa disposition pour l’occuper.",
                        desc44: "Par ailleurs, le cacatoes adore se baigner. Il est donc recommander de l’installer une fois par semaine dans l’évier ou la baignoire pour qu’il puisse patauger librement, mais sous surveillance.",
                    },
                    desc5: "Les cacatoès doivent être logés dans des cages à perroquet de grande taille et très résistante.",
                    desc5x: {
                        desc51: "Nettoyez et désinfectez la cage toutes les semaines. Enlevez les fientes au moins tous les 2 jours. Changez l’eau de l’abreuvoir et enlevez les aliments non consommés tous les jours.",
                        desc52: "Pour entretenir son pelage, le cacatoès (surtout les espèces blanches) s’enduit lui-même le plumage d’une fine poudre qu’il produit et qui lui donne son petit côté duveteux. La présence de cette poudre est la preuve d’une bonne santé chez le cacatoès. Les oiseaux malades ont peu ou pas de poudre. Mais attention, cette poudre peut être responsable d’allergie chez l’Homme.",
                    },
                    desc6: "La maturité sexuelle est atteinte vers l’âge de 2 ans. La femelle cacatoès rosalbin pond en général jusqu’à 5 oeufs qui est plus prolifique des cacatoes. L’incubation dure 25 à 28 jours, les deux parents se relayant pour couver les œufs. Les oisillons prennent leur envol entre 50 et 85 jours selon les espèces. Le plus gros souci avec les cacatoès est la compatibilité des partenaires : il est fréquent que, dans un couple qui vivait pourtant en parfaite harmonie, le mâle agresse violemment la femelle au début de la saison des amours, pouvant aller jusqu’à la tuer. En revanche, une fois qu’un couple s’est constitué et s’entend bien, il n’y a généralement plus de soucis, ils peuvent nicher pendant plus de 20 ans.",
                }
            },
            {
                id: "alba", name: "Cacatoes Alba",
                guide: {
                    desc1: "Les cacatoès ont souvent un caractère fort et, de ce fait, ils ne sont pas recommandés aux débutants. Ils aiment se donner en spectacle (danser, culbuter…) et mobiliser toute l’attention. Ils ont tendance à créer un lien très fort et exclusif avec un membre de la famille humaine et à exiger une totale disponibilité, ce qui peut conduire à des agressions si on ne se plie pas à leurs volontés. En général, le comportement agressif  et possessif a tendance à empirer avec l’âge, surtout s’ils ont été nourris à la main, car alors ils ne craignent pas l’Homme et n’hésitent pas à l’attaquer et à le mordre. Et inutile avec eux de tenter une éducation ferme et d’élever la voix : ils n’en font qu’à leur tête et toute manifestation autoritaire ne fait que les stresser.",
                    desc2: "C’est un être aimant, doux et attachant, mais à vif émotionnellement. Une séparation, un stress ou un manque d’attention de son maître peut le faire entrer dans une profonde déprime. Seule une éducation parfaitement cadrée peut en venir à bout. Il ne faut pas céder à son tempérament parfois capricieux au début. Il s’agit d’une phase de test, qu’il vaut mieux passer avec succès.",
                    desc3: "Le cacatoès a besoin d’une nourriture bien équilibrée et de qualité. Il existe des boulettes adaptées à ces espèces ; très bien dosées, elles peuvent représenter près de 70 % de leur alimentation. Les graines ne sont pas indispensables, car elles ont tendance à le faire grossir. Réservez-les comme friandises. Vous pouvez donner à votre animal des fruits et des légumes frais, à renouveler dès qu’ils perdent de leur fraîcheur s’ils ne sont pas consommés immédiatement. Ceux-ci sont en effet riches en vitamines et minéraux et constituent un bon apport nutritionnel. Les cacatoès apprécient notamment les haricots bien cuits, les pommes, les poires, les feuilles de chou et les épinards. Pensez à bien les laver avant de les donner à votre oiseau et préférez-les bio.",
                    desc4: "Placez la volière dans une pièce vivante comme le séjour pour que votre cacatoès ne s’ennuie pas et prenne part à la vie de famille. Tenez sa cage propre en lavant ses gamelles chaque jour et en nettoyant les fientes tombées dans le fond du bac. Disposez un lit de papiers journaux pour en faciliter l’entretien.",
                    desc4x: {
                        desc41: "Pour satisfaire son grand besoin de gruger, il peut aller jusqu’à mâchouiller ses propres plumes. Vous l’aurez compris, il est plus facilement que d’autres enclin au picage.",
                        desc42: "Agrémentez la cage de perchoirs en variant les formats pour éviter que l’oiseau ne développe une arthrose des pattes. Pour le cacatoès, préférez des branchages véritables de diamètres variables et très solides, capables de supporter son poids et de l’aider à trouver son équilibre.",
                        desc43: "Mettez des jouets à disposition de votre oiseau, car il les apprécie. Pensez en revanche à les renouveler régulièrement pour éviter qu’il ne s’ennuie et s’en lasse. Le cacatoès aime particulièrement les perles en acrylique, solides et suffisamment grosses pour ne pas être avalées.",
                        desc44: "Par ailleurs, le cacatoes adore se baigner. Il est donc recommander de l’installer une fois par semaine dans l’évier ou la baignoire pour qu’il puisse patauger librement, mais sous surveillance.",
                    },
                    desc5: "Le cacatoès est robuste, mais il peut être sujet à plusieurs maladies. En outre, il a généralement tendance à cacher son état lorsqu’il se sent mal, raison pour laquelle il est important de le surveiller régulièrement et de réagir au moindre signe en l’emmenant chez le vétérinaire sans attendre. Les maladies les plus fréquentes et qui doivent vous alerter sont les suivantes: ",
                    desc5x: {
                        desc51: "La psittacose ou chlamydiose : cette maladie qui touche les perroquets peut être transmise à l’homme en cas d’inhalation de fientes si celles-ci sont envahies de bactéries infectieuses. Elle peut se transformer en pneumonie ou en méningite si elle n’est pas traitée. Il est possible de soigner l’oiseau fiévreux et malade avec des antibiotiques adaptées.",
                        desc52: "Le polyomavirus ou mue française est une maladie fréquente dans les élevages. Le virus est logé dans les fientes et les sécrétions de l’oiseau essentiellement. Si le cacatoès est en bonne santé, son système immunitaire peut suffire à vaincre le virus, mais un traitement antibiotique est parfois nécessaire. En revanche, chez les jeunes spécimens, il peut conduire au décès par hémorragie interne.",
                        desc53: "Le paramyxovirus : ce virus entraîne des troubles nerveux et peut se transmettre des parents vers les petits dans l’œuf ou même pendant la fécondation.",
                    },
                    desc6: "Le nid est construit dans la cavité d’un tronc d’arbre. La femelle pond deux oeufs, puis les couve avec son partenaire durant environ trente jours. Le père participe activement à l’alimentation et à l’éducation des petits, qui sont sevrés 84 à 90 jours après la naissance. Il a été observé que les plus gros oisillons prennent l’ascendant sur les plus petits, prenant la plus grosse part de nourriture.",
                }
            },
            {
                id: "moluques", name: "Cacatoes des Moluques",
                guide: {
                    desc1: "Les cacatoès ont souvent un caractère fort et, de ce fait, ils ne sont pas recommandés aux débutants. Ils aiment se donner en spectacle (danser, culbuter…) et mobiliser toute l’attention. Ils ont tendance à créer un lien très fort et exclusif avec un membre de la famille humaine et à exiger une totale disponibilité, ce qui peut conduire à des agressions si on ne se plie pas à leurs volontés. En général, le comportement agressif  et possessif a tendance à empirer avec l’âge, surtout s’ils ont été nourris à la main, car alors ils ne craignent pas l’Homme et n’hésitent pas à l’attaquer et à le mordre. Et inutile avec eux de tenter une éducation ferme et d’élever la voix : ils n’en font qu’à leur tête et toute manifestation autoritaire ne fait que les stresser.",
                    desc2: "Très affectueux, exclusif, il adore être au centre de toutes les attentions et aime prendre le contrôle sur son entourage. Mieux vaut donc disposer d’une grande disponibilité pour élever des cacatoès, d’autant qu’avec l’âge, ces oiseaux ont tendance à se montrer de plus en plus possessifs et exigeants. Il est en tout cas indispensable de leur offrir les meilleures conditions de vie en captivité mais également d’avoir mûrement réfléchi avant d’en accueillir un chez soi car ça n’est pas un animal de compagnie qui convient aux débutants.",
                    desc3: "La nourriture du cacatoès doit être équilibrée afin de répondre aux besoins de son organisme. Contrairement à ce que l’on pourrait penser, cet oiseau ne doit manger des graines qu’occasionnellement afin de ne pas devenir obèse. Les deux tiers de son alimentation peuvent être constitués d’aliments spécifiques présentés sous forme de boules que l’on peut acheter dans les animaleries. Il a aussi besoin de légumes et de fruits d’une extrême fraîcheur comme les haricots à condition qu’ils soient suffisamment cuits, l’épinard, le chou, la poire et la pomme. Il faut être vigilent sur le choix des fruits et légumes car nombre d’entre eux peuvent s’avérer toxiques pour le cacatoès. C’est par exemple le cas de l’avocat, de la tomate, de l’oignon, des champignons et des haricots crus.",
                    desc4: "Placez la volière dans une pièce vivante comme le séjour pour que votre cacatoès ne s’ennuie pas et prenne part à la vie de famille. Tenez sa cage propre en lavant ses gamelles chaque jour et en nettoyant les fientes tombées dans le fond du bac. Disposez un lit de papiers journaux pour en faciliter l’entretien.",
                    desc4x: {
                        desc41: "Agrémentez la cage de perchoirs en variant les formats pour éviter que l’oiseau ne développe une arthrose des pattes. Pour le cacatoès, préférez des branchages véritables de diamètres variables et très solides, capables de supporter son poids et de l’aider à trouver son équilibre.",
                        desc42: "En ce qui concerne les jouets à placer dans la volière, il est nécessaire d’y consacrer un petit budget car ils doivent être nombreux, variés, et il convient de les remplacer très fréquemment par d’autres afin de satisfaire la grande curiosité de son petit compagnon. Cet oiseau risque de se lasser rapidement et de s’ennuyer mortellement s’il dispose toujours du même jouet.",
                        desc43: "Mais il ravage aussi beaucoup ce qui lui passe sous le bec ou entre les doigts. Le cacatoès est en fait un oiseau dévastateur. Mieux vaut donc qu’il dispose de jouets bien à lui mais aussi d’un espace qui lui est clairement dédié car, à défaut, il ne mettra pas longtemps à s’en prendre aux meubles !"
                    },
                    desc5: "Le cacatoès est robuste, mais il peut être sujet à plusieurs maladies. En outre, il a généralement tendance à cacher son état lorsqu’il se sent mal, raison pour laquelle il est important de le surveiller régulièrement et de réagir au moindre signe en l’emmenant chez le vétérinaire sans attendre. Les maladies les plus fréquentes et qui doivent vous alerter sont les suivantes: ",
                    desc5x: {
                        desc51: "La psittacose ou chlamydiose : cette maladie qui touche les perroquets peut être transmise à l’homme en cas d’inhalation de fientes si celles-ci sont envahies de bactéries infectieuses. Elle peut se transformer en pneumonie ou en méningite si elle n’est pas traitée. Il est possible de soigner l’oiseau fiévreux et malade avec des antibiotiques adaptées.",
                        desc52: "Le polyomavirus ou mue française est une maladie fréquente dans les élevages. Le virus est logé dans les fientes et les sécrétions de l’oiseau essentiellement. Si le cacatoès est en bonne santé, son système immunitaire peut suffire à vaincre le virus, mais un traitement antibiotique est parfois nécessaire. En revanche, chez les jeunes spécimens, il peut conduire au décès par hémorragie interne.",
                        desc53: "Le paramyxovirus : ce virus entraîne des troubles nerveux et peut se transmettre des parents vers les petits dans l’œuf ou même pendant la fécondation."
                    },
                    desc6: "Le cacatoès à huppe rouge niche à la fin de la saison sèche, juste avant les pluies de mousson diluviennes débutant en novembre. Après la parade nuptiale, le mâle et la femelle restent unis pour la vie. Une fois accouplés, ils préparent un nid en garnissant de fragments de bois le fond d'un trou d'arbre. La femelle pond jusqu'à sept oeufs blancs, un peu plus petits que des oeufs de poule. Les deux adultes couvent les oeufs, pendant environ trois semaines et demie. Après l'éclosion, les jeunes poursuivent leur croissance à l'abri du nid. Ils n'en sortent qu'au bout d'environ trois mois.",
                }
            },
            {
                id: "huppejaune", name: "Cacatoes à Huppe Jaune",
                guide: {
                    desc1: "Les cacatoès ont souvent un caractère fort et, de ce fait, ils ne sont pas recommandés aux débutants. Ils aiment se donner en spectacle (danser, culbuter…) et mobiliser toute l’attention. Ils ont tendance à créer un lien très fort et exclusif avec un membre de la famille humaine et à exiger une totale disponibilité, ce qui peut conduire à des agressions si on ne se plie pas à leurs volontés. En général, le comportement agressif  et possessif a tendance à empirer avec l’âge, surtout s’ils ont été nourris à la main, car alors ils ne craignent pas l’Homme et n’hésitent pas à l’attaquer et à le mordre. Et inutile avec eux de tenter une éducation ferme et d’élever la voix : ils n’en font qu’à leur tête et toute manifestation autoritaire ne fait que les stresser.",
                    desc2: "Très affectueux, exclusif, il adore être au centre de toutes les attentions et aime prendre le contrôle sur son entourage. Mieux vaut donc disposer d’une grande disponibilité pour élever des cacatoès, d’autant qu’avec l’âge, ces oiseaux ont tendance à se montrer de plus en plus possessifs et exigeants. Il est en tout cas indispensable de leur offrir les meilleures conditions de vie en captivité mais également d’avoir mûrement réfléchi avant d’en accueillir un chez soi car ça n’est pas un animal de compagnie qui convient aux débutants.",
                    desc3: "La nourriture du cacatoès doit être équilibrée afin de répondre aux besoins de son organisme. Contrairement à ce que l’on pourrait penser, cet oiseau ne doit manger des graines qu’occasionnellement afin de ne pas devenir obèse. Les deux tiers de son alimentation peuvent être constitués d’aliments spécifiques présentés sous forme de boules que l’on peut acheter dans les animaleries. Il a aussi besoin de légumes et de fruits d’une extrême fraîcheur comme les haricots à condition qu’ils soient suffisamment cuits, l’épinard, le chou, la poire et la pomme. Il faut être vigilent sur le choix des fruits et légumes car nombre d’entre eux peuvent s’avérer toxiques pour le cacatoès. C’est par exemple le cas de l’avocat, de la tomate, de l’oignon, des champignons et des haricots crus.",
                    desc4: "Placez la volière dans une pièce vivante comme le séjour pour que votre cacatoès ne s’ennuie pas et prenne part à la vie de famille. Tenez sa cage propre en lavant ses gamelles chaque jour et en nettoyant les fientes tombées dans le fond du bac. Disposez un lit de papiers journaux pour en faciliter l’entretien.",
                    desc4x: {
                        desc41: "Agrémentez la cage de perchoirs en variant les formats pour éviter que l’oiseau ne développe une arthrose des pattes. Pour le cacatoès, préférez des branchages véritables de diamètres variables et très solides, capables de supporter son poids et de l’aider à trouver son équilibre.",
                        desc42: "En ce qui concerne les jouets à placer dans la volière, il est nécessaire d’y consacrer un petit budget car ils doivent être nombreux, variés, et il convient de les remplacer très fréquemment par d’autres afin de satisfaire la grande curiosité de son petit compagnon. Cet oiseau risque de se lasser rapidement et de s’ennuyer mortellement s’il dispose toujours du même jouet.",
                        desc43: "Mais il ravage aussi beaucoup ce qui lui passe sous le bec ou entre les doigts. Le cacatoès est en fait un oiseau dévastateur. Mieux vaut donc qu’il dispose de jouets bien à lui mais aussi d’un espace qui lui est clairement dédié car, à défaut, il ne mettra pas longtemps à s’en prendre aux meubles !"
                    },
                    desc5: "Le cacatoès est robuste, mais il peut être sujet à plusieurs maladies. En outre, il a généralement tendance à cacher son état lorsqu’il se sent mal, raison pour laquelle il est important de le surveiller régulièrement et de réagir au moindre signe en l’emmenant chez le vétérinaire sans attendre. Les maladies les plus fréquentes et qui doivent vous alerter sont les suivantes :",
                    desc5x: {
                        desc51: "La psittacose ou chlamydiose : cette maladie qui touche les perroquets peut être transmise à l’homme en cas d’inhalation de fientes si celles-ci sont envahies de bactéries infectieuses. Elle peut se transformer en pneumonie ou en méningite si elle n’est pas traitée. Il est possible de soigner l’oiseau fiévreux et malade avec des antibiotiques adaptées.",
                        desc52: "Le polyomavirus ou mue française est une maladie fréquente dans les élevages. Le virus est logé dans les fientes et les sécrétions de l’oiseau essentiellement. Si le cacatoès est en bonne santé, son système immunitaire peut suffire à vaincre le virus, mais un traitement antibiotique est parfois nécessaire. En revanche, chez les jeunes spécimens, il peut conduire au décès par hémorragie interne.",
                        desc53: "Le paramyxovirus : ce virus entraîne des troubles nerveux et peut se transmettre des parents vers les petits dans l’œuf ou même pendant la fécondation."
                    },
                    desc6: "La saison de reproduction a lieu d’août à janvier dans le sud, et de mai à septembre dans le nord. Le cacatoès à huppe jaune nidifie dans des trous d’arbres, en particulier dans de grands Eucalyptus, et habituellement près de l’eau. Les deux sexes préparent le nid. Ils sont monogames. La femelle dépose 1 à 3 œufs blancs. L’incubation dure environ 30 jours, partagée par les deux adultes. Les poussins sont nidicoles et sont nourris par les parents. Ils abandonnent le nid au bout de 60 à 70 jours. Ils restent avec leurs parents toute l’année. Les groupes familiaux peuvent rester unis pour longtemps.",
                }
            },
        ],

        guide: {},

        testParrots: [
            {
                id: "test1", name: "Filou", age: "15", desc1: "Une boule de plumes pleine d'amour!",
                desc2: "Oiseau calme et peu bruyant, c'est un perroquet doux et très réservé.", router: "/Perruches"
            },
            {
                id: "test2", name: "Atchoum", age: "8", desc1: "Une machine à câlin",
                desc2: "Atchoum est un perroquet de 3ème main, docile mais à entrâiner.", router: "/Perruches"
            },
            {
                id: "test3", name: "Nina", age: "2", desc1: "Mi-ange, mi-démon",
                desc2: "Comme tous les cacatoes, c'est un sacré caractère.", router: "/Perruches"
            },
        ],
    },
    mutations: {
        RESET_GUIDE(state) {
            Vue.set(state, 'guide', initialState.guide)
        },
        RESET_SIZECHOICE(state) {
            Vue.set(state, 'sizeChoice', initialState.sizeChoice)
        },
    },
    actions: {
    }
})

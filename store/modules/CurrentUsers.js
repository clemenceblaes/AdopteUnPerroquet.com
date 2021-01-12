import { Store } from "vuex";

const initialState = {
    guide: {},
}

const state = {
    parrotsSize: [
        {
            id: "little", name: "Petites espèces", desc1: "Ils sont tous petits et tous mimis !",
            desc2: "Venez découvrir nos petites espèces : Youyous, Touis, Conures...", router: "/littleParrots"
        },
        {
            id: "medium", name: "Moyennes espèces", desc1: "Ici c'est le bon compromis de taille !",
            desc2: "Faites un tour parmi nos moyennes espèces : Eclectus, Perruches à Collier, ...", router: "/mediumParrots"
        },
        {
            id: "large", name: "Grandes espèces", desc1: "Pour ceux qui n'ont pas peur des gros becs !",
            desc2: "La sélection grande taille : Aras, Cacatoes, Amazones, ...", router: "/largeParrots"
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
                desc1: "test",
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
            id: "youyous", name: "Youyous du Sénégal", desc1: "Non, il ne vit pas qu'au Sénégal !",
            desc2: "Il est un compagnon agréable, amusant à observer en raison de ses acrobaties.", router: "/Youyous"
        },
        {
            id: "conures", name: "Conures", desc1: "Un petit rayon de soleil chez soi.",
            desc2: "Oiseaux sociables, joueurs, affectueux et possibilité de l’apprivoiser.", router: "/Perruches"
        },
        {
            id: "touis", name: "Touis", desc1: "Ils font Toui-Toui et pas Cui-Cui ceux-là !",
            desc2: "Le Toui est un oiseau peu bruyant, très attachant, mais avec son caractère.", router: "/Touis"
        },
    ],

    mediumParrots: [
        {
            id: "eclectus", name: "Eclectus", desc1: "Un pur végétarien !",
            desc2: "Oiseau calme et peu bruyant, c'est un perroquet calme et très réservé.", router: "/Perruches"
        },
        {
            id: "perruchesCollier", name: "Perruches à Collier", desc1: "Quelle valeur le collier ?",
            desc2: "Facile à élever, la perruche à collier peut-être peureuse et exclusive.", router: "/Perruches"
        },
        {
            id: "pionus", name: "Pionus", desc1: "Qu'est-ce qui est jaune, et qui...",
            desc2: "Oiseau non bruyant, ils sont doux, affectueux et sociables.", router: "/Perruches"
        },
    ],

    largeParrots: [
        {
            id: "aras", name: "Aras", desc1: "Des arcs-en-ciel sur pattes !",
            desc2: "Oiseau calme et peu bruyant, c'est un perroquet calme et très réservé.", router: "/Perruches"
        },
        {
            id: "cacatoes", name: "Cacatoes", desc1: "Une crète qui en dit long...",
            desc2: "Selon l'espèce, le cacatoes peut-être très exclusif, mais ce sont de vrais clowns.", router: "/Perruches"
        },
        {
            id: "amazones", name: "Amazones", desc1: "Ce sont des vraies guerrières",
            desc2: "Oiseau non bruyant, ils sont doux, affectueux et sociables.", router: "/Perruches"
        },
        {
            id: "gris", name: "Gris du Gabon", desc1: "Où est le bouton sourdine ?",
            desc2: "L'oiseau parleur par excellence, le gris est un oiseau très sociable.", router: "/Gris"
        },
    ],

    cockatoos: [
        { id: "rosalbin", name: "Cacatoes Rosalbin" },
        { id: "alba", name: "Cacatoes Alba" },
        { id: "oeilnu", name: "Cacatoes Oeil Nu" },
        { id: "goffin", name: "Cacatoes Goffin" },
        { id: "moluques", name: "Cacatoes des Moluques" },
        { id: "huppejaune", name: "Cacatoes à Huppe Jaune" },
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
};
const getters = {
    getStoreGuide() {
        return Store.state.guide;
    }
};
const setters = {
    setGuideEmpty: function () {
        state.test.length = 0;
    }
};
const mutations = {
    RESET_TEST(state) {
        Vue.set(state, 'guide', initialState.test)
    },
};

export default {
    namespaced: true,
    state,
    getters,
    setters,
    mutations,
}

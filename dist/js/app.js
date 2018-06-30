Vue.component('cubecontainer', {
    template: `
    <div class="cubeContainer">
        <h2>Bienvenue sur le projet Cubic</h2>
        <div id="wrapper">

            <div class="cube">

                <div class="side" id="wellside">
                    <div class="cube-image text">Accueil</div>
                </div>
                
                <div class="side" id="chillside">
                    <div class="cube-image text">Détente</div>
                </div>

                <div class="side" id="timeside">
                    <div class="cube-image text">Galerie du temps</div>
                </div>

                <div class="side" id="buildside">
                    <div class="cube-image text">Architecture</div>
                </div>

                <div class="side" id="limitedside">
                    <div class="cube-image text">Expos Temporaires</div>
                </div>

                <div class="side" id="gameside">
                    <div class="cube-image text">Jeu</div>
                </div>

            </div>

        </div>

        <modal-well></modal-well>
        <modal-chill></modal-chill>
        <modal-time></modal-time>
        <modal-game></modal-game>
        <modal-limited></modal-limited>
        <modal-build></modal-build>
        
    </div>
    `

  })
Vue.component('modal-build',{
    template:`
    <div class="ui basic longer modal" id="buildmodal">

        <div class="header"><h1>Architecture du musée du Louvre</h1></div>

        <div class="content">
            <h2>L’histoire du Louvre-Lens</h2>
            <p>
                Un symbole fort le 29 novembre 2004, le Premier Ministre Jean-Pierre Raffarin annonce que Lens est retenue comme site d’accueil du nouveau Louvre.
                Le choix de s’implanter sur l’ancienne fosse 9 de Lens marque la reconnaissance de la Nation tout entière pour un territoire plusieurs fois
                meurtri, tant par la guerre que par l’exploitation du charbon.
            </p>
        </div>

        <div class="image content">
            <img class="image louvre" src="assets/img/archive.jpg" alt="archive du louvre-lens">
        </div>

        <div class="content">
            <p>
                Fière de son passé minier et marquée par son histoire, Lens s’affirme comme une ville engagée dans sa reconversion.
            </p>

            <h2>Reflets et transparence</h2>

            <p>
                Les parois transparentes du hall d'accueil ouvrent sur le parc, et permettent d'admirer de l'intérieur la paroi réfléchissante de la galerie du temps.
                Celle-ci en aluminium anodisé, dont la surface a été superficiellement oxydée de manière à en améliorer le poli et à en augmenter la résistance à l'abrasion et à la corrosion.
                un point de vue incomparable pour contempler le jeu des reflets du ciel et de la végétation au gré de la lumière et des saisons.
            </p>
        </div>

        <div class="image content">
            <img class="image" src="assets/img/plan.png" alt="plan du louvre-lens">
        </div>

        <div class="content">
            <h2>simplicité délicatesse et subtilité</h2>
            <p>
                Si les formes géométriques épurées dominent l'architecture du batiments et du parc, la ligne droitestricto sensu n'a pas droit de cité.
                Chaque ligne est en réalité très légérement courbe, en adéquation avec le sol de ce terril plat légéremment surrélevé et en pente très douce.
                Ainsi les parois légérement bombées de verre ou d'aluminum accompagnent-elles le regard duu visiteur sans le heurter.
            </p>
            <h2>De la terre vers le ciel, ellipse</h2>
            <p>
                Plus encore que l'escalier sinusoïdal, l'ascenseur rappelle les tranchées ménagées dans le sol pour descendre à la mine. Fidèles à leur language
                géométrique et épuré, les architectes se sont servis du cercle, du carré et du rectangle pour matérialiser le passage du dessus au dessous,
                jouant de la perspective et de la lumière
            </p>
        </div>

        <div class="image content">
            <img class="image" src="assets/img/louvre.jpg" alt="image du louvre-lens">
        </div>

        <div class="content">
            <h2>Effets de la perspective</h2>
            <p>
                L'architecture a beau être épuré de l'extrème, elle n'est pas moins recherchée. En attestent les jeux de transparence
                et de reflets, infinis, et les innombrables perspectives mises en oeuvre à la faveur des matériaux choisis et d'un dessin aussi savant que discret.
            </p>
            <h2>La nature au coeur du Louvre-Lens: contemplation de la nature</h2>
            <p>
                La paroi vitrée de la caféteria, logée à l'intérieur du hall d'accueil, permet de contempler le parc dans tout sa variété. Le regard n'en finit pas de divaguer
                entre les motifs des dalles et des bulles de béton, alternant avec les plaages d'herbes et des bosquets, rebondissant, au loin, sur une zone boisée.
            </p>
        </div>

    </div>
    `
})
Vue.component('modal-well',{
    template:`
    <div class="ui basic longer modal" id="wellmodal">

        <div class="header"><h1>ACCUEIL</h1></div>

        <div class="scrolling content">
            <p>
                Vous êtes actuellement sur un projet réalisé en partenariat avec le Louvre Lens dans le cadre
                de notre formation "titre pro Développeur Web" réalisée à POP SCHOOL Lens !
            </p>
            <p>
                <ul>
                    <li><a href="http://cv.darkfox.fr/">Nathan DUBOURDIEU</a></li>
                    <li><a href="http://portfolio.foxhub.fr/">Logan WILQUIN</a></li>
                    <li><a href="http://cv.melinda-berquier.fr">Mélinda BERQUIER</a></li>
                </ul>
            </p>
            </br>
            <img src="assets/img/logo popschool.png" alt="logo POP SCHOOL" class="logo">
            <img src="assets/img/logo-louvre-lens.png" alt="logo musée" class="logo">
        </div>

    </div>
    `
})
Vue.component('modal-chill',{
    template:`
    <div class="ui basic longer modal" id="chillmodal">

        <div class="header"><h1>Le hall du musée</h1></div>

        <div class="content">
            <p>
                Dans le hall du Louvre-Lens nous pourrons y retrouver, l'accueil, la billetterie et informations touristique, un espace pour travailler,
                le centre de ressources composé de divers livres sur l'art ainsi que sur l'histoire du musée lors de sa création, il y dispose aussi une
                bulle immersive, sur demande, qui nous retrace l'histoire du patrimoine du bassin minier, et des details sur l'architecture du batiment,
                il y a aussi une cafétéria, où les visiteurs peuvent s'y restaurer où y prendre un café dans le coin pique nique, ainsi qu'une boutique souvenirs.
            </p>
        </div>

        <div class="image content">
            <img class="image" src="assets/img/boutique.jpg">
        </div>

        <div class="content">
            <p>
                Nous disposons également d'un accès aux coulisses du musée. Une salle ouverte sur les réserves où les oeuvres non exposées
                sont entreposées et sur les ateliers de restauration. Elle propose au public de rencontrer de manière ludique ces personnes qui travaillent en
                coulisse à la conservation des oeuvres et de l’histoire. Il est possible de visiter les réserves et ateliers de restauration sur rendez-vous.
                Dans cette même pièce nous y retrouverons les tablettes qui nous permettent d'apercevoit des oeuvres du musée sous un autre oeil.
            </p>
        </div>

        <div class="image content">
            <img class="image" src="assets/img/tablette.jpg">
        </div>

    </div>
    `
})
Vue.component('modal-limited',{
    template:`
    <div class="ui basic longer modal" id="limitedmodal">

        <div class="header"><h1>Les expositions temporaires du musée</h1></div>

        <div class="content">
            <h2>
                Actuellement : L'empire des roses
                <p class="date">jusqu'au 23 juillet 2018</p>
            </h2>
        </div>

        <div class="image content">
            <img class="image" src="assets/img/empire.jpg" alt="photo de la devanture de l'empire des roses">
        </div>

        <div class="content">
            <p>
                Le musée du Louvre-Lens présente la toute première rétrospective en Europe continentale consacrée à l’art fastueux de la dynastie des Qajars.
                Peintures, dessins, bijoux, émaux, tapis, costumes, armes d’apparat, photographies… l’exposition temporaire présente plus de 400 œuvres,
                dont une grande partie est présentée en exclusivité mondiale. 
            </p>
            <h2>
                Prochainement: Amour
                <p class="date">Du 26 septembre 2018 au 21 janvier 2019</p>
            </h2>
            <h3>Le parcours de l’exposition</h3>
            <p>
                Après un prologue posant la question de l’éternité de l’amour à travers des sculptures funéraires antiques représentant des couples
                unis jusque dans la mort, l’exposition s’ouvre sur sept chapitres thématiques.
                Seduction, Adoration, Passion, Relation, Plaisirs, Romantisme et Consentement
            </p>
        </div>
    </div>
    `
})
Vue.component('modal-time',{
    template:`
    <div class="ui basic longer modal" id="timemodal">

        <div class="header"><h1>La Galerie du Temps</h1></div>

        <div class="content">
            <h2>5000 ans d'histoire d'un seul regard</h2>
            <p>
                La Galerie du temps est une exposition constituée d'environ 205 à 207 œuvres ou ensemble d'œuvresnote 1 située dans la Grande galerie du
                Louvre-Lens, à Lens, dans le Nord-Pas-de-Calais, en France. Ouverte au public le 4 décembre 2012, à l'occasion de l'inauguration du musée,
                treize de ses œuvres ont été remplacées par quatorze autres le 4 décembre 2013.
            </p>
        </div>

        <div class="image content">
            <img class="image" src="assets/img/galerie.jpg">
        </div>

        <div class="content">
            <p>
                La pièce majeure de cette exposition est en 2013 La Liberté guidant le peuple d'Eugène Delacroix, elle est située tout au fond de la salle.
                Elle est remplacée par Œdipe et le Sphinx de Jean-Auguste-Dominique Ingres en 2014. Les œuvres sont réparties du IVe siècle av. J.-C. jusqu'à
                1850 de manière chronologique et transversale, elles proviennent de chacun des huit départements du musée du Louvre, à l'exception des
                dessins du département des Arts graphiques, qui sont montrés dans les expositions temporaires.
            </p>
            <p>
                Durant sa première année d'ouverture au public, du 4 décembre 2012 à 3 décembre 2013, l'exposition a accueilli 900 000 visiteurs. La barre
                du million est franchie le 29 janvier 2014.
            </p>
        </div>

    </div>
    `
})
Vue.component('modal-game',{
    template:`
    <div class="ui basic longer modal" id="gamemodal">

        <div class="header"><h1>Jeu</h1></div>

        <div class="content">
            <p>
                Nous vous présentons le jeux d'un autre groupe d'étudiants de POP SCHOOL, en partenariat avec le Louvre-Lens.
            </p>
        </div>

        <div class="image content">
            <img class="image" src="assets/img/">
        </div>
    </div>
    `
})
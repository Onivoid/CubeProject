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
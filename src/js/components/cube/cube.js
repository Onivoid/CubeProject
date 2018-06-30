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
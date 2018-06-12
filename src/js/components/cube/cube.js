Vue.component('cubecontainer', {
    template: `
    <div class="cubeContainer">
        <div id="wrapper">

            <div class="cube">

                <div class="side" data-toggle="modal" data-target="#modal1">
                    <div class="cube-image text">#1</div>
                </div>
                
                <div class="side">
                    <div class="cube-image text">#2</div>
                </div>

                <div class="side">
                    <div class="cube-image text">#3</div>
                </div>

                <div class="side">
                    <div class="cube-image text">#4</div>
                </div>

                <div class="side">
                    <div class="cube-image text">#5</div>
                </div>

                <div class="side">
                    <div class="cube-image text">#6</div>
                </div>

            </div>

        </div>

        <cube-modal></cube-modal>
        
    </div>
    `

  })
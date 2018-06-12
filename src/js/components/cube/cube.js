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

        <!-- Modal 1 -->
        <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>

                    <div class="modal-body">
                        
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>

                </div>

            </div>

        </div>

    </div>
    `

  })
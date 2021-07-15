// mostrar modal al hacer click 
export function mostrarModal(instancia) {
    $("img").click(function (event) {
        instancia.forEach(element => {
            const {
                img,
                comentarios,
                edad
            } = element;

            if (event.target.id === element.id) {
                document.querySelector(".modal-body").innerHTML = `<img width="100%" height="100%" src="./assets/imgs/${img}"/>
                <p class="text-light text-center my-1">${edad}</p>
                <p class="text-light text-center my-1">Comentarios</p>
                <div class="border-top border-light my-3">
                    <p class="text-light text-center mt-3 "> ${comentarios}</p>
                </div>
                `;
                $("#exampleModal").modal("show")

                $('#exampleModal').on('hidden.bs.modal', function () {
                    document.querySelector(".modal-body").innerHTML = "";
                });
            }
        });
    })
}
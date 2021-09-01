"use strict";

function getItems(id) {
    $.ajax({
        url: "/workshop/" + id,
        type: "GET",
        success: function (data) {
            const wrapper = document.createElement("div");
            wrapper.innerHTML =
                "<table class='table table-hover'>" +
                "<thead><tr>" +
                "<th scope='col'>Nama</th>" +
                "</tr></thead>" +
                "<tbody id='items'>" +
                "</td></tr>" +
                "</tbody></table>";
            swal({
                title: data.name.length + " Lemari",
                content: wrapper,
                icon: "info",
                button: "Tutup",
            });
            for (var i = 0; i < data.name.length; i++) {
                $("#items").append(
                    "<tr><th scope='row'>" + data.name[i] + "</th></tr>"
                );
            }
        },
    });
}

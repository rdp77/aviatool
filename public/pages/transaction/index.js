"use strict";

function getItems(id) {
    $.ajax({
        url: "/borrow/" + id,
        type: "GET",
        success: function (data) {
            const wrapper = document.createElement("div");
            wrapper.innerHTML =
                "<table class='table table-hover'>" +
                "<thead><tr>" +
                "<th scope='col'>Code</th>" +
                "<th scope='col'>Nama</th>" +
                "</tr></thead>" +
                "<tbody id='items'>" +
                "</td></tr>" +
                "</tbody></table>";
            swal({
                title: data.items.length + " Barang Dipinjam",
                content: wrapper,
                icon: "info",
                button: "Tutup",
            });
            for (var i = 0; i < data.items.length; i++) {
                $("#items").append(
                    "<tr><th scope='row'>" +
                        data.items[i] +
                        "</th><th scope='row'>" +
                        data.name[i] +
                        "</th></tr>"
                );
            }
        },
    });
}

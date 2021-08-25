"use strict";

$("#tables").dataTable({
    responsive: true,
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, "Semua"],
    ],
});

let modal_body =
    '<form method="GET" action="/users/name"><input type="text" class="form-control" name="name" required></form>';

$("#name").fireModal({
    body: modal_body,
    center: true,
    title: "Ganti Nama",
});

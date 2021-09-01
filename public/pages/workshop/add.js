"use strict";

function add_item() {
    var remove = $(".remove").length;
    $(".drop").append(
        '<tr class="remove remove_' +
            (remove + 1) +
            '">' +
            "<th>" +
            '<input type="text" class="form-control" name="cupboard[]" required>' +
            "</th>" +
            '<th><button type="button" class="btn btn-danger btn-block" onclick="remove_item(\'' +
            (remove + 1) +
            '\')"><i class="fas fa-trash"></i> Hapus</button></th>' +
            "</tr>"
    );
}

function remove_item(argument) {
    $(".remove_" + argument).remove();
}

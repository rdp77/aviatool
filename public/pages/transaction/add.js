"use strict";

function remove_item(argument) {
    $(".remove_" + argument).remove();
}

$("#barcode").fireModal({
    title: "Tambah Barang",
    size: "modal-l",
    body: $("#modal"),
    footerClass: "bg-whitesmoke",
    autoFocus: true,
    onFormSubmit: function (modal, e, form) {
        // Form Data
        let form_data = $(e.target).serialize();
        // DO AJAX HERE
        let fake_ajax = setTimeout(function () {
            form.stopProgress();
            $.ajax({
                data: form_data,
                url: "/check-item",
                type: "GET",
                success: function (data) {
                    if (data.status == "available") {
                        swal("Penambahan data barang berhasil", {
                            icon: "success",
                        });
                        $("[name='nomor']").val("");
                        var remove = $(".remove").length;
                        $(".drop").append(
                            '<tr class="remove remove_' +
                                (remove + 1) +
                                '">' +
                                "<th>" +
                                '<select class="form-control select2" name="items[]">' +
                                '<option value="' +
                                data.data.id +
                                '">' +
                                data.data.name +
                                "</option>" +
                                "</select>" +
                                "</th>" +
                                '<th><button type="button" class="btn btn-danger btn-block" onclick="remove_item(\'' +
                                (remove + 1) +
                                '\')"><i class="fas fa-trash"></i> Hapus</button></th>' +
                                "</tr>"
                        );
                        $(".select2").select2();
                        $("#fire-modal-2").modal("hide");
                    } else {
                        swal(
                            "Penambahan data barang gagal, dikarenakan barang tidak ada",
                            {
                                icon: "error",
                            }
                        );
                    }
                },
            });
            clearInterval(fake_ajax);
        }, 1500);

        e.preventDefault();
    },
    buttons: [
        {
            text: "Tambah",
            submit: true,
            class: "btn btn-primary btn-shadow",
            handler: function (modal) {},
        },
    ],
});

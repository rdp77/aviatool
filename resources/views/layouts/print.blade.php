<!DOCTYPE html>
<html>

<head>
</head>

<style>
    table,
    td,
    th,
    tr {
        border: 1px solid;
    }

    @media screen,
    print {
        body {
            font-size: 12pt;
        }

        .badge-info {
            color: black
        }
    }
</style>

<body>
    {!! DNS1D::getBarcodeSVG($items, 'C39E+') !!}
</body>
<script>
    window.print();
</script>

</html>
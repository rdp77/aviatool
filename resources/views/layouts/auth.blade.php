@include('layouts.components.header')

<body class="min-vh-100 background-walk-y position-relative overlay-gradient-bottom"
    data-background="{{ asset('bg.jpg') }}">
    <div id="app">
        <section class="section">
            <div class="container mt-5">
                <div class="row">
                    <div
                        class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h4>@yield('titleContent')</h4>
                            </div>

                            <div class="card-body">
                                @yield('content')
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    @include('layouts.components.footer')
    @yield('script')
</body>

</html>
@extends('layouts.default')
@section('title', __('pages.title').__(' | Cek Transaksi'))
@section('headerBack')
<div class="section-header-back">
    <a href="{{ route('home') }}" class="btn btn-icon">
        <i class="fas fa-arrow-left"></i>
    </a>
</div>
@endsection
@section('titleContent', __('Cek Transaksi'))
@section('breadcrumb', __('Menu Utama'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Dashboard') }}</div>
<div class="breadcrumb-item active">{{ __('Cek Transaksi') }}</div>
@endsection

@section('content')
<h2 class="section-title">{{ $result->code }}</h2>
<p class="section-lead">
    {{ __('ID yang digunakan untuk mengidentifikasi setiap transaksi') }}
</p>
<div class="card card-primary profile-widget">
    <div class="card-body">
        <div class="profile-widget-description">
            <div class="profile-widget-name">{{ __('Nama Peminjam') }}
                <div class="text-muted d-inline font-weight-normal">
                    <div class="slash"></div> {{ $result->student }}
                </div>
            </div>
            <div class="profile-widget-name">{{ __('Tanggal Meminjam') }}
                <div class="text-muted d-inline font-weight-normal">
                    <div class="slash"></div> {{ date('d M Y', strtotime($result->date)) }}
                </div>
            </div>
            <div class="profile-widget-name">{{ __('Nama Kelas') }}
                <div class="text-muted d-inline font-weight-normal">
                    <div class="slash"></div> {{ $result->class }}
                </div>
            </div>
            <div class="profile-widget-name">{{ __('Nama Workshop') }}
                <div class="text-muted d-inline font-weight-normal">
                    <div class="slash"></div> {{ $result->workshop }}
                </div>
            </div>
        </div>
        <textarea type="text" class="form-control " name="info" cols="150" rows="10" style="height: 77px;" disabled>
            @if ($result->info == null)
            {{ __('Tidak ada catatan') }}
            @else
            {{ $result->info }}
            @endif
        </textarea>
        <div class="mt-3 text-center">
            {!! DNS1D::getBarcodeSVG($result->code, 'C39+') !!}
        </div>
    </div>
</div>
@endsection
@extends('layouts.default')
@section('title', __('pages.title').__(' | Dashboard'))
@section('titleContent', __('Dashboard'))
@section('breadcrumb', __('Tanggal ').date('d-M-Y'))

@section('content')
@if(Session::has('status'))
<div class="alert alert-danger alert-has-icon">
    <div class="alert-icon"><i class="far fa-lightbulb"></i></div>
    <div class="alert-body">
        <div class="alert-title">{{ __('Informasi') }}</div>
        {{ Session::get('status') }}
    </div>
</div>
@endif
<div class="row">
    <div class="col">
        <div class="card card-statistic-1">
            <div class="card-icon bg-primary">
                <i class="fas fa-exchange-alt"></i>
            </div>
            <div class="card-wrap">
                <div class="card-header">
                    <h4>{{ __('Total Transaksi') }}</h4>
                </div>
                <div class="card-body">
                    {{ $transaction }}
                </div>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card card-statistic-1">
            <div class="card-icon bg-danger">
                <i class="fas fa-boxes"></i>
            </div>
            <div class="card-wrap">
                <div class="card-header">
                    <h4>{{ __('Total Barang') }}</h4>
                </div>
                <div class="card-body">
                    {{ $items }}
                </div>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card card-statistic-1">
            <div class="card-icon bg-info">
                <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <div class="card-wrap">
                <div class="card-header">
                    <h4>{{ __('Total Kelas') }}</h4>
                </div>
                <div class="card-body">
                    {{ $items }}
                </div>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card card-statistic-1">
            <div class="card-icon bg-success">
                <i class="fas fa-users"></i>
            </div>
            <div class="card-wrap">
                <div class="card-header">
                    <h4>{{ __('Total Pelajar') }}</h4>
                </div>
                <div class="card-body">
                    {{ $items }}
                </div>
            </div>
        </div>
    </div>
</div>
<div class="card">
    <form method="POST" action="{{ route('checkTransaction') }}">
        @csrf
        <div class="card-body pb-0">
            <p class="text-muted">
                {{ __('Untuk mengecek data masukkan nomor transaksi ke dalam kolom yang tersedia.') }}
            </p>
            <div class="input-group">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <input type="text" class="form-control @error('code') is-invalid @enderror" name="code"
                    placeholder="Nomor Transaksi" required autofocus>
            </div>
            @error('code')
            <span class="text-danger" role="alert">
                {{ $message }}
            </span>
            @enderror
        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-primary">{{ __('Cek') }}</button>
        </div>
    </form>
</div>
<div class="card card-hero">
    <div class="card-header">
        <div class="card-icon">
            <i class="fas fa-history"></i>
        </div>
        <h4>{{ __('History') }}</h4>
        <div class="card-description">{{ __('Transaksi secara singkat') }}
        </div>
    </div>
    <div class="card-body p-0">
        <div class="tickets-list">
            @foreach($history as $h )
            <a href="javascript:void(0)" class="ticket-item">
                <div class="ticket-title">
                    <h4>
                        @if ($h->info == 'Dipinjam')
                        {{ __('Telah meminjam ').$h->total_items.__(' barang') }}
                        @else
                        {{ __('Telah mengembalikan ').$h->total_items.__(' barang') }}
                        @endif
                    </h4>
                </div>
                <div class="ticket-info">
                    <div>{{ $h->name.__(' - ').$h->code }}</div>
                    <div class="bullet"></div>
                    <div class="text-primary">
                        {{ __('Tercatat pada tanggal ').date("d-M-Y", strtotime($h->datetime)) }}
                    </div>
                </div>
            </a>
            @endforeach
            <a href="{{ route('history.index') }}" class="ticket-item ticket-more">
                {{ __('Lihat Semua ') }} <i class="fas fa-chevron-right"></i>
            </a>
        </div>
    </div>
</div>
@endsection
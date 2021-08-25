@extends('layouts.default')
@section('title', __('pages.title').__(' | Tambah Barang'))
@section('titleContent', __('Tambah Barang'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Barang') }}</div>
<div class="breadcrumb-item active">{{ __('Tambah Barang') }}</div>
@endsection

@section('content')
<h2 class="section-title">{{ $code }}</h2>
<p class="section-lead">
    {{ __('ID yang digunakan untuk mengidentifikasi setiap barang.') }}
</p>
<div class="card">
    <form method="POST" action="{{ route('items.store') }}">
        @csrf
        <input type="hidden" value="{{ $code }}" name="code">
        <div class="card-body">
            <div class="form-group">
                <label>{{ __('Nama') }}<code>*</code></label>
                <input type="text" class="form-control @error('name') is-invalid @enderror" name="name" required
                    autofocus>
                @error('name')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
            <div class="form-group">
                <label>{{ __('Kondisi') }}<code>*</code></label>
                <select class="custom-select @error('condition') is-invalid @enderror" name="condition" required>
                    <option value="1">{{ __('Bagus') }}</option>
                    <option value="2">{{ __('Buruk') }}</option>
                </select>
                @error('condition')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
        </div>
        <div class="card-footer text-right">
            <button class="btn btn-primary mr-1" type="submit">{{ __('pages.add') }}</button>
        </div>
    </form>
</div>
@endsection
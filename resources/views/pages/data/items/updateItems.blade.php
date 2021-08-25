@extends('layouts.default')
@section('title', __('pages.title').__(' | Edit Barang'))
@section('titleContent', __('Edit Barang'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Barang') }}</div>
<div class="breadcrumb-item active">{{ __('Edit Barang') }}</div>
@endsection

@section('content')
<h2 class="section-title">{{ $items->code }}</h2>
<p class="section-lead">
    {{ __('ID yang digunakan untuk mengidentifikasi setiap barang.') }}
</p>
<div class="card">
    <form method="POST" action="{{ route('items.update',$items->id) }}">
        @csrf
        @method('PUT')
        <div class="card-body">
            <div class="form-group">
                <label>{{ __('Nama') }}<code>*</code></label>
                <input type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                    value="{{ $items->name }}" required autofocus>
                @error('name')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
            <div class="form-group">
                <label>{{ __('Kondisi') }}<code>*</code></label>
                <select class="custom-select @error('condition') is-invalid @enderror" name="condition" required>
                    <option value="1" {{ $items->condition == 'Bagus' ? 'selected' : '' }}>{{ __('Bagus') }}</option>
                    <option value="2" {{ $items->condition == 'Buruk' ? 'selected' : '' }}>{{ __('Buruk') }}</option>
                </select>
                @error('condition')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
        </div>
        <div class="card-footer text-right">
            <button class="btn btn-primary mr-1" type="submit">{{ __('pages.edit') }}</button>
        </div>
    </form>
</div>
@endsection
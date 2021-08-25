@extends('layouts.default')
@section('title', __('pages.title').__(' | Tambah Workshop'))
@section('titleContent', __('Tambah Workshop'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Workshop') }}</div>
<div class="breadcrumb-item active">{{ __('Tambah Workshop') }}</div>
@endsection

@section('content')
<div class="card">
    <form method="POST" action="{{ route('workshop.store') }}">
        @csrf
        <div class="card-body">
            <div class="form-group">
                <label>{{ __('Nama Workshop') }}<code>*</code></label>
                <input type="text" class="form-control @error('name') is-invalid @enderror"
                    style="text-transform: uppercase" name="name" required autofocus>
                @error('name')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
            <div class="form-group">
                <label>{{ __('Jumlah Lemari') }}<code>*</code></label>
                <input type="text" class="form-control @error('cupboard') is-invalid @enderror" name="cupboard"
                    required>
                @error('cupboard')
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
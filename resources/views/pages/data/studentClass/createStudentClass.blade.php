@extends('layouts.default')
@section('title', __('pages.title').__(' | Tambah Kelas'))
@section('titleContent', __('Tambah Kelas'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Kelas') }}</div>
<div class="breadcrumb-item active">{{ __('Tambah Kelas') }}</div>
@endsection

@section('content')
<div class="card">
    <form method="POST" action="{{ route('class.store') }}">
        @csrf
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
                <label>{{ __('Jumlah Maksimal Pelajar') }}<code>*</code></label>
                <input type="number" class="form-control @error('max_student') is-invalid @enderror" name="max_student"
                    required>
                @error('max_student')
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
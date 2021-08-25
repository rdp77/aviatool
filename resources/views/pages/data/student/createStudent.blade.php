@extends('layouts.default')
@section('title', __('pages.title').__(' | Tambah Pelajar'))
@section('titleContent', __('Tambah Pelajar'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Pelajar') }}</div>
<div class="breadcrumb-item active">{{ __('Tambah Pelajar') }}</div>
@endsection

@section('content')
<h2 class="section-title">{{ $code }}</h2>
<p class="section-lead">
    {{ __('ID yang digunakan untuk mengidentifikasi setiap pelajar.') }}
</p>
<form method="POST" action="{{ route('student.store') }}">
    @csrf
    <div class="card">
        <div class="card-body">
            <input type="hidden" value="{{ $code }}" name="code">
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
                <label>{{ __('Kelas') }}<code>*</code></label>
                <select class="form-control select2 @error('class') is-invalid @enderror" name="class" required>
                    @foreach ($studentClass as $s)
                    <option value="{{ $s->id }}">
                        {{ $s->name }}
                    </option>
                    @endforeach
                </select>
                @error('class')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
            <div class="card-footer text-right">
                <button class="btn btn-primary mr-1" type="submit">{{ __('pages.add') }}</button>
            </div>
        </div>
    </div>
</form>
@endsection
@extends('layouts.default')
@section('title', __('pages.title').__(' | Edit Kelas'))
@section('titleContent', __('Edit Kelas'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Kelas') }}</div>
<div class="breadcrumb-item active">{{ __('Edit Kelas') }}</div>
@endsection

@section('content')
<div class="card">
    <form method="POST" action="{{ route('class.update',$studentClass->id) }}">
        @csrf
        @method('PUT')
        <div class="card-body">
            <div class="form-group">
                <label>{{ __('Nama') }}<code>*</code></label>
                <input type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                    value="{{ $studentClass->name }}" required autofocus>
                @error('name')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
            <div class="form-group">
                <label>{{ __('Jumlah Maksimal Pelajar') }}<code>*</code></label>
                <input type="number" class="form-control @error('max_student') is-invalid @enderror" name="max_student"
                    value="{{ $studentClass->max }}" required>
                @error('max_student')
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
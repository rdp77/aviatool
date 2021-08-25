@extends('layouts.default')
@section('title', __('pages.title').__(' | Edit Pelajar'))
@section('titleContent', __('Edit Pelajar'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Pelajar') }}</div>
<div class="breadcrumb-item active">{{ __('Edit Pelajar') }}</div>
@endsection

@section('content')
<h2 class="section-title">{{ $student->code }}</h2>
<p class="section-lead">
    {{ __('ID yang digunakan untuk mengidentifikasi setiap pelajar.') }}
</p>
<div class="card">
    <form method="POST" action="{{ route('student.update',$student->id) }}">
        @csrf
        @method('PUT')
        <div class="card-body">
            <div class="form-group">
                <label>{{ __('Nama') }}<code>*</code></label>
                <input type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                    value="{{ $student->name }}" required autofocus>
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
                    <option value="{{ $s->id }}" {{ $student->c_id == $s->id ? 'selected' : '' }}>
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
        </div>
        <div class="card-footer text-right">
            <button class="btn btn-primary mr-1" type="submit">{{ __('pages.edit') }}</button>
        </div>
    </form>
</div>
@endsection
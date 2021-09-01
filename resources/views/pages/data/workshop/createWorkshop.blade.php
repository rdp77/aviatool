@extends('layouts.default')
@section('title', __('pages.title').__(' | Tambah Workshop'))
@section('titleContent', __('Tambah Workshop'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Workshop') }}</div>
<div class="breadcrumb-item active">{{ __('Tambah Workshop') }}</div>
@endsection

@section('content')
@if(Session::has('status'))
<div class="alert alert-primary alert-has-icon">
    <div class="alert-icon"><i class="far fa-lightbulb"></i></div>
    <div class="alert-body">
        <div class="alert-title">{{ __('Informasi') }}</div>
        {{ Session::get('status') }}
    </div>
</div>
@endif
<form method="POST" action="{{ route('workshop.store') }}">
    <div class="card">
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
        </div>
    </div>
    <h2 class="section-title">{{ __('Nama Lemari') }}</h2>
    <div class="card">
        <div class="card-header">
            <a class="btn btn-icon icon-left btn-primary" style="cursor: pointer;color: white" onclick="add_item()">
                <i class="far fa-edit"></i>{{ __(' Tambah Lemari') }}
            </a>
        </div>
        <div class="card-body">
            <table class="table-striped table" id="penawaran" width="100%">
                <thead>
                    <tr>
                        <th class="text-center">
                            {{ __('Lemari') }}
                        </th>
                        <th>{{ __('Aksi') }}</th>
                    </tr>
                </thead>
                <tbody class="drop"></tbody>
            </table>
        </div>
        <div class="card-footer text-right">
            <button class="btn btn-primary mr-1" type="submit">{{ __('pages.add') }}</button>
        </div>
    </div>
</form>
@endsection
@section('script')
<script src="{{ asset('pages/workshop/add.js') }}"></script>
@endsection
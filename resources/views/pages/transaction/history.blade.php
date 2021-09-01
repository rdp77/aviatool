@extends('layouts.default')
@section('title', __('pages.title').__(' | History Transaksi'))
@section('titleContent', __('History Transaksi'))
@section('breadcrumb', __('Menu Utama'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('History') }}</div>
@endsection

@section('content')
<div class="card card-primary">
    <div class="card-body">
        <table class="table-striped table" id="history" width="100%">
            <thead>
                <tr>
                    <th class="text-center">
                        {{ __('NO') }}
                    </th>
                    <th class="text-center">
                        {{ __('Kode Pelajar') }}
                    </th>
                    <th>{{ __('Tanggal') }}</th>
                    <th>{{ __('Status') }}</th>
                    <th>{{ __('Nama Pelajar') }}</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>
@endsection
@section('script')
<script src="{{ asset('pages/history.js') }}"></script>
@endsection
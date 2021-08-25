@extends('layouts.default')
@section('title', __('pages.title').__(' | Master Workshop'))
@section('titleContent', __('Workshop'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Workshop') }}</div>
@endsection

@section('content')
<div class="card">
    <div class="card-header">
        <a href="{{ route('workshop.create') }}" class="btn btn-icon icon-left btn-primary">
            <i class="far fa-edit"></i>{{ __(' Tambah Workshop') }}</a>
    </div>
    <div class="card-body">
        <table class="table-striped table" id="tables" width="100%">
            <thead>
                <tr>
                    <th class="text-center">
                        {{ __('NO') }}
                    </th>
                    <th>{{ __('Nama') }}</th>
                    <th>{{ __('Jumlah') }}</th>
                    <th>{{ __('Aksi') }}</th>
                </tr>
            </thead>
            <tbody>
                @foreach($workshop as $number => $w)
                <tr>
                    <td class="text-center">
                        {{ $number+1 }}
                    </td>
                    <td>
                        {{ __('Workshop ').$w->name }}
                    </td>
                    <td>
                        {{ count(json_decode($w->cupboard)).__(' Lemari') }}
                    </td>
                    <td>
                        <form id="del-data{{ $w->id }}" action="{{ route('workshop.destroy',$w->id) }}" method="POST"
                            class="d-inline">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger btn-action mb-1 mt-1" data-toggle="tooltip"
                                title="{{ __('pages.delItem') }}"
                                data-confirm="Apakah Anda Yakin?|Aksi ini tidak dapat dikembalikan. Apakah ingin melanjutkan?"
                                data-confirm-yes="document.getElementById('del-data{{ $w->id }}').submit();"><i
                                    class="fas fa-trash"></i></button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
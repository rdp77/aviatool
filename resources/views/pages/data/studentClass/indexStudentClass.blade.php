@extends('layouts.default')
@section('title', __('pages.title').__(' | Master Kelas'))
@section('titleContent', __('Kelas'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Kelas') }}</div>
@endsection

@section('content')
<div class="card">
    <div class="card-header">
        <a href="{{ route('class.create') }}" class="btn btn-icon icon-left btn-primary">
            <i class="far fa-edit"></i>{{ __(' Tambah Kelas') }}</a>
    </div>
    <div class="card-body">
        <table class="table-striped table" id="tables" width="100%">
            <thead>
                <tr>
                    <th class="text-center">
                        {{ __('NO') }}
                    </th>
                    <th>{{ __('Nama') }}</th>
                    <th>{{ __('Maksimal Pelajar') }}</th>
                    <th>{{ __('Aksi') }}</th>
                </tr>
            </thead>
            <tbody>
                @foreach($studentClass as $number => $sc)
                <tr>
                    <td class="text-center">
                        {{ $number+1 }}
                    </td>
                    <td>
                        {{ $sc->name }}
                    </td>
                    <td>
                        {{ $sc->max.__(' Pelajar') }}
                    </td>
                    <td>
                        <a href="{{ route('class.edit',$sc->id) }}" class="btn btn-primary btn-action mb-1 mt-1 mr-1"
                            data-toggle="tooltip" title="{{ __('pages.editItem') }}"><i
                                class="fas fa-pencil-alt"></i></a>
                        <form id="del-data{{ $sc->id }}" action="{{ route('class.destroy',$sc->id) }}" method="POST"
                            class="d-inline">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger btn-action mb-1 mt-1" data-toggle="tooltip"
                                title="{{ __('pages.delItem') }}"
                                data-confirm="Apakah Anda Yakin?|Aksi ini tidak dapat dikembalikan. Apakah ingin melanjutkan?"
                                data-confirm-yes="document.getElementById('del-data{{ $sc->id }}').submit();"><i
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
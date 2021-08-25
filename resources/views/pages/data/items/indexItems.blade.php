@extends('layouts.default')
@section('title', __('pages.title').__(' | Master Barang'))
@section('titleContent', __('Barang'))
@section('breadcrumb', __('Master'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Barang') }}</div>
@endsection

@section('content')
<div class="card">
    <div class="card-header">
        <a href="{{ route('items.create') }}" class="btn btn-icon icon-left btn-primary">
            <i class="far fa-edit"></i>{{ __(' Tambah Barang') }}</a>
    </div>
    <div class="card-body">
        <table class="table-striped table" id="tables" width="100%">
            <thead>
                <tr>
                    <th class="text-center">
                        {{ __('NO') }}
                    </th>
                    <th class="text-center">
                        {{ __('Kode') }}
                    </th>
                    <th>{{ __('Nama') }}</th>
                    <th>{{ __('Status') }}</th>
                    <th>{{ __('Kondisi') }}</th>
                    <th>{{ __('Aksi') }}</th>
                </tr>
            </thead>
            <tbody>
                @foreach($items as $number => $i)
                <tr>
                    <td class="text-center">
                        {{ $number+1 }}
                    </td>
                    <td class="text-center">
                        {{ $i->code }}
                    </td>
                    <td>
                        {{ $i->name }}
                    </td>
                    <td>
                        <span class="badge badge-info">
                            {{ $i->status }}
                        </span>
                    </td>
                    <td>
                        <span class="badge badge-info">
                            {{ $i->condition }}
                        </span>
                    </td>
                    <td>
                        <div class="btn-group">
                            <a type="button" href="{{ route('items.print',$i->id) }}" target="_blank"
                                class="btn btn-primary">{{ __('Print Barcode') }}</a>
                            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown">
                                <span class="sr-only">{{ __('Toggle Dropdown') }}</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="{{ route('items.edit',$i->id) }}">
                                    {{ __('pages.editItem') }}
                                </a>
                                <form id="del-data{{ $i->id }}" action="{{ route('items.destroy',$i->id) }}"
                                    method="POST" class="d-inline">
                                    @csrf
                                    @method('DELETE')
                                    <a class="dropdown-item" style="cursor: pointer"
                                        data-confirm="Apakah Anda Yakin?|Aksi ini tidak dapat dikembalikan. Apakah ingin melanjutkan?"
                                        data-confirm-yes="document.getElementById('del-data{{ $i->id }}').submit();">
                                        {{ __('pages.delItem') }}
                                    </a>
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
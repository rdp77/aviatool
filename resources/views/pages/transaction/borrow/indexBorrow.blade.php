@extends('layouts.default')
@section('title', __('pages.title').__(' | Transaksi'))
@section('titleContent', __('Transaksi'))
@section('breadcrumb', __('Menu Utama'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Transaksi') }}</div>
@endsection

@section('content')
<div class="card">
    <div class="card-header">
        <a href="{{ route('borrow.create') }}" class="btn btn-icon icon-left btn-primary">
            <i class="far fa-edit"></i>{{ __(' Tambah Transaksi') }}</a>
    </div>
    <div class="card-body">
        <table class="table-striped table" id="tables" width="100%">
            <thead>
                <tr>
                    <th class="text-center">
                        {{ __('NO') }}
                    </th>
                    <th>{{ __('Kode') }}</th>
                    <th>{{ __('Workshop') }}</th>
                    <th>{{ __('Kode Pelajar') }}</th>
                    <th>{{ __('Info') }}</th>
                    <th>{{ __('Aksi') }}</th>
                </tr>
            </thead>
            <tbody>
                @foreach($borrow as $number => $b)
                <tr>
                    <td class="text-center">
                        {{ $number+1 }}
                    </td>
                    <td>
                        {{ $b->relationBorrow->code }}
                    </td>
                    <td>
                        {{ __('Workshop ').$b->relationWorkshop->name }}
                    </td>
                    <td>
                        {{ $b->relationStudent->code }}
                    </td>
                    <td>
                        @if ($b->relationBorrow->info != null)
                        {{ $b->relationBorrow->info }}
                        @else
                        {{ __('Tidak ada') }}
                        @endif
                    </td>
                    <td>
                        <button onclick="getItems({{ $b->id }})" class="btn btn-primary btn-action mb-1 mt-1 mr-1"
                            data-toggle="tooltip" title="Lihat Barang"><i class="fas fa-eye"></i></button>
                        <form id="del-data{{ $b->id }}" action="{{ route('borrow.destroy',$b->id) }}" method="POST"
                            class="d-inline">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-success btn-action mb-1 mt-1" data-toggle="tooltip"
                                title="{{ __('Terima Barang') }}"
                                data-confirm="Apakah Anda yakin sudah menerima barangnya?|Aksi ini tidak dapat dikembalikan. Apakah ingin melanjutkan?"
                                data-confirm-yes="document.getElementById('del-data{{ $b->id }}').submit();"><i
                                    class="fas fa-undo"></i></button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
@section('script')
<script src="{{ asset('pages/transaction/index.js') }}"></script>
@endsection
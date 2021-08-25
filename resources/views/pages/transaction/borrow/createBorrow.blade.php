@extends('layouts.default')
@section('title', __('pages.title').__(' | Tambah Transaksi'))
@section('titleContent', __('Tambah Transaksi'))
@section('breadcrumb', __('Menu Utama'))
@section('morebreadcrumb')
<div class="breadcrumb-item active">{{ __('Transaksi') }}</div>
<div class="breadcrumb-item active">{{ __('Tambah Transaksi') }}</div>
@endsection

@section('content')
<h2 class="section-title">{{ $code }}</h2>
<p class="section-lead">
    {{ __('ID yang digunakan untuk mengidentifikasi setiap transaksi.') }}
</p>
@if(Session::has('status'))
<div class="alert alert-primary alert-has-icon">
    <div class="alert-icon"><i class="far fa-lightbulb"></i></div>
    <div class="alert-body">
        <div class="alert-title">{{ __('Informasi') }}</div>
        {{ Session::get('status') }}
    </div>
</div>
@endif
<form method="POST" action="{{ route('borrow.store') }}">
    <div class="card">
        @csrf
        <input type="hidden" value="{{ $code }}" name="code">
        <div class="card-body">
            <div class="form-group">
                <label>{{ __('Workshop') }}<code>*</code></label>
                <select class="form-control select2 @error('workshop') is-invalid @enderror" name="workshop" required>
                    @foreach ($workshop as $w)
                    <option value="{{ $w->id }}">
                        {{ $w->name }}
                    </option>
                    @endforeach
                </select>
                @error('workshop')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
            <div class="form-group">
                <label>{{ __('Pelajar') }}<code>*</code></label>
                <select class="form-control select2 @error('student') is-invalid @enderror" name="student" required>
                    @foreach ($student as $s)
                    <option value="{{ $s->id }}">
                        {{ $s->name ." - ".$s->relationClass->name }}
                    </option>
                    @endforeach
                </select>
                @error('student')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
            <div class="form-group">
                <label>{{ __('Keterangan') }}</label>
                <textarea type="text" class="form-control @error('info') is-invalid @enderror" name="info" cols="150"
                    rows="10" style="height: 77px;"></textarea>
                @error('info')
                <span class="text-danger" role="alert">
                    {{ $message }}
                </span>
                @enderror
            </div>
        </div>
    </div>
    <h2 class="section-title">{{ __('Barang') }}</h2>
    <div class="card">
        <div class="card-header">
            <a class="btn btn-icon icon-left btn-primary" style="cursor: pointer;color: white" onclick="add_item()">
                <i class="far fa-edit"></i>{{ __(' Tambah Barang') }}
            </a>
        </div>
        <div class="card-body">
            <table class="table-striped table" id="penawaran" width="100%">
                <thead>
                    <tr>
                        <th class="text-center">
                            {{ __('Barang') }}
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
<script src="{{ asset('pages/transaction/add.js') }}"></script>
<script>
    function add_item(){
        var remove = $('.remove').length;
        $('.drop').append(
            '<tr class="remove remove_'+(remove+1)+'">'+
        '<th>'+
            '<select class="form-control select2" name="items[]">'+
              @foreach ($items as $i )
              '<option value="{{ $i->id }}">{{ $i->name }}</option>'+
              @endforeach
            '</select>'+
        '</th>'+
        '<th><button type="button" class="btn btn-danger btn-block" onclick="remove_item(\''+(remove+1)+'\')"><i class="fas fa-trash"></i> Hapus</button></th>'+
      '</tr>'      
    );
    $(".select2").select2();    
}
</script>
@endsection
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            @include('candidates.form')
        </div>
    </div>
</div>
@endsection

@push('scripts')
    <script src="{{ asset('js/form.js') }}" defer></script>
@endpush

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Candidates') }}</div>
                <div class="card-body">
                    <div class="candidate-list">
                        @foreach ($candidates as $item)
                            <div class="candidate-list-item" id="candidate{{ $item->id }}">
                                {{ $item }}
                                @if($item->photo_url)
                                    <div class="candidate-list-img">
                                        <img src="{{ asset($item->photo_url) }}" alt="{{ $item->get_name() }}" title="{{ $item->get_name() }}">
                                    </div>
                                @endif
                                <p>{{ $item->get_name() }}</p>
                                <div class="dropdown">
                                    <button type="button" class="btn candidate-list-btn dropdown-toggle" id="candidateMenu{{ $item->id }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="5,5">...</button>
                                    <div class="dropdown-menu" aria-labelledby="candidateMenu{{ $item->id }}">
                                        <button class="dropdown-item candidate-remove" type="button" data-id="{{ $item->id }}">Delete</button>
                                        <button class="dropdown-item candidate-switch-state" type="button" data-id="{{ $item->id }}">Change state</button>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
    <script src="{{ asset('js/manage-cand-form.js') }}" defer></script>
@endpush

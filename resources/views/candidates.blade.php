@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Candidates</div>
                <div class="card-body">
                    @if(count($candidates))
                        <div class="candidate-list">
                            @foreach ($candidates as $item)
                                @include('candidates.single')
                            @endforeach
                        </div>
                    @else
                        <p class="mb-0">The list of candidates is empty.</p>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
    <script src="{{ mix('js/manage-cand-form.js') }}" defer></script>
@endpush

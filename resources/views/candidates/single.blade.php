<div class="candidate-list-item" id="candidate{{ $item->id }}">
    @if($item->photo_url)
        <div class="candidate-list-img">
            <img src="{{ $item->photo_url }}" alt="{{ $item->get_name() }}" title="{{ $item->get_name() }}">
        </div>
    @endif
    <div class="candidate-list-cont">
        @include('candidates.score')
        @if($item->first_name && $item->last_name)
            <p class="candidate-list-name">{{ $item->get_name() }}</p>
        @endif
        @if($item->email)
            <p class="candidate-list-email">{{ $item->email }}</p>
        @endif
        @if($item->phone)
            <p class="candidate-list-phone">{{ $item->phone }}</p>
        @endif
        <p class="candidate-list-state" id="candidate{{ $item->id }}-state">
            @include('candidates.badge')
        </p>
        <p class="candidate-list-date">Applied on <b>{{ $item->created_at }}</b></p>
        <div class="dropdown candidate-list-dropdown">
            <button type="button" class="btn candidate-list-btn dropdown-toggle" id="candidateMenu{{ $item->id }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="5,5">...</button>
            <div class="dropdown-menu" aria-labelledby="candidateMenu{{ $item->id }}">
                <button class="dropdown-item candidate-remove" type="button" data-id="{{ $item->id }}">Delete</button>
                <button class="dropdown-item" type="button" data-toggle="modal" data-target="#candidateModal{{ $item->id }}">Change state</button>
            </div>
        </div>
    </div>
    <div class="modal fade" id="candidateModal{{ $item->id }}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Change status for candidate {{ $item->get_name() }}</h5>
                    <button type="button" class="close" data-dismiss="modal" id="candidateModalClose{{ $item->id }}">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="/" method="post">
                        @foreach ($all_states as $state)
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="candidatestatus{{ $item->id }}" id="candidatestatus-{{ $loop->index }}-{{ $item->id }}" value="{{ $loop->index }}" {{ $loop->index == $item->state ? "checked" : "" }}>
                                <label class="form-check-label" for="candidatestatus-{{ $loop->index }}-{{ $item->id }}">{{ $state }}</label>
                            </div>
                        @endforeach
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary candidate-switch-state" data-id="{{ $item->id }}">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>

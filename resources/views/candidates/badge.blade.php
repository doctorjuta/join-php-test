@switch($item->state)
    @case(1)
        <span class="badge badge-info">{{ $item->get_state() }}</span>
        @break
    @case(2)
        <span class="badge badge-secondary">{{ $item->get_state() }}</span>
        @break
    @case(3)
        <span class="badge badge-success">{{ $item->get_state() }}</span>
        @break
    @default
        <span class="badge badge-primary">{{ $item->get_state() }}</span>
@endswitch

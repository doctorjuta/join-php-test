@php($score=$item->calculate_score())
@if($score > 75)
<div class="candidate-list-score candidate-list-score-100">
@elseif($score > 50 && $score <= 75)
<div class="candidate-list-score  candidate-list-score-75">
@elseif($score > 25 && $score <= 50)
<div class="candidate-list-score candidate-list-score-50">
@else
<div class="candidate-list-score candidate-list-score-25">
@endif
    <span class="candidate-list-score-bar" style="bottom: {{ $score }}%;"></span>
    <span class="candidate-list-score-val">{{ $score }}%</span>
</div>

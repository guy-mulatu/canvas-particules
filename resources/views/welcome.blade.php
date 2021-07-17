@extends('partials.default')

{{--Title--}}
@section('title')
    JS Rain
@stop

@section('content')
    <canvas id="canvas1"></canvas>
    <h1 id="title1">Umbrella!</h1>
    <section class="bg-dark">
        <div class="container">
            <div class="col-12 text-center h1 text uppercase"><a href="{{URL('basics')}}"><span class="text-warning">go to page basics</span></a></div>
        </div>
    </section>

    <script src="{{ mix('js/particule.js') }}"></script>

@endsection

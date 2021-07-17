@extends('partials.default')

{{--Title--}}
@section('title')
    JS Canvas Basics
@stop

@section('content')
    <canvas id="canvas2"></canvas>
    <section class="bg-dark">
        <div class="container">
            <div class="col-12 text-center h1"><a href="{{URL('/')}}"><span class="text-warning">go to rain</span></a></div>
        </div>
    </section>

    <script src="{{ mix('js/basics.js') }}"></script>
@endsection

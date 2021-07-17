<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>JS Rain</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/style.css') }}" />
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>
<body>
    <canvas id="canvas1"></canvas>
    <h1 id="title1">Umbrella!</h1>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@section('title') @show</title>

    <!-- Styles -->
    <!-- CSS only -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
</head>
<body>

<header>
    <nav>
        <ul>
            <li><button>Product</button></li>
            <li><button>Developer</button></li>
            <li><button>Company</button></li>
        </ul>
    </nav>
</header>

</body>
</html>

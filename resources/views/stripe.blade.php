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
            <li>
                <button>Product</button>
                <div class="menu menu-product">
                    Product Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus incidunt laboriosam natus quibusdam quidem,
                    rerum tempora. Adipisci alias commodi et facere nesciunt porro possimus praesentium quibusdam, ratione suscipit.
                </div>
            </li>
            <li>
                <button>Developer</button>
                <div class="menu menu-developer">
                    Developer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus incidunt laboriosam natus quibusdam quidem,
                    rerum tempora. Adipisci alias commodi et facere nesciunt porro possimus praesentium quibusdam, ratione suscipit.
                </div>
            </li>
            <li>
                <button>Company</button>
                <div class="menu menu-company">
                    Company Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus incidunt laboriosam natus quibusdam quidem,
                    rerum tempora. Adipisci alias commodi et facere nesciunt porro possimus praesentium quibusdam, ratione suscipit.
                </div>
            </li>
        </ul>
    </nav>
</header>

<script rel="javascript" src="{{ mix('js/stripe.js') }}"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Vue training</title>

    <!-- Styles -->
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ mix('css/style.css') }}" />


</head>
<body>

    <div id="root">
        @{{ text  }}
        <p v-for="name in names"> @{{ name }}</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        // let text = document.getElementById('root');
        // text.innerText = 'hello!';
        new Vue({
            el: '#root',
            data:{
                text: 'hello world!',
                names: ["Billy", "Balla", "Bobby"]
            }
        })
    </script>
</body>
</html>

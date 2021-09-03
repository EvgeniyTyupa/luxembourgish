<?php
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Content-Type: application/json');
    header("Access-Control-Allow-Methods: GET,POST,UPDATE,DELETE");

    $rest_json = file_get_contents("php://input", true);
    $data = json_decode($rest_json, true);

    $url = "https://secure.tutorcruncher.com/api/clients";

    // use key 'http' even if you send the request to https://...
      $options = array(
        'http' => array(
          'header'  => 'Content-type: application/x-www-form-urlencoded\r\n',
          'header' => 'Authorization: token bbf2cdd80f298e844f6344548aa1ce7199781148',
          'method'  => 'POST',
          'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    var_dump($result);
?>
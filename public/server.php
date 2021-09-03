<?php
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Content-Type: application/json');
    header("Access-Control-Allow-Methods: GET,POST,UPDATE,DELETE");

    $rest_json = file_get_contents("php://input", true);
    $data = json_decode($rest_json, true);

    $url = "https://secure.tutorcruncher.com/api/clients";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.52 Safari/537.17');

$headers = array(
   "Accept: application/json",
   "Authorization: token bbf2cdd80f298e844f6344548aa1ce7199781148",
   "Content-Type: application/json",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$send = <<<DATA
{
  "user": {
  	"first_name": "sdfd",
    "last_name": "ffhfg",
    "email": "afffff@gmail.com",
    "phone": "34234234"
  }
}
DATA;

curl_setopt($curl, CURLOPT_POSTFIELDS, $send);


$resp = curl_exec($curl);
curl_close($curl);
var_dump($resp);
?>
<?php
function fileGetAll($fa) {
  $result = "";
  foreach ($fa as $file) {
    $result .= file_get_contents($file);
  }
  return $result;
}
function minifiyCss($css) {
  // credit: http://manas.tungare.name/software/css-compression-in-php/
  return str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', str_replace(': ', ':', preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css)));
}

header("Content-type: text/css");
echo minifiyCss(fileGetAll(array(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css',
  'https://fonts.googleapis.com/css?family=Material+Icons|Roboto:300,400,500',
  'src/components/header.css',
  'src/components/fab.css',
  'src/components/button.css',
  'src/components/datatable.css',
  'src/components/card.css',
  'src/components/textfield.css',
  'src/extras/sidenav.css',
  'src/extras/footer.css',
  'src/color.css',
  'src/grid.css',
  'src/general.css'
)));

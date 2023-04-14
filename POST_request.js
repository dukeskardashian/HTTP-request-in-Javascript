const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://example.com/submit');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.response);
  } else {
    console.error(xhr.statusText);
  }
};
xhr.onerror = function() {
  console.error('Anfrage fehlgeschlagen');
};
xhr.send(JSON.stringify({ name: 'John', age: 30 }));

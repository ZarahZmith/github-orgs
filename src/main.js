let promise = fetch(
  'https://api.github.com/users/addyosmani/orgs',
  {
    method: 'GET',
    headers: {
      Authorization: 'token '
    }
  }
);

promise.then(function responseHandler(response) {
  if (response.status > 199 && response.status < 300) {
    console.log("yay, we got here!!");
    console.log(response.status);
  } else {
    console.log('Error!!!', response.status);
  }

});

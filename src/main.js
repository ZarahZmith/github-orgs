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
    response.json().then(function logUserData(userData) {
      userData.forEach(function logOrgs(organization) {
        console.log(organization.login, organization.avatar_url);
      });
    });
  } else {
    console.log('Error!!!', response.status);
  }

});

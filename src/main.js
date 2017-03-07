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
    // console.log("yay, we got here!!");
    // console.log(response.status);
    response.json().then(function logUserData(userData) {
      userData.forEach(function logOrgs(organization, index) {
        // console.log(organization.login, organization.avatar_url);
        let organizationLi = document.createElement('li');
        let orgHeading = document.createElement('h2');
        let orgAvatar = document.createElement('img');
        organizationLi.setAttribute('id', 'organization'+index);
        orgAvatar.setAttribute('src', organization.avatar_url);
        orgHeading.innerText = organization.login;
        document.querySelector('#organizations ul').appendChild(organizationLi);
        document.querySelector('#organization'+index).appendChild(orgAvatar);
        document.querySelector('#organization'+index).appendChild(orgHeading);

      });
    });
  } else {
    console.log('Error!!!', response.status);
  }

});

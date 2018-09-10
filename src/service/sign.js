import 'whatwg-fetch';

export const signIn = async (username, password) => {
  let response = await fetch(`/sign/in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  let json = await response.json();

  return json.data;
};

export const signUp = async (username, password) => {
  await fetch(`/sign/up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  return true;
};
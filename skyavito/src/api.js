import { isExpired } from "./utils";

export async function getCards(userId) {
  let url = new URL('http://127.0.0.1:8090/ads');
  if (userId) url.searchParams.append('user_id', userId);
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const cards = await response.json()
  console.log(cards)
  return cards
}

export async function getSetCard(id) {
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}`)
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const card = await response.json()
  console.log(card)
  return card
}

export async function getSetCardComments(id) {
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}/comments`)
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const cardComments = await response.json()
  console.log(cardComments)
  return cardComments
}

export async function postAuth(email, password) {
  const response = await fetch(`http://127.0.0.1:8090/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  if (!response.ok) {
    const error = await response.json()
    if (error?.detail) {
      throw new Error(error.detail)
    }
    console.log('кринж')
  }

  const user = await response.json()
  return user
}

export async function postRegist(email, password, name, city, surname) {
  const response = await fetch(`http://127.0.0.1:8090/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      city: city,
      surname: surname,

    }),
  })
  if (!response.ok) {
    const error = await response.json()
    if (error?.email) {
      throw new Error(error.email[0])
    }
    if (error?.password) {
      throw new Error(error.password[0])
    }
  }

  const user = await response.json()
  return user
}

export async function getUser() {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch('http://127.0.0.1:8090/user', {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
  })
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const user = await response.json()
  console.log(user)
  return user
}

export async function getCardsUser() {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch('http://127.0.0.1:8090/ads/me', {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
  })
  const cards = await response.json()
  console.log(cards)
  return cards
}

export async function postNewToken() {
  const refreshToken = localStorage.getItem("tokenRefresh");
  const accessToken = localStorage.getItem("token");
  sessionStorage.setItem('updated', 'true')
  return fetch("http://127.0.0.1:8090/auth/login", {
    method: "PUT",
    body: JSON.stringify({
      access_token: accessToken,
      refresh_token: refreshToken
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((token) => {
      if (token.access_token) localStorage.setItem("token", token.access_token)
      if (token.refresh_token) localStorage.setItem("tokenRefresh", token.refresh_token)
    })
}

export async function postNewAvatar(formData) {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch("http://127.0.0.1:8090/user/avatar", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  })
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const avatar = await response.json()
  console.log(avatar)
  return avatar
}

export async function postNewUserInfo(phone, name, city, surname) {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch("http://127.0.0.1:8090/user", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      phone: phone,
      name: name,
      city: city,
      surname: surname,

    }),
  })
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const avatar = await response.json()
  console.log(avatar)
  return avatar
}

export async function postNewCardComments(id, text) {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}/comments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      text: text,
    })
  })
}

export async function postNewAds(title, description, price) {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch(`http://127.0.0.1:8090/adstext`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      price: price
    })
  })
  const post = await response.json()
  return post
}

export async function postNewImgAds(formData, id) {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}/image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  })
}

export async function patchRedactAds(title, description, price, id) {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      price: price
    })
  })
  const post = await response.json()
  return post
}

export async function deleteUserAds(id) {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch(`http://127.0.0.1:8090/ads/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

}

export async function putUserPassword(passwordOne, passwordTwo) {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  const response = await fetch(`http://127.0.0.1:8090/user/password`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      password_1: passwordOne,
      password_2: passwordTwo,
    })
  })

}


export async function deleteImgAds(id, img) {
  let accessToken = localStorage.getItem("token");
  if (isExpired(accessToken)) {
    await postNewToken()
    accessToken = localStorage.getItem("token");
  }
  let url = new URL(`http://127.0.0.1:8090/ads/${id}/image`);
  if (img) url.searchParams.append('file_url', img);
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    }
  })
  const card = await response.json()
  return card
}







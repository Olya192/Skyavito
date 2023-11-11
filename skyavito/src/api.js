export async function getCards() {
  const response = await fetch('http://127.0.0.1:8090/ads')
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


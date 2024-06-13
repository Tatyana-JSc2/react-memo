export async function getList() {
  const response = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
    method: "GET",
  });

  if (response.status === 401) {
    throw new Error("Нет авторизации");
  } else if (!response.ok) {
    throw new Error("Ошибка сервера");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function postList({ time, name }) {
  const response = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  } else {
    const data = await response.json();
    return data;
  }
}

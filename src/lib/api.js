const baseUrl = 'http://127.0.0.1:8080';

export const get = async (url) => {
  const response = await fetch(`${baseUrl}${url}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }
  return response.json();
}

export const post = async (url, data) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Failed to post to ${url}`);
  }
  return response.json();
}

export const put = async (url, data) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Failed to put to ${url}`);
  }
  return response.json();
}

export const del = async (url) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete ${url}`);
  }
  return response.json();
}
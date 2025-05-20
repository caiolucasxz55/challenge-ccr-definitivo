const BASE_URL = "http://localhost:8080/usuarios";

export async function registerUsuario(nome: string, email: string) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      email,
      deleted: false 
    }),
  });

  if (!response.ok) {
    const msg = await response.text();
    throw new Error(msg || "Erro ao cadastrar usuário");
  }

  return response.json();
}

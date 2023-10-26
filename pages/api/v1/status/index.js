function status(request, response) {
  response.status(200).json({ chave: "Tudo é incrivel" });
}

export default status;

const ExitusController = async (page) => {
  const url =
    "https://menvievagas.com.br/vagas/exitusrh/&&Bauru-SP&&T&&undefined&&undefined#lista_vagas";

  await page.goto(url);

  await page.waitForSelector(".p-3 .align-self-center");

  const result = await page.$(
    "div > .p-3 .align-self-center > h3",
    (value) => value.innerText
  );

  return result;
};

export default ExitusController;

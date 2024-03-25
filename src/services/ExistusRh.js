const ExitusController = async (page) => {
  const url =
    "https://menvievagas.com.br/vagas/exitusrh/&&Bauru-SP&&T&&undefined&&undefined#lista_vagas";

  await page.goto(url);

  await page.waitForSelector(".align-self-center");

  const resultado = await page.$eval(".align-self-center h3", (element) => {
    const data = element.innerText;

    return data;
  });

  const urlVaga = await page.$eval(".align-items-center a", (element) => {
    const data = element.href;
    return data;
  });

  const cidade = await page.$eval(".mr-3 ", (element) => {
    const data = element.innerText;
    return data;
  });

  const dataResult = {
    vaga: resultado,
    local: cidade,
    url: urlVaga,
  };

  return dataResult;
};

export default ExitusController;

// .align-self-center

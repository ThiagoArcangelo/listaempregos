async function listCrowler(page) {
  const url = "https://www.bauruempregos.com.br/home/vagas";
  
  await page.goto(url);

  try {
    await page.waitForSelector("div.vaga");

    const result = await page.evaluate(() => {
      const resultArray = document.querySelectorAll("div.vaga");

      const contentData = Array.from(resultArray).map((element) => {
        if(resultArray === "" || resultArray === null || resultArray === undefined) {
          return "Opção não encontrada."
        }
        const vaga = element.querySelector(".descricao-vaga").innerText;
        const local = element.querySelector(".cidade-vaga").textContent;
        const url = element.querySelector(".descricao-vaga a");

        const data = { vaga: vaga, local: local, url: url.href };

        return data;
      });

      return contentData;
    });

    return result;

  } catch (error) {
    console.log(error);
  }
}

export default listCrowler;

// import pup from "puppeteer";

/* export default  */ async function listCrowler(page) {
  /* // async function webCrowlerVagas() {
  const browser = await pup.launch({
    // headless: false,
    // slowMo: 150,
  }); */
  // const page = await browser.newPage();

  const url = "https://www.bauruempregos.com.br/home/vagas";

  await page.goto(url);

  try {
    await page.waitForSelector("div.vaga");

    const result = await page.evaluate(() => {
      const resultArray = document.querySelectorAll("div.vaga");

      const contentData = Array.from(resultArray).map((element) => {
        const vaga = element.querySelector(".descricao-vaga").innerText;
        const local = element.querySelector(".cidade-vaga").textContent;
        const clickUrl = element.querySelector(".descricao-vaga a");

        const data = { Vaga: vaga, Local: local, Url: clickUrl.href };

        return data;
      });

      return contentData;
      a;
    });

    return result;

    await browser.close();
  } catch (error) {
    console.log(error);
  }
}

export default listCrowler;

//   webCrowlerVagas();
// }

// Exemplo acertivo no frontend
// Array.from(result).map((element) => { let data = element.querySelector('.descricao-vaga').innerText; let resultado = Object.values(data); console.log(resultado.join(" "))});

import pup from "puppeteer";

export default async function listCrowler(req, res) {
  async function webCrowlerVagas() {
    const browser = await pup.launch({
      // headless: false,
      // slowMo: 150
    });
    const page = await browser.newPage();

    const url = "https://www.bauruempregos.com.br/home/vagas";

    await page.goto(url);

    try {
      await page.waitForSelector("div.vaga");

      // const vaga = await page.$eval('.descricao-vaga > a ', (element) => element.innerText);
      // const clickUrl = await page.$eval(
      //   ".descricao-vaga > a ",
      //   (element) => element.href
      // );
      // const local = await page.$eval('.cidade-vaga', (element) => element.textContent);

      const result = await page.evaluate(() => {
        const resultArray = document.querySelectorAll("div.vaga");

        const contentData = Array.from(resultArray).map((element) => {
          const vaga = element.querySelector(".descricao-vaga").innerText;
          const local = element.querySelector(".cidade-vaga").textContent;
          const clickUrl = element.getElementsByTagName("a");

          const data = { Vaga: vaga, Local: local, Url: clickUrl };

          return data;
        });

        return contentData;
      });

      // const objLike = { Data: result, Link: clickUrl };

      // res.json(objLike);
      res.json(result);

      await browser.close();
    } catch (error) {
      console.log(error);
    }
  }

  webCrowlerVagas();
}

// Exemplo acertivo no frontend
// Array.from(result).map((element) => { let data = element.querySelector('.descricao-vaga').innerText; let resultado = Object.values(data); console.log(resultado.join(" "))});

import puppeteer from 'puppeteer';

export default async function listCrowler(req, res) {
  async function webCrowlerVagas() {
    const browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 150
    });
  const page = await browser.newPage();

  const url = "https://www.bauruempregos.com.br/home/vagas";

 await page.goto(url);

  try {

    await page.waitForSelector(".vaga ");

    // const vaga = await page.$eval('.descricao-vaga > a ', (element) => element.innerText);
    // const local = await page.$eval('.cidade-vaga', (element) => element.textContent);
    
    const result = await page.evaluate(() => {
    
      const contentArray = document.querySelectorAll('div.vaga');

      const resultArray = Array.from(contentArray).map((element) => {
          const vaga = element.querySelector('.descricao-vaga').innerText;
          const local = element.querySelector('.cidade-vaga').textContent;
          const link = element.querySelector('.descricao-vaga a');

          const data = {Vaga: vaga, Local: local , Url: link.href};
          return data;
      })

       return resultArray;

    });

    res.send(result);
  
    await browser.close();
    } 
    catch (error) {
      console.log(error) ;
    }
  }

  webCrowlerVagas(); 
}

// Exemplo acertivo no frontend
// let result = document.querySelectorAll('.descricao-vaga').innerText;
// Array.from(result).map((element) => { let data = element.querySelector('.descricao-vaga').innerText; let resultado = Object.values(data); console.log(resultado.join(" "))});


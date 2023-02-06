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

    await page.waitForSelector(".vaga > .descricao-vaga > a ");

    // const vaga = await page.$eval('.descricao-vaga > a ', (element) => element.innerText);
    // const local = await page.$eval('.cidade-vaga', (element) => element.textContent);
    
    const result = await page.evaluate(() => {
    
      const contentArray = document.querySelectorAll('div.vaga');

      Array.from(contentArray).map((element) => {
          const vaga = element.querySelector('.descricao-vaga').innerText;
          const local = element.querySelector('.cidade-vaga').textContent;

          // const data = {Vaga: vaga, Local: local};

          // const myData = Array.from(data);

          return Object.values(vaga, local);
      })

       return contentArray;

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
// Array.from(result).map((element) => { let data = element.querySelector('.descricao-vaga').innerText; let resultado = Object.values(data); console.log(resultado.join(" "))});


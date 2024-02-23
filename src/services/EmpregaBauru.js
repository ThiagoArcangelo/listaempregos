async function getData(page) {
  const url =
    "https://sites.bauru.sp.gov.br/empregabauru/vagas.aspx/time_emprego.aspx";

  await page.goto(url);

  await page.waitForSelector("#ctl00_content_gvVagas_ctl02_btnDetalhar");

  const result = await page.$$eval("a", async (value) => {
    const urlValue = await value.map((url => {
      const data = url.href;
      return data;
    }))    
    return urlValue;
  });

  const vacancies = await page.$$eval(
    // ".gvLinhaVerticalAlignMiddle",
    "td",
    (element) => {
      const resultItem = element.map((item) => {
        const results = item.innerText;
        return results;
      })
      return resultItem;
    }
  );


  const showMeResult = {
    vaga: vacancies,
    url: result,
  };

  // const dataVacanciesExists = Array.from(showMeResult);

  return showMeResult;

  /* const searchResult = page.evaluate(() => {
    const resultUrl = document.querySelector("a #ctl00_content_gvVagas_ctl02_btnDetalhar").href;
    const resultVacancies = document.querySelector(".gvLinhaVerticalAlignMiddle");
    const vacancies = Array.from(resultVacancies).map((item) => {
      const elements = item.textContent;
      return elements;
    });

    const handleJobs = {
      vaga: resultVacancies,
      url: resultUrl,
    }

    return handleJobs;
  });

  return searchResult;   */
}

export default getData;

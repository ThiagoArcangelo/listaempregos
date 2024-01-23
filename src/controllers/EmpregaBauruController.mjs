async function getData(page) {
  const url =
    "https://sites.bauru.sp.gov.br/empregabauru/vagas.aspx/time_emprego.aspx";

  await page.goto(url);

  await page.waitForSelector("#ctl00_content_gvVagas_ctl02_btnDetalhar");

  const result = await page.$eval("a", (value) => {
    const data = value.href;
    return data;
  });

  const occupation = await page.$$eval(
    ".gvLinhaVerticalAlignMiddle",
    (element) => {
      const result = element.map((item) => {
        return item.innerText;
      });
      return result;
    }
  );

  const showMeResult = {
    vaga: occupation,
    url: result,
  };

  return showMeResult;
  f;
}

export default getData;

async function getData(page) {
  const url =
    "https://sites.bauru.sp.gov.br/empregabauru/vagas.aspx/time_emprego.aspx";

  await page.goto(url);

  const result = await page.$("a > #ctl00_content_gvVagas_ctl02_btnDetalhar")
    .href;

  return result;
}

export default getData;

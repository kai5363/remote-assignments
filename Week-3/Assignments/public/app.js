const btnCalculate = document.querySelector('.btn_calculate');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');

async function getSumResult(url) {
  const response = await fetch(url);
  const jsonify = await response.json();
  return jsonify;
}

btnCalculate.addEventListener('click', async () => {
  const number = input.value;
  const url = `/data?number=${number}`;
  try {
    const { data, msg } = await getSumResult(url);
    if (!data) {
      answer.textContent = msg;
      return;
    }
    answer.textContent = `The answer is ${data}`;
  } catch (error) {
    console.log(error);
  }
});

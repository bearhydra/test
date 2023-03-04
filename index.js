const openaiEndpoint = 'https://api.openai.com/v1/chat/completions';
const openaiApiKey = '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';

function askAI() {
  const prompt = document.getElementById("inputText").value;

  fetch(openaiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openaiApiKey}`
    },
    body: JSON.stringify({
    messages: [
        {"role": "system", "content": ""},
        {"role": "user", "content": ``},
    ],
      model: 'gpt-3.5-turbo',
      stop: "\n",
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(prompt);
    console.log(data);
    const text = data.choices[0].message 
    console.log(text);
  })
  .catch(error => {
    console.error(error);
  });
}

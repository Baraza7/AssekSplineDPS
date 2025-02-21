export default async function handler(req, res) {
  const { command } = req.body;

  // Call DeepSeek API
  const deepseekResponse = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.sk-6e996e039a61427a991dcdeb3c6c0092}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: command }],
    }),
  });

  const data = await deepseekResponse.json();
  const action = data.choices[0].message.content;

  res.status(200).json({ action });
}

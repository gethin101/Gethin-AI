async function askAI(prompt) {
    const response = await fetch("https://gethin-ai-backend.vercel.app/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

const API_KEY = "YOUR_REAL_KEY_HERE";

async function askAI(prompt) {
    const response = await fetch("https://ai.hackclub.com/proxy/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "qwen/qwen3-next-80b-a3b-instruct",
            temperature: 0.3,
            max_tokens: 200,
            messages: [{ role: "user", content: prompt }]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

const chat = document.getElementById("chat");
const input = document.getElementById("input");

input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        const text = input.value;
        input.value = "";

        chat.innerHTML += `<p><b>You:</b> ${text}</p>`;

        const reply = await askAI(text);
        chat.innerHTML += `<p><b>AI:</b> ${reply}</p>`;

        chat.scrollTop = chat.scrollHeight;
    }
});

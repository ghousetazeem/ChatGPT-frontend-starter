const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-ekFi6iKDdFfY8iJKkFhuzsz7",
    apiKey: "YOUR_API_KEY",
});
const openai = new OpenAIApi(configuration);

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text);
}

callApi();


require('dotenv').config();

const { OpenAI } = require('openai')

const client = new OpenAI();

//Don't forget to add your api key on .env as OPENAI_API_KEY

async function chat(msg, obj) {

  //To add data from game, you can add this obj or not. And ofc limit the answer or make multilane answer (Actual not avaiable since you are sending only 1 resp).

    const preChatMsg = `${JSON.stringify(obj)} Then answer cannot be more than 150 characters, the question is :`

    let result;

    try{
        const chatCompletion = await client.chat.completions.create({
            messages: [{ role: 'user', content: `${preChatMsg} ${msg}` }],
            model: 'gpt-4o-mini',   //choose your model from https://platform.openai.com/docs/models
          });

        //console.log(chatCompletion);
        result = chatCompletion.choices[0].message.content
    }
    
    catch(e){
      console.log(e);
      result = 'Something gone wrong, check console logs'
    }
    
    return result;
    
}
module.exports = {chat};
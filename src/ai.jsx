import { HfInference } from '@huggingface/inference'
import axios from "axios";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const apiKey = process.env.REACT_APP_HF_TOKEN 
const HF_API_URL = "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4";
const hf = new HfInference(apiKey)


export default async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })

        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}



export const getRecipeImage = async (recipeDescription) => {
    try {
        console.log("Fetching image for:", recipeDescription);
        
        const response = await axios.post(
            HF_API_URL,
            { 
                inputs: `A high-quality, realistic image of ${recipeDescription}, plated beautifully in a restaurant setting.`
            },
            {
                headers: {
                    Authorization: `Bearer ${hf}`,
                    "Content-Type": "application/json",
                },
                responseType: "arraybuffer",
            }
        );

        const base64Image = Buffer.from(response.data, "binary").toString("base64");
        const imageUrl = `data:image/png;base64,${base64Image}`;

        console.log("Generated Image URL:", imageUrl);
        return imageUrl;

    } catch (error) {
        console.error("Error fetching recipe image:", error);
        return null;
    }
};
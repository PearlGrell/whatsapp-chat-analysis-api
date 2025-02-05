import model from "../model/model";

export default async function analyse(text: string) {
    const response = await model.generateContent(text);
    let res = response.response.text();
    res = res.replace(/`/g, '').replace('json', '');
    try {
        const parsedResponse = JSON.parse(res);
        return parsedResponse;
    } catch (e) {
        throw e;
    }
}

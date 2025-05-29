import { addCotization } from "../../lib/database";

export async function POST(request){
    const formData = await request.formData();

    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const tel = formData.get("tel");
    const active = formData.get("active");
    const message = formData.get("message");

    const results = await addCotization({values: [name, email, tel, company, message, active]});

    const json = {
        value: results.toString(),
    };



    return Response.json(json);
}
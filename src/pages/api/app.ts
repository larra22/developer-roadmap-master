import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");

    console.log(email);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return new Response("OK");

    }
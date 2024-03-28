import jsonObject from "/app/data.json" assert { type: "json" };

export async function GET(request, { params }) {
  return new Response(JSON.stringify(jsonObject));
  }
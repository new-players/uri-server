import jsonObject from "/app/data.json" assert { type: "json" };

export async function GET(request, { params }) {

  const metadata = 
    jsonObject.base_metadata

    metadata.name = metadata.name + " #" + params.id

  return new Response(JSON.stringify(metadata));
  }
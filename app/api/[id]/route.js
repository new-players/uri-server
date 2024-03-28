import { promises as fs } from 'fs'; 

export async function GET(request, { params }) {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);

  return new Response(`${data.name} ${data.description}`);


  // // we will use params to access the data passed to the dynamic route
    // return new Response(`Welcome to my Next application, user: ${params.id}`);
  }
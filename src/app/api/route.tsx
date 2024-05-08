export const dynamic = 'force-dynamic' // defaults to auto
/**
 * Sends a JSON response with a greeting message to the client.
 *
 * @param {Request} request - The incoming request object.
 * @return {Promise<Response>} A promise that resolves to a JSON response with a greeting message.
 */
export async function GET(request: Request): Promise<Response> {
  return Response.json({ message: 'Hello, Next.js!' }, {
    status: 300,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
export const dynamic = 'force-dynamic' // defaults to auto
/**
 * Handles the GET request and returns a JSON response with a 'Pong' message.
 *
 * @param {Request} request - The incoming request object.
 * @return {Promise<Response>} A Promise that resolves to a JSON response with a 'Pong' message and appropriate headers.
 */
export async function GET(request: Request) {
  return Response.json({ message: 'Pong' }, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
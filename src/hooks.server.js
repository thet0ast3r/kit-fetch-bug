
export async function handleFetch({ request, fetch }) {
	console.log('kit handling request to: ' + request.url)

	return fetch(request);
}
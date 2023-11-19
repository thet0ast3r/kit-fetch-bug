/** @type {import('./$types').PageServerLoad} */
export async function load({fetch}) {

    const res = await fetch('/products/10');
    //const restext = res.text();
    const restext = await res.text();

    return {products: restext};
};
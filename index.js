async function tempo (request, response){
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subcribersResponse = await fetch (`https://api.convertkit.com/v3/subscribers?api_secret${apisecret}`);
    const  subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    response.setHeader('cache-control', 's-maxage=10, stale-while-revalidate');
    response.json({
        date:dynamicDate.toGMTString(),
        inscritos: inscritos
    });
}
export defaut tempo;
//COMO SUBIR
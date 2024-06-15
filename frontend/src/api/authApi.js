async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }

  const baseURL = 'http://localhost:8000/api/v1'
  
  
  export async function signup(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch(`${baseURL}/accounts/signup`,payload)
    return body
  }
  
  export async function login(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch(`${baseURL}/accounts/get-token`, payload)
    return body.token
  }
  
  export async function getProperties(token) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/properties/`, payload)
    return body
  }

  export async function createProperty(token, context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify(context)
      }
    const body = await basicFetch(`${baseURL}/properties/`, payload)
    return body.result
  }

  export async function getProperty(token, id) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/properties/${id}/`, payload)
    return body.result
  }

  export async function updateProperty(token, context, id) {
    const payload = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify(context)
      }
    const body = await basicFetch(`${baseURL}/properties/${id}/`, payload)
    return body.result
  }

  export async function deleteProperty(token, id) {
    const payload = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/properties/${id}/`, payload)
    return body.result
  }

  export async function getRental(token, id) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/properties/rentals/${id}/`, payload)
    return body.result
  }

  export async function updateRental(token, context, id) {
    const payload = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify(context)
      }
    const body = await basicFetch(`${baseURL}/properties/rentals/${id}/`, payload)
    return body.result
  }

  export async function getPropertyGeo(token, id) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/properties/geo/detail/${id}/`, payload)
    return body.result
  }

  export async function updatePropertyGeo(token, context, id) {
    const payload = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify(context)
      }
    const body = await basicFetch(`${baseURL}/properties/geo/detail/${id}/`, payload)
    return body.result
  }

  export async function getGeoRequest(token, id) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/properties/geo/request/${id}/`, payload)
    return body.result
  }

  export async function getWalkscoreRequest(token, id) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/properties/walkscore/${id}/`, payload)
    return body.result
  }

  export async function getMarkets(token) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/markets/`, payload)
    return body.result
  }

  export async function createMarket(token, context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify(context)
      }
    const body = await basicFetch(`${baseURL}/markets/`, payload)
    return body.result
  }

  export async function getMarket(token, id) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/markets/${id}/`, payload)
    return body.result
  }

  export async function updateMarket(token, context, id) {
    const payload = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify(context)
      }
    const body = await basicFetch(`${baseURL}/markets/${id}/`, payload)
    return body.result
  }

  export async function deleteMarket(token, id) {
    const payload = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/markets/${id}/`, payload)
    return body.result
  }

  export async function getPopulationRequest(token, zipcode) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch(`${baseURL}/markets/population/${zipcode}/`, payload)
    return body.result
  }
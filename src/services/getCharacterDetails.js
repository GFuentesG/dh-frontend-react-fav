export const getCharacterDetails = async (id) => {
	const url = `https://rickandmortyapi.com/api/character/${id}`;

	try {
		const data = await fetch(url);
		const response = await data.json();

		if (response.error) {
			return response;
		}

		return response;
	} catch (error) {
		console.error("Fetch Error", error);
	}
}

// export const getCharacterDetails = async (id) => {
//     const url = `https://rickandmortyapi.com/api/character/${id}`;
  
//     try {
//       const response = await fetch(url);
  
//       // Si la respuesta no es exitosa, lanzamos un error
//       if (!response.ok) {
//         throw new Error(`HTTP Error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
  
//       // Verificamos si hay un error en la respuesta de la API
//       if (data.error) {
//         throw new Error(data.error);  // Lanzamos el error si existe
//       }
  
//       return data;  // Si todo está bien, devolvemos los detalles del personaje
//     } catch (error) {
//       console.error("Fetch Error:", error);
//       return null;  // Retornamos null en caso de error
//     }
//   };
export const getDataDispositivo = async () => {
    try {
        const response = await axios.get(`${url_base}/api/pc`);

        // Axios ya maneja automáticamente los códigos de estado y lanza un error en caso de un código no exitoso
        // Por lo tanto, no necesitas verificar manualmente response.ok

        // Obtén directamente los datos de la respuesta
        const data = response.data;

        // Puedes realizar más acciones con los datos aquí
        console.log(data);

        // Exportar los datos
        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error; // Puedes lanzar el error nuevamente si es necesario
    }
};
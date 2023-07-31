import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_8dKphs0W18lTFRIxlVkHb5ILtwEMbmXoQKgXYGOIwMxvPTJidJBFw8JRSAFCCT2p";

const URL = `https://api.thecatapi.com/v1/breeds`;

axios.get(URL).then(cat=>console.log(cat.data[3]))
.catch(error=>console.log(error));

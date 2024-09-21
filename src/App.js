import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendFile = async () => {
    console.log(file);

    const url = "http://localhost/wordpress/tienda/fileupload/";
    const body = new FormData();
    body.append("file", file);

    // axios
    //   .post(url, body)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));

    const res = await axios.post(url, body);

    const { data } = await res;

    console.dir(data);
  };

  return (
    <>
      <div className="container" style={{ height: "500px" }}>
        {/* <form
          target="_blank"
          action="http://localhost/wordpress/tienda/fileupload/"
          method="post"
          encType="multipart/form-data"
        > */}
        <div className="form-group">
          <label htmlFor="file" className="form-label">
            Imagen
          </label>
          <input
            onChange={handleChange}
            type="file"
            name="file"
            className="form-control"
            id="file"
          />
        </div>
        <div className="form-group">
          <button onClick={sendFile} className="btn btn-primary" type="submit">
            ENVIAR
          </button>
        </div>
        {/* </form> */}
      </div>
    </>
  );
}

export default App;

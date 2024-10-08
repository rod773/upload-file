import { useRef } from "react";
import axios from "axios";

function App() {
  const uploadImgRef = useRef();

  const handleChange = (e) => {
    sendFile(e.target.files[0]);
  };

  const sendFile = async (file) => {
    console.log(file);

    //const api = "http://localhost/wordpress/tienda/fileupload/";

    const api = "https://infodemencias.com/tienda/api-tienda/fileupload/";

    uploadImgRef.current.style.display = "block";

    uploadImgRef.current.src = URL.createObjectURL(file);

    const body = new FormData();
    body.append("file", file);

    // axios
    //   .post(url, body)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));

    const res = await axios.post(api, body);

    console.dir(res);

    const { data } = await res;

    const { url } = await data;

    if (url) window.location.href = url;
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
        <img
          ref={uploadImgRef}
          width="200"
          src="#"
          alt="upload img"
          style={{
            display: "none",
          }}
        />
        {/* <div className="form-group">
          <button className="btn btn-primary" type="submit">
            ENVIAR
          </button>
        </div> */}
        {/* </form> */}
      </div>
    </>
  );
}

export default App;

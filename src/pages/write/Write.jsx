import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://cdn.pixabay.com/photo/2018/01/29/19/42/city-3116989_960_720.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-circle-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            className="writeInput"
            autoFocus={true}
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            placeholder="Tell your story"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;

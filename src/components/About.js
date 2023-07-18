import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "grey" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="card" style={myStyle}>
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>What is TextUtils?</strong>
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                TextUtils gives you a way to analyze your text quickly and
                efficiently. Apart from counting words and characters, our
                online editor can help you to improve writing style i.e., you
                can change the text from lowercase to UPPERCASE or vise-versa,
                and, optionally, help you to Remove Extra Spaces. To check word
                count, simply place your cursor into the text box and start
                typing. You'll see the number of characters and words increase
                or decrease as you type, delete, and edit them. You can also
                copy and paste text from another program over into the online
                editor.
              </p>
              
            </div>
          </div>
        </div>
        <div className="card" style={myStyle}>
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to Use</strong>
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
            <p>
                textUtils is a <b>free</b> tool.
              </p>
              <br />
              <b> Tip : </b>Bookmark this tab for future use!
            </div>
          </div>
        </div>
    
          
        
      </div>
    </div>
  );
}

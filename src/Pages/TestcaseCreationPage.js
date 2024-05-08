import "../CSS/TestcaseCreationPage.css";

const TestcaseCreationPage = () => {
      return(
        <div>
            <h1>Testcase Creation Page</h1>
            <div id = "testcaseHeader">
                <div className="inputBox">
                    <span className="inputHeaders">Testcase Name:-</span>
                    <input className="inputTestcaseDetails"></input>
                </div>
                <div className="inputBox">
                    <span className="inputHeaders" >Description:-</span>
                    <input className="inputTestcaseDetails"></input>
                </div>
                <div className="buttonSection">
                    <button id = "Submit"> Submit Testcase</button>
                    <button id = "RecorderSimulator">Start Recording</button>
                </div>
            </div>
            <div className="stepsplayground">
                <div id = "stepsgeneration">
                    Show your steps
                </div>
                <div id="playground">
                    <iframe src="https://www.google.com/" title="HTML IFrame Syntax">
                    </iframe>
                </div>
            </div>
            <div className="footers">
                <button id="submitCase"> Close</button>
            </div>
            
        </div>
        
      ); 
}

export default TestcaseCreationPage;
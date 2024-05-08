const TestcaseRunningPage = () => {
    return (
        <div>
            <h1>Testcase Running Page</h1>
            <div id = "testcaseHeader">
                <div className="detailsBox">
                    <span className="inputHeaders">Testcase Name:-</span>
                    <label className="labelTestcaseDetails"></label>
                </div>
                <div className="detailsBox">
                    <span className="inputHeaders" >Description:-</span>
                    <label className="labelTestcaseDetails"></label>
                </div>
                <div className="buttonSection">
                    <button id = "replayTest"> Replay Testcase</button>
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

export default TestcaseRunningPage;
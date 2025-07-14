// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './dl_api.js'

function App() {

  var curUrl: string = "";

  //
  const testFunc = async () => {
    try{
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      curUrl = (tab.url as string)
      chrome.scripting.executeScript({
        target: { tabId: tab.id!},
        func: (url) => {
          alert(url);
          console.log(url);
        },
        args: [curUrl]
      });
    } catch(err) {
      alert("'Problem with current page (current tab): "+err)
      console.log("Problem with current page (current tab): "+err)
    }
  }

  return (
    <>
      <h1>YT Downloader</h1>
      <div className="card">
        <button onClick={testFunc}>
          YTDL Button!
        </button>
      </div>
      <p className="read-the-docs">
        Click on the button to grab your video!
      </p>
    </>
  )
}

export default App

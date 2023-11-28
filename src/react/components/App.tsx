const dogSrc: string =
  "https://media.tenor.com/fej4_qoxdHYAAAAM/cute-puppy.gif";

const generateDogGif = async () => {
  // Get the active tab
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const activeTab = tabs[0];
  // Send the dog Gif
  chrome.tabs.sendMessage(activeTab.id || 0, dogSrc);
};

const App = () => {
  return (
    <main>
      <h1>Youtube AIDS</h1>
      <button>Configure Options</button>
      {/* <img src={dogSrc} /> */}
      {/* <button onClick={generateDogGif}>Generate Dog Gif</button> */}
    </main>
  );
};
export default App;

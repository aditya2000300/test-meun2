// import { useEffect } from 'react';

// const ChatbotWidget = () => {
//   useEffect(() => {
//     const script1 = document.createElement('script');
//     script1.src = 'https://cdn.botpress.cloud/webchat/v2.3/inject.js';
//     document.body.appendChild(script1);

//     const script2 = document.createElement('script');
//     script2.innerHTML = `
//       window.botpressWebChat.init({
//         "botId": "YOUR_BOT_ID",
//         "host": "https://cdn.botpress.cloud/webchat/v2.3",
//         "configUrl": "https://files.bpcontent.cloud/2025/03/07/11/20250307113316-4LZOXV41.json"
//       });
//     `;
//     document.body.appendChild(script2);

//     return () => {
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//     };
//   }, []);

//   return null;
// };

// export default ChatbotWidget;





import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Create the first script for botpress webchat
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.3/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Wait for the script to load before initializing botpress
    script1.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: "YOUR_BOT_ID",
          host: "https://cdn.botpress.cloud/webchat/v2.3",
          configUrl: "https://files.bpcontent.cloud/2025/03/07/11/20250307113316-4LZOXV41.json"
        });
      } else {
        console.error("Botpress WebChat failed to load.");
      }
    };

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default BotpressChat;

document.body.innerHTML = `
    <style>
        body { 
            background-color: black; 
            color: #0f0; 
            font-family: "Courier New", monospace; 
            text-align: center; 
            overflow: hidden;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h1 { 
            font-size: 60px; 
            color: #0f0; 
            text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0, 0 0 40px #0f0; 
            animation: blink 2s linear infinite, glitch 1s infinite;
        }
        h3 { 
            font-size: 30px; 
            color: #f00; 
            text-shadow: 0 0 5px #f00, 0 0 10px #f00;
        }
        .matrix { 
            font-size: 20px; 
            color: #0f0; 
            white-space: nowrap; 
            display: inline-block; 
            animation: matrixAnim 1s linear infinite; 
        }
        .gif { 
            width: 480px; 
            margin-top: 20px; 
            animation: rotate 2s infinite linear;
            margin-bottom: 20px;
        }
        .iframe-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 480px;
            height: 269px;
            margin-top: 20px;
        }
        @keyframes blink { 
            0%, 100% { visibility: visible; } 
            25%, 75% { visibility: hidden; } 
            50% { visibility: visible; }
        }
        @keyframes glitch { 
            0% { text-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0; } 
            100% { text-shadow: 0 0 100px #0f0, 0 0 200px #0f0, 0 0 300px #0f0; } 
        }
        @keyframes matrixAnim { 
            0% { transform: scale(1); opacity: 1; } 
            50% { transform: scale(1.5); opacity: 0.5; } 
            100% { transform: scale(1); opacity: 1; } 
        }
        @keyframes rotate { 
            0% { transform: rotate(0deg); } 
            100% { transform: rotate(360deg); } 
        }
    </style>
    <div>
        <h1>Hacked by NCAteam.xyz</h1>
        <div class="matrix">nca{d3f4CeX}</div>
        <div class="iframe-container">
            <iframe src="https://giphy.com/embed/TOWeGr70V2R1K" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <h3>Warning: You are being watched!</h3>
    </div>
`;

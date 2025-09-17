// import React, { useState } from "react";
// import Hedder from "./Hedder";
// import { PROB_FAKE, PROB_NOT_FOUND } from "./config";
// import "../style.css";

// function humanFileSize(bytes) {
//   const thresh = 1024;
//   if (Math.abs(bytes) < thresh) return bytes + " B";
//   const units = ["KB","MB","GB","TB","PB","EB","ZB","YB"];
//   let u = -1;
//   do { bytes /= thresh; ++u; } while (Math.abs(bytes) >= thresh && u < units.length - 1);
//   return bytes.toFixed(1) + " " + units[u];
// }

// const DegreeVerifier = () => {
//   const [selectedFormat, setSelectedFormat] = useState("");
//   const [file, setFile] = useState(null);
//   const [status, setStatus] = useState("idle"); // idle | loading | success | error
//   const [message, setMessage] = useState("");
//   const [meta, setMeta] = useState("");

//   const handleFormatChange = (e) => {
//     setSelectedFormat(e.target.value);
//     setFile(null);
//     setStatus("idle");
//     setMessage("");
//     setMeta("");
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!file) {
//       setStatus("error");
//       setMessage("⚠️ Please select a file to upload.");
//       return;
//     }

//     setStatus("loading");
//     setMessage("⏳ Verifying degree...");
//     setMeta(`📄 File: ${file.name} • 📦 ${humanFileSize(file.size)} • 📝 ${file.type || "Unknown"}`);

//     const processingTime = 1800 + Math.floor(Math.random() * 1400);
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < PROB_FAKE) {
//         setStatus("error");
//         setMessage("❌ Fake degree detected (demo simulation).");
//       } else if (rand < PROB_FAKE + PROB_NOT_FOUND) {
//         setStatus("error");
//         setMessage("⚠️ No matching record found in database (demo simulation).");
//       } else {
//         setStatus("success");
//         setMessage("✅ Degree appears genuine (demo result).");
//       }
//     }, processingTime);
//   };

//   const reset = () => {
//     setFile(null);
//     setStatus("idle");
//     setMessage("");
//     setMeta("");
//   };

//   return (
//     <>
//     <Hedder/>
//     <div className="verify">
//     <div className="upload-section">
//       <h1>🎓 Degree Authentication Demo</h1>

//       {/* Format selection */}
//       <div>
//         <p>Select document format first:</p>
//         <select value={selectedFormat} onChange={handleFormatChange}>
//           <option value="">-- Choose Format --</option>
//           <option value="application/pdf">PDF (.pdf)</option>
//           <option value="image/jpeg">JPG (.jpg)</option>
//           <option value="image/png">PNG (.png)</option>
//           <option value="text/plain">TXT (.txt)</option>
//         </select>
//       </div>

//       {/* File upload */}
//       {selectedFormat && (
//         <form onSubmit={handleSubmit}>
//           <div className="input-wrap">
//             <input 
//               type="file" 
//               accept={selectedFormat} 
//               onChange={handleFileChange} 
//               required 
//             />
//           </div>
//           <button type="submit" disabled={status === "loading"}>Verify Degree</button>
//         </form>
//       )}

//       {/* Result area */}
//       <div 
//         id="result" 
//         className={
//           status === "success" ? "result-success" : 
//           status === "error" ? "result-error" : 
//           status === "loading" ? "result-neutral" : ""
//         }
//       >
//         {status === "loading" && <div className="loader"></div>}
//         {message && <div>{message}</div>}
//         {meta && <div className="meta">{meta}</div>}
//       </div>

//       {status !== "idle" && (
//         <button id="tryAgainBtn" onClick={reset}>🔄 Try Again</button>
//       )}
//     </div>
//     </div>
// </>
//   );
// };

// export default DegreeVerifier;




import React, { useState } from "react";
import "../style.css";
import Hedder from "./Hedder";

function App() {
  const [result, setResult] = useState("");
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!format) {
      setResult("⚠ Please select a document format.");
      return;
    }

    if (!file) {
      setResult("⚠ Please select a file to upload.");
      return;
    }

    const extension = file.name.split(".").pop().toLowerCase();

    if (extension !== format) {
      setResult(`⚠ Please upload a valid ${format.toUpperCase()} file.`);
      return;
    }

    // Loader first
    setResult('<div class="loader"></div>⏳ Verifying...');

    // Probability configuration
    const outcomeProbabilities = {
      genuine: 0.0,
      invalid: 0.0,
      nodata: 1.0,
    };

    function weightedRandom(probabilities) {
      let r = Math.random();
      let cumulative = 0;
      for (let outcome in probabilities) {
        cumulative += probabilities[outcome];
        if (r <= cumulative) return outcome;
      }
    }

    setTimeout(() => {
      const outcome = weightedRandom(outcomeProbabilities);
      const fileSizeKB = (file.size / 1024).toFixed(2);
      const fileDetails = `
        <div class="file-details">
          📄 <strong>Name:</strong> ${file.name}<br>
          💾 <strong>Size:</strong> ${fileSizeKB} KB<br>
          📂 <strong>Type:</strong> ${file.type || extension.toUpperCase()}
        </div>
      `;

      if (outcome === "genuine") {
        setResult("✅ Document is genuine" + fileDetails);
      } else if (outcome === "invalid") {
        setResult("❌ Document seems invalid" + fileDetails);
      } else {
        setResult("⚠ No matching data found" + fileDetails);
      }
    }, 2500);
  };

  return (
    <>
    <Hedder/>
    <div className="app">
      <h1>Degree/Certificate Verification</h1>
      <div className="upload-section">
        <p>Upload a degree/certificate to check if it is genuine or not:</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="docFormat">Select Document Format:</label>
          <select
            id="docFormat"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            required
          >
            <option value="">-- Select Format --</option>
            <option value="pdf">PDF</option>
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
          </select>

          <br />
          <br />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <br />
          <button type="submit">Verify Degree</button>
        </form>

        <div
          id="result"
          dangerouslySetInnerHTML={{ __html: result }}
        ></div>
      </div>
    </div>
    </>
  );
}

export default App;
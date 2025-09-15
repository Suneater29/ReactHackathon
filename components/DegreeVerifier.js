import React, { useState } from "react";
import { PROB_FAKE, PROB_NOT_FOUND } from "../config";
import "../style.css";

function humanFileSize(bytes) {
  const thresh = 1024;
  if (Math.abs(bytes) < thresh) return bytes + " B";
  const units = ["KB","MB","GB","TB","PB","EB","ZB","YB"];
  let u = -1;
  do { bytes /= thresh; ++u; } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + " " + units[u];
}

const DegreeVerifier = () => {
  const [selectedFormat, setSelectedFormat] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [meta, setMeta] = useState("");

  const handleFormatChange = (e) => {
    setSelectedFormat(e.target.value);
    setFile(null);
    setStatus("idle");
    setMessage("");
    setMeta("");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setStatus("error");
      setMessage("⚠️ Please select a file to upload.");
      return;
    }

    setStatus("loading");
    setMessage("⏳ Verifying degree...");
    setMeta(`📄 File: ${file.name} • 📦 ${humanFileSize(file.size)} • 📝 ${file.type || "Unknown"}`);

    const processingTime = 1800 + Math.floor(Math.random() * 1400);
    setTimeout(() => {
      const rand = Math.random();
      if (rand < PROB_FAKE) {
        setStatus("error");
        setMessage("❌ Fake degree detected (demo simulation).");
      } else if (rand < PROB_FAKE + PROB_NOT_FOUND) {
        setStatus("error");
        setMessage("⚠️ No matching record found in database (demo simulation).");
      } else {
        setStatus("success");
        setMessage("✅ Degree appears genuine (demo result).");
      }
    }, processingTime);
  };

  const reset = () => {
    setFile(null);
    setStatus("idle");
    setMessage("");
    setMeta("");
  };

  return (
    <div className="upload-section">
      <h1>🎓 Degree Authentication Demo</h1>

      {/* Format selection */}
      <div>
        <p>Select document format first:</p>
        <select value={selectedFormat} onChange={handleFormatChange}>
          <option value="">-- Choose Format --</option>
          <option value="application/pdf">PDF (.pdf)</option>
          <option value="image/jpeg">JPG (.jpg)</option>
          <option value="image/png">PNG (.png)</option>
          <option value="text/plain">TXT (.txt)</option>
        </select>
      </div>

      {/* File upload */}
      {selectedFormat && (
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <input 
              type="file" 
              accept={selectedFormat} 
              onChange={handleFileChange} 
              required 
            />
          </div>
          <button type="submit" disabled={status === "loading"}>Verify Degree</button>
        </form>
      )}

      {/* Result area */}
      <div 
        id="result" 
        className={
          status === "success" ? "result-success" : 
          status === "error" ? "result-error" : 
          status === "loading" ? "result-neutral" : ""
        }
      >
        {status === "loading" && <div className="loader"></div>}
        {message && <div>{message}</div>}
        {meta && <div className="meta">{meta}</div>}
      </div>

      {status !== "idle" && (
        <button id="tryAgainBtn" onClick={reset}>🔄 Try Again</button>
      )}
    </div>
  );
};

export default DegreeVerifier;

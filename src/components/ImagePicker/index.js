import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import "./styles.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SCOPES = "https://www.googleapis.com/auth/drive.file";
const DISCOVERY_URL =
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
const FOLDER_ID = "1GGOReAN0COTK_XhGGUN-BijSAsQDjeLz";

const ImagePicker = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize gapi client
  const initClient = () => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [DISCOVERY_URL],
          scope: SCOPES,
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          setIsSignedIn(authInstance.isSignedIn.get());
          authInstance.isSignedIn.listen(setIsSignedIn);
        })
        .catch((err) => {
          console.log("Failed to initialize client auth2", err);
        });
    });
  };

  useEffect(() => {
    initClient();
  }, []);

  const handleSignIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOut = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setSelectedFiles(selectedFiles);

    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(previewUrls);
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url)); // Clean up memory
    };
  }, [previewUrls]);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1]; // Extract base64 data
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadFileToDrive = async (file) => {
    const boundary = "foo_bar_baz";
    const delimiter = `\r\n--${boundary}\r\n`;
    const closeDelimiter = `\r\n--${boundary}--`;

    const metadata = {
      name: file.name,
      mimeType: file.type,
      parents: [FOLDER_ID],
    };

    const multipartRequestBody =
      delimiter +
      "Content-Type: application/json\r\n\r\n" +
      JSON.stringify(metadata) +
      delimiter +
      "Content-Type: " +
      file.type +
      "\r\n" +
      "Content-Transfer-Encoding: base64\r\n\r\n" +
      (await fileToBase64(file)) +
      closeDelimiter;

    return gapi.client.request({
      path: "/upload/drive/v3/files?uploadType=multipart",
      method: "POST",
      params: {
        uploadType: "multipart",
      },
      headers: {
        "Content-Type": `multipart/related; boundary=${boundary}`,
      },
      body: multipartRequestBody,
    });
  };

  const handleUpload = async () => {
    if (!isSignedIn) {
      alert("Please sign in to upload files.");
      return;
    }

    if (selectedFiles.length == 0) {
      alert("Please sign select at least one file to upload");
      return;
    }

    try {
      setIsLoading(true);
      for (const file of selectedFiles) {
        await uploadFileToDrive(file);
      }
      alert(`Files uploaded successfully!`);
      setPreviewUrls([]);
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error uploading file.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isSignedIn ? (
          <Button
            style={{ width: "200px" }}
            variant="contained"
            onClick={handleSignIn}
          >
            Sign in with Google
          </Button>
        ) : (
          <Button
            style={{ width: "150px" }}
            variant="contained"
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        )}

        <Typography level="h1" color="#333" fontSize={25} marginTop={2}>
          Pick Images
        </Typography>
      </div>
      <div className="image-picker">
        <input
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileChange}
        />
        <div className="image-preview">
          {previewUrls.map((url, index) => {
            const file = selectedFiles[index];

            if (file.type.startsWith("image/")) {
              return (
                <img
                  key={index}
                  src={url}
                  alt={file.name}
                  width="200"
                  style={{ margin: "10px" }}
                />
              );
            } else if (file.type.startsWith("video/")) {
              return (
                <video
                  key={index}
                  width="300"
                  controls
                  style={{ margin: "10px" }}
                >
                  <source src={url} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              );
            }

            return null;
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            disabled={isLoading}
            variant="contained"
            onClick={handleUpload}
          >
            Upload to Google Drive
            {isLoading && (
              <CircularProgress
                size={24}
                sx={{
                  color: "#333",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ImagePicker;

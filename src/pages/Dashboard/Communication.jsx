import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { DataListInput, FormInput, FormTextArea } from "../../components/styles/Access";
import { DashSearchContainer } from "../../components/styles/Dashboard";
import { GlobalButton } from "../../components/styles/Global";
import { colors } from "../../utils/colors";

const Communication = () => {
  const [via, setVia] = useState(null);
  const editorState = useRef();
  const [onEditorStateChange, setOnEditorStateChange] = useState("");

  return (
    <>
      <h4 style={{ margin: "15px 0", textAlign: "center" }}>
        Publish message form
      </h4>
      <form style={{ fontSize: 14, color: "grey" }}>
        Message type *
        <DataListInput style={{ marginBottom: 20 }} required>
          <option value="" disabled selected>
            choose type
          </option>
          <option>Lawyer</option>
          <option>Student</option>
        </DataListInput>
        Published to *
        <DataListInput style={{ marginBottom: 20 }} required>
          <option value="" disabled selected>
            select group
          </option>
          <option>All</option>
          <option>Student</option>
          <option>Lawyer</option>
        </DataListInput>
        Send via Email/SMS *
        <DataListInput
          style={{ marginBottom: 20 }}
          onChange={(e) => setVia(e.target.value)}
          required
        >
          <option value="" disabled selected>
            select via
          </option>
          {/* <option>Both</option> */}
          <option>Email</option>
          <option>SMS</option>
        </DataListInput>
        Message header *
        <FormInput
          type="email"
          required
          placeholder="enter header"
          hidden={false}
          style={{ marginBottom: 30 }}
        />
        {via === null ? null : via === "Email" ? (
          <>
          Message description
          <div
            style={{
              border: "0.5px solid rgba(0, 0, 0, 0.1)",
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Editor
              //   editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={(e) => setOnEditorStateChange(e)}
            />
          </div>
          </>
        ) : (
          <>
          Message description
          <FormTextArea
            type="text"
            rows={5}
            required
            placeholder="enter header"
            hidden={false}
            style={{ marginBottom: 30 }}
          />
          </>
        )}
        <span style={{ marginTop: 20, display: "flex" }}>
          <GlobalButton
            background={colors.primary}
            color={"white"}
            style={{
              margin: 0,
              marginRight: 20,
              borderRadius: 5,
              padding: "10px 20px",
              width: 100,
            }}
            type="submit"
            //   onClick={()=> action("REJECT")}
          >
            Clear
          </GlobalButton>
          <GlobalButton
            background={"green"}
            color={"white"}
            style={{
              margin: 0,
              borderRadius: 5,
              padding: "10px 20px",
              width: 100,
            }}
            type="submit"
            //   onClick={()=> action("APPROVE")}
          >
            Publish
          </GlobalButton>
        </span>
      </form>
    </>
  );
};

export default Communication;

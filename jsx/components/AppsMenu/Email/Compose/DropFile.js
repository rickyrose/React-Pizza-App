import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Drop from "react-dropzone-uploader";

const DropFile = () =>{
    //specify upload params and url for files
    //const getUploadParams = ({ meta }) => {
       // return (url: "https//httpbin.org/post");
    //};

    //called everytime a file status changes
    const handleChangeStatus = ({meta, file }, status) => {
        console.log(status, meta, file);
    };

    //recieve array of fiels that are done when submit button is clicked
    const handleSubmit = (files) => {
        console.log(files.map((f) => f.meta));
    };
    return(
        <Drop
        //getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        inputContent="Drop Stuff Here"
        accept="image/*,audio/*,video/*"
        styles={{
            dropzone: {
                minHeight: 200,
                maxHeight: 250,
                width: "100%",
                backgroundColor: "#f2f4fa",
                border: "1px dashed #DDFE1",
                overflow: "hidden",
            },
            inputLabel:{
                color: "7e7e7e",
                fontSize: "18px",
                fontWeight: "normal",
                backgroundColor: "#f3f4fa",
            },
        }}
        />
    );
};
export default DropFile;
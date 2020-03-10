import React from "react";
import DownloadLink from "react-download-link";


function download_link(){
    return (
        <DownloadLink
            filename="myfile.txt"
            exportFile={() => "My cached data"}
        >
            Download Resume
</DownloadLink>
    )
};

export default download_link;

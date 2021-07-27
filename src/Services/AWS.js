import * as AWS from "aws-sdk";

const configuration = {
  region: "ap-south-1",
  // secretAccessKey: localStorage.getItem("secretAccessKey"),
  // accessKeyId: localStorage.getItem("accessKeyId")
  secretAccessKey: "=+l8prD4qs3+DVwvqALZT0ntYhn83WlVH/CcypwyV",
  accessKeyId: "AKIAVXBBB54RVQLPMRPG"
};

AWS.config.update(configuration);

export default AWS;

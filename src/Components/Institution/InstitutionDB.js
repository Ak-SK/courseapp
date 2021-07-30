// import AWS from "../../Services/AWS";
import * as AWS from "aws-sdk";

const configuration = {
  region: "ap-south-1",
  // secretAccessKey: localStorage.getItem("secretAccessKey"),
  // accessKeyId: localStorage.getItem("accessKeyId")
  secretAccessKey: "j7uacGWvcCsri9w9QspywqEGSAxCHLjbyFu7HA5D",
  accessKeyId: "AKIAVXBBB54RSF2RUKC4"
};

AWS.config.update(configuration);
const docClient = new AWS.DynamoDB.DocumentClient();
const getCourses = async () => {
  var params = {
    TableName: "Courses"
  };
  let datas = null;
  await docClient.scan(params, function (err, data) {
    if (!err) {
      console.log("from dynamo", data);
      datas = data;
    } else {
      console.log(err);
    }
  });
  // console.log("docCLient", docClient);
  return datas;
};

export default getCourses;

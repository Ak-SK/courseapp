import { dbCourses } from "../../Services/firebaseCourses";

const getCourses = (courses) => {
  dbCourses
    .collection("courses")
    .where("isVerified", "==", true)
    .limit(9)
    .get()
    .then((data) => {
      let fromCache = data.metadata.fromCache;

      let list = [];
      data.forEach((doc) => {
        // console.log(doc.data());
        list.push(doc.data());
      });
      courses(list, fromCache);
    })
    .catch((e) => console.log(e));
};

export default getCourses;

// AWS DB Code:
// import AWS from "../../Services/AWS";
// const docClient = new AWS.DynamoDB.DocumentClient();

// const getCourses = async (courses) => {
// Global Secondary Indexes (GSI) allow you to query
// efficiently over any field (attribute) in your DynamoDB
// table. GSIs can treat any table attribute as a key,
// even attributes not present in all items.
// var params = {
//   TableName: "Courses"
// };
// let datas = null;
// await docClient.scan(params, function (err, data) {
//   if (!err) {
//     console.log("from dynamo", data);
//     datas = data;
//     courses(datas);
//     // return datas;
//   } else {
//     console.log(err);
//   }
// });
// console.log("docCLient", docClient);
// return datas;
// };

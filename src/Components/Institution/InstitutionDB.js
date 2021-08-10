import { dbInstitute } from "../../Services/firebaseInstitute";

const getInstitutions = (institution) => {
  // const db = firebaseInstitute.firestore();
  dbInstitute
    .collection("institutes")
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
      institution(list, fromCache);
    })
    .catch((e) => console.log(e));
};

export default getInstitutions;

// AWS DB Code:

// const docClient = new AWS.DynamoDB.DocumentClient();
// const getInstitutions = async (institution) => {
//   var params = {
//     TableName: "Institutes"
//   };
//   let datas = null;
//   await docClient.scan(params, function (err, data) {
//     if (!err) {
//       console.log("from dynamo", data);
//       datas = data;
//       institution(datas);
//     } else {
//       console.log(err);
//     }
//   });
// console.log("docCLient", docClient);
// return datas;
// };

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
const getCourses = () => {
  var params = {
    TableName: "Courses"
  };
  let datas = null;
  docClient.scan(params, function (err, data) {
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

// let courses = [
//   {
//     CIntro:
//       "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCFAC-Intro-file_example_MP4_640_3MG.mp4",
//     CIUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCFACCI.jpg",
//     CLangs: "Assamese,Bodo,Tamil",
//     CName: "FAC",
//     CouFaculties: "reaLev",
//     COview: "ovv",
//     CProgress: "40",
//     CrsId: "reaCFAC",
//     CStatus: "Yet to be published",
//     CType: "National",
//     Insuname: "reaLev",
//     MainConc: "Mc",
//     MCategory: "JEE",
//     SCategory: "JEE1",
//     SDesc: "Sdesc",
//     TNUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCFACTN.jpg"
//   },
//   {
//     CIntro:
//       "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCATT-Intro-file_example_MP4_640_3MG.mp4",
//     CIUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCATTCI.jpg",
//     CLangs: "Assamese",
//     CName: "ATTT",
//     CouFaculties: "reaLev,reaFNse",
//     COview: "ovvv",
//     CProgress: "20",
//     CrsId: "reaCATT",
//     CStatus: "Yet to be published",
//     CType: "International",
//     Insuname: "reaper",
//     MainConc: "mnb",
//     MCategory: "INTER",
//     SCategory: "2",
//     SDesc: "jh",
//     TNUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCATTTN.jpg"
//   },
//   {
//     CIntro:
//       "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCFAC-Intro-file_example_MP4_640_3MG.mp4",
//     CIUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCFACCI.jpg",
//     CLangs: "Assamese,Bodo,Tamil",
//     CName: "FAC",
//     CouFaculties: "reaLev",
//     COview: "ovv",
//     CProgress: "40",
//     CrsId: "reaCFAC",
//     CStatus: "Yet to be published",
//     CType: "National",
//     Insuname: "reaLev",
//     MainConc: "Mc",
//     MCategory: "JEE",
//     SCategory: "JEE1",
//     SDesc: "Sdesc",
//     TNUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCFACTN.jpg"
//   },
//   {
//     CIntro:
//       "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCNEW-Intro-sample-mp4-file.mp4",
//     CIUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCNEWCI.jpg",
//     CLangs: "Tamil",
//     CName: "NEW",
//     CouFaculties: "reaLev,reaAck",
//     COview: "ob",
//     CProgress: "100",
//     CrsId: "reaCNEW",
//     CStatus: "Yet to be verified",
//     CType: "National",
//     Insuname: "reaper",
//     MainConc: "mc",
//     MCategory: "JEE",
//     SCategory: "JEE1",
//     SDesc: "jn",
//     TNUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCNEWTN.jpg"
//   },
//   {
//     CIntro:
//       "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCNEW-Intro-sample-mp4-file.mp4",
//     CIUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCNEWCI.jpg",
//     CLangs: "Tamil",
//     CName: "NEWwwwwww",
//     CouFaculties: "reaLev",
//     COview: "ob",
//     CProgress: "90",
//     CrsId: "reaCNEW123",
//     CStatus: "Yet to be verified",
//     CType: "National",
//     Insuname: "reaLev",
//     MainConc: "mc",
//     MCategory: "JEE",
//     SCategory: "JEE1",
//     SDesc: "jn",
//     TNUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCNEWTN.jpg"
//   },
//   {
//     CIntro:
//       "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCTTR-Intro-file_example_MP4_640_3MG.mp4",
//     CIUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCTTRCI.jpg",
//     CLangs: "Tamil",
//     CName: "TTRY",
//     CouFaculties: "reaFKum,reaAck",
//     COview: "ov",
//     CProgress: "40",
//     CrsId: "reaCTTR",
//     CStatus: "Yet to be published",
//     CType: "International",
//     Insuname: "reaper",
//     MainConc: "mccc",
//     MCategory: "INTER",
//     SCategory: "3",
//     SDesc: "lkjh",
//     TNUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCTTRTN.jpg"
//   },
//   {
//     CIntro:
//       "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCTam-Intro-sample-mp4-file.mp4",
//     CIUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCTamCI.jpg",
//     CLangs: "Tamil",
//     CName: "Tamil",
//     CouFaculties: "reaLev,reaFKum",
//     COview: "OV",
//     CProgress: "90",
//     CrsId: "reaCTam",
//     CStatus: "Yet to be published",
//     CType: "National",
//     Insuname: "reaper",
//     MainConc: "MC",
//     MCategory: "JEE",
//     SCategory: "JEE2",
//     SDesc: "SDESC",
//     TNUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCTamTN.jpg"
//   },
//   {
//     CIntro:
//       "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCtem-Intro-sandy.mp4",
//     CIUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCtemCI.jpg",
//     CLangs: "Assamese,Bangla",
//     CName: "temp",
//     CouFaculties: "reaLev,reaAck",
//     COview: "ovvv",
//     CProgress: "90",
//     CrsId: "reaCtem",
//     CStatus: "Yet to be published",
//     CType: "National",
//     Insuname: "reaper",
//     MainConc: "concepts of ",
//     MCategory: "JEE",
//     SCategory: "JEE1",
//     SDesc: "blackkkk",
//     TNUrl: "https://secure--storage.s3.ap-south-1.amazonaws.com/reaCtemTN.jpg"
//   }
// ];

// export default courses;

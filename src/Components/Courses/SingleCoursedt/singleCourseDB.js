import { db } from "../../../Services/firebase";

const getCourse = (course, courseId, subcategoryId) => {
  // console.log(subcategoryId.trim());
  subcategoryId = subcategoryId.trim();
  db.collection("subCategories")
    .doc(subcategoryId)
    .collection("courses")
    .doc(courseId)
    .get()
    .then((doc) => course(doc.data()))
    .catch((e) => console.log(e));
};

// use promise resolve
const getSections = (sections, sectionIds) => {
  // console.log("sectionIds", sectionIds);
  let list = [];
  let listPromises = [];
  sectionIds.forEach((id) => {
    listPromises.push(db.collection("sections").doc(id.trim()).get());
  });
  // console.log("list", list);
  Promise.all(listPromises)
    .then((value) => {
      value.forEach((val) => {
        // console.log("promiseAll", val.data());
        list.push(val.data());
      });
      return list;
    })
    .then((data) => {
      // console.log("2nd then", data);
      sections(data);
    })
    .catch((e) => console.log(e));
};

const getReviews = (reviews, subcategoryId, courseId) => {
  courseId = courseId.trim();
  subcategoryId = subcategoryId.trim();
  let list = [];
  db.collection("subCategories")
    .doc(subcategoryId)
    .collection("courses")
    .doc(courseId)
    .collection("reviews")
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        doc.data().reviews.forEach((review) => {
          list.push(review);
        });
      });
    })
    .catch((e) => console.log(e))
    .finally(() => {
      console.log("listReviews", list);
      reviews(list);
    });
};

export { getCourse, getSections, getReviews };

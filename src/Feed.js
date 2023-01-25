import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const usersCollectionRef = collection(db, "posts");

  // usersCollectionRef.onSnapshot((snapshot) =>
  //   setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
  // );

  //     const snapshots = await getDocs(usersCollectionRef);

  //     const docs = snapshots.docs.map((doc) => {
  //       const data = doc.data();
  //       data.id = doc.id;
  //       return data;
  //     });
  //     setPosts(docs);
  //     console.log("posts", docs);
  //   })();
  //   // console.log(docs);
  // }, []);

  const fetchPost = async () => {
    await getDocs(collection(db, "posts")).then((querySnapshot) => {
      const newData = QuerySnapshot.docs.data.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(newData);
      console.log(posts, newData);
    });
  };

  useEffect(() => {
    fetchPost();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts?.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
      {/* <Post
        profilePic={
          "https://igimages.gumlet.io/tamil/home/dhruvvikram-26112021.jpg?dpr=1.0&q=70&w=900"
        }
        message="Coolll....."
        timestamp="This is a timestamp"
        username="Mr.Maxpain"
        image="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?cs=srgb&dl=pexels-yurii-hlei-1545743.jpg&fm=jpg"
      />
      <Post
        profilePic={
          "https://igimages.gumlet.io/tamil/home/dhruvvikram-26112021.jpg?dpr=1.0&q=70&w=900"
        }
        message="Coolll....."
        timestamp="This is a timestamp"
        username="Mr.Maxpain"
      />
      <Post /> */}
    </div>
  );
}

export default Feed;

import React, { useState } from "react";

const MyProfile = () => {
  const profileData = {
    name: "Sai Pavan Saketh",
    username: "@saketh333",
    profileImage:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    personalInfo: {
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, earum placeat. Accusciunt vel deleniti sit, perspiciatis necessitatibus praesentium voluptates velit dolorem minima?",
      mobile: "9731990672",
      email: "akhilsv@gmail.com",
      country: "India",
      linkedin: "India",
      skills: ["Html", "Css", "Python", "Reactjs", "Nodejs"],
      languages: ["Kannada"],
    },
    menuItems: [
      { id: "Personal", text: "Personal Information", icon: "/src/assets/bell.svg" },
      {
        id: "Education",
        text: "Education and Experience",
        icon: "/src/assets/bell.svg",
      },
      { id: "Blogs", text: "Blogs", icon: "/src/assets/bell.svg" },
      { id: "Teammates", text: "Teammates", icon: "/src/assets/bell.svg" },
      { id: "Posts", text: "Posts", icon: "/src/assets/bell.svg" },
    ],
    blogs: [
      {
        title: "Blogs 1",
        subtitle: "Introduction to front-end",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam optio animi debitis tenetur pariatur quo deleniti architecto consequuntur molestiae ipsum",
        image: "https://miro.medium.com/max/820/1*Y4Td-XMRtuFAW_8CpO7KyA.png",
      },
    ],
    teammates: [
      {
        name: "Alan Biju",
        role: "Full Stack Developer at Techsnap",
        image:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    ],
    posts: [
      {
        author: "Alan Biju",
        role: "TechSnap DevOps",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit minima dolorem deleniti consequatur quas, alias quis. Quam quo harum inventore, hic rerum ab. Laudantium numquam inventore iste provident labore!",
        image: "/src/assets/banner.png",
        tags: ["React Js"],
        postedDate: "posted 3 Jan",
      },
    ],
    education: [
      {
        institution: "Sri Aurobindo Institute of Technology",
        degree: "B.Tech in Computer Science",
        year: "2024",
      },
      {
        institution: "XYZ High School",
        degree: "High School Diploma",
        year: "2020",
      },
    ],
  };

  const {
    name,
    username,
    profileImage,
    personalInfo,
    menuItems,
    blogs,
    teammates,
    posts,
    education,
  } = profileData;

  const [activeTab, setActiveTab] = useState("Personal");

  const renderMenuItems = () =>
    menuItems.map((item) => (
      <li
        key={item.id}
        className={`slideProfileLinks cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100 ${activeTab === item.id ? "bg-gray-100" : ""
          }`}
        onClick={() => setActiveTab(item.id)}
      >
        <span>
          <img src={item.icon} alt="icon" className="w-4 h-4 mr-2" />
        </span>
        {item.text}
      </li>
    ));

  return (
    <div className="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <div className="my_profile_bar flex items-center bg-white rounded-md shadow-md p-4">
        <div className="my_profile_dp w-24 h-24 overflow-hidden">
          <img
            src={profileImage}
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="my_profile_name ml-4">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-500">{username}</p>
        </div>
      </div>
      <div className="white_ban bg-white overflow-hidden font-bold mt-4 border-b border-black shadow-md">
        <div className="tabs_wrap sticky top-0">
          <li
            className="mobile_view min-[900px]:hidden cursor-pointer flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-md"
            onClick={() => setActiveTab("Posts")}
          >
            <h1 className="text-lg font-semibold">Posts</h1>
            <span className="text-xl font-bold">^</span>
          </li>
          <ul className="flex justify-evenly max-[900px]:flex-col">
            {renderMenuItems()}
          </ul>
        </div>
      </div>
      <div
        className="slideProfileContent"
        id="Personal"
        style={{ display: activeTab === "Personal" ? "block" : "none" }}
      >
        <div className="my_profile_content_holder p-6">
          <div className="card_heading mb-4">
            <h1 className="text-2xl font-bold">Profile Information</h1>
          </div>
          <div className="form_details big_answer mb-6">
            <h1 className="answer text-gray-700">{personalInfo.description}</h1>
          </div>
          {Object.entries(personalInfo).map(
            ([key, value]) =>
              key !== "description" && (
                <div className="form_details flex mb-4" key={key}>
                  <h1 className="question text-gray-700 font-semibold mr-4">
                    {key.charAt(0).toUpperCase() + key.slice(1)} :
                  </h1>
                  <h1 className="answer text-gray-800">
                    {Array.isArray(value) ? value.join(" ") : value}
                  </h1>
                </div>
              )
          )}
        </div>
      </div>
      <div
        className="slideProfileContent"
        id="Education"
        style={{ display: activeTab === "Education" ? "block" : "none" }}
      >
        <div className="my_profile_education_section p-6">
          <h1 className="text-2xl font-bold mb-4">Education and Experience</h1>
          {education.map((edu, index) => (
            <div key={index} className="education_item mb-4">
              <h2 className="text-xl font-semibold">{edu.institution}</h2>
              <p className="text-lg">{edu.degree}</p>
              <p className="text-gray-600">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="slideProfileContent"
        id="Blogs"
        style={{ display: activeTab === "Blogs" ? "block" : "none" }}
      >
        <div className="my_profile_blogs_section p-6">
          <div className="blogs_card_holder grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="blogs_card bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="blog_image">
                  <img
                    src={blog.image}
                    alt="blogs"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold mb-2">{blog.title}</h1>
                  <h2 className="text-lg mb-2">{blog.subtitle}</h2>
                  <p className="text-gray-700 mb-4">{blog.description}</p>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg">
                    View Blog
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="slideProfileContent flex-col px-4"
        id="Teammates"
        style={{ display: activeTab === "Teammates" ? "block" : "none" }}
      >
        <div className="card_heading my-8">
          <h1 className="text-2xl font-semibold">Project Manager</h1>
        </div>
        <div className="teammate_cards_holder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teammates.map((teammate, index) => (
            <div
              key={index}
              className="my_profile_teammate_card bg-white rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden text-center h-[280px] flex flex-col justify-center items-center"
            >
              <div className="teammate_dp">
                <img
                  src={teammate.image}
                  alt="teammate"
                  className="w-[110px] rounded-full h-[110px] object-cover"
                />
              </div>
              <div className="teammate_details p-4">
                <h1 className="text-lg font-semibold mb-1">{teammate.name}</h1>
                <p className="text-gray-600">{teammate.role}</p>
              </div>
              <h6 className="border border-[#e51db0] text-[#e51db0] transition-all duration-800 ease-in-out hover:text-white hover:bg-[#e51db0] py-2 px-8 rounded-full text-center cursor-pointer">
                View Profile
              </h6>
            </div>
          ))}
        </div>
        <div className="card_heading mt-12 my-8">
          <h1 className="text-2xl font-semibold">Teammates</h1>
        </div>
        <div className="teammate_cards_holder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teammates.map((teammate, index) => (
            <div
              key={index}
              className="my_profile_teammate_card bg-white rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden text-center h-[280px] flex flex-col justify-center items-center"
            >
              <div className="teammate_dp">
                <img
                  src={teammate.image}
                  alt="teammate"
                  className="w-[110px] rounded-full h-[110px] object-cover"
                />
              </div>
              <div className="teammate_details p-4">
                <h1 className="text-lg font-semibold mb-1">{teammate.name}</h1>
                <p className="text-gray-600">{teammate.role}</p>
              </div>
              <h6 className="border border-[#e51db0] text-[#e51db0] transition-all duration-800 ease-in-out hover:text-white hover:bg-[#e51db0] py-2 px-8 rounded-full text-center cursor-pointer">
                View Profile
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div
        className="slideProfileContent"
        id="Posts"
        style={{ display: activeTab === "Posts" ? "block" : "none" }}
      >
        <div className="my_profile_posts_section p-6">
          <div className="profile_post_cards grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="profile_post_card bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="post_image w-full h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt="post"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold mb-2">{post.author}</h1>
                  <h2 className="text-lg mb-2">{post.role}</h2>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  <div className="tags flex flex-wrap mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="tag bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="post_date text-gray-500 text-sm">
                    {post.postedDate}
                  </div>
                  <div className="post_icons flex justify-end p-4">
                    <img
                      src="https://img.icons8.com/ios/50/000000/like--v1.png"
                      className="w-6 h-6 mr-4 cursor-pointer"
                      alt="like"
                    />
                    <img
                      src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png"
                      className="w-6 h-6 cursor-pointer"
                      alt="comment"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

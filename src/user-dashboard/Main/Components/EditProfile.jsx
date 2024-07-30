import React, { useState } from 'react';
// import './EditProfile.css'; Import your CSS file here

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Profile saved successfully!');
  };

  return (
    <div className="max-w-holder w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
      <form className="editProfile" id="edit_profile" onSubmit={handleSubmit}>
        {/* Edit profile Header */}
        <div className="editProfileHeader flex w-[60%] max-[900px]:w-[90%] my-12 mx-auto justify-between items-center">
          <div className="editProfileHeaderTabs flex flex-col justify-center items-center">
            <div
              className={`tablinks w-16 h-16 rounded-full flex items-center justify-center font-medium cursor-pointer transition duration-500 ease-in-out ${activeTab === 'tab1' ? 'active bg-black text-white' : ''}`}
              onClick={() => handleTabClick('tab1')}
            >
              1
            </div>
            <p className="text-sm font-medium">Personal Info</p>
          </div>
          <div className="editProfileHeaderTabs flex flex-col justify-center items-center">
            <div
              className={`tablinks w-16 h-16 rounded-full flex items-center justify-center font-medium cursor-pointer transition duration-500 ease-in-out ${activeTab === 'tab2' ? 'active bg-black text-white' : ''}`}
              onClick={() => handleTabClick('tab2')}
            >
              2
            </div>
            <p className="text-sm font-medium">Educational Info</p>
          </div>
          <div className="editProfileHeaderTabs flex flex-col justify-center items-center">
            <div
              className={`tablinks w-16 h-16 rounded-full flex items-center justify-center font-medium cursor-pointer transition duration-500 ease-in-out ${activeTab === 'tab3' ? 'active bg-black text-white' : ''}`}
              onClick={() => handleTabClick('tab3')}
            >
              3
            </div>
            <p className="text-sm font-medium">Professional Info</p>
          </div>
        </div>

        {/* Personal Info Tab */}
        {activeTab === 'tab1' && (
          <div className="editProfiletabcontent w-[80%] max-[900px]:w-full mx-auto flex flex-col bg-white" id="tab1">
            <div className="editProfileForm w-full px-8 py-6">
              <div className="upper__section flex max-[900px]:flex-col max-[900px]:items-center">
                <div className="Profile_edit w-[250px] flex flex-col items-center min-[900px]:mr-8">
                  <label htmlFor="profile" className="mb-2">
                    <img src="/src/assets/profile.png" alt="" className="profile_image w-32 h-32 rounded-full object-cover" onError={(e) => e.currentTarget.src = 'assets/profile.png'} />
                  </label>
                  <input type="file" name="profile" id="profile" className="hidden" />
                  <div className="button_zone flex mt-2 flex-col">
                    <label id="upload" htmlFor="profile" className="mb-3 bg-black rounded-lg text-white font-semibold py-2 px-4 rounded mr-2 cursor-pointer">Upload Image</label>
                    <label id="remove" className="bg-gray-200 rounded-lg font-semibold py-2 px-4 rounded cursor-pointer">Remove Image</label>
                  </div>
                </div>
                <div className="details_edit flex flex-col flex-1 max-[900px]:w-full">
                  <div className="details_edit_zone display flex max-[900px]:flex-col">
                    <div className="form__group field mr-4 max-[900px]:w-full w-1/2">
                      <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Display Name" name="displayName" id="displayName" />
                    </div>
                    <div className="form__group field max-[900px]:w-full w-1/2">
                      <select name="gender" id="gender" className="form_field my-4 border-b border-black p-3 w-full">
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="details_edit_zone flex mt-4 max-[900px]:flex-col">
                    <div className="form__group field mr-4 max-[900px]:w-full w-1/2">
                      <input type="email" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Email" name="email" id="email" />
                    </div>
                    <div className="form__group field max-[900px]:w-full w-1/2">
                      <input type="tel" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Phone Number" name="phoneNumber" id="phoneNumber" />
                    </div>
                  </div>
                  <div className="details_edit_zone flex mt-4 max-[900px]:flex-col">
                    <div className="form__group field mr-4 max-[900px]:w-full w-1/3">
                      <select name="country" id="country" className="form_field my-4 border-b border-black p-3 w-full">
                        <option value="" disabled selected hidden>Select Country</option>
                        <option value="India">India</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form__group field mr-4 max-[900px]:w-full w-1/3">
                      <select name="state" id="state" className="form_field my-4 border-b border-black p-3 w-full">
                        <option value="" disabled selected hidden>Select State</option>
                        <option value="State1">State1</option>
                        <option value="State2">State2</option>
                      </select>
                    </div>
                    <div className="form__group field max-[900px]:w-full w-1/3">
                      <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="City" name="city" id="city" />
                    </div>
                  </div>
                  <div className="form__bio mt-4">
                    <label htmlFor="bio" className="text-gray-700 font-semibold mb-1">Bio</label>
                    <input type="text" name="bio" id="bio" className="p-3 border border-gray-300 rounded w-full" />
                  </div>
                </div>
              </div>
              <div className="lower__section mt-4">
                <div className="details_edit flex max-[900px]:flex-col">
                  <div className="form__group field mr-4 max-[900px]:w-full w-1/2">
                    <input type="url" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Your LinkedIn URL" name="linkedinURL" id="linkedinURL" />
                  </div>
                  <div className="form__group field max-[900px]:w-full w-1/2">
                    <input type="url" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Your GitHub URL" name="githubURL" id="githubURL" />
                  </div>
                </div>
                <div className="details_edit flex mt-4 max-[900px]:flex-col">
                  <div className="add_tags mr-4 max-[900px]:w-full w-1/2">
                    <div className="tag-disp" id="skillsTags"></div>
                    <textarea className="form-textinput p-3 border-b border-black w-full" id="skills" placeholder="Skills"></textarea>
                  </div>
                  <div className="add_tags max-[900px]:w-full w-1/2">
                    <div className="tag-disp" id="spokenLanguagesTags"></div>
                    <textarea className="form-textinput p-3 border-b border-black w-full" id="spokenLanguages" placeholder="Languages"></textarea>
                  </div>
                </div>
                <div className="details_edit flex mt-4 max-[900px]:flex-col">
                  <div className="form__group field mr-4 max-[900px]:w-full w-1/2">
                    <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Your Facebook URL" name="facebookURL" id="facebookURL" />
                  </div>
                  <div className="form__group field max-[900px]:w-full w-1/2">
                    <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Your Twitter URL" name="twitterURL" id="twitterURL" />
                  </div>
                </div>
              </div>
              <div className="nav_buttons_container flex justify-end text-center mt-4 px-8 pb-8">
                <div className="nav_buttons_box">
                  <div className="bg-black text-white font-semibold py-2 px-4 rounded cursor-pointer" onClick={() => handleTabClick('tab2')}>Next</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Educational Info Tab */}
        {activeTab === 'tab2' && (
          <div className="editProfiletabcontent w-[80%] max-[900px]:w-full mx-auto flex flex-col bg-white" id="tab2">
            <div className="editProfiletabcontentTwo w-full px-8 py-6">
              {/* Educational Info Form Fields */}
              <div className="details_edit flex max-[900px]:flex-col">
                <div className="form__group field mr-4 max-[900px]:w-full w-1/2">
                  <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Highest Degree" name="highestDegree" id="highestDegree" />
                </div>
                <div className="form__group field max-[900px]:w-full w-1/2">
                  <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="University/College" name="university" id="university" />
                </div>
              </div>
              <div className="details_edit flex mt-4 max-[900px]:flex-col">
                <div className="form__group field mr-4 max-[900px]:w-full w-1/2">
                  <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Year of Graduation" name="graduationYear" id="graduationYear" />
                </div>
                <div className="form__group field max-[900px]:w-full w-1/2">
                  <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Major" name="major" id="major" />
                </div>
              </div>
              <div className="nav_buttons_container flex justify-end text-center mt-4 px-8 pb-8">
                <div className="nav_buttons_box flex">
                  <div className="bg-black text-white font-semibold py-2 px-4 rounded cursor-pointer" onClick={() => handleTabClick('tab1')}>Previous</div>
                  <div className="bg-black text-white font-semibold py-2 px-4 rounded cursor-pointer ml-4" onClick={() => handleTabClick('tab3')}>Next</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Professional Info Tab */}
        {activeTab === 'tab3' && (
          <div className="editProfiletabcontent w-[80%] max-[900px]:w-full mx-auto flex flex-col bg-white" id="tab3">
            <div className="Educational_edit w-full px-8 py-6">
              {/* Professional Info Form Fields */}
              <div className="details_edit flex max-[900px]:flex-col">
                <div className="form__group field mr-4 max-[900px]:w-full w-1/2">
                  <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Current Job Title" name="jobTitle" id="jobTitle" />
                </div>
                <div className="form__group field max-[900px]:w-full w-1/2">
                  <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Company" name="company" id="company" />
                </div>
              </div>
              <div className="details_edit flex mt-4 max-[900px]:flex-col">
                <div className="form__group field mr-4 max-[900px]:w-full w-1/2">
                  <input type="text" className="form_field my-4 border-b border-black p-3 w-full" placeholder="Years of Experience" name="experienceYears" id="experienceYears" />
                </div>
                <div className="form__group field max-[900px]:w-full w-1/2">
                  <textarea className="form-textinput p-3 border-b border-black w-full" id="jobDescription" placeholder="Job Description"></textarea>
                </div>
              </div>
              <div className="nav_buttons_container flex justify-end text-center mt-4 px-8 pb-8">
                <div className="nav_buttons_box flex">
                  <div className="bg-black text-white font-semibold py-2 px-4 rounded cursor-pointer" onClick={() => handleTabClick('tab2')}>Previous</div>
                  <button type="submit" className="bg-black text-white font-semibold py-2 px-4 rounded ml-4">Save</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="toast" className="fixed bottom-4 hidden left-4 bg-green-500 text-white py-2 px-4 rounded flex items-center">
          <div id="img" className="mr-2">👍</div>
          <div id="desc">Submitted Successfully</div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

import React, { useEffect, useState } from "react";

export const Question2 = () => {
  // Create a React component that fetches user data from an API endpoint using useEffect hook and displays the user's name, email, and phone number on the screen using the useState hook. Add a button which toggles the display of the user's address (street, suite, city, zipcode).
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/user") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              name: "John Doe",
              email: "john.doe@example.com",
              phone: "+1 555-555-5555",
              address: {
                street: "123 Main St",
                suite: "Suite 456",
                city: "Anytown",
                zipcode: "12345",
              },
            },
          });
        } else {
          reject({
            status: 404,
            message: "User not found.",
          });
        }
      }, 2000);
    });
  };

  const [userDetails, setUserDetails] = useState({});
  const [toggle, setToggle] = useState(false);

  const getUserDetails = async () => {
    try {
      const result = await fakeFetch("https://example.com/api/user");
      setUserDetails(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
      {toggle ? (
        <>
          <p>{userDetails.address.street}</p>
          <p>{userDetails.address.suite}</p>
          <p>{userDetails.address.Anytown}</p>
          <p>{userDetails.address.zipcode}</p>
        </>
      ) : (
        ""
      )}
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "Hide Address" : "Show Address"}
      </button>
    </div>
  );
};

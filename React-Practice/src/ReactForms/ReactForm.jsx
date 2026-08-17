// import React from "react";

function ReactForm({
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://cad897b76f0e6f94e94a.free.beeceptor.com/api/users`, {
      method: "post",
      body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Successfully submitted data");
        } else {
          alert("Please Check API");
        }
      })
      .catch((e) => console.log(e));
    setUserName("")
    setEmail("")
    setPassword("")
  };
  return (
    <div className="border text-center w-50">
      <h2>Controlled Components</h2>
      <form action="" className="" onSubmit={handleSubmit}>
        <label htmlFor="" className="">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          value={userName}
          onInput={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="" className="">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" className="">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100 my-4">Submit</button>
      </form>
    </div>
  );
}

export default ReactForm;

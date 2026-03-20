import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../common/http";
import { toast } from "react-toastify";

const Create = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [imageId, setImageId] = useState(null);

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Content",
    }),
    [placeholder],
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const newData = { ...data, content: content, imageId: imageId };
    const res = await fetch(apiUrl + "services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });

    const result = await res.json();
    console.log(result);

    if (res.ok) {
      toast.success(result.message || "Service added successfully");
      navigate("/admin/services");
    } else {
      if (result.errors) {
        Object.values(result.errors).forEach((err) => toast.error(err[0]));
      } else {
        toast.success(result.massage);
      }
    }
  };

const handleFile = async (e) => {
  const file = e.target.files[0];

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(apiUrl + "TempImg", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token()}`,
    },
    body: formData
  });

  const result = await res.json();

  console.log(result); // important

  if (!result.status) {
    toast.error("Image upload failed");
  } else {
    setImageId(result.imageId);   // ✅ correct key
    toast.success("Image uploaded");
  }
};
  return (
    <>
      <Header />

      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              {/* Sidebar */}
              <Sidebar />
            </div>
            <div className="col-md-9">
              {/* Main Content */}
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4>Services/Create</h4>
                    <Link to="/admin/services" className="btn btn-primary1">
                      Back
                    </Link>
                  </div>
                  <hr />

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label
                        htmlFor=""
                        className="form-label"
                        placeholder="Title"
                      >
                        Name
                      </label>
                      <input
                        {...register("title", {
                          required: "The title field Required.",
                        })}
                        type="text"
                        placeholder="Title"
                        className={`form-control ${
                          errors.title ? "is-invalid" : ""
                        }`}
                      />
                      {errors.title && (
                        <p className="invalid-feedback">
                          {errors.title?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Slug
                      </label>
                      <input
                        {...register("slug", {
                          required: "The title field Required.",
                        })}
                        type="text"
                        placeholder="Slug"
                        className={`form-control ${
                          errors.slug ? "is-invalid" : ""
                        }`}
                      />
                      {errors.slug && (
                        <p className="invalid-feedback">
                          {errors.slug?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Short Description
                      </label>
                      <textarea
                        name=""
                        rows={4}
                        {...register("short_desc", {
                          required: "The title field Required.",
                        })}
                        type="text"
                        placeholder="Short Description"
                        className={`form-control ${
                          errors.short_desc ? "is-invalid" : ""
                        }`}
                      ></textarea>
                      {errors.short_desc && (
                        <p className="invalid-feedback">
                          {errors.short_desc?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Content
                      </label>
                      <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                      />
                      {errors.content && (
                        <p className="invalid-feedback">
                          {errors.content?.message}
                        </p>
                      )}
                    </div>

                    <br />
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Image
                      </label>

                      <input onChange={handleFile} type="file" />

                      {errors.status && (
                        <p className="invalid-feedback">
                          {errors.status?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Status
                      </label>
                      <select
                        {...register("status", {
                          required: "Status is required",
                          valueAsNumber: true, // 👈 THIS FIXES IT
                        })}
                        className={`form-control ${
                          errors.status ? "is-invalid" : ""
                        }`}
                      >
                        <option value={1}>Active</option>
                        <option value={0}>Block</option>
                      </select>

                      {errors.status && (
                        <p className="invalid-feedback">
                          {errors.status?.message}
                        </p>
                      )}
                    </div>

                    <button disabled={isDisable} className="btn btn-primary1">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Create;

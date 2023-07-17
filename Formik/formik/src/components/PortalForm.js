import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CutomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            <CustomSelect
              label="Your School"
              name="university"
              placeholder="Select your school"
            >
              <option value="">Please Select Your University</option>
              <option value="bogazici">Boğaziçi University</option>
              <option value="gsü">Galatasaray University</option>
              <option value="odtü">Middle East Technical University</option>
              <option value="itü">İstanbul Technical University</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Save
            </button>
            <Link className="formLink" to="/">
              Go To General Form
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;

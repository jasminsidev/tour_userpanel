import { Stack, TextField, Typography } from "@mui/material";
import "../Style/Contact.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";
import { useFormik } from "formik";
function Contact() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (value) => {
      console.log(value);
      axios
        .post("http://localhost:2000/api/contact/postDetail", {
          firstname: value.firstname,
          lastname: value.lastname,
          email: value.email,
          phone: value.phone,
          message: value.message,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    validate: (value) => {
      const error = {};
      if (!value.firstname) {
        error.firstname = "required !";
      }
      if (!value.lastname) {
        error.lastname = "required !";
      }
      if (!value.email) {
        error.email = "required !";
      }
      if (!value.phone) {
        error.phone = "required !";
      }
      if (!value.message) {
        error.message = "required !";
      }
      console.log(error, "error");
      return error;
    },
  });
  return (
    <>
      <ScrollToTop scroll-to-top style={{ borderRadius: "50%" }} color="red" />
      <Stack className="flexboxclas">
        <Typography
          textAlign={"center"}
          color={"#009688"}
          fontSize={"50px"}
          fontWeight={"700"}
          style={{ textShadow: "3px 1px 2px rgba(0, 0, 0, 0.6)" }}
        >
          CONTACT US{" "}
        </Typography>
      </Stack>
      <Stack textAlign={"center"}>
        <Typography>INFORMETION ABOUT US</Typography>
        <Typography color={"#9e9e9e"} variant="">
          sagittis posuere id nam quis vestibulum a facilisi at elit hendreit
          scelerisqure sodales ma, dis orci.
        </Typography>
      </Stack>
      <div className="flexcard">
        <Card sx={{ minWidth: 275, m: "15px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              style={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
              }}
              color="text.secondary"
              gutterBottom
            >
              <LocationOnIcon style={{ color: "green" }} />
            </Typography>
            <Typography variant="h6" component="div" textAlign={"center"}>
              OFFICE LOCATION
            </Typography>
            <Typography
              sx={{ mb: 0 }}
              color="text.secondary"
              textAlign={"center"}
            >
              445,sliver sky point,punagam <br /> road ,india 390510
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, m: "15px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              style={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
              }}
              color="text.secondary"
              gutterBottom
            >
              <PhoneIcon style={{ color: "green" }} />
            </Typography>
            <Typography variant="h6" component="div" textAlign={"center"}>
              Phone Number
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
              textAlign={"center"}
            >
              977-444-666-888
              <br />
              977-777-222-000
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            m: "15px",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              style={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
              }}
              color="text.secondary"
              gutterBottom
            >
              <EmailIcon style={{ color: "green" }} />
            </Typography>
            <Typography variant="h5" component="div" textAlign={"center"}>
              Email Address
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
              textAlign={"center"}
            >
              info@exstory.com
              <br />
              info@exstoryhelp.com
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="fromiframe">
        <div className="imagshaping">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1888472.9910745472!2d70.0076752675264!3d22.413068890742277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1714541686382!5m2!1sen!2sin"
            width={"100%"}
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="widthclass">
          <Typography className="flexdrection">
            <TextField
              label="First Name"
              sx={{ mb: "10px" }}
              name="firstname"
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
              onChange={formik.handleChange}
            />
            <TextField
              label="Last Name"
              sx={{ mb: "10px" }}
              name="lastname"
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
              onChange={formik.handleChange}
            />
            <TextField
              label="Email"
              sx={{ mb: "10px" }}
              name="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
            />
            <TextField
              label="Phone"
              sx={{ mb: "10px" }}
              name="phone"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              onChange={formik.handleChange}
            />
            <textarea
              rows={"5"}
              cols="40"
              maxlength="60"
              placeholder="Emnter your Message"
              style={{ marginBottom: "10px" }}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              onChange={formik.handleChange}
            />

    
          </Typography>
          <div className="flexboxclass">
            <Button
              sx={{
                bgcolor: "success.main",
                color: "text.disabled",
                mb: "10px",
              }}
              variant="text"
              onClick={() => formik.handleSubmit()}
            >
              <b>Send Detail</b>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;

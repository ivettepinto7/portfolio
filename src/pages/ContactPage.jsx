import React from "react";
import Section from "../components/Section";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const contactInfo = [
  {
    icon: <AddIcCallIcon sx={{ fontSize: "8rem" }} />,
    info: "(+503) 7862-5948",
    action: null,
  },
  {
    icon: <EmailIcon sx={{ fontSize: "8rem" }} />,
    info: "ivettepinto00@gmail.com",
    action: null,
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: "8rem" }} />,
    info: "Ivette Pinto",
    action: "https://www.linkedin.com/in/ivette-pinto-151214248/",
  },
  {
    icon: <GitHubIcon sx={{ fontSize: "8rem" }} />,
    info: "ivettepinto7",
    action: "https://www.github.com/ivettepinto7",
  },
];

const ContactPage = () => {
  return (
    <Section id="contact" title="Contact">
      <Grid container alignItems="center" spacing={4} mt={1}>
        {contactInfo.map((contact) => (
          <Grid key={contact.info} item xs={12} md={4}>
            <Card
              sx={{ textAlign: "center", backgroundColor: "#FBEEAC" }}
              variant="outlined"
            >
              <CardContent mx="auto">
                {contact.icon}
                <Typography variant="h5" component="div">
                  <b>{contact.info}</b>
                </Typography>
              </CardContent>
              <CardActions>
                {contact.action !== null && (
                  <Button variant="outlined" size="medium">
                    <Link href={contact.action} color="inherit">
                      Go
                    </Link>
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default ContactPage;

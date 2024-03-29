import React from "react";
import { Box, ListItem, Text, UnorderedList, Link } from "@chakra-ui/react";
import { Link as reachLink } from "react-router-dom";
export default function Privacy() {
  return (
    <Box w="90%" m="auto">
      <Text textAlign="center" fontSize={32} fontWeight={600}>
        Privacy Policy
      </Text>

      <Text my={5}>
        At message hub, accessible from{" "}
        <Link color="blue.600" as={reachLink} to="/">
          https://secure-message-hub.herokuapp.com/
        </Link>
        , one of our main priorities is the privacy of our visitors. This
        Privacy Policy document contains types of information that is collected
        and recorded by message hub and how we use it.
      </Text>

      <Text my={5}>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </Text>

      <Text my={5}>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in message hub. This policy is not applicable to
        any information collected offline or via channels other than this
        website.
      </Text>

      <Text my={5} fontSize={28} fontWeight={500}>
        Consent
      </Text>

      <Text my={5}>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </Text>

      <Text my={5} fontSize={28} fontWeight={500}>
        Information we collect
      </Text>

      <Text my={5}>
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point
        we ask you to provide your personal information.
      </Text>
      <Text my={5}>
        If you contact us directly, we may receive additional information about
        you such as your name, email address, phone number, the contents of the
        message and/or attachments you may send us, and any other information
        you may choose to provide.
      </Text>
      <Text my={5}>
        When you register for an Account, we may ask for your contact
        information, including items such as name, company name, address, email
        address, and telephone number.
      </Text>

      <Text my={5} fontSize={28} fontWeight={500}>
        How we use your information
      </Text>

      <Text my={5}>
        We use the information we collect in various ways, including to:
      </Text>

      <UnorderedList>
        <ListItem ml={4}>Provide, operate, and maintain our website</ListItem>
        <ListItem ml={4}>Improve, personalize, and expand our website</ListItem>
        <ListItem ml={4}>
          Understand and analyze how you use our website
        </ListItem>
        <ListItem ml={4}>
          Develop new products, services, features, and functionality
        </ListItem>
        <ListItem ml={4}>
          Communicate with you, either directly or through one of our partners,
          including for customer service, to provide you with updates and other
          information relating to the website, and for marketing and promotional
          purposes
        </ListItem>
        <ListItem ml={4}>Send you emails</ListItem>
        <ListItem ml={4}>Find and prevent fraud</ListItem>
      </UnorderedList>

      <Text my={5} fontSize={28} fontWeight={500}>
        Log Files
      </Text>

      <Text my={5}>
        message hub follows a standard procedure of using log files. These files
        log visitors when they visit websites. All hosting companies do this and
        a part of hosting services' analytics. The information collected by log
        files include internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and
        possibly the number of clicks. These are not linked to any information
        that is personally identifiable. The purpose of the information is for
        analyzing trends, administering the site, tracking users' movement on
        the website, and gathering demographic information.
      </Text>

      <Text my={5} fontSize={28} fontWeight={500}>
        Cookies and Web Beacons
      </Text>

      <Text my={5}>
        Like any other website, message hub uses 'cookies'. These cookies are
        used to store information including visitors' preferences, and the pages
        on the website that the visitor accessed or visited. The information is
        used to optimize the users' experience by customizing our web page
        content based on visitors' browser type and/or other information.
      </Text>

      <Text my={5}>
        For more information on how we use cookies, please read{" "}
        <Link color="blue.600" as={reachLink} to="/cookie">
          Cookie Policy
        </Link>
        .
      </Text>

      <Text my={5} fontSize={28} fontWeight={500}>
        Advertising Partners Privacy Policies
      </Text>

      <Text my={5}>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of message hub.
      </Text>

      <Text my={5}>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on message hub, which are sent
        directly to users' browser. They automatically receive your IP address
        when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.
      </Text>

      <Text my={5}>
        Note that message hub has no access to or control over these cookies
        that are used by third-party advertisers.
      </Text>

      <Text my={5} fontSize={28} fontWeight={500}>
        Third Party Privacy Policies
      </Text>

      <Text my={5}>
        message hub's Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.{" "}
      </Text>

      <Text p={2}> List of Third party Services used .</Text>
      <UnorderedList>
        <ListItem>
          <strong>Google</strong>
          <UnorderedList>
            <ListItem>
              <Text>Google Analytics for site analytics</Text>
            </ListItem>
            <ListItem>
              <Text>Google Firebase for authentication, database,Storage </Text>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <strong>Seald-io</strong>
          <Text p={2}>
            Seald-io is used for end-to-end encryption and authentication of
            encrypted identity. encrypted identity of user is stored on the ssks
            serever hosted by seald-io or property of seald-io
          </Text>
          <Text p={2}>
            {" "}
            To get more information about seald-io visit{" "}
            <Text d="inline" color="blue.600">
              <a href="https://www.seald.io/"> Seald-io</a>
            </Text>{" "}
            official page.
          </Text>
        </ListItem>
      </UnorderedList>

      <Text my={5}>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites.
      </Text>

      <Text my={5} fontSize={28} fontWeight={500}>
        CCPA Privacy Rights (Do Not Sell My Personal Information)
      </Text>

      <Text my={5}>
        Under the CCPA, among other rights, California consumers have the right
        to:
      </Text>
      <Text my={5}>
        Request that a business that collects a consumer's personal data
        disclose the categories and specific pieces of personal data that a
        business has collected about consumers.
      </Text>
      <Text my={5}>
        Request that a business delete any personal data about the consumer that
        a business has collected.
      </Text>
      <Text my={5}>
        Request that a business that sells a consumer's personal data, not sell
        the consumer's personal data.
      </Text>
      <Text my={5}>
        If you make a request, we have one month to respond to you. If you would
        like to exercise any of these rights, please contact us.
      </Text>

      <Text my={5} fontSize={28} fontWeight={500}>
        GDPR Data Protection Rights
      </Text>

      <Text my={5}>
        We would like to make sure you are fully aware of all of your data
        protection rights. Every user is entitled to the following:
      </Text>
      <Text my={5}>
        The right to access – You have the right to request copies of your
        personal data. We may charge you a small fee for this service.
      </Text>
      <Text my={5}>
        The right to rectification – You have the right to request that we
        correct any information you believe is inaccurate. You also have the
        right to request that we complete the information you believe is
        incomplete.
      </Text>
      <Text my={5}>
        The right to erasure – You have the right to request that we erase your
        personal data, under certain conditions.
      </Text>
      <Text my={5}>
        The right to restrict processing – You have the right to request that we
        restrict the processing of your personal data, under certain conditions.
      </Text>
      <Text my={5}>
        The right to object to processing – You have the right to object to our
        processing of your personal data, under certain conditions.
      </Text>
      <Text my={5}>
        The right to data portability – You have the right to request that we
        transfer the data that we have collected to another organization, or
        directly to you, under certain conditions.
      </Text>
      <Text my={5}>
        If you make a request, we have one month to respond to you. If you would
        like to exercise any of these rights, please contact us.
      </Text>

      <Text my={5} fontSize={28} fontWeight={500}>
        Children's Information
      </Text>

      <Text my={5}>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </Text>

      <Text my={5} pb={{ sm: 12, md: 0 }}>
        message hub does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our website, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </Text>
    </Box>
  );
}

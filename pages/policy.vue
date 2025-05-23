<template>
  <v-container fluid class="pa-0 overflow">
    <v-row justify="center" class="bg-privacy align-center px-md-16 px-4 py-16 primary ma-0">
      <v-col cols="12" class="text-center pl-md-10 my-6 mb-12">
        <div
          class=" text-h4 text-md-h3 text-lg-h2 text-capitalize white--text font-weight-bold"
        >
          Privacy Policy
        </div>
        <div
          class="text-h6  white--text font-weight-light mt-5"
        >
          Last Revised: February 5, 2017
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="white text2--text py-16 px-4  px-md-10 ">
      <v-col
        cols="12"
        md="10"
        class="mb-6"
      >
        <div class="text-h5 text-md-h3 font-weight-light mb-4">
          Introduction
        </div>
        <div class="font-weight-light text-justify">
          <p> IQ Options Company Limited (in incorporation) (“us“, “we” or “Company“) respect the privacy of our users (each, “you” or “User“) and are committed to protect the privacy of Users who access, download, install or register to our mobile application (the “Application“), our website or any other online services we provide (collectively: the “Services“). The Company has papered this Privacy Policy to outline our practices with respect to collecting, using and disclosing your information when you use the Services. We encourage you to read the Privacy Policy carefully and use it to make informed decisions. By using the Services, you agree to the terms of this Privacy Policy and your continued use of the Services constitutes your ongoing agreement to the Privacy Policy. The Privacy Policy is a part of the Terms of Service and is incorporated there in by reference. In this Privacy Policy you will read about, among other things:</p>
          <p>* What type of information we collect</p>
          <p>* Cookies and Google Analytics</p>
          <p>* How we use the information</p>
          <p>* With whom we share the information and for what purpose</p>
          <p>* For how long we retain the information</p>
          <p>* How we protect your information</p>
          <p>* Advertisements</p>
          <p>* Advertising ID and Advertising Identifier</p>
          <p />
        </div>
      </v-col>
      <v-col cols="12" md="10" class="pa-0">
        <v-card>
          <v-expansion-panels flat accordion>
            <v-expansion-panel v-for="faq in faqs" :key="faq.name">
              <v-expansion-panel-header class=" text-subtitle-1 font-weight-medium text-md-h6 text2--text">
                <div>
                  <v-icon class="d-none d-sm-block" size="20" color="text2" left>
                    mdi-cloud-outline
                  </v-icon> {{ faq.name }}
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content class=" grey lighten-5 py-4 font-weight-light ">
                {{ faq.des }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Privacy',
  scrollToTop: true,
  data: () => ({
    faqs: [
      {
        name: 'What type of information we collect',
        des:
          ` We may collect two types of data and information from our Users. The first type of information is un-identified and non-identifiable information pertaining to you, which may be made available or gathered via your use of the Services (“Non-personal Information“). We are not aware of the identity from which the Non-personal Information is collected. Non-personal Information which is collected may include your aggregated usage information and technical information transmitted by your device, including certain software and hardware information about your device (e.g., the device you use, the type of browser and operating system your device uses, language preference, access time and the website’s domain name from which you linked to the Services, etc.), in order to enhance the functionality of the Services. We may also collect information about your activity on the Services (e.g., pages viewed, online browsing, clicks, actions, timestamps, etc.). The second type of information is individually identifiable information, namely information that identifies an individual or may with reasonable effort identify an individual (“Personal Information“). Such information may include:

Account Information: When you sign-up and register to the Services, you will be asked to provide us certain details about yourself. You may register to the Services through our website.

Registering through the our website: When you register to the Services through the Application or our website, we may collect from you the following information: full name, email address, home address, hometown, nationality, birthdate, phone number, as well as information required for our compliance with regulatory Know Your Customer requirements, such as passport or other identification number, and any other information you agreed to share with us.

Voluntarily Information: We may collect information which you provide us voluntarily. For instance, when you respond to communications from us, communicate with us via email or share additional information about yourself through your use of the Services. We may also collect the feedback, suggestions, complaints and reports which you send to us. Please note that we may also collect complaints about you from other Users, which may include your Personal Information.

For the avoidance of doubt, if we combine Personal Information with Non-personal Information, the combined information will be treated as Personal Information as long as it remains combined.`
      },
      {
        name: 'Cookies and Google Analytics',
        des:
          `We may use cookies and other technologies or methods of web and mobile analysis (e.g., pixels, FullStory, Google Analytics, etc.) to gather, store, and track certain information related with your access to and activity through the Services, including when you visit our website. A “cookie” is a small piece of information that a website assign to your device while you are viewing a website. Cookies are very helpful and may be used for various different purposes. These purposes include, among other things, allowing you to navigate between pages efficiently, enabling automatic activation of certain features, remembering your preferences and making the interaction between you and the Services quicker, easier and smoother. Our website may use the following types of cookies: Session Cookies which are stored only temporarily during a browsing session in order to allow normal use of the system and are deleted from your device when the browser is closed.

Persistent Cookies which are saved on your device for a fixed period and are not deleted when the browser is closed. Such cookies are used where we need to identify who you are for repeated visits (for instance, to allow us to store your preferences for the next sign-in).

Third-Party Cookies which are set by other online services that run content on the page you view on your browser (for example, by third-party advertising companies who monitor and analyze our website access).

You may remove the cookies by following the instructions of your device preferences. However, if you choose to disable cookies, some features of the Services may not operate properly and your online experience may be limited. We also use a tool called Google Analytics to collect information about your use of the Services. Google Analytics collects information such as how often users access the Services, what pages they visit when they do so, etc. We use the information we get from Google Analytics only to improve our Services. Google Analytics collects the IP address assigned to you on the date you visit sites, rather than your name or other identifying information. We do not combine the information collected through the use of Google Analytics with personally identifiable information. Google’s ability to use and share information collected by Google Analytics about your visits to this site is restricted by the Google Analytics Terms of Service and the Google Privacy Policy.`
      },
      {
        name: 'With whom we share the information and for what purpose',
        des:
          'We do not rent, sell, or share your Personal Information with third-parties except as described in this Privacy Policy. We may share Personal Information with the following recipients: (i) our subsidiaries; (ii) affiliated companies; (iii) subcontractors and other third-party service providers; (iv) auditors or advisers of our business processes; and (v) any potential purchasers or investors in the company. In addition to the purposes listed in this Privacy Policy, we may share Personal Information with our recipients for any of the following purposes: (i) storing or processing Personal Information on our behalf (e.g., cloud computing service providers); (ii) processing such information to assist us with our business operations; (iii) performing research, technical diagnostics, personalization and analytics. We may also disclose Personal Information or any information you submitted via the Services if we have a good faith belief that disclosure of such information is helpful or reasonably necessary to: (i) comply with any applicable law, regulation, legal process or governmental request; (ii) enforce our policies, including investigations of potential violations thereof; (iii) investigate, detect, prevent, or take action regarding illegal activities or other wrongdoing, suspected fraud or security issues; (iv) to establish or exercise our rights to defend against legal claims; (v) prevent harm to the rights, property or safety of us, our affiliates, our Users, yourself or any third-party; (vi) for the purpose of collaborating with law enforcement agencies; and (vii) in case we find it necessary in order to enforce intellectual property or other legal rights.'
      },

      {
        name: 'Third-party collection of information',
        des:
          'Our policy only addresses the use and disclosure of information we collect from you. To the extent that you disclose your information to other parties via the Services (e.g., by clicking on a link to any other website or location) or via other sites throughout the Internet, different rules may apply to their use or disclosure of the information you disclose to them. You acknowledge that we are not responsible for the products, services, or descriptions of products or services that you receive from third-party sites or to the content or privacy practices of those sites, and that this Privacy Policy does not apply to any such third-party products and services. You are knowingly and voluntarily assuming all risks of using third-party sites to purchase products and services. You agree that we shall have no liability whatsoever with respect to such third-party sites and your usage of them.'
      },

      {
        name: 'For how long we retain the information',
        des:
          'We respect your privacy rights and therefore you may contact us at any time and request: (i) to access, delete, change or update any Personal Information relating to you (for example, if you believe that your Personal Information is incorrect, you may ask to have it corrected or deleted); or (ii) that we will cease any further use of your Personal Information (for example, you may ask that we will stop using or sharing your Personal Information with third-parties) or that we shall remove your Personal Information (subject to any other legal obligation that may require us to keep the information). Please note that unless you instruct us otherwise we retain the information we collect for as long as needed to provide the Services and to comply with our legal obligations, resolve disputes and enforce our agreements. We may rectify, replenish or remove incomplete or inaccurate information, at any time and at our own discretion. If you wish to raise a complaint on how we have handled your Personal Information, please contact us directly at info@IQ Options Company.co. If you are not satisfied with our response or believe we are collecting or processing your Personal Information not in accordance with the laws, you can complain to the applicable data protection authority.'
      },

      {
        name: 'How we protect your information',
        des:
          'We take great care in implementing and maintaining the security of the Services and your information. We employ industry standard procedures and policies to ensure the safety of your information and prevent unauthorized use of any such information. Although we take reasonable steps to safeguard information, we cannot be responsible for the acts of those who gain unauthorized access or abuse the Services, and we make no warranty, express, implied or otherwise, that we will prevent such access. If you feel that your privacy was treated not in accordance with our policy, or if any person attempted to abuse the Services or acted in an inappropriate manner, please contact us directly atinfo@IQ Options Company.co.'
      },

      {
        name: 'Advertisements',
        des:
          'We may use a third-party advertising technology to serve advertisements when you use the Services. This technology uses your information with regards to your use of the Services to serve advertisements to you (e.g., by placing third-party cookies on your web browser). We may also use our third-parties and share with them Users’ information to assist us in evaluating the success of our advertising campaigns and help us retargeting our Users. You may opt-out of many third-party ad networks, including those operated by members of the Network Advertising Initiative (“NAI”) and the Digital Advertising Alliance (“DAA”). For more information about this practice by NAI and DAA members, and your choices regarding having this information used by these companies, including how to opt-out of third-party ad networks operated by NAI and DAA members, please visit their respective websites: http://optout.networkadvertising.org/#!/ and http://optout.aboutads.info/#!/.'
      },

      {
        name: 'Corporate transaction',
        des:
          'We may share information, including Personal Information, in the event of a corporate transaction (e.g., sale of a substantial part of our business, merger, consolidation or asset sale of an asset or transfer in the operation thereof) of the Company. In the event of the above, the acquiring company or transferee will assume the rights and obligations as described in this Privacy Policy.'
      },

      {
        name: 'Advertising ID and Advertising Identifier',
        des:
          'The Google Advertising ID is an anonymous identifier, provided by Google Play services. If your device has an Advertising ID, we may collect and use it for advertising and user analytics purposes. We may also use Apple’s Advertising Identifier (IDFA), which is a non-permanent device identifier provided by Apple, and any information obtained through the use of the Advertising Identifier, for the purpose of advertising. By downloading the Application or using the Services you explicitly agree that we may associate your Advertising ID and your Advertising Identifier with your applicable persistent device identifier. This will facilitate our ability to improve your personalized experience. Further, we may use other persistent identifiers for non-advertising purposes. If your device does not have Advertising ID or Advertising Identifier respectively, we will use other identifiers.'
      },

      {
        name: 'Updates or amendments to the Privacy Policy',
        des:
          'We may revise this Privacy Policy from time to time, in our sole discretion, and the most current version will always be posted on our website or Application (as reflected in the “Last Revised” heading). In the event of a material change to the Privacy Policy, we will notify you through the Services or via email, or you may be notified within the Application. We encourage you to review this Privacy Policy regularly for any changes. Your continued use of the Services, following the notification of such amendments, constitutes your acknowledgement and consent of such amendments to the Privacy Policy and your agreement to be bound by the terms of such amendments.'
      },

      {
        name: 'How to contact us',
        des:
          'If you have any general questions regarding the Services or the information that we collect about you and how we use it, please contact us at info@IQ Options Company.co.'
      }

    ]
  }),
  head () {
    return {
      title: 'Privacy Policy',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Trade Binary Options on the IQ Options Company platform and enjoy reliable pricing and exceptional execution'
        }
      ]
    }
  }
}
</script>

<style >

.bg-privacy {
background: linear-gradient(0deg, rgba(25, 0, 68, 0.9) 47%, rgba(83, 2, 124, 0.9) 87%),
  url("/assets/crypto.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.overflow {
  width:100vw;
  overflow: hidden;
}
</style>

import Image from "next/image";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/">
                <Image
                  src="/newway-labs-logo.png"
                  alt="NewWay Labs Logo"
                  width={150}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <p className="text-gray-600 mb-4">
            Your privacy is important to us (the “team”, “we” or “us”). This Privacy Policy (the "Policy") describes how we collect, use, store and otherwise process personal data that we collect or receive from or about you.
          </p>
          <p className="text-gray-600 mb-4">
            Accordingly, this Policy is a master Privacy Policy, and references herein to the "Services" shall mean the Apps, the Web Services, and the Websites collectively and/or individually (as the case may be).
          </p>
          <p className="text-gray-600 mb-4">
            By using our Service, you agree to the terms of this policy and you expressly consent to the collection, use, and disclosure of your personal information in accordance with this policy.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">1. WHAT PERSONAL INFORMATION DO WE COLLECT?</h2>
            <p className="text-gray-600 mb-4">
              When you use or access our Services, we may collect a variety of information about you and others, as described below. Such information includes, but is not limited to, information about you which is in a form that permits us to identify you either on its own or in combination with other available information (your “personal information”).
            </p>
            <h3 className="text-xl font-semibold text-black mb-2">a. Information you provide to us.</h3>
            <p className="text-gray-600 mb-4">
              We obtain certain information when you provide it to us: for example, when you contact us about our Services, setup your account profile, access and use our Services, when you purchase virtual currency or products through our Services, report a problem, apply for a job with us, or communicate with us by phone, email, via third-party social media sites or otherwise. The types of information may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Personal details, such as information that identiﬁes you or your personal characteristics, including your name, user ID, email address, phone number, contact details, your date of birth or photograph.</li>
              <li>Interests, such as your favorite music and television shows</li>
              <li>Credentials, such as passwords, password hints or similar security information used for authentication and account access</li>
              <li>Marketing data, such as your preferences in receiving marketing from us, or information about your use of our Services.</li>
              <li>Candidate data, such as employment history, qualiﬁcations, academic qualiﬁcations and education records, and any other information that you provide to us when applying for a job with us, for example in your curriculum vitae, a covering letter, on an application form or during an interview, or that we have received from a recruitment agency or background check provider.</li>
            </ul>
            <h3 className="text-xl font-semibold text-black mb-2">b. User generated content.</h3>
            <p className="text-gray-600 mb-4">
              You can use our Services to create proﬁles and upload images and audio. Such activities are governed by our Terms of Service. In addition, such postings may appear on other Websites and Mobile Apps, or when searches are executed on the subject of your posting. Whenever you voluntarily disclose personal information on publicly viewable web pages or applications, that information will be publicly available and can be collected and used by others and reproduced on websites or services over which we have no control. Further information is contained in the Zedge online safety and best practices guidelines.
            </p>
            <h3 className="text-xl font-semibold text-black mb-2">c. Information we collect automatically.</h3>
            <p className="text-gray-600 mb-4">
              When you use or access our Services, we collect certain information about you, your use of our Services, and your interactions with us and our advertising. through automated means. This information may include (but is not limited to):
            </p>
            <p className="text-gray-600 mb-4">
              Device information, such as your Internet Protocol (IP) address, unique device identiﬁers, packet IDs, device data (including make, make, and model), anonymous ID for advertising or generated by third party social network, operating system, carrier code (android only), carrier name, mobile carrier code, mobile network information , computer and connection information, browser type, available applications, browsing activity, date and time, and device location information are inaccurate or generic (e.g. city, region, country) country, language) or exact location (for example, GPS coordinates or other location information). We may also collect any phone numbers from which you contact us. Log data, including information related to your activities on our Services, including information about how you interact with our Services or any content or advertising on it , statistics about your page views and trafﬁc to and from our Services, and the number of bytes transferred, hyperlinks clicked, and other actions you take. Our Services may also track information such as the URL you visited before coming to the Service and the URL you visit next. When you download one of our Mobile Applications and/or register with us, we also generate unique identiﬁers for you. These identiﬁers are randomly generated and can be reset when you upgrade or reset your device.
            </p>
            <p className="text-gray-600 mb-4">
              We combine this information with information you provide to us and we collect about you. We will use this information and the combined personal information for the purposes outlined in this Privacy Policy (depending on the type of information we receive).
            </p>
            <h3 className="text-xl font-semibold text-black mb-2">d. Cookies and similar technologies.</h3>
            <p className="text-gray-600 mb-4">
              As with most other websites and digital platforms, we and our service providers use cookies and similar technologies (such as pixel tags and web beacons) and identiﬁers. form of a resettable device to collect and store certain information about users of our Services, to improve our Services and advertising, and to help us remember you and your preferences. you when you revisit our Services. For more information about our activities in this area and for a list of the cookies we use, please see our Cookie Policy.
            </p>
            <h3 className="text-xl font-semibold text-black mb-2">e. Information we collect from other sources.</h3>
            <p className="text-gray-600 mb-4">Third-Party Accounts. You can sign up and log in to the Services using accounts you create with third-party products and services, such as Facebook, Google, or Apple (collectively, “Third-Party Accounts”). If you access the Services with Third-Party Accounts we will collect information that you have agreed to make available such as your name, email address, proﬁle information (including proﬁle picture) and preferences. This information is collected by the Third-Party Account provider and is provided to Zedge under their privacy policies. You can generally control the information that we receive from these sources using the privacy controls in your Third-Party Account.</p>
            <p className="text-gray-600 mb-4">Third-Party Providers. We also obtain personal information from other sources. We protect this information according to the practices described in this Privacy Policy and any additional restrictions imposed by the source of the data. These sources may include:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Security service providers who provide us with information to secure our systems, prevent fraud and help us protect the security of our Services;</li>
              <li>Online and ofﬂine data providers, from which we obtain aggregated demographic, interest based and online advertising related data; and</li>
              <li>Publicly available sources such as publicly available databases and social media platforms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">2. HOW DO WE USE PERSONAL INFORMATION?</h2>
            <p className="text-gray-600 mb-4">
              We only process your personal information for the purposes outlined in this Privacy Policy where we have a valid legal basis to do so under applicable data protection laws. The legal basis will depend on the purposes for which we process your personal information and the data protection laws that apply to our activities in your jurisdiction.
            </p>
            <p className="text-gray-600 mb-4">
              We will use your personal information for the following purposes as necessary to perform our obligations under our contract with you, or to answer questions or take steps Your requirements before signing with you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>To process your registration, order, payment or to facilitate your use of the Website or Mobile Application;</li>
              <li>To provide you with the Services, manage your account and provide you with customer support;</li>
              <li>To send technical alerts, updates, security notices and administrative communications;</li>
              <li>To verify your identity, investigate and prevent fraudulent activities, unauthorized access to our Services, and other illegal activities;</li>
              <li>To manage your registration, payment and attendance to our events; and</li>
              <li>To provide personal information to third parties as set forth in this Privacy Policy.</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We use your personal information for the following purposes as necessary for certain legitimate interests or when you have consented to such processing to the extent required by applicable law (consent That idea may be withdrawn at any time):
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>To analyze how the Services are being used;</li>
              <li>To help tailor content and advertising on the Services;</li>
              <li>To recognize usage patterns and trends, and to better design the Services to improve user experience, both in terms of content and ease of use, and to transmit information through in-app notiﬁcations, push notiﬁcations or campaigns through external services;</li>
              <li>To provide you with offers and recommendations, and to tailor and enhance your experience on the Website or in the Mobile Application;</li>
              <li>To provide enhanced location-based Services and to serve location-targeted advertising, including communicating with third-party service providers who have consented to us to keep such information conﬁdential and to use it only to the extent necessary to perform the services requested by us;</li>
              <li>To notify you of any new or changed Services and to communicate with you about products or services that may be of interest to you; to conﬁrm, update and improve our records, and to analyze and develop our relationship with you;</li>
              <li>To conﬁrm, update and improve our records, and to analyze and develop our relationship with you;</li>
              <li>To deal with enquiries and complaints made by or about you relating to the Services;</li>
              <li>To seek your views or comments on the Services;</li>
              <li>To carry out training relating to our Services;</li>
              <li>For internal administrative and technical operations to maintain the security of the Services and to keep our network and information systems updated, patched and secure;</li>
              <li>To monitor compliance with the rules governing the Services;</li>
              <li>To request that you complete surveys and/or research questionnaires related to current or future services that we may offer;</li>
              <li>To (i) comply with legal obligations; (ii) respond to requests from competent authorities; (iii) protect our interests; (iv) protect our rights, safety or property, and/or that of our partners, you or others; and (v) enforce or defend our legal rights.</li>
            </ul>
            <p className="text-gray-600 mb-4">
              In the event that you utilize a portion of the Services which requires your speciﬁc GPS location, we will obtain your consent before doing so.
            </p>
            <p className="text-gray-600 mb-4">
              If you apply to work for us, we will use your personal information in the following ways as necessary in our legitimate interests, or where you have given your consent to such processing to the extent required by applicable law (such consent can be withdrawn at any time, subject to restrictions permitted by such law) and to decide whether to enter into a contract with you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>To assess your skills, qualiﬁcations, and suitability for the role you have applied for;</li>
              <li>To carry out background and reference checks, where applicable;</li>
              <li>To communicate with you about the recruitment process;</li>
              <li>To keep records related to our hiring processes; and</li>
              <li>To comply with legal or regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">3. WHEN DO WE SHARE PERSONAL INFORMATION?</h2>
            <p className="text-gray-600 mb-4">
              There are circumstances where we wish to share or are compelled to disclose your personal information to third parties. This will only take place in accordance with applicable law and for the purposes listed in this Privacy Policy.
            </p>
            <p className="text-gray-600 mb-4">
              To the extent permitted by applicable law, we may share your personal information with the following third parties for the purposes listed in this Privacy Policy:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Our afﬁliated companies and ofﬁces.</li>
              <li>Our professional advisors. Including our auditors, accountants, lawyers, consultants, and IT forensic specialists.</li>
              <li>Trusted third-party service providers. Including those providers who perform services on our behalf in connection with our Services. The services provided by such third parties include services in the following categories: processing payments on our behalf, sending marketing communications on our behalf, authenticating identities on our behalf, helping us to create or maintain our databases, helping us to research or analyze data relating to visitors to our Services and maintaining the security of our cloud-hosting services, backend support services, data analysis and visualization support services, insurance services, and commissioned mailing house services.</li>
              <li>Another legal entity. On a temporary or permanent basis, as required for the purposes of a joint venture, collaboration, ﬁnancing, sale, merger, reorganization, change of legal form, dissolution or similar event.</li>
              <li>A successor organisation or other legal entity. In the case of a merger, ﬁnancing, acquisition or dissolution, transition, or proceeding involving the sale, transfer, divestiture, or disclosure of all or a portion of our business or assets. Except to the extent required by applicable law, we do not guarantee that any entity receiving your information in connection with one of these transactions will comply with all of the terms of this Privacy Policy following such transaction.</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Fraud and threat protection. We may disclose your personal information to public authorities and other third parties like lawyers, consultants, or IT forensic specialists when obligated or permitted to do so by law, applicable regulations, governmental and quasi-governmental requests, court orders or subpoenas, and to protect our rights, investigate, prevent, or take action regarding suspected, or actual prohibited activities, including but not limited to fraud and situations involving potential threats to the physical safety of any person. Except to the extent prohibited by applicable law, we reserve the right to disclose information that we collect to law enforcement or other government ofﬁcials, as we, in our sole and absolute discretion, deem necessary or appropriate, to protect our Services, to comply with legal obligations or carry out tasks in the public interest.
            </p>
            <p className="text-gray-600 mb-4">
              We may share aggregated or anonymous information that cannot identify you with third parties, including but not limited to advisors, advertisers, analytics providers, and investors, for the purpose of conducting business and improving the Services.
            </p>
            <p className="text-gray-600 mb-4">
              We require all third parties to respect the security of your personal information and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal information for their own purposes and only permit them to process your personal information for speciﬁed purposes and in accordance with our instructions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">4. SECURITY</h2>
            <p className="text-gray-600 mb-4">
              We are concerned about safeguarding the conﬁdentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our services. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">5. CHILDREN</h2>
            <p className="text-gray-600 mb-4">
              We do not knowingly collect or store personal information from anyone under the age of 13, or such higher age as required by applicable law, unless or except as permitted by applicable law. ANY PERSON WHO VISITS ANY OF THE WEBSITES OR USES ANY OF THE MOBILE APPS REPRESENTS TO US THAT THEY ARE 13 YEARS OF AGE OR OLDER OR SUCH HIGHER AGE AS REQUIRED BY APPLICABLE LAW AND HAS READ AND WILL ADHERE TO OUR ONLINE SAFETY AND BEST PRACTICES GUIDELINES. If we are made aware that we have received personal information from someone under 13, or such higher age as required by applicable law. We will use reasonable efforts to remove that information from our records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">6. PRIVACY POLICY CHANGES</h2>
            <p className="text-gray-600 mb-4">
              We may change this Policy from time to time. The effective date of the amended Policy will be upon posting the amended Policy, unless a different date is speciﬁed. Your continued access or use of the Services after the effective date of the amended Policy, shall constitute your acceptance of the amended Policy. In any event, if you do not consent to the amended Policy, we may terminate your App or Web Service account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">7. TRANSFER OF PERSONAL INFORMATION</h2>
            <p className="text-gray-600 mb-4">
              The information we collect is stored in the United States and is subject to US federal and state laws. If you are accessing our Services from other jurisdictions, please note that you are transferring your personal information to us in the United States, where data protection and privacy laws may be less strict than your country's laws.
            </p>
            <p className="text-gray-600 mb-4">
              By using our Services, you conﬁrm that your personal information will be accessed or transferred to us by us in the jurisdictions where we operate (including, without limitation, in the United States, Norway and Lithuania) and accessed or otherwise transferred to our employees, afﬁliates, partners and service providers around the world, in accordance with this Privacy Policy.
            </p>
            <p className="text-gray-600 mb-4">
              Where required by applicable law, we will take appropriate measures to ensure adequate protection of your personal information when it is transferred internationally and, if necessary, seek your prior consent. friend. Such measures may include the use of data transfer agreements or formal transfer mechanisms, such as contractual provisions approved by a data authority. For example, if you are located in the EEA, we may store your personal information as described in this Privacy Policy outside of the EEA. When we transfer EEA personal information to a third party located in a country outside the EEA that is not recognized by the European Commission or other relevant authority, to ensure an appropriate level of protection, We do perform various steps, including implementing required data transfer tools, such as standard contractual terms approved by the European Commission, or by selecting recipients with a binding Code of Conduct. company (“BCR”), to help secure your rights and protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">8. THIRD-PARTY SERVICES</h2>
            <p className="text-gray-600 mb-4">
              Please be aware that while using the Services, you may be directed (via hyperlinks or other means) to, or be able to interact with, third-party websites, apps, services and online communities that are not afﬁliated with us (such as Facebook, YouTube). Moreover, if the Services integrate with a third-party service, the application programming interface (API) that performs the integration will enable the relevant third party to serve you certain content as well as access some of your Account Content.
            </p>
            <p className="text-gray-600 mb-4">
              For example, if you wish to upload or otherwise share your Account Content to an integrated third-party service such as YouTube or TikTok, or to make use of certain functionality in those services, the API will enable the applicable third party to access your Account Content (such as your photo library).
            </p>
            <p className="text-gray-600 mb-4">
              Additionally, when you pay for fee-based Services or items, your payment will be processed by third party payment processors, such as Google’s or Apple’s in-app purchase mechanism. Any personal data you provide in connection therewith is provided to the applicable third party. We do not control, and are not responsible for, the privacy practices of such third parties, or for their content, products and services, and we encourage you to read the terms and conditions and privacy policies of each third party that you choose to use or interact with.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">9. ACCESS AND CHANGES TO PERSONAL INFORMATION; ACCOUNT TERMINATION</h2>
            <p className="text-gray-600 mb-4">
              You may at any time review or change your personally identiﬁable information by going to your account settings. Upon your request via your account settings, we will deactivate or delete your account and contact information from our active databases in accordance with our deactivation policy and applicable law.
            </p>
            <p className="text-gray-600 mb-4">
              Should you ever decide to delete your Account, you may do so by emailing{" "}
              <a href="mailto:support@newwaylabs.co" className="text-blue-600 hover:text-blue-800">
                support@newwaylabs.co
              </a>
              . If you terminate your Account, any association between your Account and personal data we store will no longer be accessible through your Account. However, given the nature of sharing on certain Services, any public activity on your Account prior to deletion will remain stored on our servers and will remain accessible to the public.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">10. YOUR RIGHTS</h2>
            <p className="text-gray-600 mb-4">
              You have the right to access, update or delete your personal data
            </p>
            <p className="text-gray-600 mb-4">
              The following data subject rights apply if you are in the EEA and may apply to you in other jurisdictions:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>To know what personal data is being collected about you;</li>
              <li>To access the personal data about you that we store on our systems (for which we reserve the right to charge an appropriate administrative fee where permitted by applicable law);</li>
              <li>To have us update or correct it (if it is inaccurate or misleading);</li>
              <li>To have us delete it (although there may be circumstances in which we are required to retain your personal data, for example for the establishment, exercise or defense of legal claims);</li>
              <li>You have the right to object to, or to request restriction of, the processing of personal data;</li>
              <li>You have the right to data portability. This means that you may have the right to receive your personal data in a structured, commonly used and machine-readable format, and that you have the right to transmit that data to another controller;</li>
              <li>You have the right to object to proﬁling;</li>
              <li>You have the right to know whether your personal data is sold or disclosed and to whom;</li>
              <li>You have the right to say no to the sale of your personal data;</li>
              <li>You have the right to withdraw your consent at any time. Please note that there may be circumstances in which we are entitled to continue processing your personal data, in particular if the processing is required to meet our legal and regulatory obligations. Also, please note that the withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal;</li>
              <li>You also have a right to request certain details of the basis on which your personal data is transferred outside the EEA, but data transfer agreements and/or other details may need to be partially redacted for reasons of commercial conﬁdentiality;</li>
            </ul>
            <p className="text-gray-600 mb-4">
              If you wish to exercise any of these rights, please contact us (see the "Contact Us" section). Please note that in certain circumstances, we may not be the party which holds your personal data, and we may refer you to the party (such as the App Marketplace) which does. Subject to legal and other permissible considerations, we will make reasonable efforts to honor your request promptly in accordance with applicable law or inform you if we require further information in order to fulﬁl your request.
            </p>
            <p className="text-gray-600 mb-4">
              When processing your request, we may ask you for additional information to conﬁrm or verify your identity and for security purposes, before processing or honoring your request. We reserve the right to charge a fee where permitted by law, for instance if your request is manifestly unfounded or excessive. In such cases, we may charge a reasonable fee, or refuse to act on the request. In either case, we will communicate our choices and explain the reasons behind it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">11. INFORMATION FOR CALIFONIAN CONSUMERS</h2>
            <p className="text-gray-600 mb-4">
              This part of the document integrates with and supplements the information contained in the rest of the privacy policy and is provided by the business running this Application and, if the case may be, its parent, subsidiaries and afﬁliates (for the purposes of this section referred to collectively as “we”, “us”, “our”).
            </p>
            <p className="text-gray-600 mb-4">
              The provisions contained in this section apply to all Users who are consumers residing in the state of California, United States of America, according to "The California Consumer Privacy Act of 2018" (Users are referred to below, simply as “you”, “your”, “yours”), and, for such consumers, these provisions supersede any other possibly divergent or conﬂicting provisions contained in the privacy policy.
            </p>
            <p className="text-gray-600 mb-4">
              This part of the document uses the term “personal information“ as it is deﬁned in The California Consumer Privacy Act (CCPA).
            </p>
            <h3 className="text-xl font-semibold text-black mb-2">a. Categories of personal information collected, disclosed or sold</h3>
            <p className="text-gray-600 mb-4">
              In this section we summarize the categories of personal information that we've collected, disclosed or sold and the purposes thereof. You can read about these activities in detail in the section titled “Detailed information on the processing of Personal Data” within this document.
            </p>
            <p className="text-gray-600 mb-4">Information we collect: the categories of personal information we collect</p>
            <p className="text-gray-600 mb-4">
              We have collected the following categories of personal information about you: identiﬁers, commercial information, internet information, geolocation data and inferred information.
            </p>
            <p className="text-gray-600 mb-4">
              We will not collect additional categories of personal information without notifying you.
            </p>
            <p className="text-gray-600 mb-4">How we collect information: what are the sources of the personal information we collect?</p>
            <p className="text-gray-600 mb-4">
              We collect the above mentioned categories of personal information, either directly or indirectly, from you when you use this Application.
            </p>
            <p className="text-gray-600 mb-4">
              For example, you directly provide your personal information when you submit requests via any forms on this Application. You also provide personal information indirectly when you navigate this Application, as personal information about you is automatically observed and collected. Finally, we may collect your personal information from third parties that work with us in connection with the Service or with the functioning of this Application and features thereof.
            </p>
            <p className="text-gray-600 mb-4">How we use the information we collect: sharing and disclosing of your personal information with third parties for a business purpose</p>
            <p className="text-gray-600 mb-4">
              We may disclose the personal information we collect about you to a third party for business purposes. In this case, we enter a written agreement with such third party that requires the recipient to both keep the personal information conﬁdential and not use it for any purpose(s) other than those necessary for the performance of the agreement.
            </p>
            <p className="text-gray-600 mb-4">
              We may also disclose your personal information to third parties when you explicitly ask or authorize us to do so, in order to provide you with our Service.
            </p>
            <p className="text-gray-600 mb-4">
              To ﬁnd out more about the purposes of processing, please refer to the relevant section of this document.
            </p>
            <p className="text-gray-600 mb-4">Sale of your personal information</p>
            <p className="text-gray-600 mb-4">
              For our purposes, the word “sale” means any “selling, renting, releasing, disclosing, disseminating, making available, transferring or otherwise communicating orally, in writing, or by electronic means, a consumer's personal information by the business to another business or a third party, for monetary or other valuable consideration”.
            </p>
            <p className="text-gray-600 mb-4">
              This means that, for example, a sale can happen whenever an application runs ads, or makes statistical analyses on the trafﬁc or views, or simply because it uses tools such as social network plugins and the like.
            </p>
            <p className="text-gray-600 mb-4">Your right to opt out of the sale of personal information</p>
            <p className="text-gray-600 mb-4">
              You have the right to opt out of the sale of your personal information. This means that whenever you request us to stop selling your data, we will abide by your request.Such requests can be made freely, at any time, without submitting any veriﬁable request, simply by following the instructions below.
            </p>
            <p className="text-gray-600 mb-4">Instructions to opt out of the sale of personal information</p>
            <p className="text-gray-600 mb-4">
              If you’d like to know more, or exercise your right to opt out in regard to all the sales carried out by this Application, both online and ofﬂine, you can contact us for further information using the contact details provided in this document.
            </p>
            <p className="text-gray-600 mb-4">What are the purposes for which we use your personal information?</p>
            <p className="text-gray-600 mb-4">
              We may use your personal information to allow the operational functioning of this Application and features thereof (“business purposes”). In such cases, your personal information will be processed in a fashion necessary and proportionate to the business purpose for which it was collected, and strictly within the limits of compatible operational purposes.
            </p>
            <p className="text-gray-600 mb-4">
              We may also use your personal information for other reasons such as for commercial purposes (as indicated within the section “Detailed information on the processing of Personal Data” within this document), as well as for complying with the law and defending our rights before the competent authorities where our rights and interests are threatened or we suffer an actual damage.
            </p>
            <p className="text-gray-600 mb-4">
              We will not use your personal information for different, unrelated, or incompatible purposes without notifying you.
            </p>
            <h3 className="text-xl font-semibold text-black mb-2">b. Your California privacy rights and how to exercise them</h3>
            <p className="text-gray-600 mb-4">The right to know and to portability</p>
            <p className="text-gray-600 mb-4">
              You have the right to request that we disclose to you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>The categories and sources of the personal information that we collect about you, the purposes for which we use your information and with whom such information is shared;</li>
              <li>In case of sale of personal information or disclosure for a business purpose, two separate lists where we disclose:
                <ul className="list-disc list-inside ml-8">
                  <li>Or sales, the personal information categories purchased by each category of recipient; and</li>
                  <li>For disclosures for a business purpose, the personal information categories obtained by each category of recipient.</li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-600 mb-4">
              The disclosure described above will be limited to the personal information collected or used over the past 12 months.
            </p>
            <p className="text-gray-600 mb-4">
              If we deliver our response electronically, the information enclosed will be "portable", i.e. delivered in an easily usable format to enable you to transmit the information to another entity without hindrance – provided that this is technically feasible.
            </p>
            <p className="text-gray-600 mb-4">The right to request the deletion of your personal information</p>
            <p className="text-gray-600 mb-4">
              You have the right to request that we delete any of your personal information, subject to exceptions set forth by the law (such as, including but not limited to, where the information is used to identify and repair errors on this Application, to detect security incidents and protect against fraudulent or illegal activities, to exercise certain rights etc.).
            </p>
            <p className="text-gray-600 mb-4">
              If no legal exception applies, as a result of exercising your right, we will delete your personal information and direct any of our service providers to do so.
            </p>
            <p className="text-gray-600 mb-4">How to exercise your rights</p>
            <p className="text-gray-600 mb-4">
              To exercise the rights described above, you need to submit your veriﬁable request to us by contacting us via the details provided in this document.
            </p>
            <p className="text-gray-600 mb-4">
              For us to respond to your request, it’s necessary that we know who you are. Therefore, you can only exercise the above rights by making a veriﬁable request which must:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Provide sufﬁcient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative;</li>
              <li>Escribe your request with sufﬁcient detail that allows us to properly understand, evaluate, and respond to it.</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We will not respond to any request if we are unable to verify your identity and therefore conﬁrm the personal information in our possession actually relates to you.
            </p>
            <p className="text-gray-600 mb-4">
              If you cannot personally submit a veriﬁable request, you can authorize a person registered with the California Secretary of State to act on your behalf.
            </p>
            <p className="text-gray-600 mb-4">
              If you are an adult, you can make a veriﬁable request on behalf of a minor under your parental authority.
            </p>
            <p className="text-gray-600 mb-4">
              You can submit a maximum number of 2 requests over a period of 12 months.
            </p>
            <p className="text-gray-600 mb-4">How and when we are expected to handle your request</p>
            <p className="text-gray-600 mb-4">
              We will conﬁrm receipt of your veriﬁable request within 10 days and provide information about how we will process your request.
            </p>
            <p className="text-gray-600 mb-4">
              We will respond to your request within 45 days of its receipt. Should we need more time, we will explain to you the reasons why, and how much more time we need. In this regard, please note that we may take up to 90 days to fulﬁll your request.
            </p>
            <p className="text-gray-600 mb-4">
              Our disclosure(s) will cover the preceding 12 month period.
            </p>
            <p className="text-gray-600 mb-4">
              Should we deny your request, we will explain you the reasons behind our denial.
            </p>
            <p className="text-gray-600 mb-4">
              We do not charge a fee to process or respond to your veriﬁable request unless such request is manifestly unfounded or excessive. In such cases, we may charge a reasonable fee, or refuse to act on the request. In either case, we will communicate our choices and explain the reasons behind it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">12. PAYMENT</h2>
            <p className="text-gray-600 mb-4">
              You may need to pay for different things to access and use certain Products or Services. We recommend that you read these terms of use before initiating payment.
            </p>
            <p className="text-gray-600 mb-4">
              Payment Processor: All ﬁnancial transactions performed in connection with the Service will be processed by a third party in accordance with its terms of use, privacy policy and/or any other payment terms and conditions. any current math. We encourage you to inquire about the activities of such third parties. In no event will We be liable for the actions or failure of any third party payment processor, including but not limited to system downtime or discontinuance of payment services.
            </p>
            <p className="text-gray-600 mb-4">
              You agree to pay all applicable fees and taxes due to you or anyone using the BetterApp account registered with you. We may modify prices for goods and services provided through the Service at any time. All information you provide in connection with a purchase or other transaction or monetary transaction interaction with the Service must be accurate, complete, and current. You agree to pay all fees incurred by users of a credit card, debit card or other payment method used in connection with a purchase or other monetary transaction or interaction with the Service. at the rates in effect when such charges are incurred. You will pay any applicable taxes, if any, in connection with any such monetary purchase, transaction or interaction.
            </p>
            <p className="text-gray-600 mb-4">
              We offer free trials for certain types of paid subscriptions to allow you to try our services. We reserve the right to set eligibility requirements for a free trial. At the end of your free trial, we will charge the relevant subscription fee for the next billing cycle to your designated payment method, unless you cancel your previous subscription.
            </p>
            <p className="text-gray-600 mb-4">
              If you purchase an auto-repeating recurring subscription, your Payment Method will continue to be billed for the subscription until you cancel. After your initial subscription commitment period and again after any subsequent subscription periods, your subscription will automatically continue for an additional equivalent amount of time, at the rate you agreed upon registration. You may unsubscribe at any time as directed by the Payment Method.
            </p>
            <p className="text-gray-600 mb-4">
              You may cancel your use of the Service at any time; however, there is no refund for cancellation. In the event that We suspend or terminate your use of the Service or this Agreement, you understand and agree that you will not receive a refund or exchange for any credit, for any length of time. unused subscription, any license or subscription fee for any part of the Service, any content or data associated with you, or for anything else.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">13. CONTACT US</h2>
            <p className="text-gray-600">
              For the purposes of the General Data Protection Regulation ("GDPR”) and other applicable global laws, We are the entity responsible for your personal information (“the controller”). data”).
            </p>
            <p className="text-gray-600">
              If you have any questions regarding our Privacy Policy, or how we collect, use or process your personal information, including the transfer or forwarding of your personal information. your personal information outside your jurisdiction, please contact our privacy ofﬁcer at:
            </p>
            <p className="text-gray-600">
              Email:{" "}
              <a href="mailto:support@newwaylabs.co" className="text-blue-600 hover:text-blue-800">
                support@newwaylabs.co
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

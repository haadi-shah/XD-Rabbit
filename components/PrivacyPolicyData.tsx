import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet,View } from 'react-native';



const LoginScreen = props => {
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.text}>
            At [Your Company Name], we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information when you use our website or services. By using our website or services, you consent to the collection, use, and disclosure of your personal information in accordance with this policy.
          </Text>
          <Text style={styles.subtitle}>Information We Collect</Text>
          <Text style={styles.text}>
            We may collect the following information when you use our website or services:
            <Text style={styles.list}>- Personal information, such as your name, email address, and phone number, that you provide to us when you register for an account, subscribe to our newsletter, or fill out a form on our website.</Text>
            <Text style={styles.list}>- Usage information, such as your IP address, browser type, device type, and operating system, which we automatically collect when you access our website or services.</Text>
            <Text style={styles.list}>- Feedback and other information that you provide to us when you communicate with us, such as through email, phone, or chat support.</Text>
          </Text>
          <Text style={styles.subtitle}>How We Use Your Information</Text>
          <Text style={styles.text}>
            We use your information for the following purposes:
            <Text style={styles.list}>- To provide and improve our website and services.</Text>
            <Text style={styles.list}>- To communicate with you, such as to respond to your inquiries, send you newsletters, or provide you with updates about our website and services.</Text>
            <Text style={styles.list}>- To personalize your experience on our website and services.</Text>
            <Text style={styles.list}>- To comply with legal obligations, such as to respond to legal requests or to detect and prevent fraud.</Text>
          </Text>
          <Text style={styles.subtitle}>How We Disclose Your Information</Text>
          <Text style={styles.text}>
            We may disclose your information to the following parties:
            <Text style={styles.list}>- Service providers, such as email service providers or hosting providers, who assist us in operating our website and services.</Text>
            <Text style={styles.list}>- Business partners, such as advertisers or affiliates, who may use your information to offer you products or services that may be of interest to you.</Text>
            <Text style={styles.list}>- Law enforcement or regulatory authorities, such as to comply with a legal request or to protect our rights.</Text>
          </Text>
          <Text style={styles.subtitle}>Data Retention</Text>
          <Text style={styles.text}>
            We retain your information for as long as necessary to provide you with our services, comply with legal obligations, or resolve disputes. We may also retain and use your information as necessary to comply with our legal obligations, resolve disputes, or enforce our agreements.
          </Text>
          <Text style={styles.subtitle}>Security</Text>
          <Text style={styles.text}>
            We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee the absolute security of your information.
          </Text>
          <Text style={styles.subtitle}>Your Rights</Text>
          <Text style={styles.text}>
            You have certain rights with respect to your personal information, including the right to access, correct, or delete your information. You may also have the right to object to or restrict certain types of processing of your information. To exercise these rights, please contact us using the contact information below.
          </Text>
          <Text style={styles.subtitle}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions or concerns about this Privacy Policy, please contact us at [Your Company Email].
          </Text>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginBottom:10,
        padding:12
        
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
      },
      text: {
        fontSize: 16,
        color: '#333',
        lineHeight: 20,
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
        marginBottom: 10,
      },
      list: {
        marginLeft: 20,
      },
    });
    

export default LoginScreen;  
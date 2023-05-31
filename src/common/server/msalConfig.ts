import * as msal from "@azure/msal-node";

export const msalConfig = {
  auth: {
    clientId: process.env.CLIENT_ID || "", // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
    authority: `${process.env.GRAPH_URL}${process.env.TENANT_ID}/` || "", // Full directory URL, in the form of https://login.microsoftonline.com/<tenant>
    clientSecret: process.env.CLIENT_SECRET || "", // Client secret generated from the app registration in Azure portal
  },
};

export const msalInstance = new msal.ConfidentialClientApplication(msalConfig);
export const cryptoProvider = new msal.CryptoProvider();

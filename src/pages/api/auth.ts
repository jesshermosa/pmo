import { NextApiRequest, NextApiResponse } from "next";
import * as msal from "@azure/msal-node";

async function callApi(endpoint: string, accessToken: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  console.log("request made to web API at: " + new Date().toString());

  try {
    const response = await fetch(endpoint, options);
    return await response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}

const handler = async (_req: NextApiRequest, res: NextApiResponse<any>) => {
  /**
   * Configuration object to be passed to MSAL instance on creation.
   * For a full list of MSAL Node configuration parameters, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md
   */
  const msalConfig = {
    auth: {
      clientId: process.env.CLIENT_ID ?? "",
      authority: process.env.AAD_ENDPOINT + "/" + process.env.TENANT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
  };

  /**
   * With client credentials flows permissions need to be granted in the portal by a tenant administrator.
   * The scope is always in the format '<resource>/.default'. For more, visit:
   * https://learn.microsoft.com/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow
   */
  const tokenRequest = {
    scopes: [process.env.GRAPH_ENDPOINT + "/.default"],
  };

  const apiConfig = {
    uri: process.env.GRAPH_ENDPOINT + "/v1.0/sites/root",
  };

  /**
   * Initialize a confidential client application. For more info, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/initialize-confidential-client-application.md
   */
  const cca = new msal.ConfidentialClientApplication(msalConfig);

  /**
   * Acquires token with client credentials.
   * @param {object} tokenRequest
   */
  async function getToken(tokenRequest: msal.ClientCredentialRequest) {
    return await cca.acquireTokenByClientCredential(tokenRequest);
  }

  const authResponse = await getToken(tokenRequest);

  console.log("authResponse", authResponse);
  if (!authResponse) {
    return res.status(500);
  }

  let users = await callApi(apiConfig.uri, authResponse.accessToken);
  // display result
  console.log("users", users);

  res.status(200);
};

export default handler;

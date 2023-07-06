/**
 * Send logs returns "Request accepted for processing (always 202 empty JSON)." response
 */

const { client, v2 } = require("@datadog/datadog-api-client")

process.env['DD_SITE'] = "us3.datadoghq.com"
 const configuration = client.createConfiguration();
 const apiInstance = new v2.LogsApi(configuration);

 const message = {
  appName: "featureB",
  environment: "test",
  context: "test",
  capabilityCount: 23423,
  capabilityKeys: ["test", "two"],
  capabilityError: "test",
  capabilityName: "test",
  capabilityVersions: ["test", "three"],
  factoryVersion: "test",
}


 const params = {
   body: [
     {
       ddsource: "nginx",
       ddtags: "application-name:kap_web_client,version:5.1",
       hostname: "i-012345678",
       message: `hello ${JSON.stringify(message)}`,
       service: "payment",
       additionalProperties: {
         status: "info",
       },
     },
   ],
 };
 
 apiInstance
   .submitLog(params)
   .then((data) => {
     console.log(
       "API called successfully. Returned data: " + JSON.stringify(data)
     );
   })
   .catch((error) => console.error(error));
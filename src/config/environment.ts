////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { processString } from "@/common/utils/environment/processString"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ClientEnvironment = {
  VITE_APP_NAME: string
}

type ClientConfiguration = {
  APP_NAME: string
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * a function that extracts and validates each value from the selected environment variables
 * @returns an object containing all the values from the selected environment variables
 * @see {@link ClientEnvironment}
 */
function processClientEnvironment(): ClientEnvironment {
  return {
    VITE_APP_NAME: processString("VITE_APP_NAME", true)
  }
}

/**
 * a function that takes all the values from the processed environment variables and arranges them into a configuration object
 * @param clientEnvironment - an object containing all the values from the processed environment variables
 * @returns an object containing the configuration values for the application
 */
function prepareClientConfiguration(clientEnvironment: ClientEnvironment): ClientConfiguration {
  return {
    APP_NAME: clientEnvironment.VITE_APP_NAME
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This function does not need to change when adding or removing environment variables to be processed.

/**
 * a function that wraps {@link processClientEnvironment} with logging and error handling
 * @returns an object containing all the values from the selected environment variables
 */
function processClientEnvironmentWrapper(): ClientEnvironment {
  try {
    console.log("Processing Client Environment")
    const clientEnvironment: ClientEnvironment = processClientEnvironment()
    console.log("Successfully Processed Client Environment")
    return clientEnvironment
  }
  catch (object: unknown) {
    const error = object as Error
    console.error("Error Processing Client Environment")
    console.log(error)
    throw error
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let clientConfig: ClientConfiguration

try {
  const clientEnvironment: ClientEnvironment = processClientEnvironmentWrapper();
  clientConfig = prepareClientConfiguration(clientEnvironment);
}
catch (object: unknown) {
  throw new Error("Configuration Error")
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

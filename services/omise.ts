// @ts-ignore
import * as base64 from "base-64";
import { ChargeCard, CreateToken } from "@/hooks/usePayment";

const vaultEndpoint = "https://vault.omise.co/";
const apiEndpoint = "https://api.omise.co/";

export class ReactNativeOmise {
  constructor() {
    this.createToken = this.createToken.bind(this);
  }

  createToken(data: CreateToken): Promise<any> {
    const tokenEndpoint = vaultEndpoint + "tokens";
    return new Promise((resolve, reject) => {
      return fetch(tokenEndpoint, {
        method: "POST",
        cache: "no-cache",
        headers: {
          Authorization:
            "Basic " + base64.encode("pkey_test_5wvisbxphp1zapg8ie6" + ":"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          if (response.ok && response.status === 200) {
            resolve(await response.json());
          } else {
            console.log("response not ok", response);
            reject(await response.json());
          }
        })
        .catch((error) => resolve(error));
    });
  }

  chargeCard(data: ChargeCard): Promise<any> {
    const chargeEndpoint = apiEndpoint + "charges";
    return new Promise((resolve, reject) => {
      return fetch(chargeEndpoint, {
        method: "POST",
        cache: "no-cache",
        headers: {
          Authorization:
            "Basic " + base64.encode("skey_test_5wvisdjjoqmfof5npzw" + ":"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          if (response.ok && response.status === 200) {
            resolve(await response.json());
          } else {
            console.log("response not ok", response);
            reject(await response.json());
          }
        })
        .catch((error) => resolve(error));
    });
  }
}

export const reactNativeOmise = new ReactNativeOmise();

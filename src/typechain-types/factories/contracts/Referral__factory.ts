/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Referral, ReferralInterface } from "../../contracts/Referral";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "ref",
        type: "address",
      },
    ],
    name: "NewReferral",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "referrals",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registerReferral",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class Referral__factory {
  static readonly abi = _abi;
  static createInterface(): ReferralInterface {
    return new utils.Interface(_abi) as ReferralInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Referral {
    return new Contract(address, _abi, signerOrProvider) as Referral;
  }
}

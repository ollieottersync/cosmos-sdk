(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{638:function(g,e,t){"use strict";t.r(e);var I=t(1),C=Object(I.a)({},(function(){var g=this,e=g.$createElement,t=g._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[t("h1",{attrs:{id:"accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[g._v("#")]),g._v(" Accounts")]),g._v(" "),t("p",{attrs:{synopsis:""}},[g._v("This document describes the in-built account and public key system of the Cosmos SDK.")]),g._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[g._v("#")]),g._v(" Pre-requisite Readings")]),g._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[g._v("Anatomy of a Cosmos SDK Application")])],1)]),g._v(" "),t("h2",{attrs:{id:"account-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#account-definition"}},[g._v("#")]),g._v(" Account Definition")]),g._v(" "),t("p",[g._v("In the Cosmos SDK, an "),t("em",[g._v("account")]),g._v(" designates a pair of "),t("em",[g._v("public key")]),g._v(" "),t("code",[g._v("PubKey")]),g._v(" and "),t("em",[g._v("private key")]),g._v(" "),t("code",[g._v("PrivKey")]),g._v(". The "),t("code",[g._v("PubKey")]),g._v(" can be derived to generate various "),t("code",[g._v("Addresses")]),g._v(", which are used to identify users (among other parties) in the application. "),t("code",[g._v("Addresses")]),g._v(" are also associated with "),t("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[t("code",[g._v("message")]),g._v("s")]),g._v(" to identify the sender of the "),t("code",[g._v("message")]),g._v(". The "),t("code",[g._v("PrivKey")]),g._v(" is used to generate "),t("a",{attrs:{href:"#signatures"}},[g._v("digital signatures")]),g._v(" to prove that an "),t("code",[g._v("Address")]),g._v(" associated with the "),t("code",[g._v("PrivKey")]),g._v(" approved of a given "),t("code",[g._v("message")]),g._v(".")],1),g._v(" "),t("p",[g._v("For HD key derivation the Cosmos SDK uses a standard called "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[g._v("BIP32"),t("OutboundLink")],1),g._v(". The BIP32 allows users to create an HD wallet (as specified in "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[g._v("BIP44"),t("OutboundLink")],1),g._v(") - a set of accounts derived from an initial secret seed. A seed is usually created from a 12- or 24-word mnemonic. A single seed can derive any number of "),t("code",[g._v("PrivKey")]),g._v("s using a one-way cryptographic function. Then, a "),t("code",[g._v("PubKey")]),g._v(" can be derived from the "),t("code",[g._v("PrivKey")]),g._v(". Naturally, the mnemonic is the most sensitive information, as private keys can always be re-generated if the mnemonic is preserved.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ICAgICBBY2NvdW50IDAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudCAxICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnQgMgoKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgIHwKfCAgICBBZGRyZXNzIDAgICAgIHwgICAgICAgICAgICAgIHwgICAgQWRkcmVzcyAxICAgICB8ICAgICAgICAgICAgICAgfCAgICBBZGRyZXNzIDIgICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHVibGljIGtleSAwICAgIHwgICAgICAgICAgICAgIHwgIFB1YmxpYyBrZXkgMSAgICB8ICAgICAgICAgICAgICAgfCAgUHVibGljIGtleSAyICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHJpdmF0ZSBrZXkgMCAgIHwgICAgICAgICAgICAgIHwgIFByaXZhdGUga2V5IDEgICB8ICAgICAgICAgICAgICAgfCAgUHJpdmF0ZSBrZXkgMiAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tKy0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE1hc3RlciBQcml2S2V5ICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLS0rLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTW5lbW9uaWMgKFNlZWQpICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLSsK"}}),g._v(" "),t("p",[g._v("In the Cosmos SDK, keys are stored and managed by using an object called a "),t("a",{attrs:{href:"#keyring"}},[t("code",[g._v("Keyring")])]),g._v(".")]),g._v(" "),t("h2",{attrs:{id:"keys-accounts-addresses-and-signatures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keys-accounts-addresses-and-signatures"}},[g._v("#")]),g._v(" Keys, accounts, addresses, and signatures")]),g._v(" "),t("p",[g._v("The principal way of authenticating a user is done using "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Digital_signature",target:"_blank",rel:"noopener noreferrer"}},[g._v("digital signatures"),t("OutboundLink")],1),g._v(". Users sign transactions using their own private key. Signature verification is done with the associated public key. For on-chain signature verification purposes, we store the public key in an "),t("code",[g._v("Account")]),g._v(" object (alongside other data required for a proper transaction validation).")]),g._v(" "),t("p",[g._v("In the node, all data is stored using Protocol Buffers serialization.")]),g._v(" "),t("p",[g._v("The Cosmos SDK supports the following digital key schemes for creating digital signatures:")]),g._v(" "),t("ul",[t("li",[t("code",[g._v("secp256k1")]),g._v(", as implemented in the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/crypto/keys/secp256k1/secp256k1.go",target:"_blank",rel:"noopener noreferrer"}},[g._v("Cosmos SDK's "),t("code",[g._v("crypto/keys/secp256k1")]),g._v(" package"),t("OutboundLink")],1),g._v(".")]),g._v(" "),t("li",[t("code",[g._v("secp256r1")]),g._v(", as implemented in the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/crypto/keys/secp256r1/pubkey.go",target:"_blank",rel:"noopener noreferrer"}},[g._v("Cosmos SDK's "),t("code",[g._v("crypto/keys/secp256r1")]),g._v(" package"),t("OutboundLink")],1),g._v(",")]),g._v(" "),t("li",[t("code",[g._v("tm-ed25519")]),g._v(", as implemented in the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/crypto/keys/ed25519/ed25519.go",target:"_blank",rel:"noopener noreferrer"}},[g._v("Cosmos SDK "),t("code",[g._v("crypto/keys/ed25519")]),g._v(" package"),t("OutboundLink")],1),g._v(". This scheme is supported only for the consensus validation.")])]),g._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}}),g._v(" "),t("th",{staticStyle:{"text-align":"center"}},[g._v("Address length in bytes")]),g._v(" "),t("th",{staticStyle:{"text-align":"center"}},[g._v("Public key length in bytes")]),g._v(" "),t("th",{staticStyle:{"text-align":"center"}},[g._v("Used for transaction authentication")]),g._v(" "),t("th",{staticStyle:{"text-align":"center"}},[g._v("Used for consensus (tendermint)")])])]),g._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[g._v("secp256k1")])]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("20")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("33")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("yes")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("no")])]),g._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[g._v("secp256r1")])]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("32")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("33")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("yes")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("no")])]),g._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[g._v("tm-ed25519")])]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("-- not used --")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("32")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("no")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("yes")])])])]),g._v(" "),t("h2",{attrs:{id:"addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#addresses"}},[g._v("#")]),g._v(" Addresses")]),g._v(" "),t("p",[t("code",[g._v("Addresses")]),g._v(" and "),t("code",[g._v("PubKey")]),g._v("s are both public information that identifies actors in the application. "),t("code",[g._v("Account")]),g._v(" is used to store authentication information. The basic account implementation is provided by a "),t("code",[g._v("BaseAccount")]),g._v(" object.")]),g._v(" "),t("p",[g._v("Each account is identified using "),t("code",[g._v("Address")]),g._v(" which is a sequence of bytes derived from a public key. In the Cosmos SDK, we define 3 types of addresses that specify a context where an account is used:")]),g._v(" "),t("ul",[t("li",[t("code",[g._v("AccAddress")]),g._v(" identifies users (the sender of a "),t("code",[g._v("message")]),g._v(").")]),g._v(" "),t("li",[t("code",[g._v("ValAddress")]),g._v(" identifies validator operators.")]),g._v(" "),t("li",[t("code",[g._v("ConsAddress")]),g._v(" identifies validator nodes that are participating in consensus. Validator nodes are derived using the "),t("strong",[t("code",[g._v("ed25519")])]),g._v(" curve.")])]),g._v(" "),t("p",[g._v("These types implement the "),t("code",[g._v("Address")]),g._v(" interface:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWRkcmVzcyBpcyBhIGNvbW1vbiBpbnRlcmZhY2UgZm9yIGRpZmZlcmVudCB0eXBlcyBvZiBhZGRyZXNzZXMgdXNlZCBieSB0aGUgU0RLCnR5cGUgQWRkcmVzcyBpbnRlcmZhY2UgewoJRXF1YWxzKEFkZHJlc3MpIGJvb2wKCUVtcHR5KCkgYm9vbAoJTWFyc2hhbCgpIChbXWJ5dGUsIGVycm9yKQoJTWFyc2hhbEpTT04oKSAoW11ieXRlLCBlcnJvcikKCUJ5dGVzKCkgW11ieXRlCglTdHJpbmcoKSBzdHJpbmcKCUZvcm1hdChzIGZtdC5TdGF0ZSwgdmVyYiBydW5lKQp9CgovLyBFbnN1cmUgdGhhdCBkaWZmZXJlbnQgYWRkcmVzcyB0eXBlcyBpbXBsZW1lbnQgdGhlIGludGVyZmFjZQp2YXIgXyBBZGRyZXNzID0gQWNjQWRkcmVzc3t9Cgp2YXIgKAoJXyBBZGRyZXNzID0gVmFsQWRkcmVzc3t9CglfIEFkZHJlc3MgPSBDb25zQWRkcmVzc3t9Cik="}})],1),g._v(" "),t("p",[g._v("Address construction algorithm is defined in "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-028-public-key-addresses.md",target:"_blank",rel:"noopener noreferrer"}},[g._v("ADR-28"),t("OutboundLink")],1),g._v(".\nHere is the standard way to obtain an account address from a "),t("code",[g._v("pub")]),g._v(" public key:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c2RrLkFjY0FkZHJlc3MocHViLkFkZHJlc3MoKS5CeXRlcygpKQo="}}),g._v(" "),t("p",[g._v("Of note, the "),t("code",[g._v("Marshal()")]),g._v(" and "),t("code",[g._v("Bytes()")]),g._v(" method both return the same raw "),t("code",[g._v("[]byte")]),g._v(" form of the address. "),t("code",[g._v("Marshal()")]),g._v(" is required for Protobuf compatibility.")]),g._v(" "),t("p",[g._v("For user interaction, addresses are formatted using "),t("a",{attrs:{href:"https://en.bitcoin.it/wiki/Bech32",target:"_blank",rel:"noopener noreferrer"}},[g._v("Bech32"),t("OutboundLink")],1),g._v(" and implemented by the "),t("code",[g._v("String")]),g._v(" method. The Bech32 method is the only supported format to use when interacting with a blockchain. The Bech32 human-readable part (Bech32 prefix) is used to denote an address type. Example:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RyaW5nIGltcGxlbWVudHMgdGhlIFN0cmluZ2VyIGludGVyZmFjZS4KZnVuYyAoYWEgQWNjQWRkcmVzcykgU3RyaW5nKCkgc3RyaW5nIHsKCWlmIGFhLkVtcHR5KCkgewoJCXJldHVybiAmcXVvdDsmcXVvdDsKCX0KCglrZXkgOj0gY29udi5VbnNhZmVCeXRlc1RvU3RyKGFhKQoJYWNjQWRkck11LkxvY2soKQoJZGVmZXIgYWNjQWRkck11LlVubG9jaygpCglhZGRyLCBvayA6PSBhY2NBZGRyQ2FjaGUuR2V0KGtleSkKCWlmIG9rIHsKCQlyZXR1cm4gYWRkci4oc3RyaW5nKQoJfQoJcmV0dXJuIGNhY2hlQmVjaDMyQWRkcihHZXRDb25maWcoKS5HZXRCZWNoMzJBY2NvdW50QWRkclByZWZpeCgpLCBhYSwgYWNjQWRkckNhY2hlLCBrZXkpCn0="}})],1),g._v(" "),t("table",[t("thead",[t("tr",[t("th"),g._v(" "),t("th",[g._v("Address Bech32 Prefix")])])]),g._v(" "),t("tbody",[t("tr",[t("td",[g._v("Accounts")]),g._v(" "),t("td",[g._v("cosmos")])]),g._v(" "),t("tr",[t("td",[g._v("Validator Operator")]),g._v(" "),t("td",[g._v("cosmosvaloper")])]),g._v(" "),t("tr",[t("td",[g._v("Consensus Nodes")]),g._v(" "),t("td",[g._v("cosmosvalcons")])])])]),g._v(" "),t("h3",{attrs:{id:"public-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#public-keys"}},[g._v("#")]),g._v(" Public Keys")]),g._v(" "),t("p",[g._v("Public keys in Cosmos SDK are defined by "),t("code",[g._v("cryptotypes.PubKey")]),g._v(" interface. Since public keys are saved in a store, "),t("code",[g._v("cryptotypes.PubKey")]),g._v(" extends the "),t("code",[g._v("proto.Message")]),g._v(" interface:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUHViS2V5IGRlZmluZXMgYSBwdWJsaWMga2V5IGFuZCBleHRlbmRzIHByb3RvLk1lc3NhZ2UuCnR5cGUgUHViS2V5IGludGVyZmFjZSB7Cglwcm90by5NZXNzYWdlCgoJQWRkcmVzcygpIEFkZHJlc3MKCUJ5dGVzKCkgW11ieXRlCglWZXJpZnlTaWduYXR1cmUobXNnIFtdYnl0ZSwgc2lnIFtdYnl0ZSkgYm9vbAoJRXF1YWxzKFB1YktleSkgYm9vbAoJVHlwZSgpIHN0cmluZwp9"}})],1),g._v(" "),t("p",[g._v("A compressed format is used for "),t("code",[g._v("secp256k1")]),g._v(" and "),t("code",[g._v("secp256r1")]),g._v(" serialization.")]),g._v(" "),t("ul",[t("li",[g._v("The first byte is a "),t("code",[g._v("0x02")]),g._v(" byte if the "),t("code",[g._v("y")]),g._v("-coordinate is the lexicographically largest of the two associated with the "),t("code",[g._v("x")]),g._v("-coordinate.")]),g._v(" "),t("li",[g._v("Otherwise the first byte is a "),t("code",[g._v("0x03")]),g._v(".")])]),g._v(" "),t("p",[g._v("This prefix is followed by the "),t("code",[g._v("x")]),g._v("-coordinate.")]),g._v(" "),t("p",[g._v("Public Keys are not used to reference accounts (or users) and in general are not used when composing transaction messages (with few exceptions: "),t("code",[g._v("MsgCreateValidator")]),g._v(", "),t("code",[g._v("Validator")]),g._v(" and "),t("code",[g._v("Multisig")]),g._v(" messages).\nFor user interactions, "),t("code",[g._v("PubKey")]),g._v(" is formatted using Protobufs JSON ("),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/codec/json.go#L14-L34",target:"_blank",rel:"noopener noreferrer"}},[g._v("ProtoMarshalJSON"),t("OutboundLink")],1),g._v(" function). Example:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3S2V5T3V0cHV0IGNyZWF0ZXMgYSBkZWZhdWx0IEtleU91dHB1dCBpbnN0YW5jZSB3aXRob3V0IE1uZW1vbmljLCBUaHJlc2hvbGQgYW5kIFB1YktleXMKZnVuYyBOZXdLZXlPdXRwdXQobmFtZSBzdHJpbmcsIGtleVR5cGUgS2V5VHlwZSwgYSBzZGsuQWRkcmVzcywgcGsgY3J5cHRvdHlwZXMuUHViS2V5KSAoS2V5T3V0cHV0LCBlcnJvcikgeyAvLyBub2xpbnQ6aW50ZXJmYWNlcgoJYXBrLCBlcnIgOj0gY29kZWN0eXBlcy5OZXdBbnlXaXRoVmFsdWUocGspCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gS2V5T3V0cHV0e30sIGVycgoJfQoJYnosIGVyciA6PSBjb2RlYy5Qcm90b01hcnNoYWxKU09OKGFwaywgbmlsKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIEtleU91dHB1dHt9LCBlcnIKCX0KCXJldHVybiBLZXlPdXRwdXR7CgkJTmFtZTogICAgbmFtZSwKCQlUeXBlOiAgICBrZXlUeXBlLlN0cmluZygpLAoJCUFkZHJlc3M6IGEuU3RyaW5nKCksCgkJUHViS2V5OiAgc3RyaW5nKGJ6KSwKCX0sIG5pbAp9"}})],1),g._v(" "),t("h2",{attrs:{id:"keyring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyring"}},[g._v("#")]),g._v(" Keyring")]),g._v(" "),t("p",[g._v("A "),t("code",[g._v("Keyring")]),g._v(" is an object that stores and manages accounts. In the Cosmos SDK, a "),t("code",[g._v("Keyring")]),g._v(" implementation follows the "),t("code",[g._v("Keyring")]),g._v(" interface:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBLZXlyaW5nIGludGVyZmFjZSB7CgkvLyBHZXQgdGhlIGJhY2tlbmQgdHlwZSB1c2VkIGluIHRoZSBrZXlyaW5nIGNvbmZpZzogJnF1b3Q7ZmlsZSZxdW90OywgJnF1b3Q7b3MmcXVvdDssICZxdW90O2t3YWxsZXQmcXVvdDssICZxdW90O3Bhc3MmcXVvdDssICZxdW90O3Rlc3QmcXVvdDssICZxdW90O21lbW9yeSZxdW90Oy4KCUJhY2tlbmQoKSBzdHJpbmcKCS8vIExpc3QgYWxsIGtleXMuCglMaXN0KCkgKFtdKlJlY29yZCwgZXJyb3IpCgoJLy8gU3VwcG9ydGVkIHNpZ25pbmcgYWxnb3JpdGhtcyBmb3IgS2V5cmluZyBhbmQgTGVkZ2VyIHJlc3BlY3RpdmVseS4KCVN1cHBvcnRlZEFsZ29yaXRobXMoKSAoU2lnbmluZ0FsZ29MaXN0LCBTaWduaW5nQWxnb0xpc3QpCgoJLy8gS2V5IGFuZCBLZXlCeUFkZHJlc3MgcmV0dXJuIGtleXMgYnkgdWlkIGFuZCBhZGRyZXNzIHJlc3BlY3RpdmVseS4KCUtleSh1aWQgc3RyaW5nKSAoKlJlY29yZCwgZXJyb3IpCglLZXlCeUFkZHJlc3MoYWRkcmVzcyBzZGsuQWRkcmVzcykgKCpSZWNvcmQsIGVycm9yKQoKCS8vIERlbGV0ZSBhbmQgRGVsZXRlQnlBZGRyZXNzIHJlbW92ZSBrZXlzIGZyb20gdGhlIGtleXJpbmcuCglEZWxldGUodWlkIHN0cmluZykgZXJyb3IKCURlbGV0ZUJ5QWRkcmVzcyhhZGRyZXNzIHNkay5BZGRyZXNzKSBlcnJvcgoKCS8vIFJlbmFtZSBhbiBleGlzdGluZyBrZXkgZnJvbSB0aGUgS2V5cmluZwoJUmVuYW1lKGZyb20gc3RyaW5nLCB0byBzdHJpbmcpIGVycm9yCgoJLy8gTmV3TW5lbW9uaWMgZ2VuZXJhdGVzIGEgbmV3IG1uZW1vbmljLCBkZXJpdmVzIGEgaGllcmFyY2hpY2FsIGRldGVybWluaXN0aWMga2V5IGZyb20gaXQsIGFuZAoJLy8gcGVyc2lzdHMgdGhlIGtleSB0byBzdG9yYWdlLiBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbW5lbW9uaWMgYW5kIHRoZSBrZXkgSW5mby4KCS8vIEl0IHJldHVybnMgYW4gZXJyb3IgaWYgaXQgZmFpbHMgdG8gZ2VuZXJhdGUgYSBrZXkgZm9yIHRoZSBnaXZlbiBhbGdvIHR5cGUsIG9yIGlmCgkvLyBhbm90aGVyIGtleSBpcyBhbHJlYWR5IHN0b3JlZCB1bmRlciB0aGUgc2FtZSBuYW1lIG9yIGFkZHJlc3MuCgkvLwoJLy8gQSBwYXNzcGhyYXNlIHNldCB0byB0aGUgZW1wdHkgc3RyaW5nIHdpbGwgc2V0IHRoZSBwYXNzcGhyYXNlIHRvIHRoZSBEZWZhdWx0QklQMzlQYXNzcGhyYXNlIHZhbHVlLgoJTmV3TW5lbW9uaWModWlkIHN0cmluZywgbGFuZ3VhZ2UgTGFuZ3VhZ2UsIGhkUGF0aCwgYmlwMzlQYXNzcGhyYXNlIHN0cmluZywgYWxnbyBTaWduYXR1cmVBbGdvKSAoKlJlY29yZCwgc3RyaW5nLCBlcnJvcikKCgkvLyBOZXdBY2NvdW50IGNvbnZlcnRzIGEgbW5lbW9uaWMgdG8gYSBwcml2YXRlIGtleSBhbmQgQklQLTM5IEhEIFBhdGggYW5kIHBlcnNpc3RzIGl0LgoJLy8gSXQgZmFpbHMgaWYgdGhlcmUgaXMgYW4gZXhpc3Rpbmcga2V5IEluZm8gd2l0aCB0aGUgc2FtZSBhZGRyZXNzLgoJTmV3QWNjb3VudCh1aWQsIG1uZW1vbmljLCBiaXAzOVBhc3NwaHJhc2UsIGhkUGF0aCBzdHJpbmcsIGFsZ28gU2lnbmF0dXJlQWxnbykgKCpSZWNvcmQsIGVycm9yKQoKCS8vIFNhdmVMZWRnZXJLZXkgcmV0cmlldmVzIGEgcHVibGljIGtleSByZWZlcmVuY2UgZnJvbSBhIExlZGdlciBkZXZpY2UgYW5kIHBlcnNpc3RzIGl0LgoJU2F2ZUxlZGdlcktleSh1aWQgc3RyaW5nLCBhbGdvIFNpZ25hdHVyZUFsZ28sIGhycCBzdHJpbmcsIGNvaW5UeXBlLCBhY2NvdW50LCBpbmRleCB1aW50MzIpICgqUmVjb3JkLCBlcnJvcikKCgkvLyBTYXZlT2ZmbGluZUtleSBzdG9yZXMgYSBwdWJsaWMga2V5IGFuZCByZXR1cm5zIHRoZSBwZXJzaXN0ZWQgSW5mbyBzdHJ1Y3R1cmUuCglTYXZlT2ZmbGluZUtleSh1aWQgc3RyaW5nLCBwdWJrZXkgdHlwZXMuUHViS2V5KSAoKlJlY29yZCwgZXJyb3IpCgoJLy8gU2F2ZU11bHRpc2lnIHN0b3JlcyBhbmQgcmV0dXJucyBhIG5ldyBtdWx0c2lnIChvZmZsaW5lKSBrZXkgcmVmZXJlbmNlLgoJU2F2ZU11bHRpc2lnKHVpZCBzdHJpbmcsIHB1YmtleSB0eXBlcy5QdWJLZXkpICgqUmVjb3JkLCBlcnJvcikKCglTaWduZXIKCglJbXBvcnRlcgoJRXhwb3J0ZXIKCglNaWdyYXRvcgp9"}})],1),g._v(" "),t("p",[g._v("The default implementation of "),t("code",[g._v("Keyring")]),g._v(" comes from the third-party "),t("a",{attrs:{href:"https://github.com/99designs/keyring",target:"_blank",rel:"noopener noreferrer"}},[t("code",[g._v("99designs/keyring")]),t("OutboundLink")],1),g._v(" library.")]),g._v(" "),t("p",[g._v("A few notes on the "),t("code",[g._v("Keyring")]),g._v(" methods:")]),g._v(" "),t("ul",[t("li",[t("p",[t("code",[g._v("Sign(uid string, msg []byte) ([]byte, types.PubKey, error)")]),g._v(" strictly deals with the signature of the "),t("code",[g._v("msg")]),g._v(" bytes. You must prepare and encode the transaction into a canonical "),t("code",[g._v("[]byte")]),g._v(" form. Because protobuf is not deterministic, it has been decided in "),t("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[g._v("ADR-020")]),g._v(" that the canonical "),t("code",[g._v("payload")]),g._v(" to sign is the "),t("code",[g._v("SignDoc")]),g._v(" struct, deterministically encoded using "),t("RouterLink",{attrs:{to:"/architecture/adr-027-deterministic-protobuf-serialization.html"}},[g._v("ADR-027")]),g._v(". Note that signature verification is not implemented in the Cosmos SDK by default, it is deferred to the "),t("RouterLink",{attrs:{to:"/core/baseapp.html#antehandler"}},[t("code",[g._v("anteHandler")])]),g._v(".\n"),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gU2lnbkRvYyBpcyB0aGUgdHlwZSB1c2VkIGZvciBnZW5lcmF0aW5nIHNpZ24gYnl0ZXMgZm9yIFNJR05fTU9ERV9ESVJFQ1QuCm1lc3NhZ2UgU2lnbkRvYyB7CiAgLy8gYm9keV9ieXRlcyBpcyBwcm90b2J1ZiBzZXJpYWxpemF0aW9uIG9mIGEgVHhCb2R5IHRoYXQgbWF0Y2hlcyB0aGUKICAvLyByZXByZXNlbnRhdGlvbiBpbiBUeFJhdy4KICBieXRlcyBib2R5X2J5dGVzID0gMTsKCiAgLy8gYXV0aF9pbmZvX2J5dGVzIGlzIGEgcHJvdG9idWYgc2VyaWFsaXphdGlvbiBvZiBhbiBBdXRoSW5mbyB0aGF0IG1hdGNoZXMgdGhlCiAgLy8gcmVwcmVzZW50YXRpb24gaW4gVHhSYXcuCiAgYnl0ZXMgYXV0aF9pbmZvX2J5dGVzID0gMjsKCiAgLy8gY2hhaW5faWQgaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBjaGFpbiB0aGlzIHRyYW5zYWN0aW9uIHRhcmdldHMuCiAgLy8gSXQgcHJldmVudHMgc2lnbmVkIHRyYW5zYWN0aW9ucyBmcm9tIGJlaW5nIHVzZWQgb24gYW5vdGhlciBjaGFpbiBieSBhbgogIC8vIGF0dGFja2VyCiAgc3RyaW5nIGNoYWluX2lkID0gMzsKCiAgLy8gYWNjb3VudF9udW1iZXIgaXMgdGhlIGFjY291bnQgbnVtYmVyIG9mIHRoZSBhY2NvdW50IGluIHN0YXRlCiAgdWludDY0IGFjY291bnRfbnVtYmVyID0gNDsKfQ=="}})],1)]),g._v(" "),t("li",[t("p",[t("code",[g._v("NewAccount(uid, mnemonic, bip39Passphrase, hdPath string, algo SignatureAlgo) (*Record, error)")]),g._v(" creates a new account based on the "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t("code",[g._v("bip44 path")]),t("OutboundLink")],1),g._v(" and persists it on disk. The "),t("code",[g._v("PrivKey")]),g._v(" is "),t("strong",[g._v("never stored unencrypted")]),g._v(", instead it is "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/crypto/armor.go",target:"_blank",rel:"noopener noreferrer"}},[g._v("encrypted with a passphrase"),t("OutboundLink")],1),g._v(" before being persisted. In the context of this method, the key type and sequence number refer to the segment of the BIP44 derivation path (for example, "),t("code",[g._v("0")]),g._v(", "),t("code",[g._v("1")]),g._v(", "),t("code",[g._v("2")]),g._v(", ...) that is used to derive a private and a public key from the mnemonic. Using the same mnemonic and derivation path, the same "),t("code",[g._v("PrivKey")]),g._v(", "),t("code",[g._v("PubKey")]),g._v(" and "),t("code",[g._v("Address")]),g._v(" is generated. The following keys are supported by the keyring:")])]),g._v(" "),t("li",[t("p",[t("code",[g._v("secp256k1")])])]),g._v(" "),t("li",[t("p",[t("code",[g._v("ed25519")])])]),g._v(" "),t("li",[t("p",[t("code",[g._v("ExportPrivKeyArmor(uid, encryptPassphrase string) (armor string, err error)")]),g._v(" exports a private key in ASCII-armored encrypted format using the given passphrase. You can then either import the private key again into the keyring using the "),t("code",[g._v("ImportPrivKey(uid, armor, passphrase string)")]),g._v(" function or decrypt it into a raw private key using the "),t("code",[g._v("UnarmorDecryptPrivKey(armorStr string, passphrase string)")]),g._v(" function.")])])]),g._v(" "),t("h2",{attrs:{hide:"",id:"next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[g._v("#")]),g._v(" Next")]),g._v(" "),t("p",{attrs:{hide:""}},[g._v("Learn about "),t("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[g._v("gas and fees")])],1)],1)}),[],!1,null,null,null);e.default=C.exports}}]);
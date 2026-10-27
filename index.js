/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { NavigationLibraryType, PendoSDK } from 'rn-pendo-sdk';
import App from './App';
import { name as appName } from './app.json';

PendoSDK.setup(
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiIxYTUzMDk1MGExZDA4NmU5MGU2NWEyM2NiOGNlZGY1OTVjOWQ1OTZkYmFmNTMyNThlYmFlZTNmZTIyNTdmMmViYWE1ZDJmOTVmN2JhNzhmNjdjM2MyMzJlMzJlM2ZkY2U2ZDYxNzc5ZGM2MzM2ZmI3MjA5ZWZjODg5YmIzZDdlNWZlZTlhYTFlM2VhODY0MjAzZDU4ODdmMzE5ZWE2Y2VkMTllZTZkNDNjMGRkYTMxMzQwMGU4YjIyNzkzODU0ZjIuZTAxMjhmZjRkMDE1ODgxYjM1NzIyZjExYWJmNDcyZmYuZTVhYTBmNDBmODUwYjllZDYxY2IxMTVlM2MxODQ1NTZkN2VkMDhkMzg4MjJkNDg3OWQ4OWQyYjBhMmRjYzg1MSJ9.UybetvA0jxPHWh5KTpbTM_bJw_xDAyxNv_VZtJg1Sv1mc1gfl9o4G4tMyIvlpf7HNk9Y98H-TosZe_ZQdTK5hrxaLyyLpUq2i1d-mm492tT18MKgg2ORzkryvtrtzcM-BdpPgAQzoXyHtrHS-gso-GrnkcWy5-gJHuC19RcJziI',
  { library: NavigationLibraryType.Other },
);

// The app has no sign-in or user identity, so start an anonymous session:
// an empty visitor ID lets the SDK assign its own anonymous device-based ID.
// Accounts are not used (B2C), so accountId and accountData stay empty.
PendoSDK.startSession('', '', {}, {});

AppRegistry.registerComponent(appName, () => App);

/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ZeroTrustDeviceSettingsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}
  */
  readonly accountId: string;
  /**
  * Sets the time limit, in seconds, that a user can use an override code to bypass WARP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#disable_for_time ZeroTrustDeviceSettings#disable_for_time}
  */
  readonly disableForTime?: number;
  /**
  * Controls whether the external emergency disconnect feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#external_emergency_signal_enabled ZeroTrustDeviceSettings#external_emergency_signal_enabled}
  */
  readonly externalEmergencySignalEnabled?: boolean | cdktn.IResolvable;
  /**
  * The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. If provided, the WARP client will use this value to verify the server's identity. The device will ignore any response if the server's certificate fingerprint does not exactly match this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#external_emergency_signal_fingerprint ZeroTrustDeviceSettings#external_emergency_signal_fingerprint}
  */
  readonly externalEmergencySignalFingerprint?: string;
  /**
  * The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). Minimum 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#external_emergency_signal_interval ZeroTrustDeviceSettings#external_emergency_signal_interval}
  */
  readonly externalEmergencySignalInterval?: string;
  /**
  * The HTTPS URL from which to fetch the emergency disconnect signal. Must use HTTPS and have an IPv4 or IPv6 address as the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#external_emergency_signal_url ZeroTrustDeviceSettings#external_emergency_signal_url}
  */
  readonly externalEmergencySignalUrl?: string;
  /**
  * Enable gateway proxy filtering on TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#gateway_proxy_enabled ZeroTrustDeviceSettings#gateway_proxy_enabled}
  */
  readonly gatewayProxyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Enable gateway proxy filtering on UDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#gateway_udp_proxy_enabled ZeroTrustDeviceSettings#gateway_udp_proxy_enabled}
  */
  readonly gatewayUdpProxyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Enable installation of cloudflare managed root certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#root_certificate_installation_enabled ZeroTrustDeviceSettings#root_certificate_installation_enabled}
  */
  readonly rootCertificateInstallationEnabled?: boolean | cdktn.IResolvable;
  /**
  * Enable using CGNAT virtual IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#use_zt_virtual_ip ZeroTrustDeviceSettings#use_zt_virtual_ip}
  */
  readonly useZtVirtualIp?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings}
*/
export class ZeroTrustDeviceSettings extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_device_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ZeroTrustDeviceSettings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDeviceSettings to import
  * @param importFromId The id of the existing ZeroTrustDeviceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDeviceSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDeviceSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDeviceSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_device_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.17.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._disableForTime = config.disableForTime;
    this._externalEmergencySignalEnabled = config.externalEmergencySignalEnabled;
    this._externalEmergencySignalFingerprint = config.externalEmergencySignalFingerprint;
    this._externalEmergencySignalInterval = config.externalEmergencySignalInterval;
    this._externalEmergencySignalUrl = config.externalEmergencySignalUrl;
    this._gatewayProxyEnabled = config.gatewayProxyEnabled;
    this._gatewayUdpProxyEnabled = config.gatewayUdpProxyEnabled;
    this._rootCertificateInstallationEnabled = config.rootCertificateInstallationEnabled;
    this._useZtVirtualIp = config.useZtVirtualIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // disable_for_time - computed: false, optional: true, required: false
  private _disableForTime?: number; 
  public get disableForTime() {
    return this.getNumberAttribute('disable_for_time');
  }
  public set disableForTime(value: number) {
    this._disableForTime = value;
  }
  public resetDisableForTime() {
    this._disableForTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableForTimeInput() {
    return this._disableForTime;
  }

  // external_emergency_signal_enabled - computed: false, optional: true, required: false
  private _externalEmergencySignalEnabled?: boolean | cdktn.IResolvable; 
  public get externalEmergencySignalEnabled() {
    return this.getBooleanAttribute('external_emergency_signal_enabled');
  }
  public set externalEmergencySignalEnabled(value: boolean | cdktn.IResolvable) {
    this._externalEmergencySignalEnabled = value;
  }
  public resetExternalEmergencySignalEnabled() {
    this._externalEmergencySignalEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEmergencySignalEnabledInput() {
    return this._externalEmergencySignalEnabled;
  }

  // external_emergency_signal_fingerprint - computed: false, optional: true, required: false
  private _externalEmergencySignalFingerprint?: string; 
  public get externalEmergencySignalFingerprint() {
    return this.getStringAttribute('external_emergency_signal_fingerprint');
  }
  public set externalEmergencySignalFingerprint(value: string) {
    this._externalEmergencySignalFingerprint = value;
  }
  public resetExternalEmergencySignalFingerprint() {
    this._externalEmergencySignalFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEmergencySignalFingerprintInput() {
    return this._externalEmergencySignalFingerprint;
  }

  // external_emergency_signal_interval - computed: false, optional: true, required: false
  private _externalEmergencySignalInterval?: string; 
  public get externalEmergencySignalInterval() {
    return this.getStringAttribute('external_emergency_signal_interval');
  }
  public set externalEmergencySignalInterval(value: string) {
    this._externalEmergencySignalInterval = value;
  }
  public resetExternalEmergencySignalInterval() {
    this._externalEmergencySignalInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEmergencySignalIntervalInput() {
    return this._externalEmergencySignalInterval;
  }

  // external_emergency_signal_url - computed: false, optional: true, required: false
  private _externalEmergencySignalUrl?: string; 
  public get externalEmergencySignalUrl() {
    return this.getStringAttribute('external_emergency_signal_url');
  }
  public set externalEmergencySignalUrl(value: string) {
    this._externalEmergencySignalUrl = value;
  }
  public resetExternalEmergencySignalUrl() {
    this._externalEmergencySignalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEmergencySignalUrlInput() {
    return this._externalEmergencySignalUrl;
  }

  // gateway_proxy_enabled - computed: false, optional: true, required: false
  private _gatewayProxyEnabled?: boolean | cdktn.IResolvable; 
  public get gatewayProxyEnabled() {
    return this.getBooleanAttribute('gateway_proxy_enabled');
  }
  public set gatewayProxyEnabled(value: boolean | cdktn.IResolvable) {
    this._gatewayProxyEnabled = value;
  }
  public resetGatewayProxyEnabled() {
    this._gatewayProxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayProxyEnabledInput() {
    return this._gatewayProxyEnabled;
  }

  // gateway_udp_proxy_enabled - computed: false, optional: true, required: false
  private _gatewayUdpProxyEnabled?: boolean | cdktn.IResolvable; 
  public get gatewayUdpProxyEnabled() {
    return this.getBooleanAttribute('gateway_udp_proxy_enabled');
  }
  public set gatewayUdpProxyEnabled(value: boolean | cdktn.IResolvable) {
    this._gatewayUdpProxyEnabled = value;
  }
  public resetGatewayUdpProxyEnabled() {
    this._gatewayUdpProxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUdpProxyEnabledInput() {
    return this._gatewayUdpProxyEnabled;
  }

  // root_certificate_installation_enabled - computed: false, optional: true, required: false
  private _rootCertificateInstallationEnabled?: boolean | cdktn.IResolvable; 
  public get rootCertificateInstallationEnabled() {
    return this.getBooleanAttribute('root_certificate_installation_enabled');
  }
  public set rootCertificateInstallationEnabled(value: boolean | cdktn.IResolvable) {
    this._rootCertificateInstallationEnabled = value;
  }
  public resetRootCertificateInstallationEnabled() {
    this._rootCertificateInstallationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertificateInstallationEnabledInput() {
    return this._rootCertificateInstallationEnabled;
  }

  // use_zt_virtual_ip - computed: false, optional: true, required: false
  private _useZtVirtualIp?: boolean | cdktn.IResolvable; 
  public get useZtVirtualIp() {
    return this.getBooleanAttribute('use_zt_virtual_ip');
  }
  public set useZtVirtualIp(value: boolean | cdktn.IResolvable) {
    this._useZtVirtualIp = value;
  }
  public resetUseZtVirtualIp() {
    this._useZtVirtualIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useZtVirtualIpInput() {
    return this._useZtVirtualIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      disable_for_time: cdktn.numberToTerraform(this._disableForTime),
      external_emergency_signal_enabled: cdktn.booleanToTerraform(this._externalEmergencySignalEnabled),
      external_emergency_signal_fingerprint: cdktn.stringToTerraform(this._externalEmergencySignalFingerprint),
      external_emergency_signal_interval: cdktn.stringToTerraform(this._externalEmergencySignalInterval),
      external_emergency_signal_url: cdktn.stringToTerraform(this._externalEmergencySignalUrl),
      gateway_proxy_enabled: cdktn.booleanToTerraform(this._gatewayProxyEnabled),
      gateway_udp_proxy_enabled: cdktn.booleanToTerraform(this._gatewayUdpProxyEnabled),
      root_certificate_installation_enabled: cdktn.booleanToTerraform(this._rootCertificateInstallationEnabled),
      use_zt_virtual_ip: cdktn.booleanToTerraform(this._useZtVirtualIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_for_time: {
        value: cdktn.numberToHclTerraform(this._disableForTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_emergency_signal_enabled: {
        value: cdktn.booleanToHclTerraform(this._externalEmergencySignalEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_emergency_signal_fingerprint: {
        value: cdktn.stringToHclTerraform(this._externalEmergencySignalFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_emergency_signal_interval: {
        value: cdktn.stringToHclTerraform(this._externalEmergencySignalInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_emergency_signal_url: {
        value: cdktn.stringToHclTerraform(this._externalEmergencySignalUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_proxy_enabled: {
        value: cdktn.booleanToHclTerraform(this._gatewayProxyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_udp_proxy_enabled: {
        value: cdktn.booleanToHclTerraform(this._gatewayUdpProxyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_certificate_installation_enabled: {
        value: cdktn.booleanToHclTerraform(this._rootCertificateInstallationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_zt_virtual_ip: {
        value: cdktn.booleanToHclTerraform(this._useZtVirtualIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

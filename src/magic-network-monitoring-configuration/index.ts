/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MagicNetworkMonitoringConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration#account_id MagicNetworkMonitoringConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration#default_sampling MagicNetworkMonitoringConfiguration#default_sampling}
  */
  readonly defaultSampling?: number;
  /**
  * The account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration#name MagicNetworkMonitoringConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration#router_ips MagicNetworkMonitoringConfiguration#router_ips}
  */
  readonly routerIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration#warp_devices MagicNetworkMonitoringConfiguration#warp_devices}
  */
  readonly warpDevices?: MagicNetworkMonitoringConfigurationWarpDevices[] | cdktn.IResolvable;
}
export interface MagicNetworkMonitoringConfigurationWarpDevices {
  /**
  * Unique identifier for the warp device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration#id MagicNetworkMonitoringConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the warp device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration#name MagicNetworkMonitoringConfiguration#name}
  */
  readonly name: string;
  /**
  * IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration#router_ip MagicNetworkMonitoringConfiguration#router_ip}
  */
  readonly routerIp: string;
}

export function magicNetworkMonitoringConfigurationWarpDevicesToTerraform(struct?: MagicNetworkMonitoringConfigurationWarpDevices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    router_ip: cdktn.stringToTerraform(struct!.routerIp),
  }
}


export function magicNetworkMonitoringConfigurationWarpDevicesToHclTerraform(struct?: MagicNetworkMonitoringConfigurationWarpDevices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_ip: {
      value: cdktn.stringToHclTerraform(struct!.routerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicNetworkMonitoringConfigurationWarpDevicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MagicNetworkMonitoringConfigurationWarpDevices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerIp = this._routerIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicNetworkMonitoringConfigurationWarpDevices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._routerIp = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._routerIp = value.routerIp;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // router_ip - computed: false, optional: false, required: true
  private _routerIp?: string; 
  public get routerIp() {
    return this.getStringAttribute('router_ip');
  }
  public set routerIp(value: string) {
    this._routerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIpInput() {
    return this._routerIp;
  }
}

export class MagicNetworkMonitoringConfigurationWarpDevicesList extends cdktn.ComplexList {
  public internalValue? : MagicNetworkMonitoringConfigurationWarpDevices[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MagicNetworkMonitoringConfigurationWarpDevicesOutputReference {
    return new MagicNetworkMonitoringConfigurationWarpDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}
*/
export class MagicNetworkMonitoringConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_network_monitoring_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MagicNetworkMonitoringConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicNetworkMonitoringConfiguration to import
  * @param importFromId The id of the existing MagicNetworkMonitoringConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicNetworkMonitoringConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicNetworkMonitoringConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MagicNetworkMonitoringConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_network_monitoring_configuration',
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
    this._defaultSampling = config.defaultSampling;
    this._name = config.name;
    this._routerIps = config.routerIps;
    this._warpDevices.internalValue = config.warpDevices;
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

  // default_sampling - computed: true, optional: true, required: false
  private _defaultSampling?: number; 
  public get defaultSampling() {
    return this.getNumberAttribute('default_sampling');
  }
  public set defaultSampling(value: number) {
    this._defaultSampling = value;
  }
  public resetDefaultSampling() {
    this._defaultSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSamplingInput() {
    return this._defaultSampling;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // router_ips - computed: false, optional: true, required: false
  private _routerIps?: string[]; 
  public get routerIps() {
    return this.getListAttribute('router_ips');
  }
  public set routerIps(value: string[]) {
    this._routerIps = value;
  }
  public resetRouterIps() {
    this._routerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIpsInput() {
    return this._routerIps;
  }

  // warp_devices - computed: false, optional: true, required: false
  private _warpDevices = new MagicNetworkMonitoringConfigurationWarpDevicesList(this, "warp_devices", false);
  public get warpDevices() {
    return this._warpDevices;
  }
  public putWarpDevices(value: MagicNetworkMonitoringConfigurationWarpDevices[] | cdktn.IResolvable) {
    this._warpDevices.internalValue = value;
  }
  public resetWarpDevices() {
    this._warpDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warpDevicesInput() {
    return this._warpDevices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      default_sampling: cdktn.numberToTerraform(this._defaultSampling),
      name: cdktn.stringToTerraform(this._name),
      router_ips: cdktn.listMapper(cdktn.stringToTerraform, false)(this._routerIps),
      warp_devices: cdktn.listMapper(magicNetworkMonitoringConfigurationWarpDevicesToTerraform, false)(this._warpDevices.internalValue),
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
      default_sampling: {
        value: cdktn.numberToHclTerraform(this._defaultSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_ips: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._routerIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      warp_devices: {
        value: cdktn.listMapperHcl(magicNetworkMonitoringConfigurationWarpDevicesToHclTerraform, false)(this._warpDevices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MagicNetworkMonitoringConfigurationWarpDevicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

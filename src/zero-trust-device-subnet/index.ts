/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_device_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ZeroTrustDeviceSubnetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Cloudflare account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_device_subnet#account_id ZeroTrustDeviceSubnet#account_id}
  */
  readonly accountId: string;
  /**
  * An optional description of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_device_subnet#comment ZeroTrustDeviceSubnet#comment}
  */
  readonly comment?: string;
  /**
  * If `true`, this is the default subnet for the account. There can only be one default subnet per account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_device_subnet#is_default_network ZeroTrustDeviceSubnet#is_default_network}
  */
  readonly isDefaultNetwork?: boolean | cdktn.IResolvable;
  /**
  * A user-friendly name for the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_device_subnet#name ZeroTrustDeviceSubnet#name}
  */
  readonly name: string;
  /**
  * The private IPv4 or IPv6 range defining the subnet, in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_device_subnet#network ZeroTrustDeviceSubnet#network}
  */
  readonly network: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_device_subnet cloudflare_zero_trust_device_subnet}
*/
export class ZeroTrustDeviceSubnet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_device_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ZeroTrustDeviceSubnet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDeviceSubnet to import
  * @param importFromId The id of the existing ZeroTrustDeviceSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_device_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDeviceSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_device_subnet cloudflare_zero_trust_device_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDeviceSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDeviceSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_device_subnet',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.0',
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
    this._comment = config.comment;
    this._isDefaultNetwork = config.isDefaultNetwork;
    this._name = config.name;
    this._network = config.network;
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

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default_network - computed: true, optional: true, required: false
  private _isDefaultNetwork?: boolean | cdktn.IResolvable; 
  public get isDefaultNetwork() {
    return this.getBooleanAttribute('is_default_network');
  }
  public set isDefaultNetwork(value: boolean | cdktn.IResolvable) {
    this._isDefaultNetwork = value;
  }
  public resetIsDefaultNetwork() {
    this._isDefaultNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultNetworkInput() {
    return this._isDefaultNetwork;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // subnet_type - computed: true, optional: false, required: false
  public get subnetType() {
    return this.getStringAttribute('subnet_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      comment: cdktn.stringToTerraform(this._comment),
      is_default_network: cdktn.booleanToTerraform(this._isDefaultNetwork),
      name: cdktn.stringToTerraform(this._name),
      network: cdktn.stringToTerraform(this._network),
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
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default_network: {
        value: cdktn.booleanToHclTerraform(this._isDefaultNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktn.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

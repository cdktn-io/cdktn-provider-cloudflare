/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig extends cdktn.TerraformMetaArguments {
  /**
  * Cloudflare account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#account_id}
  */
  readonly accountId: string;
  /**
  * UUID of the virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If `true`, only include the default virtual network. If `false`, exclude the default virtual network. If empty, all virtual networks will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_default DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_default}
  */
  readonly isDefault?: boolean | cdktn.IResolvable;
  /**
  * If `true`, only include the default virtual network. If `false`, exclude the default virtual network. If empty, all virtual networks will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_default_network DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_default_network}
  */
  readonly isDefaultNetwork?: boolean | cdktn.IResolvable;
  /**
  * If `true`, only include deleted virtual networks. If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_deleted DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_deleted}
  */
  readonly isDeleted?: boolean | cdktn.IResolvable;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#max_items DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#max_items}
  */
  readonly maxItems?: number;
  /**
  * A user-friendly name for the virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#name DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#name}
  */
  readonly name?: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult {
}

export function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
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

  // is_default_network - computed: true, optional: false, required: false
  public get isDefaultNetwork() {
    return this.getBooleanAttribute('is_default_network');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList extends cdktn.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference {
    return new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks cloudflare_zero_trust_tunnel_cloudflared_virtual_networks}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_virtual_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_virtual_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks cloudflare_zero_trust_tunnel_cloudflared_virtual_networks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_virtual_networks',
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
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._isDefaultNetwork = config.isDefaultNetwork;
    this._isDeleted = config.isDeleted;
    this._maxItems = config.maxItems;
    this._name = config.name;
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

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktn.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktn.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_default_network - computed: false, optional: true, required: false
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

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktn.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktn.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      id: cdktn.stringToTerraform(this._id),
      is_default: cdktn.booleanToTerraform(this._isDefault),
      is_default_network: cdktn.booleanToTerraform(this._isDefaultNetwork),
      is_deleted: cdktn.booleanToTerraform(this._isDeleted),
      max_items: cdktn.numberToTerraform(this._maxItems),
      name: cdktn.stringToTerraform(this._name),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktn.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_default_network: {
        value: cdktn.booleanToHclTerraform(this._isDefaultNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_deleted: {
        value: cdktn.booleanToHclTerraform(this._isDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_items: {
        value: cdktn.numberToHclTerraform(this._maxItems),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

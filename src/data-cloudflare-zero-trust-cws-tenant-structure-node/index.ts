/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataCloudflareZeroTrustCwsTenantStructureNodeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Cloudflare account ID (32-character hexadecimal string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#account_id DataCloudflareZeroTrustCwsTenantStructureNode#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}
  */
  readonly filter?: DataCloudflareZeroTrustCwsTenantStructureNodeFilter;
  /**
  * ID of the node to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_id DataCloudflareZeroTrustCwsTenantStructureNode#node_id}
  */
  readonly nodeId?: string;
  /**
  * ID of the parent tenant structure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#structure_id DataCloudflareZeroTrustCwsTenantStructureNode#structure_id}
  */
  readonly structureId: string;
}
export interface DataCloudflareZeroTrustCwsTenantStructureNodeFilter {
  /**
  * Sort direction (default: asc)
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#direction DataCloudflareZeroTrustCwsTenantStructureNode#direction}
  */
  readonly direction?: string;
  /**
  * Filter by node name (case-insensitive substring match)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#name DataCloudflareZeroTrustCwsTenantStructureNode#name}
  */
  readonly name?: string;
  /**
  * Filter by exact cloud-native identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#native_id DataCloudflareZeroTrustCwsTenantStructureNode#native_id}
  */
  readonly nativeId?: string;
  /**
  * Filter by exact node kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_kind DataCloudflareZeroTrustCwsTenantStructureNode#node_kind}
  */
  readonly nodeKind?: string;
  /**
  * Field to order results by (default: created_at)
  * Available values: "name", "created_at", "updated_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#order DataCloudflareZeroTrustCwsTenantStructureNode#order}
  */
  readonly order?: string;
  /**
  * Filter by exact parent native ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#parent DataCloudflareZeroTrustCwsTenantStructureNode#parent}
  */
  readonly parent?: string;
}

export function dataCloudflareZeroTrustCwsTenantStructureNodeFilterToTerraform(struct?: DataCloudflareZeroTrustCwsTenantStructureNodeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
    native_id: cdktn.stringToTerraform(struct!.nativeId),
    node_kind: cdktn.stringToTerraform(struct!.nodeKind),
    order: cdktn.stringToTerraform(struct!.order),
    parent: cdktn.stringToTerraform(struct!.parent),
  }
}


export function dataCloudflareZeroTrustCwsTenantStructureNodeFilterToHclTerraform(struct?: DataCloudflareZeroTrustCwsTenantStructureNodeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
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
    native_id: {
      value: cdktn.stringToHclTerraform(struct!.nativeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_kind: {
      value: cdktn.stringToHclTerraform(struct!.nodeKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent: {
      value: cdktn.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustCwsTenantStructureNodeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nativeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeId = this._nativeId;
    }
    if (this._nodeKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKind = this._nodeKind;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustCwsTenantStructureNodeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._name = undefined;
      this._nativeId = undefined;
      this._nodeKind = undefined;
      this._order = undefined;
      this._parent = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._name = value.name;
      this._nativeId = value.nativeId;
      this._nodeKind = value.nodeKind;
      this._order = value.order;
      this._parent = value.parent;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // native_id - computed: false, optional: true, required: false
  private _nativeId?: string; 
  public get nativeId() {
    return this.getStringAttribute('native_id');
  }
  public set nativeId(value: string) {
    this._nativeId = value;
  }
  public resetNativeId() {
    this._nativeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeIdInput() {
    return this._nativeId;
  }

  // node_kind - computed: false, optional: true, required: false
  private _nodeKind?: string; 
  public get nodeKind() {
    return this.getStringAttribute('node_kind');
  }
  public set nodeKind(value: string) {
    this._nodeKind = value;
  }
  public resetNodeKind() {
    this._nodeKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKindInput() {
    return this._nodeKind;
  }

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node}
*/
export class DataCloudflareZeroTrustCwsTenantStructureNode extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_cws_tenant_structure_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustCwsTenantStructureNode to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustCwsTenantStructureNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustCwsTenantStructureNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_cws_tenant_structure_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustCwsTenantStructureNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustCwsTenantStructureNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_cws_tenant_structure_node',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.29.0',
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
    this._filter.internalValue = config.filter;
    this._nodeId = config.nodeId;
    this._structureId = config.structureId;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustCwsTenantStructureNodeFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // native_id - computed: true, optional: false, required: false
  public get nativeId() {
    return this.getStringAttribute('native_id');
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // node_kind - computed: true, optional: false, required: false
  public get nodeKind() {
    return this.getStringAttribute('node_kind');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // structure_id - computed: false, optional: false, required: true
  private _structureId?: string; 
  public get structureId() {
    return this.getStringAttribute('structure_id');
  }
  public set structureId(value: string) {
    this._structureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get structureIdInput() {
    return this._structureId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustCwsTenantStructureNodeFilterToTerraform(this._filter.internalValue),
      node_id: cdktn.stringToTerraform(this._nodeId),
      structure_id: cdktn.stringToTerraform(this._structureId),
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
      filter: {
        value: dataCloudflareZeroTrustCwsTenantStructureNodeFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustCwsTenantStructureNodeFilter",
      },
      node_id: {
        value: cdktn.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      structure_id: {
        value: cdktn.stringToHclTerraform(this._structureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

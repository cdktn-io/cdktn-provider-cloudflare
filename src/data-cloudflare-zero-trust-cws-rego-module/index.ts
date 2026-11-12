/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataCloudflareZeroTrustCwsRegoModuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Cloudflare account ID (32-character hexadecimal string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#account_id DataCloudflareZeroTrustCwsRegoModule#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#filter DataCloudflareZeroTrustCwsRegoModule#filter}
  */
  readonly filter?: DataCloudflareZeroTrustCwsRegoModuleFilter;
  /**
  * ID of the Rego module to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#rego_module_id DataCloudflareZeroTrustCwsRegoModule#rego_module_id}
  */
  readonly regoModuleId?: string;
}
export interface DataCloudflareZeroTrustCwsRegoModuleFilter {
  /**
  * Sort direction (default: asc)
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#direction DataCloudflareZeroTrustCwsRegoModule#direction}
  */
  readonly direction?: string;
  /**
  * Filter by Rego module name (case-insensitive substring match)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#name DataCloudflareZeroTrustCwsRegoModule#name}
  */
  readonly name?: string;
  /**
  * Field to order results by (default: created_at)
  * Available values: "name", "created_at", "updated_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#order DataCloudflareZeroTrustCwsRegoModule#order}
  */
  readonly order?: string;
  /**
  * Filter by package path (case-sensitive literal substring match)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#package_path DataCloudflareZeroTrustCwsRegoModule#package_path}
  */
  readonly packagePath?: string;
}

export function dataCloudflareZeroTrustCwsRegoModuleFilterToTerraform(struct?: DataCloudflareZeroTrustCwsRegoModuleFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    name: cdktn.stringToTerraform(struct!.name),
    order: cdktn.stringToTerraform(struct!.order),
    package_path: cdktn.stringToTerraform(struct!.packagePath),
  }
}


export function dataCloudflareZeroTrustCwsRegoModuleFilterToHclTerraform(struct?: DataCloudflareZeroTrustCwsRegoModuleFilter | cdktn.IResolvable): any {
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
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_path: {
      value: cdktn.stringToHclTerraform(struct!.packagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustCwsRegoModuleFilter | cdktn.IResolvable | undefined {
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
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._packagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.packagePath = this._packagePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustCwsRegoModuleFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._name = undefined;
      this._order = undefined;
      this._packagePath = undefined;
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
      this._order = value.order;
      this._packagePath = value.packagePath;
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

  // package_path - computed: false, optional: true, required: false
  private _packagePath?: string; 
  public get packagePath() {
    return this.getStringAttribute('package_path');
  }
  public set packagePath(value: string) {
    this._packagePath = value;
  }
  public resetPackagePath() {
    this._packagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagePathInput() {
    return this._packagePath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module cloudflare_zero_trust_cws_rego_module}
*/
export class DataCloudflareZeroTrustCwsRegoModule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_cws_rego_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoModule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustCwsRegoModule to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustCwsRegoModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustCwsRegoModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_cws_rego_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module cloudflare_zero_trust_cws_rego_module} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustCwsRegoModuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustCwsRegoModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_cws_rego_module',
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
    this._regoModuleId = config.regoModuleId;
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
  private _filter = new DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustCwsRegoModuleFilter) {
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

  // package_path - computed: true, optional: false, required: false
  public get packagePath() {
    return this.getStringAttribute('package_path');
  }

  // rego_module_id - computed: false, optional: true, required: false
  private _regoModuleId?: string; 
  public get regoModuleId() {
    return this.getStringAttribute('rego_module_id');
  }
  public set regoModuleId(value: string) {
    this._regoModuleId = value;
  }
  public resetRegoModuleId() {
    this._regoModuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regoModuleIdInput() {
    return this._regoModuleId;
  }

  // rego_source - computed: true, optional: false, required: false
  public get regoSource() {
    return this.getStringAttribute('rego_source');
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
      filter: dataCloudflareZeroTrustCwsRegoModuleFilterToTerraform(this._filter.internalValue),
      rego_module_id: cdktn.stringToTerraform(this._regoModuleId),
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
        value: dataCloudflareZeroTrustCwsRegoModuleFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustCwsRegoModuleFilter",
      },
      rego_module_id: {
        value: cdktn.stringToHclTerraform(this._regoModuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

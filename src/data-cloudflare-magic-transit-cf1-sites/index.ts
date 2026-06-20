/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataCloudflareMagicTransitCf1SitesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites#account_id DataCloudflareMagicTransitCf1Sites#account_id}
  */
  readonly accountId: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites#max_items DataCloudflareMagicTransitCf1Sites#max_items}
  */
  readonly maxItems?: number;
}
export interface DataCloudflareMagicTransitCf1SitesResultLocation {
}

export function dataCloudflareMagicTransitCf1SitesResultLocationToTerraform(struct?: DataCloudflareMagicTransitCf1SitesResultLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataCloudflareMagicTransitCf1SitesResultLocationToHclTerraform(struct?: DataCloudflareMagicTransitCf1SitesResultLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMagicTransitCf1SitesResultLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMagicTransitCf1SitesResultLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMagicTransitCf1SitesResultLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lat - computed: true, optional: false, required: false
  public get lat() {
    return this.getNumberAttribute('lat');
  }

  // long - computed: true, optional: false, required: false
  public get long() {
    return this.getNumberAttribute('long');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCloudflareMagicTransitCf1SitesResult {
}

export function dataCloudflareMagicTransitCf1SitesResultToTerraform(struct?: DataCloudflareMagicTransitCf1SitesResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataCloudflareMagicTransitCf1SitesResultToHclTerraform(struct?: DataCloudflareMagicTransitCf1SitesResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMagicTransitCf1SitesResultOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataCloudflareMagicTransitCf1SitesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMagicTransitCf1SitesResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataCloudflareMagicTransitCf1SitesResultLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflareMagicTransitCf1SitesResultList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareMagicTransitCf1SitesResultOutputReference {
    return new DataCloudflareMagicTransitCf1SitesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites cloudflare_magic_transit_cf1_sites}
*/
export class DataCloudflareMagicTransitCf1Sites extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_transit_cf1_sites";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataCloudflareMagicTransitCf1Sites resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitCf1Sites to import
  * @param importFromId The id of the existing DataCloudflareMagicTransitCf1Sites that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitCf1Sites to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_cf1_sites", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites cloudflare_magic_transit_cf1_sites} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareMagicTransitCf1SitesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareMagicTransitCf1SitesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_transit_cf1_sites',
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
    this._maxItems = config.maxItems;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareMagicTransitCf1SitesResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      max_items: cdktn.numberToTerraform(this._maxItems),
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
      max_items: {
        value: cdktn.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

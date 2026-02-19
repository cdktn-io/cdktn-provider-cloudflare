/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates#max_items DataCloudflareAuthenticatedOriginPullsHostnameCertificates#max_items}
  */
  readonly maxItems?: number;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates#zone_id DataCloudflareAuthenticatedOriginPullsHostnameCertificates#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult {
}

export function dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToTerraform(struct?: DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultToHclTerraform(struct?: DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_id - computed: true, optional: false, required: false
  public get certId() {
    return this.getStringAttribute('cert_id');
  }

  // cert_status - computed: true, optional: false, required: false
  public get certStatus() {
    return this.getStringAttribute('cert_status');
  }

  // cert_updated_at - computed: true, optional: false, required: false
  public get certUpdatedAt() {
    return this.getStringAttribute('cert_updated_at');
  }

  // cert_uploaded_on - computed: true, optional: false, required: false
  public get certUploadedOn() {
    return this.getStringAttribute('cert_uploaded_on');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList extends cdktn.ComplexList {

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
  public get(index: number): DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference {
    return new DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates cloudflare_authenticated_origin_pulls_hostname_certificates}
*/
export class DataCloudflareAuthenticatedOriginPullsHostnameCertificates extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_authenticated_origin_pulls_hostname_certificates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificates resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsHostnameCertificates to import
  * @param importFromId The id of the existing DataCloudflareAuthenticatedOriginPullsHostnameCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsHostnameCertificates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_authenticated_origin_pulls_hostname_certificates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/authenticated_origin_pulls_hostname_certificates cloudflare_authenticated_origin_pulls_hostname_certificates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_authenticated_origin_pulls_hostname_certificates',
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
    this._maxItems = config.maxItems;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _result = new DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_items: cdktn.numberToTerraform(this._maxItems),
      zone_id: cdktn.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_items: {
        value: cdktn.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_id: {
        value: cdktn.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

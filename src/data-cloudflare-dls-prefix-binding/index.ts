/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/dls_prefix_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataCloudflareDlsPrefixBindingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier of a Cloudflare account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/dls_prefix_binding#account_id DataCloudflareDlsPrefixBinding#account_id}
  */
  readonly accountId: string;
  /**
  * Unique identifier for the prefix binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/dls_prefix_binding#binding_id DataCloudflareDlsPrefixBinding#binding_id}
  */
  readonly bindingId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/dls_prefix_binding cloudflare_dls_prefix_binding}
*/
export class DataCloudflareDlsPrefixBinding extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dls_prefix_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataCloudflareDlsPrefixBinding resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareDlsPrefixBinding to import
  * @param importFromId The id of the existing DataCloudflareDlsPrefixBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/dls_prefix_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareDlsPrefixBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dls_prefix_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/dls_prefix_binding cloudflare_dls_prefix_binding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareDlsPrefixBindingConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareDlsPrefixBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dls_prefix_binding',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.20.0',
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
    this._bindingId = config.bindingId;
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

  // binding_id - computed: false, optional: false, required: true
  private _bindingId?: string; 
  public get bindingId() {
    return this.getStringAttribute('binding_id');
  }
  public set bindingId(value: string) {
    this._bindingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingIdInput() {
    return this._bindingId;
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix_id - computed: true, optional: false, required: false
  public get prefixId() {
    return this.getStringAttribute('prefix_id');
  }

  // region_key - computed: true, optional: false, required: false
  public get regionKey() {
    return this.getStringAttribute('region_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      binding_id: cdktn.stringToTerraform(this._bindingId),
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
      binding_id: {
        value: cdktn.stringToHclTerraform(this._bindingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

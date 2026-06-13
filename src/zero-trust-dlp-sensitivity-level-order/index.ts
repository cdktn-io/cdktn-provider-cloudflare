/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_dlp_sensitivity_level_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ZeroTrustDlpSensitivityLevelOrderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_dlp_sensitivity_level_order#account_id ZeroTrustDlpSensitivityLevelOrder#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_dlp_sensitivity_level_order#level_ids ZeroTrustDlpSensitivityLevelOrder#level_ids}
  */
  readonly levelIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_dlp_sensitivity_level_order#sensitivity_group_id ZeroTrustDlpSensitivityLevelOrder#sensitivity_group_id}
  */
  readonly sensitivityGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_dlp_sensitivity_level_order cloudflare_zero_trust_dlp_sensitivity_level_order}
*/
export class ZeroTrustDlpSensitivityLevelOrder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_dlp_sensitivity_level_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ZeroTrustDlpSensitivityLevelOrder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDlpSensitivityLevelOrder to import
  * @param importFromId The id of the existing ZeroTrustDlpSensitivityLevelOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_dlp_sensitivity_level_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDlpSensitivityLevelOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_sensitivity_level_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_dlp_sensitivity_level_order cloudflare_zero_trust_dlp_sensitivity_level_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDlpSensitivityLevelOrderConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDlpSensitivityLevelOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_dlp_sensitivity_level_order',
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
    this._levelIds = config.levelIds;
    this._sensitivityGroupId = config.sensitivityGroupId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level_ids - computed: false, optional: false, required: true
  private _levelIds?: string[]; 
  public get levelIds() {
    return this.getListAttribute('level_ids');
  }
  public set levelIds(value: string[]) {
    this._levelIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelIdsInput() {
    return this._levelIds;
  }

  // sensitivity_group_id - computed: false, optional: false, required: true
  private _sensitivityGroupId?: string; 
  public get sensitivityGroupId() {
    return this.getStringAttribute('sensitivity_group_id');
  }
  public set sensitivityGroupId(value: string) {
    this._sensitivityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityGroupIdInput() {
    return this._sensitivityGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      level_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._levelIds),
      sensitivity_group_id: cdktn.stringToTerraform(this._sensitivityGroupId),
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
      level_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._levelIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sensitivity_group_id: {
        value: cdktn.stringToHclTerraform(this._sensitivityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

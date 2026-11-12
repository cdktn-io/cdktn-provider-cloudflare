/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ZeroTrustCwsDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Cloudflare account ID (32-character hexadecimal string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#account_id ZeroTrustCwsDeployment#account_id}
  */
  readonly accountId: string;
  /**
  * IDs of basic-auth credentials to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#basic_auth_credential_ids ZeroTrustCwsDeployment#basic_auth_credential_ids}
  */
  readonly basicAuthCredentialIds: string[];
  /**
  * Default traffic mode: ALLOW or BLOCK
  * Available values: "ALLOW", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#default_mode ZeroTrustCwsDeployment#default_mode}
  */
  readonly defaultMode: string;
  /**
  * Optional free-form description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#description ZeroTrustCwsDeployment#description}
  */
  readonly description?: string;
  /**
  * ID of the domain ACL to attach (omit or null for none)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#domain_acl_id ZeroTrustCwsDeployment#domain_acl_id}
  */
  readonly domainAclId?: string;
  /**
  * Name of the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#name ZeroTrustCwsDeployment#name}
  */
  readonly name: string;
  /**
  * Action for runtime Rego errors. Omit to use BLOCK.
  * Available values: "BLOCK", "SKIP".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#on_error_action ZeroTrustCwsDeployment#on_error_action}
  */
  readonly onErrorAction?: string;
  /**
  * IDs of policy sets to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#policy_set_ids ZeroTrustCwsDeployment#policy_set_ids}
  */
  readonly policySetIds: string[];
  /**
  * Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#rego_raise_error ZeroTrustCwsDeployment#rego_raise_error}
  */
  readonly regoRaiseError?: boolean | cdktn.IResolvable;
  /**
  * Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#tags ZeroTrustCwsDeployment#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment cloudflare_zero_trust_cws_deployment}
*/
export class ZeroTrustCwsDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_cws_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustCwsDeployment to import
  * @param importFromId The id of the existing ZeroTrustCwsDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustCwsDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_cws_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment cloudflare_zero_trust_cws_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustCwsDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustCwsDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_cws_deployment',
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
    this._basicAuthCredentialIds = config.basicAuthCredentialIds;
    this._defaultMode = config.defaultMode;
    this._description = config.description;
    this._domainAclId = config.domainAclId;
    this._name = config.name;
    this._onErrorAction = config.onErrorAction;
    this._policySetIds = config.policySetIds;
    this._regoRaiseError = config.regoRaiseError;
    this._tags = config.tags;
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

  // basic_auth_credential_ids - computed: false, optional: false, required: true
  private _basicAuthCredentialIds?: string[]; 
  public get basicAuthCredentialIds() {
    return cdktn.Fn.tolist(this.getListAttribute('basic_auth_credential_ids'));
  }
  public set basicAuthCredentialIds(value: string[]) {
    this._basicAuthCredentialIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthCredentialIdsInput() {
    return this._basicAuthCredentialIds;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_mode - computed: false, optional: false, required: true
  private _defaultMode?: string; 
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }
  public set defaultMode(value: string) {
    this._defaultMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain_acl_id - computed: false, optional: true, required: false
  private _domainAclId?: string; 
  public get domainAclId() {
    return this.getStringAttribute('domain_acl_id');
  }
  public set domainAclId(value: string) {
    this._domainAclId = value;
  }
  public resetDomainAclId() {
    this._domainAclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAclIdInput() {
    return this._domainAclId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // on_error_action - computed: true, optional: true, required: false
  private _onErrorAction?: string; 
  public get onErrorAction() {
    return this.getStringAttribute('on_error_action');
  }
  public set onErrorAction(value: string) {
    this._onErrorAction = value;
  }
  public resetOnErrorAction() {
    this._onErrorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorActionInput() {
    return this._onErrorAction;
  }

  // policy_set_ids - computed: false, optional: false, required: true
  private _policySetIds?: string[]; 
  public get policySetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('policy_set_ids'));
  }
  public set policySetIds(value: string[]) {
    this._policySetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetIdsInput() {
    return this._policySetIds;
  }

  // rego_raise_error - computed: true, optional: true, required: false
  private _regoRaiseError?: boolean | cdktn.IResolvable; 
  public get regoRaiseError() {
    return this.getBooleanAttribute('rego_raise_error');
  }
  public set regoRaiseError(value: boolean | cdktn.IResolvable) {
    this._regoRaiseError = value;
  }
  public resetRegoRaiseError() {
    this._regoRaiseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regoRaiseErrorInput() {
    return this._regoRaiseError;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
      basic_auth_credential_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._basicAuthCredentialIds),
      default_mode: cdktn.stringToTerraform(this._defaultMode),
      description: cdktn.stringToTerraform(this._description),
      domain_acl_id: cdktn.stringToTerraform(this._domainAclId),
      name: cdktn.stringToTerraform(this._name),
      on_error_action: cdktn.stringToTerraform(this._onErrorAction),
      policy_set_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._policySetIds),
      rego_raise_error: cdktn.booleanToTerraform(this._regoRaiseError),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
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
      basic_auth_credential_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._basicAuthCredentialIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_mode: {
        value: cdktn.stringToHclTerraform(this._defaultMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_acl_id: {
        value: cdktn.stringToHclTerraform(this._domainAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_error_action: {
        value: cdktn.stringToHclTerraform(this._onErrorAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_set_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._policySetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rego_raise_error: {
        value: cdktn.booleanToHclTerraform(this._regoRaiseError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

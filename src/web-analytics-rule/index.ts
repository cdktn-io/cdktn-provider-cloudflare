/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WebAnalyticsRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule#account_id WebAnalyticsRule#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}
  */
  readonly host?: string;
  /**
  * Whether the rule includes or excludes traffic from being measured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule#inclusive WebAnalyticsRule#inclusive}
  */
  readonly inclusive?: boolean | cdktn.IResolvable;
  /**
  * Whether the rule is paused or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule#is_paused WebAnalyticsRule#is_paused}
  */
  readonly isPaused?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}
  */
  readonly paths?: string[];
  /**
  * The Web Analytics ruleset identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule#ruleset_id WebAnalyticsRule#ruleset_id}
  */
  readonly rulesetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule}
*/
export class WebAnalyticsRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_web_analytics_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WebAnalyticsRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAnalyticsRule to import
  * @param importFromId The id of the existing WebAnalyticsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAnalyticsRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAnalyticsRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WebAnalyticsRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_web_analytics_rule',
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
    this._host = config.host;
    this._inclusive = config.inclusive;
    this._isPaused = config.isPaused;
    this._paths = config.paths;
    this._rulesetId = config.rulesetId;
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

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inclusive - computed: false, optional: true, required: false
  private _inclusive?: boolean | cdktn.IResolvable; 
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }
  public set inclusive(value: boolean | cdktn.IResolvable) {
    this._inclusive = value;
  }
  public resetInclusive() {
    this._inclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveInput() {
    return this._inclusive;
  }

  // is_paused - computed: false, optional: true, required: false
  private _isPaused?: boolean | cdktn.IResolvable; 
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }
  public set isPaused(value: boolean | cdktn.IResolvable) {
    this._isPaused = value;
  }
  public resetIsPaused() {
    this._isPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPausedInput() {
    return this._isPaused;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // ruleset_id - computed: false, optional: false, required: true
  private _rulesetId?: string; 
  public get rulesetId() {
    return this.getStringAttribute('ruleset_id');
  }
  public set rulesetId(value: string) {
    this._rulesetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetIdInput() {
    return this._rulesetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      host: cdktn.stringToTerraform(this._host),
      inclusive: cdktn.booleanToTerraform(this._inclusive),
      is_paused: cdktn.booleanToTerraform(this._isPaused),
      paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._paths),
      ruleset_id: cdktn.stringToTerraform(this._rulesetId),
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
      host: {
        value: cdktn.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inclusive: {
        value: cdktn.booleanToHclTerraform(this._inclusive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_paused: {
        value: cdktn.booleanToHclTerraform(this._isPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._paths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ruleset_id: {
        value: cdktn.stringToHclTerraform(this._rulesetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

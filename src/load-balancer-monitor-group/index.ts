/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LoadBalancerMonitorGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#account_id LoadBalancerMonitorGroup#account_id}
  */
  readonly accountId: string;
  /**
  * A short description of the monitor group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#description LoadBalancerMonitorGroup#description}
  */
  readonly description: string;
  /**
  * List of monitors in this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#members LoadBalancerMonitorGroup#members}
  */
  readonly members: LoadBalancerMonitorGroupMembers[] | cdktn.IResolvable;
}
export interface LoadBalancerMonitorGroupMembers {
  /**
  * Whether this monitor is enabled in the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#enabled LoadBalancerMonitorGroup#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The ID of the Monitor to use for checking the health of origins within this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#monitor_id LoadBalancerMonitorGroup#monitor_id}
  */
  readonly monitorId: string;
  /**
  * Whether this monitor is used for monitoring only (does not affect pool health)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#monitoring_only LoadBalancerMonitorGroup#monitoring_only}
  */
  readonly monitoringOnly: boolean | cdktn.IResolvable;
  /**
  * Whether this monitor must be healthy for the pool to be considered healthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#must_be_healthy LoadBalancerMonitorGroup#must_be_healthy}
  */
  readonly mustBeHealthy: boolean | cdktn.IResolvable;
}

export function loadBalancerMonitorGroupMembersToTerraform(struct?: LoadBalancerMonitorGroupMembers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    monitor_id: cdktn.stringToTerraform(struct!.monitorId),
    monitoring_only: cdktn.booleanToTerraform(struct!.monitoringOnly),
    must_be_healthy: cdktn.booleanToTerraform(struct!.mustBeHealthy),
  }
}


export function loadBalancerMonitorGroupMembersToHclTerraform(struct?: LoadBalancerMonitorGroupMembers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_id: {
      value: cdktn.stringToHclTerraform(struct!.monitorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_only: {
      value: cdktn.booleanToHclTerraform(struct!.monitoringOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    must_be_healthy: {
      value: cdktn.booleanToHclTerraform(struct!.mustBeHealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerMonitorGroupMembersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LoadBalancerMonitorGroupMembers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._monitorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorId = this._monitorId;
    }
    if (this._monitoringOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringOnly = this._monitoringOnly;
    }
    if (this._mustBeHealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.mustBeHealthy = this._mustBeHealthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerMonitorGroupMembers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._monitorId = undefined;
      this._monitoringOnly = undefined;
      this._mustBeHealthy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._monitorId = value.monitorId;
      this._monitoringOnly = value.monitoringOnly;
      this._mustBeHealthy = value.mustBeHealthy;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
  }

  // monitoring_only - computed: false, optional: false, required: true
  private _monitoringOnly?: boolean | cdktn.IResolvable; 
  public get monitoringOnly() {
    return this.getBooleanAttribute('monitoring_only');
  }
  public set monitoringOnly(value: boolean | cdktn.IResolvable) {
    this._monitoringOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringOnlyInput() {
    return this._monitoringOnly;
  }

  // must_be_healthy - computed: false, optional: false, required: true
  private _mustBeHealthy?: boolean | cdktn.IResolvable; 
  public get mustBeHealthy() {
    return this.getBooleanAttribute('must_be_healthy');
  }
  public set mustBeHealthy(value: boolean | cdktn.IResolvable) {
    this._mustBeHealthy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mustBeHealthyInput() {
    return this._mustBeHealthy;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class LoadBalancerMonitorGroupMembersList extends cdktn.ComplexList {
  public internalValue? : LoadBalancerMonitorGroupMembers[] | cdktn.IResolvable

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
  public get(index: number): LoadBalancerMonitorGroupMembersOutputReference {
    return new LoadBalancerMonitorGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group cloudflare_load_balancer_monitor_group}
*/
export class LoadBalancerMonitorGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer_monitor_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerMonitorGroup to import
  * @param importFromId The id of the existing LoadBalancerMonitorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerMonitorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_monitor_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group cloudflare_load_balancer_monitor_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerMonitorGroupConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerMonitorGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer_monitor_group',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1',
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
    this._description = config.description;
    this._members.internalValue = config.members;
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: false, required: true
  private _members = new LoadBalancerMonitorGroupMembersList(this, "members", true);
  public get members() {
    return this._members;
  }
  public putMembers(value: LoadBalancerMonitorGroupMembers[] | cdktn.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      description: cdktn.stringToTerraform(this._description),
      members: cdktn.listMapper(loadBalancerMonitorGroupMembersToTerraform, false)(this._members.internalValue),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktn.listMapperHcl(loadBalancerMonitorGroupMembersToHclTerraform, false)(this._members.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadBalancerMonitorGroupMembersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Parent container details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account#managed_by Account#managed_by}
  */
  readonly managedBy?: AccountManagedBy;
  /**
  * Account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account#name Account#name}
  */
  readonly name: string;
  /**
  * Account settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account#settings Account#settings}
  */
  readonly settings?: AccountSettings;
  /**
  * Available values: "standard", "enterprise".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account#type Account#type}
  */
  readonly type?: string;
  /**
  * information related to the tenant unit, and optionally, an id of the unit to create the account on. see https://developers.cloudflare.com/tenant/how-to/manage-accounts/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account#unit Account#unit}
  */
  readonly unit?: AccountUnit;
}
export interface AccountManagedBy {
}

export function accountManagedByToTerraform(struct?: AccountManagedBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function accountManagedByToHclTerraform(struct?: AccountManagedBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AccountManagedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountManagedBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountManagedBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // parent_org_id - computed: true, optional: false, required: false
  public get parentOrgId() {
    return this.getStringAttribute('parent_org_id');
  }

  // parent_org_name - computed: true, optional: false, required: false
  public get parentOrgName() {
    return this.getStringAttribute('parent_org_name');
  }
}
export interface AccountSettings {
  /**
  * Sets an abuse contact email to notify for abuse reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account#abuse_contact_email Account#abuse_contact_email}
  */
  readonly abuseContactEmail?: string;
  /**
  * Indicates whether membership in this account requires that
  * Two-Factor Authentication is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account#enforce_twofactor Account#enforce_twofactor}
  */
  readonly enforceTwofactor?: boolean | cdktn.IResolvable;
}

export function accountSettingsToTerraform(struct?: AccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abuse_contact_email: cdktn.stringToTerraform(struct!.abuseContactEmail),
    enforce_twofactor: cdktn.booleanToTerraform(struct!.enforceTwofactor),
  }
}


export function accountSettingsToHclTerraform(struct?: AccountSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abuse_contact_email: {
      value: cdktn.stringToHclTerraform(struct!.abuseContactEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_twofactor: {
      value: cdktn.booleanToHclTerraform(struct!.enforceTwofactor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abuseContactEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.abuseContactEmail = this._abuseContactEmail;
    }
    if (this._enforceTwofactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTwofactor = this._enforceTwofactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abuseContactEmail = undefined;
      this._enforceTwofactor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abuseContactEmail = value.abuseContactEmail;
      this._enforceTwofactor = value.enforceTwofactor;
    }
  }

  // abuse_contact_email - computed: true, optional: true, required: false
  private _abuseContactEmail?: string; 
  public get abuseContactEmail() {
    return this.getStringAttribute('abuse_contact_email');
  }
  public set abuseContactEmail(value: string) {
    this._abuseContactEmail = value;
  }
  public resetAbuseContactEmail() {
    this._abuseContactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abuseContactEmailInput() {
    return this._abuseContactEmail;
  }

  // enforce_twofactor - computed: true, optional: true, required: false
  private _enforceTwofactor?: boolean | cdktn.IResolvable; 
  public get enforceTwofactor() {
    return this.getBooleanAttribute('enforce_twofactor');
  }
  public set enforceTwofactor(value: boolean | cdktn.IResolvable) {
    this._enforceTwofactor = value;
  }
  public resetEnforceTwofactor() {
    this._enforceTwofactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTwofactorInput() {
    return this._enforceTwofactor;
  }
}
export interface AccountUnit {
  /**
  * Tenant unit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account#id Account#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function accountUnitToTerraform(struct?: AccountUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function accountUnitToHclTerraform(struct?: AccountUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountUnit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountUnit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account cloudflare_account}
*/
export class Account extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Account resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Account to import
  * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Account to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/account cloudflare_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountConfig
  */
  public constructor(scope: Construct, id: string, config: AccountConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_account',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.18.0',
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
    this._managedBy.internalValue = config.managedBy;
    this._name = config.name;
    this._settings.internalValue = config.settings;
    this._type = config.type;
    this._unit.internalValue = config.unit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_by - computed: true, optional: true, required: false
  private _managedBy = new AccountManagedByOutputReference(this, "managed_by");
  public get managedBy() {
    return this._managedBy;
  }
  public putManagedBy(value: AccountManagedBy) {
    this._managedBy.internalValue = value;
  }
  public resetManagedBy() {
    this._managedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedByInput() {
    return this._managedBy.internalValue;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new AccountSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: AccountSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit - computed: true, optional: true, required: false
  private _unit = new AccountUnitOutputReference(this, "unit");
  public get unit() {
    return this._unit;
  }
  public putUnit(value: AccountUnit) {
    this._unit.internalValue = value;
  }
  public resetUnit() {
    this._unit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_by: accountManagedByToTerraform(this._managedBy.internalValue),
      name: cdktn.stringToTerraform(this._name),
      settings: accountSettingsToTerraform(this._settings.internalValue),
      type: cdktn.stringToTerraform(this._type),
      unit: accountUnitToTerraform(this._unit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      managed_by: {
        value: accountManagedByToHclTerraform(this._managedBy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountManagedBy",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: accountSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountSettings",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: accountUnitToHclTerraform(this._unit.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountUnit",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

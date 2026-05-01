/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ZeroTrustOrganizationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}
  */
  readonly accountId?: string;
  /**
  * When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}
  */
  readonly allowAuthenticateViaWarp?: boolean | cdktn.IResolvable;
  /**
  * The unique subdomain assigned to your Zero Trust organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}
  */
  readonly authDomain?: string;
  /**
  * When set to `true`, users skip the identity provider selection step during login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}
  */
  readonly autoRedirectToIdentity?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}
  */
  readonly customPages?: ZeroTrustOrganizationCustomPages;
  /**
  * Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. If enabled, you must explicitly configure an Access application and policy to allow traffic to your Cloudflare-protected resources. For domains you want to be public across all subdomains, add the domain to the `deny_unmatched_requests_exempted_zone_names` array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#deny_unmatched_requests ZeroTrustOrganization#deny_unmatched_requests}
  */
  readonly denyUnmatchedRequests?: boolean | cdktn.IResolvable;
  /**
  * Contains zone names to exempt from the `deny_unmatched_requests` feature. Requests to a subdomain in an exempted zone will block unauthenticated traffic by default if there is a configured Access application and policy that matches the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#deny_unmatched_requests_exempted_zone_names ZeroTrustOrganization#deny_unmatched_requests_exempted_zone_names}
  */
  readonly denyUnmatchedRequestsExemptedZoneNames?: string[];
  /**
  * Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this account when enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}
  */
  readonly isUiReadOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}
  */
  readonly loginDesign?: ZeroTrustOrganizationLoginDesign;
  /**
  * Configures multi-factor authentication (MFA) settings for an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#mfa_config ZeroTrustOrganization#mfa_config}
  */
  readonly mfaConfig?: ZeroTrustOrganizationMfaConfig;
  /**
  * Indicates if this organization can enforce multi-factor authentication (MFA) requirements at the application and policy level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#mfa_configuration_allowed ZeroTrustOrganization#mfa_configuration_allowed}
  */
  readonly mfaConfigurationAllowed?: boolean | cdktn.IResolvable;
  /**
  * Determines whether global MFA settings apply to applications by default. The organization must have MFA enabled with at least one authentication method and a session duration configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#mfa_required_for_all_apps ZeroTrustOrganization#mfa_required_for_all_apps}
  */
  readonly mfaRequiredForAllApps?: boolean | cdktn.IResolvable;
  /**
  * Configures SSH PIV key requirements for MFA using hardware security keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#mfa_ssh_piv_key_requirements ZeroTrustOrganization#mfa_ssh_piv_key_requirements}
  */
  readonly mfaSshPivKeyRequirements?: ZeroTrustOrganizationMfaSshPivKeyRequirements;
  /**
  * The name of your Zero Trust organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}
  */
  readonly name?: string;
  /**
  * The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * A description of the reason why the UI read only field is being toggled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}
  */
  readonly uiReadOnlyToggleReason?: string;
  /**
  * The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}
  */
  readonly userSeatExpirationInactiveTime?: string;
  /**
  * The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}
  */
  readonly warpAuthSessionDuration?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}
  */
  readonly zoneId?: string;
}
export interface ZeroTrustOrganizationCustomPages {
  /**
  * The uid of the custom page to use when a user is denied access after failing a non-identity rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#forbidden ZeroTrustOrganization#forbidden}
  */
  readonly forbidden?: string;
  /**
  * The uid of the custom page to use when a user is denied access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#identity_denied ZeroTrustOrganization#identity_denied}
  */
  readonly identityDenied?: string;
}

export function zeroTrustOrganizationCustomPagesToTerraform(struct?: ZeroTrustOrganizationCustomPages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forbidden: cdktn.stringToTerraform(struct!.forbidden),
    identity_denied: cdktn.stringToTerraform(struct!.identityDenied),
  }
}


export function zeroTrustOrganizationCustomPagesToHclTerraform(struct?: ZeroTrustOrganizationCustomPages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forbidden: {
      value: cdktn.stringToHclTerraform(struct!.forbidden),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_denied: {
      value: cdktn.stringToHclTerraform(struct!.identityDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustOrganizationCustomPagesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustOrganizationCustomPages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forbidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbidden = this._forbidden;
    }
    if (this._identityDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityDenied = this._identityDenied;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustOrganizationCustomPages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forbidden = undefined;
      this._identityDenied = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forbidden = value.forbidden;
      this._identityDenied = value.identityDenied;
    }
  }

  // forbidden - computed: false, optional: true, required: false
  private _forbidden?: string; 
  public get forbidden() {
    return this.getStringAttribute('forbidden');
  }
  public set forbidden(value: string) {
    this._forbidden = value;
  }
  public resetForbidden() {
    this._forbidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenInput() {
    return this._forbidden;
  }

  // identity_denied - computed: false, optional: true, required: false
  private _identityDenied?: string; 
  public get identityDenied() {
    return this.getStringAttribute('identity_denied');
  }
  public set identityDenied(value: string) {
    this._identityDenied = value;
  }
  public resetIdentityDenied() {
    this._identityDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDeniedInput() {
    return this._identityDenied;
  }
}
export interface ZeroTrustOrganizationLoginDesign {
  /**
  * The background color on your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#background_color ZeroTrustOrganization#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The text at the bottom of your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#footer_text ZeroTrustOrganization#footer_text}
  */
  readonly footerText?: string;
  /**
  * The text at the top of your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#header_text ZeroTrustOrganization#header_text}
  */
  readonly headerText?: string;
  /**
  * The URL of the logo on your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#logo_path ZeroTrustOrganization#logo_path}
  */
  readonly logoPath?: string;
  /**
  * The text color on your login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#text_color ZeroTrustOrganization#text_color}
  */
  readonly textColor?: string;
}

export function zeroTrustOrganizationLoginDesignToTerraform(struct?: ZeroTrustOrganizationLoginDesign | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktn.stringToTerraform(struct!.backgroundColor),
    footer_text: cdktn.stringToTerraform(struct!.footerText),
    header_text: cdktn.stringToTerraform(struct!.headerText),
    logo_path: cdktn.stringToTerraform(struct!.logoPath),
    text_color: cdktn.stringToTerraform(struct!.textColor),
  }
}


export function zeroTrustOrganizationLoginDesignToHclTerraform(struct?: ZeroTrustOrganizationLoginDesign | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktn.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    footer_text: {
      value: cdktn.stringToHclTerraform(struct!.footerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_text: {
      value: cdktn.stringToHclTerraform(struct!.headerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_path: {
      value: cdktn.stringToHclTerraform(struct!.logoPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktn.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustOrganizationLoginDesignOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustOrganizationLoginDesign | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._footerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerText = this._footerText;
    }
    if (this._headerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerText = this._headerText;
    }
    if (this._logoPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoPath = this._logoPath;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustOrganizationLoginDesign | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._footerText = undefined;
      this._headerText = undefined;
      this._logoPath = undefined;
      this._textColor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._footerText = value.footerText;
      this._headerText = value.headerText;
      this._logoPath = value.logoPath;
      this._textColor = value.textColor;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // footer_text - computed: false, optional: true, required: false
  private _footerText?: string; 
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }
  public set footerText(value: string) {
    this._footerText = value;
  }
  public resetFooterText() {
    this._footerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerTextInput() {
    return this._footerText;
  }

  // header_text - computed: false, optional: true, required: false
  private _headerText?: string; 
  public get headerText() {
    return this.getStringAttribute('header_text');
  }
  public set headerText(value: string) {
    this._headerText = value;
  }
  public resetHeaderText() {
    this._headerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTextInput() {
    return this._headerText;
  }

  // logo_path - computed: false, optional: true, required: false
  private _logoPath?: string; 
  public get logoPath() {
    return this.getStringAttribute('logo_path');
  }
  public set logoPath(value: string) {
    this._logoPath = value;
  }
  public resetLogoPath() {
    this._logoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoPathInput() {
    return this._logoPath;
  }

  // text_color - computed: false, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}
export interface ZeroTrustOrganizationMfaConfig {
  /**
  * Lists the MFA methods that users can authenticate with. `ssh_piv_key` is only relevant for infrastructure applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#allowed_authenticators ZeroTrustOrganization#allowed_authenticators}
  */
  readonly allowedAuthenticators?: string[];
  /**
  * Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authenticate contains "mfa". Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#amr_matching_session_duration ZeroTrustOrganization#amr_matching_session_duration}
  */
  readonly amrMatchingSessionDuration?: string;
  /**
  * Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#required_aaguids ZeroTrustOrganization#required_aaguids}
  */
  readonly requiredAaguids?: string;
  /**
  * Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}
  */
  readonly sessionDuration?: string;
}

export function zeroTrustOrganizationMfaConfigToTerraform(struct?: ZeroTrustOrganizationMfaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_authenticators: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAuthenticators),
    amr_matching_session_duration: cdktn.stringToTerraform(struct!.amrMatchingSessionDuration),
    required_aaguids: cdktn.stringToTerraform(struct!.requiredAaguids),
    session_duration: cdktn.stringToTerraform(struct!.sessionDuration),
  }
}


export function zeroTrustOrganizationMfaConfigToHclTerraform(struct?: ZeroTrustOrganizationMfaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_authenticators: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAuthenticators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    amr_matching_session_duration: {
      value: cdktn.stringToHclTerraform(struct!.amrMatchingSessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_aaguids: {
      value: cdktn.stringToHclTerraform(struct!.requiredAaguids),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_duration: {
      value: cdktn.stringToHclTerraform(struct!.sessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustOrganizationMfaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustOrganizationMfaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAuthenticators !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAuthenticators = this._allowedAuthenticators;
    }
    if (this._amrMatchingSessionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.amrMatchingSessionDuration = this._amrMatchingSessionDuration;
    }
    if (this._requiredAaguids !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAaguids = this._requiredAaguids;
    }
    if (this._sessionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionDuration = this._sessionDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustOrganizationMfaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAuthenticators = undefined;
      this._amrMatchingSessionDuration = undefined;
      this._requiredAaguids = undefined;
      this._sessionDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAuthenticators = value.allowedAuthenticators;
      this._amrMatchingSessionDuration = value.amrMatchingSessionDuration;
      this._requiredAaguids = value.requiredAaguids;
      this._sessionDuration = value.sessionDuration;
    }
  }

  // allowed_authenticators - computed: false, optional: true, required: false
  private _allowedAuthenticators?: string[]; 
  public get allowedAuthenticators() {
    return this.getListAttribute('allowed_authenticators');
  }
  public set allowedAuthenticators(value: string[]) {
    this._allowedAuthenticators = value;
  }
  public resetAllowedAuthenticators() {
    this._allowedAuthenticators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthenticatorsInput() {
    return this._allowedAuthenticators;
  }

  // amr_matching_session_duration - computed: false, optional: true, required: false
  private _amrMatchingSessionDuration?: string; 
  public get amrMatchingSessionDuration() {
    return this.getStringAttribute('amr_matching_session_duration');
  }
  public set amrMatchingSessionDuration(value: string) {
    this._amrMatchingSessionDuration = value;
  }
  public resetAmrMatchingSessionDuration() {
    this._amrMatchingSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amrMatchingSessionDurationInput() {
    return this._amrMatchingSessionDuration;
  }

  // required_aaguids - computed: false, optional: true, required: false
  private _requiredAaguids?: string; 
  public get requiredAaguids() {
    return this.getStringAttribute('required_aaguids');
  }
  public set requiredAaguids(value: string) {
    this._requiredAaguids = value;
  }
  public resetRequiredAaguids() {
    this._requiredAaguids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAaguidsInput() {
    return this._requiredAaguids;
  }

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }
}
export interface ZeroTrustOrganizationMfaSshPivKeyRequirements {
  /**
  * Defines when a PIN is required to use the SSH key. Valid values: `never` (no PIN required), `once` (PIN required once per session), `always` (PIN required for each use).
  * Available values: "never", "once", "always".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#pin_policy ZeroTrustOrganization#pin_policy}
  */
  readonly pinPolicy?: string;
  /**
  * Requires the SSH PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#require_fips_device ZeroTrustOrganization#require_fips_device}
  */
  readonly requireFipsDevice?: boolean | cdktn.IResolvable;
  /**
  * Specifies the allowed SSH key sizes in bits. Valid sizes depend on key type. Ed25519 has a fixed key size and does not accept this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#ssh_key_size ZeroTrustOrganization#ssh_key_size}
  */
  readonly sshKeySize?: number[];
  /**
  * Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#ssh_key_type ZeroTrustOrganization#ssh_key_type}
  */
  readonly sshKeyType?: string[];
  /**
  * Defines when physical touch is required to use the SSH key. Valid values: `never` (no touch required), `always` (touch required for each use), `cached` (touch cached for 15 seconds).
  * Available values: "never", "always", "cached".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#touch_policy ZeroTrustOrganization#touch_policy}
  */
  readonly touchPolicy?: string;
}

export function zeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(struct?: ZeroTrustOrganizationMfaSshPivKeyRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pin_policy: cdktn.stringToTerraform(struct!.pinPolicy),
    require_fips_device: cdktn.booleanToTerraform(struct!.requireFipsDevice),
    ssh_key_size: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.sshKeySize),
    ssh_key_type: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sshKeyType),
    touch_policy: cdktn.stringToTerraform(struct!.touchPolicy),
  }
}


export function zeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(struct?: ZeroTrustOrganizationMfaSshPivKeyRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pin_policy: {
      value: cdktn.stringToHclTerraform(struct!.pinPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_fips_device: {
      value: cdktn.booleanToHclTerraform(struct!.requireFipsDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_key_size: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.sshKeySize),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ssh_key_type: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sshKeyType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    touch_policy: {
      value: cdktn.stringToHclTerraform(struct!.touchPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustOrganizationMfaSshPivKeyRequirements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pinPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinPolicy = this._pinPolicy;
    }
    if (this._requireFipsDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireFipsDevice = this._requireFipsDevice;
    }
    if (this._sshKeySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeySize = this._sshKeySize;
    }
    if (this._sshKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyType = this._sshKeyType;
    }
    if (this._touchPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.touchPolicy = this._touchPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustOrganizationMfaSshPivKeyRequirements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pinPolicy = undefined;
      this._requireFipsDevice = undefined;
      this._sshKeySize = undefined;
      this._sshKeyType = undefined;
      this._touchPolicy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pinPolicy = value.pinPolicy;
      this._requireFipsDevice = value.requireFipsDevice;
      this._sshKeySize = value.sshKeySize;
      this._sshKeyType = value.sshKeyType;
      this._touchPolicy = value.touchPolicy;
    }
  }

  // pin_policy - computed: false, optional: true, required: false
  private _pinPolicy?: string; 
  public get pinPolicy() {
    return this.getStringAttribute('pin_policy');
  }
  public set pinPolicy(value: string) {
    this._pinPolicy = value;
  }
  public resetPinPolicy() {
    this._pinPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinPolicyInput() {
    return this._pinPolicy;
  }

  // require_fips_device - computed: false, optional: true, required: false
  private _requireFipsDevice?: boolean | cdktn.IResolvable; 
  public get requireFipsDevice() {
    return this.getBooleanAttribute('require_fips_device');
  }
  public set requireFipsDevice(value: boolean | cdktn.IResolvable) {
    this._requireFipsDevice = value;
  }
  public resetRequireFipsDevice() {
    this._requireFipsDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireFipsDeviceInput() {
    return this._requireFipsDevice;
  }

  // ssh_key_size - computed: false, optional: true, required: false
  private _sshKeySize?: number[]; 
  public get sshKeySize() {
    return this.getNumberListAttribute('ssh_key_size');
  }
  public set sshKeySize(value: number[]) {
    this._sshKeySize = value;
  }
  public resetSshKeySize() {
    this._sshKeySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeySizeInput() {
    return this._sshKeySize;
  }

  // ssh_key_type - computed: false, optional: true, required: false
  private _sshKeyType?: string[]; 
  public get sshKeyType() {
    return this.getListAttribute('ssh_key_type');
  }
  public set sshKeyType(value: string[]) {
    this._sshKeyType = value;
  }
  public resetSshKeyType() {
    this._sshKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyTypeInput() {
    return this._sshKeyType;
  }

  // touch_policy - computed: false, optional: true, required: false
  private _touchPolicy?: string; 
  public get touchPolicy() {
    return this.getStringAttribute('touch_policy');
  }
  public set touchPolicy(value: string) {
    this._touchPolicy = value;
  }
  public resetTouchPolicy() {
    this._touchPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get touchPolicyInput() {
    return this._touchPolicy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}
*/
export class ZeroTrustOrganization extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ZeroTrustOrganization resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustOrganization to import
  * @param importFromId The id of the existing ZeroTrustOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization cloudflare_zero_trust_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustOrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustOrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_organization',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.19.1',
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
    this._allowAuthenticateViaWarp = config.allowAuthenticateViaWarp;
    this._authDomain = config.authDomain;
    this._autoRedirectToIdentity = config.autoRedirectToIdentity;
    this._customPages.internalValue = config.customPages;
    this._denyUnmatchedRequests = config.denyUnmatchedRequests;
    this._denyUnmatchedRequestsExemptedZoneNames = config.denyUnmatchedRequestsExemptedZoneNames;
    this._isUiReadOnly = config.isUiReadOnly;
    this._loginDesign.internalValue = config.loginDesign;
    this._mfaConfig.internalValue = config.mfaConfig;
    this._mfaConfigurationAllowed = config.mfaConfigurationAllowed;
    this._mfaRequiredForAllApps = config.mfaRequiredForAllApps;
    this._mfaSshPivKeyRequirements.internalValue = config.mfaSshPivKeyRequirements;
    this._name = config.name;
    this._sessionDuration = config.sessionDuration;
    this._uiReadOnlyToggleReason = config.uiReadOnlyToggleReason;
    this._userSeatExpirationInactiveTime = config.userSeatExpirationInactiveTime;
    this._warpAuthSessionDuration = config.warpAuthSessionDuration;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // allow_authenticate_via_warp - computed: true, optional: true, required: false
  private _allowAuthenticateViaWarp?: boolean | cdktn.IResolvable; 
  public get allowAuthenticateViaWarp() {
    return this.getBooleanAttribute('allow_authenticate_via_warp');
  }
  public set allowAuthenticateViaWarp(value: boolean | cdktn.IResolvable) {
    this._allowAuthenticateViaWarp = value;
  }
  public resetAllowAuthenticateViaWarp() {
    this._allowAuthenticateViaWarp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthenticateViaWarpInput() {
    return this._allowAuthenticateViaWarp;
  }

  // auth_domain - computed: false, optional: true, required: false
  private _authDomain?: string; 
  public get authDomain() {
    return this.getStringAttribute('auth_domain');
  }
  public set authDomain(value: string) {
    this._authDomain = value;
  }
  public resetAuthDomain() {
    this._authDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDomainInput() {
    return this._authDomain;
  }

  // auto_redirect_to_identity - computed: true, optional: true, required: false
  private _autoRedirectToIdentity?: boolean | cdktn.IResolvable; 
  public get autoRedirectToIdentity() {
    return this.getBooleanAttribute('auto_redirect_to_identity');
  }
  public set autoRedirectToIdentity(value: boolean | cdktn.IResolvable) {
    this._autoRedirectToIdentity = value;
  }
  public resetAutoRedirectToIdentity() {
    this._autoRedirectToIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedirectToIdentityInput() {
    return this._autoRedirectToIdentity;
  }

  // custom_pages - computed: false, optional: true, required: false
  private _customPages = new ZeroTrustOrganizationCustomPagesOutputReference(this, "custom_pages");
  public get customPages() {
    return this._customPages;
  }
  public putCustomPages(value: ZeroTrustOrganizationCustomPages) {
    this._customPages.internalValue = value;
  }
  public resetCustomPages() {
    this._customPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPagesInput() {
    return this._customPages.internalValue;
  }

  // deny_unmatched_requests - computed: false, optional: true, required: false
  private _denyUnmatchedRequests?: boolean | cdktn.IResolvable; 
  public get denyUnmatchedRequests() {
    return this.getBooleanAttribute('deny_unmatched_requests');
  }
  public set denyUnmatchedRequests(value: boolean | cdktn.IResolvable) {
    this._denyUnmatchedRequests = value;
  }
  public resetDenyUnmatchedRequests() {
    this._denyUnmatchedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyUnmatchedRequestsInput() {
    return this._denyUnmatchedRequests;
  }

  // deny_unmatched_requests_exempted_zone_names - computed: false, optional: true, required: false
  private _denyUnmatchedRequestsExemptedZoneNames?: string[]; 
  public get denyUnmatchedRequestsExemptedZoneNames() {
    return this.getListAttribute('deny_unmatched_requests_exempted_zone_names');
  }
  public set denyUnmatchedRequestsExemptedZoneNames(value: string[]) {
    this._denyUnmatchedRequestsExemptedZoneNames = value;
  }
  public resetDenyUnmatchedRequestsExemptedZoneNames() {
    this._denyUnmatchedRequestsExemptedZoneNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyUnmatchedRequestsExemptedZoneNamesInput() {
    return this._denyUnmatchedRequestsExemptedZoneNames;
  }

  // is_ui_read_only - computed: true, optional: true, required: false
  private _isUiReadOnly?: boolean | cdktn.IResolvable; 
  public get isUiReadOnly() {
    return this.getBooleanAttribute('is_ui_read_only');
  }
  public set isUiReadOnly(value: boolean | cdktn.IResolvable) {
    this._isUiReadOnly = value;
  }
  public resetIsUiReadOnly() {
    this._isUiReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUiReadOnlyInput() {
    return this._isUiReadOnly;
  }

  // login_design - computed: false, optional: true, required: false
  private _loginDesign = new ZeroTrustOrganizationLoginDesignOutputReference(this, "login_design");
  public get loginDesign() {
    return this._loginDesign;
  }
  public putLoginDesign(value: ZeroTrustOrganizationLoginDesign) {
    this._loginDesign.internalValue = value;
  }
  public resetLoginDesign() {
    this._loginDesign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginDesignInput() {
    return this._loginDesign.internalValue;
  }

  // mfa_config - computed: false, optional: true, required: false
  private _mfaConfig = new ZeroTrustOrganizationMfaConfigOutputReference(this, "mfa_config");
  public get mfaConfig() {
    return this._mfaConfig;
  }
  public putMfaConfig(value: ZeroTrustOrganizationMfaConfig) {
    this._mfaConfig.internalValue = value;
  }
  public resetMfaConfig() {
    this._mfaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaConfigInput() {
    return this._mfaConfig.internalValue;
  }

  // mfa_configuration_allowed - computed: true, optional: true, required: false
  private _mfaConfigurationAllowed?: boolean | cdktn.IResolvable; 
  public get mfaConfigurationAllowed() {
    return this.getBooleanAttribute('mfa_configuration_allowed');
  }
  public set mfaConfigurationAllowed(value: boolean | cdktn.IResolvable) {
    this._mfaConfigurationAllowed = value;
  }
  public resetMfaConfigurationAllowed() {
    this._mfaConfigurationAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaConfigurationAllowedInput() {
    return this._mfaConfigurationAllowed;
  }

  // mfa_required_for_all_apps - computed: true, optional: true, required: false
  private _mfaRequiredForAllApps?: boolean | cdktn.IResolvable; 
  public get mfaRequiredForAllApps() {
    return this.getBooleanAttribute('mfa_required_for_all_apps');
  }
  public set mfaRequiredForAllApps(value: boolean | cdktn.IResolvable) {
    this._mfaRequiredForAllApps = value;
  }
  public resetMfaRequiredForAllApps() {
    this._mfaRequiredForAllApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaRequiredForAllAppsInput() {
    return this._mfaRequiredForAllApps;
  }

  // mfa_ssh_piv_key_requirements - computed: false, optional: true, required: false
  private _mfaSshPivKeyRequirements = new ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(this, "mfa_ssh_piv_key_requirements");
  public get mfaSshPivKeyRequirements() {
    return this._mfaSshPivKeyRequirements;
  }
  public putMfaSshPivKeyRequirements(value: ZeroTrustOrganizationMfaSshPivKeyRequirements) {
    this._mfaSshPivKeyRequirements.internalValue = value;
  }
  public resetMfaSshPivKeyRequirements() {
    this._mfaSshPivKeyRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaSshPivKeyRequirementsInput() {
    return this._mfaSshPivKeyRequirements.internalValue;
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

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // ui_read_only_toggle_reason - computed: true, optional: true, required: false
  private _uiReadOnlyToggleReason?: string; 
  public get uiReadOnlyToggleReason() {
    return this.getStringAttribute('ui_read_only_toggle_reason');
  }
  public set uiReadOnlyToggleReason(value: string) {
    this._uiReadOnlyToggleReason = value;
  }
  public resetUiReadOnlyToggleReason() {
    this._uiReadOnlyToggleReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiReadOnlyToggleReasonInput() {
    return this._uiReadOnlyToggleReason;
  }

  // user_seat_expiration_inactive_time - computed: false, optional: true, required: false
  private _userSeatExpirationInactiveTime?: string; 
  public get userSeatExpirationInactiveTime() {
    return this.getStringAttribute('user_seat_expiration_inactive_time');
  }
  public set userSeatExpirationInactiveTime(value: string) {
    this._userSeatExpirationInactiveTime = value;
  }
  public resetUserSeatExpirationInactiveTime() {
    this._userSeatExpirationInactiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSeatExpirationInactiveTimeInput() {
    return this._userSeatExpirationInactiveTime;
  }

  // warp_auth_session_duration - computed: false, optional: true, required: false
  private _warpAuthSessionDuration?: string; 
  public get warpAuthSessionDuration() {
    return this.getStringAttribute('warp_auth_session_duration');
  }
  public set warpAuthSessionDuration(value: string) {
    this._warpAuthSessionDuration = value;
  }
  public resetWarpAuthSessionDuration() {
    this._warpAuthSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warpAuthSessionDurationInput() {
    return this._warpAuthSessionDuration;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      account_id: cdktn.stringToTerraform(this._accountId),
      allow_authenticate_via_warp: cdktn.booleanToTerraform(this._allowAuthenticateViaWarp),
      auth_domain: cdktn.stringToTerraform(this._authDomain),
      auto_redirect_to_identity: cdktn.booleanToTerraform(this._autoRedirectToIdentity),
      custom_pages: zeroTrustOrganizationCustomPagesToTerraform(this._customPages.internalValue),
      deny_unmatched_requests: cdktn.booleanToTerraform(this._denyUnmatchedRequests),
      deny_unmatched_requests_exempted_zone_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._denyUnmatchedRequestsExemptedZoneNames),
      is_ui_read_only: cdktn.booleanToTerraform(this._isUiReadOnly),
      login_design: zeroTrustOrganizationLoginDesignToTerraform(this._loginDesign.internalValue),
      mfa_config: zeroTrustOrganizationMfaConfigToTerraform(this._mfaConfig.internalValue),
      mfa_configuration_allowed: cdktn.booleanToTerraform(this._mfaConfigurationAllowed),
      mfa_required_for_all_apps: cdktn.booleanToTerraform(this._mfaRequiredForAllApps),
      mfa_ssh_piv_key_requirements: zeroTrustOrganizationMfaSshPivKeyRequirementsToTerraform(this._mfaSshPivKeyRequirements.internalValue),
      name: cdktn.stringToTerraform(this._name),
      session_duration: cdktn.stringToTerraform(this._sessionDuration),
      ui_read_only_toggle_reason: cdktn.stringToTerraform(this._uiReadOnlyToggleReason),
      user_seat_expiration_inactive_time: cdktn.stringToTerraform(this._userSeatExpirationInactiveTime),
      warp_auth_session_duration: cdktn.stringToTerraform(this._warpAuthSessionDuration),
      zone_id: cdktn.stringToTerraform(this._zoneId),
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
      allow_authenticate_via_warp: {
        value: cdktn.booleanToHclTerraform(this._allowAuthenticateViaWarp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_domain: {
        value: cdktn.stringToHclTerraform(this._authDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_redirect_to_identity: {
        value: cdktn.booleanToHclTerraform(this._autoRedirectToIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_pages: {
        value: zeroTrustOrganizationCustomPagesToHclTerraform(this._customPages.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustOrganizationCustomPages",
      },
      deny_unmatched_requests: {
        value: cdktn.booleanToHclTerraform(this._denyUnmatchedRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deny_unmatched_requests_exempted_zone_names: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._denyUnmatchedRequestsExemptedZoneNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_ui_read_only: {
        value: cdktn.booleanToHclTerraform(this._isUiReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_design: {
        value: zeroTrustOrganizationLoginDesignToHclTerraform(this._loginDesign.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustOrganizationLoginDesign",
      },
      mfa_config: {
        value: zeroTrustOrganizationMfaConfigToHclTerraform(this._mfaConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustOrganizationMfaConfig",
      },
      mfa_configuration_allowed: {
        value: cdktn.booleanToHclTerraform(this._mfaConfigurationAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mfa_required_for_all_apps: {
        value: cdktn.booleanToHclTerraform(this._mfaRequiredForAllApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mfa_ssh_piv_key_requirements: {
        value: zeroTrustOrganizationMfaSshPivKeyRequirementsToHclTerraform(this._mfaSshPivKeyRequirements.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustOrganizationMfaSshPivKeyRequirements",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_duration: {
        value: cdktn.stringToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ui_read_only_toggle_reason: {
        value: cdktn.stringToHclTerraform(this._uiReadOnlyToggleReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_seat_expiration_inactive_time: {
        value: cdktn.stringToHclTerraform(this._userSeatExpirationInactiveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warp_auth_session_duration: {
        value: cdktn.stringToHclTerraform(this._warpAuthSessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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

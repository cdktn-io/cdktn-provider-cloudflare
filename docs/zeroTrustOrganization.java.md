# `zeroTrustOrganization` Submodule <a name="`zeroTrustOrganization` Submodule" id="@cdktn/provider-cloudflare.zeroTrustOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustOrganization <a name="ZeroTrustOrganization" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .allowAuthenticateViaWarp(java.lang.Boolean|IResolvable)
//  .authDomain(java.lang.String)
//  .autoRedirectToIdentity(java.lang.Boolean|IResolvable)
//  .customPages(ZeroTrustOrganizationCustomPages)
//  .denyUnmatchedRequests(java.lang.Boolean|IResolvable)
//  .denyUnmatchedRequestsExemptedZoneNames(java.util.List<java.lang.String>)
//  .isUiReadOnly(java.lang.Boolean|IResolvable)
//  .loginDesign(ZeroTrustOrganizationLoginDesign)
//  .mfaConfig(ZeroTrustOrganizationMfaConfig)
//  .mfaConfigurationAllowed(java.lang.Boolean|IResolvable)
//  .mfaRequiredForAllApps(java.lang.Boolean|IResolvable)
//  .mfaSshPivKeyRequirements(ZeroTrustOrganizationMfaSshPivKeyRequirements)
//  .name(java.lang.String)
//  .sessionDuration(java.lang.String)
//  .uiReadOnlyToggleReason(java.lang.String)
//  .userSeatExpirationInactiveTime(java.lang.String)
//  .warpAuthSessionDuration(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.authDomain">authDomain</a></code> | <code>java.lang.String</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to `true`, users skip the identity provider selection step during login. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.customPages">customPages</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.denyUnmatchedRequests">denyUnmatchedRequests</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.denyUnmatchedRequestsExemptedZoneNames">denyUnmatchedRequestsExemptedZoneNames</a></code> | <code>java.util.List<java.lang.String></code> | Contains zone names to exempt from the `deny_unmatched_requests` feature. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Lock all settings as Read-Only in the Dashboard, regardless of user permission. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.loginDesign">loginDesign</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.mfaConfig">mfaConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a></code> | Configures multi-factor authentication (MFA) settings for an organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.mfaConfigurationAllowed">mfaConfigurationAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if this organization can enforce multi-factor authentication (MFA) requirements at the application and policy level. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.mfaRequiredForAllApps">mfaRequiredForAllApps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines whether global MFA settings apply to applications by default. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.mfaSshPivKeyRequirements">mfaSshPivKeyRequirements</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a></code> | Configures SSH PIV key requirements for MFA using hardware security keys. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.allowAuthenticateViaWarp"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}

---

##### `authDomain`<sup>Optional</sup> <a name="authDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.authDomain"></a>

- *Type:* java.lang.String

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.autoRedirectToIdentity"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to `true`, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.customPages"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}.

---

##### `denyUnmatchedRequests`<sup>Optional</sup> <a name="denyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.denyUnmatchedRequests"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application.

If enabled, you must explicitly configure an Access application and policy to allow traffic to your Cloudflare-protected resources. For domains you want to be public across all subdomains, add the domain to the `deny_unmatched_requests_exempted_zone_names` array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#deny_unmatched_requests ZeroTrustOrganization#deny_unmatched_requests}

---

##### `denyUnmatchedRequestsExemptedZoneNames`<sup>Optional</sup> <a name="denyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.denyUnmatchedRequestsExemptedZoneNames"></a>

- *Type:* java.util.List<java.lang.String>

Contains zone names to exempt from the `deny_unmatched_requests` feature.

Requests to a subdomain in an exempted zone will block unauthenticated traffic by default if there is a configured Access application and policy that matches the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#deny_unmatched_requests_exempted_zone_names ZeroTrustOrganization#deny_unmatched_requests_exempted_zone_names}

---

##### `isUiReadOnly`<sup>Optional</sup> <a name="isUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.isUiReadOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Lock all settings as Read-Only in the Dashboard, regardless of user permission.

Updates may only be made via the API or Terraform for this account when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}

---

##### `loginDesign`<sup>Optional</sup> <a name="loginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.loginDesign"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}.

---

##### `mfaConfig`<sup>Optional</sup> <a name="mfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.mfaConfig"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a>

Configures multi-factor authentication (MFA) settings for an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#mfa_config ZeroTrustOrganization#mfa_config}

---

##### `mfaConfigurationAllowed`<sup>Optional</sup> <a name="mfaConfigurationAllowed" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.mfaConfigurationAllowed"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if this organization can enforce multi-factor authentication (MFA) requirements at the application and policy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#mfa_configuration_allowed ZeroTrustOrganization#mfa_configuration_allowed}

---

##### `mfaRequiredForAllApps`<sup>Optional</sup> <a name="mfaRequiredForAllApps" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.mfaRequiredForAllApps"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines whether global MFA settings apply to applications by default.

The organization must have MFA enabled with at least one authentication method and a session duration configured. Note: 'allowed_authenticators' cannot only contain 'ssh_piv_key' if the organization has any non-infrastructure applications because PIV keys are only compatible with infrastructure apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#mfa_required_for_all_apps ZeroTrustOrganization#mfa_required_for_all_apps}

---

##### `mfaSshPivKeyRequirements`<sup>Optional</sup> <a name="mfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.mfaSshPivKeyRequirements"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a>

Configures SSH PIV key requirements for MFA using hardware security keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#mfa_ssh_piv_key_requirements ZeroTrustOrganization#mfa_ssh_piv_key_requirements}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.sessionDuration"></a>

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}

---

##### `uiReadOnlyToggleReason`<sup>Optional</sup> <a name="uiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.uiReadOnlyToggleReason"></a>

- *Type:* java.lang.String

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}

---

##### `userSeatExpirationInactiveTime`<sup>Optional</sup> <a name="userSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.userSeatExpirationInactiveTime"></a>

- *Type:* java.lang.String

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}

---

##### `warpAuthSessionDuration`<sup>Optional</sup> <a name="warpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.warpAuthSessionDuration"></a>

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages">putCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign">putLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaConfig">putMfaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaSshPivKeyRequirements">putMfaSshPivKeyRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp">resetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain">resetAuthDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity">resetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages">resetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequests">resetDenyUnmatchedRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequestsExemptedZoneNames">resetDenyUnmatchedRequestsExemptedZoneNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly">resetIsUiReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign">resetLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaConfig">resetMfaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaConfigurationAllowed">resetMfaConfigurationAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaRequiredForAllApps">resetMfaRequiredForAllApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaSshPivKeyRequirements">resetMfaSshPivKeyRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason">resetUiReadOnlyToggleReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime">resetUserSeatExpirationInactiveTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration">resetWarpAuthSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomPages` <a name="putCustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages"></a>

```java
public void putCustomPages(ZeroTrustOrganizationCustomPages value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---

##### `putLoginDesign` <a name="putLoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign"></a>

```java
public void putLoginDesign(ZeroTrustOrganizationLoginDesign value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---

##### `putMfaConfig` <a name="putMfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaConfig"></a>

```java
public void putMfaConfig(ZeroTrustOrganizationMfaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a>

---

##### `putMfaSshPivKeyRequirements` <a name="putMfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaSshPivKeyRequirements"></a>

```java
public void putMfaSshPivKeyRequirements(ZeroTrustOrganizationMfaSshPivKeyRequirements value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaSshPivKeyRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAllowAuthenticateViaWarp` <a name="resetAllowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp"></a>

```java
public void resetAllowAuthenticateViaWarp()
```

##### `resetAuthDomain` <a name="resetAuthDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain"></a>

```java
public void resetAuthDomain()
```

##### `resetAutoRedirectToIdentity` <a name="resetAutoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity"></a>

```java
public void resetAutoRedirectToIdentity()
```

##### `resetCustomPages` <a name="resetCustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages"></a>

```java
public void resetCustomPages()
```

##### `resetDenyUnmatchedRequests` <a name="resetDenyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequests"></a>

```java
public void resetDenyUnmatchedRequests()
```

##### `resetDenyUnmatchedRequestsExemptedZoneNames` <a name="resetDenyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequestsExemptedZoneNames"></a>

```java
public void resetDenyUnmatchedRequestsExemptedZoneNames()
```

##### `resetIsUiReadOnly` <a name="resetIsUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly"></a>

```java
public void resetIsUiReadOnly()
```

##### `resetLoginDesign` <a name="resetLoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign"></a>

```java
public void resetLoginDesign()
```

##### `resetMfaConfig` <a name="resetMfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaConfig"></a>

```java
public void resetMfaConfig()
```

##### `resetMfaConfigurationAllowed` <a name="resetMfaConfigurationAllowed" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaConfigurationAllowed"></a>

```java
public void resetMfaConfigurationAllowed()
```

##### `resetMfaRequiredForAllApps` <a name="resetMfaRequiredForAllApps" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaRequiredForAllApps"></a>

```java
public void resetMfaRequiredForAllApps()
```

##### `resetMfaSshPivKeyRequirements` <a name="resetMfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaSshPivKeyRequirements"></a>

```java
public void resetMfaSshPivKeyRequirements()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName"></a>

```java
public void resetName()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```

##### `resetUiReadOnlyToggleReason` <a name="resetUiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason"></a>

```java
public void resetUiReadOnlyToggleReason()
```

##### `resetUserSeatExpirationInactiveTime` <a name="resetUserSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime"></a>

```java
public void resetUserSeatExpirationInactiveTime()
```

##### `resetWarpAuthSessionDuration` <a name="resetWarpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration"></a>

```java
public void resetWarpAuthSessionDuration()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages">customPages</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign">loginDesign</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfig">mfaConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference">ZeroTrustOrganizationMfaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaSshPivKeyRequirements">mfaSshPivKeyRequirements</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference">ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput">allowAuthenticateViaWarpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput">authDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput">autoRedirectToIdentityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput">customPagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNamesInput">denyUnmatchedRequestsExemptedZoneNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsInput">denyUnmatchedRequestsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput">isUiReadOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput">loginDesignInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigInput">mfaConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigurationAllowedInput">mfaConfigurationAllowedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaRequiredForAllAppsInput">mfaRequiredForAllAppsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaSshPivKeyRequirementsInput">mfaSshPivKeyRequirementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput">uiReadOnlyToggleReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput">userSeatExpirationInactiveTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput">warpAuthSessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain">authDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequests">denyUnmatchedRequests</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames">denyUnmatchedRequestsExemptedZoneNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigurationAllowed">mfaConfigurationAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaRequiredForAllApps">mfaRequiredForAllApps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customPages`<sup>Required</sup> <a name="customPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages"></a>

```java
public ZeroTrustOrganizationCustomPagesOutputReference getCustomPages();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a>

---

##### `loginDesign`<sup>Required</sup> <a name="loginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign"></a>

```java
public ZeroTrustOrganizationLoginDesignOutputReference getLoginDesign();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a>

---

##### `mfaConfig`<sup>Required</sup> <a name="mfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfig"></a>

```java
public ZeroTrustOrganizationMfaConfigOutputReference getMfaConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference">ZeroTrustOrganizationMfaConfigOutputReference</a>

---

##### `mfaSshPivKeyRequirements`<sup>Required</sup> <a name="mfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaSshPivKeyRequirements"></a>

```java
public ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference getMfaSshPivKeyRequirements();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference">ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="allowAuthenticateViaWarpInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowAuthenticateViaWarpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authDomainInput`<sup>Optional</sup> <a name="authDomainInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput"></a>

```java
public java.lang.String getAuthDomainInput();
```

- *Type:* java.lang.String

---

##### `autoRedirectToIdentityInput`<sup>Optional</sup> <a name="autoRedirectToIdentityInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoRedirectToIdentityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customPagesInput`<sup>Optional</sup> <a name="customPagesInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput"></a>

```java
public IResolvable|ZeroTrustOrganizationCustomPages getCustomPagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---

##### `denyUnmatchedRequestsExemptedZoneNamesInput`<sup>Optional</sup> <a name="denyUnmatchedRequestsExemptedZoneNamesInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNamesInput"></a>

```java
public java.util.List<java.lang.String> getDenyUnmatchedRequestsExemptedZoneNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `denyUnmatchedRequestsInput`<sup>Optional</sup> <a name="denyUnmatchedRequestsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsInput"></a>

```java
public java.lang.Boolean|IResolvable getDenyUnmatchedRequestsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isUiReadOnlyInput`<sup>Optional</sup> <a name="isUiReadOnlyInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getIsUiReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loginDesignInput`<sup>Optional</sup> <a name="loginDesignInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput"></a>

```java
public IResolvable|ZeroTrustOrganizationLoginDesign getLoginDesignInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---

##### `mfaConfigInput`<sup>Optional</sup> <a name="mfaConfigInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigInput"></a>

```java
public IResolvable|ZeroTrustOrganizationMfaConfig getMfaConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a>

---

##### `mfaConfigurationAllowedInput`<sup>Optional</sup> <a name="mfaConfigurationAllowedInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigurationAllowedInput"></a>

```java
public java.lang.Boolean|IResolvable getMfaConfigurationAllowedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mfaRequiredForAllAppsInput`<sup>Optional</sup> <a name="mfaRequiredForAllAppsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaRequiredForAllAppsInput"></a>

```java
public java.lang.Boolean|IResolvable getMfaRequiredForAllAppsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mfaSshPivKeyRequirementsInput`<sup>Optional</sup> <a name="mfaSshPivKeyRequirementsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaSshPivKeyRequirementsInput"></a>

```java
public IResolvable|ZeroTrustOrganizationMfaSshPivKeyRequirements getMfaSshPivKeyRequirementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput"></a>

```java
public java.lang.String getSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `uiReadOnlyToggleReasonInput`<sup>Optional</sup> <a name="uiReadOnlyToggleReasonInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput"></a>

```java
public java.lang.String getUiReadOnlyToggleReasonInput();
```

- *Type:* java.lang.String

---

##### `userSeatExpirationInactiveTimeInput`<sup>Optional</sup> <a name="userSeatExpirationInactiveTimeInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTimeInput();
```

- *Type:* java.lang.String

---

##### `warpAuthSessionDurationInput`<sup>Optional</sup> <a name="warpAuthSessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput"></a>

```java
public java.lang.String getWarpAuthSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowAuthenticateViaWarp`<sup>Required</sup> <a name="allowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp"></a>

```java
public java.lang.Boolean|IResolvable getAllowAuthenticateViaWarp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain"></a>

```java
public java.lang.String getAuthDomain();
```

- *Type:* java.lang.String

---

##### `autoRedirectToIdentity`<sup>Required</sup> <a name="autoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity"></a>

```java
public java.lang.Boolean|IResolvable getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `denyUnmatchedRequests`<sup>Required</sup> <a name="denyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequests"></a>

```java
public java.lang.Boolean|IResolvable getDenyUnmatchedRequests();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `denyUnmatchedRequestsExemptedZoneNames`<sup>Required</sup> <a name="denyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames"></a>

```java
public java.util.List<java.lang.String> getDenyUnmatchedRequestsExemptedZoneNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isUiReadOnly`<sup>Required</sup> <a name="isUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly"></a>

```java
public java.lang.Boolean|IResolvable getIsUiReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mfaConfigurationAllowed`<sup>Required</sup> <a name="mfaConfigurationAllowed" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigurationAllowed"></a>

```java
public java.lang.Boolean|IResolvable getMfaConfigurationAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mfaRequiredForAllApps`<sup>Required</sup> <a name="mfaRequiredForAllApps" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaRequiredForAllApps"></a>

```java
public java.lang.Boolean|IResolvable getMfaRequiredForAllApps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `uiReadOnlyToggleReason`<sup>Required</sup> <a name="uiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason"></a>

```java
public java.lang.String getUiReadOnlyToggleReason();
```

- *Type:* java.lang.String

---

##### `userSeatExpirationInactiveTime`<sup>Required</sup> <a name="userSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTime();
```

- *Type:* java.lang.String

---

##### `warpAuthSessionDuration`<sup>Required</sup> <a name="warpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration"></a>

```java
public java.lang.String getWarpAuthSessionDuration();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustOrganizationConfig <a name="ZeroTrustOrganizationConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationConfig;

ZeroTrustOrganizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .allowAuthenticateViaWarp(java.lang.Boolean|IResolvable)
//  .authDomain(java.lang.String)
//  .autoRedirectToIdentity(java.lang.Boolean|IResolvable)
//  .customPages(ZeroTrustOrganizationCustomPages)
//  .denyUnmatchedRequests(java.lang.Boolean|IResolvable)
//  .denyUnmatchedRequestsExemptedZoneNames(java.util.List<java.lang.String>)
//  .isUiReadOnly(java.lang.Boolean|IResolvable)
//  .loginDesign(ZeroTrustOrganizationLoginDesign)
//  .mfaConfig(ZeroTrustOrganizationMfaConfig)
//  .mfaConfigurationAllowed(java.lang.Boolean|IResolvable)
//  .mfaRequiredForAllApps(java.lang.Boolean|IResolvable)
//  .mfaSshPivKeyRequirements(ZeroTrustOrganizationMfaSshPivKeyRequirements)
//  .name(java.lang.String)
//  .sessionDuration(java.lang.String)
//  .uiReadOnlyToggleReason(java.lang.String)
//  .userSeatExpirationInactiveTime(java.lang.String)
//  .warpAuthSessionDuration(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain">authDomain</a></code> | <code>java.lang.String</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to `true`, users skip the identity provider selection step during login. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages">customPages</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequests">denyUnmatchedRequests</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequestsExemptedZoneNames">denyUnmatchedRequestsExemptedZoneNames</a></code> | <code>java.util.List<java.lang.String></code> | Contains zone names to exempt from the `deny_unmatched_requests` feature. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Lock all settings as Read-Only in the Dashboard, regardless of user permission. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign">loginDesign</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaConfig">mfaConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a></code> | Configures multi-factor authentication (MFA) settings for an organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaConfigurationAllowed">mfaConfigurationAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if this organization can enforce multi-factor authentication (MFA) requirements at the application and policy level. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaRequiredForAllApps">mfaRequiredForAllApps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines whether global MFA settings apply to applications by default. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaSshPivKeyRequirements">mfaSshPivKeyRequirements</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a></code> | Configures SSH PIV key requirements for MFA using hardware security keys. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp"></a>

```java
public java.lang.Boolean|IResolvable getAllowAuthenticateViaWarp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}

---

##### `authDomain`<sup>Optional</sup> <a name="authDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain"></a>

```java
public java.lang.String getAuthDomain();
```

- *Type:* java.lang.String

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity"></a>

```java
public java.lang.Boolean|IResolvable getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to `true`, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages"></a>

```java
public ZeroTrustOrganizationCustomPages getCustomPages();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}.

---

##### `denyUnmatchedRequests`<sup>Optional</sup> <a name="denyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequests"></a>

```java
public java.lang.Boolean|IResolvable getDenyUnmatchedRequests();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application.

If enabled, you must explicitly configure an Access application and policy to allow traffic to your Cloudflare-protected resources. For domains you want to be public across all subdomains, add the domain to the `deny_unmatched_requests_exempted_zone_names` array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#deny_unmatched_requests ZeroTrustOrganization#deny_unmatched_requests}

---

##### `denyUnmatchedRequestsExemptedZoneNames`<sup>Optional</sup> <a name="denyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequestsExemptedZoneNames"></a>

```java
public java.util.List<java.lang.String> getDenyUnmatchedRequestsExemptedZoneNames();
```

- *Type:* java.util.List<java.lang.String>

Contains zone names to exempt from the `deny_unmatched_requests` feature.

Requests to a subdomain in an exempted zone will block unauthenticated traffic by default if there is a configured Access application and policy that matches the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#deny_unmatched_requests_exempted_zone_names ZeroTrustOrganization#deny_unmatched_requests_exempted_zone_names}

---

##### `isUiReadOnly`<sup>Optional</sup> <a name="isUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly"></a>

```java
public java.lang.Boolean|IResolvable getIsUiReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Lock all settings as Read-Only in the Dashboard, regardless of user permission.

Updates may only be made via the API or Terraform for this account when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}

---

##### `loginDesign`<sup>Optional</sup> <a name="loginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign"></a>

```java
public ZeroTrustOrganizationLoginDesign getLoginDesign();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}.

---

##### `mfaConfig`<sup>Optional</sup> <a name="mfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaConfig"></a>

```java
public ZeroTrustOrganizationMfaConfig getMfaConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a>

Configures multi-factor authentication (MFA) settings for an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#mfa_config ZeroTrustOrganization#mfa_config}

---

##### `mfaConfigurationAllowed`<sup>Optional</sup> <a name="mfaConfigurationAllowed" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaConfigurationAllowed"></a>

```java
public java.lang.Boolean|IResolvable getMfaConfigurationAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if this organization can enforce multi-factor authentication (MFA) requirements at the application and policy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#mfa_configuration_allowed ZeroTrustOrganization#mfa_configuration_allowed}

---

##### `mfaRequiredForAllApps`<sup>Optional</sup> <a name="mfaRequiredForAllApps" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaRequiredForAllApps"></a>

```java
public java.lang.Boolean|IResolvable getMfaRequiredForAllApps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines whether global MFA settings apply to applications by default.

The organization must have MFA enabled with at least one authentication method and a session duration configured. Note: 'allowed_authenticators' cannot only contain 'ssh_piv_key' if the organization has any non-infrastructure applications because PIV keys are only compatible with infrastructure apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#mfa_required_for_all_apps ZeroTrustOrganization#mfa_required_for_all_apps}

---

##### `mfaSshPivKeyRequirements`<sup>Optional</sup> <a name="mfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaSshPivKeyRequirements"></a>

```java
public ZeroTrustOrganizationMfaSshPivKeyRequirements getMfaSshPivKeyRequirements();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a>

Configures SSH PIV key requirements for MFA using hardware security keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#mfa_ssh_piv_key_requirements ZeroTrustOrganization#mfa_ssh_piv_key_requirements}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}

---

##### `uiReadOnlyToggleReason`<sup>Optional</sup> <a name="uiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason"></a>

```java
public java.lang.String getUiReadOnlyToggleReason();
```

- *Type:* java.lang.String

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}

---

##### `userSeatExpirationInactiveTime`<sup>Optional</sup> <a name="userSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTime();
```

- *Type:* java.lang.String

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}

---

##### `warpAuthSessionDuration`<sup>Optional</sup> <a name="warpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration"></a>

```java
public java.lang.String getWarpAuthSessionDuration();
```

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}

---

### ZeroTrustOrganizationCustomPages <a name="ZeroTrustOrganizationCustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationCustomPages;

ZeroTrustOrganizationCustomPages.builder()
//  .forbidden(java.lang.String)
//  .identityDenied(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden">forbidden</a></code> | <code>java.lang.String</code> | The uid of the custom page to use when a user is denied access after failing a non-identity rule. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied">identityDenied</a></code> | <code>java.lang.String</code> | The uid of the custom page to use when a user is denied access. |

---

##### `forbidden`<sup>Optional</sup> <a name="forbidden" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden"></a>

```java
public java.lang.String getForbidden();
```

- *Type:* java.lang.String

The uid of the custom page to use when a user is denied access after failing a non-identity rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#forbidden ZeroTrustOrganization#forbidden}

---

##### `identityDenied`<sup>Optional</sup> <a name="identityDenied" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied"></a>

```java
public java.lang.String getIdentityDenied();
```

- *Type:* java.lang.String

The uid of the custom page to use when a user is denied access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#identity_denied ZeroTrustOrganization#identity_denied}

---

### ZeroTrustOrganizationLoginDesign <a name="ZeroTrustOrganizationLoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationLoginDesign;

ZeroTrustOrganizationLoginDesign.builder()
//  .backgroundColor(java.lang.String)
//  .footerText(java.lang.String)
//  .headerText(java.lang.String)
//  .logoPath(java.lang.String)
//  .textColor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | The background color on your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText">footerText</a></code> | <code>java.lang.String</code> | The text at the bottom of your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText">headerText</a></code> | <code>java.lang.String</code> | The text at the top of your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath">logoPath</a></code> | <code>java.lang.String</code> | The URL of the logo on your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor">textColor</a></code> | <code>java.lang.String</code> | The text color on your login page. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

The background color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#background_color ZeroTrustOrganization#background_color}

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText"></a>

```java
public java.lang.String getFooterText();
```

- *Type:* java.lang.String

The text at the bottom of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#footer_text ZeroTrustOrganization#footer_text}

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText"></a>

```java
public java.lang.String getHeaderText();
```

- *Type:* java.lang.String

The text at the top of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#header_text ZeroTrustOrganization#header_text}

---

##### `logoPath`<sup>Optional</sup> <a name="logoPath" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath"></a>

```java
public java.lang.String getLogoPath();
```

- *Type:* java.lang.String

The URL of the logo on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#logo_path ZeroTrustOrganization#logo_path}

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

The text color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#text_color ZeroTrustOrganization#text_color}

---

### ZeroTrustOrganizationMfaConfig <a name="ZeroTrustOrganizationMfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationMfaConfig;

ZeroTrustOrganizationMfaConfig.builder()
//  .allowedAuthenticators(java.util.List<java.lang.String>)
//  .amrMatchingSessionDuration(java.lang.String)
//  .requiredAaguids(java.lang.String)
//  .sessionDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.allowedAuthenticators">allowedAuthenticators</a></code> | <code>java.util.List<java.lang.String></code> | Lists the MFA methods that users can authenticate with. `ssh_piv_key` is only relevant for infrastructure applications. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.amrMatchingSessionDuration">amrMatchingSessionDuration</a></code> | <code>java.lang.String</code> | Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authenticate contains "mfa". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.requiredAaguids">requiredAaguids</a></code> | <code>java.lang.String</code> | Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | Defines the duration of an MFA session. |

---

##### `allowedAuthenticators`<sup>Optional</sup> <a name="allowedAuthenticators" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.allowedAuthenticators"></a>

```java
public java.util.List<java.lang.String> getAllowedAuthenticators();
```

- *Type:* java.util.List<java.lang.String>

Lists the MFA methods that users can authenticate with. `ssh_piv_key` is only relevant for infrastructure applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#allowed_authenticators ZeroTrustOrganization#allowed_authenticators}

---

##### `amrMatchingSessionDuration`<sup>Optional</sup> <a name="amrMatchingSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.amrMatchingSessionDuration"></a>

```java
public java.lang.String getAmrMatchingSessionDuration();
```

- *Type:* java.lang.String

Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authenticate contains "mfa".

Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#amr_matching_session_duration ZeroTrustOrganization#amr_matching_session_duration}

---

##### `requiredAaguids`<sup>Optional</sup> <a name="requiredAaguids" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.requiredAaguids"></a>

```java
public java.lang.String getRequiredAaguids();
```

- *Type:* java.lang.String

Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#required_aaguids ZeroTrustOrganization#required_aaguids}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

Defines the duration of an MFA session.

Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}

---

### ZeroTrustOrganizationMfaSshPivKeyRequirements <a name="ZeroTrustOrganizationMfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationMfaSshPivKeyRequirements;

ZeroTrustOrganizationMfaSshPivKeyRequirements.builder()
//  .pinPolicy(java.lang.String)
//  .requireFipsDevice(java.lang.Boolean|IResolvable)
//  .sshKeySize(java.util.List<java.lang.Number>)
//  .sshKeyType(java.util.List<java.lang.String>)
//  .touchPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.pinPolicy">pinPolicy</a></code> | <code>java.lang.String</code> | Defines when a PIN is required to use the SSH key. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.requireFipsDevice">requireFipsDevice</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Requires the SSH PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.sshKeySize">sshKeySize</a></code> | <code>java.util.List<java.lang.Number></code> | Specifies the allowed SSH key sizes in bits. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.sshKeyType">sshKeyType</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.touchPolicy">touchPolicy</a></code> | <code>java.lang.String</code> | Defines when physical touch is required to use the SSH key. |

---

##### `pinPolicy`<sup>Optional</sup> <a name="pinPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.pinPolicy"></a>

```java
public java.lang.String getPinPolicy();
```

- *Type:* java.lang.String

Defines when a PIN is required to use the SSH key.

Valid values: `never` (no PIN required), `once` (PIN required once per session), `always` (PIN required for each use).
Available values: "never", "once", "always".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#pin_policy ZeroTrustOrganization#pin_policy}

---

##### `requireFipsDevice`<sup>Optional</sup> <a name="requireFipsDevice" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.requireFipsDevice"></a>

```java
public java.lang.Boolean|IResolvable getRequireFipsDevice();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Requires the SSH PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#require_fips_device ZeroTrustOrganization#require_fips_device}

---

##### `sshKeySize`<sup>Optional</sup> <a name="sshKeySize" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.sshKeySize"></a>

```java
public java.util.List<java.lang.Number> getSshKeySize();
```

- *Type:* java.util.List<java.lang.Number>

Specifies the allowed SSH key sizes in bits.

Valid sizes depend on key type. Ed25519 has a fixed key size and does not accept this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#ssh_key_size ZeroTrustOrganization#ssh_key_size}

---

##### `sshKeyType`<sup>Optional</sup> <a name="sshKeyType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.sshKeyType"></a>

```java
public java.util.List<java.lang.String> getSshKeyType();
```

- *Type:* java.util.List<java.lang.String>

Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#ssh_key_type ZeroTrustOrganization#ssh_key_type}

---

##### `touchPolicy`<sup>Optional</sup> <a name="touchPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.touchPolicy"></a>

```java
public java.lang.String getTouchPolicy();
```

- *Type:* java.lang.String

Defines when physical touch is required to use the SSH key.

Valid values: `never` (no touch required), `always` (touch required for each use), `cached` (touch cached for 15 seconds).
Available values: "never", "always", "cached".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_organization#touch_policy ZeroTrustOrganization#touch_policy}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustOrganizationCustomPagesOutputReference <a name="ZeroTrustOrganizationCustomPagesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationCustomPagesOutputReference;

new ZeroTrustOrganizationCustomPagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden">resetForbidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied">resetIdentityDenied</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForbidden` <a name="resetForbidden" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden"></a>

```java
public void resetForbidden()
```

##### `resetIdentityDenied` <a name="resetIdentityDenied" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied"></a>

```java
public void resetIdentityDenied()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput">forbiddenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput">identityDeniedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden">forbidden</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied">identityDenied</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forbiddenInput`<sup>Optional</sup> <a name="forbiddenInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput"></a>

```java
public java.lang.String getForbiddenInput();
```

- *Type:* java.lang.String

---

##### `identityDeniedInput`<sup>Optional</sup> <a name="identityDeniedInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput"></a>

```java
public java.lang.String getIdentityDeniedInput();
```

- *Type:* java.lang.String

---

##### `forbidden`<sup>Required</sup> <a name="forbidden" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden"></a>

```java
public java.lang.String getForbidden();
```

- *Type:* java.lang.String

---

##### `identityDenied`<sup>Required</sup> <a name="identityDenied" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```java
public java.lang.String getIdentityDenied();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustOrganizationCustomPages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---


### ZeroTrustOrganizationLoginDesignOutputReference <a name="ZeroTrustOrganizationLoginDesignOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationLoginDesignOutputReference;

new ZeroTrustOrganizationLoginDesignOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText">resetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText">resetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath">resetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```java
public void resetBackgroundColor()
```

##### `resetFooterText` <a name="resetFooterText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText"></a>

```java
public void resetFooterText()
```

##### `resetHeaderText` <a name="resetHeaderText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```java
public void resetHeaderText()
```

##### `resetLogoPath` <a name="resetLogoPath" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```java
public void resetLogoPath()
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor"></a>

```java
public void resetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput">footerTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput">headerTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput">logoPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput">textColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText">footerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText">headerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath">logoPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```java
public java.lang.String getBackgroundColorInput();
```

- *Type:* java.lang.String

---

##### `footerTextInput`<sup>Optional</sup> <a name="footerTextInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```java
public java.lang.String getFooterTextInput();
```

- *Type:* java.lang.String

---

##### `headerTextInput`<sup>Optional</sup> <a name="headerTextInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```java
public java.lang.String getHeaderTextInput();
```

- *Type:* java.lang.String

---

##### `logoPathInput`<sup>Optional</sup> <a name="logoPathInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```java
public java.lang.String getLogoPathInput();
```

- *Type:* java.lang.String

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```java
public java.lang.String getTextColorInput();
```

- *Type:* java.lang.String

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText"></a>

```java
public java.lang.String getFooterText();
```

- *Type:* java.lang.String

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText"></a>

```java
public java.lang.String getHeaderText();
```

- *Type:* java.lang.String

---

##### `logoPath`<sup>Required</sup> <a name="logoPath" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath"></a>

```java
public java.lang.String getLogoPath();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustOrganizationLoginDesign getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---


### ZeroTrustOrganizationMfaConfigOutputReference <a name="ZeroTrustOrganizationMfaConfigOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationMfaConfigOutputReference;

new ZeroTrustOrganizationMfaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetAllowedAuthenticators">resetAllowedAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetAmrMatchingSessionDuration">resetAmrMatchingSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetRequiredAaguids">resetRequiredAaguids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAuthenticators` <a name="resetAllowedAuthenticators" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetAllowedAuthenticators"></a>

```java
public void resetAllowedAuthenticators()
```

##### `resetAmrMatchingSessionDuration` <a name="resetAmrMatchingSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetAmrMatchingSessionDuration"></a>

```java
public void resetAmrMatchingSessionDuration()
```

##### `resetRequiredAaguids` <a name="resetRequiredAaguids" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetRequiredAaguids"></a>

```java
public void resetRequiredAaguids()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticatorsInput">allowedAuthenticatorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDurationInput">amrMatchingSessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguidsInput">requiredAaguidsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticators">allowedAuthenticators</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDuration">amrMatchingSessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguids">requiredAaguids</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAuthenticatorsInput`<sup>Optional</sup> <a name="allowedAuthenticatorsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticatorsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAuthenticatorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `amrMatchingSessionDurationInput`<sup>Optional</sup> <a name="amrMatchingSessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDurationInput"></a>

```java
public java.lang.String getAmrMatchingSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `requiredAaguidsInput`<sup>Optional</sup> <a name="requiredAaguidsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguidsInput"></a>

```java
public java.lang.String getRequiredAaguidsInput();
```

- *Type:* java.lang.String

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.sessionDurationInput"></a>

```java
public java.lang.String getSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `allowedAuthenticators`<sup>Required</sup> <a name="allowedAuthenticators" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticators"></a>

```java
public java.util.List<java.lang.String> getAllowedAuthenticators();
```

- *Type:* java.util.List<java.lang.String>

---

##### `amrMatchingSessionDuration`<sup>Required</sup> <a name="amrMatchingSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDuration"></a>

```java
public java.lang.String getAmrMatchingSessionDuration();
```

- *Type:* java.lang.String

---

##### `requiredAaguids`<sup>Required</sup> <a name="requiredAaguids" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguids"></a>

```java
public java.lang.String getRequiredAaguids();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustOrganizationMfaConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a>

---


### ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference <a name="ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference;

new ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetPinPolicy">resetPinPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetRequireFipsDevice">resetRequireFipsDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetSshKeySize">resetSshKeySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetSshKeyType">resetSshKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetTouchPolicy">resetTouchPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPinPolicy` <a name="resetPinPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetPinPolicy"></a>

```java
public void resetPinPolicy()
```

##### `resetRequireFipsDevice` <a name="resetRequireFipsDevice" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetRequireFipsDevice"></a>

```java
public void resetRequireFipsDevice()
```

##### `resetSshKeySize` <a name="resetSshKeySize" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetSshKeySize"></a>

```java
public void resetSshKeySize()
```

##### `resetSshKeyType` <a name="resetSshKeyType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetSshKeyType"></a>

```java
public void resetSshKeyType()
```

##### `resetTouchPolicy` <a name="resetTouchPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetTouchPolicy"></a>

```java
public void resetTouchPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicyInput">pinPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDeviceInput">requireFipsDeviceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySizeInput">sshKeySizeInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyTypeInput">sshKeyTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicyInput">touchPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicy">pinPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDevice">requireFipsDevice</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySize">sshKeySize</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyType">sshKeyType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicy">touchPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pinPolicyInput`<sup>Optional</sup> <a name="pinPolicyInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicyInput"></a>

```java
public java.lang.String getPinPolicyInput();
```

- *Type:* java.lang.String

---

##### `requireFipsDeviceInput`<sup>Optional</sup> <a name="requireFipsDeviceInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDeviceInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireFipsDeviceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sshKeySizeInput`<sup>Optional</sup> <a name="sshKeySizeInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySizeInput"></a>

```java
public java.util.List<java.lang.Number> getSshKeySizeInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `sshKeyTypeInput`<sup>Optional</sup> <a name="sshKeyTypeInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyTypeInput"></a>

```java
public java.util.List<java.lang.String> getSshKeyTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `touchPolicyInput`<sup>Optional</sup> <a name="touchPolicyInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicyInput"></a>

```java
public java.lang.String getTouchPolicyInput();
```

- *Type:* java.lang.String

---

##### `pinPolicy`<sup>Required</sup> <a name="pinPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicy"></a>

```java
public java.lang.String getPinPolicy();
```

- *Type:* java.lang.String

---

##### `requireFipsDevice`<sup>Required</sup> <a name="requireFipsDevice" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDevice"></a>

```java
public java.lang.Boolean|IResolvable getRequireFipsDevice();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sshKeySize`<sup>Required</sup> <a name="sshKeySize" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySize"></a>

```java
public java.util.List<java.lang.Number> getSshKeySize();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `sshKeyType`<sup>Required</sup> <a name="sshKeyType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyType"></a>

```java
public java.util.List<java.lang.String> getSshKeyType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `touchPolicy`<sup>Required</sup> <a name="touchPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicy"></a>

```java
public java.lang.String getTouchPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustOrganizationMfaSshPivKeyRequirements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a>

---




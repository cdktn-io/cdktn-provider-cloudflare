# `oauthClient` Submodule <a name="`oauthClient` Submodule" id="@cdktn/provider-cloudflare.oauthClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthClient <a name="OauthClient" id="@cdktn/provider-cloudflare.oauthClient.OauthClient"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client cloudflare_oauth_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.oauth_client.OauthClient;

OauthClient.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .clientName(java.lang.String)
    .grantTypes(java.util.List<java.lang.String>)
    .redirectUris(java.util.List<java.lang.String>)
    .responseTypes(java.util.List<java.lang.String>)
    .scopes(java.util.List<java.lang.String>)
    .tokenEndpointAuthMethod(java.lang.String)
//  .allowedCorsOrigins(java.util.List<java.lang.String>)
//  .clientUri(java.lang.String)
//  .logoUri(java.lang.String)
//  .oauthClientId(java.lang.String)
//  .policyUri(java.lang.String)
//  .postLogoutRedirectUris(java.util.List<java.lang.String>)
//  .tosUri(java.lang.String)
//  .visibility(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.clientName">clientName</a></code> | <code>java.lang.String</code> | Human-readable name of the OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Array of allowed redirect URIs for the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.responseTypes">responseTypes</a></code> | <code>java.util.List<java.lang.String></code> | Array of OAuth response types the client is allowed to use. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Array of OAuth scopes the client is allowed to request. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>java.lang.String</code> | The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.allowedCorsOrigins">allowedCorsOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Array of allowed CORS origins. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.clientUri">clientUri</a></code> | <code>java.lang.String</code> | URL of the home page of the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.logoUri">logoUri</a></code> | <code>java.lang.String</code> | URL of the client's logo. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | The unique identifier for an OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.policyUri">policyUri</a></code> | <code>java.lang.String</code> | URL that points to a privacy policy document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Array of allowed post-logout redirect URIs. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.tosUri">tosUri</a></code> | <code>java.lang.String</code> | URL that points to a terms of service document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | Promote the OAuth client from private to public visibility. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#account_id OauthClient#account_id}

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.clientName"></a>

- *Type:* java.lang.String

Human-readable name of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#client_name OauthClient#client_name}

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.grantTypes"></a>

- *Type:* java.util.List<java.lang.String>

Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#grant_types OauthClient#grant_types}

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.redirectUris"></a>

- *Type:* java.util.List<java.lang.String>

Array of allowed redirect URIs for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#redirect_uris OauthClient#redirect_uris}

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.responseTypes"></a>

- *Type:* java.util.List<java.lang.String>

Array of OAuth response types the client is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#response_types OauthClient#response_types}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Array of OAuth scopes the client is allowed to request.

Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and `openid` are added or removed automatically based on `grant_types` and `response_types`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#scopes OauthClient#scopes}

---

##### `tokenEndpointAuthMethod`<sup>Required</sup> <a name="tokenEndpointAuthMethod" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.tokenEndpointAuthMethod"></a>

- *Type:* java.lang.String

The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#token_endpoint_auth_method OauthClient#token_endpoint_auth_method}

---

##### `allowedCorsOrigins`<sup>Optional</sup> <a name="allowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.allowedCorsOrigins"></a>

- *Type:* java.util.List<java.lang.String>

Array of allowed CORS origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#allowed_cors_origins OauthClient#allowed_cors_origins}

---

##### `clientUri`<sup>Optional</sup> <a name="clientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.clientUri"></a>

- *Type:* java.lang.String

URL of the home page of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#client_uri OauthClient#client_uri}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.logoUri"></a>

- *Type:* java.lang.String

URL of the client's logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#logo_uri OauthClient#logo_uri}

---

##### `oauthClientId`<sup>Optional</sup> <a name="oauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.oauthClientId"></a>

- *Type:* java.lang.String

The unique identifier for an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#oauth_client_id OauthClient#oauth_client_id}

---

##### `policyUri`<sup>Optional</sup> <a name="policyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.policyUri"></a>

- *Type:* java.lang.String

URL that points to a privacy policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#policy_uri OauthClient#policy_uri}

---

##### `postLogoutRedirectUris`<sup>Optional</sup> <a name="postLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.postLogoutRedirectUris"></a>

- *Type:* java.util.List<java.lang.String>

Array of allowed post-logout redirect URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#post_logout_redirect_uris OauthClient#post_logout_redirect_uris}

---

##### `tosUri`<sup>Optional</sup> <a name="tosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.tosUri"></a>

- *Type:* java.lang.String

URL that points to a terms of service document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#tos_uri OauthClient#tos_uri}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

Promote the OAuth client from private to public visibility.

Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
Available values: "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#visibility OauthClient#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins">resetAllowedCorsOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri">resetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri">resetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId">resetOauthClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri">resetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris">resetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri">resetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedCorsOrigins` <a name="resetAllowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins"></a>

```java
public void resetAllowedCorsOrigins()
```

##### `resetClientUri` <a name="resetClientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri"></a>

```java
public void resetClientUri()
```

##### `resetLogoUri` <a name="resetLogoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri"></a>

```java
public void resetLogoUri()
```

##### `resetOauthClientId` <a name="resetOauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId"></a>

```java
public void resetOauthClientId()
```

##### `resetPolicyUri` <a name="resetPolicyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri"></a>

```java
public void resetPolicyUri()
```

##### `resetPostLogoutRedirectUris` <a name="resetPostLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris"></a>

```java
public void resetPostLogoutRedirectUris()
```

##### `resetTosUri` <a name="resetTosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri"></a>

```java
public void resetTosUri()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility"></a>

```java
public void resetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.oauth_client.OauthClient;

OauthClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.oauth_client.OauthClient;

OauthClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.oauth_client.OauthClient;

OauthClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.oauth_client.OauthClient;

OauthClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OauthClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OauthClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OauthClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OauthClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification">clientUriVerification</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret">hasRotatedSecret</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt">promotedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput">allowedCorsOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput">clientNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput">clientUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput">grantTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput">logoUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput">policyUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput">postLogoutRedirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput">redirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput">responseTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput">tokenEndpointAuthMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput">tosUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins">allowedCorsOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName">clientName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri">clientUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri">logoUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri">policyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes">responseTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri">tosUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientUriVerification`<sup>Required</sup> <a name="clientUriVerification" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification"></a>

```java
public OauthClientClientUriVerificationOutputReference getClientUriVerification();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `hasRotatedSecret`<sup>Required</sup> <a name="hasRotatedSecret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret"></a>

```java
public IResolvable getHasRotatedSecret();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `promotedAt`<sup>Required</sup> <a name="promotedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt"></a>

```java
public java.lang.String getPromotedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowedCorsOriginsInput`<sup>Optional</sup> <a name="allowedCorsOriginsInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedCorsOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput"></a>

```java
public java.lang.String getClientNameInput();
```

- *Type:* java.lang.String

---

##### `clientUriInput`<sup>Optional</sup> <a name="clientUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput"></a>

```java
public java.lang.String getClientUriInput();
```

- *Type:* java.lang.String

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput"></a>

```java
public java.util.List<java.lang.String> getGrantTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logoUriInput`<sup>Optional</sup> <a name="logoUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput"></a>

```java
public java.lang.String getLogoUriInput();
```

- *Type:* java.lang.String

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput"></a>

```java
public java.lang.String getOauthClientIdInput();
```

- *Type:* java.lang.String

---

##### `policyUriInput`<sup>Optional</sup> <a name="policyUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput"></a>

```java
public java.lang.String getPolicyUriInput();
```

- *Type:* java.lang.String

---

##### `postLogoutRedirectUrisInput`<sup>Optional</sup> <a name="postLogoutRedirectUrisInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getPostLogoutRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseTypesInput`<sup>Optional</sup> <a name="responseTypesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput"></a>

```java
public java.util.List<java.lang.String> getResponseTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="tokenEndpointAuthMethodInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput"></a>

```java
public java.lang.String getTokenEndpointAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `tosUriInput`<sup>Optional</sup> <a name="tosUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput"></a>

```java
public java.lang.String getTosUriInput();
```

- *Type:* java.lang.String

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowedCorsOrigins`<sup>Required</sup> <a name="allowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedCorsOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

---

##### `clientUri`<sup>Required</sup> <a name="clientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri"></a>

```java
public java.lang.String getClientUri();
```

- *Type:* java.lang.String

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logoUri`<sup>Required</sup> <a name="logoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri"></a>

```java
public java.lang.String getLogoUri();
```

- *Type:* java.lang.String

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

---

##### `policyUri`<sup>Required</sup> <a name="policyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri"></a>

```java
public java.lang.String getPolicyUri();
```

- *Type:* java.lang.String

---

##### `postLogoutRedirectUris`<sup>Required</sup> <a name="postLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris"></a>

```java
public java.util.List<java.lang.String> getPostLogoutRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes"></a>

```java
public java.util.List<java.lang.String> getResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpointAuthMethod`<sup>Required</sup> <a name="tokenEndpointAuthMethod" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod"></a>

```java
public java.lang.String getTokenEndpointAuthMethod();
```

- *Type:* java.lang.String

---

##### `tosUri`<sup>Required</sup> <a name="tosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri"></a>

```java
public java.lang.String getTosUri();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OauthClientClientUriVerification <a name="OauthClientClientUriVerification" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.oauth_client.OauthClientClientUriVerification;

OauthClientClientUriVerification.builder()
    .build();
```


### OauthClientConfig <a name="OauthClientConfig" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.oauth_client.OauthClientConfig;

OauthClientConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .clientName(java.lang.String)
    .grantTypes(java.util.List<java.lang.String>)
    .redirectUris(java.util.List<java.lang.String>)
    .responseTypes(java.util.List<java.lang.String>)
    .scopes(java.util.List<java.lang.String>)
    .tokenEndpointAuthMethod(java.lang.String)
//  .allowedCorsOrigins(java.util.List<java.lang.String>)
//  .clientUri(java.lang.String)
//  .logoUri(java.lang.String)
//  .oauthClientId(java.lang.String)
//  .policyUri(java.lang.String)
//  .postLogoutRedirectUris(java.util.List<java.lang.String>)
//  .tosUri(java.lang.String)
//  .visibility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName">clientName</a></code> | <code>java.lang.String</code> | Human-readable name of the OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Array of allowed redirect URIs for the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes">responseTypes</a></code> | <code>java.util.List<java.lang.String></code> | Array of OAuth response types the client is allowed to use. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Array of OAuth scopes the client is allowed to request. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>java.lang.String</code> | The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins">allowedCorsOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Array of allowed CORS origins. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri">clientUri</a></code> | <code>java.lang.String</code> | URL of the home page of the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri">logoUri</a></code> | <code>java.lang.String</code> | URL of the client's logo. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | The unique identifier for an OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri">policyUri</a></code> | <code>java.lang.String</code> | URL that points to a privacy policy document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Array of allowed post-logout redirect URIs. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri">tosUri</a></code> | <code>java.lang.String</code> | URL that points to a terms of service document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Promote the OAuth client from private to public visibility. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#account_id OauthClient#account_id}

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

Human-readable name of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#client_name OauthClient#client_name}

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#grant_types OauthClient#grant_types}

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

Array of allowed redirect URIs for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#redirect_uris OauthClient#redirect_uris}

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes"></a>

```java
public java.util.List<java.lang.String> getResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

Array of OAuth response types the client is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#response_types OauthClient#response_types}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Array of OAuth scopes the client is allowed to request.

Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and `openid` are added or removed automatically based on `grant_types` and `response_types`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#scopes OauthClient#scopes}

---

##### `tokenEndpointAuthMethod`<sup>Required</sup> <a name="tokenEndpointAuthMethod" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod"></a>

```java
public java.lang.String getTokenEndpointAuthMethod();
```

- *Type:* java.lang.String

The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#token_endpoint_auth_method OauthClient#token_endpoint_auth_method}

---

##### `allowedCorsOrigins`<sup>Optional</sup> <a name="allowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedCorsOrigins();
```

- *Type:* java.util.List<java.lang.String>

Array of allowed CORS origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#allowed_cors_origins OauthClient#allowed_cors_origins}

---

##### `clientUri`<sup>Optional</sup> <a name="clientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri"></a>

```java
public java.lang.String getClientUri();
```

- *Type:* java.lang.String

URL of the home page of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#client_uri OauthClient#client_uri}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri"></a>

```java
public java.lang.String getLogoUri();
```

- *Type:* java.lang.String

URL of the client's logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#logo_uri OauthClient#logo_uri}

---

##### `oauthClientId`<sup>Optional</sup> <a name="oauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

The unique identifier for an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#oauth_client_id OauthClient#oauth_client_id}

---

##### `policyUri`<sup>Optional</sup> <a name="policyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri"></a>

```java
public java.lang.String getPolicyUri();
```

- *Type:* java.lang.String

URL that points to a privacy policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#policy_uri OauthClient#policy_uri}

---

##### `postLogoutRedirectUris`<sup>Optional</sup> <a name="postLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris"></a>

```java
public java.util.List<java.lang.String> getPostLogoutRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

Array of allowed post-logout redirect URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#post_logout_redirect_uris OauthClient#post_logout_redirect_uris}

---

##### `tosUri`<sup>Optional</sup> <a name="tosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri"></a>

```java
public java.lang.String getTosUri();
```

- *Type:* java.lang.String

URL that points to a terms of service document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#tos_uri OauthClient#tos_uri}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Promote the OAuth client from private to public visibility.

Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
Available values: "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#visibility OauthClient#visibility}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthClientClientUriVerificationOutputReference <a name="OauthClientClientUriVerificationOutputReference" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.oauth_client.OauthClientClientUriVerificationOutputReference;

new OauthClientClientUriVerificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue"></a>

```java
public OauthClientClientUriVerification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a>

---




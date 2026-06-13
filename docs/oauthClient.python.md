# `oauthClient` Submodule <a name="`oauthClient` Submodule" id="@cdktn/provider-cloudflare.oauthClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthClient <a name="OauthClient" id="@cdktn/provider-cloudflare.oauthClient.OauthClient"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client cloudflare_oauth_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer"></a>

```python
from cdktn_provider_cloudflare import oauth_client

oauthClient.OauthClient(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  client_name: str,
  grant_types: typing.List[str],
  redirect_uris: typing.List[str],
  response_types: typing.List[str],
  scopes: typing.List[str],
  token_endpoint_auth_method: str,
  allowed_cors_origins: typing.List[str] = None,
  client_uri: str = None,
  logo_uri: str = None,
  oauth_client_id: str = None,
  policy_uri: str = None,
  post_logout_redirect_uris: typing.List[str] = None,
  tos_uri: str = None,
  visibility: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.clientName">client_name</a></code> | <code>str</code> | Human-readable name of the OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.grantTypes">grant_types</a></code> | <code>typing.List[str]</code> | Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | Array of allowed redirect URIs for the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | Array of OAuth response types the client is allowed to use. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Array of OAuth scopes the client is allowed to request. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.tokenEndpointAuthMethod">token_endpoint_auth_method</a></code> | <code>str</code> | The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.allowedCorsOrigins">allowed_cors_origins</a></code> | <code>typing.List[str]</code> | Array of allowed CORS origins. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.clientUri">client_uri</a></code> | <code>str</code> | URL of the home page of the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.logoUri">logo_uri</a></code> | <code>str</code> | URL of the client's logo. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.oauthClientId">oauth_client_id</a></code> | <code>str</code> | The unique identifier for an OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.policyUri">policy_uri</a></code> | <code>str</code> | URL that points to a privacy policy document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.postLogoutRedirectUris">post_logout_redirect_uris</a></code> | <code>typing.List[str]</code> | Array of allowed post-logout redirect URIs. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.tosUri">tos_uri</a></code> | <code>str</code> | URL that points to a terms of service document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Promote the OAuth client from private to public visibility. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.accountId"></a>

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#account_id OauthClient#account_id}

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.clientName"></a>

- *Type:* str

Human-readable name of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#client_name OauthClient#client_name}

---

##### `grant_types`<sup>Required</sup> <a name="grant_types" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.grantTypes"></a>

- *Type:* typing.List[str]

Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#grant_types OauthClient#grant_types}

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.redirectUris"></a>

- *Type:* typing.List[str]

Array of allowed redirect URIs for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#redirect_uris OauthClient#redirect_uris}

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.responseTypes"></a>

- *Type:* typing.List[str]

Array of OAuth response types the client is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#response_types OauthClient#response_types}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Array of OAuth scopes the client is allowed to request.

Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and `openid` are added or removed automatically based on `grant_types` and `response_types`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#scopes OauthClient#scopes}

---

##### `token_endpoint_auth_method`<sup>Required</sup> <a name="token_endpoint_auth_method" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.tokenEndpointAuthMethod"></a>

- *Type:* str

The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#token_endpoint_auth_method OauthClient#token_endpoint_auth_method}

---

##### `allowed_cors_origins`<sup>Optional</sup> <a name="allowed_cors_origins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.allowedCorsOrigins"></a>

- *Type:* typing.List[str]

Array of allowed CORS origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#allowed_cors_origins OauthClient#allowed_cors_origins}

---

##### `client_uri`<sup>Optional</sup> <a name="client_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.clientUri"></a>

- *Type:* str

URL of the home page of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#client_uri OauthClient#client_uri}

---

##### `logo_uri`<sup>Optional</sup> <a name="logo_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.logoUri"></a>

- *Type:* str

URL of the client's logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#logo_uri OauthClient#logo_uri}

---

##### `oauth_client_id`<sup>Optional</sup> <a name="oauth_client_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.oauthClientId"></a>

- *Type:* str

The unique identifier for an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#oauth_client_id OauthClient#oauth_client_id}

---

##### `policy_uri`<sup>Optional</sup> <a name="policy_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.policyUri"></a>

- *Type:* str

URL that points to a privacy policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#policy_uri OauthClient#policy_uri}

---

##### `post_logout_redirect_uris`<sup>Optional</sup> <a name="post_logout_redirect_uris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.postLogoutRedirectUris"></a>

- *Type:* typing.List[str]

Array of allowed post-logout redirect URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#post_logout_redirect_uris OauthClient#post_logout_redirect_uris}

---

##### `tos_uri`<sup>Optional</sup> <a name="tos_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.tosUri"></a>

- *Type:* str

URL that points to a terms of service document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#tos_uri OauthClient#tos_uri}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.visibility"></a>

- *Type:* str

Promote the OAuth client from private to public visibility.

Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
Available values: "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#visibility OauthClient#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins">reset_allowed_cors_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri">reset_client_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri">reset_logo_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId">reset_oauth_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri">reset_policy_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris">reset_post_logout_redirect_uris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri">reset_tos_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_cors_origins` <a name="reset_allowed_cors_origins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins"></a>

```python
def reset_allowed_cors_origins() -> None
```

##### `reset_client_uri` <a name="reset_client_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri"></a>

```python
def reset_client_uri() -> None
```

##### `reset_logo_uri` <a name="reset_logo_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri"></a>

```python
def reset_logo_uri() -> None
```

##### `reset_oauth_client_id` <a name="reset_oauth_client_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId"></a>

```python
def reset_oauth_client_id() -> None
```

##### `reset_policy_uri` <a name="reset_policy_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri"></a>

```python
def reset_policy_uri() -> None
```

##### `reset_post_logout_redirect_uris` <a name="reset_post_logout_redirect_uris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris"></a>

```python
def reset_post_logout_redirect_uris() -> None
```

##### `reset_tos_uri` <a name="reset_tos_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri"></a>

```python
def reset_tos_uri() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility"></a>

```python
def reset_visibility() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct"></a>

```python
from cdktn_provider_cloudflare import oauth_client

oauthClient.OauthClient.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import oauth_client

oauthClient.OauthClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import oauth_client

oauthClient.OauthClient.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import oauth_client

oauthClient.OauthClient.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OauthClient to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OauthClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OauthClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification">client_uri_verification</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret">has_rotated_secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt">promoted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput">allowed_cors_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput">client_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput">client_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput">grant_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput">logo_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput">oauth_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput">policy_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput">post_logout_redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput">redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput">response_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput">token_endpoint_auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput">tos_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins">allowed_cors_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri">client_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes">grant_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri">logo_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri">policy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris">post_logout_redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod">token_endpoint_auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri">tos_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_uri_verification`<sup>Required</sup> <a name="client_uri_verification" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification"></a>

```python
client_uri_verification: OauthClientClientUriVerificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `has_rotated_secret`<sup>Required</sup> <a name="has_rotated_secret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret"></a>

```python
has_rotated_secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `promoted_at`<sup>Required</sup> <a name="promoted_at" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt"></a>

```python
promoted_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `allowed_cors_origins_input`<sup>Optional</sup> <a name="allowed_cors_origins_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput"></a>

```python
allowed_cors_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_name_input`<sup>Optional</sup> <a name="client_name_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput"></a>

```python
client_name_input: str
```

- *Type:* str

---

##### `client_uri_input`<sup>Optional</sup> <a name="client_uri_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput"></a>

```python
client_uri_input: str
```

- *Type:* str

---

##### `grant_types_input`<sup>Optional</sup> <a name="grant_types_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput"></a>

```python
grant_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logo_uri_input`<sup>Optional</sup> <a name="logo_uri_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput"></a>

```python
logo_uri_input: str
```

- *Type:* str

---

##### `oauth_client_id_input`<sup>Optional</sup> <a name="oauth_client_id_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput"></a>

```python
oauth_client_id_input: str
```

- *Type:* str

---

##### `policy_uri_input`<sup>Optional</sup> <a name="policy_uri_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput"></a>

```python
policy_uri_input: str
```

- *Type:* str

---

##### `post_logout_redirect_uris_input`<sup>Optional</sup> <a name="post_logout_redirect_uris_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput"></a>

```python
post_logout_redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redirect_uris_input`<sup>Optional</sup> <a name="redirect_uris_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput"></a>

```python
redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_types_input`<sup>Optional</sup> <a name="response_types_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput"></a>

```python
response_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint_auth_method_input`<sup>Optional</sup> <a name="token_endpoint_auth_method_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput"></a>

```python
token_endpoint_auth_method_input: str
```

- *Type:* str

---

##### `tos_uri_input`<sup>Optional</sup> <a name="tos_uri_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput"></a>

```python
tos_uri_input: str
```

- *Type:* str

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `allowed_cors_origins`<sup>Required</sup> <a name="allowed_cors_origins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins"></a>

```python
allowed_cors_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `client_uri`<sup>Required</sup> <a name="client_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri"></a>

```python
client_uri: str
```

- *Type:* str

---

##### `grant_types`<sup>Required</sup> <a name="grant_types" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes"></a>

```python
grant_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logo_uri`<sup>Required</sup> <a name="logo_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri"></a>

```python
logo_uri: str
```

- *Type:* str

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `policy_uri`<sup>Required</sup> <a name="policy_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri"></a>

```python
policy_uri: str
```

- *Type:* str

---

##### `post_logout_redirect_uris`<sup>Required</sup> <a name="post_logout_redirect_uris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris"></a>

```python
post_logout_redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint_auth_method`<sup>Required</sup> <a name="token_endpoint_auth_method" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod"></a>

```python
token_endpoint_auth_method: str
```

- *Type:* str

---

##### `tos_uri`<sup>Required</sup> <a name="tos_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri"></a>

```python
tos_uri: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OauthClientClientUriVerification <a name="OauthClientClientUriVerification" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification.Initializer"></a>

```python
from cdktn_provider_cloudflare import oauth_client

oauthClient.OauthClientClientUriVerification()
```


### OauthClientConfig <a name="OauthClientConfig" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import oauth_client

oauthClient.OauthClientConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  client_name: str,
  grant_types: typing.List[str],
  redirect_uris: typing.List[str],
  response_types: typing.List[str],
  scopes: typing.List[str],
  token_endpoint_auth_method: str,
  allowed_cors_origins: typing.List[str] = None,
  client_uri: str = None,
  logo_uri: str = None,
  oauth_client_id: str = None,
  policy_uri: str = None,
  post_logout_redirect_uris: typing.List[str] = None,
  tos_uri: str = None,
  visibility: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName">client_name</a></code> | <code>str</code> | Human-readable name of the OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes">grant_types</a></code> | <code>typing.List[str]</code> | Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | Array of allowed redirect URIs for the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | Array of OAuth response types the client is allowed to use. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Array of OAuth scopes the client is allowed to request. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod">token_endpoint_auth_method</a></code> | <code>str</code> | The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins">allowed_cors_origins</a></code> | <code>typing.List[str]</code> | Array of allowed CORS origins. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri">client_uri</a></code> | <code>str</code> | URL of the home page of the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri">logo_uri</a></code> | <code>str</code> | URL of the client's logo. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | The unique identifier for an OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri">policy_uri</a></code> | <code>str</code> | URL that points to a privacy policy document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris">post_logout_redirect_uris</a></code> | <code>typing.List[str]</code> | Array of allowed post-logout redirect URIs. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri">tos_uri</a></code> | <code>str</code> | URL that points to a terms of service document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility">visibility</a></code> | <code>str</code> | Promote the OAuth client from private to public visibility. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#account_id OauthClient#account_id}

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

Human-readable name of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#client_name OauthClient#client_name}

---

##### `grant_types`<sup>Required</sup> <a name="grant_types" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes"></a>

```python
grant_types: typing.List[str]
```

- *Type:* typing.List[str]

Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#grant_types OauthClient#grant_types}

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

Array of allowed redirect URIs for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#redirect_uris OauthClient#redirect_uris}

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

Array of OAuth response types the client is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#response_types OauthClient#response_types}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Array of OAuth scopes the client is allowed to request.

Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and `openid` are added or removed automatically based on `grant_types` and `response_types`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#scopes OauthClient#scopes}

---

##### `token_endpoint_auth_method`<sup>Required</sup> <a name="token_endpoint_auth_method" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod"></a>

```python
token_endpoint_auth_method: str
```

- *Type:* str

The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#token_endpoint_auth_method OauthClient#token_endpoint_auth_method}

---

##### `allowed_cors_origins`<sup>Optional</sup> <a name="allowed_cors_origins" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins"></a>

```python
allowed_cors_origins: typing.List[str]
```

- *Type:* typing.List[str]

Array of allowed CORS origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#allowed_cors_origins OauthClient#allowed_cors_origins}

---

##### `client_uri`<sup>Optional</sup> <a name="client_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri"></a>

```python
client_uri: str
```

- *Type:* str

URL of the home page of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#client_uri OauthClient#client_uri}

---

##### `logo_uri`<sup>Optional</sup> <a name="logo_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri"></a>

```python
logo_uri: str
```

- *Type:* str

URL of the client's logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#logo_uri OauthClient#logo_uri}

---

##### `oauth_client_id`<sup>Optional</sup> <a name="oauth_client_id" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

The unique identifier for an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#oauth_client_id OauthClient#oauth_client_id}

---

##### `policy_uri`<sup>Optional</sup> <a name="policy_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri"></a>

```python
policy_uri: str
```

- *Type:* str

URL that points to a privacy policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#policy_uri OauthClient#policy_uri}

---

##### `post_logout_redirect_uris`<sup>Optional</sup> <a name="post_logout_redirect_uris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris"></a>

```python
post_logout_redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

Array of allowed post-logout redirect URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#post_logout_redirect_uris OauthClient#post_logout_redirect_uris}

---

##### `tos_uri`<sup>Optional</sup> <a name="tos_uri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri"></a>

```python
tos_uri: str
```

- *Type:* str

URL that points to a terms of service document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#tos_uri OauthClient#tos_uri}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Promote the OAuth client from private to public visibility.

Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
Available values: "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/oauth_client#visibility OauthClient#visibility}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthClientClientUriVerificationOutputReference <a name="OauthClientClientUriVerificationOutputReference" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import oauth_client

oauthClient.OauthClientClientUriVerificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue"></a>

```python
internal_value: OauthClientClientUriVerification
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a>

---




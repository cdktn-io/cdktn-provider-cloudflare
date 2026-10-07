# `zeroTrustCasbWebhook` Submodule <a name="`zeroTrustCasbWebhook` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCasbWebhook <a name="ZeroTrustCasbWebhook" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook cloudflare_zero_trust_casb_webhook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_webhook

zeroTrustCasbWebhook.ZeroTrustCasbWebhook(
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
  authentication_type: str,
  destination_url: str,
  label: str,
  headers: IResolvable | typing.List[ZeroTrustCasbWebhookHeaders] = None,
  signing_secret: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#account_id ZeroTrustCasbWebhook#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Type of authentication used for the webhook. Available values: "Basic Auth", "None", "Bearer Auth", "Static Headers", "HMAC-Signing". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.destinationUrl">destination_url</a></code> | <code>str</code> | Target URL for the webhook configuration. Where resulting data will be sent. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.label">label</a></code> | <code>str</code> | Account-specified display label for the webhook configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.headers">headers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>]</code> | List of custom headers to include in webhook requests. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.signingSecret">signing_secret</a></code> | <code>str</code> | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of the webhook configuration. Defaults to enabled when omitted. Available values: "enabled", "disabled". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#account_id ZeroTrustCasbWebhook#account_id}.

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.authenticationType"></a>

- *Type:* str

Type of authentication used for the webhook. Available values: "Basic Auth", "None", "Bearer Auth", "Static Headers", "HMAC-Signing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#authentication_type ZeroTrustCasbWebhook#authentication_type}

---

##### `destination_url`<sup>Required</sup> <a name="destination_url" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.destinationUrl"></a>

- *Type:* str

Target URL for the webhook configuration. Where resulting data will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#destination_url ZeroTrustCasbWebhook#destination_url}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.label"></a>

- *Type:* str

Account-specified display label for the webhook configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#label ZeroTrustCasbWebhook#label}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.headers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>]

List of custom headers to include in webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#headers ZeroTrustCasbWebhook#headers}

---

##### `signing_secret`<sup>Optional</sup> <a name="signing_secret" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.signingSecret"></a>

- *Type:* str

Secret key used for HMAC signing when authentication_type is "HMAC-Signing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#signing_secret ZeroTrustCasbWebhook#signing_secret}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.Initializer.parameter.status"></a>

- *Type:* str

Status of the webhook configuration. Defaults to enabled when omitted. Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#status ZeroTrustCasbWebhook#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.resetSigningSecret">reset_signing_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_headers` <a name="put_headers" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.putHeaders"></a>

```python
def put_headers(
  value: IResolvable | typing.List[ZeroTrustCasbWebhookHeaders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.putHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>]

---

##### `reset_headers` <a name="reset_headers" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_signing_secret` <a name="reset_signing_secret" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.resetSigningSecret"></a>

```python
def reset_signing_secret() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustCasbWebhook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_webhook

zeroTrustCasbWebhook.ZeroTrustCasbWebhook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_webhook

zeroTrustCasbWebhook.ZeroTrustCasbWebhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_webhook

zeroTrustCasbWebhook.ZeroTrustCasbWebhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_webhook

zeroTrustCasbWebhook.ZeroTrustCasbWebhook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustCasbWebhook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustCasbWebhook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustCasbWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCasbWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.headers">headers</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList">ZeroTrustCasbWebhookHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.destinationUrlInput">destination_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.headersInput">headers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.signingSecretInput">signing_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.destinationUrl">destination_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.signingSecret">signing_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.headers"></a>

```python
headers: ZeroTrustCasbWebhookHeadersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList">ZeroTrustCasbWebhookHeadersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `destination_url_input`<sup>Optional</sup> <a name="destination_url_input" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.destinationUrlInput"></a>

```python
destination_url_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.headersInput"></a>

```python
headers_input: IResolvable | typing.List[ZeroTrustCasbWebhookHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>]

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `signing_secret_input`<sup>Optional</sup> <a name="signing_secret_input" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.signingSecretInput"></a>

```python
signing_secret_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `destination_url`<sup>Required</sup> <a name="destination_url" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.destinationUrl"></a>

```python
destination_url: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `signing_secret`<sup>Required</sup> <a name="signing_secret" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.signingSecret"></a>

```python
signing_secret: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCasbWebhookConfig <a name="ZeroTrustCasbWebhookConfig" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_webhook

zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  authentication_type: str,
  destination_url: str,
  label: str,
  headers: IResolvable | typing.List[ZeroTrustCasbWebhookHeaders] = None,
  signing_secret: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#account_id ZeroTrustCasbWebhook#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Type of authentication used for the webhook. Available values: "Basic Auth", "None", "Bearer Auth", "Static Headers", "HMAC-Signing". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.destinationUrl">destination_url</a></code> | <code>str</code> | Target URL for the webhook configuration. Where resulting data will be sent. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.label">label</a></code> | <code>str</code> | Account-specified display label for the webhook configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.headers">headers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>]</code> | List of custom headers to include in webhook requests. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.signingSecret">signing_secret</a></code> | <code>str</code> | Secret key used for HMAC signing when authentication_type is "HMAC-Signing". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.status">status</a></code> | <code>str</code> | Status of the webhook configuration. Defaults to enabled when omitted. Available values: "enabled", "disabled". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#account_id ZeroTrustCasbWebhook#account_id}.

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Type of authentication used for the webhook. Available values: "Basic Auth", "None", "Bearer Auth", "Static Headers", "HMAC-Signing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#authentication_type ZeroTrustCasbWebhook#authentication_type}

---

##### `destination_url`<sup>Required</sup> <a name="destination_url" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.destinationUrl"></a>

```python
destination_url: str
```

- *Type:* str

Target URL for the webhook configuration. Where resulting data will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#destination_url ZeroTrustCasbWebhook#destination_url}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Account-specified display label for the webhook configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#label ZeroTrustCasbWebhook#label}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.headers"></a>

```python
headers: IResolvable | typing.List[ZeroTrustCasbWebhookHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>]

List of custom headers to include in webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#headers ZeroTrustCasbWebhook#headers}

---

##### `signing_secret`<sup>Optional</sup> <a name="signing_secret" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.signingSecret"></a>

```python
signing_secret: str
```

- *Type:* str

Secret key used for HMAC signing when authentication_type is "HMAC-Signing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#signing_secret ZeroTrustCasbWebhook#signing_secret}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the webhook configuration. Defaults to enabled when omitted. Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#status ZeroTrustCasbWebhook#status}

---

### ZeroTrustCasbWebhookHeaders <a name="ZeroTrustCasbWebhookHeaders" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_webhook

zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders.property.key">key</a></code> | <code>str</code> | Header key name. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders.property.value">value</a></code> | <code>str</code> | Header value. Required on Create and Evaluate. On Update, omit or set to null to keep existing value. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders.property.key"></a>

```python
key: str
```

- *Type:* str

Header key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#key ZeroTrustCasbWebhook#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Header value. Required on Create and Evaluate. On Update, omit or set to null to keep existing value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_webhook#value ZeroTrustCasbWebhook#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCasbWebhookHeadersList <a name="ZeroTrustCasbWebhookHeadersList" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_webhook

zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustCasbWebhookHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustCasbWebhookHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>]

---


### ZeroTrustCasbWebhookHeadersOutputReference <a name="ZeroTrustCasbWebhookHeadersOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_webhook

zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeadersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbWebhookHeaders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbWebhook.ZeroTrustCasbWebhookHeaders">ZeroTrustCasbWebhookHeaders</a>

---




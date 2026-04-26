# `zeroTrustDlpSettings` Submodule <a name="`zeroTrustDlpSettings` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpSettings <a name="ZeroTrustDlpSettings" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings cloudflare_zero_trust_dlp_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_dlp_settings

zeroTrustDlpSettings.ZeroTrustDlpSettings(
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
  ai_context_analysis: bool | IResolvable = None,
  ocr: bool | IResolvable = None,
  payload_logging: ZeroTrustDlpSettingsPayloadLogging = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#account_id ZeroTrustDlpSettings#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.aiContextAnalysis">ai_context_analysis</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether AI context analysis is enabled at the account level. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.ocr">ocr</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether OCR is enabled at the account level. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.payloadLogging">payload_logging</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a></code> | Request model for payload log settings within the DLP settings endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#account_id ZeroTrustDlpSettings#account_id}.

---

##### `ai_context_analysis`<sup>Optional</sup> <a name="ai_context_analysis" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.aiContextAnalysis"></a>

- *Type:* bool | cdktn.IResolvable

Whether AI context analysis is enabled at the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#ai_context_analysis ZeroTrustDlpSettings#ai_context_analysis}

---

##### `ocr`<sup>Optional</sup> <a name="ocr" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.ocr"></a>

- *Type:* bool | cdktn.IResolvable

Whether OCR is enabled at the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#ocr ZeroTrustDlpSettings#ocr}

---

##### `payload_logging`<sup>Optional</sup> <a name="payload_logging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.Initializer.parameter.payloadLogging"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a>

Request model for payload log settings within the DLP settings endpoint.

Unlike the legacy endpoint, null and missing are treated identically here
(both mean "not provided" for PATCH, "reset to default" for PUT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#payload_logging ZeroTrustDlpSettings#payload_logging}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.putPayloadLogging">put_payload_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetAiContextAnalysis">reset_ai_context_analysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetOcr">reset_ocr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetPayloadLogging">reset_payload_logging</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_payload_logging` <a name="put_payload_logging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.putPayloadLogging"></a>

```python
def put_payload_logging(
  masking_level: str = None,
  public_key: str = None
) -> None
```

###### `masking_level`<sup>Optional</sup> <a name="masking_level" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.putPayloadLogging.parameter.maskingLevel"></a>

- *Type:* str

Masking level for payload logs.

* `full`: The entire payload is masked.
* `partial`: Only partial payload content is masked.
* `clear`: No masking is applied to the payload content.
* `default`: DLP uses its default masking behavior.
  Available values: "full", "partial", "clear", "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#masking_level ZeroTrustDlpSettings#masking_level}

---

###### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.putPayloadLogging.parameter.publicKey"></a>

- *Type:* str

Base64-encoded public key for encrypting payload logs.

* Set to a non-empty base64 string to enable payload logging with the given key.
* Set to an empty string to disable payload logging.
* Omit or set to null to leave unchanged (PATCH) or reset to disabled (PUT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#public_key ZeroTrustDlpSettings#public_key}

---

##### `reset_ai_context_analysis` <a name="reset_ai_context_analysis" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetAiContextAnalysis"></a>

```python
def reset_ai_context_analysis() -> None
```

##### `reset_ocr` <a name="reset_ocr" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetOcr"></a>

```python
def reset_ocr() -> None
```

##### `reset_payload_logging` <a name="reset_payload_logging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.resetPayloadLogging"></a>

```python
def reset_payload_logging() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustDlpSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_dlp_settings

zeroTrustDlpSettings.ZeroTrustDlpSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_dlp_settings

zeroTrustDlpSettings.ZeroTrustDlpSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_dlp_settings

zeroTrustDlpSettings.ZeroTrustDlpSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_dlp_settings

zeroTrustDlpSettings.ZeroTrustDlpSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustDlpSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustDlpSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustDlpSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.payloadLogging">payload_logging</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference">ZeroTrustDlpSettingsPayloadLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.aiContextAnalysisInput">ai_context_analysis_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.ocrInput">ocr_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.payloadLoggingInput">payload_logging_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.aiContextAnalysis">ai_context_analysis</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.ocr">ocr</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `payload_logging`<sup>Required</sup> <a name="payload_logging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.payloadLogging"></a>

```python
payload_logging: ZeroTrustDlpSettingsPayloadLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference">ZeroTrustDlpSettingsPayloadLoggingOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `ai_context_analysis_input`<sup>Optional</sup> <a name="ai_context_analysis_input" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.aiContextAnalysisInput"></a>

```python
ai_context_analysis_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ocr_input`<sup>Optional</sup> <a name="ocr_input" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.ocrInput"></a>

```python
ocr_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `payload_logging_input`<sup>Optional</sup> <a name="payload_logging_input" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.payloadLoggingInput"></a>

```python
payload_logging_input: IResolvable | ZeroTrustDlpSettingsPayloadLogging
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `ai_context_analysis`<sup>Required</sup> <a name="ai_context_analysis" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.aiContextAnalysis"></a>

```python
ai_context_analysis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ocr`<sup>Required</sup> <a name="ocr" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.ocr"></a>

```python
ocr: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpSettingsConfig <a name="ZeroTrustDlpSettingsConfig" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_dlp_settings

zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  ai_context_analysis: bool | IResolvable = None,
  ocr: bool | IResolvable = None,
  payload_logging: ZeroTrustDlpSettingsPayloadLogging = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#account_id ZeroTrustDlpSettings#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.aiContextAnalysis">ai_context_analysis</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether AI context analysis is enabled at the account level. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.ocr">ocr</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether OCR is enabled at the account level. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.payloadLogging">payload_logging</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a></code> | Request model for payload log settings within the DLP settings endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#account_id ZeroTrustDlpSettings#account_id}.

---

##### `ai_context_analysis`<sup>Optional</sup> <a name="ai_context_analysis" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.aiContextAnalysis"></a>

```python
ai_context_analysis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether AI context analysis is enabled at the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#ai_context_analysis ZeroTrustDlpSettings#ai_context_analysis}

---

##### `ocr`<sup>Optional</sup> <a name="ocr" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.ocr"></a>

```python
ocr: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether OCR is enabled at the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#ocr ZeroTrustDlpSettings#ocr}

---

##### `payload_logging`<sup>Optional</sup> <a name="payload_logging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsConfig.property.payloadLogging"></a>

```python
payload_logging: ZeroTrustDlpSettingsPayloadLogging
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a>

Request model for payload log settings within the DLP settings endpoint.

Unlike the legacy endpoint, null and missing are treated identically here
(both mean "not provided" for PATCH, "reset to default" for PUT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#payload_logging ZeroTrustDlpSettings#payload_logging}

---

### ZeroTrustDlpSettingsPayloadLogging <a name="ZeroTrustDlpSettingsPayloadLogging" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_dlp_settings

zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging(
  masking_level: str = None,
  public_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.property.maskingLevel">masking_level</a></code> | <code>str</code> | Masking level for payload logs. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.property.publicKey">public_key</a></code> | <code>str</code> | Base64-encoded public key for encrypting payload logs. |

---

##### `masking_level`<sup>Optional</sup> <a name="masking_level" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.property.maskingLevel"></a>

```python
masking_level: str
```

- *Type:* str

Masking level for payload logs.

* `full`: The entire payload is masked.
* `partial`: Only partial payload content is masked.
* `clear`: No masking is applied to the payload content.
* `default`: DLP uses its default masking behavior.
  Available values: "full", "partial", "clear", "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#masking_level ZeroTrustDlpSettings#masking_level}

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Base64-encoded public key for encrypting payload logs.

* Set to a non-empty base64 string to enable payload logging with the given key.
* Set to an empty string to disable payload logging.
* Omit or set to null to leave unchanged (PATCH) or reset to disabled (PUT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_settings#public_key ZeroTrustDlpSettings#public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpSettingsPayloadLoggingOutputReference <a name="ZeroTrustDlpSettingsPayloadLoggingOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_dlp_settings

zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resetMaskingLevel">reset_masking_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resetPublicKey">reset_public_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_masking_level` <a name="reset_masking_level" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resetMaskingLevel"></a>

```python
def reset_masking_level() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.resetPublicKey"></a>

```python
def reset_public_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.maskingLevelInput">masking_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.maskingLevel">masking_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `masking_level_input`<sup>Optional</sup> <a name="masking_level_input" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.maskingLevelInput"></a>

```python
masking_level_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `masking_level`<sup>Required</sup> <a name="masking_level" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.maskingLevel"></a>

```python
masking_level: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLoggingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustDlpSettingsPayloadLogging
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustDlpSettings.ZeroTrustDlpSettingsPayloadLogging">ZeroTrustDlpSettingsPayloadLogging</a>

---




# `dataCloudflareZeroTrustDlpCustomPromptTopics` Submodule <a name="`dataCloudflareZeroTrustDlpCustomPromptTopics` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpCustomPromptTopics <a name="DataCloudflareZeroTrustDlpCustomPromptTopics" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics cloudflare_zero_trust_dlp_custom_prompt_topics}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_custom_prompt_topics

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics(
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
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#account_id DataCloudflareZeroTrustDlpCustomPromptTopics#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#account_id DataCloudflareZeroTrustDlpCustomPromptTopics#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#max_items DataCloudflareZeroTrustDlpCustomPromptTopics#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpCustomPromptTopics resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_custom_prompt_topics

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_custom_prompt_topics

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_custom_prompt_topics

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_custom_prompt_topics

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpCustomPromptTopics resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDlpCustomPromptTopics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDlpCustomPromptTopics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpCustomPromptTopics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList">DataCloudflareZeroTrustDlpCustomPromptTopicsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.result"></a>

```python
result: DataCloudflareZeroTrustDlpCustomPromptTopicsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList">DataCloudflareZeroTrustDlpCustomPromptTopicsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpCustomPromptTopicsConfig <a name="DataCloudflareZeroTrustDlpCustomPromptTopicsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_custom_prompt_topics

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#account_id DataCloudflareZeroTrustDlpCustomPromptTopics#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#account_id DataCloudflareZeroTrustDlpCustomPromptTopics#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#max_items DataCloudflareZeroTrustDlpCustomPromptTopics#max_items}

---

### DataCloudflareZeroTrustDlpCustomPromptTopicsResult <a name="DataCloudflareZeroTrustDlpCustomPromptTopicsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_custom_prompt_topics

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpCustomPromptTopicsResultList <a name="DataCloudflareZeroTrustDlpCustomPromptTopicsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_custom_prompt_topics

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference <a name="DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_custom_prompt_topics

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult">DataCloudflareZeroTrustDlpCustomPromptTopicsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpCustomPromptTopicsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult">DataCloudflareZeroTrustDlpCustomPromptTopicsResult</a>

---




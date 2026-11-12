# `dataCloudflareZeroTrustDlpProximityValidators` Submodule <a name="`dataCloudflareZeroTrustDlpProximityValidators` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpProximityValidators <a name="DataCloudflareZeroTrustDlpProximityValidators" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators cloudflare_zero_trust_dlp_proximity_validators}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators(
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
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#account_id DataCloudflareZeroTrustDlpProximityValidators#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#account_id DataCloudflareZeroTrustDlpProximityValidators#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#max_items DataCloudflareZeroTrustDlpProximityValidators#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidators resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidators resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDlpProximityValidators to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDlpProximityValidators that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpProximityValidators to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList">DataCloudflareZeroTrustDlpProximityValidatorsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.result"></a>

```python
result: DataCloudflareZeroTrustDlpProximityValidatorsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList">DataCloudflareZeroTrustDlpProximityValidatorsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidators.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpProximityValidatorsConfig <a name="DataCloudflareZeroTrustDlpProximityValidatorsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig(
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
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#account_id DataCloudflareZeroTrustDlpProximityValidators#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#account_id DataCloudflareZeroTrustDlpProximityValidators#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validators#max_items DataCloudflareZeroTrustDlpProximityValidators#max_items}

---

### DataCloudflareZeroTrustDlpProximityValidatorsResult <a name="DataCloudflareZeroTrustDlpProximityValidatorsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResult()
```


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy()
```


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries()
```


### DataCloudflareZeroTrustDlpProximityValidatorsResultWords <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultWords" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpProximityValidatorsResultList <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.referencedBy">referenced_by</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.words">words</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList">DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResult">DataCloudflareZeroTrustDlpProximityValidatorsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `referenced_by`<sup>Required</sup> <a name="referenced_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.referencedBy"></a>

```python
referenced_by: DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.words"></a>

```python
words: DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList">DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpProximityValidatorsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResult">DataCloudflareZeroTrustDlpProximityValidatorsResult</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntries</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.entryCount">entry_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.entries"></a>

```python
entries: DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByEntriesList</a>

---

##### `entry_count`<sup>Required</sup> <a name="entry_count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.entryCount"></a>

```python
entry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedByOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorsResultReferencedBy</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_dlp_proximity_validators

dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.weight">weight</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.word">word</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords">DataCloudflareZeroTrustDlpProximityValidatorsResultWords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.weight"></a>

```python
weight: str
```

- *Type:* str

---

##### `word`<sup>Required</sup> <a name="word" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.word"></a>

```python
word: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWordsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDlpProximityValidatorsResultWords
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidators.DataCloudflareZeroTrustDlpProximityValidatorsResultWords">DataCloudflareZeroTrustDlpProximityValidatorsResultWords</a>

---




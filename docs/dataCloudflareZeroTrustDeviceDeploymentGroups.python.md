# `dataCloudflareZeroTrustDeviceDeploymentGroups` Submodule <a name="`dataCloudflareZeroTrustDeviceDeploymentGroups` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroups <a name="DataCloudflareZeroTrustDeviceDeploymentGroups" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups cloudflare_zero_trust_device_deployment_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_device_deployment_groups

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups(
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
  group_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups#account_id DataCloudflareZeroTrustDeviceDeploymentGroups#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups#group_id DataCloudflareZeroTrustDeviceDeploymentGroups#group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups#account_id DataCloudflareZeroTrustDeviceDeploymentGroups#account_id}.

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups#group_id DataCloudflareZeroTrustDeviceDeploymentGroups#group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_device_deployment_groups

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_device_deployment_groups

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_device_deployment_groups

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_device_deployment_groups

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDeploymentGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDeviceDeploymentGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDeploymentGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.policyIds">policy_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.versionConfig">version_config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_ids`<sup>Required</sup> <a name="policy_ids" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.policyIds"></a>

```python
policy_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version_config`<sup>Required</sup> <a name="version_config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.versionConfig"></a>

```python
version_config: DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList">DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_device_deployment_groups

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  group_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups#account_id DataCloudflareZeroTrustDeviceDeploymentGroups#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups#group_id DataCloudflareZeroTrustDeviceDeploymentGroups#group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups#account_id DataCloudflareZeroTrustDeviceDeploymentGroups#account_id}.

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_device_deployment_groups#group_id DataCloudflareZeroTrustDeviceDeploymentGroups#group_id}.

---

### DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_device_deployment_groups

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_device_deployment_groups

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference <a name="DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_device_deployment_groups

dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment">target_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_environment`<sup>Required</sup> <a name="target_environment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment"></a>

```python
target_environment: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDeploymentGroups.DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig">DataCloudflareZeroTrustDeviceDeploymentGroupsVersionConfig</a>

---




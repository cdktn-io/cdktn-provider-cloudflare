# `dataCloudflareWorkersDeployments` Submodule <a name="`dataCloudflareWorkersDeployments` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersDeployments <a name="DataCloudflareWorkersDeployments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments cloudflare_workers_deployments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments(
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
  script_name: str,
  max_items: typing.Union[int, float] = None,
  since: str = None,
  until: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.scriptName">script_name</a></code> | <code>str</code> | Name of the script. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.since">since</a></code> | <code>str</code> | Start of the deployment creation time range, inclusive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.until">until</a></code> | <code>str</code> | End of the deployment creation time range, inclusive. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#account_id DataCloudflareWorkersDeployments#account_id}

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.scriptName"></a>

- *Type:* str

Name of the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#script_name DataCloudflareWorkersDeployments#script_name}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#max_items DataCloudflareWorkersDeployments#max_items}

---

##### `since`<sup>Optional</sup> <a name="since" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.since"></a>

- *Type:* str

Start of the deployment creation time range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#since DataCloudflareWorkersDeployments#since}

---

##### `until`<sup>Optional</sup> <a name="until" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.until"></a>

- *Type:* str

End of the deployment creation time range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#until DataCloudflareWorkersDeployments#until}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetSince">reset_since</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetUntil">reset_until</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_since` <a name="reset_since" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetSince"></a>

```python
def reset_since() -> None
```

##### `reset_until` <a name="reset_until" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetUntil"></a>

```python
def reset_until() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareWorkersDeployments resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareWorkersDeployments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareWorkersDeployments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareWorkersDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList">DataCloudflareWorkersDeploymentsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.scriptNameInput">script_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.sinceInput">since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.untilInput">until_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.scriptName">script_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.since">since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.until">until</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.result"></a>

```python
result: DataCloudflareWorkersDeploymentsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList">DataCloudflareWorkersDeploymentsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `script_name_input`<sup>Optional</sup> <a name="script_name_input" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.scriptNameInput"></a>

```python
script_name_input: str
```

- *Type:* str

---

##### `since_input`<sup>Optional</sup> <a name="since_input" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.sinceInput"></a>

```python
since_input: str
```

- *Type:* str

---

##### `until_input`<sup>Optional</sup> <a name="until_input" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.untilInput"></a>

```python
until_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.since"></a>

```python
since: str
```

- *Type:* str

---

##### `until`<sup>Required</sup> <a name="until" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.until"></a>

```python
until: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersDeploymentsConfig <a name="DataCloudflareWorkersDeploymentsConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  script_name: str,
  max_items: typing.Union[int, float] = None,
  since: str = None,
  until: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.scriptName">script_name</a></code> | <code>str</code> | Name of the script. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.since">since</a></code> | <code>str</code> | Start of the deployment creation time range, inclusive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.until">until</a></code> | <code>str</code> | End of the deployment creation time range, inclusive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#account_id DataCloudflareWorkersDeployments#account_id}

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

Name of the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#script_name DataCloudflareWorkersDeployments#script_name}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#max_items DataCloudflareWorkersDeployments#max_items}

---

##### `since`<sup>Optional</sup> <a name="since" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.since"></a>

```python
since: str
```

- *Type:* str

Start of the deployment creation time range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#since DataCloudflareWorkersDeployments#since}

---

##### `until`<sup>Optional</sup> <a name="until" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.until"></a>

```python
until: str
```

- *Type:* str

End of the deployment creation time range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/workers_deployments#until DataCloudflareWorkersDeployments#until}

---

### DataCloudflareWorkersDeploymentsResult <a name="DataCloudflareWorkersDeploymentsResult" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult()
```


### DataCloudflareWorkersDeploymentsResultDeployments <a name="DataCloudflareWorkersDeploymentsResultDeployments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments()
```


### DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations <a name="DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations()
```


### DataCloudflareWorkersDeploymentsResultDeploymentsVersions <a name="DataCloudflareWorkersDeploymentsResultDeploymentsVersions" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference <a name="DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.workersMessage">workers_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.workersTriggeredBy">workers_triggered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations">DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workers_message`<sup>Required</sup> <a name="workers_message" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.workersMessage"></a>

```python
workers_message: str
```

- *Type:* str

---

##### `workers_triggered_by`<sup>Required</sup> <a name="workers_triggered_by" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.workersTriggeredBy"></a>

```python
workers_triggered_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations">DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations</a>

---


### DataCloudflareWorkersDeploymentsResultDeploymentsList <a name="DataCloudflareWorkersDeploymentsResultDeploymentsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference <a name="DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference">DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.authorEmail">author_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList">DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments">DataCloudflareWorkersDeploymentsResultDeployments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.annotations"></a>

```python
annotations: DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference">DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference</a>

---

##### `author_email`<sup>Required</sup> <a name="author_email" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.authorEmail"></a>

```python
author_email: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.versions"></a>

```python
versions: DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList">DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWorkersDeploymentsResultDeployments
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments">DataCloudflareWorkersDeploymentsResultDeployments</a>

---


### DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList <a name="DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference <a name="DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions">DataCloudflareWorkersDeploymentsResultDeploymentsVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWorkersDeploymentsResultDeploymentsVersions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions">DataCloudflareWorkersDeploymentsResultDeploymentsVersions</a>

---


### DataCloudflareWorkersDeploymentsResultList <a name="DataCloudflareWorkersDeploymentsResultList" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareWorkersDeploymentsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareWorkersDeploymentsResultOutputReference <a name="DataCloudflareWorkersDeploymentsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_workers_deployments

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.deployments">deployments</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList">DataCloudflareWorkersDeploymentsResultDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult">DataCloudflareWorkersDeploymentsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployments`<sup>Required</sup> <a name="deployments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.deployments"></a>

```python
deployments: DataCloudflareWorkersDeploymentsResultDeploymentsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList">DataCloudflareWorkersDeploymentsResultDeploymentsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWorkersDeploymentsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult">DataCloudflareWorkersDeploymentsResult</a>

---




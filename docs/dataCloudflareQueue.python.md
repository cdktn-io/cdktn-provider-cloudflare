# `dataCloudflareQueue` Submodule <a name="`dataCloudflareQueue` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareQueue <a name="DataCloudflareQueue" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue cloudflare_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueue(
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
  queue_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | A Resource identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.queueId">queue_id</a></code> | <code>str</code> | A Resource identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.accountId"></a>

- *Type:* str

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue#account_id DataCloudflareQueue#account_id}

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.Initializer.parameter.queueId"></a>

- *Type:* str

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue#queue_id DataCloudflareQueue#queue_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareQueue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueue.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.consumers">consumers</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList">DataCloudflareQueueConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.consumersTotalCount">consumers_total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.producers">producers</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList">DataCloudflareQueueProducersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.producersTotalCount">producers_total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference">DataCloudflareQueueSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.queueIdInput">queue_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.consumers"></a>

```python
consumers: DataCloudflareQueueConsumersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList">DataCloudflareQueueConsumersList</a>

---

##### `consumers_total_count`<sup>Required</sup> <a name="consumers_total_count" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.consumersTotalCount"></a>

```python
consumers_total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `producers`<sup>Required</sup> <a name="producers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.producers"></a>

```python
producers: DataCloudflareQueueProducersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList">DataCloudflareQueueProducersList</a>

---

##### `producers_total_count`<sup>Required</sup> <a name="producers_total_count" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.producersTotalCount"></a>

```python
producers_total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.settings"></a>

```python
settings: DataCloudflareQueueSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference">DataCloudflareQueueSettingsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `queue_id_input`<sup>Optional</sup> <a name="queue_id_input" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.queueIdInput"></a>

```python
queue_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareQueueConfig <a name="DataCloudflareQueueConfig" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  queue_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.accountId">account_id</a></code> | <code>str</code> | A Resource identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.queueId">queue_id</a></code> | <code>str</code> | A Resource identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue#account_id DataCloudflareQueue#account_id}

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConfig.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/queue#queue_id DataCloudflareQueue#queue_id}

---

### DataCloudflareQueueConsumers <a name="DataCloudflareQueueConsumers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumers.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueConsumers()
```


### DataCloudflareQueueConsumersSettings <a name="DataCloudflareQueueConsumersSettings" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettings.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueConsumersSettings()
```


### DataCloudflareQueueProducers <a name="DataCloudflareQueueProducers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducers.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueProducers()
```


### DataCloudflareQueueSettings <a name="DataCloudflareQueueSettings" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettings.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareQueueConsumersList <a name="DataCloudflareQueueConsumersList" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueConsumersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareQueueConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareQueueConsumersOutputReference <a name="DataCloudflareQueueConsumersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.consumerId">consumer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.scriptName">script_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference">DataCloudflareQueueConsumersSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumers">DataCloudflareQueueConsumers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_id`<sup>Required</sup> <a name="consumer_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.consumerId"></a>

```python
consumer_id: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.settings"></a>

```python
settings: DataCloudflareQueueConsumersSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference">DataCloudflareQueueConsumersSettingsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareQueueConsumers
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumers">DataCloudflareQueueConsumers</a>

---


### DataCloudflareQueueConsumersSettingsOutputReference <a name="DataCloudflareQueueConsumersSettingsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.maxConcurrency">max_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.maxWaitTimeMs">max_wait_time_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.retryDelay">retry_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.visibilityTimeoutMs">visibility_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettings">DataCloudflareQueueConsumersSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrency`<sup>Required</sup> <a name="max_concurrency" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.maxConcurrency"></a>

```python
max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_wait_time_ms`<sup>Required</sup> <a name="max_wait_time_ms" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.maxWaitTimeMs"></a>

```python
max_wait_time_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_delay`<sup>Required</sup> <a name="retry_delay" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.retryDelay"></a>

```python
retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `visibility_timeout_ms`<sup>Required</sup> <a name="visibility_timeout_ms" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.visibilityTimeoutMs"></a>

```python
visibility_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareQueueConsumersSettings
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueConsumersSettings">DataCloudflareQueueConsumersSettings</a>

---


### DataCloudflareQueueProducersList <a name="DataCloudflareQueueProducersList" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueProducersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareQueueProducersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareQueueProducersOutputReference <a name="DataCloudflareQueueProducersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueProducersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducers">DataCloudflareQueueProducers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducersOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareQueueProducers
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueProducers">DataCloudflareQueueProducers</a>

---


### DataCloudflareQueueSettingsOutputReference <a name="DataCloudflareQueueSettingsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_queue

dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.deliveryDelay">delivery_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.deliveryPaused">delivery_paused</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.messageRetentionPeriod">message_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettings">DataCloudflareQueueSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_delay`<sup>Required</sup> <a name="delivery_delay" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.deliveryDelay"></a>

```python
delivery_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delivery_paused`<sup>Required</sup> <a name="delivery_paused" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.deliveryPaused"></a>

```python
delivery_paused: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `message_retention_period`<sup>Required</sup> <a name="message_retention_period" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.messageRetentionPeriod"></a>

```python
message_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareQueueSettings
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareQueue.DataCloudflareQueueSettings">DataCloudflareQueueSettings</a>

---




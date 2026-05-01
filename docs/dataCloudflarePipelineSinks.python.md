# `dataCloudflarePipelineSinks` Submodule <a name="`dataCloudflarePipelineSinks` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePipelineSinks <a name="DataCloudflarePipelineSinks" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks cloudflare_pipeline_sinks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinks(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  max_items: typing.Union[int, float] = None,
  pipeline_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks#pipeline_id DataCloudflarePipelineSinks#pipeline_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.accountId"></a>

- *Type:* str

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks#account_id DataCloudflarePipelineSinks#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks#max_items DataCloudflarePipelineSinks#max_items}

---

##### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.Initializer.parameter.pipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks#pipeline_id DataCloudflarePipelineSinks#pipeline_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.resetPipelineId">reset_pipeline_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_pipeline_id` <a name="reset_pipeline_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.resetPipelineId"></a>

```python
def reset_pipeline_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflarePipelineSinks resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflarePipelineSinks resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflarePipelineSinks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflarePipelineSinks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePipelineSinks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList">DataCloudflarePipelineSinksResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.result"></a>

```python
result: DataCloudflarePipelineSinksResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList">DataCloudflarePipelineSinksResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePipelineSinksConfig <a name="DataCloudflarePipelineSinksConfig" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  max_items: typing.Union[int, float] = None,
  pipeline_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.accountId">account_id</a></code> | <code>str</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks#pipeline_id DataCloudflarePipelineSinks#pipeline_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks#account_id DataCloudflarePipelineSinks#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks#max_items DataCloudflarePipelineSinks#max_items}

---

##### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksConfig.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_sinks#pipeline_id DataCloudflarePipelineSinks#pipeline_id}.

---

### DataCloudflarePipelineSinksResult <a name="DataCloudflarePipelineSinksResult" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResult()
```


### DataCloudflarePipelineSinksResultConfig <a name="DataCloudflarePipelineSinksResultConfig" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfig()
```


### DataCloudflarePipelineSinksResultConfigFileNaming <a name="DataCloudflarePipelineSinksResultConfigFileNaming" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNaming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNaming.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNaming()
```


### DataCloudflarePipelineSinksResultConfigPartitioning <a name="DataCloudflarePipelineSinksResultConfigPartitioning" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioning.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioning()
```


### DataCloudflarePipelineSinksResultConfigRollingPolicy <a name="DataCloudflarePipelineSinksResultConfigRollingPolicy" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicy.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicy()
```


### DataCloudflarePipelineSinksResultFormat <a name="DataCloudflarePipelineSinksResultFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormat.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormat()
```


### DataCloudflarePipelineSinksResultSchema <a name="DataCloudflarePipelineSinksResultSchema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchema.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchema()
```


### DataCloudflarePipelineSinksResultSchemaFields <a name="DataCloudflarePipelineSinksResultSchemaFields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFields.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFields()
```


### DataCloudflarePipelineSinksResultSchemaFormat <a name="DataCloudflarePipelineSinksResultSchemaFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormat.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormat()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePipelineSinksResultConfigFileNamingOutputReference <a name="DataCloudflarePipelineSinksResultConfigFileNamingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNaming">DataCloudflarePipelineSinksResultConfigFileNaming</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineSinksResultConfigFileNaming
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNaming">DataCloudflarePipelineSinksResultConfigFileNaming</a>

---


### DataCloudflarePipelineSinksResultConfigOutputReference <a name="DataCloudflarePipelineSinksResultConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.fileNaming">file_naming</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference">DataCloudflarePipelineSinksResultConfigFileNamingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.partitioning">partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference">DataCloudflarePipelineSinksResultConfigPartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.rollingPolicy">rolling_policy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference">DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfig">DataCloudflarePipelineSinksResultConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `file_naming`<sup>Required</sup> <a name="file_naming" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.fileNaming"></a>

```python
file_naming: DataCloudflarePipelineSinksResultConfigFileNamingOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigFileNamingOutputReference">DataCloudflarePipelineSinksResultConfigFileNamingOutputReference</a>

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.jurisdiction"></a>

```python
jurisdiction: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partitioning`<sup>Required</sup> <a name="partitioning" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.partitioning"></a>

```python
partitioning: DataCloudflarePipelineSinksResultConfigPartitioningOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference">DataCloudflarePipelineSinksResultConfigPartitioningOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `rolling_policy`<sup>Required</sup> <a name="rolling_policy" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.rollingPolicy"></a>

```python
rolling_policy: DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference">DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference</a>

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineSinksResultConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfig">DataCloudflarePipelineSinksResultConfig</a>

---


### DataCloudflarePipelineSinksResultConfigPartitioningOutputReference <a name="DataCloudflarePipelineSinksResultConfigPartitioningOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.property.timePattern">time_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioning">DataCloudflarePipelineSinksResultConfigPartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_pattern`<sup>Required</sup> <a name="time_pattern" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.property.timePattern"></a>

```python
time_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioningOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineSinksResultConfigPartitioning
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigPartitioning">DataCloudflarePipelineSinksResultConfigPartitioning</a>

---


### DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference <a name="DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.fileSizeBytes">file_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.inactivitySeconds">inactivity_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicy">DataCloudflarePipelineSinksResultConfigRollingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_size_bytes`<sup>Required</sup> <a name="file_size_bytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.fileSizeBytes"></a>

```python
file_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inactivity_seconds`<sup>Required</sup> <a name="inactivity_seconds" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.inactivitySeconds"></a>

```python
inactivity_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineSinksResultConfigRollingPolicy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigRollingPolicy">DataCloudflarePipelineSinksResultConfigRollingPolicy</a>

---


### DataCloudflarePipelineSinksResultFormatOutputReference <a name="DataCloudflarePipelineSinksResultFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.unstructured">unstructured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormat">DataCloudflarePipelineSinksResultFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `decimal_encoding`<sup>Required</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

---

##### `row_group_bytes`<sup>Required</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.unstructured"></a>

```python
unstructured: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineSinksResultFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormat">DataCloudflarePipelineSinksResultFormat</a>

---


### DataCloudflarePipelineSinksResultList <a name="DataCloudflarePipelineSinksResultList" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflarePipelineSinksResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflarePipelineSinksResultOutputReference <a name="DataCloudflarePipelineSinksResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference">DataCloudflarePipelineSinksResultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference">DataCloudflarePipelineSinksResultFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference">DataCloudflarePipelineSinksResultSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResult">DataCloudflarePipelineSinksResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.config"></a>

```python
config: DataCloudflarePipelineSinksResultConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultConfigOutputReference">DataCloudflarePipelineSinksResultConfigOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.format"></a>

```python
format: DataCloudflarePipelineSinksResultFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultFormatOutputReference">DataCloudflarePipelineSinksResultFormatOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.schema"></a>

```python
schema: DataCloudflarePipelineSinksResultSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference">DataCloudflarePipelineSinksResultSchemaOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineSinksResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResult">DataCloudflarePipelineSinksResult</a>

---


### DataCloudflarePipelineSinksResultSchemaFieldsList <a name="DataCloudflarePipelineSinksResultSchemaFieldsList" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflarePipelineSinksResultSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflarePipelineSinksResultSchemaFieldsOutputReference <a name="DataCloudflarePipelineSinksResultSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.metadataKey">metadata_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.sqlName">sql_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFields">DataCloudflarePipelineSinksResultSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_key`<sup>Required</sup> <a name="metadata_key" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.metadataKey"></a>

```python
metadata_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.required"></a>

```python
required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sql_name`<sup>Required</sup> <a name="sql_name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.sqlName"></a>

```python
sql_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineSinksResultSchemaFields
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFields">DataCloudflarePipelineSinksResultSchemaFields</a>

---


### DataCloudflarePipelineSinksResultSchemaFormatOutputReference <a name="DataCloudflarePipelineSinksResultSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.unstructured">unstructured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormat">DataCloudflarePipelineSinksResultSchemaFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `decimal_encoding`<sup>Required</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

---

##### `row_group_bytes`<sup>Required</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.unstructured"></a>

```python
unstructured: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineSinksResultSchemaFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormat">DataCloudflarePipelineSinksResultSchemaFormat</a>

---


### DataCloudflarePipelineSinksResultSchemaOutputReference <a name="DataCloudflarePipelineSinksResultSchemaOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_sinks

dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList">DataCloudflarePipelineSinksResultSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference">DataCloudflarePipelineSinksResultSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.inferred">inferred</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchema">DataCloudflarePipelineSinksResultSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.fields"></a>

```python
fields: DataCloudflarePipelineSinksResultSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFieldsList">DataCloudflarePipelineSinksResultSchemaFieldsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.format"></a>

```python
format: DataCloudflarePipelineSinksResultSchemaFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaFormatOutputReference">DataCloudflarePipelineSinksResultSchemaFormatOutputReference</a>

---

##### `inferred`<sup>Required</sup> <a name="inferred" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.inferred"></a>

```python
inferred: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineSinksResultSchema
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSinks.DataCloudflarePipelineSinksResultSchema">DataCloudflarePipelineSinksResultSchema</a>

---




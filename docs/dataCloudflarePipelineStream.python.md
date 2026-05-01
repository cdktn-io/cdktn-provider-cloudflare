# `dataCloudflarePipelineStream` Submodule <a name="`dataCloudflarePipelineStream` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePipelineStream <a name="DataCloudflarePipelineStream" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream cloudflare_pipeline_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStream(
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
  filter: DataCloudflarePipelineStreamFilter = None,
  stream_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#filter DataCloudflarePipelineStream#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.streamId">stream_id</a></code> | <code>str</code> | Specifies the public ID of the stream. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.accountId"></a>

- *Type:* str

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#account_id DataCloudflarePipelineStream#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#filter DataCloudflarePipelineStream#filter}.

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.streamId"></a>

- *Type:* str

Specifies the public ID of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#stream_id DataCloudflarePipelineStream#stream_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetStreamId">reset_stream_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.putFilter"></a>

```python
def put_filter(
  pipeline_id: str = None
) -> None
```

###### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.putFilter.parameter.pipelineId"></a>

- *Type:* str

Specifies the public ID of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#pipeline_id DataCloudflarePipelineStream#pipeline_id}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetStreamId"></a>

```python
def reset_stream_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflarePipelineStream resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStream.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflarePipelineStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflarePipelineStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflarePipelineStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePipelineStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference">DataCloudflarePipelineStreamFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference">DataCloudflarePipelineStreamFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.http">http</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference">DataCloudflarePipelineStreamHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference">DataCloudflarePipelineStreamSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.workerBinding">worker_binding</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference">DataCloudflarePipelineStreamWorkerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.filter"></a>

```python
filter: DataCloudflarePipelineStreamFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference">DataCloudflarePipelineStreamFilterOutputReference</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.format"></a>

```python
format: DataCloudflarePipelineStreamFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference">DataCloudflarePipelineStreamFormatOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.http"></a>

```python
http: DataCloudflarePipelineStreamHttpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference">DataCloudflarePipelineStreamHttpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.schema"></a>

```python
schema: DataCloudflarePipelineStreamSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference">DataCloudflarePipelineStreamSchemaOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_binding`<sup>Required</sup> <a name="worker_binding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.workerBinding"></a>

```python
worker_binding: DataCloudflarePipelineStreamWorkerBindingOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference">DataCloudflarePipelineStreamWorkerBindingOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflarePipelineStreamFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a>

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePipelineStreamConfig <a name="DataCloudflarePipelineStreamConfig" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  filter: DataCloudflarePipelineStreamFilter = None,
  stream_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.accountId">account_id</a></code> | <code>str</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#filter DataCloudflarePipelineStream#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.streamId">stream_id</a></code> | <code>str</code> | Specifies the public ID of the stream. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#account_id DataCloudflarePipelineStream#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.filter"></a>

```python
filter: DataCloudflarePipelineStreamFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#filter DataCloudflarePipelineStream#filter}.

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

Specifies the public ID of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#stream_id DataCloudflarePipelineStream#stream_id}

---

### DataCloudflarePipelineStreamFilter <a name="DataCloudflarePipelineStreamFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter(
  pipeline_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter.property.pipelineId">pipeline_id</a></code> | <code>str</code> | Specifies the public ID of the pipeline. |

---

##### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

Specifies the public ID of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/pipeline_stream#pipeline_id DataCloudflarePipelineStream#pipeline_id}

---

### DataCloudflarePipelineStreamFormat <a name="DataCloudflarePipelineStreamFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat()
```


### DataCloudflarePipelineStreamHttp <a name="DataCloudflarePipelineStreamHttp" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp()
```


### DataCloudflarePipelineStreamHttpCors <a name="DataCloudflarePipelineStreamHttpCors" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors()
```


### DataCloudflarePipelineStreamSchema <a name="DataCloudflarePipelineStreamSchema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema()
```


### DataCloudflarePipelineStreamSchemaFields <a name="DataCloudflarePipelineStreamSchemaFields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields()
```


### DataCloudflarePipelineStreamSchemaFormat <a name="DataCloudflarePipelineStreamSchemaFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat()
```


### DataCloudflarePipelineStreamWorkerBinding <a name="DataCloudflarePipelineStreamWorkerBinding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePipelineStreamFilterOutputReference <a name="DataCloudflarePipelineStreamFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resetPipelineId">reset_pipeline_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pipeline_id` <a name="reset_pipeline_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resetPipelineId"></a>

```python
def reset_pipeline_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflarePipelineStreamFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a>

---


### DataCloudflarePipelineStreamFormatOutputReference <a name="DataCloudflarePipelineStreamFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.unstructured">unstructured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat">DataCloudflarePipelineStreamFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `decimal_encoding`<sup>Required</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

---

##### `row_group_bytes`<sup>Required</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.unstructured"></a>

```python
unstructured: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineStreamFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat">DataCloudflarePipelineStreamFormat</a>

---


### DataCloudflarePipelineStreamHttpCorsOutputReference <a name="DataCloudflarePipelineStreamHttpCorsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.origins">origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors">DataCloudflarePipelineStreamHttpCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.origins"></a>

```python
origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineStreamHttpCors
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors">DataCloudflarePipelineStreamHttpCors</a>

---


### DataCloudflarePipelineStreamHttpOutputReference <a name="DataCloudflarePipelineStreamHttpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.authentication">authentication</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference">DataCloudflarePipelineStreamHttpCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp">DataCloudflarePipelineStreamHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.authentication"></a>

```python
authentication: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.cors"></a>

```python
cors: DataCloudflarePipelineStreamHttpCorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference">DataCloudflarePipelineStreamHttpCorsOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineStreamHttp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp">DataCloudflarePipelineStreamHttp</a>

---


### DataCloudflarePipelineStreamSchemaFieldsList <a name="DataCloudflarePipelineStreamSchemaFieldsList" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflarePipelineStreamSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflarePipelineStreamSchemaFieldsOutputReference <a name="DataCloudflarePipelineStreamSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.metadataKey">metadata_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.sqlName">sql_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields">DataCloudflarePipelineStreamSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_key`<sup>Required</sup> <a name="metadata_key" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.metadataKey"></a>

```python
metadata_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.required"></a>

```python
required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sql_name`<sup>Required</sup> <a name="sql_name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.sqlName"></a>

```python
sql_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineStreamSchemaFields
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields">DataCloudflarePipelineStreamSchemaFields</a>

---


### DataCloudflarePipelineStreamSchemaFormatOutputReference <a name="DataCloudflarePipelineStreamSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.unstructured">unstructured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat">DataCloudflarePipelineStreamSchemaFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `decimal_encoding`<sup>Required</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

---

##### `row_group_bytes`<sup>Required</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.unstructured"></a>

```python
unstructured: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineStreamSchemaFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat">DataCloudflarePipelineStreamSchemaFormat</a>

---


### DataCloudflarePipelineStreamSchemaOutputReference <a name="DataCloudflarePipelineStreamSchemaOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList">DataCloudflarePipelineStreamSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference">DataCloudflarePipelineStreamSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.inferred">inferred</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema">DataCloudflarePipelineStreamSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.fields"></a>

```python
fields: DataCloudflarePipelineStreamSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList">DataCloudflarePipelineStreamSchemaFieldsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.format"></a>

```python
format: DataCloudflarePipelineStreamSchemaFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference">DataCloudflarePipelineStreamSchemaFormatOutputReference</a>

---

##### `inferred`<sup>Required</sup> <a name="inferred" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.inferred"></a>

```python
inferred: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineStreamSchema
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema">DataCloudflarePipelineStreamSchema</a>

---


### DataCloudflarePipelineStreamWorkerBindingOutputReference <a name="DataCloudflarePipelineStreamWorkerBindingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_pipeline_stream

dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding">DataCloudflarePipelineStreamWorkerBinding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflarePipelineStreamWorkerBinding
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding">DataCloudflarePipelineStreamWorkerBinding</a>

---




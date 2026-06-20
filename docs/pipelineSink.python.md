# `pipelineSink` Submodule <a name="`pipelineSink` Submodule" id="@cdktn/provider-cloudflare.pipelineSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineSink <a name="PipelineSink" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink cloudflare_pipeline_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSink(
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
  name: str,
  type: str,
  config: PipelineSinkConfigA = None,
  format: PipelineSinkFormat = None,
  schema: PipelineSinkSchema = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.name">name</a></code> | <code>str</code> | Defines the name of the Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.type">type</a></code> | <code>str</code> | Specifies the type of sink. Available values: "r2", "r2_data_catalog". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | Defines the configuration of the R2 Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#schema PipelineSink#schema}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.accountId"></a>

- *Type:* str

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.name"></a>

- *Type:* str

Defines the name of the Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#name PipelineSink#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.type"></a>

- *Type:* str

Specifies the type of sink. Available values: "r2", "r2_data_catalog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

Defines the configuration of the R2 Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#config PipelineSink#config}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.format"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#schema PipelineSink#schema}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat">put_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig"></a>

```python
def put_config(
  account_id: str,
  bucket: str,
  credentials: PipelineSinkConfigCredentials = None,
  file_naming: PipelineSinkConfigFileNaming = None,
  jurisdiction: str = None,
  namespace: str = None,
  partitioning: PipelineSinkConfigPartitioning = None,
  path: str = None,
  rolling_policy: PipelineSinkConfigRollingPolicy = None,
  table_name: str = None,
  token: str = None
) -> None
```

###### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.accountId"></a>

- *Type:* str

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.bucket"></a>

- *Type:* str

R2 Bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#bucket PipelineSink#bucket}

---

###### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.credentials"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#credentials PipelineSink#credentials}.

---

###### `file_naming`<sup>Optional</sup> <a name="file_naming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.fileNaming"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

Controls filename prefix/suffix and strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#file_naming PipelineSink#file_naming}

---

###### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.jurisdiction"></a>

- *Type:* str

Jurisdiction this bucket is hosted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#jurisdiction PipelineSink#jurisdiction}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.namespace"></a>

- *Type:* str

Table namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#namespace PipelineSink#namespace}

---

###### `partitioning`<sup>Optional</sup> <a name="partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.partitioning"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

Data-layout partitioning for sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#partitioning PipelineSink#partitioning}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.path"></a>

- *Type:* str

Subpath within the bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#path PipelineSink#path}

---

###### `rolling_policy`<sup>Optional</sup> <a name="rolling_policy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.rollingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

Rolling policy for file sinks (when & why to close a file and open a new one).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#rolling_policy PipelineSink#rolling_policy}

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.tableName"></a>

- *Type:* str

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#table_name PipelineSink#table_name}

---

###### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.token"></a>

- *Type:* str

Authentication token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#token PipelineSink#token}

---

##### `put_format` <a name="put_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat"></a>

```python
def put_format(
  type: str,
  compression: str = None,
  decimal_encoding: str = None,
  row_group_bytes: typing.Union[int, float] = None,
  timestamp_format: str = None,
  unstructured: bool | IResolvable = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.type"></a>

- *Type:* str

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.compression"></a>

- *Type:* str

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

###### `decimal_encoding`<sup>Optional</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.decimalEncoding"></a>

- *Type:* str

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

###### `row_group_bytes`<sup>Optional</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.rowGroupBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.timestampFormat"></a>

- *Type:* str

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

###### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.unstructured"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema"></a>

```python
def put_schema(
  fields: IResolvable | typing.List[PipelineSinkSchemaFields] = None,
  format: PipelineSinkSchemaFormat = None,
  inferred: bool | IResolvable = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#fields PipelineSink#fields}.

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema.parameter.format"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#format PipelineSink#format}.

---

###### `inferred`<sup>Optional</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema.parameter.inferred"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#inferred PipelineSink#inferred}.

---

##### `reset_config` <a name="reset_config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema"></a>

```python
def reset_schema() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PipelineSink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PipelineSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PipelineSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput">format_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput">schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config"></a>

```python
config: PipelineSinkConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format"></a>

```python
format: PipelineSinkFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema"></a>

```python
schema: PipelineSinkSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput"></a>

```python
config_input: IResolvable | PipelineSinkConfigA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput"></a>

```python
format_input: IResolvable | PipelineSinkFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput"></a>

```python
schema_input: IResolvable | PipelineSinkSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineSinkConfig <a name="PipelineSinkConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str,
  type: str,
  config: PipelineSinkConfigA = None,
  format: PipelineSinkFormat = None,
  schema: PipelineSinkSchema = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId">account_id</a></code> | <code>str</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name">name</a></code> | <code>str</code> | Defines the name of the Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type">type</a></code> | <code>str</code> | Specifies the type of sink. Available values: "r2", "r2_data_catalog". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | Defines the configuration of the R2 Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#schema PipelineSink#schema}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Defines the name of the Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#name PipelineSink#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the type of sink. Available values: "r2", "r2_data_catalog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config"></a>

```python
config: PipelineSinkConfigA
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

Defines the configuration of the R2 Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#config PipelineSink#config}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format"></a>

```python
format: PipelineSinkFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema"></a>

```python
schema: PipelineSinkSchema
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#schema PipelineSink#schema}.

---

### PipelineSinkConfigA <a name="PipelineSinkConfigA" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigA(
  account_id: str,
  bucket: str,
  credentials: PipelineSinkConfigCredentials = None,
  file_naming: PipelineSinkConfigFileNaming = None,
  jurisdiction: str = None,
  namespace: str = None,
  partitioning: PipelineSinkConfigPartitioning = None,
  path: str = None,
  rolling_policy: PipelineSinkConfigRollingPolicy = None,
  table_name: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket">bucket</a></code> | <code>str</code> | R2 Bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#credentials PipelineSink#credentials}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming">file_naming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | Controls filename prefix/suffix and strategy. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction">jurisdiction</a></code> | <code>str</code> | Jurisdiction this bucket is hosted in. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace">namespace</a></code> | <code>str</code> | Table namespace. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning">partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | Data-layout partitioning for sinks. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path">path</a></code> | <code>str</code> | Subpath within the bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy">rolling_policy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | Rolling policy for file sinks (when & why to close a file and open a new one). |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName">table_name</a></code> | <code>str</code> | Table name. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token">token</a></code> | <code>str</code> | Authentication token. |

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

R2 Bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#bucket PipelineSink#bucket}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials"></a>

```python
credentials: PipelineSinkConfigCredentials
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#credentials PipelineSink#credentials}.

---

##### `file_naming`<sup>Optional</sup> <a name="file_naming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming"></a>

```python
file_naming: PipelineSinkConfigFileNaming
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

Controls filename prefix/suffix and strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#file_naming PipelineSink#file_naming}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction"></a>

```python
jurisdiction: str
```

- *Type:* str

Jurisdiction this bucket is hosted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#jurisdiction PipelineSink#jurisdiction}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Table namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#namespace PipelineSink#namespace}

---

##### `partitioning`<sup>Optional</sup> <a name="partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning"></a>

```python
partitioning: PipelineSinkConfigPartitioning
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

Data-layout partitioning for sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#partitioning PipelineSink#partitioning}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path"></a>

```python
path: str
```

- *Type:* str

Subpath within the bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#path PipelineSink#path}

---

##### `rolling_policy`<sup>Optional</sup> <a name="rolling_policy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy"></a>

```python
rolling_policy: PipelineSinkConfigRollingPolicy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

Rolling policy for file sinks (when & why to close a file and open a new one).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#rolling_policy PipelineSink#rolling_policy}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#table_name PipelineSink#table_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token"></a>

```python
token: str
```

- *Type:* str

Authentication token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#token PipelineSink#token}

---

### PipelineSinkConfigCredentials <a name="PipelineSinkConfigCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigCredentials(
  access_key_id: str,
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Cloudflare Account ID for the bucket. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#access_key_id PipelineSink#access_key_id}

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#secret_access_key PipelineSink#secret_access_key}

---

### PipelineSinkConfigFileNaming <a name="PipelineSinkConfigFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigFileNaming(
  prefix: str = None,
  strategy: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix">prefix</a></code> | <code>str</code> | The prefix to use in file name. i.e prefix-<uuid>.parquet. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy">strategy</a></code> | <code>str</code> | Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix">suffix</a></code> | <code>str</code> | This will overwrite the default file suffix. i.e .parquet, use with caution. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The prefix to use in file name. i.e prefix-<uuid>.parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#prefix PipelineSink#prefix}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#strategy PipelineSink#strategy}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

This will overwrite the default file suffix. i.e .parquet, use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#suffix PipelineSink#suffix}

---

### PipelineSinkConfigPartitioning <a name="PipelineSinkConfigPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigPartitioning(
  time_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern">time_pattern</a></code> | <code>str</code> | The pattern of the date string. |

---

##### `time_pattern`<sup>Optional</sup> <a name="time_pattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern"></a>

```python
time_pattern: str
```

- *Type:* str

The pattern of the date string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#time_pattern PipelineSink#time_pattern}

---

### PipelineSinkConfigRollingPolicy <a name="PipelineSinkConfigRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigRollingPolicy(
  file_size_bytes: typing.Union[int, float] = None,
  inactivity_seconds: typing.Union[int, float] = None,
  interval_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes">file_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Files will be rolled after reaching this number of bytes. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds">inactivity_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds of inactivity to wait before rolling over to a new file. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait before rolling over to a new file. |

---

##### `file_size_bytes`<sup>Optional</sup> <a name="file_size_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes"></a>

```python
file_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Files will be rolled after reaching this number of bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#file_size_bytes PipelineSink#file_size_bytes}

---

##### `inactivity_seconds`<sup>Optional</sup> <a name="inactivity_seconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds"></a>

```python
inactivity_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds of inactivity to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#inactivity_seconds PipelineSink#inactivity_seconds}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#interval_seconds PipelineSink#interval_seconds}

---

### PipelineSinkFormat <a name="PipelineSinkFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkFormat(
  type: str,
  compression: str = None,
  decimal_encoding: str = None,
  row_group_bytes: typing.Union[int, float] = None,
  timestamp_format: str = None,
  unstructured: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type">type</a></code> | <code>str</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression">compression</a></code> | <code>str</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured">unstructured</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression"></a>

```python
compression: str
```

- *Type:* str

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `decimal_encoding`<sup>Optional</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `row_group_bytes`<sup>Optional</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured"></a>

```python
unstructured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

### PipelineSinkSchema <a name="PipelineSinkSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkSchema(
  fields: IResolvable | typing.List[PipelineSinkSchemaFields] = None,
  format: PipelineSinkSchemaFormat = None,
  inferred: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#fields PipelineSink#fields}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred">inferred</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#inferred PipelineSink#inferred}. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields"></a>

```python
fields: IResolvable | typing.List[PipelineSinkSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#fields PipelineSink#fields}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format"></a>

```python
format: PipelineSinkSchemaFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `inferred`<sup>Optional</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred"></a>

```python
inferred: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#inferred PipelineSink#inferred}.

---

### PipelineSinkSchemaFields <a name="PipelineSinkSchemaFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkSchemaFields(
  type: str,
  metadata_key: str = None,
  name: str = None,
  required: bool | IResolvable = None,
  sql_name: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type">type</a></code> | <code>str</code> | Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey">metadata_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#name PipelineSink#name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#required PipelineSink#required}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName">sql_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit">unit</a></code> | <code>str</code> | Available values: "second", "millisecond", "microsecond", "nanosecond". |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `metadata_key`<sup>Optional</sup> <a name="metadata_key" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey"></a>

```python
metadata_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#name PipelineSink#name}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#required PipelineSink#required}.

---

##### `sql_name`<sup>Optional</sup> <a name="sql_name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName"></a>

```python
sql_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit"></a>

```python
unit: str
```

- *Type:* str

Available values: "second", "millisecond", "microsecond", "nanosecond".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#unit PipelineSink#unit}

---

### PipelineSinkSchemaFormat <a name="PipelineSinkSchemaFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkSchemaFormat(
  type: str,
  compression: str = None,
  decimal_encoding: str = None,
  row_group_bytes: typing.Union[int, float] = None,
  timestamp_format: str = None,
  unstructured: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type">type</a></code> | <code>str</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression">compression</a></code> | <code>str</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured">unstructured</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression"></a>

```python
compression: str
```

- *Type:* str

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `decimal_encoding`<sup>Optional</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `row_group_bytes`<sup>Optional</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured"></a>

```python
unstructured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineSinkConfigAOutputReference <a name="PipelineSinkConfigAOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming">put_file_naming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning">put_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy">put_rolling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming">reset_file_naming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction">reset_jurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning">reset_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy">reset_rolling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_credentials` <a name="put_credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials"></a>

```python
def put_credentials(
  access_key_id: str,
  secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials.parameter.accessKeyId"></a>

- *Type:* str

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#access_key_id PipelineSink#access_key_id}

---

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials.parameter.secretAccessKey"></a>

- *Type:* str

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#secret_access_key PipelineSink#secret_access_key}

---

##### `put_file_naming` <a name="put_file_naming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming"></a>

```python
def put_file_naming(
  prefix: str = None,
  strategy: str = None,
  suffix: str = None
) -> None
```

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming.parameter.prefix"></a>

- *Type:* str

The prefix to use in file name. i.e prefix-<uuid>.parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#prefix PipelineSink#prefix}

---

###### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming.parameter.strategy"></a>

- *Type:* str

Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#strategy PipelineSink#strategy}

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming.parameter.suffix"></a>

- *Type:* str

This will overwrite the default file suffix. i.e .parquet, use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#suffix PipelineSink#suffix}

---

##### `put_partitioning` <a name="put_partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning"></a>

```python
def put_partitioning(
  time_pattern: str = None
) -> None
```

###### `time_pattern`<sup>Optional</sup> <a name="time_pattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning.parameter.timePattern"></a>

- *Type:* str

The pattern of the date string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#time_pattern PipelineSink#time_pattern}

---

##### `put_rolling_policy` <a name="put_rolling_policy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy"></a>

```python
def put_rolling_policy(
  file_size_bytes: typing.Union[int, float] = None,
  inactivity_seconds: typing.Union[int, float] = None,
  interval_seconds: typing.Union[int, float] = None
) -> None
```

###### `file_size_bytes`<sup>Optional</sup> <a name="file_size_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy.parameter.fileSizeBytes"></a>

- *Type:* typing.Union[int, float]

Files will be rolled after reaching this number of bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#file_size_bytes PipelineSink#file_size_bytes}

---

###### `inactivity_seconds`<sup>Optional</sup> <a name="inactivity_seconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy.parameter.inactivitySeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds of inactivity to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#inactivity_seconds PipelineSink#inactivity_seconds}

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#interval_seconds PipelineSink#interval_seconds}

---

##### `reset_credentials` <a name="reset_credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_file_naming` <a name="reset_file_naming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming"></a>

```python
def reset_file_naming() -> None
```

##### `reset_jurisdiction` <a name="reset_jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction"></a>

```python
def reset_jurisdiction() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partitioning` <a name="reset_partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning"></a>

```python
def reset_partitioning() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_rolling_policy` <a name="reset_rolling_policy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy"></a>

```python
def reset_rolling_policy() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming">file_naming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning">partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy">rolling_policy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput">credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput">file_naming_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput">jurisdiction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput">partitioning_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput">rolling_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials"></a>

```python
credentials: PipelineSinkConfigCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a>

---

##### `file_naming`<sup>Required</sup> <a name="file_naming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming"></a>

```python
file_naming: PipelineSinkConfigFileNamingOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a>

---

##### `partitioning`<sup>Required</sup> <a name="partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning"></a>

```python
partitioning: PipelineSinkConfigPartitioningOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a>

---

##### `rolling_policy`<sup>Required</sup> <a name="rolling_policy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy"></a>

```python
rolling_policy: PipelineSinkConfigRollingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput"></a>

```python
credentials_input: IResolvable | PipelineSinkConfigCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---

##### `file_naming_input`<sup>Optional</sup> <a name="file_naming_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput"></a>

```python
file_naming_input: IResolvable | PipelineSinkConfigFileNaming
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---

##### `jurisdiction_input`<sup>Optional</sup> <a name="jurisdiction_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput"></a>

```python
jurisdiction_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partitioning_input`<sup>Optional</sup> <a name="partitioning_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput"></a>

```python
partitioning_input: IResolvable | PipelineSinkConfigPartitioning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `rolling_policy_input`<sup>Optional</sup> <a name="rolling_policy_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput"></a>

```python
rolling_policy_input: IResolvable | PipelineSinkConfigRollingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction"></a>

```python
jurisdiction: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineSinkConfigA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---


### PipelineSinkConfigCredentialsOutputReference <a name="PipelineSinkConfigCredentialsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineSinkConfigCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---


### PipelineSinkConfigFileNamingOutputReference <a name="PipelineSinkConfigFileNamingOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigFileNamingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy">reset_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy"></a>

```python
def reset_strategy() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineSinkConfigFileNaming
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---


### PipelineSinkConfigPartitioningOutputReference <a name="PipelineSinkConfigPartitioningOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigPartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern">reset_time_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_pattern` <a name="reset_time_pattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern"></a>

```python
def reset_time_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput">time_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern">time_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_pattern_input`<sup>Optional</sup> <a name="time_pattern_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput"></a>

```python
time_pattern_input: str
```

- *Type:* str

---

##### `time_pattern`<sup>Required</sup> <a name="time_pattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern"></a>

```python
time_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineSinkConfigPartitioning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---


### PipelineSinkConfigRollingPolicyOutputReference <a name="PipelineSinkConfigRollingPolicyOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkConfigRollingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes">reset_file_size_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds">reset_inactivity_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_size_bytes` <a name="reset_file_size_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes"></a>

```python
def reset_file_size_bytes() -> None
```

##### `reset_inactivity_seconds` <a name="reset_inactivity_seconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds"></a>

```python
def reset_inactivity_seconds() -> None
```

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput">file_size_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput">inactivity_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes">file_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds">inactivity_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_size_bytes_input`<sup>Optional</sup> <a name="file_size_bytes_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput"></a>

```python
file_size_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inactivity_seconds_input`<sup>Optional</sup> <a name="inactivity_seconds_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput"></a>

```python
inactivity_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_size_bytes`<sup>Required</sup> <a name="file_size_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes"></a>

```python
file_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inactivity_seconds`<sup>Required</sup> <a name="inactivity_seconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds"></a>

```python
inactivity_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineSinkConfigRollingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---


### PipelineSinkFormatOutputReference <a name="PipelineSinkFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding">reset_decimal_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes">reset_row_group_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured">reset_unstructured</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_decimal_encoding` <a name="reset_decimal_encoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding"></a>

```python
def reset_decimal_encoding() -> None
```

##### `reset_row_group_bytes` <a name="reset_row_group_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes"></a>

```python
def reset_row_group_bytes() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_unstructured` <a name="reset_unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured"></a>

```python
def reset_unstructured() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput">decimal_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput">row_group_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput">unstructured_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured">unstructured</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `decimal_encoding_input`<sup>Optional</sup> <a name="decimal_encoding_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput"></a>

```python
decimal_encoding_input: str
```

- *Type:* str

---

##### `row_group_bytes_input`<sup>Optional</sup> <a name="row_group_bytes_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput"></a>

```python
row_group_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unstructured_input`<sup>Optional</sup> <a name="unstructured_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput"></a>

```python
unstructured_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `decimal_encoding`<sup>Required</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

---

##### `row_group_bytes`<sup>Required</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured"></a>

```python
unstructured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineSinkFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---


### PipelineSinkSchemaFieldsList <a name="PipelineSinkSchemaFieldsList" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PipelineSinkSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PipelineSinkSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>]

---


### PipelineSinkSchemaFieldsOutputReference <a name="PipelineSinkSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey">reset_metadata_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName">reset_sql_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata_key` <a name="reset_metadata_key" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey"></a>

```python
def reset_metadata_key() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_sql_name` <a name="reset_sql_name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName"></a>

```python
def reset_sql_name() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput">metadata_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput">sql_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey">metadata_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName">sql_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_key_input`<sup>Optional</sup> <a name="metadata_key_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput"></a>

```python
metadata_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sql_name_input`<sup>Optional</sup> <a name="sql_name_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput"></a>

```python
sql_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `metadata_key`<sup>Required</sup> <a name="metadata_key" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey"></a>

```python
metadata_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sql_name`<sup>Required</sup> <a name="sql_name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName"></a>

```python
sql_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineSinkSchemaFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>

---


### PipelineSinkSchemaFormatOutputReference <a name="PipelineSinkSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkSchemaFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding">reset_decimal_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes">reset_row_group_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured">reset_unstructured</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_decimal_encoding` <a name="reset_decimal_encoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding"></a>

```python
def reset_decimal_encoding() -> None
```

##### `reset_row_group_bytes` <a name="reset_row_group_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes"></a>

```python
def reset_row_group_bytes() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_unstructured` <a name="reset_unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured"></a>

```python
def reset_unstructured() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput">decimal_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput">row_group_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput">unstructured_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured">unstructured</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `decimal_encoding_input`<sup>Optional</sup> <a name="decimal_encoding_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput"></a>

```python
decimal_encoding_input: str
```

- *Type:* str

---

##### `row_group_bytes_input`<sup>Optional</sup> <a name="row_group_bytes_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput"></a>

```python
row_group_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unstructured_input`<sup>Optional</sup> <a name="unstructured_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput"></a>

```python
unstructured_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `decimal_encoding`<sup>Required</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

---

##### `row_group_bytes`<sup>Required</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured"></a>

```python
unstructured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineSinkSchemaFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---


### PipelineSinkSchemaOutputReference <a name="PipelineSinkSchemaOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_sink

pipelineSink.PipelineSinkSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat">put_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred">reset_inferred</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[PipelineSinkSchemaFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>]

---

##### `put_format` <a name="put_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat"></a>

```python
def put_format(
  type: str,
  compression: str = None,
  decimal_encoding: str = None,
  row_group_bytes: typing.Union[int, float] = None,
  timestamp_format: str = None,
  unstructured: bool | IResolvable = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.type"></a>

- *Type:* str

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.compression"></a>

- *Type:* str

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

###### `decimal_encoding`<sup>Optional</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.decimalEncoding"></a>

- *Type:* str

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

###### `row_group_bytes`<sup>Optional</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.rowGroupBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.timestampFormat"></a>

- *Type:* str

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

###### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.unstructured"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_inferred` <a name="reset_inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred"></a>

```python
def reset_inferred() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput">format_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput">inferred_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred">inferred</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields"></a>

```python
fields: PipelineSinkSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format"></a>

```python
format: PipelineSinkSchemaFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[PipelineSinkSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>]

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput"></a>

```python
format_input: IResolvable | PipelineSinkSchemaFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---

##### `inferred_input`<sup>Optional</sup> <a name="inferred_input" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput"></a>

```python
inferred_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `inferred`<sup>Required</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred"></a>

```python
inferred: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineSinkSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---




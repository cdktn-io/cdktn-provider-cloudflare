# `pipelineStream` Submodule <a name="`pipelineStream` Submodule" id="@cdktn/provider-cloudflare.pipelineStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineStream <a name="PipelineStream" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream cloudflare_pipeline_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStream(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  account_id: str = None,
  format: PipelineStreamFormat = None,
  http: PipelineStreamHttp = None,
  schema: PipelineStreamSchema = None,
  worker_binding: PipelineStreamWorkerBinding = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the Stream. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#format PipelineStream#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.http">http</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#http PipelineStream#http}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#schema PipelineStream#schema}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.workerBinding">worker_binding</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the Stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#name PipelineStream#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.accountId"></a>

- *Type:* str

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#account_id PipelineStream#account_id}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.format"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#format PipelineStream#format}.

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.http"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#http PipelineStream#http}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#schema PipelineStream#schema}.

---

##### `worker_binding`<sup>Optional</sup> <a name="worker_binding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.workerBinding"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat">put_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp">put_http</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putWorkerBinding">put_worker_binding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetHttp">reset_http</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetWorkerBinding">reset_worker_binding</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_format` <a name="put_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat"></a>

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

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat.parameter.type"></a>

- *Type:* str

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#type PipelineStream#type}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat.parameter.compression"></a>

- *Type:* str

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#compression PipelineStream#compression}

---

###### `decimal_encoding`<sup>Optional</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat.parameter.decimalEncoding"></a>

- *Type:* str

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}

---

###### `row_group_bytes`<sup>Optional</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat.parameter.rowGroupBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}.

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat.parameter.timestampFormat"></a>

- *Type:* str

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}

---

###### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat.parameter.unstructured"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}.

---

##### `put_http` <a name="put_http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp"></a>

```python
def put_http(
  authentication: bool | IResolvable,
  enabled: bool | IResolvable,
  cors: PipelineStreamHttpCors = None
) -> None
```

###### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp.parameter.authentication"></a>

- *Type:* bool | cdktn.IResolvable

Indicates that authentication is required for the HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#authentication PipelineStream#authentication}

---

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates that the HTTP endpoint is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#enabled PipelineStream#enabled}

---

###### `cors`<sup>Optional</sup> <a name="cors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp.parameter.cors"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

Specifies the CORS options for the HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#cors PipelineStream#cors}

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema"></a>

```python
def put_schema(
  fields: IResolvable | typing.List[PipelineStreamSchemaFields] = None,
  format: PipelineStreamSchemaFormat = None,
  inferred: bool | IResolvable = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#fields PipelineStream#fields}.

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema.parameter.format"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#format PipelineStream#format}.

---

###### `inferred`<sup>Optional</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema.parameter.inferred"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#inferred PipelineStream#inferred}.

---

##### `put_worker_binding` <a name="put_worker_binding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putWorkerBinding"></a>

```python
def put_worker_binding(
  enabled: bool | IResolvable
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putWorkerBinding.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates that the worker binding is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#enabled PipelineStream#enabled}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_http` <a name="reset_http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetHttp"></a>

```python
def reset_http() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_worker_binding` <a name="reset_worker_binding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetWorkerBinding"></a>

```python
def reset_worker_binding() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PipelineStream resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isConstruct"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PipelineStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PipelineStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PipelineStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PipelineStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference">PipelineStreamFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.http">http</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference">PipelineStreamHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference">PipelineStreamSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBinding">worker_binding</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference">PipelineStreamWorkerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.formatInput">format_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.httpInput">http_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schemaInput">schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBindingInput">worker_binding_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.format"></a>

```python
format: PipelineStreamFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference">PipelineStreamFormatOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.http"></a>

```python
http: PipelineStreamHttpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference">PipelineStreamHttpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schema"></a>

```python
schema: PipelineStreamSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference">PipelineStreamSchemaOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_binding`<sup>Required</sup> <a name="worker_binding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBinding"></a>

```python
worker_binding: PipelineStreamWorkerBindingOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference">PipelineStreamWorkerBindingOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.formatInput"></a>

```python
format_input: IResolvable | PipelineStreamFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

---

##### `http_input`<sup>Optional</sup> <a name="http_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.httpInput"></a>

```python
http_input: IResolvable | PipelineStreamHttp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schemaInput"></a>

```python
schema_input: IResolvable | PipelineStreamSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

---

##### `worker_binding_input`<sup>Optional</sup> <a name="worker_binding_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBindingInput"></a>

```python
worker_binding_input: IResolvable | PipelineStreamWorkerBinding
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineStreamConfig <a name="PipelineStreamConfig" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  account_id: str = None,
  format: PipelineStreamFormat = None,
  http: PipelineStreamHttp = None,
  schema: PipelineStreamSchema = None,
  worker_binding: PipelineStreamWorkerBinding = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the Stream. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.accountId">account_id</a></code> | <code>str</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#format PipelineStream#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.http">http</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#http PipelineStream#http}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#schema PipelineStream#schema}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.workerBinding">worker_binding</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the Stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#name PipelineStream#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#account_id PipelineStream#account_id}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.format"></a>

```python
format: PipelineStreamFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#format PipelineStream#format}.

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.http"></a>

```python
http: PipelineStreamHttp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#http PipelineStream#http}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.schema"></a>

```python
schema: PipelineStreamSchema
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#schema PipelineStream#schema}.

---

##### `worker_binding`<sup>Optional</sup> <a name="worker_binding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.workerBinding"></a>

```python
worker_binding: PipelineStreamWorkerBinding
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}.

---

### PipelineStreamFormat <a name="PipelineStreamFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamFormat(
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
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.type">type</a></code> | <code>str</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.compression">compression</a></code> | <code>str</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.unstructured">unstructured</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#type PipelineStream#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.compression"></a>

```python
compression: str
```

- *Type:* str

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#compression PipelineStream#compression}

---

##### `decimal_encoding`<sup>Optional</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}

---

##### `row_group_bytes`<sup>Optional</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}.

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.unstructured"></a>

```python
unstructured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}.

---

### PipelineStreamHttp <a name="PipelineStreamHttp" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamHttp(
  authentication: bool | IResolvable,
  enabled: bool | IResolvable,
  cors: PipelineStreamHttpCors = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.authentication">authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that authentication is required for the HTTP endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that the HTTP endpoint is enabled. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a></code> | Specifies the CORS options for the HTTP endpoint. |

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.authentication"></a>

```python
authentication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates that authentication is required for the HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#authentication PipelineStream#authentication}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates that the HTTP endpoint is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#enabled PipelineStream#enabled}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.cors"></a>

```python
cors: PipelineStreamHttpCors
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

Specifies the CORS options for the HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#cors PipelineStream#cors}

---

### PipelineStreamHttpCors <a name="PipelineStreamHttpCors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamHttpCors(
  origins: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors.property.origins">origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#origins PipelineStream#origins}. |

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors.property.origins"></a>

```python
origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#origins PipelineStream#origins}.

---

### PipelineStreamSchema <a name="PipelineStreamSchema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamSchema(
  fields: IResolvable | typing.List[PipelineStreamSchemaFields] = None,
  format: PipelineStreamSchemaFormat = None,
  inferred: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#fields PipelineStream#fields}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#format PipelineStream#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.inferred">inferred</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#inferred PipelineStream#inferred}. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.fields"></a>

```python
fields: IResolvable | typing.List[PipelineStreamSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#fields PipelineStream#fields}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.format"></a>

```python
format: PipelineStreamSchemaFormat
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#format PipelineStream#format}.

---

##### `inferred`<sup>Optional</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.inferred"></a>

```python
inferred: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#inferred PipelineStream#inferred}.

---

### PipelineStreamSchemaFields <a name="PipelineStreamSchemaFields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamSchemaFields(
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
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.type">type</a></code> | <code>str</code> | Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.metadataKey">metadata_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#metadata_key PipelineStream#metadata_key}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#name PipelineStream#name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#required PipelineStream#required}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.sqlName">sql_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#sql_name PipelineStream#sql_name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.unit">unit</a></code> | <code>str</code> | Available values: "second", "millisecond", "microsecond", "nanosecond". |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#type PipelineStream#type}

---

##### `metadata_key`<sup>Optional</sup> <a name="metadata_key" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.metadataKey"></a>

```python
metadata_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#metadata_key PipelineStream#metadata_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#name PipelineStream#name}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#required PipelineStream#required}.

---

##### `sql_name`<sup>Optional</sup> <a name="sql_name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.sqlName"></a>

```python
sql_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#sql_name PipelineStream#sql_name}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.unit"></a>

```python
unit: str
```

- *Type:* str

Available values: "second", "millisecond", "microsecond", "nanosecond".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#unit PipelineStream#unit}

---

### PipelineStreamSchemaFormat <a name="PipelineStreamSchemaFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamSchemaFormat(
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
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.type">type</a></code> | <code>str</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.compression">compression</a></code> | <code>str</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.unstructured">unstructured</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#type PipelineStream#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.compression"></a>

```python
compression: str
```

- *Type:* str

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#compression PipelineStream#compression}

---

##### `decimal_encoding`<sup>Optional</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}

---

##### `row_group_bytes`<sup>Optional</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}.

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.unstructured"></a>

```python
unstructured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}.

---

### PipelineStreamWorkerBinding <a name="PipelineStreamWorkerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamWorkerBinding(
  enabled: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that the worker binding is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates that the worker binding is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#enabled PipelineStream#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineStreamFormatOutputReference <a name="PipelineStreamFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetDecimalEncoding">reset_decimal_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetRowGroupBytes">reset_row_group_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetUnstructured">reset_unstructured</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_decimal_encoding` <a name="reset_decimal_encoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetDecimalEncoding"></a>

```python
def reset_decimal_encoding() -> None
```

##### `reset_row_group_bytes` <a name="reset_row_group_bytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetRowGroupBytes"></a>

```python
def reset_row_group_bytes() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_unstructured` <a name="reset_unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetUnstructured"></a>

```python
def reset_unstructured() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncodingInput">decimal_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytesInput">row_group_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructuredInput">unstructured_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructured">unstructured</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `decimal_encoding_input`<sup>Optional</sup> <a name="decimal_encoding_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncodingInput"></a>

```python
decimal_encoding_input: str
```

- *Type:* str

---

##### `row_group_bytes_input`<sup>Optional</sup> <a name="row_group_bytes_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytesInput"></a>

```python
row_group_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unstructured_input`<sup>Optional</sup> <a name="unstructured_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructuredInput"></a>

```python
unstructured_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `decimal_encoding`<sup>Required</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

---

##### `row_group_bytes`<sup>Required</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructured"></a>

```python
unstructured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineStreamFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

---


### PipelineStreamHttpCorsOutputReference <a name="PipelineStreamHttpCorsOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamHttpCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resetOrigins">reset_origins</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_origins` <a name="reset_origins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resetOrigins"></a>

```python
def reset_origins() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.originsInput">origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.origins">origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origins_input`<sup>Optional</sup> <a name="origins_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.originsInput"></a>

```python
origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.origins"></a>

```python
origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineStreamHttpCors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

---


### PipelineStreamHttpOutputReference <a name="PipelineStreamHttpOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resetCors">reset_cors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cors` <a name="put_cors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.putCors"></a>

```python
def put_cors(
  origins: typing.List[str] = None
) -> None
```

###### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.putCors.parameter.origins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#origins PipelineStream#origins}.

---

##### `reset_cors` <a name="reset_cors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resetCors"></a>

```python
def reset_cors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference">PipelineStreamHttpCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authenticationInput">authentication_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.corsInput">cors_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authentication">authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.cors"></a>

```python
cors: PipelineStreamHttpCorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference">PipelineStreamHttpCorsOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authenticationInput"></a>

```python
authentication_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.corsInput"></a>

```python
cors_input: IResolvable | PipelineStreamHttpCors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authentication"></a>

```python
authentication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineStreamHttp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

---


### PipelineStreamSchemaFieldsList <a name="PipelineStreamSchemaFieldsList" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PipelineStreamSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PipelineStreamSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>]

---


### PipelineStreamSchemaFieldsOutputReference <a name="PipelineStreamSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetMetadataKey">reset_metadata_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetSqlName">reset_sql_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata_key` <a name="reset_metadata_key" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetMetadataKey"></a>

```python
def reset_metadata_key() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_sql_name` <a name="reset_sql_name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetSqlName"></a>

```python
def reset_sql_name() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKeyInput">metadata_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlNameInput">sql_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKey">metadata_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlName">sql_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_key_input`<sup>Optional</sup> <a name="metadata_key_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKeyInput"></a>

```python
metadata_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sql_name_input`<sup>Optional</sup> <a name="sql_name_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlNameInput"></a>

```python
sql_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `metadata_key`<sup>Required</sup> <a name="metadata_key" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKey"></a>

```python
metadata_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sql_name`<sup>Required</sup> <a name="sql_name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlName"></a>

```python
sql_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineStreamSchemaFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>

---


### PipelineStreamSchemaFormatOutputReference <a name="PipelineStreamSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamSchemaFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetDecimalEncoding">reset_decimal_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetRowGroupBytes">reset_row_group_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetUnstructured">reset_unstructured</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_decimal_encoding` <a name="reset_decimal_encoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetDecimalEncoding"></a>

```python
def reset_decimal_encoding() -> None
```

##### `reset_row_group_bytes` <a name="reset_row_group_bytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetRowGroupBytes"></a>

```python
def reset_row_group_bytes() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_unstructured` <a name="reset_unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetUnstructured"></a>

```python
def reset_unstructured() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncodingInput">decimal_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytesInput">row_group_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructuredInput">unstructured_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncoding">decimal_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytes">row_group_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructured">unstructured</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `decimal_encoding_input`<sup>Optional</sup> <a name="decimal_encoding_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncodingInput"></a>

```python
decimal_encoding_input: str
```

- *Type:* str

---

##### `row_group_bytes_input`<sup>Optional</sup> <a name="row_group_bytes_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytesInput"></a>

```python
row_group_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unstructured_input`<sup>Optional</sup> <a name="unstructured_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructuredInput"></a>

```python
unstructured_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `decimal_encoding`<sup>Required</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncoding"></a>

```python
decimal_encoding: str
```

- *Type:* str

---

##### `row_group_bytes`<sup>Required</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytes"></a>

```python
row_group_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructured"></a>

```python
unstructured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineStreamSchemaFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

---


### PipelineStreamSchemaOutputReference <a name="PipelineStreamSchemaOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat">put_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetInferred">reset_inferred</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[PipelineStreamSchemaFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>]

---

##### `put_format` <a name="put_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat"></a>

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

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat.parameter.type"></a>

- *Type:* str

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#type PipelineStream#type}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat.parameter.compression"></a>

- *Type:* str

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#compression PipelineStream#compression}

---

###### `decimal_encoding`<sup>Optional</sup> <a name="decimal_encoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat.parameter.decimalEncoding"></a>

- *Type:* str

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}

---

###### `row_group_bytes`<sup>Optional</sup> <a name="row_group_bytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat.parameter.rowGroupBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}.

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat.parameter.timestampFormat"></a>

- *Type:* str

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}

---

###### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat.parameter.unstructured"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}.

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_inferred` <a name="reset_inferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetInferred"></a>

```python
def reset_inferred() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList">PipelineStreamSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference">PipelineStreamSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.formatInput">format_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferredInput">inferred_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferred">inferred</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fields"></a>

```python
fields: PipelineStreamSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList">PipelineStreamSchemaFieldsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.format"></a>

```python
format: PipelineStreamSchemaFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference">PipelineStreamSchemaFormatOutputReference</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[PipelineStreamSchemaFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>]

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.formatInput"></a>

```python
format_input: IResolvable | PipelineStreamSchemaFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

---

##### `inferred_input`<sup>Optional</sup> <a name="inferred_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferredInput"></a>

```python
inferred_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `inferred`<sup>Required</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferred"></a>

```python
inferred: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineStreamSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

---


### PipelineStreamWorkerBindingOutputReference <a name="PipelineStreamWorkerBindingOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import pipeline_stream

pipelineStream.PipelineStreamWorkerBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PipelineStreamWorkerBinding
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

---




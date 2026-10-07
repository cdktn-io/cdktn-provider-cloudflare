# `worker` Submodule <a name="`worker` Submodule" id="@cdktn/provider-cloudflare.worker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Worker <a name="Worker" id="@cdktn/provider-cloudflare.worker.Worker"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker cloudflare_worker}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.Worker.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.Worker(
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
  force: bool | IResolvable = None,
  logpush: bool | IResolvable = None,
  observability: WorkerObservability = None,
  previews_base_config: WorkerPreviewsBaseConfig = None,
  subdomain: WorkerSubdomain = None,
  tags: typing.List[str] = None,
  tail_consumers: IResolvable | typing.List[WorkerTailConsumers] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, delete the Worker even when other Workers still reference it. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.logpush">logpush</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether logpush is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.observability">observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.previewsBaseConfig">previews_base_config</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a></code> | Template configuration used when creating new Previews for this Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.subdomain">subdomain</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a></code> | Subdomain settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.tailConsumers">tail_consumers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>]</code> | Other Workers that should consume logs from the Worker. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#account_id Worker#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.name"></a>

- *Type:* str

Name of the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#name Worker#name}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.force"></a>

- *Type:* bool | cdktn.IResolvable

If true, delete the Worker even when other Workers still reference it.

Service bindings in those Workers may be left broken. Durable Object namespaces implemented by the deleted Worker are deleted even if other Workers reference them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#force Worker#force}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.logpush"></a>

- *Type:* bool | cdktn.IResolvable

Whether logpush is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#logpush Worker#logpush}

---

##### `observability`<sup>Optional</sup> <a name="observability" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.observability"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#observability Worker#observability}

---

##### `previews_base_config`<sup>Optional</sup> <a name="previews_base_config" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.previewsBaseConfig"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a>

Template configuration used when creating new Previews for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#previews_base_config Worker#previews_base_config}

---

##### `subdomain`<sup>Optional</sup> <a name="subdomain" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.subdomain"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

Subdomain settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#subdomain Worker#subdomain}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags associated with the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#tags Worker#tags}

---

##### `tail_consumers`<sup>Optional</sup> <a name="tail_consumers" id="@cdktn/provider-cloudflare.worker.Worker.Initializer.parameter.tailConsumers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>]

Other Workers that should consume logs from the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#tail_consumers Worker#tail_consumers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.putObservability">put_observability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig">put_previews_base_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.putSubdomain">put_subdomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.putTailConsumers">put_tail_consumers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetLogpush">reset_logpush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetObservability">reset_observability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetPreviewsBaseConfig">reset_previews_base_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetSubdomain">reset_subdomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.resetTailConsumers">reset_tail_consumers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.Worker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.worker.Worker.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.worker.Worker.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.worker.Worker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.worker.Worker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.Worker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.worker.Worker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.worker.Worker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.worker.Worker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.worker.Worker.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.worker.Worker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.worker.Worker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.worker.Worker.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.worker.Worker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.worker.Worker.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.worker.Worker.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.Worker.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.worker.Worker.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.Worker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.Worker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.worker.Worker.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.Worker.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.worker.Worker.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.worker.Worker.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.Worker.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.worker.Worker.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.Worker.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_observability` <a name="put_observability" id="@cdktn/provider-cloudflare.worker.Worker.putObservability"></a>

```python
def put_observability(
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  issues: WorkerObservabilityIssues = None,
  logs: WorkerObservabilityLogs = None,
  traces: WorkerObservabilityTraces = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.Worker.putObservability.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

###### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.Worker.putObservability.parameter.headSamplingRate"></a>

- *Type:* typing.Union[int, float]

The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

###### `issues`<sup>Optional</sup> <a name="issues" id="@cdktn/provider-cloudflare.worker.Worker.putObservability.parameter.issues"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a>

Real-time Issues settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#issues Worker#issues}

---

###### `logs`<sup>Optional</sup> <a name="logs" id="@cdktn/provider-cloudflare.worker.Worker.putObservability.parameter.logs"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#logs Worker#logs}

---

###### `traces`<sup>Optional</sup> <a name="traces" id="@cdktn/provider-cloudflare.worker.Worker.putObservability.parameter.traces"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a>

Trace settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#traces Worker#traces}

---

##### `put_previews_base_config` <a name="put_previews_base_config" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig"></a>

```python
def put_previews_base_config(
  cache_options: WorkerPreviewsBaseConfigCacheOptions = None,
  env: IResolvable | typing.Mapping[WorkerPreviewsBaseConfigEnv] = None,
  limits: WorkerPreviewsBaseConfigLimits = None,
  logpush: bool | IResolvable = None,
  observability: WorkerPreviewsBaseConfigObservability = None,
  placement: WorkerPreviewsBaseConfigPlacement = None,
  tail_consumers: IResolvable | typing.List[WorkerPreviewsBaseConfigTailConsumers] = None
) -> None
```

###### `cache_options`<sup>Optional</sup> <a name="cache_options" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig.parameter.cacheOptions"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a>

Cache options used when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#cache_options Worker#cache_options}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig.parameter.env"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a>]

Bindings used when creating new Previews, keyed by binding name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#env Worker#env}

---

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig.parameter.limits"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a>

Resource limits enforced at runtime for newly created Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#limits Worker#limits}

---

###### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig.parameter.logpush"></a>

- *Type:* bool | cdktn.IResolvable

Whether logpush is enabled when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#logpush Worker#logpush}

---

###### `observability`<sup>Optional</sup> <a name="observability" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig.parameter.observability"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a>

Observability settings used when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#observability Worker#observability}

---

###### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig.parameter.placement"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a>

Placement configuration used when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#placement Worker#placement}

---

###### `tail_consumers`<sup>Optional</sup> <a name="tail_consumers" id="@cdktn/provider-cloudflare.worker.Worker.putPreviewsBaseConfig.parameter.tailConsumers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a>]

Other Workers that should consume logs from newly created Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#tail_consumers Worker#tail_consumers}

---

##### `put_subdomain` <a name="put_subdomain" id="@cdktn/provider-cloudflare.worker.Worker.putSubdomain"></a>

```python
def put_subdomain(
  enabled: bool | IResolvable = None,
  previews_enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.Worker.putSubdomain.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the *.workers.dev subdomain is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

###### `previews_enabled`<sup>Optional</sup> <a name="previews_enabled" id="@cdktn/provider-cloudflare.worker.Worker.putSubdomain.parameter.previewsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#previews_enabled Worker#previews_enabled}

---

##### `put_tail_consumers` <a name="put_tail_consumers" id="@cdktn/provider-cloudflare.worker.Worker.putTailConsumers"></a>

```python
def put_tail_consumers(
  value: IResolvable | typing.List[WorkerTailConsumers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.Worker.putTailConsumers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>]

---

##### `reset_force` <a name="reset_force" id="@cdktn/provider-cloudflare.worker.Worker.resetForce"></a>

```python
def reset_force() -> None
```

##### `reset_logpush` <a name="reset_logpush" id="@cdktn/provider-cloudflare.worker.Worker.resetLogpush"></a>

```python
def reset_logpush() -> None
```

##### `reset_observability` <a name="reset_observability" id="@cdktn/provider-cloudflare.worker.Worker.resetObservability"></a>

```python
def reset_observability() -> None
```

##### `reset_previews_base_config` <a name="reset_previews_base_config" id="@cdktn/provider-cloudflare.worker.Worker.resetPreviewsBaseConfig"></a>

```python
def reset_previews_base_config() -> None
```

##### `reset_subdomain` <a name="reset_subdomain" id="@cdktn/provider-cloudflare.worker.Worker.resetSubdomain"></a>

```python
def reset_subdomain() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-cloudflare.worker.Worker.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tail_consumers` <a name="reset_tail_consumers" id="@cdktn/provider-cloudflare.worker.Worker.resetTailConsumers"></a>

```python
def reset_tail_consumers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Worker resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.worker.Worker.isConstruct"></a>

```python
from cdktn_provider_cloudflare import worker

worker.Worker.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.worker.Worker.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.worker.Worker.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import worker

worker.Worker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.worker.Worker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.worker.Worker.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import worker

worker.Worker.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.worker.Worker.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import worker

worker.Worker.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Worker resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Worker to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Worker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Worker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.deployedOn">deployed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.observability">observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference">WorkerObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.previewsBaseConfig">previews_base_config</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference">WorkerPreviewsBaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.references">references</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference">WorkerReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.subdomain">subdomain</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference">WorkerSubdomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tailConsumers">tail_consumers</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList">WorkerTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.forceInput">force_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.logpushInput">logpush_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.observabilityInput">observability_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.previewsBaseConfigInput">previews_base_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.subdomainInput">subdomain_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tailConsumersInput">tail_consumers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.logpush">logpush</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.worker.Worker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.worker.Worker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.Worker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.worker.Worker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.worker.Worker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.worker.Worker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.worker.Worker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.worker.Worker.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.worker.Worker.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.worker.Worker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.worker.Worker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.worker.Worker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.worker.Worker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.worker.Worker.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.worker.Worker.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `deployed_on`<sup>Required</sup> <a name="deployed_on" id="@cdktn/provider-cloudflare.worker.Worker.property.deployedOn"></a>

```python
deployed_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.Worker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `observability`<sup>Required</sup> <a name="observability" id="@cdktn/provider-cloudflare.worker.Worker.property.observability"></a>

```python
observability: WorkerObservabilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference">WorkerObservabilityOutputReference</a>

---

##### `previews_base_config`<sup>Required</sup> <a name="previews_base_config" id="@cdktn/provider-cloudflare.worker.Worker.property.previewsBaseConfig"></a>

```python
previews_base_config: WorkerPreviewsBaseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference">WorkerPreviewsBaseConfigOutputReference</a>

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-cloudflare.worker.Worker.property.references"></a>

```python
references: WorkerReferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference">WorkerReferencesOutputReference</a>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktn/provider-cloudflare.worker.Worker.property.subdomain"></a>

```python
subdomain: WorkerSubdomainOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference">WorkerSubdomainOutputReference</a>

---

##### `tail_consumers`<sup>Required</sup> <a name="tail_consumers" id="@cdktn/provider-cloudflare.worker.Worker.property.tailConsumers"></a>

```python
tail_consumers: WorkerTailConsumersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList">WorkerTailConsumersList</a>

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-cloudflare.worker.Worker.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.worker.Worker.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `force_input`<sup>Optional</sup> <a name="force_input" id="@cdktn/provider-cloudflare.worker.Worker.property.forceInput"></a>

```python
force_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logpush_input`<sup>Optional</sup> <a name="logpush_input" id="@cdktn/provider-cloudflare.worker.Worker.property.logpushInput"></a>

```python
logpush_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.worker.Worker.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `observability_input`<sup>Optional</sup> <a name="observability_input" id="@cdktn/provider-cloudflare.worker.Worker.property.observabilityInput"></a>

```python
observability_input: IResolvable | WorkerObservability
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

---

##### `previews_base_config_input`<sup>Optional</sup> <a name="previews_base_config_input" id="@cdktn/provider-cloudflare.worker.Worker.property.previewsBaseConfigInput"></a>

```python
previews_base_config_input: IResolvable | WorkerPreviewsBaseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a>

---

##### `subdomain_input`<sup>Optional</sup> <a name="subdomain_input" id="@cdktn/provider-cloudflare.worker.Worker.property.subdomainInput"></a>

```python
subdomain_input: IResolvable | WorkerSubdomain
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-cloudflare.worker.Worker.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tail_consumers_input`<sup>Optional</sup> <a name="tail_consumers_input" id="@cdktn/provider-cloudflare.worker.Worker.property.tailConsumersInput"></a>

```python
tail_consumers_input: IResolvable | typing.List[WorkerTailConsumers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.worker.Worker.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-cloudflare.worker.Worker.property.force"></a>

```python
force: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktn/provider-cloudflare.worker.Worker.property.logpush"></a>

```python
logpush: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.worker.Worker.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.worker.Worker.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.Worker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.worker.Worker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerConfig <a name="WorkerConfig" id="@cdktn/provider-cloudflare.worker.WorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str,
  force: bool | IResolvable = None,
  logpush: bool | IResolvable = None,
  observability: WorkerObservability = None,
  previews_base_config: WorkerPreviewsBaseConfig = None,
  subdomain: WorkerSubdomain = None,
  tags: typing.List[str] = None,
  tail_consumers: IResolvable | typing.List[WorkerTailConsumers] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.name">name</a></code> | <code>str</code> | Name of the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, delete the Worker even when other Workers still reference it. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.logpush">logpush</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether logpush is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.observability">observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.previewsBaseConfig">previews_base_config</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a></code> | Template configuration used when creating new Previews for this Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.subdomain">subdomain</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a></code> | Subdomain settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerConfig.property.tailConsumers">tail_consumers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>]</code> | Other Workers that should consume logs from the Worker. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#account_id Worker#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#name Worker#name}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.force"></a>

```python
force: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, delete the Worker even when other Workers still reference it.

Service bindings in those Workers may be left broken. Durable Object namespaces implemented by the deleted Worker are deleted even if other Workers reference them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#force Worker#force}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.logpush"></a>

```python
logpush: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether logpush is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#logpush Worker#logpush}

---

##### `observability`<sup>Optional</sup> <a name="observability" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.observability"></a>

```python
observability: WorkerObservability
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#observability Worker#observability}

---

##### `previews_base_config`<sup>Optional</sup> <a name="previews_base_config" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.previewsBaseConfig"></a>

```python
previews_base_config: WorkerPreviewsBaseConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a>

Template configuration used when creating new Previews for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#previews_base_config Worker#previews_base_config}

---

##### `subdomain`<sup>Optional</sup> <a name="subdomain" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.subdomain"></a>

```python
subdomain: WorkerSubdomain
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

Subdomain settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#subdomain Worker#subdomain}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags associated with the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#tags Worker#tags}

---

##### `tail_consumers`<sup>Optional</sup> <a name="tail_consumers" id="@cdktn/provider-cloudflare.worker.WorkerConfig.property.tailConsumers"></a>

```python
tail_consumers: IResolvable | typing.List[WorkerTailConsumers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>]

Other Workers that should consume logs from the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#tail_consumers Worker#tail_consumers}

---

### WorkerObservability <a name="WorkerObservability" id="@cdktn/provider-cloudflare.worker.WorkerObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerObservability.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerObservability(
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  issues: WorkerObservabilityIssues = None,
  logs: WorkerObservabilityLogs = None,
  traces: WorkerObservabilityTraces = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.issues">issues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a></code> | Real-time Issues settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.logs">logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a></code> | Log settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservability.property.traces">traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a></code> | Trace settings for the Worker. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `issues`<sup>Optional</sup> <a name="issues" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.issues"></a>

```python
issues: WorkerObservabilityIssues
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a>

Real-time Issues settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#issues Worker#issues}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.logs"></a>

```python
logs: WorkerObservabilityLogs
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#logs Worker#logs}

---

##### `traces`<sup>Optional</sup> <a name="traces" id="@cdktn/provider-cloudflare.worker.WorkerObservability.property.traces"></a>

```python
traces: WorkerObservabilityTraces
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a>

Trace settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#traces Worker#traces}

---

### WorkerObservabilityIssues <a name="WorkerObservabilityIssues" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerObservabilityIssues(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether real-time Issues are enabled for the Worker. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether real-time Issues are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

### WorkerObservabilityLogs <a name="WorkerObservabilityLogs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerObservabilityLogs(
  destinations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  invocation_logs: bool | IResolvable = None,
  persist: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | A list of destinations where logs will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.invocationLogs">invocation_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.persist">persist</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether log persistence is enabled for the Worker. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#destinations Worker#destinations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `invocation_logs`<sup>Optional</sup> <a name="invocation_logs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.invocationLogs"></a>

```python
invocation_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#invocation_logs Worker#invocation_logs}

---

##### `persist`<sup>Optional</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#persist Worker#persist}

---

### WorkerObservabilityTraces <a name="WorkerObservabilityTraces" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerObservabilityTraces(
  destinations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  persist: bool | IResolvable = None,
  propagation_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | A list of destinations where traces will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether traces are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.persist">persist</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether trace persistence is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.propagationPolicy">propagation_policy</a></code> | <code>str</code> | Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

A list of destinations where traces will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#destinations Worker#destinations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether traces are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `persist`<sup>Optional</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether trace persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#persist Worker#persist}

---

##### `propagation_policy`<sup>Optional</sup> <a name="propagation_policy" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces.property.propagationPolicy"></a>

```python
propagation_policy: str
```

- *Type:* str

Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled.

"authenticated" (default) honors inbound trace context only when accompanied by a valid trace auth token. "accept" unconditionally accepts inbound trace context. Requires the trace propagation feature to be enabled.
Available values: "authenticated", "accept".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#propagation_policy Worker#propagation_policy}

---

### WorkerPreviewsBaseConfig <a name="WorkerPreviewsBaseConfig" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfig(
  cache_options: WorkerPreviewsBaseConfigCacheOptions = None,
  env: IResolvable | typing.Mapping[WorkerPreviewsBaseConfigEnv] = None,
  limits: WorkerPreviewsBaseConfigLimits = None,
  logpush: bool | IResolvable = None,
  observability: WorkerPreviewsBaseConfigObservability = None,
  placement: WorkerPreviewsBaseConfigPlacement = None,
  tail_consumers: IResolvable | typing.List[WorkerPreviewsBaseConfigTailConsumers] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.cacheOptions">cache_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a></code> | Cache options used when creating new Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.env">env</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a>]</code> | Bindings used when creating new Previews, keyed by binding name. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.limits">limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a></code> | Resource limits enforced at runtime for newly created Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.logpush">logpush</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether logpush is enabled when creating new Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.observability">observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a></code> | Observability settings used when creating new Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a></code> | Placement configuration used when creating new Previews. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.tailConsumers">tail_consumers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a>]</code> | Other Workers that should consume logs from newly created Previews. |

---

##### `cache_options`<sup>Optional</sup> <a name="cache_options" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.cacheOptions"></a>

```python
cache_options: WorkerPreviewsBaseConfigCacheOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a>

Cache options used when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#cache_options Worker#cache_options}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.env"></a>

```python
env: IResolvable | typing.Mapping[WorkerPreviewsBaseConfigEnv]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a>]

Bindings used when creating new Previews, keyed by binding name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#env Worker#env}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.limits"></a>

```python
limits: WorkerPreviewsBaseConfigLimits
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a>

Resource limits enforced at runtime for newly created Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#limits Worker#limits}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.logpush"></a>

```python
logpush: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether logpush is enabled when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#logpush Worker#logpush}

---

##### `observability`<sup>Optional</sup> <a name="observability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.observability"></a>

```python
observability: WorkerPreviewsBaseConfigObservability
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a>

Observability settings used when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#observability Worker#observability}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.placement"></a>

```python
placement: WorkerPreviewsBaseConfigPlacement
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a>

Placement configuration used when creating new Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#placement Worker#placement}

---

##### `tail_consumers`<sup>Optional</sup> <a name="tail_consumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig.property.tailConsumers"></a>

```python
tail_consumers: IResolvable | typing.List[WorkerPreviewsBaseConfigTailConsumers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a>]

Other Workers that should consume logs from newly created Previews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#tail_consumers Worker#tail_consumers}

---

### WorkerPreviewsBaseConfigCacheOptions <a name="WorkerPreviewsBaseConfigCacheOptions" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigCacheOptions(
  cross_version_cache: bool | IResolvable = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.property.crossVersionCache">cross_version_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether cached responses are shared across Worker version uploads. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether caching is enabled for this Worker. |

---

##### `cross_version_cache`<sup>Optional</sup> <a name="cross_version_cache" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.property.crossVersionCache"></a>

```python
cross_version_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether cached responses are shared across Worker version uploads.

This is independent of `enabled`. It can stay true
while caching is off, so the preference survives turning
caching off and back on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#cross_version_cache Worker#cross_version_cache}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether caching is enabled for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

### WorkerPreviewsBaseConfigEnv <a name="WorkerPreviewsBaseConfigEnv" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigEnv(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv.property.type">type</a></code> | <code>str</code> | The kind of resource that the binding provides. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv.property.type"></a>

```python
type: str
```

- *Type:* str

The kind of resource that the binding provides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#type Worker#type}

---

### WorkerPreviewsBaseConfigLimits <a name="WorkerPreviewsBaseConfigLimits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigLimits(
  cpu_ms: typing.Union[int, float] = None,
  subrequests: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.property.cpuMs">cpu_ms</a></code> | <code>typing.Union[int, float]</code> | The amount of CPU time this Worker can use in milliseconds. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.property.subrequests">subrequests</a></code> | <code>typing.Union[int, float]</code> | The number of subrequests this Worker can make per request. |

---

##### `cpu_ms`<sup>Optional</sup> <a name="cpu_ms" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.property.cpuMs"></a>

```python
cpu_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of CPU time this Worker can use in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#cpu_ms Worker#cpu_ms}

---

##### `subrequests`<sup>Optional</sup> <a name="subrequests" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits.property.subrequests"></a>

```python
subrequests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of subrequests this Worker can make per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#subrequests Worker#subrequests}

---

### WorkerPreviewsBaseConfigObservability <a name="WorkerPreviewsBaseConfigObservability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigObservability(
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  issues: WorkerPreviewsBaseConfigObservabilityIssues = None,
  logs: WorkerPreviewsBaseConfigObservabilityLogs = None,
  redact_query_string: bool | IResolvable = None,
  traces: WorkerPreviewsBaseConfigObservabilityTraces = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.issues">issues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a></code> | Real-time Issues settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.logs">logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a></code> | Log settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.redactQueryString">redact_query_string</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether query strings are removed from request URLs in logs and traces. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.traces">traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a></code> | Trace settings for the Worker. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `issues`<sup>Optional</sup> <a name="issues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.issues"></a>

```python
issues: WorkerPreviewsBaseConfigObservabilityIssues
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a>

Real-time Issues settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#issues Worker#issues}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.logs"></a>

```python
logs: WorkerPreviewsBaseConfigObservabilityLogs
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#logs Worker#logs}

---

##### `redact_query_string`<sup>Optional</sup> <a name="redact_query_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.redactQueryString"></a>

```python
redact_query_string: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether query strings are removed from request URLs in logs and traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#redact_query_string Worker#redact_query_string}

---

##### `traces`<sup>Optional</sup> <a name="traces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability.property.traces"></a>

```python
traces: WorkerPreviewsBaseConfigObservabilityTraces
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a>

Trace settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#traces Worker#traces}

---

### WorkerPreviewsBaseConfigObservabilityIssues <a name="WorkerPreviewsBaseConfigObservabilityIssues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigObservabilityIssues(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether real-time Issues are enabled for the Worker. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether real-time Issues are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

### WorkerPreviewsBaseConfigObservabilityLogs <a name="WorkerPreviewsBaseConfigObservabilityLogs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigObservabilityLogs(
  destinations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  invocation_logs: bool | IResolvable = None,
  persist: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | A list of destinations where logs will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.invocationLogs">invocation_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.persist">persist</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether log persistence is enabled for the Worker. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#destinations Worker#destinations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `invocation_logs`<sup>Optional</sup> <a name="invocation_logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.invocationLogs"></a>

```python
invocation_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#invocation_logs Worker#invocation_logs}

---

##### `persist`<sup>Optional</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#persist Worker#persist}

---

### WorkerPreviewsBaseConfigObservabilityTraces <a name="WorkerPreviewsBaseConfigObservabilityTraces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigObservabilityTraces(
  destinations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  persist: bool | IResolvable = None,
  propagation_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | A list of destinations where traces will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether traces are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.persist">persist</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether trace persistence is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.propagationPolicy">propagation_policy</a></code> | <code>str</code> | Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

A list of destinations where traces will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#destinations Worker#destinations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether traces are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `persist`<sup>Optional</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether trace persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#persist Worker#persist}

---

##### `propagation_policy`<sup>Optional</sup> <a name="propagation_policy" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces.property.propagationPolicy"></a>

```python
propagation_policy: str
```

- *Type:* str

Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled.

"authenticated" honors inbound trace context only when accompanied by a valid trace auth token. "accept" unconditionally accepts inbound trace context. Requires the trace propagation feature to be enabled. Returns null when the trace propagation feature is not enabled for the account.
Available values: "authenticated", "accept".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#propagation_policy Worker#propagation_policy}

---

### WorkerPreviewsBaseConfigPlacement <a name="WorkerPreviewsBaseConfigPlacement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigPlacement(
  host: str = None,
  hostname: str = None,
  mode: str = None,
  region: str = None,
  target: IResolvable | typing.List[WorkerPreviewsBaseConfigPlacementTarget] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.host">host</a></code> | <code>str</code> | TCP host and port for targeted placement. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.hostname">hostname</a></code> | <code>str</code> | HTTP hostname for targeted placement. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.mode">mode</a></code> | <code>str</code> | Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart", "targeted". |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.region">region</a></code> | <code>str</code> | Cloud region for targeted placement in format 'provider:region'. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.target">target</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a>]</code> | Array of placement targets (currently limited to single target). |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.host"></a>

```python
host: str
```

- *Type:* str

TCP host and port for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#host Worker#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

HTTP hostname for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#hostname Worker#hostname}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.mode"></a>

```python
mode: str
```

- *Type:* str

Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart", "targeted".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#mode Worker#mode}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.region"></a>

```python
region: str
```

- *Type:* str

Cloud region for targeted placement in format 'provider:region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#region Worker#region}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement.property.target"></a>

```python
target: IResolvable | typing.List[WorkerPreviewsBaseConfigPlacementTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a>]

Array of placement targets (currently limited to single target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#target Worker#target}

---

### WorkerPreviewsBaseConfigPlacementTarget <a name="WorkerPreviewsBaseConfigPlacementTarget" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigPlacementTarget(
  host: str = None,
  hostname: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.host">host</a></code> | <code>str</code> | TCP host:port for targeted placement. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.hostname">hostname</a></code> | <code>str</code> | HTTP hostname for targeted placement. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.region">region</a></code> | <code>str</code> | Cloud region in format 'provider:region'. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.host"></a>

```python
host: str
```

- *Type:* str

TCP host:port for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#host Worker#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

HTTP hostname for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#hostname Worker#hostname}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget.property.region"></a>

```python
region: str
```

- *Type:* str

Cloud region in format 'provider:region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#region Worker#region}

---

### WorkerPreviewsBaseConfigTailConsumers <a name="WorkerPreviewsBaseConfigTailConsumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigTailConsumers(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers.property.name">name</a></code> | <code>str</code> | Name of the consumer Worker. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the consumer Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#name Worker#name}

---

### WorkerReferences <a name="WorkerReferences" id="@cdktn/provider-cloudflare.worker.WorkerReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferences.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferences()
```


### WorkerReferencesDispatchNamespaceOutbounds <a name="WorkerReferencesDispatchNamespaceOutbounds" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesDispatchNamespaceOutbounds()
```


### WorkerReferencesDomains <a name="WorkerReferencesDomains" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomains.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesDomains()
```


### WorkerReferencesDurableObjects <a name="WorkerReferencesDurableObjects" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjects.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesDurableObjects()
```


### WorkerReferencesQueues <a name="WorkerReferencesQueues" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueues.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesQueues()
```


### WorkerReferencesWorkers <a name="WorkerReferencesWorkers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkers.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesWorkers()
```


### WorkerSubdomain <a name="WorkerSubdomain" id="@cdktn/provider-cloudflare.worker.WorkerSubdomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerSubdomain.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerSubdomain(
  enabled: bool | IResolvable = None,
  previews_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the *.workers.dev subdomain is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain.property.previewsEnabled">previews_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomain.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the *.workers.dev subdomain is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `previews_enabled`<sup>Optional</sup> <a name="previews_enabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomain.property.previewsEnabled"></a>

```python
previews_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#previews_enabled Worker#previews_enabled}

---

### WorkerTailConsumers <a name="WorkerTailConsumers" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumers.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerTailConsumers(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers.property.name">name</a></code> | <code>str</code> | Name of the consumer Worker. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumers.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the consumer Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#name Worker#name}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerObservabilityIssuesOutputReference <a name="WorkerObservabilityIssuesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerObservabilityIssuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerObservabilityIssues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a>

---


### WorkerObservabilityLogsOutputReference <a name="WorkerObservabilityLogsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerObservabilityLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetHeadSamplingRate">reset_head_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetInvocationLogs">reset_invocation_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetPersist">reset_persist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_head_sampling_rate` <a name="reset_head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```python
def reset_head_sampling_rate() -> None
```

##### `reset_invocation_logs` <a name="reset_invocation_logs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetInvocationLogs"></a>

```python
def reset_invocation_logs() -> None
```

##### `reset_persist` <a name="reset_persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetPersist"></a>

```python
def reset_persist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRateInput">head_sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogsInput">invocation_logs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.persistInput">persist_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogs">invocation_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.persist">persist</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate_input`<sup>Optional</sup> <a name="head_sampling_rate_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```python
head_sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invocation_logs_input`<sup>Optional</sup> <a name="invocation_logs_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```python
invocation_logs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `persist_input`<sup>Optional</sup> <a name="persist_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.persistInput"></a>

```python
persist_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate`<sup>Required</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invocation_logs`<sup>Required</sup> <a name="invocation_logs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogs"></a>

```python
invocation_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `persist`<sup>Required</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerObservabilityLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

---


### WorkerObservabilityOutputReference <a name="WorkerObservabilityOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerObservabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putIssues">put_issues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs">put_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces">put_traces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetHeadSamplingRate">reset_head_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetIssues">reset_issues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetLogs">reset_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetTraces">reset_traces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_issues` <a name="put_issues" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putIssues"></a>

```python
def put_issues(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putIssues.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether real-time Issues are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `put_logs` <a name="put_logs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs"></a>

```python
def put_logs(
  destinations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  invocation_logs: bool | IResolvable = None,
  persist: bool | IResolvable = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs.parameter.destinations"></a>

- *Type:* typing.List[str]

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#destinations Worker#destinations}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

###### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs.parameter.headSamplingRate"></a>

- *Type:* typing.Union[int, float]

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

###### `invocation_logs`<sup>Optional</sup> <a name="invocation_logs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs.parameter.invocationLogs"></a>

- *Type:* bool | cdktn.IResolvable

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#invocation_logs Worker#invocation_logs}

---

###### `persist`<sup>Optional</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs.parameter.persist"></a>

- *Type:* bool | cdktn.IResolvable

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#persist Worker#persist}

---

##### `put_traces` <a name="put_traces" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces"></a>

```python
def put_traces(
  destinations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  persist: bool | IResolvable = None,
  propagation_policy: str = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces.parameter.destinations"></a>

- *Type:* typing.List[str]

A list of destinations where traces will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#destinations Worker#destinations}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether traces are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

###### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces.parameter.headSamplingRate"></a>

- *Type:* typing.Union[int, float]

The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

###### `persist`<sup>Optional</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces.parameter.persist"></a>

- *Type:* bool | cdktn.IResolvable

Whether trace persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#persist Worker#persist}

---

###### `propagation_policy`<sup>Optional</sup> <a name="propagation_policy" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.putTraces.parameter.propagationPolicy"></a>

- *Type:* str

Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled.

"authenticated" (default) honors inbound trace context only when accompanied by a valid trace auth token. "accept" unconditionally accepts inbound trace context. Requires the trace propagation feature to be enabled.
Available values: "authenticated", "accept".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#propagation_policy Worker#propagation_policy}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_head_sampling_rate` <a name="reset_head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetHeadSamplingRate"></a>

```python
def reset_head_sampling_rate() -> None
```

##### `reset_issues` <a name="reset_issues" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetIssues"></a>

```python
def reset_issues() -> None
```

##### `reset_logs` <a name="reset_logs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetLogs"></a>

```python
def reset_logs() -> None
```

##### `reset_traces` <a name="reset_traces" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetTraces"></a>

```python
def reset_traces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.issues">issues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference">WorkerObservabilityIssuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logs">logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference">WorkerObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.traces">traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference">WorkerObservabilityTracesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRateInput">head_sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.issuesInput">issues_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logsInput">logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.tracesInput">traces_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.issues"></a>

```python
issues: WorkerObservabilityIssuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssuesOutputReference">WorkerObservabilityIssuesOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logs"></a>

```python
logs: WorkerObservabilityLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference">WorkerObservabilityLogsOutputReference</a>

---

##### `traces`<sup>Required</sup> <a name="traces" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.traces"></a>

```python
traces: WorkerObservabilityTracesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference">WorkerObservabilityTracesOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate_input`<sup>Optional</sup> <a name="head_sampling_rate_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRateInput"></a>

```python
head_sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issues_input`<sup>Optional</sup> <a name="issues_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.issuesInput"></a>

```python
issues_input: IResolvable | WorkerObservabilityIssues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityIssues">WorkerObservabilityIssues</a>

---

##### `logs_input`<sup>Optional</sup> <a name="logs_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logsInput"></a>

```python
logs_input: IResolvable | WorkerObservabilityLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

---

##### `traces_input`<sup>Optional</sup> <a name="traces_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.tracesInput"></a>

```python
traces_input: IResolvable | WorkerObservabilityTraces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate`<sup>Required</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerObservability
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

---


### WorkerObservabilityTracesOutputReference <a name="WorkerObservabilityTracesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerObservabilityTracesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetHeadSamplingRate">reset_head_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetPersist">reset_persist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetPropagationPolicy">reset_propagation_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_head_sampling_rate` <a name="reset_head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetHeadSamplingRate"></a>

```python
def reset_head_sampling_rate() -> None
```

##### `reset_persist` <a name="reset_persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetPersist"></a>

```python
def reset_persist() -> None
```

##### `reset_propagation_policy` <a name="reset_propagation_policy" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.resetPropagationPolicy"></a>

```python
def reset_propagation_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.headSamplingRateInput">head_sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.persistInput">persist_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.propagationPolicyInput">propagation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.persist">persist</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.propagationPolicy">propagation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate_input`<sup>Optional</sup> <a name="head_sampling_rate_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.headSamplingRateInput"></a>

```python
head_sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `persist_input`<sup>Optional</sup> <a name="persist_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.persistInput"></a>

```python
persist_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `propagation_policy_input`<sup>Optional</sup> <a name="propagation_policy_input" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.propagationPolicyInput"></a>

```python
propagation_policy_input: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate`<sup>Required</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `persist`<sup>Required</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `propagation_policy`<sup>Required</sup> <a name="propagation_policy" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.propagationPolicy"></a>

```python
propagation_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerObservabilityTracesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerObservabilityTraces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerObservabilityTraces">WorkerObservabilityTraces</a>

---


### WorkerPreviewsBaseConfigCacheOptionsOutputReference <a name="WorkerPreviewsBaseConfigCacheOptionsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resetCrossVersionCache">reset_cross_version_cache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cross_version_cache` <a name="reset_cross_version_cache" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resetCrossVersionCache"></a>

```python
def reset_cross_version_cache() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.crossVersionCacheInput">cross_version_cache_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.crossVersionCache">cross_version_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_version_cache_input`<sup>Optional</sup> <a name="cross_version_cache_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.crossVersionCacheInput"></a>

```python
cross_version_cache_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cross_version_cache`<sup>Required</sup> <a name="cross_version_cache" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.crossVersionCache"></a>

```python
cross_version_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigCacheOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a>

---


### WorkerPreviewsBaseConfigEnvMap <a name="WorkerPreviewsBaseConfigEnvMap" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigEnvMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.get"></a>

```python
def get(
  key: str
) -> WorkerPreviewsBaseConfigEnvOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[WorkerPreviewsBaseConfigEnv]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a>]

---


### WorkerPreviewsBaseConfigEnvOutputReference <a name="WorkerPreviewsBaseConfigEnvOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigEnv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a>

---


### WorkerPreviewsBaseConfigLimitsOutputReference <a name="WorkerPreviewsBaseConfigLimitsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resetCpuMs">reset_cpu_ms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resetSubrequests">reset_subrequests</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_ms` <a name="reset_cpu_ms" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resetCpuMs"></a>

```python
def reset_cpu_ms() -> None
```

##### `reset_subrequests` <a name="reset_subrequests" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.resetSubrequests"></a>

```python
def reset_subrequests() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.cpuMsInput">cpu_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.subrequestsInput">subrequests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.cpuMs">cpu_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.subrequests">subrequests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_ms_input`<sup>Optional</sup> <a name="cpu_ms_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.cpuMsInput"></a>

```python
cpu_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subrequests_input`<sup>Optional</sup> <a name="subrequests_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.subrequestsInput"></a>

```python
subrequests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_ms`<sup>Required</sup> <a name="cpu_ms" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.cpuMs"></a>

```python
cpu_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subrequests`<sup>Required</sup> <a name="subrequests" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.subrequests"></a>

```python
subrequests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a>

---


### WorkerPreviewsBaseConfigObservabilityIssuesOutputReference <a name="WorkerPreviewsBaseConfigObservabilityIssuesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigObservabilityIssues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a>

---


### WorkerPreviewsBaseConfigObservabilityLogsOutputReference <a name="WorkerPreviewsBaseConfigObservabilityLogsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetHeadSamplingRate">reset_head_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetInvocationLogs">reset_invocation_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetPersist">reset_persist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_head_sampling_rate` <a name="reset_head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```python
def reset_head_sampling_rate() -> None
```

##### `reset_invocation_logs` <a name="reset_invocation_logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetInvocationLogs"></a>

```python
def reset_invocation_logs() -> None
```

##### `reset_persist` <a name="reset_persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.resetPersist"></a>

```python
def reset_persist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.headSamplingRateInput">head_sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.invocationLogsInput">invocation_logs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.persistInput">persist_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.invocationLogs">invocation_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.persist">persist</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate_input`<sup>Optional</sup> <a name="head_sampling_rate_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```python
head_sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invocation_logs_input`<sup>Optional</sup> <a name="invocation_logs_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```python
invocation_logs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `persist_input`<sup>Optional</sup> <a name="persist_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.persistInput"></a>

```python
persist_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate`<sup>Required</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invocation_logs`<sup>Required</sup> <a name="invocation_logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.invocationLogs"></a>

```python
invocation_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `persist`<sup>Required</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigObservabilityLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a>

---


### WorkerPreviewsBaseConfigObservabilityOutputReference <a name="WorkerPreviewsBaseConfigObservabilityOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigObservabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putIssues">put_issues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs">put_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces">put_traces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetHeadSamplingRate">reset_head_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetIssues">reset_issues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetLogs">reset_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetRedactQueryString">reset_redact_query_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetTraces">reset_traces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_issues` <a name="put_issues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putIssues"></a>

```python
def put_issues(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putIssues.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether real-time Issues are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `put_logs` <a name="put_logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs"></a>

```python
def put_logs(
  destinations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  invocation_logs: bool | IResolvable = None,
  persist: bool | IResolvable = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs.parameter.destinations"></a>

- *Type:* typing.List[str]

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#destinations Worker#destinations}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

###### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs.parameter.headSamplingRate"></a>

- *Type:* typing.Union[int, float]

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

###### `invocation_logs`<sup>Optional</sup> <a name="invocation_logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs.parameter.invocationLogs"></a>

- *Type:* bool | cdktn.IResolvable

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#invocation_logs Worker#invocation_logs}

---

###### `persist`<sup>Optional</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putLogs.parameter.persist"></a>

- *Type:* bool | cdktn.IResolvable

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#persist Worker#persist}

---

##### `put_traces` <a name="put_traces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces"></a>

```python
def put_traces(
  destinations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  persist: bool | IResolvable = None,
  propagation_policy: str = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces.parameter.destinations"></a>

- *Type:* typing.List[str]

A list of destinations where traces will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#destinations Worker#destinations}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether traces are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

###### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces.parameter.headSamplingRate"></a>

- *Type:* typing.Union[int, float]

The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

###### `persist`<sup>Optional</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces.parameter.persist"></a>

- *Type:* bool | cdktn.IResolvable

Whether trace persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#persist Worker#persist}

---

###### `propagation_policy`<sup>Optional</sup> <a name="propagation_policy" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.putTraces.parameter.propagationPolicy"></a>

- *Type:* str

Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled.

"authenticated" honors inbound trace context only when accompanied by a valid trace auth token. "accept" unconditionally accepts inbound trace context. Requires the trace propagation feature to be enabled. Returns null when the trace propagation feature is not enabled for the account.
Available values: "authenticated", "accept".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#propagation_policy Worker#propagation_policy}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_head_sampling_rate` <a name="reset_head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetHeadSamplingRate"></a>

```python
def reset_head_sampling_rate() -> None
```

##### `reset_issues` <a name="reset_issues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetIssues"></a>

```python
def reset_issues() -> None
```

##### `reset_logs` <a name="reset_logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetLogs"></a>

```python
def reset_logs() -> None
```

##### `reset_redact_query_string` <a name="reset_redact_query_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetRedactQueryString"></a>

```python
def reset_redact_query_string() -> None
```

##### `reset_traces` <a name="reset_traces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.resetTraces"></a>

```python
def reset_traces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.issues">issues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference">WorkerPreviewsBaseConfigObservabilityIssuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.logs">logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference">WorkerPreviewsBaseConfigObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.traces">traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference">WorkerPreviewsBaseConfigObservabilityTracesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.headSamplingRateInput">head_sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.issuesInput">issues_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.logsInput">logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.redactQueryStringInput">redact_query_string_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.tracesInput">traces_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.redactQueryString">redact_query_string</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.issues"></a>

```python
issues: WorkerPreviewsBaseConfigObservabilityIssuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssuesOutputReference">WorkerPreviewsBaseConfigObservabilityIssuesOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.logs"></a>

```python
logs: WorkerPreviewsBaseConfigObservabilityLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogsOutputReference">WorkerPreviewsBaseConfigObservabilityLogsOutputReference</a>

---

##### `traces`<sup>Required</sup> <a name="traces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.traces"></a>

```python
traces: WorkerPreviewsBaseConfigObservabilityTracesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference">WorkerPreviewsBaseConfigObservabilityTracesOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate_input`<sup>Optional</sup> <a name="head_sampling_rate_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.headSamplingRateInput"></a>

```python
head_sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issues_input`<sup>Optional</sup> <a name="issues_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.issuesInput"></a>

```python
issues_input: IResolvable | WorkerPreviewsBaseConfigObservabilityIssues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a>

---

##### `logs_input`<sup>Optional</sup> <a name="logs_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.logsInput"></a>

```python
logs_input: IResolvable | WorkerPreviewsBaseConfigObservabilityLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a>

---

##### `redact_query_string_input`<sup>Optional</sup> <a name="redact_query_string_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.redactQueryStringInput"></a>

```python
redact_query_string_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `traces_input`<sup>Optional</sup> <a name="traces_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.tracesInput"></a>

```python
traces_input: IResolvable | WorkerPreviewsBaseConfigObservabilityTraces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate`<sup>Required</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redact_query_string`<sup>Required</sup> <a name="redact_query_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.redactQueryString"></a>

```python
redact_query_string: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigObservability
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a>

---


### WorkerPreviewsBaseConfigObservabilityTracesOutputReference <a name="WorkerPreviewsBaseConfigObservabilityTracesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetHeadSamplingRate">reset_head_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetPersist">reset_persist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetPropagationPolicy">reset_propagation_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_head_sampling_rate` <a name="reset_head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetHeadSamplingRate"></a>

```python
def reset_head_sampling_rate() -> None
```

##### `reset_persist` <a name="reset_persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetPersist"></a>

```python
def reset_persist() -> None
```

##### `reset_propagation_policy` <a name="reset_propagation_policy" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.resetPropagationPolicy"></a>

```python
def reset_propagation_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.headSamplingRateInput">head_sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.persistInput">persist_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.propagationPolicyInput">propagation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.persist">persist</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.propagationPolicy">propagation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate_input`<sup>Optional</sup> <a name="head_sampling_rate_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.headSamplingRateInput"></a>

```python
head_sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `persist_input`<sup>Optional</sup> <a name="persist_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.persistInput"></a>

```python
persist_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `propagation_policy_input`<sup>Optional</sup> <a name="propagation_policy_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.propagationPolicyInput"></a>

```python
propagation_policy_input: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `head_sampling_rate`<sup>Required</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `persist`<sup>Required</sup> <a name="persist" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `propagation_policy`<sup>Required</sup> <a name="propagation_policy" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.propagationPolicy"></a>

```python
propagation_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTracesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigObservabilityTraces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a>

---


### WorkerPreviewsBaseConfigOutputReference <a name="WorkerPreviewsBaseConfigOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putCacheOptions">put_cache_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability">put_observability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putTailConsumers">put_tail_consumers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetCacheOptions">reset_cache_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetLogpush">reset_logpush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetObservability">reset_observability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetTailConsumers">reset_tail_consumers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cache_options` <a name="put_cache_options" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putCacheOptions"></a>

```python
def put_cache_options(
  cross_version_cache: bool | IResolvable = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `cross_version_cache`<sup>Optional</sup> <a name="cross_version_cache" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putCacheOptions.parameter.crossVersionCache"></a>

- *Type:* bool | cdktn.IResolvable

Whether cached responses are shared across Worker version uploads.

This is independent of `enabled`. It can stay true
while caching is off, so the preference survives turning
caching off and back on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#cross_version_cache Worker#cross_version_cache}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putCacheOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether caching is enabled for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

##### `put_env` <a name="put_env" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putEnv"></a>

```python
def put_env(
  value: IResolvable | typing.Mapping[WorkerPreviewsBaseConfigEnv]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a>]

---

##### `put_limits` <a name="put_limits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putLimits"></a>

```python
def put_limits(
  cpu_ms: typing.Union[int, float] = None,
  subrequests: typing.Union[int, float] = None
) -> None
```

###### `cpu_ms`<sup>Optional</sup> <a name="cpu_ms" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putLimits.parameter.cpuMs"></a>

- *Type:* typing.Union[int, float]

The amount of CPU time this Worker can use in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#cpu_ms Worker#cpu_ms}

---

###### `subrequests`<sup>Optional</sup> <a name="subrequests" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putLimits.parameter.subrequests"></a>

- *Type:* typing.Union[int, float]

The number of subrequests this Worker can make per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#subrequests Worker#subrequests}

---

##### `put_observability` <a name="put_observability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability"></a>

```python
def put_observability(
  enabled: bool | IResolvable = None,
  head_sampling_rate: typing.Union[int, float] = None,
  issues: WorkerPreviewsBaseConfigObservabilityIssues = None,
  logs: WorkerPreviewsBaseConfigObservabilityLogs = None,
  redact_query_string: bool | IResolvable = None,
  traces: WorkerPreviewsBaseConfigObservabilityTraces = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#enabled Worker#enabled}

---

###### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability.parameter.headSamplingRate"></a>

- *Type:* typing.Union[int, float]

The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

###### `issues`<sup>Optional</sup> <a name="issues" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability.parameter.issues"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityIssues">WorkerPreviewsBaseConfigObservabilityIssues</a>

Real-time Issues settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#issues Worker#issues}

---

###### `logs`<sup>Optional</sup> <a name="logs" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability.parameter.logs"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityLogs">WorkerPreviewsBaseConfigObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#logs Worker#logs}

---

###### `redact_query_string`<sup>Optional</sup> <a name="redact_query_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability.parameter.redactQueryString"></a>

- *Type:* bool | cdktn.IResolvable

Whether query strings are removed from request URLs in logs and traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#redact_query_string Worker#redact_query_string}

---

###### `traces`<sup>Optional</sup> <a name="traces" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putObservability.parameter.traces"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityTraces">WorkerPreviewsBaseConfigObservabilityTraces</a>

Trace settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#traces Worker#traces}

---

##### `put_placement` <a name="put_placement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement"></a>

```python
def put_placement(
  host: str = None,
  hostname: str = None,
  mode: str = None,
  region: str = None,
  target: IResolvable | typing.List[WorkerPreviewsBaseConfigPlacementTarget] = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement.parameter.host"></a>

- *Type:* str

TCP host and port for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#host Worker#host}

---

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement.parameter.hostname"></a>

- *Type:* str

HTTP hostname for targeted placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#hostname Worker#hostname}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement.parameter.mode"></a>

- *Type:* str

Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart", "targeted".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#mode Worker#mode}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement.parameter.region"></a>

- *Type:* str

Cloud region for targeted placement in format 'provider:region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#region Worker#region}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putPlacement.parameter.target"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a>]

Array of placement targets (currently limited to single target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/worker#target Worker#target}

---

##### `put_tail_consumers` <a name="put_tail_consumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putTailConsumers"></a>

```python
def put_tail_consumers(
  value: IResolvable | typing.List[WorkerPreviewsBaseConfigTailConsumers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.putTailConsumers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a>]

---

##### `reset_cache_options` <a name="reset_cache_options" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetCacheOptions"></a>

```python
def reset_cache_options() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_limits` <a name="reset_limits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_logpush` <a name="reset_logpush" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetLogpush"></a>

```python
def reset_logpush() -> None
```

##### `reset_observability` <a name="reset_observability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetObservability"></a>

```python
def reset_observability() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_tail_consumers` <a name="reset_tail_consumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.resetTailConsumers"></a>

```python
def reset_tail_consumers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.cacheOptions">cache_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference">WorkerPreviewsBaseConfigCacheOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap">WorkerPreviewsBaseConfigEnvMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference">WorkerPreviewsBaseConfigLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.observability">observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference">WorkerPreviewsBaseConfigObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference">WorkerPreviewsBaseConfigPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.tailConsumers">tail_consumers</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList">WorkerPreviewsBaseConfigTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.cacheOptionsInput">cache_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.envInput">env_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.limitsInput">limits_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.logpushInput">logpush_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.observabilityInput">observability_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.placementInput">placement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.tailConsumersInput">tail_consumers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.logpush">logpush</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_options`<sup>Required</sup> <a name="cache_options" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.cacheOptions"></a>

```python
cache_options: WorkerPreviewsBaseConfigCacheOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptionsOutputReference">WorkerPreviewsBaseConfigCacheOptionsOutputReference</a>

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.env"></a>

```python
env: WorkerPreviewsBaseConfigEnvMap
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnvMap">WorkerPreviewsBaseConfigEnvMap</a>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.limits"></a>

```python
limits: WorkerPreviewsBaseConfigLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimitsOutputReference">WorkerPreviewsBaseConfigLimitsOutputReference</a>

---

##### `observability`<sup>Required</sup> <a name="observability" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.observability"></a>

```python
observability: WorkerPreviewsBaseConfigObservabilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservabilityOutputReference">WorkerPreviewsBaseConfigObservabilityOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.placement"></a>

```python
placement: WorkerPreviewsBaseConfigPlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference">WorkerPreviewsBaseConfigPlacementOutputReference</a>

---

##### `tail_consumers`<sup>Required</sup> <a name="tail_consumers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.tailConsumers"></a>

```python
tail_consumers: WorkerPreviewsBaseConfigTailConsumersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList">WorkerPreviewsBaseConfigTailConsumersList</a>

---

##### `cache_options_input`<sup>Optional</sup> <a name="cache_options_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.cacheOptionsInput"></a>

```python
cache_options_input: IResolvable | WorkerPreviewsBaseConfigCacheOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigCacheOptions">WorkerPreviewsBaseConfigCacheOptions</a>

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.envInput"></a>

```python
env_input: IResolvable | typing.Mapping[WorkerPreviewsBaseConfigEnv]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigEnv">WorkerPreviewsBaseConfigEnv</a>]

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.limitsInput"></a>

```python
limits_input: IResolvable | WorkerPreviewsBaseConfigLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigLimits">WorkerPreviewsBaseConfigLimits</a>

---

##### `logpush_input`<sup>Optional</sup> <a name="logpush_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.logpushInput"></a>

```python
logpush_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `observability_input`<sup>Optional</sup> <a name="observability_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.observabilityInput"></a>

```python
observability_input: IResolvable | WorkerPreviewsBaseConfigObservability
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigObservability">WorkerPreviewsBaseConfigObservability</a>

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.placementInput"></a>

```python
placement_input: IResolvable | WorkerPreviewsBaseConfigPlacement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a>

---

##### `tail_consumers_input`<sup>Optional</sup> <a name="tail_consumers_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.tailConsumersInput"></a>

```python
tail_consumers_input: IResolvable | typing.List[WorkerPreviewsBaseConfigTailConsumers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a>]

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.logpush"></a>

```python
logpush: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfig">WorkerPreviewsBaseConfig</a>

---


### WorkerPreviewsBaseConfigPlacementOutputReference <a name="WorkerPreviewsBaseConfigPlacementOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target` <a name="put_target" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.putTarget"></a>

```python
def put_target(
  value: IResolvable | typing.List[WorkerPreviewsBaseConfigPlacementTarget]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.putTarget.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a>]

---

##### `reset_host` <a name="reset_host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList">WorkerPreviewsBaseConfigPlacementTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.targetInput">target_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.target"></a>

```python
target: WorkerPreviewsBaseConfigPlacementTargetList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList">WorkerPreviewsBaseConfigPlacementTargetList</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.targetInput"></a>

```python
target_input: IResolvable | typing.List[WorkerPreviewsBaseConfigPlacementTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a>]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigPlacement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacement">WorkerPreviewsBaseConfigPlacement</a>

---


### WorkerPreviewsBaseConfigPlacementTargetList <a name="WorkerPreviewsBaseConfigPlacementTargetList" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigPlacementTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerPreviewsBaseConfigPlacementTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkerPreviewsBaseConfigPlacementTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a>]

---


### WorkerPreviewsBaseConfigPlacementTargetOutputReference <a name="WorkerPreviewsBaseConfigPlacementTargetOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigPlacementTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigPlacementTarget">WorkerPreviewsBaseConfigPlacementTarget</a>

---


### WorkerPreviewsBaseConfigTailConsumersList <a name="WorkerPreviewsBaseConfigTailConsumersList" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigTailConsumersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerPreviewsBaseConfigTailConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkerPreviewsBaseConfigTailConsumers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a>]

---


### WorkerPreviewsBaseConfigTailConsumersOutputReference <a name="WorkerPreviewsBaseConfigTailConsumersOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerPreviewsBaseConfigTailConsumersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerPreviewsBaseConfigTailConsumers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerPreviewsBaseConfigTailConsumers">WorkerPreviewsBaseConfigTailConsumers</a>

---


### WorkerReferencesDispatchNamespaceOutboundsList <a name="WorkerReferencesDispatchNamespaceOutboundsList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesDispatchNamespaceOutboundsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerReferencesDispatchNamespaceOutboundsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkerReferencesDispatchNamespaceOutboundsOutputReference <a name="WorkerReferencesDispatchNamespaceOutboundsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerId">worker_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerName">worker_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds">WorkerReferencesDispatchNamespaceOutbounds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

---

##### `worker_name`<sup>Required</sup> <a name="worker_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerName"></a>

```python
worker_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.internalValue"></a>

```python
internal_value: WorkerReferencesDispatchNamespaceOutbounds
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds">WorkerReferencesDispatchNamespaceOutbounds</a>

---


### WorkerReferencesDomainsList <a name="WorkerReferencesDomainsList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerReferencesDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkerReferencesDomainsOutputReference <a name="WorkerReferencesDomainsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomains">WorkerReferencesDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.internalValue"></a>

```python
internal_value: WorkerReferencesDomains
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomains">WorkerReferencesDomains</a>

---


### WorkerReferencesDurableObjectsList <a name="WorkerReferencesDurableObjectsList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesDurableObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerReferencesDurableObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkerReferencesDurableObjectsOutputReference <a name="WorkerReferencesDurableObjectsOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesDurableObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerId">worker_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerName">worker_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjects">WorkerReferencesDurableObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

---

##### `worker_name`<sup>Required</sup> <a name="worker_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerName"></a>

```python
worker_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.internalValue"></a>

```python
internal_value: WorkerReferencesDurableObjects
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjects">WorkerReferencesDurableObjects</a>

---


### WorkerReferencesOutputReference <a name="WorkerReferencesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.dispatchNamespaceOutbounds">dispatch_namespace_outbounds</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList">WorkerReferencesDispatchNamespaceOutboundsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.domains">domains</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList">WorkerReferencesDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.durableObjects">durable_objects</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList">WorkerReferencesDurableObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.queues">queues</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList">WorkerReferencesQueuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.workers">workers</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList">WorkerReferencesWorkersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferences">WorkerReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dispatch_namespace_outbounds`<sup>Required</sup> <a name="dispatch_namespace_outbounds" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.dispatchNamespaceOutbounds"></a>

```python
dispatch_namespace_outbounds: WorkerReferencesDispatchNamespaceOutboundsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList">WorkerReferencesDispatchNamespaceOutboundsList</a>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.domains"></a>

```python
domains: WorkerReferencesDomainsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDomainsList">WorkerReferencesDomainsList</a>

---

##### `durable_objects`<sup>Required</sup> <a name="durable_objects" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.durableObjects"></a>

```python
durable_objects: WorkerReferencesDurableObjectsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesDurableObjectsList">WorkerReferencesDurableObjectsList</a>

---

##### `queues`<sup>Required</sup> <a name="queues" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.queues"></a>

```python
queues: WorkerReferencesQueuesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList">WorkerReferencesQueuesList</a>

---

##### `workers`<sup>Required</sup> <a name="workers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.workers"></a>

```python
workers: WorkerReferencesWorkersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList">WorkerReferencesWorkersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerReferencesOutputReference.property.internalValue"></a>

```python
internal_value: WorkerReferences
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferences">WorkerReferences</a>

---


### WorkerReferencesQueuesList <a name="WorkerReferencesQueuesList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesQueuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerReferencesQueuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkerReferencesQueuesOutputReference <a name="WorkerReferencesQueuesOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesQueuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueConsumerId">queue_consumer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueId">queue_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueues">WorkerReferencesQueues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `queue_consumer_id`<sup>Required</sup> <a name="queue_consumer_id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueConsumerId"></a>

```python
queue_consumer_id: str
```

- *Type:* str

---

##### `queue_id`<sup>Required</sup> <a name="queue_id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueId"></a>

```python
queue_id: str
```

- *Type:* str

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.internalValue"></a>

```python
internal_value: WorkerReferencesQueues
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesQueues">WorkerReferencesQueues</a>

---


### WorkerReferencesWorkersList <a name="WorkerReferencesWorkersList" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesWorkersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerReferencesWorkersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkerReferencesWorkersOutputReference <a name="WorkerReferencesWorkersOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerReferencesWorkersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkers">WorkerReferencesWorkers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.internalValue"></a>

```python
internal_value: WorkerReferencesWorkers
```

- *Type:* <a href="#@cdktn/provider-cloudflare.worker.WorkerReferencesWorkers">WorkerReferencesWorkers</a>

---


### WorkerSubdomainOutputReference <a name="WorkerSubdomainOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerSubdomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetPreviewsEnabled">reset_previews_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_previews_enabled` <a name="reset_previews_enabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetPreviewsEnabled"></a>

```python
def reset_previews_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewUrlSuffix">preview_url_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabledInput">previews_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabled">previews_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preview_url_suffix`<sup>Required</sup> <a name="preview_url_suffix" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewUrlSuffix"></a>

```python
preview_url_suffix: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `previews_enabled_input`<sup>Optional</sup> <a name="previews_enabled_input" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabledInput"></a>

```python
previews_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `previews_enabled`<sup>Required</sup> <a name="previews_enabled" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabled"></a>

```python
previews_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerSubdomain
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

---


### WorkerTailConsumersList <a name="WorkerTailConsumersList" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerTailConsumersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerTailConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkerTailConsumers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>]

---


### WorkerTailConsumersOutputReference <a name="WorkerTailConsumersOutputReference" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import worker

worker.WorkerTailConsumersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkerTailConsumers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>

---




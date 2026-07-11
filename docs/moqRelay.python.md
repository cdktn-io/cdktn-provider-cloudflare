# `moqRelay` Submodule <a name="`moqRelay` Submodule" id="@cdktn/provider-cloudflare.moqRelay"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MoqRelay <a name="MoqRelay" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay cloudflare_moq_relay}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelay(
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
  config: MoqRelayConfigA = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name for the relay. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | upstreams and lingering_subscribe are mutually exclusive. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#account_id MoqRelay#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name for the relay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#name MoqRelay#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

upstreams and lingering_subscribe are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#config MoqRelay#config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetConfig">reset_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig"></a>

```python
def put_config(
  lingering_subscribe: MoqRelayConfigLingeringSubscribe = None,
  upstreams: MoqRelayConfigUpstreams = None
) -> None
```

###### `lingering_subscribe`<sup>Optional</sup> <a name="lingering_subscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig.parameter.lingeringSubscribe"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}.

---

###### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig.parameter.upstreams"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

Upstreams are external MOQT server publishers that a relay falls back to when it has no local publisher for a requested namespace/track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

##### `reset_config` <a name="reset_config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetConfig"></a>

```python
def reset_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MoqRelay resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelay.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelay.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelay.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelay.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MoqRelay resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MoqRelay to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MoqRelay that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MoqRelay to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference">MoqRelayConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenPublishSubscribe">token_publish_subscribe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenSubscribe">token_subscribe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.config"></a>

```python
config: MoqRelayConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference">MoqRelayConfigAOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `token_publish_subscribe`<sup>Required</sup> <a name="token_publish_subscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenPublishSubscribe"></a>

```python
token_publish_subscribe: str
```

- *Type:* str

---

##### `token_subscribe`<sup>Required</sup> <a name="token_subscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenSubscribe"></a>

```python
token_subscribe: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.configInput"></a>

```python
config_input: IResolvable | MoqRelayConfigA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MoqRelayConfig <a name="MoqRelayConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str,
  config: MoqRelayConfigA = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.name">name</a></code> | <code>str</code> | Human-readable name for the relay. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | upstreams and lingering_subscribe are mutually exclusive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#account_id MoqRelay#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name for the relay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#name MoqRelay#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.config"></a>

```python
config: MoqRelayConfigA
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

upstreams and lingering_subscribe are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#config MoqRelay#config}

---

### MoqRelayConfigA <a name="MoqRelayConfigA" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfigA(
  lingering_subscribe: MoqRelayConfigLingeringSubscribe = None,
  upstreams: MoqRelayConfigUpstreams = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.lingeringSubscribe">lingering_subscribe</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | Upstreams are external MOQT server publishers that a relay falls back to when it has no local publisher for a requested namespace/track. |

---

##### `lingering_subscribe`<sup>Optional</sup> <a name="lingering_subscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.lingeringSubscribe"></a>

```python
lingering_subscribe: MoqRelayConfigLingeringSubscribe
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.upstreams"></a>

```python
upstreams: MoqRelayConfigUpstreams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

Upstreams are external MOQT server publishers that a relay falls back to when it has no local publisher for a requested namespace/track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

### MoqRelayConfigLingeringSubscribe <a name="MoqRelayConfigLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfigLingeringSubscribe(
  enabled: bool | IResolvable = None,
  max_timeout_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#enabled MoqRelay#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.maxTimeoutMs">max_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Relay-level ceiling on lingering subscribe timeout (ms). Default 30000. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

##### `max_timeout_ms`<sup>Optional</sup> <a name="max_timeout_ms" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.maxTimeoutMs"></a>

```python
max_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#max_timeout_ms MoqRelay#max_timeout_ms}

---

### MoqRelayConfigUpstreams <a name="MoqRelayConfigUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfigUpstreams(
  enabled: bool | IResolvable = None,
  upstreams: IResolvable | typing.List[MoqRelayConfigUpstreamsUpstreams] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#enabled MoqRelay#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.upstreams">upstreams</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>]</code> | Ordered list of upstream MOQT server publishers. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.upstreams"></a>

```python
upstreams: IResolvable | typing.List[MoqRelayConfigUpstreamsUpstreams]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>]

Ordered list of upstream MOQT server publishers.

Each entry is an
object (not a bare string) so per-upstream configuration can be
added in the future without another breaking change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

### MoqRelayConfigUpstreamsUpstreams <a name="MoqRelayConfigUpstreamsUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfigUpstreamsUpstreams(
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.property.url">url</a></code> | <code>str</code> | Upstream MOQT server publisher URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.property.url"></a>

```python
url: str
```

- *Type:* str

Upstream MOQT server publisher URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#url MoqRelay#url}

---

## Classes <a name="Classes" id="Classes"></a>

### MoqRelayConfigAOutputReference <a name="MoqRelayConfigAOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe">put_lingering_subscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams">put_upstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetLingeringSubscribe">reset_lingering_subscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetUpstreams">reset_upstreams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lingering_subscribe` <a name="put_lingering_subscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe"></a>

```python
def put_lingering_subscribe(
  enabled: bool | IResolvable = None,
  max_timeout_ms: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

###### `max_timeout_ms`<sup>Optional</sup> <a name="max_timeout_ms" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe.parameter.maxTimeoutMs"></a>

- *Type:* typing.Union[int, float]

Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#max_timeout_ms MoqRelay#max_timeout_ms}

---

##### `put_upstreams` <a name="put_upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams"></a>

```python
def put_upstreams(
  enabled: bool | IResolvable = None,
  upstreams: IResolvable | typing.List[MoqRelayConfigUpstreamsUpstreams] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

###### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams.parameter.upstreams"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>]

Ordered list of upstream MOQT server publishers.

Each entry is an
object (not a bare string) so per-upstream configuration can be
added in the future without another breaking change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

##### `reset_lingering_subscribe` <a name="reset_lingering_subscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetLingeringSubscribe"></a>

```python
def reset_lingering_subscribe() -> None
```

##### `reset_upstreams` <a name="reset_upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetUpstreams"></a>

```python
def reset_upstreams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribe">lingering_subscribe</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference">MoqRelayConfigLingeringSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference">MoqRelayConfigUpstreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribeInput">lingering_subscribe_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreamsInput">upstreams_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lingering_subscribe`<sup>Required</sup> <a name="lingering_subscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribe"></a>

```python
lingering_subscribe: MoqRelayConfigLingeringSubscribeOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference">MoqRelayConfigLingeringSubscribeOutputReference</a>

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreams"></a>

```python
upstreams: MoqRelayConfigUpstreamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference">MoqRelayConfigUpstreamsOutputReference</a>

---

##### `lingering_subscribe_input`<sup>Optional</sup> <a name="lingering_subscribe_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribeInput"></a>

```python
lingering_subscribe_input: IResolvable | MoqRelayConfigLingeringSubscribe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---

##### `upstreams_input`<sup>Optional</sup> <a name="upstreams_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreamsInput"></a>

```python
upstreams_input: IResolvable | MoqRelayConfigUpstreams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MoqRelayConfigA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---


### MoqRelayConfigLingeringSubscribeOutputReference <a name="MoqRelayConfigLingeringSubscribeOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfigLingeringSubscribeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetMaxTimeoutMs">reset_max_timeout_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_max_timeout_ms` <a name="reset_max_timeout_ms" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetMaxTimeoutMs"></a>

```python
def reset_max_timeout_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMsInput">max_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs">max_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_timeout_ms_input`<sup>Optional</sup> <a name="max_timeout_ms_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMsInput"></a>

```python
max_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_timeout_ms`<sup>Required</sup> <a name="max_timeout_ms" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs"></a>

```python
max_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MoqRelayConfigLingeringSubscribe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---


### MoqRelayConfigUpstreamsOutputReference <a name="MoqRelayConfigUpstreamsOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfigUpstreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams">put_upstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetUpstreams">reset_upstreams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_upstreams` <a name="put_upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams"></a>

```python
def put_upstreams(
  value: IResolvable | typing.List[MoqRelayConfigUpstreamsUpstreams]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_upstreams` <a name="reset_upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetUpstreams"></a>

```python
def reset_upstreams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList">MoqRelayConfigUpstreamsUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreamsInput">upstreams_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreams"></a>

```python
upstreams: MoqRelayConfigUpstreamsUpstreamsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList">MoqRelayConfigUpstreamsUpstreamsList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `upstreams_input`<sup>Optional</sup> <a name="upstreams_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreamsInput"></a>

```python
upstreams_input: IResolvable | typing.List[MoqRelayConfigUpstreamsUpstreams]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MoqRelayConfigUpstreams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---


### MoqRelayConfigUpstreamsUpstreamsList <a name="MoqRelayConfigUpstreamsUpstreamsList" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfigUpstreamsUpstreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MoqRelayConfigUpstreamsUpstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MoqRelayConfigUpstreamsUpstreams]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>]

---


### MoqRelayConfigUpstreamsUpstreamsOutputReference <a name="MoqRelayConfigUpstreamsUpstreamsOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import moq_relay

moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_url` <a name="reset_url" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MoqRelayConfigUpstreamsUpstreams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>

---




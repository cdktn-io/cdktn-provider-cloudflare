# `monetizationRules` Submodule <a name="`monetizationRules` Submodule" id="@cdktn/provider-cloudflare.monetizationRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonetizationRules <a name="MonetizationRules" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules cloudflare_monetization_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer"></a>

```python
from cdktn_provider_cloudflare import monetization_rules

monetizationRules.MonetizationRules(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rules: IResolvable | typing.List[MonetizationRulesRules],
  zone_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>]</code> | Full desired Payment Required ruleset. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The unique ID of the zone. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>]

Full desired Payment Required ruleset.

An empty array clears all payment rules. The ruleset may contain at most 40 unique wallet addresses; address comparison is case-insensitive. Every address must pass wallet screening before deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#rules MonetizationRules#rules}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.Initializer.parameter.zoneId"></a>

- *Type:* str

The unique ID of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#zone_id MonetizationRules#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.putRules">put_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[MonetizationRulesRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MonetizationRules resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.isConstruct"></a>

```python
from cdktn_provider_cloudflare import monetization_rules

monetizationRules.MonetizationRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import monetization_rules

monetizationRules.MonetizationRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import monetization_rules

monetizationRules.MonetizationRules.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import monetization_rules

monetizationRules.MonetizationRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MonetizationRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonetizationRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonetizationRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MonetizationRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList">MonetizationRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.rules"></a>

```python
rules: MonetizationRulesRulesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList">MonetizationRulesRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[MonetizationRulesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonetizationRulesConfig <a name="MonetizationRulesConfig" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import monetization_rules

monetizationRules.MonetizationRulesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rules: IResolvable | typing.List[MonetizationRulesRules],
  zone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>]</code> | Full desired Payment Required ruleset. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The unique ID of the zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[MonetizationRulesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>]

Full desired Payment Required ruleset.

An empty array clears all payment rules. The ruleset may contain at most 40 unique wallet addresses; address comparison is case-insensitive. Every address must pass wallet screening before deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#rules MonetizationRules#rules}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The unique ID of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#zone_id MonetizationRules#zone_id}

---

### MonetizationRulesRules <a name="MonetizationRulesRules" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.Initializer"></a>

```python
from cdktn_provider_cloudflare import monetization_rules

monetizationRules.MonetizationRulesRules(
  address: str,
  expression: str,
  scheme: str,
  description: str = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  price: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.address">address</a></code> | <code>str</code> | 0x-prefixed 20-byte hexadecimal Ethereum address. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.expression">expression</a></code> | <code>str</code> | Wirefilter expression identifying the requests that require payment. Forwarded verbatim to the Rulesets API, which validates its syntax. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.scheme">scheme</a></code> | <code>str</code> | X402 payment scheme. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#description MonetizationRules#description}. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#enabled MonetizationRules#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.id">id</a></code> | <code>str</code> | Optional on input. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.price">price</a></code> | <code>str</code> | Price in the smallest indivisible unit of the configured payment token, encoded as a decimal string. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.address"></a>

```python
address: str
```

- *Type:* str

0x-prefixed 20-byte hexadecimal Ethereum address.

Mixed-case addresses must carry a valid EIP-55 checksum; all-lowercase or all-uppercase addresses are also accepted. The address must pass wallet screening whenever its rule is deployed or patched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#address MonetizationRules#address}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.expression"></a>

```python
expression: str
```

- *Type:* str

Wirefilter expression identifying the requests that require payment. Forwarded verbatim to the Rulesets API, which validates its syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#expression MonetizationRules#expression}

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

X402 payment scheme.

"exact" requires the specified payment amount; "upto" permits a payment up to the specified amount. Both fixed-price schemes require the price field.
Available values: "exact", "upto", "origin_controlled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#scheme MonetizationRules#scheme}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#description MonetizationRules#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#enabled MonetizationRules#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.id"></a>

```python
id: str
```

- *Type:* str

Optional on input.

Include the ID of an existing payment rule to update it in place, preserving its stable identity across the full-ruleset replacement; omit it to create a new rule. An ID that does not match an existing payment rule in the zone is rejected. Rules omitted from the request are deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#id MonetizationRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `price`<sup>Optional</sup> <a name="price" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules.property.price"></a>

```python
price: str
```

- *Type:* str

Price in the smallest indivisible unit of the configured payment token, encoded as a decimal string.

Must be a canonical decimal integer in [1000, 100000000]: no leading zeros, and a bare JSON number is rejected. The price is required for the fixed-price schemes ("exact" and "upto") and must be at least 1000, the smallest amount the payment facilitator can settle ($0.001 for a 6-decimal token such as USDC), and at most 100000000 ($100 for a 6-decimal token). When the scheme is "origin_controlled" the origin server sets pricing dynamically and the rule carries no price: the field must be omitted — any provided value, including "0", is rejected because it would not be enforced. Responses always encode this as a string and omit it for "origin_controlled" rules; the pattern matches exactly the set of values the server accepts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.28.1/docs/resources/monetization_rules#price MonetizationRules#price}

---

## Classes <a name="Classes" id="Classes"></a>

### MonetizationRulesRulesList <a name="MonetizationRulesRulesList" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import monetization_rules

monetizationRules.MonetizationRulesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonetizationRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MonetizationRulesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>]

---


### MonetizationRulesRulesOutputReference <a name="MonetizationRulesRulesOutputReference" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import monetization_rules

monetizationRules.MonetizationRulesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resetPrice">reset_price</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_price` <a name="reset_price" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.resetPrice"></a>

```python
def reset_price() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.priceInput">price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.price">price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `price_input`<sup>Optional</sup> <a name="price_input" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.priceInput"></a>

```python
price_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `price`<sup>Required</sup> <a name="price" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.price"></a>

```python
price: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MonetizationRulesRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.monetizationRules.MonetizationRulesRules">MonetizationRulesRules</a>

---




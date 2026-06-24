# `flagshipFlag` Submodule <a name="`flagshipFlag` Submodule" id="@cdktn/provider-cloudflare.flagshipFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlagshipFlag <a name="FlagshipFlag" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag cloudflare_flagship_flag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlag(
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
  app_id: str,
  default_variation: str,
  enabled: bool | IResolvable,
  key: str,
  rules: IResolvable | typing.List[FlagshipFlagRules],
  variations: typing.Mapping[str],
  description: str = None,
  flag_key: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | App identifier. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.defaultVariation">default_variation</a></code> | <code>str</code> | Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When false, the flag bypasses all rules and always serves `default_variation`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.key">key</a></code> | <code>str</code> | Unique identifier for the flag within an app. Used in all evaluation and SDK calls. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>]</code> | Targeting rules evaluated in ascending `priority`; |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.variations">variations</a></code> | <code>typing.Mapping[str]</code> | Map of variation name to value. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#description FlagshipFlag#description}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.flagKey">flag_key</a></code> | <code>str</code> | Flag key (slug). |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.type">type</a></code> | <code>str</code> | Value type of the flag's variations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#account_id FlagshipFlag#account_id}

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.appId"></a>

- *Type:* str

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#app_id FlagshipFlag#app_id}

---

##### `default_variation`<sup>Required</sup> <a name="default_variation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.defaultVariation"></a>

- *Type:* str

Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#default_variation FlagshipFlag#default_variation}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

When false, the flag bypasses all rules and always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#enabled FlagshipFlag#enabled}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.key"></a>

- *Type:* str

Unique identifier for the flag within an app. Used in all evaluation and SDK calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#key FlagshipFlag#key}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>]

Targeting rules evaluated in ascending `priority`;

the first matching rule wins. An empty array means the flag always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#rules FlagshipFlag#rules}

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.variations"></a>

- *Type:* typing.Mapping[str]

Map of variation name to value.

All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#variations FlagshipFlag#variations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#description FlagshipFlag#description}.

---

##### `flag_key`<sup>Optional</sup> <a name="flag_key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.flagKey"></a>

- *Type:* str

Flag key (slug).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#flag_key FlagshipFlag#flag_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.type"></a>

- *Type:* str

Value type of the flag's variations.

Inferred from the variation values on write, so it may be omitted in requests.
Available values: "boolean", "string", "number", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#type FlagshipFlag#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetFlagKey">reset_flag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[FlagshipFlagRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_flag_key` <a name="reset_flag_key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetFlagKey"></a>

```python
def reset_flag_key() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FlagshipFlag resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlag.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlag.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FlagshipFlag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FlagshipFlag to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FlagshipFlag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FlagshipFlag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList">FlagshipFlagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariationInput">default_variation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKeyInput">flag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variationsInput">variations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariation">default_variation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKey">flag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variations">variations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rules"></a>

```python
rules: FlagshipFlagRulesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList">FlagshipFlagRulesList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `default_variation_input`<sup>Optional</sup> <a name="default_variation_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariationInput"></a>

```python
default_variation_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `flag_key_input`<sup>Optional</sup> <a name="flag_key_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKeyInput"></a>

```python
flag_key_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[FlagshipFlagRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `variations_input`<sup>Optional</sup> <a name="variations_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variationsInput"></a>

```python
variations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `default_variation`<sup>Required</sup> <a name="default_variation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariation"></a>

```python
default_variation: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `flag_key`<sup>Required</sup> <a name="flag_key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKey"></a>

```python
flag_key: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variations"></a>

```python
variations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FlagshipFlagConfig <a name="FlagshipFlagConfig" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  app_id: str,
  default_variation: str,
  enabled: bool | IResolvable,
  key: str,
  rules: IResolvable | typing.List[FlagshipFlagRules],
  variations: typing.Mapping[str],
  description: str = None,
  flag_key: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.appId">app_id</a></code> | <code>str</code> | App identifier. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.defaultVariation">default_variation</a></code> | <code>str</code> | Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When false, the flag bypasses all rules and always serves `default_variation`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.key">key</a></code> | <code>str</code> | Unique identifier for the flag within an app. Used in all evaluation and SDK calls. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>]</code> | Targeting rules evaluated in ascending `priority`; |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.variations">variations</a></code> | <code>typing.Mapping[str]</code> | Map of variation name to value. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#description FlagshipFlag#description}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.flagKey">flag_key</a></code> | <code>str</code> | Flag key (slug). |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.type">type</a></code> | <code>str</code> | Value type of the flag's variations. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#account_id FlagshipFlag#account_id}

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#app_id FlagshipFlag#app_id}

---

##### `default_variation`<sup>Required</sup> <a name="default_variation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.defaultVariation"></a>

```python
default_variation: str
```

- *Type:* str

Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#default_variation FlagshipFlag#default_variation}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When false, the flag bypasses all rules and always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#enabled FlagshipFlag#enabled}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Unique identifier for the flag within an app. Used in all evaluation and SDK calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#key FlagshipFlag#key}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[FlagshipFlagRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>]

Targeting rules evaluated in ascending `priority`;

the first matching rule wins. An empty array means the flag always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#rules FlagshipFlag#rules}

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.variations"></a>

```python
variations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of variation name to value.

All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#variations FlagshipFlag#variations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#description FlagshipFlag#description}.

---

##### `flag_key`<sup>Optional</sup> <a name="flag_key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.flagKey"></a>

```python
flag_key: str
```

- *Type:* str

Flag key (slug).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#flag_key FlagshipFlag#flag_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Value type of the flag's variations.

Inferred from the variation values on write, so it may be omitted in requests.
Available values: "boolean", "string", "number", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#type FlagshipFlag#type}

---

### FlagshipFlagRules <a name="FlagshipFlagRules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRules(
  conditions: IResolvable | typing.List[FlagshipFlagRulesConditions],
  priority: typing.Union[int, float],
  serve_variation: str,
  rollout: FlagshipFlagRulesRollout = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>]</code> | Conditions the context must satisfy for this rule to match. An empty array matches all contexts. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Evaluation order; lower numbers are evaluated first. Must be unique across the flag's rules. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.serveVariation">serve_variation</a></code> | <code>str</code> | Variation served when this rule matches. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.rollout">rollout</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#rollout FlagshipFlag#rollout}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.conditions"></a>

```python
conditions: IResolvable | typing.List[FlagshipFlagRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>]

Conditions the context must satisfy for this rule to match. An empty array matches all contexts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#conditions FlagshipFlag#conditions}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Evaluation order; lower numbers are evaluated first. Must be unique across the flag's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#priority FlagshipFlag#priority}

---

##### `serve_variation`<sup>Required</sup> <a name="serve_variation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.serveVariation"></a>

```python
serve_variation: str
```

- *Type:* str

Variation served when this rule matches. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#serve_variation FlagshipFlag#serve_variation}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.rollout"></a>

```python
rollout: FlagshipFlagRulesRollout
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#rollout FlagshipFlag#rollout}.

---

### FlagshipFlagRulesConditions <a name="FlagshipFlagRulesConditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesConditions(
  attribute: str = None,
  clauses: IResolvable | typing.List[FlagshipFlagRulesConditionsClauses] = None,
  logical_operator: str = None,
  operator: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.clauses">clauses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.logicalOperator">logical_operator</a></code> | <code>str</code> | Available values: "AND", "OR". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.operator">operator</a></code> | <code>str</code> | Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.value">value</a></code> | <code>str</code> | Value to compare against the context attribute. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}.

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.clauses"></a>

```python
clauses: IResolvable | typing.List[FlagshipFlagRulesConditionsClauses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}.

---

##### `logical_operator`<sup>Optional</sup> <a name="logical_operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

Available values: "AND", "OR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.operator"></a>

```python
operator: str
```

- *Type:* str

Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#operator FlagshipFlag#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.value"></a>

```python
value: str
```

- *Type:* str

Value to compare against the context attribute.

Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#value FlagshipFlag#value}

---

### FlagshipFlagRulesConditionsClauses <a name="FlagshipFlagRulesConditionsClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesConditionsClauses(
  attribute: str = None,
  clauses: IResolvable | typing.List[FlagshipFlagRulesConditionsClauses] = None,
  logical_operator: str = None,
  operator: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.clauses">clauses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.logicalOperator">logical_operator</a></code> | <code>str</code> | Available values: "AND", "OR". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.operator">operator</a></code> | <code>str</code> | Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.value">value</a></code> | <code>str</code> | Value to compare against the context attribute. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}.

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.clauses"></a>

```python
clauses: IResolvable | typing.List[FlagshipFlagRulesConditionsClauses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}.

---

##### `logical_operator`<sup>Optional</sup> <a name="logical_operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

Available values: "AND", "OR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.operator"></a>

```python
operator: str
```

- *Type:* str

Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#operator FlagshipFlag#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.value"></a>

```python
value: str
```

- *Type:* str

Value to compare against the context attribute.

Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#value FlagshipFlag#value}

---

### FlagshipFlagRulesRollout <a name="FlagshipFlagRulesRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesRollout(
  percentage: typing.Union[int, float],
  attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of matching traffic (0–100) served this variation. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.attribute">attribute</a></code> | <code>str</code> | Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage of matching traffic (0–100) served this variation.

For multi-way splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#percentage FlagshipFlag#percentage}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}

---

## Classes <a name="Classes" id="Classes"></a>

### FlagshipFlagRulesConditionsClausesList <a name="FlagshipFlagRulesConditionsClausesList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesConditionsClausesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FlagshipFlagRulesConditionsClausesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FlagshipFlagRulesConditionsClauses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]

---


### FlagshipFlagRulesConditionsClausesOutputReference <a name="FlagshipFlagRulesConditionsClausesOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses">put_clauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetClauses">reset_clauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetLogicalOperator">reset_logical_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clauses` <a name="put_clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses"></a>

```python
def put_clauses(
  value: IResolvable | typing.List[FlagshipFlagRulesConditionsClauses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]

---

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_clauses` <a name="reset_clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetClauses"></a>

```python
def reset_clauses() -> None
```

##### `reset_logical_operator` <a name="reset_logical_operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetLogicalOperator"></a>

```python
def reset_logical_operator() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clausesInput">clauses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperatorInput">logical_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator">logical_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clauses"></a>

```python
clauses: FlagshipFlagRulesConditionsClausesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a>

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `clauses_input`<sup>Optional</sup> <a name="clauses_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clausesInput"></a>

```python
clauses_input: IResolvable | typing.List[FlagshipFlagRulesConditionsClauses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]

---

##### `logical_operator_input`<sup>Optional</sup> <a name="logical_operator_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperatorInput"></a>

```python
logical_operator_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `logical_operator`<sup>Required</sup> <a name="logical_operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FlagshipFlagRulesConditionsClauses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>

---


### FlagshipFlagRulesConditionsList <a name="FlagshipFlagRulesConditionsList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FlagshipFlagRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FlagshipFlagRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>]

---


### FlagshipFlagRulesConditionsOutputReference <a name="FlagshipFlagRulesConditionsOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses">put_clauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetClauses">reset_clauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetLogicalOperator">reset_logical_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clauses` <a name="put_clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses"></a>

```python
def put_clauses(
  value: IResolvable | typing.List[FlagshipFlagRulesConditionsClauses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]

---

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_clauses` <a name="reset_clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetClauses"></a>

```python
def reset_clauses() -> None
```

##### `reset_logical_operator` <a name="reset_logical_operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetLogicalOperator"></a>

```python
def reset_logical_operator() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clausesInput">clauses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperatorInput">logical_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperator">logical_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clauses"></a>

```python
clauses: FlagshipFlagRulesConditionsClausesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a>

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `clauses_input`<sup>Optional</sup> <a name="clauses_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clausesInput"></a>

```python
clauses_input: IResolvable | typing.List[FlagshipFlagRulesConditionsClauses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>]

---

##### `logical_operator_input`<sup>Optional</sup> <a name="logical_operator_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperatorInput"></a>

```python
logical_operator_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `logical_operator`<sup>Required</sup> <a name="logical_operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FlagshipFlagRulesConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>

---


### FlagshipFlagRulesList <a name="FlagshipFlagRulesList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FlagshipFlagRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FlagshipFlagRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>]

---


### FlagshipFlagRulesOutputReference <a name="FlagshipFlagRulesOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout">put_rollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resetRollout">reset_rollout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[FlagshipFlagRulesConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>]

---

##### `put_rollout` <a name="put_rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout"></a>

```python
def put_rollout(
  percentage: typing.Union[int, float],
  attribute: str = None
) -> None
```

###### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout.parameter.percentage"></a>

- *Type:* typing.Union[int, float]

Percentage of matching traffic (0–100) served this variation.

For multi-way splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#percentage FlagshipFlag#percentage}

---

###### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout.parameter.attribute"></a>

- *Type:* str

Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}

---

##### `reset_rollout` <a name="reset_rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resetRollout"></a>

```python
def reset_rollout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList">FlagshipFlagRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rollout">rollout</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference">FlagshipFlagRulesRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rolloutInput">rollout_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariationInput">serve_variation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariation">serve_variation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditions"></a>

```python
conditions: FlagshipFlagRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList">FlagshipFlagRulesConditionsList</a>

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rollout"></a>

```python
rollout: FlagshipFlagRulesRolloutOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference">FlagshipFlagRulesRolloutOutputReference</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[FlagshipFlagRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rollout_input`<sup>Optional</sup> <a name="rollout_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rolloutInput"></a>

```python
rollout_input: IResolvable | FlagshipFlagRulesRollout
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---

##### `serve_variation_input`<sup>Optional</sup> <a name="serve_variation_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariationInput"></a>

```python
serve_variation_input: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `serve_variation`<sup>Required</sup> <a name="serve_variation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariation"></a>

```python
serve_variation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FlagshipFlagRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>

---


### FlagshipFlagRulesRolloutOutputReference <a name="FlagshipFlagRulesRolloutOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import flagship_flag

flagshipFlag.FlagshipFlagRulesRolloutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FlagshipFlagRulesRollout
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---




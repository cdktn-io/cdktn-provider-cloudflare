# `magicWanBgpFilterProfile` Submodule <a name="`magicWanBgpFilterProfile` Submodule" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanBgpFilterProfile <a name="MagicWanBgpFilterProfile" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile cloudflare_magic_wan_bgp_filter_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_bgp_filter_profile

magicWanBgpFilterProfile.MagicWanBgpFilterProfile(
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
  match_action: str,
  name: str,
  targets: typing.List[str],
  description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.matchAction">match_action</a></code> | <code>str</code> | Action to take when a route matches one of the targets in this profile Available values: "allow", "deny". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Friendly name for the filter profile. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.targets">targets</a></code> | <code>typing.List[str]</code> | List of CIDR prefixes. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the filter profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#account_id MagicWanBgpFilterProfile#account_id}

---

##### `match_action`<sup>Required</sup> <a name="match_action" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.matchAction"></a>

- *Type:* str

Action to take when a route matches one of the targets in this profile Available values: "allow", "deny".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#match_action MagicWanBgpFilterProfile#match_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.name"></a>

- *Type:* str

Friendly name for the filter profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#name MagicWanBgpFilterProfile#name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.targets"></a>

- *Type:* typing.List[str]

List of CIDR prefixes.

Each entry may carry an optional suffix that specifies which prefix lengths to match relative to the prefix length N: '{X,Y}' matches prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max (max is 32 for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent to {X,X}), '+' is shorthand for {N, max} (the prefix and all more-specific subnets, including at length N itself; valid even when N is the maximum length). Omit the suffix to match the prefix exactly at length N.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#targets MagicWanBgpFilterProfile#targets}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.description"></a>

- *Type:* str

Description of the filter profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#description MagicWanBgpFilterProfile#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.resetDescription">reset_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.resetDescription"></a>

```python
def reset_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MagicWanBgpFilterProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isConstruct"></a>

```python
from cdktn_provider_cloudflare import magic_wan_bgp_filter_profile

magicWanBgpFilterProfile.MagicWanBgpFilterProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import magic_wan_bgp_filter_profile

magicWanBgpFilterProfile.MagicWanBgpFilterProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import magic_wan_bgp_filter_profile

magicWanBgpFilterProfile.MagicWanBgpFilterProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import magic_wan_bgp_filter_profile

magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MagicWanBgpFilterProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MagicWanBgpFilterProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MagicWanBgpFilterProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MagicWanBgpFilterProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.matchActionInput">match_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.targetsInput">targets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.matchAction">match_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `match_action_input`<sup>Optional</sup> <a name="match_action_input" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.matchActionInput"></a>

```python
match_action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.targetsInput"></a>

```python
targets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `match_action`<sup>Required</sup> <a name="match_action" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.matchAction"></a>

```python
match_action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanBgpFilterProfileConfig <a name="MagicWanBgpFilterProfileConfig" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_bgp_filter_profile

magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  match_action: str,
  name: str,
  targets: typing.List[str],
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.matchAction">match_action</a></code> | <code>str</code> | Action to take when a route matches one of the targets in this profile Available values: "allow", "deny". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.name">name</a></code> | <code>str</code> | Friendly name for the filter profile. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.targets">targets</a></code> | <code>typing.List[str]</code> | List of CIDR prefixes. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.description">description</a></code> | <code>str</code> | Description of the filter profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#account_id MagicWanBgpFilterProfile#account_id}

---

##### `match_action`<sup>Required</sup> <a name="match_action" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.matchAction"></a>

```python
match_action: str
```

- *Type:* str

Action to take when a route matches one of the targets in this profile Available values: "allow", "deny".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#match_action MagicWanBgpFilterProfile#match_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Friendly name for the filter profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#name MagicWanBgpFilterProfile#name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

List of CIDR prefixes.

Each entry may carry an optional suffix that specifies which prefix lengths to match relative to the prefix length N: '{X,Y}' matches prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max (max is 32 for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent to {X,X}), '+' is shorthand for {N, max} (the prefix and all more-specific subnets, including at length N itself; valid even when N is the maximum length). Omit the suffix to match the prefix exactly at length N.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#targets MagicWanBgpFilterProfile#targets}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the filter profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/magic_wan_bgp_filter_profile#description MagicWanBgpFilterProfile#description}

---




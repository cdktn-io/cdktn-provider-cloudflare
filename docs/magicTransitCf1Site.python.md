# `magicTransitCf1Site` Submodule <a name="`magicTransitCf1Site` Submodule" id="@cdktn/provider-cloudflare.magicTransitCf1Site"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitCf1Site <a name="MagicTransitCf1Site" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1Site(
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
  body: IResolvable | typing.List[MagicTransitCf1SiteBody],
  description: str = None,
  location: MagicTransitCf1SiteLocation = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.body">body</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.name">name</a></code> | <code>str</code> | A human-provided name describing the CF1 Site that should be unique within the account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#account_id MagicTransitCf1Site#account_id}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.body"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.description"></a>

- *Type:* str

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.name"></a>

- *Type:* str

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody">put_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_body` <a name="put_body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody"></a>

```python
def put_body(
  value: IResolvable | typing.List[MagicTransitCf1SiteBody]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>]

---

##### `put_location` <a name="put_location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation"></a>

```python
def put_location(
  lat: typing.Union[int, float] = None,
  long: typing.Union[int, float] = None,
  name: str = None
) -> None
```

###### `lat`<sup>Optional</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation.parameter.lat"></a>

- *Type:* typing.Union[int, float]

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

###### `long`<sup>Optional</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation.parameter.long"></a>

- *Type:* typing.Union[int, float]

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation.parameter.name"></a>

- *Type:* str

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1Site.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1Site.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1Site.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1Site.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MagicTransitCf1Site to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MagicTransitCf1Site that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MagicTransitCf1Site to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body">body</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput">body_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body"></a>

```python
body: MagicTransitCf1SiteBodyList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location"></a>

```python
location: MagicTransitCf1SiteLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a>

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput"></a>

```python
body_input: IResolvable | typing.List[MagicTransitCf1SiteBody]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput"></a>

```python
location_input: IResolvable | MagicTransitCf1SiteLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitCf1SiteBody <a name="MagicTransitCf1SiteBody" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1SiteBody(
  name: str,
  description: str = None,
  location: MagicTransitCf1SiteBodyLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name">name</a></code> | <code>str</code> | A human-provided name describing the CF1 Site that should be unique within the account. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description">description</a></code> | <code>str</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name"></a>

```python
name: str
```

- *Type:* str

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description"></a>

```python
description: str
```

- *Type:* str

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location"></a>

```python
location: MagicTransitCf1SiteBodyLocation
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

### MagicTransitCf1SiteBodyLocation <a name="MagicTransitCf1SiteBodyLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1SiteBodyLocation(
  lat: typing.Union[int, float] = None,
  long: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat">lat</a></code> | <code>typing.Union[int, float]</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long">long</a></code> | <code>typing.Union[int, float]</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name">name</a></code> | <code>str</code> | Name of nearest town, city, or village. |

---

##### `lat`<sup>Optional</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat"></a>

```python
lat: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `long`<sup>Optional</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long"></a>

```python
long: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name"></a>

```python
name: str
```

- *Type:* str

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteConfig <a name="MagicTransitCf1SiteConfig" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1SiteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  body: IResolvable | typing.List[MagicTransitCf1SiteBody],
  description: str = None,
  location: MagicTransitCf1SiteLocation = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body">body</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description">description</a></code> | <code>str</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name">name</a></code> | <code>str</code> | A human-provided name describing the CF1 Site that should be unique within the account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#account_id MagicTransitCf1Site#account_id}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body"></a>

```python
body: IResolvable | typing.List[MagicTransitCf1SiteBody]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location"></a>

```python
location: MagicTransitCf1SiteLocation
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteLocation <a name="MagicTransitCf1SiteLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1SiteLocation(
  lat: typing.Union[int, float] = None,
  long: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat">lat</a></code> | <code>typing.Union[int, float]</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long">long</a></code> | <code>typing.Union[int, float]</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name">name</a></code> | <code>str</code> | Name of nearest town, city, or village. |

---

##### `lat`<sup>Optional</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat"></a>

```python
lat: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `long`<sup>Optional</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long"></a>

```python
long: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name"></a>

```python
name: str
```

- *Type:* str

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitCf1SiteBodyList <a name="MagicTransitCf1SiteBodyList" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1SiteBodyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MagicTransitCf1SiteBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MagicTransitCf1SiteBody]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>]

---


### MagicTransitCf1SiteBodyLocationOutputReference <a name="MagicTransitCf1SiteBodyLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat">reset_lat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong">reset_long</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lat` <a name="reset_lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat"></a>

```python
def reset_lat() -> None
```

##### `reset_long` <a name="reset_long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong"></a>

```python
def reset_long() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput">lat_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput">long_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat">lat</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long">long</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lat_input`<sup>Optional</sup> <a name="lat_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput"></a>

```python
lat_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_input`<sup>Optional</sup> <a name="long_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput"></a>

```python
long_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat"></a>

```python
lat: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long`<sup>Required</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long"></a>

```python
long: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MagicTransitCf1SiteBodyLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---


### MagicTransitCf1SiteBodyOutputReference <a name="MagicTransitCf1SiteBodyOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation">reset_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_location` <a name="put_location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation"></a>

```python
def put_location(
  lat: typing.Union[int, float] = None,
  long: typing.Union[int, float] = None,
  name: str = None
) -> None
```

###### `lat`<sup>Optional</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation.parameter.lat"></a>

- *Type:* typing.Union[int, float]

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

###### `long`<sup>Optional</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation.parameter.long"></a>

- *Type:* typing.Union[int, float]

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation.parameter.name"></a>

- *Type:* str

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location"></a>

```python
location: MagicTransitCf1SiteBodyLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a>

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput"></a>

```python
location_input: IResolvable | MagicTransitCf1SiteBodyLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MagicTransitCf1SiteBody
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>

---


### MagicTransitCf1SiteLocationOutputReference <a name="MagicTransitCf1SiteLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_transit_cf1_site

magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat">reset_lat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong">reset_long</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lat` <a name="reset_lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat"></a>

```python
def reset_lat() -> None
```

##### `reset_long` <a name="reset_long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong"></a>

```python
def reset_long() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput">lat_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput">long_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat">lat</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long">long</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lat_input`<sup>Optional</sup> <a name="lat_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput"></a>

```python
lat_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_input`<sup>Optional</sup> <a name="long_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput"></a>

```python
long_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat"></a>

```python
lat: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long`<sup>Required</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long"></a>

```python
long: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MagicTransitCf1SiteLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---




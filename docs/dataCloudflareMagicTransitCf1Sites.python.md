# `dataCloudflareMagicTransitCf1Sites` Submodule <a name="`dataCloudflareMagicTransitCf1Sites` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitCf1Sites <a name="DataCloudflareMagicTransitCf1Sites" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites cloudflare_magic_transit_cf1_sites}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites(
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
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites#account_id DataCloudflareMagicTransitCf1Sites#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites#max_items DataCloudflareMagicTransitCf1Sites#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareMagicTransitCf1Sites resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareMagicTransitCf1Sites resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicTransitCf1Sites to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicTransitCf1Sites that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitCf1Sites to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList">DataCloudflareMagicTransitCf1SitesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.result"></a>

```python
result: DataCloudflareMagicTransitCf1SitesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList">DataCloudflareMagicTransitCf1SitesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1Sites.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitCf1SitesConfig <a name="DataCloudflareMagicTransitCf1SitesConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites#account_id DataCloudflareMagicTransitCf1Sites#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_sites#max_items DataCloudflareMagicTransitCf1Sites#max_items}

---

### DataCloudflareMagicTransitCf1SitesResult <a name="DataCloudflareMagicTransitCf1SitesResult" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResult()
```


### DataCloudflareMagicTransitCf1SitesResultLocation <a name="DataCloudflareMagicTransitCf1SitesResultLocation" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocation.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocation()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitCf1SitesResultList <a name="DataCloudflareMagicTransitCf1SitesResultList" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareMagicTransitCf1SitesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareMagicTransitCf1SitesResultLocationOutputReference <a name="DataCloudflareMagicTransitCf1SitesResultLocationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.lat">lat</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.long">long</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocation">DataCloudflareMagicTransitCf1SitesResultLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.lat"></a>

```python
lat: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long`<sup>Required</sup> <a name="long" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.long"></a>

```python
long: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicTransitCf1SitesResultLocation
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocation">DataCloudflareMagicTransitCf1SitesResultLocation</a>

---


### DataCloudflareMagicTransitCf1SitesResultOutputReference <a name="DataCloudflareMagicTransitCf1SitesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_sites

dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference">DataCloudflareMagicTransitCf1SitesResultLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResult">DataCloudflareMagicTransitCf1SitesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.location"></a>

```python
location: DataCloudflareMagicTransitCf1SitesResultLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultLocationOutputReference">DataCloudflareMagicTransitCf1SitesResultLocationOutputReference</a>

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicTransitCf1SitesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Sites.DataCloudflareMagicTransitCf1SitesResult">DataCloudflareMagicTransitCf1SitesResult</a>

---




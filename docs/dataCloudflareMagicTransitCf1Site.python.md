# `dataCloudflareMagicTransitCf1Site` Submodule <a name="`dataCloudflareMagicTransitCf1Site` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitCf1Site <a name="DataCloudflareMagicTransitCf1Site" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_site

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site(
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
  cf1_site_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.cf1SiteId">cf1_site_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site#account_id DataCloudflareMagicTransitCf1Site#account_id}

---

##### `cf1_site_id`<sup>Required</sup> <a name="cf1_site_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.cf1SiteId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site#cf1_site_id DataCloudflareMagicTransitCf1Site#cf1_site_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareMagicTransitCf1Site resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_site

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_site

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_site

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_site

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareMagicTransitCf1Site resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicTransitCf1Site to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicTransitCf1Site that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitCf1Site to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference">DataCloudflareMagicTransitCf1SiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteIdInput">cf1_site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteId">cf1_site_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.location"></a>

```python
location: DataCloudflareMagicTransitCf1SiteLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference">DataCloudflareMagicTransitCf1SiteLocationOutputReference</a>

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `cf1_site_id_input`<sup>Optional</sup> <a name="cf1_site_id_input" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteIdInput"></a>

```python
cf1_site_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `cf1_site_id`<sup>Required</sup> <a name="cf1_site_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteId"></a>

```python
cf1_site_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitCf1SiteConfig <a name="DataCloudflareMagicTransitCf1SiteConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_site

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  cf1_site_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.cf1SiteId">cf1_site_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site#account_id DataCloudflareMagicTransitCf1Site#account_id}

---

##### `cf1_site_id`<sup>Required</sup> <a name="cf1_site_id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.cf1SiteId"></a>

```python
cf1_site_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site#cf1_site_id DataCloudflareMagicTransitCf1Site#cf1_site_id}

---

### DataCloudflareMagicTransitCf1SiteLocation <a name="DataCloudflareMagicTransitCf1SiteLocation" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_site

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitCf1SiteLocationOutputReference <a name="DataCloudflareMagicTransitCf1SiteLocationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_magic_transit_cf1_site

dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.lat">lat</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.long">long</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation">DataCloudflareMagicTransitCf1SiteLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.lat"></a>

```python
lat: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long`<sup>Required</sup> <a name="long" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.long"></a>

```python
long: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicTransitCf1SiteLocation
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation">DataCloudflareMagicTransitCf1SiteLocation</a>

---




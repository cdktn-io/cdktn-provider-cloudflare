# `dataCloudflareAiGateways` Submodule <a name="`dataCloudflareAiGateways` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiGateways <a name="DataCloudflareAiGateways" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways cloudflare_ai_gateways}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGateways(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  max_items: typing.Union[int, float] = None,
  search: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.search">search</a></code> | <code>str</code> | Search by id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#max_items DataCloudflareAiGateways#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.Initializer.parameter.search"></a>

- *Type:* str

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#search DataCloudflareAiGateways#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetSearch">reset_search</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.resetSearch"></a>

```python
def reset_search() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareAiGateways resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGateways.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGateways.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGateways.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGateways.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareAiGateways resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareAiGateways to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareAiGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList">DataCloudflareAiGatewaysResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.search">search</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.result"></a>

```python
result: DataCloudflareAiGatewaysResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList">DataCloudflareAiGatewaysResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.search"></a>

```python
search: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGateways.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiGatewaysConfig <a name="DataCloudflareAiGatewaysConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  max_items: typing.Union[int, float] = None,
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.search">search</a></code> | <code>str</code> | Search by id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#max_items DataCloudflareAiGateways#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateways#search DataCloudflareAiGateways#search}

---

### DataCloudflareAiGatewaysResult <a name="DataCloudflareAiGatewaysResult" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResult()
```


### DataCloudflareAiGatewaysResultDlp <a name="DataCloudflareAiGatewaysResultDlp" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlp.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlp()
```


### DataCloudflareAiGatewaysResultDlpPolicies <a name="DataCloudflareAiGatewaysResultDlpPolicies" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPolicies.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPolicies()
```


### DataCloudflareAiGatewaysResultGuardrails <a name="DataCloudflareAiGatewaysResultGuardrails" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrails.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrails()
```


### DataCloudflareAiGatewaysResultGuardrailsPrompt <a name="DataCloudflareAiGatewaysResultGuardrailsPrompt" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPrompt.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPrompt()
```


### DataCloudflareAiGatewaysResultGuardrailsResponse <a name="DataCloudflareAiGatewaysResultGuardrailsResponse" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponse.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponse()
```


### DataCloudflareAiGatewaysResultOtel <a name="DataCloudflareAiGatewaysResultOtel" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtel.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtel()
```


### DataCloudflareAiGatewaysResultSpendLimits <a name="DataCloudflareAiGatewaysResultSpendLimits" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimits.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimits()
```


### DataCloudflareAiGatewaysResultSpendLimitsRules <a name="DataCloudflareAiGatewaysResultSpendLimitsRules" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRules.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRules()
```


### DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider()
```


### DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata()
```


### DataCloudflareAiGatewaysResultSpendLimitsRulesModel <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesModel" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel()
```


### DataCloudflareAiGatewaysResultStripe <a name="DataCloudflareAiGatewaysResultStripe" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripe.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripe()
```


### DataCloudflareAiGatewaysResultStripeUsageEvents <a name="DataCloudflareAiGatewaysResultStripeUsageEvents" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEvents.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEvents()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiGatewaysResultDlpOutputReference <a name="DataCloudflareAiGatewaysResultDlpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList">DataCloudflareAiGatewaysResultDlpPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.profiles">profiles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlp">DataCloudflareAiGatewaysResultDlp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.policies"></a>

```python
policies: DataCloudflareAiGatewaysResultDlpPoliciesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList">DataCloudflareAiGatewaysResultDlpPoliciesList</a>

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.profiles"></a>

```python
profiles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultDlp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlp">DataCloudflareAiGatewaysResultDlp</a>

---


### DataCloudflareAiGatewaysResultDlpPoliciesList <a name="DataCloudflareAiGatewaysResultDlpPoliciesList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAiGatewaysResultDlpPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAiGatewaysResultDlpPoliciesOutputReference <a name="DataCloudflareAiGatewaysResultDlpPoliciesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.check">check</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.profiles">profiles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPolicies">DataCloudflareAiGatewaysResultDlpPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.check"></a>

```python
check: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.profiles"></a>

```python
profiles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultDlpPolicies
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpPolicies">DataCloudflareAiGatewaysResultDlpPolicies</a>

---


### DataCloudflareAiGatewaysResultGuardrailsOutputReference <a name="DataCloudflareAiGatewaysResultGuardrailsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference">DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.response">response</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference">DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrails">DataCloudflareAiGatewaysResultGuardrails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.prompt"></a>

```python
prompt: DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference">DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.response"></a>

```python
response: DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference">DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultGuardrails
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrails">DataCloudflareAiGatewaysResultGuardrails</a>

---


### DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference <a name="DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.p1">p1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s1">s1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s10">s10</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s11">s11</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s12">s12</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s13">s13</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s2">s2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s3">s3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s4">s4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s5">s5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s6">s6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s7">s7</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s8">s8</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s9">s9</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPrompt">DataCloudflareAiGatewaysResultGuardrailsPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.p1"></a>

```python
p1: str
```

- *Type:* str

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s1"></a>

```python
s1: str
```

- *Type:* str

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s10"></a>

```python
s10: str
```

- *Type:* str

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s11"></a>

```python
s11: str
```

- *Type:* str

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s12"></a>

```python
s12: str
```

- *Type:* str

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s13"></a>

```python
s13: str
```

- *Type:* str

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s2"></a>

```python
s2: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s3"></a>

```python
s3: str
```

- *Type:* str

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s4"></a>

```python
s4: str
```

- *Type:* str

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s5"></a>

```python
s5: str
```

- *Type:* str

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s6"></a>

```python
s6: str
```

- *Type:* str

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s7"></a>

```python
s7: str
```

- *Type:* str

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s8"></a>

```python
s8: str
```

- *Type:* str

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.s9"></a>

```python
s9: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPromptOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultGuardrailsPrompt
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsPrompt">DataCloudflareAiGatewaysResultGuardrailsPrompt</a>

---


### DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference <a name="DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.p1">p1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s1">s1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s10">s10</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s11">s11</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s12">s12</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s13">s13</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s2">s2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s3">s3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s4">s4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s5">s5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s6">s6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s7">s7</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s8">s8</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s9">s9</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponse">DataCloudflareAiGatewaysResultGuardrailsResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.p1"></a>

```python
p1: str
```

- *Type:* str

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s1"></a>

```python
s1: str
```

- *Type:* str

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s10"></a>

```python
s10: str
```

- *Type:* str

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s11"></a>

```python
s11: str
```

- *Type:* str

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s12"></a>

```python
s12: str
```

- *Type:* str

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s13"></a>

```python
s13: str
```

- *Type:* str

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s2"></a>

```python
s2: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s3"></a>

```python
s3: str
```

- *Type:* str

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s4"></a>

```python
s4: str
```

- *Type:* str

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s5"></a>

```python
s5: str
```

- *Type:* str

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s6"></a>

```python
s6: str
```

- *Type:* str

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s7"></a>

```python
s7: str
```

- *Type:* str

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s8"></a>

```python
s8: str
```

- *Type:* str

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.s9"></a>

```python
s9: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponseOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultGuardrailsResponse
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsResponse">DataCloudflareAiGatewaysResultGuardrailsResponse</a>

---


### DataCloudflareAiGatewaysResultList <a name="DataCloudflareAiGatewaysResultList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAiGatewaysResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAiGatewaysResultOtelList <a name="DataCloudflareAiGatewaysResultOtelList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAiGatewaysResultOtelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAiGatewaysResultOtelOutputReference <a name="DataCloudflareAiGatewaysResultOtelOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.headers">headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtel">DataCloudflareAiGatewaysResultOtel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.headers"></a>

```python
headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultOtel
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtel">DataCloudflareAiGatewaysResultOtel</a>

---


### DataCloudflareAiGatewaysResultOutputReference <a name="DataCloudflareAiGatewaysResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.authentication">authentication</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.cacheInvalidateOnUpdate">cache_invalidate_on_update</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.cacheTtl">cache_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.collectLogs">collect_logs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference">DataCloudflareAiGatewaysResultDlpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference">DataCloudflareAiGatewaysResultGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logManagement">log_management</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logManagementStrategy">log_management_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logpush">logpush</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logpushPublicKey">logpush_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.otel">otel</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList">DataCloudflareAiGatewaysResultOtelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingInterval">rate_limiting_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingLimit">rate_limiting_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingTechnique">rate_limiting_technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryBackoff">retry_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryDelay">retry_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryMaxAttempts">retry_max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.spendLimits">spend_limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference">DataCloudflareAiGatewaysResultSpendLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.storeId">store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference">DataCloudflareAiGatewaysResultStripeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.workersAiBillingMode">workers_ai_billing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.zdr">zdr</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResult">DataCloudflareAiGatewaysResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.authentication"></a>

```python
authentication: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_invalidate_on_update`<sup>Required</sup> <a name="cache_invalidate_on_update" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.cacheInvalidateOnUpdate"></a>

```python
cache_invalidate_on_update: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_ttl`<sup>Required</sup> <a name="cache_ttl" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.cacheTtl"></a>

```python
cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `collect_logs`<sup>Required</sup> <a name="collect_logs" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.collectLogs"></a>

```python
collect_logs: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dlp`<sup>Required</sup> <a name="dlp" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.dlp"></a>

```python
dlp: DataCloudflareAiGatewaysResultDlpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultDlpOutputReference">DataCloudflareAiGatewaysResultDlpOutputReference</a>

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.guardrails"></a>

```python
guardrails: DataCloudflareAiGatewaysResultGuardrailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultGuardrailsOutputReference">DataCloudflareAiGatewaysResultGuardrailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `log_management`<sup>Required</sup> <a name="log_management" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logManagement"></a>

```python
log_management: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_management_strategy`<sup>Required</sup> <a name="log_management_strategy" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logManagementStrategy"></a>

```python
log_management_strategy: str
```

- *Type:* str

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logpush"></a>

```python
logpush: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `logpush_public_key`<sup>Required</sup> <a name="logpush_public_key" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.logpushPublicKey"></a>

```python
logpush_public_key: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `otel`<sup>Required</sup> <a name="otel" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.otel"></a>

```python
otel: DataCloudflareAiGatewaysResultOtelList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOtelList">DataCloudflareAiGatewaysResultOtelList</a>

---

##### `rate_limiting_interval`<sup>Required</sup> <a name="rate_limiting_interval" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingInterval"></a>

```python
rate_limiting_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limiting_limit`<sup>Required</sup> <a name="rate_limiting_limit" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingLimit"></a>

```python
rate_limiting_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limiting_technique`<sup>Required</sup> <a name="rate_limiting_technique" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.rateLimitingTechnique"></a>

```python
rate_limiting_technique: str
```

- *Type:* str

---

##### `retry_backoff`<sup>Required</sup> <a name="retry_backoff" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryBackoff"></a>

```python
retry_backoff: str
```

- *Type:* str

---

##### `retry_delay`<sup>Required</sup> <a name="retry_delay" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryDelay"></a>

```python
retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_max_attempts`<sup>Required</sup> <a name="retry_max_attempts" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.retryMaxAttempts"></a>

```python
retry_max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spend_limits`<sup>Required</sup> <a name="spend_limits" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.spendLimits"></a>

```python
spend_limits: DataCloudflareAiGatewaysResultSpendLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference">DataCloudflareAiGatewaysResultSpendLimitsOutputReference</a>

---

##### `store_id`<sup>Required</sup> <a name="store_id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.storeId"></a>

```python
store_id: str
```

- *Type:* str

---

##### `stripe`<sup>Required</sup> <a name="stripe" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.stripe"></a>

```python
stripe: DataCloudflareAiGatewaysResultStripeOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference">DataCloudflareAiGatewaysResultStripeOutputReference</a>

---

##### `workers_ai_billing_mode`<sup>Required</sup> <a name="workers_ai_billing_mode" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.workersAiBillingMode"></a>

```python
workers_ai_billing_mode: str
```

- *Type:* str

---

##### `zdr`<sup>Required</sup> <a name="zdr" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.zdr"></a>

```python
zdr: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResult">DataCloudflareAiGatewaysResult</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList">DataCloudflareAiGatewaysResultSpendLimitsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimits">DataCloudflareAiGatewaysResultSpendLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.rules"></a>

```python
rules: DataCloudflareAiGatewaysResultSpendLimitsRulesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList">DataCloudflareAiGatewaysResultSpendLimitsRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultSpendLimits
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimits">DataCloudflareAiGatewaysResultSpendLimits</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider">DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider">DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProvider</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesList <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.get"></a>

```python
def get(
  key: str
) -> DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata">DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata">DataCloudflareAiGatewaysResultSpendLimitsRulesMetadata</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel">DataCloudflareAiGatewaysResultSpendLimitsRulesModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultSpendLimitsRulesModel
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModel">DataCloudflareAiGatewaysResultSpendLimitsRulesModel</a>

---


### DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference <a name="DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.aiGatewayProvider">ai_gateway_provider</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference">DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.limitType">limit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap">DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.model">model</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference">DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.technique">technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.window">window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRules">DataCloudflareAiGatewaysResultSpendLimitsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ai_gateway_provider`<sup>Required</sup> <a name="ai_gateway_provider" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.aiGatewayProvider"></a>

```python
ai_gateway_provider: DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference">DataCloudflareAiGatewaysResultSpendLimitsRulesAiGatewayProviderOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.metadata"></a>

```python
metadata: DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap">DataCloudflareAiGatewaysResultSpendLimitsRulesMetadataMap</a>

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.model"></a>

```python
model: DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference">DataCloudflareAiGatewaysResultSpendLimitsRulesModelOutputReference</a>

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.technique"></a>

```python
technique: str
```

- *Type:* str

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.window"></a>

```python
window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultSpendLimitsRules
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultSpendLimitsRules">DataCloudflareAiGatewaysResultSpendLimitsRules</a>

---


### DataCloudflareAiGatewaysResultStripeOutputReference <a name="DataCloudflareAiGatewaysResultStripeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.usageEvents">usage_events</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList">DataCloudflareAiGatewaysResultStripeUsageEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripe">DataCloudflareAiGatewaysResultStripe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `usage_events`<sup>Required</sup> <a name="usage_events" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.usageEvents"></a>

```python
usage_events: DataCloudflareAiGatewaysResultStripeUsageEventsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList">DataCloudflareAiGatewaysResultStripeUsageEventsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultStripe
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripe">DataCloudflareAiGatewaysResultStripe</a>

---


### DataCloudflareAiGatewaysResultStripeUsageEventsList <a name="DataCloudflareAiGatewaysResultStripeUsageEventsList" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference <a name="DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_gateways

dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEvents">DataCloudflareAiGatewaysResultStripeUsageEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiGatewaysResultStripeUsageEvents
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiGateways.DataCloudflareAiGatewaysResultStripeUsageEvents">DataCloudflareAiGatewaysResultStripeUsageEvents</a>

---




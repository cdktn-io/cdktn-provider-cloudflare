# `dataCloudflareAiSearchInstances` Submodule <a name="`dataCloudflareAiSearchInstances` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiSearchInstances <a name="DataCloudflareAiSearchInstances" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances cloudflare_ai_search_instances}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances(
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
  max_items: typing.Union[int, float] = None,
  search: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#account_id DataCloudflareAiSearchInstances#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.search">search</a></code> | <code>str</code> | Search by id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#account_id DataCloudflareAiSearchInstances#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#max_items DataCloudflareAiSearchInstances#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.Initializer.parameter.search"></a>

- *Type:* str

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#search DataCloudflareAiSearchInstances#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetSearch">reset_search</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.resetSearch"></a>

```python
def reset_search() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareAiSearchInstances resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareAiSearchInstances resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareAiSearchInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareAiSearchInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiSearchInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList">DataCloudflareAiSearchInstancesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.search">search</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.result"></a>

```python
result: DataCloudflareAiSearchInstancesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList">DataCloudflareAiSearchInstancesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.search"></a>

```python
search: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiSearchInstancesConfig <a name="DataCloudflareAiSearchInstancesConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None,
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#account_id DataCloudflareAiSearchInstances#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.search">search</a></code> | <code>str</code> | Search by id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#account_id DataCloudflareAiSearchInstances#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#max_items DataCloudflareAiSearchInstances#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/ai_search_instances#search DataCloudflareAiSearchInstances#search}

---

### DataCloudflareAiSearchInstancesResult <a name="DataCloudflareAiSearchInstancesResult" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResult()
```


### DataCloudflareAiSearchInstancesResultCustomMetadata <a name="DataCloudflareAiSearchInstancesResultCustomMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadata.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadata()
```


### DataCloudflareAiSearchInstancesResultMetadata <a name="DataCloudflareAiSearchInstancesResultMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadata.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadata()
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParams <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams()
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint()
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp()
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit()
```


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint()
```


### DataCloudflareAiSearchInstancesResultSourceParams <a name="DataCloudflareAiSearchInstancesResultSourceParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParams.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParams()
```


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler()
```


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions()
```


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiSearchInstancesResultCustomMetadataList <a name="DataCloudflareAiSearchInstancesResultCustomMetadataList" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference <a name="DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadata">DataCloudflareAiSearchInstancesResultCustomMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultCustomMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadata">DataCloudflareAiSearchInstancesResultCustomMetadata</a>

---


### DataCloudflareAiSearchInstancesResultList <a name="DataCloudflareAiSearchInstancesResultList" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAiSearchInstancesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAiSearchInstancesResultMetadataOutputReference <a name="DataCloudflareAiSearchInstancesResultMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.createdFromAisearchWizard">created_from_aisearch_wizard</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.workerDomain">worker_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadata">DataCloudflareAiSearchInstancesResultMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_from_aisearch_wizard`<sup>Required</sup> <a name="created_from_aisearch_wizard" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.createdFromAisearchWizard"></a>

```python
created_from_aisearch_wizard: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `worker_domain`<sup>Required</sup> <a name="worker_domain" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.workerDomain"></a>

```python
worker_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadata">DataCloudflareAiSearchInstancesResultMetadata</a>

---


### DataCloudflareAiSearchInstancesResultOutputReference <a name="DataCloudflareAiSearchInstancesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.accountTag">account_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.aiGatewayId">ai_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.aisearchModel">aisearch_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.cache">cache</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.cacheThreshold">cache_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunk">chunk</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunkOverlap">chunk_overlap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.customMetadata">custom_metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList">DataCloudflareAiSearchInstancesResultCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.embeddingModel">embedding_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.engineVersion">engine_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.hybridSearchEnabled">hybrid_search_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.lastActivity">last_activity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.maxNumResults">max_num_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference">DataCloudflareAiSearchInstancesResultMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.paused">paused</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.publicEndpointId">public_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.publicEndpointParams">public_endpoint_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.reranking">reranking</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rerankingModel">reranking_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rewriteModel">rewrite_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rewriteQuery">rewrite_query</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.scoreThreshold">score_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.sourceParams">source_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.summarization">summarization</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.summarizationModel">summarization_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptAisearch">system_prompt_aisearch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptIndexSummarization">system_prompt_index_summarization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptRewriteQuery">system_prompt_rewrite_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.tokenId">token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.vectorizeActiveNamespace">vectorize_active_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.vectorizeName">vectorize_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResult">DataCloudflareAiSearchInstancesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `account_tag`<sup>Required</sup> <a name="account_tag" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.accountTag"></a>

```python
account_tag: str
```

- *Type:* str

---

##### `ai_gateway_id`<sup>Required</sup> <a name="ai_gateway_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.aiGatewayId"></a>

```python
ai_gateway_id: str
```

- *Type:* str

---

##### `aisearch_model`<sup>Required</sup> <a name="aisearch_model" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.aisearchModel"></a>

```python
aisearch_model: str
```

- *Type:* str

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.cache"></a>

```python
cache: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_threshold`<sup>Required</sup> <a name="cache_threshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.cacheThreshold"></a>

```python
cache_threshold: str
```

- *Type:* str

---

##### `chunk`<sup>Required</sup> <a name="chunk" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunk"></a>

```python
chunk: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `chunk_overlap`<sup>Required</sup> <a name="chunk_overlap" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunkOverlap"></a>

```python
chunk_overlap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_size`<sup>Required</sup> <a name="chunk_size" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.customMetadata"></a>

```python
custom_metadata: DataCloudflareAiSearchInstancesResultCustomMetadataList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultCustomMetadataList">DataCloudflareAiSearchInstancesResultCustomMetadataList</a>

---

##### `embedding_model`<sup>Required</sup> <a name="embedding_model" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.embeddingModel"></a>

```python
embedding_model: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.enable"></a>

```python
enable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.engineVersion"></a>

```python
engine_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hybrid_search_enabled`<sup>Required</sup> <a name="hybrid_search_enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.hybridSearchEnabled"></a>

```python
hybrid_search_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `last_activity`<sup>Required</sup> <a name="last_activity" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.lastActivity"></a>

```python
last_activity: str
```

- *Type:* str

---

##### `max_num_results`<sup>Required</sup> <a name="max_num_results" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.maxNumResults"></a>

```python
max_num_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.metadata"></a>

```python
metadata: DataCloudflareAiSearchInstancesResultMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultMetadataOutputReference">DataCloudflareAiSearchInstancesResultMetadataOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.paused"></a>

```python
paused: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `public_endpoint_id`<sup>Required</sup> <a name="public_endpoint_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.publicEndpointId"></a>

```python
public_endpoint_id: str
```

- *Type:* str

---

##### `public_endpoint_params`<sup>Required</sup> <a name="public_endpoint_params" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.publicEndpointParams"></a>

```python
public_endpoint_params: DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference</a>

---

##### `reranking`<sup>Required</sup> <a name="reranking" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.reranking"></a>

```python
reranking: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `reranking_model`<sup>Required</sup> <a name="reranking_model" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rerankingModel"></a>

```python
reranking_model: str
```

- *Type:* str

---

##### `rewrite_model`<sup>Required</sup> <a name="rewrite_model" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rewriteModel"></a>

```python
rewrite_model: str
```

- *Type:* str

---

##### `rewrite_query`<sup>Required</sup> <a name="rewrite_query" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.rewriteQuery"></a>

```python
rewrite_query: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `score_threshold`<sup>Required</sup> <a name="score_threshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.scoreThreshold"></a>

```python
score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_params`<sup>Required</sup> <a name="source_params" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.sourceParams"></a>

```python
source_params: DataCloudflareAiSearchInstancesResultSourceParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `summarization`<sup>Required</sup> <a name="summarization" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.summarization"></a>

```python
summarization: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `summarization_model`<sup>Required</sup> <a name="summarization_model" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.summarizationModel"></a>

```python
summarization_model: str
```

- *Type:* str

---

##### `system_prompt_aisearch`<sup>Required</sup> <a name="system_prompt_aisearch" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptAisearch"></a>

```python
system_prompt_aisearch: str
```

- *Type:* str

---

##### `system_prompt_index_summarization`<sup>Required</sup> <a name="system_prompt_index_summarization" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptIndexSummarization"></a>

```python
system_prompt_index_summarization: str
```

- *Type:* str

---

##### `system_prompt_rewrite_query`<sup>Required</sup> <a name="system_prompt_rewrite_query" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.systemPromptRewriteQuery"></a>

```python
system_prompt_rewrite_query: str
```

- *Type:* str

---

##### `token_id`<sup>Required</sup> <a name="token_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.tokenId"></a>

```python
token_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vectorize_active_namespace`<sup>Required</sup> <a name="vectorize_active_namespace" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.vectorizeActiveNamespace"></a>

```python
vectorize_active_namespace: str
```

- *Type:* str

---

##### `vectorize_name`<sup>Required</sup> <a name="vectorize_name" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.vectorizeName"></a>

```python
vectorize_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResult">DataCloudflareAiSearchInstancesResult</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp">DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp">DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.authorizedHosts">authorized_hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">chat_completions_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.rateLimit">rate_limit</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.searchEndpoint">search_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams">DataCloudflareAiSearchInstancesResultPublicEndpointParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized_hosts`<sup>Required</sup> <a name="authorized_hosts" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```python
authorized_hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `chat_completions_endpoint`<sup>Required</sup> <a name="chat_completions_endpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```python
chat_completions_endpoint: DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `mcp`<sup>Required</sup> <a name="mcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.mcp"></a>

```python
mcp: DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference</a>

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.rateLimit"></a>

```python
rate_limit: DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference</a>

---

##### `search_endpoint`<sup>Required</sup> <a name="search_endpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```python
search_endpoint: DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultPublicEndpointParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParams">DataCloudflareAiSearchInstancesResultPublicEndpointParams</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.periodMs">period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.technique">technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_ms`<sup>Required</sup> <a name="period_ms" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```python
period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```python
technique: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit</a>

---


### DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference <a name="DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint</a>

---


### DataCloudflareAiSearchInstancesResultSourceParamsOutputReference <a name="DataCloudflareAiSearchInstancesResultSourceParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.excludeItems">exclude_items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.includeItems">include_items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.r2Jurisdiction">r2_jurisdiction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.webCrawler">web_crawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParams">DataCloudflareAiSearchInstancesResultSourceParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_items`<sup>Required</sup> <a name="exclude_items" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.excludeItems"></a>

```python
exclude_items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_items`<sup>Required</sup> <a name="include_items" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.includeItems"></a>

```python
include_items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `r2_jurisdiction`<sup>Required</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.r2Jurisdiction"></a>

```python
r2_jurisdiction: str
```

- *Type:* str

---

##### `web_crawler`<sup>Required</sup> <a name="web_crawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.webCrawler"></a>

```python
web_crawler: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultSourceParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParams">DataCloudflareAiSearchInstancesResultSourceParams</a>

---


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.parseOptions">parse_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.parseType">parse_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.storeOptions">store_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parse_options`<sup>Required</sup> <a name="parse_options" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```python
parse_options: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `parse_type`<sup>Required</sup> <a name="parse_type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```python
parse_type: str
```

- *Type:* str

---

##### `store_options`<sup>Required</sup> <a name="store_options" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```python
store_options: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler</a>

---


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">include_headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">include_images</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">specific_sitemaps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">use_browser_rendering</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_headers`<sup>Required</sup> <a name="include_headers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```python
include_headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `include_images`<sup>Required</sup> <a name="include_images" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```python
include_images: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `specific_sitemaps`<sup>Required</sup> <a name="specific_sitemaps" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```python
specific_sitemaps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_browser_rendering`<sup>Required</sup> <a name="use_browser_rendering" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```python
use_browser_rendering: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions</a>

---


### DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference <a name="DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instances

dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">r2_jurisdiction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">storage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `r2_jurisdiction`<sup>Required</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```python
r2_jurisdiction: str
```

- *Type:* str

---

##### `storage_id`<sup>Required</sup> <a name="storage_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```python
storage_id: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstances.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions</a>

---




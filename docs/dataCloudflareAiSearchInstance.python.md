# `dataCloudflareAiSearchInstance` Submodule <a name="`dataCloudflareAiSearchInstance` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiSearchInstance <a name="DataCloudflareAiSearchInstance" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance(
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
  filter: DataCloudflareAiSearchInstanceFilter = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Use your AI Search ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.Initializer.parameter.id"></a>

- *Type:* str

Use your AI Search ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#id DataCloudflareAiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.putFilter"></a>

```python
def put_filter(
  search: str = None
) -> None
```

###### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.putFilter.parameter.search"></a>

- *Type:* str

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#search DataCloudflareAiSearchInstance#search}

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareAiSearchInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareAiSearchInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareAiSearchInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareAiSearchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiSearchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aiGatewayId">ai_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aisearchModel">aisearch_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cache">cache</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cacheThreshold">cache_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkOverlap">chunk_overlap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.customMetadata">custom_metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList">DataCloudflareAiSearchInstanceCustomMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.embeddingModel">embedding_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference">DataCloudflareAiSearchInstanceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fusionMethod">fusion_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.hybridSearchEnabled">hybrid_search_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lastActivity">last_activity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.maxNumResults">max_num_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference">DataCloudflareAiSearchInstanceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.paused">paused</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointId">public_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointParams">public_endpoint_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.reranking">reranking</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rerankingModel">reranking_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.retrievalOptions">retrieval_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference">DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteModel">rewrite_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteQuery">rewrite_query</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.scoreThreshold">score_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.sourceParams">source_params</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference">DataCloudflareAiSearchInstanceSourceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tokenId">token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.vectorizeName">vectorize_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `ai_gateway_id`<sup>Required</sup> <a name="ai_gateway_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aiGatewayId"></a>

```python
ai_gateway_id: str
```

- *Type:* str

---

##### `aisearch_model`<sup>Required</sup> <a name="aisearch_model" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.aisearchModel"></a>

```python
aisearch_model: str
```

- *Type:* str

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cache"></a>

```python
cache: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_threshold`<sup>Required</sup> <a name="cache_threshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.cacheThreshold"></a>

```python
cache_threshold: str
```

- *Type:* str

---

##### `chunk_overlap`<sup>Required</sup> <a name="chunk_overlap" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkOverlap"></a>

```python
chunk_overlap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_size`<sup>Required</sup> <a name="chunk_size" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.customMetadata"></a>

```python
custom_metadata: DataCloudflareAiSearchInstanceCustomMetadataList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList">DataCloudflareAiSearchInstanceCustomMetadataList</a>

---

##### `embedding_model`<sup>Required</sup> <a name="embedding_model" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.embeddingModel"></a>

```python
embedding_model: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.enable"></a>

```python
enable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filter"></a>

```python
filter: DataCloudflareAiSearchInstanceFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference">DataCloudflareAiSearchInstanceFilterOutputReference</a>

---

##### `fusion_method`<sup>Required</sup> <a name="fusion_method" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.fusionMethod"></a>

```python
fusion_method: str
```

- *Type:* str

---

##### `hybrid_search_enabled`<sup>Required</sup> <a name="hybrid_search_enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.hybridSearchEnabled"></a>

```python
hybrid_search_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_activity`<sup>Required</sup> <a name="last_activity" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.lastActivity"></a>

```python
last_activity: str
```

- *Type:* str

---

##### `max_num_results`<sup>Required</sup> <a name="max_num_results" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.maxNumResults"></a>

```python
max_num_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.metadata"></a>

```python
metadata: DataCloudflareAiSearchInstanceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference">DataCloudflareAiSearchInstanceMetadataOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.paused"></a>

```python
paused: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `public_endpoint_id`<sup>Required</sup> <a name="public_endpoint_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointId"></a>

```python
public_endpoint_id: str
```

- *Type:* str

---

##### `public_endpoint_params`<sup>Required</sup> <a name="public_endpoint_params" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.publicEndpointParams"></a>

```python
public_endpoint_params: DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference</a>

---

##### `reranking`<sup>Required</sup> <a name="reranking" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.reranking"></a>

```python
reranking: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `reranking_model`<sup>Required</sup> <a name="reranking_model" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rerankingModel"></a>

```python
reranking_model: str
```

- *Type:* str

---

##### `retrieval_options`<sup>Required</sup> <a name="retrieval_options" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.retrievalOptions"></a>

```python
retrieval_options: DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference">DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference</a>

---

##### `rewrite_model`<sup>Required</sup> <a name="rewrite_model" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteModel"></a>

```python
rewrite_model: str
```

- *Type:* str

---

##### `rewrite_query`<sup>Required</sup> <a name="rewrite_query" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.rewriteQuery"></a>

```python
rewrite_query: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `score_threshold`<sup>Required</sup> <a name="score_threshold" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.scoreThreshold"></a>

```python
score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_params`<sup>Required</sup> <a name="source_params" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.sourceParams"></a>

```python
source_params: DataCloudflareAiSearchInstanceSourceParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference">DataCloudflareAiSearchInstanceSourceParamsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `token_id`<sup>Required</sup> <a name="token_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tokenId"></a>

```python
token_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vectorize_name`<sup>Required</sup> <a name="vectorize_name" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.vectorizeName"></a>

```python
vectorize_name: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareAiSearchInstanceFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiSearchInstanceConfig <a name="DataCloudflareAiSearchInstanceConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  filter: DataCloudflareAiSearchInstanceFilter = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.id">id</a></code> | <code>str</code> | Use your AI Search ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.filter"></a>

```python
filter: DataCloudflareAiSearchInstanceFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Use your AI Search ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#id DataCloudflareAiSearchInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareAiSearchInstanceCustomMetadata <a name="DataCloudflareAiSearchInstanceCustomMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata()
```


### DataCloudflareAiSearchInstanceFilter <a name="DataCloudflareAiSearchInstanceFilter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter(
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.search">search</a></code> | <code>str</code> | Search by id. |

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Search by id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/ai_search_instance#search DataCloudflareAiSearchInstance#search}

---

### DataCloudflareAiSearchInstanceMetadata <a name="DataCloudflareAiSearchInstanceMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata()
```


### DataCloudflareAiSearchInstancePublicEndpointParams <a name="DataCloudflareAiSearchInstancePublicEndpointParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams()
```


### DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint <a name="DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint()
```


### DataCloudflareAiSearchInstancePublicEndpointParamsMcp <a name="DataCloudflareAiSearchInstancePublicEndpointParamsMcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp()
```


### DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit <a name="DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit()
```


### DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint <a name="DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint()
```


### DataCloudflareAiSearchInstanceRetrievalOptions <a name="DataCloudflareAiSearchInstanceRetrievalOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions()
```


### DataCloudflareAiSearchInstanceSourceParams <a name="DataCloudflareAiSearchInstanceSourceParams" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams()
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawler <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler()
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions()
```


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiSearchInstanceCustomMetadataList <a name="DataCloudflareAiSearchInstanceCustomMetadataList" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAiSearchInstanceCustomMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAiSearchInstanceCustomMetadataOutputReference <a name="DataCloudflareAiSearchInstanceCustomMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata">DataCloudflareAiSearchInstanceCustomMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstanceCustomMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceCustomMetadata">DataCloudflareAiSearchInstanceCustomMetadata</a>

---


### DataCloudflareAiSearchInstanceFilterOutputReference <a name="DataCloudflareAiSearchInstanceFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareAiSearchInstanceFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceFilter">DataCloudflareAiSearchInstanceFilter</a>

---


### DataCloudflareAiSearchInstanceMetadataOutputReference <a name="DataCloudflareAiSearchInstanceMetadataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard">created_from_aisearch_wizard</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.workerDomain">worker_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata">DataCloudflareAiSearchInstanceMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_from_aisearch_wizard`<sup>Required</sup> <a name="created_from_aisearch_wizard" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.createdFromAisearchWizard"></a>

```python
created_from_aisearch_wizard: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `worker_domain`<sup>Required</sup> <a name="worker_domain" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.workerDomain"></a>

```python
worker_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstanceMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceMetadata">DataCloudflareAiSearchInstanceMetadata</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp">DataCloudflareAiSearchInstancePublicEndpointParamsMcp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancePublicEndpointParamsMcp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcp">DataCloudflareAiSearchInstancePublicEndpointParamsMcp</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts">authorized_hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint">chat_completions_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit">rate_limit</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint">search_endpoint</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams">DataCloudflareAiSearchInstancePublicEndpointParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized_hosts`<sup>Required</sup> <a name="authorized_hosts" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.authorizedHosts"></a>

```python
authorized_hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `chat_completions_endpoint`<sup>Required</sup> <a name="chat_completions_endpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.chatCompletionsEndpoint"></a>

```python
chat_completions_endpoint: DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `mcp`<sup>Required</sup> <a name="mcp" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.mcp"></a>

```python
mcp: DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference</a>

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.rateLimit"></a>

```python
rate_limit: DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference</a>

---

##### `search_endpoint`<sup>Required</sup> <a name="search_endpoint" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.searchEndpoint"></a>

```python
search_endpoint: DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancePublicEndpointParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParams">DataCloudflareAiSearchInstancePublicEndpointParams</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs">period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique">technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_ms`<sup>Required</sup> <a name="period_ms" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.periodMs"></a>

```python
period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.technique"></a>

```python
technique: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit">DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit</a>

---


### DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference <a name="DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint">DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint</a>

---


### DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference <a name="DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode">keyword_match_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions">DataCloudflareAiSearchInstanceRetrievalOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keyword_match_mode`<sup>Required</sup> <a name="keyword_match_mode" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.keywordMatchMode"></a>

```python
keyword_match_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstanceRetrievalOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceRetrievalOptions">DataCloudflareAiSearchInstanceRetrievalOptions</a>

---


### DataCloudflareAiSearchInstanceSourceParamsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.excludeItems">exclude_items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.includeItems">include_items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction">r2_jurisdiction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.webCrawler">web_crawler</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams">DataCloudflareAiSearchInstanceSourceParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_items`<sup>Required</sup> <a name="exclude_items" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.excludeItems"></a>

```python
exclude_items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_items`<sup>Required</sup> <a name="include_items" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.includeItems"></a>

```python
include_items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `r2_jurisdiction`<sup>Required</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.r2Jurisdiction"></a>

```python
r2_jurisdiction: str
```

- *Type:* str

---

##### `web_crawler`<sup>Required</sup> <a name="web_crawler" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.webCrawler"></a>

```python
web_crawler: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstanceSourceParams
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParams">DataCloudflareAiSearchInstanceSourceParams</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions">parse_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType">parse_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions">store_options</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler">DataCloudflareAiSearchInstanceSourceParamsWebCrawler</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parse_options`<sup>Required</sup> <a name="parse_options" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseOptions"></a>

```python
parse_options: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference</a>

---

##### `parse_type`<sup>Required</sup> <a name="parse_type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.parseType"></a>

```python
parse_type: str
```

- *Type:* str

---

##### `store_options`<sup>Required</sup> <a name="store_options" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.storeOptions"></a>

```python
store_options: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstanceSourceParamsWebCrawler
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawler">DataCloudflareAiSearchInstanceSourceParamsWebCrawler</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders">include_headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages">include_images</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps">specific_sitemaps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering">use_browser_rendering</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_headers`<sup>Required</sup> <a name="include_headers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeHeaders"></a>

```python
include_headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `include_images`<sup>Required</sup> <a name="include_images" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.includeImages"></a>

```python
include_images: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `specific_sitemaps`<sup>Required</sup> <a name="specific_sitemaps" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.specificSitemaps"></a>

```python
specific_sitemaps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_browser_rendering`<sup>Required</sup> <a name="use_browser_rendering" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.useBrowserRendering"></a>

```python
use_browser_rendering: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions</a>

---


### DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference <a name="DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_instance

dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction">r2_jurisdiction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId">storage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `r2_jurisdiction`<sup>Required</sup> <a name="r2_jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.r2Jurisdiction"></a>

```python
r2_jurisdiction: str
```

- *Type:* str

---

##### `storage_id`<sup>Required</sup> <a name="storage_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageId"></a>

```python
storage_id: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchInstance.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions">DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions</a>

---




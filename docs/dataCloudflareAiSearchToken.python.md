# `dataCloudflareAiSearchToken` Submodule <a name="`dataCloudflareAiSearchToken` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiSearchToken <a name="DataCloudflareAiSearchToken" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token cloudflare_ai_search_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_token

dataCloudflareAiSearchToken.DataCloudflareAiSearchToken(
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
  filter: DataCloudflareAiSearchTokenFilter = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#account_id DataCloudflareAiSearchToken#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter">DataCloudflareAiSearchTokenFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#filter DataCloudflareAiSearchToken#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#id DataCloudflareAiSearchToken#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#account_id DataCloudflareAiSearchToken#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter">DataCloudflareAiSearchTokenFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#filter DataCloudflareAiSearchToken#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#id DataCloudflareAiSearchToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.putFilter"></a>

```python
def put_filter(
  search: str = None
) -> None
```

###### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.putFilter.parameter.search"></a>

- *Type:* str

Filter tokens whose name contains this string (case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#search DataCloudflareAiSearchToken#search}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareAiSearchToken resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_token

dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_token

dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_token

dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_token

dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareAiSearchToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareAiSearchToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareAiSearchToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiSearchToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.cfApiId">cf_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference">DataCloudflareAiSearchTokenFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.legacy">legacy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter">DataCloudflareAiSearchTokenFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cf_api_id`<sup>Required</sup> <a name="cf_api_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.cfApiId"></a>

```python
cf_api_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.filter"></a>

```python
filter: DataCloudflareAiSearchTokenFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference">DataCloudflareAiSearchTokenFilterOutputReference</a>

---

##### `legacy`<sup>Required</sup> <a name="legacy" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.legacy"></a>

```python
legacy: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareAiSearchTokenFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter">DataCloudflareAiSearchTokenFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiSearchTokenConfig <a name="DataCloudflareAiSearchTokenConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_token

dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  filter: DataCloudflareAiSearchTokenFilter = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#account_id DataCloudflareAiSearchToken#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter">DataCloudflareAiSearchTokenFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#filter DataCloudflareAiSearchToken#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#id DataCloudflareAiSearchToken#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#account_id DataCloudflareAiSearchToken#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.filter"></a>

```python
filter: DataCloudflareAiSearchTokenFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter">DataCloudflareAiSearchTokenFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#filter DataCloudflareAiSearchToken#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#id DataCloudflareAiSearchToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareAiSearchTokenFilter <a name="DataCloudflareAiSearchTokenFilter" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_token

dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter(
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter.property.search">search</a></code> | <code>str</code> | Filter tokens whose name contains this string (case-insensitive). |

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Filter tokens whose name contains this string (case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_token#search DataCloudflareAiSearchToken#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiSearchTokenFilterOutputReference <a name="DataCloudflareAiSearchTokenFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_ai_search_token

dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter">DataCloudflareAiSearchTokenFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareAiSearchTokenFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSearchToken.DataCloudflareAiSearchTokenFilter">DataCloudflareAiSearchTokenFilter</a>

---




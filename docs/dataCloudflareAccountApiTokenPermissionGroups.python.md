# `dataCloudflareAccountApiTokenPermissionGroups` Submodule <a name="`dataCloudflareAccountApiTokenPermissionGroups` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountApiTokenPermissionGroups <a name="DataCloudflareAccountApiTokenPermissionGroups" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups cloudflare_account_api_token_permission_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_account_api_token_permission_groups

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups(
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
  name: str = None,
  scope: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.name">name</a></code> | <code>str</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.accountId"></a>

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#account_id DataCloudflareAccountApiTokenPermissionGroups#account_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.name"></a>

- *Type:* str

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#name DataCloudflareAccountApiTokenPermissionGroups#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.Initializer.parameter.scope"></a>

- *Type:* str

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#scope DataCloudflareAccountApiTokenPermissionGroups#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareAccountApiTokenPermissionGroups resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_account_api_token_permission_groups

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_account_api_token_permission_groups

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_account_api_token_permission_groups

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_account_api_token_permission_groups

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareAccountApiTokenPermissionGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareAccountApiTokenPermissionGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareAccountApiTokenPermissionGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountApiTokenPermissionGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.permissionGroups">permission_groups</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList">DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `permission_groups`<sup>Required</sup> <a name="permission_groups" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.permissionGroups"></a>

```python
permission_groups: DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList">DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountApiTokenPermissionGroupsConfig <a name="DataCloudflareAccountApiTokenPermissionGroupsConfig" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_account_api_token_permission_groups

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.name">name</a></code> | <code>str</code> | Filter by the name of the permission group. The value must be URL-encoded. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.scope">scope</a></code> | <code>str</code> | Filter by the scope of the permission group. The value must be URL-encoded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#account_id DataCloudflareAccountApiTokenPermissionGroups#account_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Filter by the name of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#name DataCloudflareAccountApiTokenPermissionGroups#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Filter by the scope of the permission group. The value must be URL-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_api_token_permission_groups#scope DataCloudflareAccountApiTokenPermissionGroups#scope}

---

### DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups <a name="DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_account_api_token_permission_groups

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList <a name="DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_account_api_token_permission_groups

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference <a name="DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_account_api_token_permission_groups

dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups">DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountApiTokenPermissionGroups.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups">DataCloudflareAccountApiTokenPermissionGroupsPermissionGroups</a>

---




# `dataCloudflareCustomPageAsset` Submodule <a name="`dataCloudflareCustomPageAsset` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomPageAsset <a name="DataCloudflareCustomPageAsset" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset cloudflare_custom_page_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_page_asset

dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_name: str,
  account_id: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.assetName">asset_name</a></code> | <code>str</code> | The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.assetName"></a>

- *Type:* str

The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#asset_name DataCloudflareCustomPageAsset#asset_name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.accountId"></a>

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#account_id DataCloudflareCustomPageAsset#account_id}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.Initializer.parameter.zoneId"></a>

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#zone_id DataCloudflareCustomPageAsset#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareCustomPageAsset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_page_asset

dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_page_asset

dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_page_asset

dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_page_asset

dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareCustomPageAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareCustomPageAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareCustomPageAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomPageAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.assetNameInput">asset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.assetName">asset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `asset_name_input`<sup>Optional</sup> <a name="asset_name_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.assetNameInput"></a>

```python
asset_name_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.assetName"></a>

```python
asset_name: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomPageAssetConfig <a name="DataCloudflareCustomPageAssetConfig" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_page_asset

dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_name: str,
  account_id: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.assetName">asset_name</a></code> | <code>str</code> | The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.assetName"></a>

```python
asset_name: str
```

- *Type:* str

The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#asset_name DataCloudflareCustomPageAsset#asset_name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#account_id DataCloudflareCustomPageAsset#account_id}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomPageAsset.DataCloudflareCustomPageAssetConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_page_asset#zone_id DataCloudflareCustomPageAsset#zone_id}

---




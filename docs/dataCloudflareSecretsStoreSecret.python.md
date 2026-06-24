# `dataCloudflareSecretsStoreSecret` Submodule <a name="`dataCloudflareSecretsStoreSecret` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSecretsStoreSecret <a name="DataCloudflareSecretsStoreSecret" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret cloudflare_secrets_store_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_secrets_store_secret

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret(
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
  store_id: str,
  filter: DataCloudflareSecretsStoreSecretFilter = None,
  secret_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.storeId">store_id</a></code> | <code>str</code> | Store Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#filter DataCloudflareSecretsStoreSecret#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | Secret identifier tag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.accountId"></a>

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#account_id DataCloudflareSecretsStoreSecret#account_id}

---

##### `store_id`<sup>Required</sup> <a name="store_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.storeId"></a>

- *Type:* str

Store Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#store_id DataCloudflareSecretsStoreSecret#store_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#filter DataCloudflareSecretsStoreSecret#filter}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.Initializer.parameter.secretId"></a>

- *Type:* str

Secret identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#secret_id DataCloudflareSecretsStoreSecret#secret_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetSecretId">reset_secret_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.putFilter"></a>

```python
def put_filter(
  direction: str = None,
  order: str = None,
  scopes: IResolvable | typing.List[typing.List[str]] = None,
  search: str = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.putFilter.parameter.direction"></a>

- *Type:* str

Direction to sort objects Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#direction DataCloudflareSecretsStoreSecret#direction}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.putFilter.parameter.order"></a>

- *Type:* str

Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#order DataCloudflareSecretsStoreSecret#order}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.putFilter.parameter.scopes"></a>

- *Type:* cdktn.IResolvable | typing.List[typing.List[str]]

Only secrets with the given scopes will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#scopes DataCloudflareSecretsStoreSecret#scopes}

---

###### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.putFilter.parameter.search"></a>

- *Type:* str

Search secrets using a filter string, filtering across name and comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#search DataCloudflareSecretsStoreSecret#search}

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareSecretsStoreSecret resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_secrets_store_secret

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_secrets_store_secret

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_secrets_store_secret

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_secrets_store_secret

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareSecretsStoreSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareSecretsStoreSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareSecretsStoreSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareSecretsStoreSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference">DataCloudflareSecretsStoreSecretFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.storeIdInput">store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.storeId">store_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.filter"></a>

```python
filter: DataCloudflareSecretsStoreSecretFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference">DataCloudflareSecretsStoreSecretFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareSecretsStoreSecretFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a>

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `store_id_input`<sup>Optional</sup> <a name="store_id_input" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.storeIdInput"></a>

```python
store_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `store_id`<sup>Required</sup> <a name="store_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.storeId"></a>

```python
store_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSecretsStoreSecretConfig <a name="DataCloudflareSecretsStoreSecretConfig" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_secrets_store_secret

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  store_id: str,
  filter: DataCloudflareSecretsStoreSecretFilter = None,
  secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.storeId">store_id</a></code> | <code>str</code> | Store Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#filter DataCloudflareSecretsStoreSecret#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.secretId">secret_id</a></code> | <code>str</code> | Secret identifier tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#account_id DataCloudflareSecretsStoreSecret#account_id}

---

##### `store_id`<sup>Required</sup> <a name="store_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.storeId"></a>

```python
store_id: str
```

- *Type:* str

Store Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#store_id DataCloudflareSecretsStoreSecret#store_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.filter"></a>

```python
filter: DataCloudflareSecretsStoreSecretFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#filter DataCloudflareSecretsStoreSecret#filter}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Secret identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#secret_id DataCloudflareSecretsStoreSecret#secret_id}

---

### DataCloudflareSecretsStoreSecretFilter <a name="DataCloudflareSecretsStoreSecretFilter" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_secrets_store_secret

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter(
  direction: str = None,
  order: str = None,
  scopes: IResolvable | typing.List[typing.List[str]] = None,
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.direction">direction</a></code> | <code>str</code> | Direction to sort objects Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.order">order</a></code> | <code>str</code> | Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.scopes">scopes</a></code> | <code>cdktn.IResolvable \| typing.List[typing.List[str]]</code> | Only secrets with the given scopes will be returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.search">search</a></code> | <code>str</code> | Search secrets using a filter string, filtering across name and comment. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction to sort objects Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#direction DataCloudflareSecretsStoreSecret#direction}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#order DataCloudflareSecretsStoreSecret#order}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.scopes"></a>

```python
scopes: IResolvable | typing.List[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.List[str]]

Only secrets with the given scopes will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#scopes DataCloudflareSecretsStoreSecret#scopes}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Search secrets using a filter string, filtering across name and comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secret#search DataCloudflareSecretsStoreSecret#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSecretsStoreSecretFilterOutputReference <a name="DataCloudflareSecretsStoreSecretFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_secrets_store_secret

dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.scopesInput">scopes_input</a></code> | <code>cdktn.IResolvable \| typing.List[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.scopes">scopes</a></code> | <code>cdktn.IResolvable \| typing.List[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.scopesInput"></a>

```python
scopes_input: IResolvable | typing.List[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.List[str]]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.scopes"></a>

```python
scopes: IResolvable | typing.List[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.List[str]]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareSecretsStoreSecretFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecret.DataCloudflareSecretsStoreSecretFilter">DataCloudflareSecretsStoreSecretFilter</a>

---




# `dataCloudflareCustomOriginTrustStore` Submodule <a name="`dataCloudflareCustomOriginTrustStore` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomOriginTrustStore <a name="DataCloudflareCustomOriginTrustStore" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store cloudflare_custom_origin_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_store

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  custom_origin_trust_store_id: str = None,
  filter: DataCloudflareCustomOriginTrustStoreFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.customOriginTrustStoreId">custom_origin_trust_store_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#filter DataCloudflareCustomOriginTrustStore#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#zone_id DataCloudflareCustomOriginTrustStore#zone_id}

---

##### `custom_origin_trust_store_id`<sup>Optional</sup> <a name="custom_origin_trust_store_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.customOriginTrustStoreId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#custom_origin_trust_store_id DataCloudflareCustomOriginTrustStore#custom_origin_trust_store_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#filter DataCloudflareCustomOriginTrustStore#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetCustomOriginTrustStoreId">reset_custom_origin_trust_store_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter"></a>

```python
def put_filter(
  limit: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None
) -> None
```

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#limit DataCloudflareCustomOriginTrustStore#limit}

---

###### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter.parameter.offset"></a>

- *Type:* typing.Union[int, float]

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#offset DataCloudflareCustomOriginTrustStore#offset}

---

##### `reset_custom_origin_trust_store_id` <a name="reset_custom_origin_trust_store_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetCustomOriginTrustStoreId"></a>

```python
def reset_custom_origin_trust_store_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareCustomOriginTrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_store

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_store

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_store

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_store

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareCustomOriginTrustStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareCustomOriginTrustStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareCustomOriginTrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomOriginTrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference">DataCloudflareCustomOriginTrustStoreFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.uploadedOn">uploaded_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreIdInput">custom_origin_trust_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreId">custom_origin_trust_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filter"></a>

```python
filter: DataCloudflareCustomOriginTrustStoreFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference">DataCloudflareCustomOriginTrustStoreFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `uploaded_on`<sup>Required</sup> <a name="uploaded_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.uploadedOn"></a>

```python
uploaded_on: str
```

- *Type:* str

---

##### `custom_origin_trust_store_id_input`<sup>Optional</sup> <a name="custom_origin_trust_store_id_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreIdInput"></a>

```python
custom_origin_trust_store_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareCustomOriginTrustStoreFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `custom_origin_trust_store_id`<sup>Required</sup> <a name="custom_origin_trust_store_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreId"></a>

```python
custom_origin_trust_store_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomOriginTrustStoreConfig <a name="DataCloudflareCustomOriginTrustStoreConfig" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_store

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  custom_origin_trust_store_id: str = None,
  filter: DataCloudflareCustomOriginTrustStoreFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.customOriginTrustStoreId">custom_origin_trust_store_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#filter DataCloudflareCustomOriginTrustStore#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#zone_id DataCloudflareCustomOriginTrustStore#zone_id}

---

##### `custom_origin_trust_store_id`<sup>Optional</sup> <a name="custom_origin_trust_store_id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.customOriginTrustStoreId"></a>

```python
custom_origin_trust_store_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#custom_origin_trust_store_id DataCloudflareCustomOriginTrustStore#custom_origin_trust_store_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.filter"></a>

```python
filter: DataCloudflareCustomOriginTrustStoreFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#filter DataCloudflareCustomOriginTrustStore#filter}.

---

### DataCloudflareCustomOriginTrustStoreFilter <a name="DataCloudflareCustomOriginTrustStoreFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_store

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter(
  limit: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset the results. |

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#limit DataCloudflareCustomOriginTrustStore#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#offset DataCloudflareCustomOriginTrustStore#offset}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomOriginTrustStoreFilterOutputReference <a name="DataCloudflareCustomOriginTrustStoreFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_custom_origin_trust_store

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetOffset">reset_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_offset` <a name="reset_offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetOffset"></a>

```python
def reset_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareCustomOriginTrustStoreFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

---




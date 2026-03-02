# `dataCloudflareClientCertificate` Submodule <a name="`dataCloudflareClientCertificate` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareClientCertificate <a name="DataCloudflareClientCertificate" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate cloudflare_client_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificate(
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
  client_certificate_id: str = None,
  filter: DataCloudflareClientCertificateFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter">DataCloudflareClientCertificateFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#filter DataCloudflareClientCertificate#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#zone_id DataCloudflareClientCertificate#zone_id}

---

##### `client_certificate_id`<sup>Optional</sup> <a name="client_certificate_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.clientCertificateId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#client_certificate_id DataCloudflareClientCertificate#client_certificate_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter">DataCloudflareClientCertificateFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#filter DataCloudflareClientCertificate#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.resetClientCertificateId">reset_client_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.putFilter"></a>

```python
def put_filter(
  limit: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None,
  status: str = None
) -> None
```

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.putFilter.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#limit DataCloudflareClientCertificate#limit}

---

###### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.putFilter.parameter.offset"></a>

- *Type:* typing.Union[int, float]

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#offset DataCloudflareClientCertificate#offset}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.putFilter.parameter.status"></a>

- *Type:* str

Client Certitifcate Status to filter results by. Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#status DataCloudflareClientCertificate#status}

---

##### `reset_client_certificate_id` <a name="reset_client_certificate_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.resetClientCertificateId"></a>

```python
def reset_client_certificate_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareClientCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareClientCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareClientCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareClientCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareClientCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.certificateAuthority">certificate_authority</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference">DataCloudflareClientCertificateCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.csr">csr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference">DataCloudflareClientCertificateFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.fingerprintSha256">fingerprint_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.issuedOn">issued_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.ski">ski</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.validityDays">validity_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.clientCertificateIdInput">client_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter">DataCloudflareClientCertificateFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_authority`<sup>Required</sup> <a name="certificate_authority" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.certificateAuthority"></a>

```python
certificate_authority: DataCloudflareClientCertificateCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference">DataCloudflareClientCertificateCertificateAuthorityOutputReference</a>

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.csr"></a>

```python
csr: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.filter"></a>

```python
filter: DataCloudflareClientCertificateFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference">DataCloudflareClientCertificateFilterOutputReference</a>

---

##### `fingerprint_sha256`<sup>Required</sup> <a name="fingerprint_sha256" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.fingerprintSha256"></a>

```python
fingerprint_sha256: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issued_on`<sup>Required</sup> <a name="issued_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.issuedOn"></a>

```python
issued_on: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `ski`<sup>Required</sup> <a name="ski" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.ski"></a>

```python
ski: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `validity_days`<sup>Required</sup> <a name="validity_days" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.validityDays"></a>

```python
validity_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_certificate_id_input`<sup>Optional</sup> <a name="client_certificate_id_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.clientCertificateIdInput"></a>

```python
client_certificate_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareClientCertificateFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter">DataCloudflareClientCertificateFilter</a>

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `client_certificate_id`<sup>Required</sup> <a name="client_certificate_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.clientCertificateId"></a>

```python
client_certificate_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareClientCertificateCertificateAuthority <a name="DataCloudflareClientCertificateCertificateAuthority" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthority.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthority()
```


### DataCloudflareClientCertificateConfig <a name="DataCloudflareClientCertificateConfig" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  client_certificate_id: str = None,
  filter: DataCloudflareClientCertificateFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter">DataCloudflareClientCertificateFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#filter DataCloudflareClientCertificate#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#zone_id DataCloudflareClientCertificate#zone_id}

---

##### `client_certificate_id`<sup>Optional</sup> <a name="client_certificate_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.clientCertificateId"></a>

```python
client_certificate_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#client_certificate_id DataCloudflareClientCertificate#client_certificate_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateConfig.property.filter"></a>

```python
filter: DataCloudflareClientCertificateFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter">DataCloudflareClientCertificateFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#filter DataCloudflareClientCertificate#filter}.

---

### DataCloudflareClientCertificateFilter <a name="DataCloudflareClientCertificateFilter" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter(
  limit: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset the results. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter.property.status">status</a></code> | <code>str</code> | Client Certitifcate Status to filter results by. Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked". |

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#limit DataCloudflareClientCertificate#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#offset DataCloudflareClientCertificate#offset}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter.property.status"></a>

```python
status: str
```

- *Type:* str

Client Certitifcate Status to filter results by. Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificate#status DataCloudflareClientCertificate#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareClientCertificateCertificateAuthorityOutputReference <a name="DataCloudflareClientCertificateCertificateAuthorityOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthority">DataCloudflareClientCertificateCertificateAuthority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthorityOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareClientCertificateCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateCertificateAuthority">DataCloudflareClientCertificateCertificateAuthority</a>

---


### DataCloudflareClientCertificateFilterOutputReference <a name="DataCloudflareClientCertificateFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificate

dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.resetOffset">reset_offset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_offset` <a name="reset_offset" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.resetOffset"></a>

```python
def reset_offset() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter">DataCloudflareClientCertificateFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareClientCertificateFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificate.DataCloudflareClientCertificateFilter">DataCloudflareClientCertificateFilter</a>

---




# `dataCloudflareClientCertificates` Submodule <a name="`dataCloudflareClientCertificates` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareClientCertificates <a name="DataCloudflareClientCertificates" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates cloudflare_client_certificates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificates(
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
  limit: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset the results. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.status">status</a></code> | <code>str</code> | Client Certitifcate Status to filter results by. Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#zone_id DataCloudflareClientCertificates#zone_id}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#limit DataCloudflareClientCertificates#limit}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#max_items DataCloudflareClientCertificates#max_items}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.offset"></a>

- *Type:* typing.Union[int, float]

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#offset DataCloudflareClientCertificates#offset}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.Initializer.parameter.status"></a>

- *Type:* str

Client Certitifcate Status to filter results by. Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#status DataCloudflareClientCertificates#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetOffset">reset_offset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_offset` <a name="reset_offset" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetOffset"></a>

```python
def reset_offset() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareClientCertificates resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareClientCertificates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareClientCertificates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareClientCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareClientCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList">DataCloudflareClientCertificatesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.result"></a>

```python
result: DataCloudflareClientCertificatesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList">DataCloudflareClientCertificatesResultList</a>

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareClientCertificatesConfig <a name="DataCloudflareClientCertificatesConfig" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  limit: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Offset the results. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.status">status</a></code> | <code>str</code> | Client Certitifcate Status to filter results by. Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#zone_id DataCloudflareClientCertificates#zone_id}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#limit DataCloudflareClientCertificates#limit}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#max_items DataCloudflareClientCertificates#max_items}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#offset DataCloudflareClientCertificates#offset}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Client Certitifcate Status to filter results by. Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/client_certificates#status DataCloudflareClientCertificates#status}

---

### DataCloudflareClientCertificatesResult <a name="DataCloudflareClientCertificatesResult" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificatesResult()
```


### DataCloudflareClientCertificatesResultCertificateAuthority <a name="DataCloudflareClientCertificatesResultCertificateAuthority" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthority.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthority()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference <a name="DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthority">DataCloudflareClientCertificatesResultCertificateAuthority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareClientCertificatesResultCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthority">DataCloudflareClientCertificatesResultCertificateAuthority</a>

---


### DataCloudflareClientCertificatesResultList <a name="DataCloudflareClientCertificatesResultList" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareClientCertificatesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareClientCertificatesResultOutputReference <a name="DataCloudflareClientCertificatesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_client_certificates

dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.certificateAuthority">certificate_authority</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference">DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.csr">csr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.fingerprintSha256">fingerprint_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.issuedOn">issued_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.ski">ski</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.validityDays">validity_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResult">DataCloudflareClientCertificatesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_authority`<sup>Required</sup> <a name="certificate_authority" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.certificateAuthority"></a>

```python
certificate_authority: DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference">DataCloudflareClientCertificatesResultCertificateAuthorityOutputReference</a>

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.csr"></a>

```python
csr: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `fingerprint_sha256`<sup>Required</sup> <a name="fingerprint_sha256" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.fingerprintSha256"></a>

```python
fingerprint_sha256: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issued_on`<sup>Required</sup> <a name="issued_on" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.issuedOn"></a>

```python
issued_on: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `ski`<sup>Required</sup> <a name="ski" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.ski"></a>

```python
ski: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `validity_days`<sup>Required</sup> <a name="validity_days" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.validityDays"></a>

```python
validity_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareClientCertificatesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareClientCertificates.DataCloudflareClientCertificatesResult">DataCloudflareClientCertificatesResult</a>

---




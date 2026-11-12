# `dataCloudflareZeroTrustCwsBasicAuthCredential` Submodule <a name="`dataCloudflareZeroTrustCwsBasicAuthCredential` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsBasicAuthCredential <a name="DataCloudflareZeroTrustCwsBasicAuthCredential" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential cloudflare_zero_trust_cws_basic_auth_credential}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_basic_auth_credential

dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential(
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
  credential_id: str = None,
  filter: DataCloudflareZeroTrustCwsBasicAuthCredentialFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.credentialId">credential_id</a></code> | <code>str</code> | ID of the credential to retrieve. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter">DataCloudflareZeroTrustCwsBasicAuthCredentialFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#filter DataCloudflareZeroTrustCwsBasicAuthCredential#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#account_id DataCloudflareZeroTrustCwsBasicAuthCredential#account_id}

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.credentialId"></a>

- *Type:* str

ID of the credential to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#credential_id DataCloudflareZeroTrustCwsBasicAuthCredential#credential_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter">DataCloudflareZeroTrustCwsBasicAuthCredentialFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#filter DataCloudflareZeroTrustCwsBasicAuthCredential#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.putFilter"></a>

```python
def put_filter(
  deployment_id: str = None,
  direction: str = None,
  order: str = None,
  username: str = None
) -> None
```

###### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.putFilter.parameter.deploymentId"></a>

- *Type:* str

Filter to credentials attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#deployment_id DataCloudflareZeroTrustCwsBasicAuthCredential#deployment_id}

---

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.putFilter.parameter.direction"></a>

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#direction DataCloudflareZeroTrustCwsBasicAuthCredential#direction}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.putFilter.parameter.order"></a>

- *Type:* str

Field to order results by (default: created_at) Available values: "username", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#order DataCloudflareZeroTrustCwsBasicAuthCredential#order}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.putFilter.parameter.username"></a>

- *Type:* str

Filter by username (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#username DataCloudflareZeroTrustCwsBasicAuthCredential#username}

---

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthCredential resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_basic_auth_credential

dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_basic_auth_credential

dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_basic_auth_credential

dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_basic_auth_credential

dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthCredential resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustCwsBasicAuthCredential to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustCwsBasicAuthCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsBasicAuthCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference">DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter">DataCloudflareZeroTrustCwsBasicAuthCredentialFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.filter"></a>

```python
filter: DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference">DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareZeroTrustCwsBasicAuthCredentialFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter">DataCloudflareZeroTrustCwsBasicAuthCredentialFilter</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsBasicAuthCredentialConfig <a name="DataCloudflareZeroTrustCwsBasicAuthCredentialConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_basic_auth_credential

dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  credential_id: str = None,
  filter: DataCloudflareZeroTrustCwsBasicAuthCredentialFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.credentialId">credential_id</a></code> | <code>str</code> | ID of the credential to retrieve. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter">DataCloudflareZeroTrustCwsBasicAuthCredentialFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#filter DataCloudflareZeroTrustCwsBasicAuthCredential#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#account_id DataCloudflareZeroTrustCwsBasicAuthCredential#account_id}

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

ID of the credential to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#credential_id DataCloudflareZeroTrustCwsBasicAuthCredential#credential_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialConfig.property.filter"></a>

```python
filter: DataCloudflareZeroTrustCwsBasicAuthCredentialFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter">DataCloudflareZeroTrustCwsBasicAuthCredentialFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#filter DataCloudflareZeroTrustCwsBasicAuthCredential#filter}.

---

### DataCloudflareZeroTrustCwsBasicAuthCredentialFilter <a name="DataCloudflareZeroTrustCwsBasicAuthCredentialFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_basic_auth_credential

dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter(
  deployment_id: str = None,
  direction: str = None,
  order: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter.property.deploymentId">deployment_id</a></code> | <code>str</code> | Filter to credentials attached to this deployment. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter.property.direction">direction</a></code> | <code>str</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter.property.order">order</a></code> | <code>str</code> | Field to order results by (default: created_at) Available values: "username", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter.property.username">username</a></code> | <code>str</code> | Filter by username (case-insensitive substring match). |

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Filter to credentials attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#deployment_id DataCloudflareZeroTrustCwsBasicAuthCredential#deployment_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#direction DataCloudflareZeroTrustCwsBasicAuthCredential#direction}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order results by (default: created_at) Available values: "username", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#order DataCloudflareZeroTrustCwsBasicAuthCredential#order}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter.property.username"></a>

```python
username: str
```

- *Type:* str

Filter by username (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credential#username DataCloudflareZeroTrustCwsBasicAuthCredential#username}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference <a name="DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_basic_auth_credential

dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resetDeploymentId">reset_deployment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deployment_id` <a name="reset_deployment_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resetDeploymentId"></a>

```python
def reset_deployment_id() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter">DataCloudflareZeroTrustCwsBasicAuthCredentialFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareZeroTrustCwsBasicAuthCredentialFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredential.DataCloudflareZeroTrustCwsBasicAuthCredentialFilter">DataCloudflareZeroTrustCwsBasicAuthCredentialFilter</a>

---




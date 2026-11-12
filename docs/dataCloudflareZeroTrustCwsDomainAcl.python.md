# `dataCloudflareZeroTrustCwsDomainAcl` Submodule <a name="`dataCloudflareZeroTrustCwsDomainAcl` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsDomainAcl <a name="DataCloudflareZeroTrustCwsDomainAcl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl cloudflare_zero_trust_cws_domain_acl}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl(
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
  domain_acl_id: str = None,
  filter: DataCloudflareZeroTrustCwsDomainAclFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.domainAclId">domain_acl_id</a></code> | <code>str</code> | ID of the domain ACL to retrieve. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter">DataCloudflareZeroTrustCwsDomainAclFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#filter DataCloudflareZeroTrustCwsDomainAcl#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#account_id DataCloudflareZeroTrustCwsDomainAcl#account_id}

---

##### `domain_acl_id`<sup>Optional</sup> <a name="domain_acl_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.domainAclId"></a>

- *Type:* str

ID of the domain ACL to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#domain_acl_id DataCloudflareZeroTrustCwsDomainAcl#domain_acl_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter">DataCloudflareZeroTrustCwsDomainAclFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#filter DataCloudflareZeroTrustCwsDomainAcl#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.resetDomainAclId">reset_domain_acl_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.putFilter"></a>

```python
def put_filter(
  deployment_id: str = None,
  direction: str = None,
  name: str = None,
  order: str = None
) -> None
```

###### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.putFilter.parameter.deploymentId"></a>

- *Type:* str

Filter to domain ACLs attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#deployment_id DataCloudflareZeroTrustCwsDomainAcl#deployment_id}

---

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.putFilter.parameter.direction"></a>

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#direction DataCloudflareZeroTrustCwsDomainAcl#direction}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.putFilter.parameter.name"></a>

- *Type:* str

Filter by domain ACL name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#name DataCloudflareZeroTrustCwsDomainAcl#name}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.putFilter.parameter.order"></a>

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#order DataCloudflareZeroTrustCwsDomainAcl#order}

---

##### `reset_domain_acl_id` <a name="reset_domain_acl_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.resetDomainAclId"></a>

```python
def reset_domain_acl_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsDomainAcl resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsDomainAcl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustCwsDomainAcl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustCwsDomainAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsDomainAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList">DataCloudflareZeroTrustCwsDomainAclEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference">DataCloudflareZeroTrustCwsDomainAclFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.domainAclIdInput">domain_acl_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter">DataCloudflareZeroTrustCwsDomainAclFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.domainAclId">domain_acl_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.entries"></a>

```python
entries: DataCloudflareZeroTrustCwsDomainAclEntriesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList">DataCloudflareZeroTrustCwsDomainAclEntriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.filter"></a>

```python
filter: DataCloudflareZeroTrustCwsDomainAclFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference">DataCloudflareZeroTrustCwsDomainAclFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `domain_acl_id_input`<sup>Optional</sup> <a name="domain_acl_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.domainAclIdInput"></a>

```python
domain_acl_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareZeroTrustCwsDomainAclFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter">DataCloudflareZeroTrustCwsDomainAclFilter</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `domain_acl_id`<sup>Required</sup> <a name="domain_acl_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.domainAclId"></a>

```python
domain_acl_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsDomainAclConfig <a name="DataCloudflareZeroTrustCwsDomainAclConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  domain_acl_id: str = None,
  filter: DataCloudflareZeroTrustCwsDomainAclFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.domainAclId">domain_acl_id</a></code> | <code>str</code> | ID of the domain ACL to retrieve. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter">DataCloudflareZeroTrustCwsDomainAclFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#filter DataCloudflareZeroTrustCwsDomainAcl#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#account_id DataCloudflareZeroTrustCwsDomainAcl#account_id}

---

##### `domain_acl_id`<sup>Optional</sup> <a name="domain_acl_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.domainAclId"></a>

```python
domain_acl_id: str
```

- *Type:* str

ID of the domain ACL to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#domain_acl_id DataCloudflareZeroTrustCwsDomainAcl#domain_acl_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclConfig.property.filter"></a>

```python
filter: DataCloudflareZeroTrustCwsDomainAclFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter">DataCloudflareZeroTrustCwsDomainAclFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#filter DataCloudflareZeroTrustCwsDomainAcl#filter}.

---

### DataCloudflareZeroTrustCwsDomainAclEntries <a name="DataCloudflareZeroTrustCwsDomainAclEntries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntries.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntries()
```


### DataCloudflareZeroTrustCwsDomainAclFilter <a name="DataCloudflareZeroTrustCwsDomainAclFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter(
  deployment_id: str = None,
  direction: str = None,
  name: str = None,
  order: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter.property.deploymentId">deployment_id</a></code> | <code>str</code> | Filter to domain ACLs attached to this deployment. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter.property.direction">direction</a></code> | <code>str</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter.property.name">name</a></code> | <code>str</code> | Filter by domain ACL name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter.property.order">order</a></code> | <code>str</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Filter to domain ACLs attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#deployment_id DataCloudflareZeroTrustCwsDomainAcl#deployment_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#direction DataCloudflareZeroTrustCwsDomainAcl#direction}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Filter by domain ACL name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#name DataCloudflareZeroTrustCwsDomainAcl#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_domain_acl#order DataCloudflareZeroTrustCwsDomainAcl#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsDomainAclEntriesList <a name="DataCloudflareZeroTrustCwsDomainAclEntriesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference <a name="DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntries">DataCloudflareZeroTrustCwsDomainAclEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustCwsDomainAclEntries
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclEntries">DataCloudflareZeroTrustCwsDomainAclEntries</a>

---


### DataCloudflareZeroTrustCwsDomainAclFilterOutputReference <a name="DataCloudflareZeroTrustCwsDomainAclFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_domain_acl

dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resetDeploymentId">reset_deployment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deployment_id` <a name="reset_deployment_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resetDeploymentId"></a>

```python
def reset_deployment_id() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter">DataCloudflareZeroTrustCwsDomainAclFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareZeroTrustCwsDomainAclFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDomainAcl.DataCloudflareZeroTrustCwsDomainAclFilter">DataCloudflareZeroTrustCwsDomainAclFilter</a>

---




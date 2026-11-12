# `dataCloudflareZeroTrustCasbFindingType` Submodule <a name="`dataCloudflareZeroTrustCasbFindingType` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbFindingType <a name="DataCloudflareZeroTrustCasbFindingType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType(
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
  filter: DataCloudflareZeroTrustCasbFindingTypeFilter = None,
  finding_type_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.findingTypeId">finding_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}.

---

##### `finding_type_id`<sup>Optional</sup> <a name="finding_type_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.findingTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFindingTypeId">reset_finding_type_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter"></a>

```python
def put_filter(
  direction: str = None,
  max_updated_at: str = None,
  min_updated_at: str = None,
  order: str = None,
  origins: typing.List[str] = None,
  quarantined: bool | IResolvable = None,
  search: str = None,
  severities: typing.List[str] = None,
  types: typing.List[str] = None,
  vendors: typing.List[str] = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.direction"></a>

- *Type:* str

Sort direction for the primary field.

Defaults to 'desc'.
Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#direction DataCloudflareZeroTrustCasbFindingType#direction}

---

###### `max_updated_at`<sup>Optional</sup> <a name="max_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.maxUpdatedAt"></a>

- *Type:* str

Return only finding types updated at or before this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#max_updated_at DataCloudflareZeroTrustCasbFindingType#max_updated_at}

---

###### `min_updated_at`<sup>Optional</sup> <a name="min_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.minUpdatedAt"></a>

- *Type:* str

Return only finding types updated at or after this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#min_updated_at DataCloudflareZeroTrustCasbFindingType#min_updated_at}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.order"></a>

- *Type:* str

Field to sort by (case-insensitive).

Defaults to 'created'.
Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
Ascending order: type Content then Posture; origin custom then system;
severity Low, Medium, High, Critical.
Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#order DataCloudflareZeroTrustCasbFindingType#order}

---

###### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.origins"></a>

- *Type:* typing.List[str]

Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#origins DataCloudflareZeroTrustCasbFindingType#origins}

---

###### `quarantined`<sup>Optional</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.quarantined"></a>

- *Type:* bool | cdktn.IResolvable

When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#quarantined DataCloudflareZeroTrustCasbFindingType#quarantined}

---

###### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.search"></a>

- *Type:* str

Filter finding types by name or ID (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#search DataCloudflareZeroTrustCasbFindingType#search}

---

###### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.severities"></a>

- *Type:* typing.List[str]

Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#severities DataCloudflareZeroTrustCasbFindingType#severities}

---

###### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.types"></a>

- *Type:* typing.List[str]

Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#types DataCloudflareZeroTrustCasbFindingType#types}

---

###### `vendors`<sup>Optional</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.vendors"></a>

- *Type:* typing.List[str]

Filter finding types by vendor.

Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#vendors DataCloudflareZeroTrustCasbFindingType#vendors}

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_finding_type_id` <a name="reset_finding_type_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFindingTypeId"></a>

```python
def reset_finding_type_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustCasbFindingType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustCasbFindingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbFindingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.appliesToAllIntegrations">applies_to_all_integrations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetClass">asset_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetVendor">asset_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.category">category</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference">DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.integrationIds">integration_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.matchCount">match_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.quarantined">quarantined</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeIdInput">finding_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeId">finding_type_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `applies_to_all_integrations`<sup>Required</sup> <a name="applies_to_all_integrations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.appliesToAllIntegrations"></a>

```python
applies_to_all_integrations: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `asset_class`<sup>Required</sup> <a name="asset_class" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetClass"></a>

```python
asset_class: str
```

- *Type:* str

---

##### `asset_vendor`<sup>Required</sup> <a name="asset_vendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetVendor"></a>

```python
asset_vendor: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.category"></a>

```python
category: DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filter"></a>

```python
filter: DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference">DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_ids`<sup>Required</sup> <a name="integration_ids" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.integrationIds"></a>

```python
integration_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_count`<sup>Required</sup> <a name="match_count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.matchCount"></a>

```python
match_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.quarantined"></a>

```python
quarantined: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareZeroTrustCasbFindingTypeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---

##### `finding_type_id_input`<sup>Optional</sup> <a name="finding_type_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeIdInput"></a>

```python
finding_type_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `finding_type_id`<sup>Required</sup> <a name="finding_type_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeId"></a>

```python
finding_type_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbFindingTypeCategory <a name="DataCloudflareZeroTrustCasbFindingTypeCategory" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory()
```


### DataCloudflareZeroTrustCasbFindingTypeConfig <a name="DataCloudflareZeroTrustCasbFindingTypeConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  filter: DataCloudflareZeroTrustCasbFindingTypeFilter = None,
  finding_type_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.findingTypeId">finding_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.filter"></a>

```python
filter: DataCloudflareZeroTrustCasbFindingTypeFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}.

---

##### `finding_type_id`<sup>Optional</sup> <a name="finding_type_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.findingTypeId"></a>

```python
finding_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}.

---

### DataCloudflareZeroTrustCasbFindingTypeFilter <a name="DataCloudflareZeroTrustCasbFindingTypeFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter(
  direction: str = None,
  max_updated_at: str = None,
  min_updated_at: str = None,
  order: str = None,
  origins: typing.List[str] = None,
  quarantined: bool | IResolvable = None,
  search: str = None,
  severities: typing.List[str] = None,
  types: typing.List[str] = None,
  vendors: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.direction">direction</a></code> | <code>str</code> | Sort direction for the primary field. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.maxUpdatedAt">max_updated_at</a></code> | <code>str</code> | Return only finding types updated at or before this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.minUpdatedAt">min_updated_at</a></code> | <code>str</code> | Return only finding types updated at or after this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.order">order</a></code> | <code>str</code> | Field to sort by (case-insensitive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.origins">origins</a></code> | <code>typing.List[str]</code> | Filter finding types by origin. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.quarantined">quarantined</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.search">search</a></code> | <code>str</code> | Filter finding types by name or ID (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.severities">severities</a></code> | <code>typing.List[str]</code> | Filter finding types by severity. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.types">types</a></code> | <code>typing.List[str]</code> | Filter finding types by category type. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.vendors">vendors</a></code> | <code>typing.List[str]</code> | Filter finding types by vendor. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sort direction for the primary field.

Defaults to 'desc'.
Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#direction DataCloudflareZeroTrustCasbFindingType#direction}

---

##### `max_updated_at`<sup>Optional</sup> <a name="max_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.maxUpdatedAt"></a>

```python
max_updated_at: str
```

- *Type:* str

Return only finding types updated at or before this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#max_updated_at DataCloudflareZeroTrustCasbFindingType#max_updated_at}

---

##### `min_updated_at`<sup>Optional</sup> <a name="min_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.minUpdatedAt"></a>

```python
min_updated_at: str
```

- *Type:* str

Return only finding types updated at or after this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#min_updated_at DataCloudflareZeroTrustCasbFindingType#min_updated_at}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Field to sort by (case-insensitive).

Defaults to 'created'.
Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
Ascending order: type Content then Posture; origin custom then system;
severity Low, Medium, High, Critical.
Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#order DataCloudflareZeroTrustCasbFindingType#order}

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.origins"></a>

```python
origins: typing.List[str]
```

- *Type:* typing.List[str]

Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#origins DataCloudflareZeroTrustCasbFindingType#origins}

---

##### `quarantined`<sup>Optional</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.quarantined"></a>

```python
quarantined: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#quarantined DataCloudflareZeroTrustCasbFindingType#quarantined}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Filter finding types by name or ID (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#search DataCloudflareZeroTrustCasbFindingType#search}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#severities DataCloudflareZeroTrustCasbFindingType#severities}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#types DataCloudflareZeroTrustCasbFindingType#types}

---

##### `vendors`<sup>Optional</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.vendors"></a>

```python
vendors: typing.List[str]
```

- *Type:* typing.List[str]

Filter finding types by vendor.

Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#vendors DataCloudflareZeroTrustCasbFindingType#vendors}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.observation">observation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory">DataCloudflareZeroTrustCasbFindingTypeCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `observation`<sup>Required</sup> <a name="observation" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.observation"></a>

```python
observation: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustCasbFindingTypeCategory
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory">DataCloudflareZeroTrustCasbFindingTypeCategory</a>

---


### DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_casb_finding_type

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMaxUpdatedAt">reset_max_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMinUpdatedAt">reset_min_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrigins">reset_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetQuarantined">reset_quarantined</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSeverities">reset_severities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetTypes">reset_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetVendors">reset_vendors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_max_updated_at` <a name="reset_max_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMaxUpdatedAt"></a>

```python
def reset_max_updated_at() -> None
```

##### `reset_min_updated_at` <a name="reset_min_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMinUpdatedAt"></a>

```python
def reset_min_updated_at() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_origins` <a name="reset_origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrigins"></a>

```python
def reset_origins() -> None
```

##### `reset_quarantined` <a name="reset_quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetQuarantined"></a>

```python
def reset_quarantined() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_severities` <a name="reset_severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSeverities"></a>

```python
def reset_severities() -> None
```

##### `reset_types` <a name="reset_types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetTypes"></a>

```python
def reset_types() -> None
```

##### `reset_vendors` <a name="reset_vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetVendors"></a>

```python
def reset_vendors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAtInput">max_updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAtInput">min_updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.originsInput">origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantinedInput">quarantined_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severitiesInput">severities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.typesInput">types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendorsInput">vendors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAt">max_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAt">min_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.origins">origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantined">quarantined</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severities">severities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendors">vendors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `max_updated_at_input`<sup>Optional</sup> <a name="max_updated_at_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAtInput"></a>

```python
max_updated_at_input: str
```

- *Type:* str

---

##### `min_updated_at_input`<sup>Optional</sup> <a name="min_updated_at_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAtInput"></a>

```python
min_updated_at_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `origins_input`<sup>Optional</sup> <a name="origins_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.originsInput"></a>

```python
origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quarantined_input`<sup>Optional</sup> <a name="quarantined_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantinedInput"></a>

```python
quarantined_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `severities_input`<sup>Optional</sup> <a name="severities_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severitiesInput"></a>

```python
severities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.typesInput"></a>

```python
types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vendors_input`<sup>Optional</sup> <a name="vendors_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendorsInput"></a>

```python
vendors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `max_updated_at`<sup>Required</sup> <a name="max_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAt"></a>

```python
max_updated_at: str
```

- *Type:* str

---

##### `min_updated_at`<sup>Required</sup> <a name="min_updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAt"></a>

```python
min_updated_at: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.origins"></a>

```python
origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantined"></a>

```python
quarantined: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vendors`<sup>Required</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendors"></a>

```python
vendors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareZeroTrustCasbFindingTypeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---




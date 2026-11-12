# `dataCloudflareZeroTrustCwsPolicies` Submodule <a name="`dataCloudflareZeroTrustCwsPolicies` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsPolicies <a name="DataCloudflareZeroTrustCwsPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies cloudflare_zero_trust_cws_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policies

dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies(
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
  direction: str = None,
  max_items: typing.Union[int, float] = None,
  name: str = None,
  order: str = None,
  package_path: str = None,
  policy_set_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.name">name</a></code> | <code>str</code> | Filter by policy name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.order">order</a></code> | <code>str</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.packagePath">package_path</a></code> | <code>str</code> | Filter by package path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.policySetId">policy_set_id</a></code> | <code>str</code> | Filter to policies attached to (members of) this policy set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#account_id DataCloudflareZeroTrustCwsPolicies#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.direction"></a>

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#direction DataCloudflareZeroTrustCwsPolicies#direction}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#max_items DataCloudflareZeroTrustCwsPolicies#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.name"></a>

- *Type:* str

Filter by policy name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#name DataCloudflareZeroTrustCwsPolicies#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.order"></a>

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#order DataCloudflareZeroTrustCwsPolicies#order}

---

##### `package_path`<sup>Optional</sup> <a name="package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.packagePath"></a>

- *Type:* str

Filter by package path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#package_path DataCloudflareZeroTrustCwsPolicies#package_path}

---

##### `policy_set_id`<sup>Optional</sup> <a name="policy_set_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.Initializer.parameter.policySetId"></a>

- *Type:* str

Filter to policies attached to (members of) this policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#policy_set_id DataCloudflareZeroTrustCwsPolicies#policy_set_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetPackagePath">reset_package_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetPolicySetId">reset_policy_set_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_package_path` <a name="reset_package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetPackagePath"></a>

```python
def reset_package_path() -> None
```

##### `reset_policy_set_id` <a name="reset_policy_set_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.resetPolicySetId"></a>

```python
def reset_policy_set_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policies

dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policies

dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policies

dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policies

dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustCwsPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustCwsPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList">DataCloudflareZeroTrustCwsPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.packagePathInput">package_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.policySetIdInput">policy_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.packagePath">package_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.policySetId">policy_set_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.result"></a>

```python
result: DataCloudflareZeroTrustCwsPoliciesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList">DataCloudflareZeroTrustCwsPoliciesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `package_path_input`<sup>Optional</sup> <a name="package_path_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.packagePathInput"></a>

```python
package_path_input: str
```

- *Type:* str

---

##### `policy_set_id_input`<sup>Optional</sup> <a name="policy_set_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.policySetIdInput"></a>

```python
policy_set_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `package_path`<sup>Required</sup> <a name="package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.packagePath"></a>

```python
package_path: str
```

- *Type:* str

---

##### `policy_set_id`<sup>Required</sup> <a name="policy_set_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.policySetId"></a>

```python
policy_set_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsPoliciesConfig <a name="DataCloudflareZeroTrustCwsPoliciesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policies

dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  direction: str = None,
  max_items: typing.Union[int, float] = None,
  name: str = None,
  order: str = None,
  package_path: str = None,
  policy_set_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.direction">direction</a></code> | <code>str</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.name">name</a></code> | <code>str</code> | Filter by policy name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.order">order</a></code> | <code>str</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.packagePath">package_path</a></code> | <code>str</code> | Filter by package path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.policySetId">policy_set_id</a></code> | <code>str</code> | Filter to policies attached to (members of) this policy set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#account_id DataCloudflareZeroTrustCwsPolicies#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#direction DataCloudflareZeroTrustCwsPolicies#direction}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#max_items DataCloudflareZeroTrustCwsPolicies#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Filter by policy name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#name DataCloudflareZeroTrustCwsPolicies#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#order DataCloudflareZeroTrustCwsPolicies#order}

---

##### `package_path`<sup>Optional</sup> <a name="package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.packagePath"></a>

```python
package_path: str
```

- *Type:* str

Filter by package path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#package_path DataCloudflareZeroTrustCwsPolicies#package_path}

---

##### `policy_set_id`<sup>Optional</sup> <a name="policy_set_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesConfig.property.policySetId"></a>

```python
policy_set_id: str
```

- *Type:* str

Filter to policies attached to (members of) this policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policies#policy_set_id DataCloudflareZeroTrustCwsPolicies#policy_set_id}

---

### DataCloudflareZeroTrustCwsPoliciesResult <a name="DataCloudflareZeroTrustCwsPoliciesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policies

dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsPoliciesResultList <a name="DataCloudflareZeroTrustCwsPoliciesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policies

dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustCwsPoliciesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustCwsPoliciesResultOutputReference <a name="DataCloudflareZeroTrustCwsPoliciesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policies

dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.entrypoint">entrypoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.packagePath">package_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.regoSource">rego_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResult">DataCloudflareZeroTrustCwsPoliciesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.entrypoint"></a>

```python
entrypoint: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `package_path`<sup>Required</sup> <a name="package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.packagePath"></a>

```python
package_path: str
```

- *Type:* str

---

##### `rego_source`<sup>Required</sup> <a name="rego_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.regoSource"></a>

```python
rego_source: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustCwsPoliciesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicies.DataCloudflareZeroTrustCwsPoliciesResult">DataCloudflareZeroTrustCwsPoliciesResult</a>

---




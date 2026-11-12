# `dataCloudflareZeroTrustCwsPolicy` Submodule <a name="`dataCloudflareZeroTrustCwsPolicy` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsPolicy <a name="DataCloudflareZeroTrustCwsPolicy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy cloudflare_zero_trust_cws_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policy

dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy(
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
  find_one_by: DataCloudflareZeroTrustCwsPolicyFindOneBy = None,
  policy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.findOneBy">find_one_by</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#find_one_by DataCloudflareZeroTrustCwsPolicy#find_one_by}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | ID of the policy to retrieve. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#account_id DataCloudflareZeroTrustCwsPolicy#account_id}

---

##### `find_one_by`<sup>Optional</sup> <a name="find_one_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.findOneBy"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#find_one_by DataCloudflareZeroTrustCwsPolicy#find_one_by}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.Initializer.parameter.policyId"></a>

- *Type:* str

ID of the policy to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#policy_id DataCloudflareZeroTrustCwsPolicy#policy_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy">put_find_one_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetFindOneBy">reset_find_one_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetPolicyId">reset_policy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_find_one_by` <a name="put_find_one_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy"></a>

```python
def put_find_one_by(
  direction: str = None,
  name: str = None,
  order: str = None,
  package_path: str = None,
  policy_set_id: str = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy.parameter.direction"></a>

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#direction DataCloudflareZeroTrustCwsPolicy#direction}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy.parameter.name"></a>

- *Type:* str

Filter by policy name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#name DataCloudflareZeroTrustCwsPolicy#name}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy.parameter.order"></a>

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#order DataCloudflareZeroTrustCwsPolicy#order}

---

###### `package_path`<sup>Optional</sup> <a name="package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy.parameter.packagePath"></a>

- *Type:* str

Filter by package path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#package_path DataCloudflareZeroTrustCwsPolicy#package_path}

---

###### `policy_set_id`<sup>Optional</sup> <a name="policy_set_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.putFindOneBy.parameter.policySetId"></a>

- *Type:* str

Filter to policies attached to (members of) this policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#policy_set_id DataCloudflareZeroTrustCwsPolicy#policy_set_id}

---

##### `reset_find_one_by` <a name="reset_find_one_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetFindOneBy"></a>

```python
def reset_find_one_by() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policy

dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policy

dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policy

dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policy

dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustCwsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustCwsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.entrypoint">entrypoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.findOneBy">find_one_by</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference">DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.packagePath">package_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.regoSource">rego_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.findOneByInput">find_one_by_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.entrypoint"></a>

```python
entrypoint: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `find_one_by`<sup>Required</sup> <a name="find_one_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.findOneBy"></a>

```python
find_one_by: DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference">DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `package_path`<sup>Required</sup> <a name="package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.packagePath"></a>

```python
package_path: str
```

- *Type:* str

---

##### `rego_source`<sup>Required</sup> <a name="rego_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.regoSource"></a>

```python
rego_source: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `find_one_by_input`<sup>Optional</sup> <a name="find_one_by_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.findOneByInput"></a>

```python
find_one_by_input: IResolvable | DataCloudflareZeroTrustCwsPolicyFindOneBy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a>

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsPolicyConfig <a name="DataCloudflareZeroTrustCwsPolicyConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policy

dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  find_one_by: DataCloudflareZeroTrustCwsPolicyFindOneBy = None,
  policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.findOneBy">find_one_by</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#find_one_by DataCloudflareZeroTrustCwsPolicy#find_one_by}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.policyId">policy_id</a></code> | <code>str</code> | ID of the policy to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#account_id DataCloudflareZeroTrustCwsPolicy#account_id}

---

##### `find_one_by`<sup>Optional</sup> <a name="find_one_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.findOneBy"></a>

```python
find_one_by: DataCloudflareZeroTrustCwsPolicyFindOneBy
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#find_one_by DataCloudflareZeroTrustCwsPolicy#find_one_by}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

ID of the policy to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#policy_id DataCloudflareZeroTrustCwsPolicy#policy_id}

---

### DataCloudflareZeroTrustCwsPolicyFindOneBy <a name="DataCloudflareZeroTrustCwsPolicyFindOneBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policy

dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy(
  direction: str = None,
  name: str = None,
  order: str = None,
  package_path: str = None,
  policy_set_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.direction">direction</a></code> | <code>str</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.name">name</a></code> | <code>str</code> | Filter by policy name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.order">order</a></code> | <code>str</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.packagePath">package_path</a></code> | <code>str</code> | Filter by package path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.policySetId">policy_set_id</a></code> | <code>str</code> | Filter to policies attached to (members of) this policy set. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#direction DataCloudflareZeroTrustCwsPolicy#direction}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.name"></a>

```python
name: str
```

- *Type:* str

Filter by policy name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#name DataCloudflareZeroTrustCwsPolicy#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#order DataCloudflareZeroTrustCwsPolicy#order}

---

##### `package_path`<sup>Optional</sup> <a name="package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.packagePath"></a>

```python
package_path: str
```

- *Type:* str

Filter by package path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#package_path DataCloudflareZeroTrustCwsPolicy#package_path}

---

##### `policy_set_id`<sup>Optional</sup> <a name="policy_set_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy.property.policySetId"></a>

```python
policy_set_id: str
```

- *Type:* str

Filter to policies attached to (members of) this policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy#policy_set_id DataCloudflareZeroTrustCwsPolicy#policy_set_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference <a name="DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_policy

dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetPackagePath">reset_package_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetPolicySetId">reset_policy_set_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_package_path` <a name="reset_package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetPackagePath"></a>

```python
def reset_package_path() -> None
```

##### `reset_policy_set_id` <a name="reset_policy_set_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.resetPolicySetId"></a>

```python
def reset_policy_set_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.packagePathInput">package_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.policySetIdInput">policy_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.packagePath">package_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.policySetId">policy_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `package_path_input`<sup>Optional</sup> <a name="package_path_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.packagePathInput"></a>

```python
package_path_input: str
```

- *Type:* str

---

##### `policy_set_id_input`<sup>Optional</sup> <a name="policy_set_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.policySetIdInput"></a>

```python
policy_set_id_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `package_path`<sup>Required</sup> <a name="package_path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.packagePath"></a>

```python
package_path: str
```

- *Type:* str

---

##### `policy_set_id`<sup>Required</sup> <a name="policy_set_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.policySetId"></a>

```python
policy_set_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneByOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareZeroTrustCwsPolicyFindOneBy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicy.DataCloudflareZeroTrustCwsPolicyFindOneBy">DataCloudflareZeroTrustCwsPolicyFindOneBy</a>

---




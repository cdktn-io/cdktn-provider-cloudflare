# `dataCloudflareEmailSecurityAllowPolicy` Submodule <a name="`dataCloudflareEmailSecurityAllowPolicy` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityAllowPolicy <a name="DataCloudflareEmailSecurityAllowPolicy" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy cloudflare_email_security_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_allow_policy

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy(
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
  filter: DataCloudflareEmailSecurityAllowPolicyFilter = None,
  policy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Allow policy identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#account_id DataCloudflareEmailSecurityAllowPolicy#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.policyId"></a>

- *Type:* str

Allow policy identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#policy_id DataCloudflareEmailSecurityAllowPolicy#policy_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetPolicyId">reset_policy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter"></a>

```python
def put_filter(
  direction: str = None,
  is_acceptable_sender: bool | IResolvable = None,
  is_exempt_recipient: bool | IResolvable = None,
  is_trusted_sender: bool | IResolvable = None,
  order: str = None,
  pattern: str = None,
  pattern_type: str = None,
  search: str = None,
  verify_sender: bool | IResolvable = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.direction"></a>

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#direction DataCloudflareEmailSecurityAllowPolicy#direction}

---

###### `is_acceptable_sender`<sup>Optional</sup> <a name="is_acceptable_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.isAcceptableSender"></a>

- *Type:* bool | cdktn.IResolvable

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicy#is_acceptable_sender}

---

###### `is_exempt_recipient`<sup>Optional</sup> <a name="is_exempt_recipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.isExemptRecipient"></a>

- *Type:* bool | cdktn.IResolvable

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicy#is_exempt_recipient}

---

###### `is_trusted_sender`<sup>Optional</sup> <a name="is_trusted_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.isTrustedSender"></a>

- *Type:* bool | cdktn.IResolvable

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_trusted_sender DataCloudflareEmailSecurityAllowPolicy#is_trusted_sender}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.order"></a>

- *Type:* str

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#order DataCloudflareEmailSecurityAllowPolicy#order}

---

###### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.pattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}.

---

###### `pattern_type`<sup>Optional</sup> <a name="pattern_type" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.patternType"></a>

- *Type:* str

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern_type DataCloudflareEmailSecurityAllowPolicy#pattern_type}

---

###### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.search"></a>

- *Type:* str

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#search DataCloudflareEmailSecurityAllowPolicy#search}

---

###### `verify_sender`<sup>Optional</sup> <a name="verify_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.verifySender"></a>

- *Type:* bool | cdktn.IResolvable

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#verify_sender DataCloudflareEmailSecurityAllowPolicy#verify_sender}

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_allow_policy

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_allow_policy

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_allow_policy

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_allow_policy

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareEmailSecurityAllowPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareEmailSecurityAllowPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityAllowPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference">DataCloudflareEmailSecurityAllowPolicyFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isAcceptableSender">is_acceptable_sender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isExemptRecipient">is_exempt_recipient</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRecipient">is_recipient</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRegex">is_regex</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSender">is_sender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSpoof">is_spoof</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isTrustedSender">is_trusted_sender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.patternType">pattern_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.verifySender">verify_sender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filter"></a>

```python
filter: DataCloudflareEmailSecurityAllowPolicyFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference">DataCloudflareEmailSecurityAllowPolicyFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_acceptable_sender`<sup>Required</sup> <a name="is_acceptable_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isAcceptableSender"></a>

```python
is_acceptable_sender: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_exempt_recipient`<sup>Required</sup> <a name="is_exempt_recipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isExemptRecipient"></a>

```python
is_exempt_recipient: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_recipient`<sup>Required</sup> <a name="is_recipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRecipient"></a>

```python
is_recipient: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_regex`<sup>Required</sup> <a name="is_regex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRegex"></a>

```python
is_regex: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_sender`<sup>Required</sup> <a name="is_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSender"></a>

```python
is_sender: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_spoof`<sup>Required</sup> <a name="is_spoof" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSpoof"></a>

```python
is_spoof: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_trusted_sender`<sup>Required</sup> <a name="is_trusted_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isTrustedSender"></a>

```python
is_trusted_sender: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `pattern_type`<sup>Required</sup> <a name="pattern_type" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.patternType"></a>

```python
pattern_type: str
```

- *Type:* str

---

##### `verify_sender`<sup>Required</sup> <a name="verify_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.verifySender"></a>

```python
verify_sender: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareEmailSecurityAllowPolicyFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityAllowPolicyConfig <a name="DataCloudflareEmailSecurityAllowPolicyConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_allow_policy

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  filter: DataCloudflareEmailSecurityAllowPolicyFilter = None,
  policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.policyId">policy_id</a></code> | <code>str</code> | Allow policy identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#account_id DataCloudflareEmailSecurityAllowPolicy#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.filter"></a>

```python
filter: DataCloudflareEmailSecurityAllowPolicyFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Allow policy identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#policy_id DataCloudflareEmailSecurityAllowPolicy#policy_id}

---

### DataCloudflareEmailSecurityAllowPolicyFilter <a name="DataCloudflareEmailSecurityAllowPolicyFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_allow_policy

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter(
  direction: str = None,
  is_acceptable_sender: bool | IResolvable = None,
  is_exempt_recipient: bool | IResolvable = None,
  is_trusted_sender: bool | IResolvable = None,
  order: str = None,
  pattern: str = None,
  pattern_type: str = None,
  search: str = None,
  verify_sender: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.direction">direction</a></code> | <code>str</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isAcceptableSender">is_acceptable_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isExemptRecipient">is_exempt_recipient</a></code> | <code>bool \| cdktn.IResolvable</code> | Filter to show only policies where messages to the recipient bypass all detections. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isTrustedSender">is_trusted_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Filter to show only policies where messages from the sender bypass all detections and link following. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.order">order</a></code> | <code>str</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.patternType">pattern_type</a></code> | <code>str</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.search">search</a></code> | <code>str</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.verifySender">verify_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#direction DataCloudflareEmailSecurityAllowPolicy#direction}

---

##### `is_acceptable_sender`<sup>Optional</sup> <a name="is_acceptable_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isAcceptableSender"></a>

```python
is_acceptable_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `is_exempt_recipient`<sup>Optional</sup> <a name="is_exempt_recipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isExemptRecipient"></a>

```python
is_exempt_recipient: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `is_trusted_sender`<sup>Optional</sup> <a name="is_trusted_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isTrustedSender"></a>

```python
is_trusted_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_trusted_sender DataCloudflareEmailSecurityAllowPolicy#is_trusted_sender}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#order DataCloudflareEmailSecurityAllowPolicy#order}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}.

---

##### `pattern_type`<sup>Optional</sup> <a name="pattern_type" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.patternType"></a>

```python
pattern_type: str
```

- *Type:* str

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern_type DataCloudflareEmailSecurityAllowPolicy#pattern_type}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#search DataCloudflareEmailSecurityAllowPolicy#search}

---

##### `verify_sender`<sup>Optional</sup> <a name="verify_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.verifySender"></a>

```python
verify_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#verify_sender DataCloudflareEmailSecurityAllowPolicy#verify_sender}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityAllowPolicyFilterOutputReference <a name="DataCloudflareEmailSecurityAllowPolicyFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_allow_policy

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsAcceptableSender">reset_is_acceptable_sender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsExemptRecipient">reset_is_exempt_recipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsTrustedSender">reset_is_trusted_sender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPatternType">reset_pattern_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetVerifySender">reset_verify_sender</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_is_acceptable_sender` <a name="reset_is_acceptable_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsAcceptableSender"></a>

```python
def reset_is_acceptable_sender() -> None
```

##### `reset_is_exempt_recipient` <a name="reset_is_exempt_recipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsExemptRecipient"></a>

```python
def reset_is_exempt_recipient() -> None
```

##### `reset_is_trusted_sender` <a name="reset_is_trusted_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsTrustedSender"></a>

```python
def reset_is_trusted_sender() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_pattern_type` <a name="reset_pattern_type" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPatternType"></a>

```python
def reset_pattern_type() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_verify_sender` <a name="reset_verify_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetVerifySender"></a>

```python
def reset_verify_sender() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSenderInput">is_acceptable_sender_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipientInput">is_exempt_recipient_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSenderInput">is_trusted_sender_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternTypeInput">pattern_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySenderInput">verify_sender_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSender">is_acceptable_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipient">is_exempt_recipient</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSender">is_trusted_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternType">pattern_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySender">verify_sender</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `is_acceptable_sender_input`<sup>Optional</sup> <a name="is_acceptable_sender_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSenderInput"></a>

```python
is_acceptable_sender_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_exempt_recipient_input`<sup>Optional</sup> <a name="is_exempt_recipient_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipientInput"></a>

```python
is_exempt_recipient_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_trusted_sender_input`<sup>Optional</sup> <a name="is_trusted_sender_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSenderInput"></a>

```python
is_trusted_sender_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `pattern_type_input`<sup>Optional</sup> <a name="pattern_type_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternTypeInput"></a>

```python
pattern_type_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `verify_sender_input`<sup>Optional</sup> <a name="verify_sender_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySenderInput"></a>

```python
verify_sender_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `is_acceptable_sender`<sup>Required</sup> <a name="is_acceptable_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSender"></a>

```python
is_acceptable_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_exempt_recipient`<sup>Required</sup> <a name="is_exempt_recipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipient"></a>

```python
is_exempt_recipient: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_trusted_sender`<sup>Required</sup> <a name="is_trusted_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSender"></a>

```python
is_trusted_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `pattern_type`<sup>Required</sup> <a name="pattern_type" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternType"></a>

```python
pattern_type: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `verify_sender`<sup>Required</sup> <a name="verify_sender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySender"></a>

```python
verify_sender: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareEmailSecurityAllowPolicyFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

---




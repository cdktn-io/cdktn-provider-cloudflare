# `dataCloudflareEmailSecurityDomain` Submodule <a name="`dataCloudflareEmailSecurityDomain` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityDomain <a name="DataCloudflareEmailSecurityDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain cloudflare_email_security_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain(
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
  domain_id: str = None,
  filter: DataCloudflareEmailSecurityDomainFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Domain identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#account_id DataCloudflareEmailSecurityDomain#account_id}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.domainId"></a>

- *Type:* str

Domain identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain_id DataCloudflareEmailSecurityDomain#domain_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter"></a>

```python
def put_filter(
  active_delivery_mode: str = None,
  allowed_delivery_mode: str = None,
  direction: str = None,
  domain: typing.List[str] = None,
  integration_id: str = None,
  order: str = None,
  search: str = None,
  status: str = None
) -> None
```

###### `active_delivery_mode`<sup>Optional</sup> <a name="active_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.activeDeliveryMode"></a>

- *Type:* str

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#active_delivery_mode DataCloudflareEmailSecurityDomain#active_delivery_mode}

---

###### `allowed_delivery_mode`<sup>Optional</sup> <a name="allowed_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.allowedDeliveryMode"></a>

- *Type:* str

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#allowed_delivery_mode DataCloudflareEmailSecurityDomain#allowed_delivery_mode}

---

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.direction"></a>

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#direction DataCloudflareEmailSecurityDomain#direction}

---

###### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.domain"></a>

- *Type:* typing.List[str]

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain DataCloudflareEmailSecurityDomain#domain}

---

###### `integration_id`<sup>Optional</sup> <a name="integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.integrationId"></a>

- *Type:* str

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#integration_id DataCloudflareEmailSecurityDomain#integration_id}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.order"></a>

- *Type:* str

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#order DataCloudflareEmailSecurityDomain#order}

---

###### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.search"></a>

- *Type:* str

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#search DataCloudflareEmailSecurityDomain#search}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.status"></a>

- *Type:* str

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#status DataCloudflareEmailSecurityDomain#status}

---

##### `reset_domain_id` <a name="reset_domain_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareEmailSecurityDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareEmailSecurityDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.allowedDeliveryModes">allowed_delivery_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference">DataCloudflareEmailSecurityDomainAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dmarcStatus">dmarc_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dropDispositions">drop_dispositions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.emailsProcessed">emails_processed</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference">DataCloudflareEmailSecurityDomainFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.inboxProvider">inbox_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.ipRestrictions">ip_restrictions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lookbackHops">lookback_hops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.o365TenantId">o365_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsInbound">require_tls_inbound</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsOutbound">require_tls_outbound</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.spfStatus">spf_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.transport">transport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allowed_delivery_modes`<sup>Required</sup> <a name="allowed_delivery_modes" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.allowedDeliveryModes"></a>

```python
allowed_delivery_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.authorization"></a>

```python
authorization: DataCloudflareEmailSecurityDomainAuthorizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference">DataCloudflareEmailSecurityDomainAuthorizationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dmarc_status`<sup>Required</sup> <a name="dmarc_status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dmarcStatus"></a>

```python
dmarc_status: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `drop_dispositions`<sup>Required</sup> <a name="drop_dispositions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dropDispositions"></a>

```python
drop_dispositions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `emails_processed`<sup>Required</sup> <a name="emails_processed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.emailsProcessed"></a>

```python
emails_processed: DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filter"></a>

```python
filter: DataCloudflareEmailSecurityDomainFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference">DataCloudflareEmailSecurityDomainFilterOutputReference</a>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inbox_provider`<sup>Required</sup> <a name="inbox_provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.inboxProvider"></a>

```python
inbox_provider: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `ip_restrictions`<sup>Required</sup> <a name="ip_restrictions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.ipRestrictions"></a>

```python
ip_restrictions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `lookback_hops`<sup>Required</sup> <a name="lookback_hops" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lookbackHops"></a>

```python
lookback_hops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `o365_tenant_id`<sup>Required</sup> <a name="o365_tenant_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.o365TenantId"></a>

```python
o365_tenant_id: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_tls_inbound`<sup>Required</sup> <a name="require_tls_inbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsInbound"></a>

```python
require_tls_inbound: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_tls_outbound`<sup>Required</sup> <a name="require_tls_outbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsOutbound"></a>

```python
require_tls_outbound: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `spf_status`<sup>Required</sup> <a name="spf_status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.spfStatus"></a>

```python
spf_status: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.transport"></a>

```python
transport: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareEmailSecurityDomainFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityDomainAuthorization <a name="DataCloudflareEmailSecurityDomainAuthorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization()
```


### DataCloudflareEmailSecurityDomainConfig <a name="DataCloudflareEmailSecurityDomainConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  domain_id: str = None,
  filter: DataCloudflareEmailSecurityDomainFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.domainId">domain_id</a></code> | <code>str</code> | Domain identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#account_id DataCloudflareEmailSecurityDomain#account_id}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Domain identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain_id DataCloudflareEmailSecurityDomain#domain_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.filter"></a>

```python
filter: DataCloudflareEmailSecurityDomainFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}.

---

### DataCloudflareEmailSecurityDomainEmailsProcessed <a name="DataCloudflareEmailSecurityDomainEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed()
```


### DataCloudflareEmailSecurityDomainFilter <a name="DataCloudflareEmailSecurityDomainFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter(
  active_delivery_mode: str = None,
  allowed_delivery_mode: str = None,
  direction: str = None,
  domain: typing.List[str] = None,
  integration_id: str = None,
  order: str = None,
  search: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.activeDeliveryMode">active_delivery_mode</a></code> | <code>str</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.allowedDeliveryMode">allowed_delivery_mode</a></code> | <code>str</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.direction">direction</a></code> | <code>str</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.domain">domain</a></code> | <code>typing.List[str]</code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.integrationId">integration_id</a></code> | <code>str</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.order">order</a></code> | <code>str</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.search">search</a></code> | <code>str</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.status">status</a></code> | <code>str</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `active_delivery_mode`<sup>Optional</sup> <a name="active_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.activeDeliveryMode"></a>

```python
active_delivery_mode: str
```

- *Type:* str

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#active_delivery_mode DataCloudflareEmailSecurityDomain#active_delivery_mode}

---

##### `allowed_delivery_mode`<sup>Optional</sup> <a name="allowed_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.allowedDeliveryMode"></a>

```python
allowed_delivery_mode: str
```

- *Type:* str

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#allowed_delivery_mode DataCloudflareEmailSecurityDomain#allowed_delivery_mode}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#direction DataCloudflareEmailSecurityDomain#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.domain"></a>

```python
domain: typing.List[str]
```

- *Type:* typing.List[str]

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain DataCloudflareEmailSecurityDomain#domain}

---

##### `integration_id`<sup>Optional</sup> <a name="integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#integration_id DataCloudflareEmailSecurityDomain#integration_id}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#order DataCloudflareEmailSecurityDomain#order}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#search DataCloudflareEmailSecurityDomain#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.status"></a>

```python
status: str
```

- *Type:* str

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#status DataCloudflareEmailSecurityDomain#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityDomainAuthorizationOutputReference <a name="DataCloudflareEmailSecurityDomainAuthorizationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.authorized">authorized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization">DataCloudflareEmailSecurityDomainAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.authorized"></a>

```python
authorized: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareEmailSecurityDomainAuthorization
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization">DataCloudflareEmailSecurityDomainAuthorization</a>

---


### DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference <a name="DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed">total_emails_processed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">total_emails_processed_previous</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed">DataCloudflareEmailSecurityDomainEmailsProcessed</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `total_emails_processed`<sup>Required</sup> <a name="total_emails_processed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```python
total_emails_processed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_emails_processed_previous`<sup>Required</sup> <a name="total_emails_processed_previous" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```python
total_emails_processed_previous: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareEmailSecurityDomainEmailsProcessed
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed">DataCloudflareEmailSecurityDomainEmailsProcessed</a>

---


### DataCloudflareEmailSecurityDomainFilterOutputReference <a name="DataCloudflareEmailSecurityDomainFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domain

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetActiveDeliveryMode">reset_active_delivery_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetAllowedDeliveryMode">reset_allowed_delivery_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetIntegrationId">reset_integration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active_delivery_mode` <a name="reset_active_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetActiveDeliveryMode"></a>

```python
def reset_active_delivery_mode() -> None
```

##### `reset_allowed_delivery_mode` <a name="reset_allowed_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetAllowedDeliveryMode"></a>

```python
def reset_allowed_delivery_mode() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_integration_id` <a name="reset_integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetIntegrationId"></a>

```python
def reset_integration_id() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryModeInput">active_delivery_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryModeInput">allowed_delivery_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domainInput">domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryMode">active_delivery_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryMode">allowed_delivery_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domain">domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_delivery_mode_input`<sup>Optional</sup> <a name="active_delivery_mode_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryModeInput"></a>

```python
active_delivery_mode_input: str
```

- *Type:* str

---

##### `allowed_delivery_mode_input`<sup>Optional</sup> <a name="allowed_delivery_mode_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryModeInput"></a>

```python
allowed_delivery_mode_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domainInput"></a>

```python
domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `active_delivery_mode`<sup>Required</sup> <a name="active_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryMode"></a>

```python
active_delivery_mode: str
```

- *Type:* str

---

##### `allowed_delivery_mode`<sup>Required</sup> <a name="allowed_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryMode"></a>

```python
allowed_delivery_mode: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domain"></a>

```python
domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareEmailSecurityDomainFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---




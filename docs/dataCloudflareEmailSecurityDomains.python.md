# `dataCloudflareEmailSecurityDomains` Submodule <a name="`dataCloudflareEmailSecurityDomains` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityDomains <a name="DataCloudflareEmailSecurityDomains" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains cloudflare_email_security_domains}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains(
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
  active_delivery_mode: str = None,
  allowed_delivery_mode: str = None,
  direction: str = None,
  domain: typing.List[str] = None,
  integration_id: str = None,
  max_items: typing.Union[int, float] = None,
  order: str = None,
  search: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.activeDeliveryMode">active_delivery_mode</a></code> | <code>str</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.allowedDeliveryMode">allowed_delivery_mode</a></code> | <code>str</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.direction">direction</a></code> | <code>str</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.domain">domain</a></code> | <code>typing.List[str]</code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.integrationId">integration_id</a></code> | <code>str</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.order">order</a></code> | <code>str</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.search">search</a></code> | <code>str</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.status">status</a></code> | <code>str</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#account_id DataCloudflareEmailSecurityDomains#account_id}

---

##### `active_delivery_mode`<sup>Optional</sup> <a name="active_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.activeDeliveryMode"></a>

- *Type:* str

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#active_delivery_mode DataCloudflareEmailSecurityDomains#active_delivery_mode}

---

##### `allowed_delivery_mode`<sup>Optional</sup> <a name="allowed_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.allowedDeliveryMode"></a>

- *Type:* str

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#allowed_delivery_mode DataCloudflareEmailSecurityDomains#allowed_delivery_mode}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.direction"></a>

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#direction DataCloudflareEmailSecurityDomains#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.domain"></a>

- *Type:* typing.List[str]

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#domain DataCloudflareEmailSecurityDomains#domain}

---

##### `integration_id`<sup>Optional</sup> <a name="integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.integrationId"></a>

- *Type:* str

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#integration_id DataCloudflareEmailSecurityDomains#integration_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#max_items DataCloudflareEmailSecurityDomains#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.order"></a>

- *Type:* str

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#order DataCloudflareEmailSecurityDomains#order}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.search"></a>

- *Type:* str

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#search DataCloudflareEmailSecurityDomains#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.status"></a>

- *Type:* str

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#status DataCloudflareEmailSecurityDomains#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode">reset_active_delivery_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode">reset_allowed_delivery_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId">reset_integration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_active_delivery_mode` <a name="reset_active_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode"></a>

```python
def reset_active_delivery_mode() -> None
```

##### `reset_allowed_delivery_mode` <a name="reset_allowed_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode"></a>

```python
def reset_allowed_delivery_mode() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_integration_id` <a name="reset_integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId"></a>

```python
def reset_integration_id() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareEmailSecurityDomains to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareEmailSecurityDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput">active_delivery_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput">allowed_delivery_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput">domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode">active_delivery_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode">allowed_delivery_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain">domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result"></a>

```python
result: DataCloudflareEmailSecurityDomainsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `active_delivery_mode_input`<sup>Optional</sup> <a name="active_delivery_mode_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput"></a>

```python
active_delivery_mode_input: str
```

- *Type:* str

---

##### `allowed_delivery_mode_input`<sup>Optional</sup> <a name="allowed_delivery_mode_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput"></a>

```python
allowed_delivery_mode_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput"></a>

```python
domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `active_delivery_mode`<sup>Required</sup> <a name="active_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode"></a>

```python
active_delivery_mode: str
```

- *Type:* str

---

##### `allowed_delivery_mode`<sup>Required</sup> <a name="allowed_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode"></a>

```python
allowed_delivery_mode: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain"></a>

```python
domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityDomainsConfig <a name="DataCloudflareEmailSecurityDomainsConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  active_delivery_mode: str = None,
  allowed_delivery_mode: str = None,
  direction: str = None,
  domain: typing.List[str] = None,
  integration_id: str = None,
  max_items: typing.Union[int, float] = None,
  order: str = None,
  search: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode">active_delivery_mode</a></code> | <code>str</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode">allowed_delivery_mode</a></code> | <code>str</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction">direction</a></code> | <code>str</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain">domain</a></code> | <code>typing.List[str]</code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId">integration_id</a></code> | <code>str</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order">order</a></code> | <code>str</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search">search</a></code> | <code>str</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status">status</a></code> | <code>str</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#account_id DataCloudflareEmailSecurityDomains#account_id}

---

##### `active_delivery_mode`<sup>Optional</sup> <a name="active_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode"></a>

```python
active_delivery_mode: str
```

- *Type:* str

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#active_delivery_mode DataCloudflareEmailSecurityDomains#active_delivery_mode}

---

##### `allowed_delivery_mode`<sup>Optional</sup> <a name="allowed_delivery_mode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode"></a>

```python
allowed_delivery_mode: str
```

- *Type:* str

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#allowed_delivery_mode DataCloudflareEmailSecurityDomains#allowed_delivery_mode}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#direction DataCloudflareEmailSecurityDomains#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain"></a>

```python
domain: typing.List[str]
```

- *Type:* typing.List[str]

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#domain DataCloudflareEmailSecurityDomains#domain}

---

##### `integration_id`<sup>Optional</sup> <a name="integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#integration_id DataCloudflareEmailSecurityDomains#integration_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#max_items DataCloudflareEmailSecurityDomains#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#order DataCloudflareEmailSecurityDomains#order}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#search DataCloudflareEmailSecurityDomains#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#status DataCloudflareEmailSecurityDomains#status}

---

### DataCloudflareEmailSecurityDomainsResult <a name="DataCloudflareEmailSecurityDomainsResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult()
```


### DataCloudflareEmailSecurityDomainsResultAuthorization <a name="DataCloudflareEmailSecurityDomainsResultAuthorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization()
```


### DataCloudflareEmailSecurityDomainsResultEmailsProcessed <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference <a name="DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized">authorized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized"></a>

```python
authorized: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareEmailSecurityDomainsResultAuthorization
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a>

---


### DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed">total_emails_processed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">total_emails_processed_previous</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `total_emails_processed`<sup>Required</sup> <a name="total_emails_processed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```python
total_emails_processed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_emails_processed_previous`<sup>Required</sup> <a name="total_emails_processed_previous" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```python
total_emails_processed_previous: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareEmailSecurityDomainsResultEmailsProcessed
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a>

---


### DataCloudflareEmailSecurityDomainsResultList <a name="DataCloudflareEmailSecurityDomainsResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareEmailSecurityDomainsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareEmailSecurityDomainsResultOutputReference <a name="DataCloudflareEmailSecurityDomainsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_email_security_domains

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes">allowed_delivery_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus">dmarc_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions">drop_dispositions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed">emails_processed</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider">inbox_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions">ip_restrictions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops">lookback_hops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId">o365_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound">require_tls_inbound</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound">require_tls_outbound</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus">spf_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport">transport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_delivery_modes`<sup>Required</sup> <a name="allowed_delivery_modes" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes"></a>

```python
allowed_delivery_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization"></a>

```python
authorization: DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dmarc_status`<sup>Required</sup> <a name="dmarc_status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus"></a>

```python
dmarc_status: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `drop_dispositions`<sup>Required</sup> <a name="drop_dispositions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions"></a>

```python
drop_dispositions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `emails_processed`<sup>Required</sup> <a name="emails_processed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed"></a>

```python
emails_processed: DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inbox_provider`<sup>Required</sup> <a name="inbox_provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider"></a>

```python
inbox_provider: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `ip_restrictions`<sup>Required</sup> <a name="ip_restrictions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions"></a>

```python
ip_restrictions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `lookback_hops`<sup>Required</sup> <a name="lookback_hops" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops"></a>

```python
lookback_hops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `o365_tenant_id`<sup>Required</sup> <a name="o365_tenant_id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId"></a>

```python
o365_tenant_id: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_tls_inbound`<sup>Required</sup> <a name="require_tls_inbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound"></a>

```python
require_tls_inbound: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_tls_outbound`<sup>Required</sup> <a name="require_tls_outbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound"></a>

```python
require_tls_outbound: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `spf_status`<sup>Required</sup> <a name="spf_status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus"></a>

```python
spf_status: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport"></a>

```python
transport: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareEmailSecurityDomainsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a>

---




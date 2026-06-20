# `dataCloudflareZeroTrustAccessAiControlsMcpPortals` Submodule <a name="`dataCloudflareZeroTrustAccessAiControlsMcpPortals` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpPortals <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortals" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals cloudflare_zero_trust_access_ai_controls_mcp_portals}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  max_items: typing.Union[int, float] = None,
  search: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortals#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.search">search</a></code> | <code>str</code> | Search by id, name, hostname. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortals#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#max_items DataCloudflareZeroTrustAccessAiControlsMcpPortals#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.Initializer.parameter.search"></a>

- *Type:* str

Search by id, name, hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#search DataCloudflareZeroTrustAccessAiControlsMcpPortals#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.resetSearch">reset_search</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.resetSearch"></a>

```python
def reset_search() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustAccessAiControlsMcpPortals resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustAccessAiControlsMcpPortals resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpPortals to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpPortals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpPortals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.search">search</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.result"></a>

```python
result: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.search"></a>

```python
search: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortals.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  max_items: typing.Union[int, float] = None,
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortals#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.search">search</a></code> | <code>str</code> | Search by id, name, hostname. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#account_id DataCloudflareZeroTrustAccessAiControlsMcpPortals#account_id}.

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#max_items DataCloudflareZeroTrustAccessAiControlsMcpPortals#max_items}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Search by id, name, hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_portals#search DataCloudflareZeroTrustAccessAiControlsMcpPortals#search}

---

### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult()
```


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers()
```


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails()
```


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts()
```


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.allowCodeMode">allow_code_mode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.secureWebGateway">secure_web_gateway</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.servers">servers</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_code_mode`<sup>Required</sup> <a name="allow_code_mode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.allowCodeMode"></a>

```python
allow_code_mode: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secure_web_gateway`<sup>Required</sup> <a name="secure_web_gateway" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.secureWebGateway"></a>

```python
secure_web_gateway: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.servers"></a>

```python
servers: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResult</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.cause">cause</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.isUpstream">is_upstream</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.mcpCode">mcp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.retryable">retryable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cause`<sup>Required</sup> <a name="cause" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.cause"></a>

```python
cause: str
```

- *Type:* str

---

##### `is_upstream`<sup>Required</sup> <a name="is_upstream" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.isUpstream"></a>

```python
is_upstream: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `mcp_code`<sup>Required</sup> <a name="mcp_code" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.mcpCode"></a>

```python
mcp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retryable`<sup>Required</sup> <a name="retryable" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.retryable"></a>

```python
retryable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetails</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.defaultDisabled">default_disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.errorDetails">error_details</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.isSharedOauthCallbackEnabled">is_shared_oauth_callback_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.lastSuccessfulSync">last_successful_sync</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.lastSynced">last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.onBehalf">on_behalf</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.prompts">prompts</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.secureWebGateway">secure_web_gateway</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.tools">tools</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.updatedPrompts">updated_prompts</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.updatedTools">updated_tools</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `default_disabled`<sup>Required</sup> <a name="default_disabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.defaultDisabled"></a>

```python
default_disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.errorDetails"></a>

```python
error_details: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersErrorDetailsOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_shared_oauth_callback_enabled`<sup>Required</sup> <a name="is_shared_oauth_callback_enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.isSharedOauthCallbackEnabled"></a>

```python
is_shared_oauth_callback_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_successful_sync`<sup>Required</sup> <a name="last_successful_sync" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.lastSuccessfulSync"></a>

```python
last_successful_sync: str
```

- *Type:* str

---

##### `last_synced`<sup>Required</sup> <a name="last_synced" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.lastSynced"></a>

```python
last_synced: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_behalf`<sup>Required</sup> <a name="on_behalf" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.onBehalf"></a>

```python
on_behalf: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.prompts"></a>

```python
prompts: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `secure_web_gateway`<sup>Required</sup> <a name="secure_web_gateway" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.secureWebGateway"></a>

```python
secure_web_gateway: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.tools"></a>

```python
tools: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `updated_prompts`<sup>Required</sup> <a name="updated_prompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.updatedPrompts"></a>

```python
updated_prompts: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList</a>

---

##### `updated_tools`<sup>Required</sup> <a name="updated_tools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.updatedTools"></a>

```python
updated_tools: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServers</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.portalAlias">portal_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.portalDescription">portal_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.serverAlias">server_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.serverDescription">server_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `portal_alias`<sup>Required</sup> <a name="portal_alias" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.portalAlias"></a>

```python
portal_alias: str
```

- *Type:* str

---

##### `portal_description`<sup>Required</sup> <a name="portal_description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.portalDescription"></a>

```python
portal_description: str
```

- *Type:* str

---

##### `server_alias`<sup>Required</sup> <a name="server_alias" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.serverAlias"></a>

```python
server_alias: str
```

- *Type:* str

---

##### `server_description`<sup>Required</sup> <a name="server_description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.serverDescription"></a>

```python
server_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPromptsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedPrompts</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_portals

dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.portalAlias">portal_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.portalDescription">portal_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.serverAlias">server_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.serverDescription">server_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `portal_alias`<sup>Required</sup> <a name="portal_alias" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.portalAlias"></a>

```python
portal_alias: str
```

- *Type:* str

---

##### `portal_description`<sup>Required</sup> <a name="portal_description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.portalDescription"></a>

```python
portal_description: str
```

- *Type:* str

---

##### `server_alias`<sup>Required</sup> <a name="server_alias" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.serverAlias"></a>

```python
server_alias: str
```

- *Type:* str

---

##### `server_description`<sup>Required</sup> <a name="server_description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.serverDescription"></a>

```python
server_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedToolsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpPortals.DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools">DataCloudflareZeroTrustAccessAiControlsMcpPortalsResultServersUpdatedTools</a>

---




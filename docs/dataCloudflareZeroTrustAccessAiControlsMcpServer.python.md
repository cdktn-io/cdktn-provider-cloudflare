# `dataCloudflareZeroTrustAccessAiControlsMcpServer` Submodule <a name="`dataCloudflareZeroTrustAccessAiControlsMcpServer` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServer <a name="DataCloudflareZeroTrustAccessAiControlsMcpServer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer(
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
  filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id">id</a></code> | <code>str</code> | server id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id"></a>

- *Type:* str

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#id DataCloudflareZeroTrustAccessAiControlsMcpServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.putFilter"></a>

```python
def put_filter(
  search: str = None
) -> None
```

###### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.putFilter.parameter.search"></a>

- *Type:* str

Search by id, name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#search DataCloudflareZeroTrustAccessAiControlsMcpServer#search}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.errorDetails">error_details</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.isSharedOauthCallbackEnabled">is_shared_oauth_callback_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSuccessfulSync">last_successful_sync</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSynced">last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.prompts">prompts</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.secureWebGateway">secure_web_gateway</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tools">tools</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.updatedPrompts">updated_prompts</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList">DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.updatedTools">updated_tools</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList">DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.errorDetails"></a>

```python
error_details: DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filter"></a>

```python
filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `is_shared_oauth_callback_enabled`<sup>Required</sup> <a name="is_shared_oauth_callback_enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.isSharedOauthCallbackEnabled"></a>

```python
is_shared_oauth_callback_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_successful_sync`<sup>Required</sup> <a name="last_successful_sync" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSuccessfulSync"></a>

```python
last_successful_sync: str
```

- *Type:* str

---

##### `last_synced`<sup>Required</sup> <a name="last_synced" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSynced"></a>

```python
last_synced: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.prompts"></a>

```python
prompts: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `secure_web_gateway`<sup>Required</sup> <a name="secure_web_gateway" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.secureWebGateway"></a>

```python
secure_web_gateway: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tools"></a>

```python
tools: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `updated_prompts`<sup>Required</sup> <a name="updated_prompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.updatedPrompts"></a>

```python
updated_prompts: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList">DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList</a>

---

##### `updated_tools`<sup>Required</sup> <a name="updated_tools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.updatedTools"></a>

```python
updated_tools: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList">DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareZeroTrustAccessAiControlsMcpServerFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServerConfig <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.id">id</a></code> | <code>str</code> | server id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.filter"></a>

```python
filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#id DataCloudflareZeroTrustAccessAiControlsMcpServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails()
```


### DataCloudflareZeroTrustAccessAiControlsMcpServerFilter <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter(
  search: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter.property.search">search</a></code> | <code>str</code> | Search by id, name. |

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter.property.search"></a>

```python
search: str
```

- *Type:* str

Search by id, name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#search DataCloudflareZeroTrustAccessAiControlsMcpServer#search}

---

### DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts()
```


### DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.cause">cause</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.isUpstream">is_upstream</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.mcpCode">mcp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.retryable">retryable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails">DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cause`<sup>Required</sup> <a name="cause" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.cause"></a>

```python
cause: str
```

- *Type:* str

---

##### `is_upstream`<sup>Required</sup> <a name="is_upstream" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.isUpstream"></a>

```python
is_upstream: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `mcp_code`<sup>Required</sup> <a name="mcp_code" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.mcpCode"></a>

```python
mcp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retryable`<sup>Required</sup> <a name="retryable" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.retryable"></a>

```python
retryable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails">DataCloudflareZeroTrustAccessAiControlsMcpServerErrorDetails</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resetSearch">reset_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_search` <a name="reset_search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareZeroTrustAccessAiControlsMcpServerFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts">DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPromptsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts">DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedPrompts</a>

---


### DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_access_ai_controls_mcp_server

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools">DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedToolsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools">DataCloudflareZeroTrustAccessAiControlsMcpServerUpdatedTools</a>

---




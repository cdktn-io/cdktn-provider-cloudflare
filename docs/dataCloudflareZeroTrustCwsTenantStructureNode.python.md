# `dataCloudflareZeroTrustCwsTenantStructureNode` Submodule <a name="`dataCloudflareZeroTrustCwsTenantStructureNode` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNode <a name="DataCloudflareZeroTrustCwsTenantStructureNode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structure_node

dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode(
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
  structure_id: str,
  filter: DataCloudflareZeroTrustCwsTenantStructureNodeFilter = None,
  node_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.structureId">structure_id</a></code> | <code>str</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.nodeId">node_id</a></code> | <code>str</code> | ID of the node to retrieve. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#account_id DataCloudflareZeroTrustCwsTenantStructureNode#account_id}

---

##### `structure_id`<sup>Required</sup> <a name="structure_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.structureId"></a>

- *Type:* str

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#structure_id DataCloudflareZeroTrustCwsTenantStructureNode#structure_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}.

---

##### `node_id`<sup>Optional</sup> <a name="node_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.Initializer.parameter.nodeId"></a>

- *Type:* str

ID of the node to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_id DataCloudflareZeroTrustCwsTenantStructureNode#node_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetNodeId">reset_node_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter"></a>

```python
def put_filter(
  direction: str = None,
  name: str = None,
  native_id: str = None,
  node_kind: str = None,
  order: str = None,
  parent: str = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter.parameter.direction"></a>

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#direction DataCloudflareZeroTrustCwsTenantStructureNode#direction}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter.parameter.name"></a>

- *Type:* str

Filter by node name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#name DataCloudflareZeroTrustCwsTenantStructureNode#name}

---

###### `native_id`<sup>Optional</sup> <a name="native_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter.parameter.nativeId"></a>

- *Type:* str

Filter by exact cloud-native identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#native_id DataCloudflareZeroTrustCwsTenantStructureNode#native_id}

---

###### `node_kind`<sup>Optional</sup> <a name="node_kind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter.parameter.nodeKind"></a>

- *Type:* str

Filter by exact node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_kind DataCloudflareZeroTrustCwsTenantStructureNode#node_kind}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter.parameter.order"></a>

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#order DataCloudflareZeroTrustCwsTenantStructureNode#order}

---

###### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.putFilter.parameter.parent"></a>

- *Type:* str

Filter by exact parent native ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#parent DataCloudflareZeroTrustCwsTenantStructureNode#parent}

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_node_id` <a name="reset_node_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.resetNodeId"></a>

```python
def reset_node_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structure_node

dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structure_node

dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structure_node

dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structure_node

dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustCwsTenantStructureNode to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustCwsTenantStructureNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsTenantStructureNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference">DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nativeId">native_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeKind">node_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeIdInput">node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureIdInput">structure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureId">structure_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filter"></a>

```python
filter: DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference">DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `native_id`<sup>Required</sup> <a name="native_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nativeId"></a>

```python
native_id: str
```

- *Type:* str

---

##### `node_kind`<sup>Required</sup> <a name="node_kind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeKind"></a>

```python
node_kind: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareZeroTrustCwsTenantStructureNodeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

---

##### `node_id_input`<sup>Optional</sup> <a name="node_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeIdInput"></a>

```python
node_id_input: str
```

- *Type:* str

---

##### `structure_id_input`<sup>Optional</sup> <a name="structure_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureIdInput"></a>

```python
structure_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `structure_id`<sup>Required</sup> <a name="structure_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.structureId"></a>

```python
structure_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNode.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodeConfig <a name="DataCloudflareZeroTrustCwsTenantStructureNodeConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structure_node

dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  structure_id: str,
  filter: DataCloudflareZeroTrustCwsTenantStructureNodeFilter = None,
  node_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.structureId">structure_id</a></code> | <code>str</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.nodeId">node_id</a></code> | <code>str</code> | ID of the node to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#account_id DataCloudflareZeroTrustCwsTenantStructureNode#account_id}

---

##### `structure_id`<sup>Required</sup> <a name="structure_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.structureId"></a>

```python
structure_id: str
```

- *Type:* str

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#structure_id DataCloudflareZeroTrustCwsTenantStructureNode#structure_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.filter"></a>

```python
filter: DataCloudflareZeroTrustCwsTenantStructureNodeFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#filter DataCloudflareZeroTrustCwsTenantStructureNode#filter}.

---

##### `node_id`<sup>Optional</sup> <a name="node_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeConfig.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

ID of the node to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_id DataCloudflareZeroTrustCwsTenantStructureNode#node_id}

---

### DataCloudflareZeroTrustCwsTenantStructureNodeFilter <a name="DataCloudflareZeroTrustCwsTenantStructureNodeFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structure_node

dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter(
  direction: str = None,
  name: str = None,
  native_id: str = None,
  node_kind: str = None,
  order: str = None,
  parent: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.direction">direction</a></code> | <code>str</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.name">name</a></code> | <code>str</code> | Filter by node name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nativeId">native_id</a></code> | <code>str</code> | Filter by exact cloud-native identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nodeKind">node_kind</a></code> | <code>str</code> | Filter by exact node kind. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.order">order</a></code> | <code>str</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.parent">parent</a></code> | <code>str</code> | Filter by exact parent native ID. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#direction DataCloudflareZeroTrustCwsTenantStructureNode#direction}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Filter by node name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#name DataCloudflareZeroTrustCwsTenantStructureNode#name}

---

##### `native_id`<sup>Optional</sup> <a name="native_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nativeId"></a>

```python
native_id: str
```

- *Type:* str

Filter by exact cloud-native identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#native_id DataCloudflareZeroTrustCwsTenantStructureNode#native_id}

---

##### `node_kind`<sup>Optional</sup> <a name="node_kind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.nodeKind"></a>

```python
node_kind: str
```

- *Type:* str

Filter by exact node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#node_kind DataCloudflareZeroTrustCwsTenantStructureNode#node_kind}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#order DataCloudflareZeroTrustCwsTenantStructureNode#order}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter.property.parent"></a>

```python
parent: str
```

- *Type:* str

Filter by exact parent native ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_node#parent DataCloudflareZeroTrustCwsTenantStructureNode#parent}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference <a name="DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_cws_tenant_structure_node

dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNativeId">reset_native_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNodeKind">reset_node_kind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetParent">reset_parent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_native_id` <a name="reset_native_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNativeId"></a>

```python
def reset_native_id() -> None
```

##### `reset_node_kind` <a name="reset_node_kind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetNodeKind"></a>

```python
def reset_node_kind() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.resetParent"></a>

```python
def reset_parent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeIdInput">native_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKindInput">node_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeId">native_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKind">node_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `native_id_input`<sup>Optional</sup> <a name="native_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeIdInput"></a>

```python
native_id_input: str
```

- *Type:* str

---

##### `node_kind_input`<sup>Optional</sup> <a name="node_kind_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKindInput"></a>

```python
node_kind_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `native_id`<sup>Required</sup> <a name="native_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nativeId"></a>

```python
native_id: str
```

- *Type:* str

---

##### `node_kind`<sup>Required</sup> <a name="node_kind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.nodeKind"></a>

```python
node_kind: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareZeroTrustCwsTenantStructureNodeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNode.DataCloudflareZeroTrustCwsTenantStructureNodeFilter">DataCloudflareZeroTrustCwsTenantStructureNodeFilter</a>

---




# `dataCloudflareZeroTrustTunnelWarpConnectorConfig` Submodule <a name="`dataCloudflareZeroTrustTunnelWarpConnectorConfig` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfigA <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigA" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_warp_connector_config cloudflare_zero_trust_tunnel_warp_connector_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA(
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
  tunnel_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.tunnelId">tunnel_id</a></code> | <code>str</code> | UUID of the tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_warp_connector_config#account_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#account_id}

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.tunnelId"></a>

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_warp_connector_config#tunnel_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#tunnel_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isConstruct"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnectorConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustTunnelWarpConnectorConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_warp_connector_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnectorConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion">configuration_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.haMode">ha_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.config"></a>

```python
config: DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a>

---

##### `configuration_version`<sup>Required</sup> <a name="configuration_version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion"></a>

```python
configuration_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `ha_mode`<sup>Required</sup> <a name="ha_mode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.haMode"></a>

```python
ha_mode: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  tunnel_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId">tunnel_id</a></code> | <code>str</code> | UUID of the tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_warp_connector_config#account_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#account_id}

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_warp_connector_config#tunnel_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#tunnel_id}

---

### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig()
```


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips()
```


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId">fnr_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips">vips</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious">vips_previous</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fnr_id`<sup>Required</sup> <a name="fnr_id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId"></a>

```python
fnr_id: str
```

- *Type:* str

---

##### `vips`<sup>Required</sup> <a name="vips" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips"></a>

```python
vips: DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList</a>

---

##### `vips_previous`<sup>Required</sup> <a name="vips_previous" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious"></a>

```python
vips_previous: DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector_config

dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>

---




# `zeroTrustTunnelWarpConnectorConfig` Submodule <a name="`zeroTrustTunnelWarpConnectorConfig` Submodule" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelWarpConnectorConfigA <a name="ZeroTrustTunnelWarpConnectorConfigA" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config cloudflare_zero_trust_tunnel_warp_connector_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA(
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
  ha_mode: str,
  tunnel_id: str,
  config: ZeroTrustTunnelWarpConnectorConfigConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.haMode">ha_mode</a></code> | <code>str</code> | High-availability mode for the WARP Connector tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.tunnelId">tunnel_id</a></code> | <code>str</code> | UUID of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a></code> | Provider-specific configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#account_id ZeroTrustTunnelWarpConnectorConfigA#account_id}

---

##### `ha_mode`<sup>Required</sup> <a name="ha_mode" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.haMode"></a>

- *Type:* str

High-availability mode for the WARP Connector tunnel.

`none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.
Available values: "none", "disabled", "aws", "local".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#ha_mode ZeroTrustTunnelWarpConnectorConfigA#ha_mode}

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.tunnelId"></a>

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#tunnel_id ZeroTrustTunnelWarpConnectorConfigA#tunnel_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

Provider-specific configuration.

Required shape depends on ha_mode. For `aws`, must contain `fnr_id`. For `local`, must contain `vips`. For `none` and `disabled`, must be empty or omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#config ZeroTrustTunnelWarpConnectorConfigA#config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetConfig">reset_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig"></a>

```python
def put_config(
  fnr_id: str = None,
  vips: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVips] = None,
  vips_previous: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious] = None
) -> None
```

###### `fnr_id`<sup>Optional</sup> <a name="fnr_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig.parameter.fnrId"></a>

- *Type:* str

Floating Network Resource ID — the secondary ENI that is moved between nodes on failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#fnr_id ZeroTrustTunnelWarpConnectorConfigA#fnr_id}

---

###### `vips`<sup>Optional</sup> <a name="vips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig.parameter.vips"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>]

VIPs to assign on the CloudflareWARP interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#vips ZeroTrustTunnelWarpConnectorConfigA#vips}

---

###### `vips_previous`<sup>Optional</sup> <a name="vips_previous" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig.parameter.vipsPrevious"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>]

VIPs to clean up on demotion or version drift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#vips_previous ZeroTrustTunnelWarpConnectorConfigA#vips_previous}

---

##### `reset_config` <a name="reset_config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetConfig"></a>

```python
def reset_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustTunnelWarpConnectorConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustTunnelWarpConnectorConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelWarpConnectorConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference">ZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion">configuration_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haModeInput">ha_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haMode">ha_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.config"></a>

```python
config: ZeroTrustTunnelWarpConnectorConfigConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference">ZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a>

---

##### `configuration_version`<sup>Required</sup> <a name="configuration_version" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion"></a>

```python
configuration_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configInput"></a>

```python
config_input: IResolvable | ZeroTrustTunnelWarpConnectorConfigConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

---

##### `ha_mode_input`<sup>Optional</sup> <a name="ha_mode_input" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haModeInput"></a>

```python
ha_mode_input: str
```

- *Type:* str

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `ha_mode`<sup>Required</sup> <a name="ha_mode" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haMode"></a>

```python
ha_mode: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelWarpConnectorConfigAConfig <a name="ZeroTrustTunnelWarpConnectorConfigAConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  ha_mode: str,
  tunnel_id: str,
  config: ZeroTrustTunnelWarpConnectorConfigConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.haMode">ha_mode</a></code> | <code>str</code> | High-availability mode for the WARP Connector tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId">tunnel_id</a></code> | <code>str</code> | UUID of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a></code> | Provider-specific configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#account_id ZeroTrustTunnelWarpConnectorConfigA#account_id}

---

##### `ha_mode`<sup>Required</sup> <a name="ha_mode" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.haMode"></a>

```python
ha_mode: str
```

- *Type:* str

High-availability mode for the WARP Connector tunnel.

`none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.
Available values: "none", "disabled", "aws", "local".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#ha_mode ZeroTrustTunnelWarpConnectorConfigA#ha_mode}

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#tunnel_id ZeroTrustTunnelWarpConnectorConfigA#tunnel_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.config"></a>

```python
config: ZeroTrustTunnelWarpConnectorConfigConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

Provider-specific configuration.

Required shape depends on ha_mode. For `aws`, must contain `fnr_id`. For `local`, must contain `vips`. For `none` and `disabled`, must be empty or omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#config ZeroTrustTunnelWarpConnectorConfigA#config}

---

### ZeroTrustTunnelWarpConnectorConfigConfig <a name="ZeroTrustTunnelWarpConnectorConfigConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig(
  fnr_id: str = None,
  vips: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVips] = None,
  vips_previous: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.fnrId">fnr_id</a></code> | <code>str</code> | Floating Network Resource ID — the secondary ENI that is moved between nodes on failover. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vips">vips</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>]</code> | VIPs to assign on the CloudflareWARP interface. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vipsPrevious">vips_previous</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>]</code> | VIPs to clean up on demotion or version drift. |

---

##### `fnr_id`<sup>Optional</sup> <a name="fnr_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.fnrId"></a>

```python
fnr_id: str
```

- *Type:* str

Floating Network Resource ID — the secondary ENI that is moved between nodes on failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#fnr_id ZeroTrustTunnelWarpConnectorConfigA#fnr_id}

---

##### `vips`<sup>Optional</sup> <a name="vips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vips"></a>

```python
vips: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVips]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>]

VIPs to assign on the CloudflareWARP interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#vips ZeroTrustTunnelWarpConnectorConfigA#vips}

---

##### `vips_previous`<sup>Optional</sup> <a name="vips_previous" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vipsPrevious"></a>

```python
vips_previous: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>]

VIPs to clean up on demotion or version drift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#vips_previous ZeroTrustTunnelWarpConnectorConfigA#vips_previous}

---

### ZeroTrustTunnelWarpConnectorConfigConfigVips <a name="ZeroTrustTunnelWarpConnectorConfigConfigVips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips(
  address: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips.property.address">address</a></code> | <code>str</code> | Virtual IP address (IPv4 or IPv6). |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips.property.address"></a>

```python
address: str
```

- *Type:* str

Virtual IP address (IPv4 or IPv6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#address ZeroTrustTunnelWarpConnectorConfigA#address}

---

### ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious(
  address: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.property.address">address</a></code> | <code>str</code> | Virtual IP address (IPv4 or IPv6). |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.property.address"></a>

```python
address: str
```

- *Type:* str

Virtual IP address (IPv4 or IPv6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_tunnel_warp_connector_config#address ZeroTrustTunnelWarpConnectorConfigA#address}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustTunnelWarpConnectorConfigConfigOutputReference <a name="ZeroTrustTunnelWarpConnectorConfigConfigOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVips">put_vips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVipsPrevious">put_vips_previous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetFnrId">reset_fnr_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVips">reset_vips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVipsPrevious">reset_vips_previous</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vips` <a name="put_vips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVips"></a>

```python
def put_vips(
  value: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVips]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVips.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>]

---

##### `put_vips_previous` <a name="put_vips_previous" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVipsPrevious"></a>

```python
def put_vips_previous(
  value: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVipsPrevious.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>]

---

##### `reset_fnr_id` <a name="reset_fnr_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetFnrId"></a>

```python
def reset_fnr_id() -> None
```

##### `reset_vips` <a name="reset_vips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVips"></a>

```python
def reset_vips() -> None
```

##### `reset_vips_previous` <a name="reset_vips_previous" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVipsPrevious"></a>

```python
def reset_vips_previous() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips">vips</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList">ZeroTrustTunnelWarpConnectorConfigConfigVipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious">vips_previous</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrIdInput">fnr_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsInput">vips_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPreviousInput">vips_previous_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId">fnr_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vips`<sup>Required</sup> <a name="vips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips"></a>

```python
vips: ZeroTrustTunnelWarpConnectorConfigConfigVipsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList">ZeroTrustTunnelWarpConnectorConfigConfigVipsList</a>

---

##### `vips_previous`<sup>Required</sup> <a name="vips_previous" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious"></a>

```python
vips_previous: ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a>

---

##### `fnr_id_input`<sup>Optional</sup> <a name="fnr_id_input" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrIdInput"></a>

```python
fnr_id_input: str
```

- *Type:* str

---

##### `vips_input`<sup>Optional</sup> <a name="vips_input" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsInput"></a>

```python
vips_input: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVips]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>]

---

##### `vips_previous_input`<sup>Optional</sup> <a name="vips_previous_input" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPreviousInput"></a>

```python
vips_previous_input: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>]

---

##### `fnr_id`<sup>Required</sup> <a name="fnr_id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId"></a>

```python
fnr_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustTunnelWarpConnectorConfigConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsList <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsList" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVips]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>]

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustTunnelWarpConnectorConfigConfigVips
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>]

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_tunnel_warp_connector_config

zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>

---



